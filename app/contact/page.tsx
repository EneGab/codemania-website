"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", company: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong.");
        return;
      }
      setStatus("success");
      setForm({ firstName: "", lastName: "", email: "", company: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection.");
    }
  };

  return (
    <section className="pt-16 pb-20 lg:pt-20 lg:pb-28 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[#F4511E] text-xs">✤</span>
              <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-gray-400">
                Get In Touch
              </span>
            </div>
            <h1
              className="font-sans font-bold text-[#0A0A0A] leading-tight mb-6"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              Let&apos;s Build
              <br />
              Something
              <br />
              Great Together
            </h1>
            <p className="text-gray-500 text-base leading-relaxed mb-10">
              Whether you&apos;re looking to build a new application from
              scratch, modernize legacy systems, or migrate to the cloud,
              our team is ready to help.
            </p>
            <div className="space-y-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Email</p>
                <a href="mailto:info@codemania.com.ng" className="text-[#0A0A0A] font-medium hover:text-[#F4511E] transition-colors">
                  info@codemania.com.ng
                </a>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Nigeria</p>
                <a href="tel:+2347056473519" className="text-[#0A0A0A] font-medium hover:text-[#F4511E] transition-colors">
                  +234 7056473519
                </a>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">United States</p>
                <a href="tel:+17176547234" className="text-[#0A0A0A] font-medium hover:text-[#F4511E] transition-colors">
                  +1 7176547234
                </a>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-gray-50 rounded-3xl p-8">
            <h2 className="font-sans font-bold text-xl text-[#0A0A0A] mb-6">
              Send us a message
            </h2>

            {status === "success" ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-sans font-bold text-xl text-[#0A0A0A] mb-3">
                  Your message has been sent.
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Codemania will get back to you shortly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-sm font-semibold text-[#F4511E] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0A0A0A] focus:outline-none focus:border-[#F4511E] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0A0A0A] focus:outline-none focus:border-[#F4511E] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0A0A0A] focus:outline-none focus:border-[#F4511E] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0A0A0A] focus:outline-none focus:border-[#F4511E] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0A0A0A] focus:outline-none focus:border-[#F4511E] transition-colors resize-none"
                  />
                </div>

                {status === "error" && (
                  <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                    <p className="text-sm text-red-600">{errorMsg}</p>
                  </div>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={status === "loading"}
                  className="w-full bg-[#0A0A0A] text-white font-semibold rounded-full py-4 hover:bg-gray-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}