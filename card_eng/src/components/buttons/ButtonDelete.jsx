import "./ButtonDelete.scss";

const ButtonDelete = props => {
  return (
    <button className="button_delete" onClick={props.onClick}>
      <span className="delete">&#10007;</span>
    </button>
  );
};
export default ButtonDelete;
