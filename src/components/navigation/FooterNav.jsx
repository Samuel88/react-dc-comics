import styles from './FooterNav.module.css';

function FooterNav() {
  return (
    <div className={`${styles['footer-nav']} py-3`}>
      <div className="container">
        <div className="row">
          <div className="col">

          </div>
          <div className="col">
            <img className="img-fluid" src="/imgs/dc-logo-bg.png"/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default FooterNav;