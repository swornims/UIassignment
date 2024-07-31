import Faq from "@/components/Landing/faq";
import Feature from "@/components/Landing/feature";
import Hero from "@/components/Landing/hero";
import Pricing from "@/components/Landing/pricing";
import Testimonial from "@/components/Landing/testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <Feature />
      <Testimonial />
      <Pricing />
      <Faq />
    </>
  );
}
