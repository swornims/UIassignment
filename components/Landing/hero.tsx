import Image from "next/image";
import Button from "../UI/button";
import heroImage from "../../assets/hero.png";

export default function Hero() {
  return (
    <main className="w-full max-w-6xl mx-auto min-h-fit overflow-hidden">
      <section className="text-center my-20">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
          Revolutionize your fitness club management
        </h1>
        <p className="font-medium text-lg md:text-xl mb-6 md:mb-8">
          with our all-in-one Software as a Solution
        </p>
        <Button link="/book">Book a Demo</Button>
      </section>
      <section className="relative w-full md:w-2/3 h-64 md:h-96 lg:h-128 rounded-t-3xl border-slate-700 shadow-3xl mx-auto border-t-8 border-x-8">
        <Image
          className="rounded-t-3xl"
          src={heroImage}
          alt="hero image of a dashboard"
          fill
        />
      </section>
    </main>
  );
}
