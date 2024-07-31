import { faq } from "@/map/map";
import FaqCard from "../UI/Card/faq-card";

export default function Faq() {
  return (
    <main
      id="faq"
      className="px-4 md:px-8 lg:px-24 py-8 md:py-12 lg:py-16 w-full max-w-6xl mx-auto"
    >
      <section className="text-center space-y-3 mb-8 md:mb-12 lg:mb-16 px-2 md:px-4 lg:px-8">
        <span className="text-customColor text-sm md:text-xl">FAQ</span>
        <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl">
          Frequently Asked Questions
        </h1>
      </section>
      <section className="mx-auto space-y-4">
        {faq.map((data, index) => (
          <FaqCard faq={data} key={index} />
        ))}
      </section>
    </main>
  );
}
