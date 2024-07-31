import TestimonialSlideShow from "../testimonial-slideshow";

export default function Testimonial() {
  return (
    <main id="testimonials" className="p-6 md:p-16 mx-auto w-full max-w-6xl">
      <section className="text-center space-y-3 mb-10 md:mb-16 px-4 md:px-8">
        <span className="text-customColor text-sm md:text-xl">
          Client Testimonial
        </span>
        <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl">
          Don&apos;t just take our words
        </h1>
      </section>

      <section className="relative w-full overflow-hidden h-auto">
        <TestimonialSlideShow />
      </section>
    </main>
  );
}
