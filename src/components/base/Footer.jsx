import FooterNav from "../navigation/FooterNav";
import BannerBar from "../reusable/BannerBar";

function Footer() {
  return <footer className="bg-primary text-white py-5">
    <BannerBar />
    <FooterNav />
  </footer>
}
export default Footer;