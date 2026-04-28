import styles from "./BannerBar.module.css";

function BannerBar() {
  const colClasses = "col d-flex align-items-center px-3 justify-content-center justify-content-md-start py-2";

  return (
    <div className="bg-primary text-white">
      <div className="banner-bar container">
        <div className="row row-cols-1 row-cols-md-3 row-cols-xl-5 py-5">
          <div className={colClasses}>
            <img
              className={styles["bannerItemImg"]}
              src="/imgs/buy-comics-digital-comics.png"
              alt="Digital Comics"
            />
            <span className="ps-3">DIGITAL COMICS</span>
          </div>
          <div className={colClasses}>
            <img
              className={styles["bannerItemImg"]}
              src="/imgs/buy-comics-merchandise.png"
              alt="Merchandise"
            />
            <span className="ps-3">DC MERCHANDISE</span>
          </div>
          <div className={colClasses}>
            <img
              className={styles["bannerItemImg"]}
              src="/imgs/buy-comics-subscriptions.png"
              alt="Subscriptions"
            />
            <span className="ps-3">SUBSCRIPTIONS</span>
          </div>
          <div className={colClasses}>
            <img
              className={styles["bannerItemImg"]}
              src="/imgs/buy-comics-shop-locator.png"
              alt="Shop Locator"
            />
            <span className="ps-3">COMICS SHOP LOCATOR</span>
          </div>
          <div className={colClasses}>
            <img
              className={styles["bannerItemImg"]}
              src="/imgs/buy-dc-power-visa.svg"
              alt="DC Power Visa"
            />
            <span className="ps-3">DC POWER VISA</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BannerBar;
