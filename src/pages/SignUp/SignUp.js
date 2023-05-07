import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../contexts/AuthContext.js";
import Image from "../../assets/signup.png";
import Logo from "../../assets/logo.png";
import "./SignUp.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { createUser, logout } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (passwordConfirm !== password) {
      return setError("Mật khẩu và xác nhận không khớp.");
    }

    try {
      setLoading(true);
      await createUser(email, password);
      await logout();
      navigate("/login");
    } catch (e) {
      setError("Tạo tài khoản thất bại. Vui lòng thử lại sau.");
    }
    setLoading(false);
  };

  return (
    <>
      <div className="signup_header">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="container signup">
        <div className="content_left">
          <h2>ĐĂNG KÝ</h2>
          <form onSubmit={handleSubmit}>
            {error !== "" ? <div>{error}</div> : <></>}
            <div className="form_group">
              <label>Email</label>
              <input onChange={(e) => setEmail(e.target.value)} type="email" required />
            </div>
            <div className="form_group">
              <label>Mật khẩu</label>
              <input onChange={(e) => setPassword(e.target.value)} type="password" required />
            </div>
            <div className="form_group">
              <label>Xác nhận mật khẩu</label>
              <input onChange={(e) => setPasswordConfirm(e.target.value)} type="password" required />
            </div>
            <button disabled={loading} type="submit" className="lg-btn">
              ĐĂNG KÝ
            </button>
          </form>
          <div>
            Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
          </div>
        </div>
        <div className="content_right">
          <img src={Image} alt="background" />
        </div>
      </div>
    </>
  );
};

export default SignUp;
