import Link from "next/link";
import MdpIconLink from "../MdpIconLink/MdpIconLink";

function NavBarItems({ data }) {
  return (
    <div className="flex flex-row items-center ml-auto">
      {data.map(({ href, text }) => (
        <Link key={`menu-${text}`} href={href}>
          <a className="inline-flex items-center justify-center w-auto px-3 py-2 text-white hover:opacity-80 ">
            {text.toUpperCase()}
          </a>
        </Link>
      ))}
    </div>
  );
}

export default function NavbarDesktop({ data }) {
  return (
    <div className="px-4 navbar-desktop mobile:hidden laptop:block">
      <div className="flex justify-between navbar-desktop">
        <MdpIconLink />
        <NavBarItems data={data} />
      </div>
    </div>
  );
}
