import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#3949AB] w-full text-slate-300 py-16 px-8 md:px-16 lg:px-24">
      <section className="flex flex-col lg:flex-row gap-10 lg:gap-20">
        <div className="lg:w-2/5">
          <div className="relative w-32 h-10 md:w-40 md:h-12 lg:w-48 lg:h-12 mb-4">
            <Image src="./gymshala-white.svg" alt="Gymshala logo" fill />
          </div>
          <p>
            Some description goes here... Lorem ipsum dolor sit amet
            consectetur. Maecenas iaculis congue elementum cras ante. Odio
            tincidunt tempor semper sit eget tempus. Eget quam ipsum gravida
            sed. Facilisi sit odio imperdiet mauris nibh commodo mi a.
          </p>
        </div>
        <div>
          <h3 className="text-lg text-white mb-4">Quick Links</h3>
          <article>
            <ul className="grid grid-cols-2 gap-3 gap-x-20">
              <li>
                <Link href="#featured">Features</Link>
              </li>
              <li>
                <Link href="#pricing">Pricing</Link>
              </li>
              <li>
                <Link href="#faq">FAQ</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
              <li>
                <Link href="/privacypolicy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/tos">Terms of Service</Link>
              </li>
            </ul>
          </article>
        </div>
        <div>
          <h3 className="text-lg text-white mb-4">Need any support?</h3>
          <p className="text-sm">support@gymshala.com</p>
          <div className="mt-4">
            <p className="mb-2">Follow us</p>
            <div className="flex gap-2 items-center">
              <div className="rounded-full bg-slate-800 w-7 h-7 flex items-center justify-center">
                <p className="text-center">I</p>
              </div>
              <div className="rounded-full bg-slate-800 w-7 h-7 flex items-center justify-center">
                <p className="text-center">F</p>
              </div>
              <div className="rounded-full bg-slate-800 w-7 h-7 flex items-center justify-center">
                <p className="text-center">T</p>
              </div>
              <div className="rounded-full bg-slate-800 w-7 h-7 flex items-center justify-center">
                <p className="text-center">G</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="my-8" />
      <p className="text-center text-sm">
        © Copyright 2024. All Rights Reserved by Gymshala
      </p>
    </footer>
  );
}
