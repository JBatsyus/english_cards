import "./Header.scss";
import logo3 from "../../assets/images/logo3.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper__header">
        <Link to="/home">
          <img className="logo__header" src={logo3} alt={"logo"} />
        </Link>
        <nav className="header__nav">
          <ul className="nav__list">
            <li className="nav__item">
              <Link className="nav__item" to="/home">
                home
              </Link>
            </li>
            <Link className="nav__item" to="/cards">
              cards
            </Link>
          </ul>
        </nav>
        <div className="header__text">Learn english every day!</div>
      </div>
    </header>
  );
};

export default Header;
