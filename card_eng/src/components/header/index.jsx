import "./Header.scss";
import logo3 from "../../assets/images/logo3.png";

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper-header">
        <img className="logo_header" src={logo3} alt={"logo"} />
        <div className="header-text">Learn english every day!</div>
        <div className="wrapper-btn">
          <button>Log In</button>
          <button>Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
