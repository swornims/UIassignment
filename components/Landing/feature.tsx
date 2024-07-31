import { features } from "@/map/map";
import FeatureCard from "../UI/Card/feature-card";

export default function Feature() {
  return (
    <main id="features" className="p-6 md:p-12 lg:p-24">
      <section className="text-center space-y-3 mb-10 md:mb-16 lg:mb-20 px-4 md:px-8">
        <span className="text-customColor text-sm md:text-xl">Features</span>
        <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl">
          Simplify Management
        </h1>
        <p className="text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur. Bibendum nisl feugiat nulla
          duis nulla gravida. Malesuada <br className="hidden md:block" /> velit
          mauris accumsan malesuada placerat nisl viverra.
        </p>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {features.map((feature, index) => (
          <FeatureCard feature={feature} key={index} />
        ))}
      </section>
    </main>
  );
}
