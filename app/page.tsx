import Hero from "@/components/sections/home/Hero";
import Stats from "@/components/sections/home/Stats";
import ServicesOverview from "@/components/sections/home/ServicesOverview";
import WhyChooseUs from "@/components/sections/home/WhyChooseUs";
import Methodology from "@/components/sections/home/Methodology";
import TrustedBy from "@/components/sections/home/TrustedBy";
import FeaturedProjects from "@/components/sections/home/FeaturedProjects";
import Testimonials from "@/components/sections/home/Testimonials";
import CTASection from "@/components/sections/shared/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesOverview />
      <WhyChooseUs />
      <Methodology />
      <TrustedBy />
      <FeaturedProjects />
      <Testimonials />
      <CTASection />
    </>
  );
}
