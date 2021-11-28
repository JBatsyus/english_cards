import "./ButtonNext.scss";

const ButtonNext = props => {
  return (
    <button
      className="button_next"
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <span className="next">&#10095;</span>
    </button>
  );
};
export default ButtonNext;
