import { BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

export const Task = (props) => {
  const { taskName, onCheckTimeClick } = props;

  const handleClick = () => {
    console.log(`Tarea completada ${taskName}`);
    onCheckTimeClick(taskName);
  };

  return (
    <li className="containerTask">
      <div className="item">
        <input type="checkbox" onClick={handleClick} />
        <p>{taskName}</p>
      </div>
      <div className="item">
        <FiEdit className="iconEdit " color="#71C5E8" />
        <BsTrash className="iconTrash " color="#E03E52" />
      </div>
    </li>
  );
};
