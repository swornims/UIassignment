import { pricingPlans } from "@/map/map";
import PricingCard from "../UI/Card/pricing-card";

export default function Pricing() {
  return (
    <main id="pricing" className="bg-indigo-100 py-20 px-6 md:px-12 lg:px-24">
      <section className="text-center space-y-3 mb-10 md:mb-16 px-2 md:px-4 lg:px-8">
        <span className="text-customColor text-sm md:text-xl">
          Pricing Plans
        </span>
        <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl">
          Choose a plan that suits your business
        </h1>
      </section>
      <section className="flex flex-col lg:flex-row flex-wrap gap-8 items-center justify-center">
        {pricingPlans.map((plan, index) => (
          <PricingCard plan={plan} key={index} />
        ))}
      </section>
    </main>
  );
}
