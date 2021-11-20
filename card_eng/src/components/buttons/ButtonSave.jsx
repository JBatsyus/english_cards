import "./ButtonSave.scss";

const ButtonSave = props => {
  return (
    <button className="button_save" onClick={props.onClick}>
      <span className="save">&#10004;</span>
    </button>
  );
};
export default ButtonSave;
