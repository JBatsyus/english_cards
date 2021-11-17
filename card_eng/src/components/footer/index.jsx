import "./Footer.scss";
import FooterIcon from "./footer_icons";
import { icons } from "./footer_cards";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper-footer">
        <div className="text_footer"> Batsyus Yuliya &#169; 2021 </div>
        <div className="icons_footer">
          {icons.map(icon => (
            <FooterIcon
              key={icon.alt}
              href={icon.href}
              src={icon.src}
              alt={icon.alt}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
