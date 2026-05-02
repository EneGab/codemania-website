import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Get In Touch",
  description: "Ready to transform your business? Contact CodeMania today.",
};

export default function ContactPage() {
  return (
    <section className="pt-16 pb-20 lg:pt-20 lg:pb-28 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionLabel text="Get In Touch" className="mb-6"  />
            <h1 className="font-display font-bold text-5xl lg:text-6xl text-dark leading-tight mb-6">
              Let&apos;s Build Something Great Together
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              Whether you&apos;re looking to build a new application from scratch, modernize
              legacy systems, or migrate to the cloud, our team is ready to help.
            </p>
            <div className="space-y-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Email</p>
                <a href="mailto:hello@codemania.com" className="text-dark font-medium hover:text-[#F4511E] transition-colors">info@codemania.com.ng</a>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Nigeria</p>
                <a href="tel:+2347056473519" className="text-dark font-medium hover:text-[#F4511E] transition-colors">+234 7056473519</a>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">United States</p>
                <a href="tel:+17176547234" className="text-dark font-medium hover:text-[#F4511E] transition-colors">+1 7176547234</a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8">
            <h2 className="font-display font-bold text-xl text-dark mb-6">Send us a message</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-2">First Name</label>
                  <input type="text" placeholder="John" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark focus:outline-none focus:border-[#F4511E] transition-colors" />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-2">Last Name</label>
                  <input type="text" placeholder="Doe" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark focus:outline-none focus:border-[#F4511E] transition-colors" />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-2">Email Address</label>
                <input type="email" placeholder="john@company.com" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark focus:outline-none focus:border-[#F4511E] transition-colors" />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-2">Company</label>
                <input type="text" placeholder="Your Company" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark focus:outline-none focus:border-[#F4511E] transition-colors" />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-2">Message</label>
                <textarea rows={4} placeholder="Tell us about your project..." className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark focus:outline-none focus:border-[#F4511E] transition-colors resize-none" />
              </div>
              <button className="w-full bg-[#0A0A0A] text-white font-semibold rounded-full py-3.5 hover:bg-gray-800 transition-colors active:scale-[0.98]">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
