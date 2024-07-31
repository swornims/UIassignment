import Link from "next/link";

interface UIButtonProps {
  children: React.ReactNode;
  link: string;
}

export default function Button(props: UIButtonProps) {
  const { children, link } = props;

  return (
    <button className="bg-customColor text-white py-2 px-4 rounded-md hover:cursor-pointer">
      <Link href={link}>{children}</Link>
    </button>
  );
}
