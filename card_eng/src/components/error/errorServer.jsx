import "./errorServ.scss";
import errorServv from "../../assets/images/errorServv.jpg";

const ErrorServer = () => {
  return (
    <img
      className="error_img"
      src={errorServv}
      alt={"Oops!...I did it again"}
    ></img>
  );
};
export default ErrorServer;
