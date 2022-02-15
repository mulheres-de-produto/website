import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

export default function Navbar() {
  return (
    <>
      <nav className="navbar-container sticky top-0 z-20 w-full px-6 bg-black shadow-lg">
        <NavbarDesktop/>
        <NavbarMobile/>
      </nav>
    </>
  )
}
