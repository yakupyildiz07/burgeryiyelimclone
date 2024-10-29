import { Link } from "react-router-dom";
import banner from "../img/banneryeni.jpg";
import "../styles/Home.css";
function Home() {
  return (
    <div className="mainPage" style={{ backgroundImage: `url(${banner})` }}>
      <div className="order">
        <Link to="/menu">
          <button>Sipariş Ver</button>
        </Link>
      </div>
    </div>
  );
}
export default Home;
