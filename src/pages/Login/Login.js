import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../contexts/AuthContext.js";
import Logo from "../../assets/logo.png";
import Image from "../../assets/signup.png";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);
      await signIn(email, password);
      console.log("logged in");
      navigate("/home");
    } catch (e) {
      setError("Đăng nhập thất bại. Vui lòng kiểm tra lại tài khoản và mật khẩu");
    }
    setLoading(false);
  };

  return (
    <>
      <div className="login_header">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="login container">
        <div className="content_left">
          <h2>ĐĂNG NHẬP</h2>
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
            <button disabled={loading} type="submit" className="lg-btn">
              ĐĂNG NHẬP
            </button>
          </form>
          <div>
            Chưa có tài khoản? <Link to="/signup">Đăng ký</Link>
          </div>
        </div>
        <div className="content_right">
          <img src={Image} alt="background" />
        </div>
      </div>
    </>
  );
};

export default Login;
