function HeaderNav() {

  const linkClasses = "text-decoration-none fw-bold text-uppercase";

  return <ul className="list-unstyled d-flex mb-0">
    <li><a className={linkClasses} href="#">CHARACTERS</a></li>
    <li><a className={linkClasses} href="#">COMICS</a></li>
    <li><a className={linkClasses} href="#">MOVIES</a></li>
    <li><a className={linkClasses} href="#">TV</a></li>
    <li><a className={linkClasses} href="#">GAMES</a></li>
    <li><a className={linkClasses} href="#">COLLECTIBLES</a></li>
    <li><a className={linkClasses} href="#">VIDEOS</a></li>
    <li><a className={linkClasses} href="#">FANS</a></li>
    <li><a className={linkClasses} href="#">NEWS</a></li>
    <li><a className={linkClasses} href="#">SHOP</a></li>
  </ul>
}
export default HeaderNav;