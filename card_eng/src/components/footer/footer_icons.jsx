import "./Footer.scss";

const FooterIcon = props => {
  const { href, src, alt } = props;
  return (
    <a href={href}>
      <img src={src} alt={alt} className="icon" />
    </a>
  );
};

export default FooterIcon;
