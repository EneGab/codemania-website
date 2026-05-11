"use client";

import { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    firstName: "", lastName: "", email: "",
    phone: "", company: "", message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");

  const validate = (field: string, value: string): string => {
    switch (field) {
      case "firstName":
      case "lastName":
        if (!value.trim()) return "This field cannot be empty.";
        if (!/^[a-zA-Z\s\-']{2,50}$/.test(value.trim()))
          return "Please enter a valid name.";
        return "";
      case "email":
        if (!value.trim()) return "Email cannot be empty.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return "Please enter a valid email address.";
        return "";
      case "phone":
        if (!value.trim()) return "Phone number cannot be empty.";
        if (!/^[\d\s\+\-\(\)]{7,15}$/.test(value))
          return "Phone number must contain only numbers.";
        return "";
      case "message":
        if (!value.trim()) return "Message cannot be empty.";
        if (value.trim().length < 10)
          return "Message must be at least 10 characters.";
        return "";
      default:
        return "";
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    const error = validate(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async () => {
    const newErrors: FormErrors = {};
    (["firstName", "lastName", "email", "phone", "message"] as const).forEach(
      (field) => {
        const error = validate(field, form[field]);
        if (error) newErrors[field] = error;
      }
    );

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus("loading");
    setServerError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        if (data.errors) {
          setErrors(data.errors);
          setStatus("idle");
        } else {
          setServerError(data.error || "Something went wrong.");
          setStatus("error");
        }
        return;
      }

      setStatus("success");
      setForm({ firstName: "", lastName: "", email: "", phone: "", company: "", message: "" });
      setErrors({});
    } catch {
      setServerError("Network error. Please check your connection.");
      setStatus("error");
    }
  };

  const inputClass = (field: keyof FormErrors) =>
    `w-full bg-white border rounded-xl px-4 py-3 text-sm text-[#0A0A0A] focus:outline-none transition-colors ${
      errors[field]
        ? "border-red-400 focus:border-red-500"
        : "border-gray-200 focus:border-[#F4511E]"
    }`;

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
              <br />Something
              <br />Great Together
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

          {/* Right */}
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
                {/* Name */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-2">
                      First Name <span className="text-[#F4511E]">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className={inputClass("firstName")}
                    />
                    {errors.firstName && (
                      <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-2">
                      Last Name <span className="text-[#F4511E]">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className={inputClass("lastName")}
                    />
                    {errors.lastName && (
                      <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-2">
                    Email Address <span className="text-[#F4511E]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className={inputClass("email")}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-2">
                    Phone Number <span className="text-[#F4511E]">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+234 800 000 0000"
                    className={inputClass("phone")}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Company */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-2">
                    Company <span className="text-gray-300 font-normal normal-case">(optional)</span>
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

                {/* Message */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-2">
                    Message <span className="text-[#F4511E]">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your project..."
                    className={`${inputClass("message")} resize-none`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Server error */}
                {status === "error" && (
                  <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                    <p className="text-sm text-red-600">{serverError}</p>
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
                  ) : "Send Message"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}