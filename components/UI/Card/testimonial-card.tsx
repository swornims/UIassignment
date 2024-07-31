import Image from "next/image";

interface TestimonialCardProps {
  index: number;
  testimonial: any;
}

export default function TestimonialCard(props: TestimonialCardProps) {
  const { index, testimonial } = props;
  return (
    <article
      key={index}
      className="min-w-full bg-slate-100 flex flex-col md:flex-row gap-8 md:text-start p-8 md:p-16 rounded-3xl"
    >
      <div className="w-full md:w-3/6 flex flex-col items-center">
        <div className="relative size-32">
          <Image
            src={testimonial.authorImg}
            alt={testimonial.author}
            fill
            className="rounded-full"
          />
        </div>
        <p className="font-medium mt-4">{testimonial.author}</p>
        <p>{testimonial.title}</p>
      </div>
      <div className="space-y-2">
        <Image src="/quote.svg" alt="quotes" width={40} height={40} />
        <p>{testimonial.description}</p>
      </div>
    </article>
  );
}
