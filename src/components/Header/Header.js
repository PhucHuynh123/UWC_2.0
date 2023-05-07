import React from "react";
import { useNavigate } from "react-router";
import { UserAuth } from "../../contexts/AuthContext";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import bell from "../../assets/bell.png";
import message from "../../assets/message.png";
import "./Header.css";

function Header({ active }) {
	const { 
		// user, 
		logout } = UserAuth();
	const navigate = useNavigate();
	const handleLogout = async () => {
		try {
			await logout();
			navigate("/");
			console.log("Logged out");
		} catch (error) {
			console.log("Failed to log out. Please try again later");
		}
	};

	return (
		<header className="header">
			<Navbar expand="lg" className="navbar">
				<Container>
					<Link to="/" className="navbar_brand">
						<img src={logo} alt="Logo" />
					</Link>
					<div className="navbar_link">
						<ul className="navbar_link-list">
							<li className={`navbar_link-item ${active === "manageAccounts" ? "active" : ""}`}>
								<a href="/">Quản lý tài khoản</a>
							</li>
							<li className={`navbar_link-item ${active === "manageEmployees" ? "active" : ""}`}>
								<a href="/">Quản lý nhân viên</a>
							</li>
							<li className={`navbar_link-item ${active === "manageMCPs" ? "active" : ""}`}>
								<a href="/">Quản lý MCPs</a>
							</li>
							<li className={`navbar_link-item ${active === "manageVehicles" ? "active" : ""}`}>
								<a href="/">Quản lý phương tiện</a>
							</li>
							<li className={`navbar_link-item ${active === "taskAssignment" ? "active" : ""}`}>
								<Link to={"/assignTask"}>Giao việc</Link>
							</li>
						</ul>
					</div>
					<div className="navbar_action">
						<div className="navbar_action-message">
							<img src={message} alt="message" />
						</div>
						<div className="navbar_action-notify">
							<img src={bell} alt="bell" />
						</div>
						<button className="lg-btn" onClick={handleLogout}>
							ĐĂNG XUẤT
						</button>
					</div>
				</Container>
			</Navbar>
		</header>
	);
}

export default Header;
