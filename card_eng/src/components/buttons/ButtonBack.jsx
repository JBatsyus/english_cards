import "./ButtonBack.scss";

const ButtonBack = props => {
  return (
    <button
      className="button_back"
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <span className="back">&#10094;</span>
    </button>
  );
};
export default ButtonBack;
