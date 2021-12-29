import "./error.scss";
import error from "../../assets/images/error.svg";

const Error = () => {
  return (
    <div className="wrapper">
      <div className="wrapper__error">
        <img className="text__error" src={error} alt={"Ooops!..."}></img>
      </div>
    </div>
  );
};
export default Error;
