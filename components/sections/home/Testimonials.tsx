import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-5">
            <span className="text-[#F4511E] text-xs">✤</span>
            <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-gray-400">
              Testimonials
            </span>
          </div>
          <h2
            className="font-sans font-bold text-[#0A0A0A]"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
          >
            What Our Clients Say About Us
          </h2>
          <p className="text-gray-500 text-sm mt-4 max-w-md mx-auto leading-relaxed">
            Don&apos;t just take our word for it. Hear what organizations across
            Africa are saying about working with Codemania.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
            <div className="text-[#F4511E] font-sans font-bold text-7xl leading-none mb-6 select-none">
              &ldquo;
            </div>
            <blockquote className="text-[#0A0A0A] text-base lg:text-xl leading-relaxed font-medium mb-8">
              Working with CodeMania was a game-changer for our strategy. They
              didn&apos;t just build our payment platform, they became strategic
              partners, guiding us through technical decisions, regulatory
              challenges. The CBN implementation in transaction speed exceeded
              our expectations.
            </blockquote>
            <div className="flex items-center gap-4">
              <Image
                src="/images/hermoney.jpg"
                alt="Chiemeka Nwosu"
                width={48}
                height={48}
                className="rounded-full object-cover flex-shrink-0 w-12 h-12"
              />
              <div>
                <p className="font-bold text-[#0A0A0A] text-sm">
                  Chiemeka Nwosu
                </p>
                <p className="text-xs text-gray-400">CEO & Founder</p>
              </div>
              <span className="ml-auto text-[#F4511E] text-lg">✦</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}