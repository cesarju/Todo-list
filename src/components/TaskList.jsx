import { Task } from "./Task";
export const TaskList = (props) => {
  const { lista } = props;

  const handleCheckTime = (name) => {
    console.log(`Funcion hijo fue ejecutada ${name}`);
  };

  return (
    <div>
      <div className="container-input">
        <input className="input-add-todo" placeholder="Add your new todo" />
        <button className="add-button">+</button>
      </div>
      <ul className="container">
        {lista.map((tarea) => (
          <Task
            key={tarea.id}
            taskName={tarea.title}
            onCheckTimeClick={handleCheckTime}
          />
        ))}
      </ul>
    </div>
  );
};
