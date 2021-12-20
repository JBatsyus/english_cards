import "./ButtonSave.scss";

const ButtonSave = props => {
  return (
    <button
      className="button_save"
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <span className="save">&#10004;</span>
    </button>
  );
};
export default ButtonSave;
