import "./Header.scss";
import logo3 from "../../assets/images/logo3.png";

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper-header">
        <img className="img" src={logo3} alt={"logo"} />
      </div>
      <p className="header-text">Learn english every day!</p>
      <div className="wrapper-btn">
        <button>Log In</button>
        <button>Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
