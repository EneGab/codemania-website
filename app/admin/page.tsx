"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

interface Submission {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string | null;
  message: string;
  status: string;
  createdAt: string;
}

function DashboardContent() {
  const searchParams = useSearchParams();
  const secret = searchParams.get("secret");

  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState<Submission | null>(null);
  const [filter, setFilter] = useState<"all" | "new" | "read">("all");

  useEffect(() => {
    if (!secret) {
      setLoading(false);
      setError("No secret key provided.");
      return;
    }
    fetch(`/api/admin/submissions?secret=${secret}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.error) {
          setError("Unauthorized. Invalid secret key.");
        } else {
          setSubmissions(data.submissions || []);
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch data.");
        setLoading(false);
      });
  }, [secret]);

  const markAsRead = async (id: string) => {
    await fetch(`/api/admin/submissions?secret=${secret}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status: "read" }),
    });
    setSubmissions((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: "read" } : s))
    );
    if (selected?.id === id) {
      setSelected((prev) => (prev ? { ...prev, status: "read" } : null));
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-[#F4511E] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-gray-500 text-sm">Loading submissions...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="font-bold text-2xl text-red-600 mb-2">Access Denied</h1>
          <p className="text-gray-500 text-sm">{error}</p>
        </div>
      </div>
    );
  }

  const filtered = submissions.filter((s) => {
    if (filter === "new") return s.status === "new";
    if (filter === "read") return s.status === "read";
    return true;
  });

  const newCount = submissions.filter((s) => s.status === "new").length;

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="font-sans font-bold text-3xl text-[#0A0A0A]">Contact Requests</h1>
            <p className="text-gray-500 text-sm mt-1">
              {submissions.length} total • <span className="text-[#F4511E] font-semibold">{newCount} new</span>
            </p>
          </div>
          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full p-1">
            {(["all", "new", "read"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors capitalize ${
                  filter === f ? "bg-[#0A0A0A] text-white" : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {f}
                {f === "new" && newCount > 0 && (
                  <span className="ml-1.5 bg-[#F4511E] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                    {newCount}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-3">
            {filtered.length === 0 ? (
              <div className="bg-white rounded-2xl p-8 text-center border border-gray-100">
                <p className="text-gray-400 text-sm">No submissions found.</p>
              </div>
            ) : (
              filtered.map((s) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setSelected(s);
                    if (s.status === "new") markAsRead(s.id);
                  }}
                  className={`w-full text-left bg-white rounded-2xl p-4 border transition-all hover:shadow-md ${
                    selected?.id === s.id ? "border-[#F4511E] shadow-md" : "border-gray-100"
                  }`}
                >
                  <div className="flex justify-between items-start mb-1">
                    <p className="font-bold text-gray-900">{s.firstName} {s.lastName}</p>
                    {s.status === "new" && <span className="w-2 h-2 bg-[#F4511E] rounded-full" />}
                  </div>
                  <p className="text-xs text-gray-500 truncate">{s.email}</p>
                </button>
              ))
            )}
          </div>
          
          <div className="lg:col-span-2">
            {selected ? (
              <div className="bg-white rounded-2xl p-8 border border-gray-100">
                <h2 className="text-2xl font-bold mb-4">{selected.firstName} {selected.lastName}</h2>
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div><p className="text-gray-400">Email</p><p>{selected.email}</p></div>
                  <div><p className="text-gray-400">Phone</p><p>{selected.phone}</p></div>
                  <div><p className="text-gray-400">Company</p><p>{selected.company || "N/A"}</p></div>
                  <div><p className="text-gray-400">Date</p><p>{new Date(selected.createdAt).toLocaleDateString()}</p></div>
                </div>
                <div className="pt-6 border-t border-gray-100">
                  <p className="text-gray-400 text-sm mb-2">Message</p>
                  <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">{selected.message}</p>
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center bg-white rounded-2xl border border-dashed border-gray-200 p-12">
                <p className="text-gray-400">Select a submission to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DashboardContent />
    </Suspense>
  );
}