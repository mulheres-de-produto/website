import Link from 'next/link'
import MdpIconLink from './MdpIconLink';
import data from './MenuListOptions';

function NavBarItems() {
  return (
    <div className="items-center flex flex-row ml-auto">
      {data.map (({href, text}) => (
        <Link  key={`menu-${text}`} href={href}>
          <a className="items-center justify-center px-3 py-2 text-white inline-flex w-auto hover:opacity-80 ">
            {text.toUpperCase()}
          </a>
        </Link>
      ))}
    </div>
  )
}

export default function NavbarDesktop() {
  return (
    <div className="navbar-desktop px-4 mobile:hidden laptop:block" >
      <div className="navbar-desktop flex justify-between">
        <MdpIconLink/>
        <NavBarItems/>
      </div>
    </div>
  )
}
