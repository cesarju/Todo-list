import { useEffect, useState } from "react";
import { Task } from "./Task";
import "./TaskList.css";
import { v4 as uuidv4 } from "uuid";
export const TaskList = (props) => {
  const { lista } = props;
  const [listTask, setListTask] = useState(lista);
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  const onChangeTask = (event) => {
    const newTask = event.target.value;
    setTask(newTask);
  };
  const onChangeDescription = (event) => {
    const newDescription = event.target.value;
    setDescription(newDescription);
  };

  const handleCheckTime = (name) => {
    console.log(`Funcion hijo fue ejecutada ${name}`);
  };

  const handleAddTask = () => {
    let newListTask = [...listTask];
    const newAddTask = {
      id: uuidv4(),
      titleTask: task,
      description: description,
      status: false,
    };
    newListTask = [...newListTask, newAddTask];
    setTask("");
    setDescription("");
    setListTask(newListTask);

    localStorage.setItem("listTask", JSON.stringify(newListTask));
  };

  useEffect(() => {
    const localStorageData = localStorage.getItem("listTask");
    // console.log(typeof localStorageData)  resultado: string;
    const storedListTask = JSON.parse(localStorageData);
    if (storedListTask) {
      setListTask(storedListTask);
    }
  }, []);

  return (
    <div>
      <div className="container-input">
        <input
          className="input-add-todo"
          placeholder="Add your new todo"
          value={task}
          onChange={onChangeTask}
        />
        <input
          className="input-add-todo"
          placeholder="Add your description"
          value={description}
          onChange={onChangeDescription}
        />
        <button className="add-button" onClick={handleAddTask}>
          +
        </button>
      </div>
      <ul className="container-list">
        {listTask.map((tarea) => (
          <Task
            key={uuidv4()}
            taskName={tarea.titleTask}
            description={tarea.description}
            onCheckTimeClick={handleCheckTime}
          />
        ))}
      </ul>
    </div>
  );
};
