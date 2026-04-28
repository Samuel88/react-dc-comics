import styles from './Header.module.css';

function Header() {
  const linkClasses = "text-decoration-none fw-bold text-uppercase";

  return (
    <nav className="py-3">
      <div className="container">
        <div className="d-flex justify-content-between">

          {/* Logo */}
          <a className="navbar-brand" href="#">
            <img src="/imgs/dc-logo.png" alt="DC Comics" />
          </a>

          {/* Navigation Links */}
          <ul className="list-unstyled d-flex mb-0">
            <li className={`mx-3 ${styles['menuLink']}`}>
              <a className={linkClasses} href="#">
                CHARACTERS
              </a>
            </li>
            <li className={`mx-3 ${styles['menuLink']}`}>
              <a className={linkClasses} href="#">
                COMICS
              </a>
            </li>
            <li className={`mx-3 ${styles['menuLink']}`}>
              <a className={linkClasses} href="#">
                MOVIES
              </a>
            </li>
            <li className={`mx-3 ${styles['menuLink']}`}>
              <a className={linkClasses} href="#">
                TV
              </a>
            </li>
            <li className={`mx-3 ${styles['menuLink']}`}>
              <a className={linkClasses} href="#">
                GAMES
              </a>
            </li>
            <li className={`mx-3 ${styles['menuLink']}`}>
              <a className={linkClasses} href="#">
                COLLECTIBLES
              </a>
            </li>
            <li className={`mx-3 ${styles['menuLink']}`}>
              <a className={linkClasses} href="#">
                VIDEOS
              </a>
            </li>
            <li className={`mx-3 ${styles['menuLink']}`}>
              <a className={linkClasses} href="#">
                FANS
              </a>
            </li>
            <li className={`mx-3 ${styles['menuLink']}`}>
              <a className={linkClasses} href="#">
                NEWS
              </a>
            </li>
            <li className={`mx-3 ${styles['menuLink']}`}>
              <a className={linkClasses} href="#">
                SHOP
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Header;
