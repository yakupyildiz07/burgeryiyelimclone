import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "../styles/Footer.css"
function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FacebookIcon />
        <InstagramIcon />
        <XIcon />
        <LocationOnIcon />
      </div>
      <p>Tüm Hakları Saklıdır | Burger Yiyelim</p>
    </div>
  );
}
export default Footer;
