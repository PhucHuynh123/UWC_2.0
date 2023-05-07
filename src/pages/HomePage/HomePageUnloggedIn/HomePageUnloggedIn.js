import "./HomePageUnloggedIn.css";
import HeaderUnloggedIn from "./Header/HeaderUnloggedIn";
import BackgoundImg from "../../../assets/background.png";

function HomePageUnloggedIn() {
  return (
    <div className="container homepage_notlogin">
      <HeaderUnloggedIn />
      <img src={BackgoundImg} alt="background" className="homepage_image" />
      <div className="wrapper">
        <div className="content">
          <h1>URBAN WASTE COLLECTION AID UWC 2.0</h1>
          <span>Nhóm 7 - L01</span>
        </div>
      </div>
    </div>
  );
}

export default HomePageUnloggedIn;
