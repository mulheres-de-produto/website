import Link from "next/link";
import Logo from "../public/brand-logo.svg";
import Icons from "../components/Icons";
import Links from "./Links";
import VercelLogo from "../public/powered-by-vercel-2.svg";

export default function Footer() {
  return (
    <footer className="flex flex-col w-full p-20 pb-10 bg-green">
      <div className="flex pb-10 border-b border-solid border-green-500/50 space-x-80">
        <section className="flex flex-col items-center justify-items-center">
          <Link href="/">
            <a className="mb-20">
              <Logo />
            </a>
          </Link>
          <Icons />
        </section>
        <Links />
      </div>
      <div className="flex items-center justify-between mt-12 text-white">
        <span>Copyright © 2022 Mulheres de Produto - All Rights Reserved.</span>
        <a
          href="https://vercel.com/?utm_source=[mulheres-de-produto]&utm_campaign=oss"
          target="_blank"
          rel="noopener noreferrer"
        >
          <VercelLogo />
        </a>
      </div>
    </footer>
  );
}
