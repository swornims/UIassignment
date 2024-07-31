import Image from "next/image";

interface FeatureCardProps {
  feature: any;
}

export default function FeatureCard(props: FeatureCardProps) {
  const { feature } = props;

  return (
    <article className="border gap-3 flex flex-col items-center justify-center border-gray-200 rounded-2xl p-4 w-full max-w-s">
      <Image
        src="/feature-icon.svg"
        width={50}
        height={50}
        alt="feature icon"
      />
      <h3 className="text-lg md:text-xl font-medium text-center">
        {feature.heading}
      </h3>
      <p className="text-center text-sm md:text-base">{feature.content}</p>
    </article>
  );
}
