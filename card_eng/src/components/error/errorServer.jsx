import "./error.scss";
import errorServv from "../../assets/images/errorServv.jpg";

const ErrorServer = () => {
  return (
    <div className="wrapper">
      <div className="wrapper__error">
        <img className="text__error" src={errorServv} alt={"error"}></img>
      </div>
    </div>
  );
};
export default ErrorServer;
