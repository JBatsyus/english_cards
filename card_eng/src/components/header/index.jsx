import "./Header.scss";
import logo3 from "../../assets/images/logo3.png";

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper__header">
        <nav className="header__nav">
          <img className="logo__header" src={logo3} alt={"logo"} />
          <ul className="nav__list">
            <li className="nav__item">Home</li>
            <li className="nav__item">Cards</li>
          </ul>
        </nav>
        <div className="header__text">Learn english every day!</div>
      </div>
    </header>
  );
};

export default Header;
