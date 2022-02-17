import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';
import data from './NavBarOptions';

export default function Navbar() {
  return (
    <>
      <nav className="navbar-container sticky top-0 z-20 w-full px-6 bg-black shadow-lg">
        <NavbarDesktop data={data}/>
        <NavbarMobile data={data}/>
      </nav>
    </>
  )
}
