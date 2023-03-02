import { BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import "./Task.css";

export const Task = (props) => {
  const { taskName, description, status, onCheckTimeClick } = props;

  const handleClick = () => {
    console.log(`Tarea completada ${taskName}`);
    onCheckTimeClick(taskName);
  };

  return (
    <li className="container">
      <h4 className="category">Categoria de la task</h4>
      <input className="input-check" type="checkbox" onClick={handleClick} />

      <strong className="task-name">
        <p>{taskName}</p>
      </strong>
      <p className="description">{description}</p>
      <div className="incos">
        <FiEdit className="edit" color="#71C5E8" />
        <BsTrash className="trash" color="#E03E52" />
      </div>
    </li>
  );
};
