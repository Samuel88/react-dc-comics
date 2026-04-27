import HeaderNav from "../navigation/HeaderNav";
import Logo from "../reusable/Logo";

function Header() {
  return (
    <nav className="d-flex justify-content-between align-items-center py-3">
      <Logo />
      <HeaderNav />
    </nav>
  )
}
export default Header;