import "./ButtonEdit.scss";

const ButtonEdit = props => {
  return (
    <button className="button_edit" onClick={props.onClick}>
      <span className="edit"> &#128393;</span>
    </button>
  );
};
export default ButtonEdit;
