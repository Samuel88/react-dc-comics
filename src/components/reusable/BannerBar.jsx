function BannerBar() {
  return (
    <div className="bg-primary text-white">
      <div className="banner-bar container">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="banner col">
            <img
              src="/imgs/buy-comics-digital-comics.png"
              alt="Digital Comics"
            />
            <span>DIGITAL COMICS</span>
          </div>
          <div className="banner col">
            <img src="/imgs/buy-comics-merchandise.png" alt="Merchandise" />
            <span>DC MERCHANDISE</span>
          </div>
          <div className="banner col">
            <img src="/imgs/buy-comics-subscriptions.png" alt="Subscriptions" />
            <span>SUBSCRIPTIONS</span>
          </div>
          <div className="banner col">
            <img src="/imgs/buy-comics-shop-locator.png" alt="Shop Locator" />
            <span>COMICS SHOP LOCATOR</span>
          </div>
          <div className="banner col">
            <img src="/imgs/buy-dc-power-visa.svg" alt="DC Power Visa" />
            <span>DC POWER VISA</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BannerBar;
