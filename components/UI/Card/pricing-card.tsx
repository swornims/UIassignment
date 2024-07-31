import Image from "next/image";
import Link from "next/link";

interface PricingCardProps {
  plan: any;
}

export default function PricingCard(props: PricingCardProps) {
  const { plan } = props;
  return (
    <article
      className={`w-full md:w-96 h-fit mx-auto text-center ${plan.bgColor} rounded-2xl shadow-lg hover:outline hover:outline-customColor transition-all`}
    >
      <div className="space-y-3 pt-8 px-8">
        <Image
          src="/pricing.svg"
          className="mx-auto"
          width={50}
          height={50}
          alt="pricing"
        />
        <p className={`font-semibold text-lg ${plan.textColor}`}>{plan.plan}</p>
        <p className={`font-semibold text-5xl ${plan.textColor}`}>
          {plan.price}
        </p>
        <p
          className={`text-slate-500 ${
            plan.textColor === "text-white" ? "text-slate-300" : ""
          }`}
        >
          Billed annually.
        </p>
      </div>
      <ul className={`text-start space-y-3 p-8 ${plan.textColor}`}>
        {plan.features.map((feature: string, index: number) => (
          <li key={index}>
            <Image
              className="inline-block mr-3"
              src="/check-icon.svg"
              alt="check icon"
              width={25}
              height={25}
            />
            {feature}
          </li>
        ))}
      </ul>
      <div
        className={`p-8 rounded-b-2xl w-full flex items-center ${plan.buttonBgColor}`}
      >
        <Link className="w-full" href="/pricing">
          <button className="bg-white border border-customColor text-customColor w-full rounded-md py-2">
            Get Started
          </button>
        </Link>
      </div>
    </article>
  );
}
