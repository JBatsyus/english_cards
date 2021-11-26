import "./ButtonBack.scss";

const ButtonBack = props => {
  return (
    <button className="button_back" onClick={props.onClick}>
      <span className="back">&#10094;</span>
    </button>
  );
};
export default ButtonBack;
