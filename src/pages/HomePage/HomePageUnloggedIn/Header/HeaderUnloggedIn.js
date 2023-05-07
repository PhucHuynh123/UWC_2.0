import { Link } from "react-router-dom";
import logo from "../../../../assets/logo.png";
import { Navbar, Container } from "react-bootstrap";
import "./HeaderUnloggedIn.css";

function HeaderUnloggedIn() {
  return (
    <header className="header_not_login">
      <Navbar expand="lg" className="navbar">
        <Container className="navbar-container">
          <Link to="/" className="navbar_brand">
            <img src={logo} alt="Logo" />
          </Link>
          <div className="navbar_action">
            <Link to={"/login"}>
              <button className="lg-btn navbar_action-login">ĐĂNG NHẬP</button>
            </Link>
            <Link to={"/signup"}>
              <button className="lg-btn">ĐĂNG KÝ</button>
            </Link>
          </div>
        </Container>
      </Navbar>
    </header>
  );
}

export default HeaderUnloggedIn;
