import Link from "next/link";
import Logo from "../public/brand-logo.svg";
import Icons from "../components/Icons";
import Links from "./Links";
import VercelLogo from "../public/powered-by-vercel-2.svg";

export default function Footer() {
  return (
    <footer className="flex flex-col p-20 pt-0 pb-10 laptop:pt-20 bg-green">
      <div className="flex flex-col pb-10 border-b border-solid laptop:flex-row border-green-500/50">
        <section className="flex flex-col items-center order-2 laptop:order-1 justify-items-center">
          <Link href="/">
            <a className="mb-10 laptop:mb-20">
              <Logo />
            </a>
          </Link>
          <Icons />
        </section>
        <Links />
      </div>
      <div className="flex flex-col items-center justify-between mt-12 space-y-4 text-white laptop:flex-row">
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
