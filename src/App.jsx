import "./App.css";
import Header from "./components/Header";
import { TaskList } from "./components/TaskList";
function App() {
  const listTask = [
    /*     {
      id: 1,
      titleTask: "Hacer la cama ",
      description: "Esta tarea se completa al tender la cama",
      status: false,
    }, */
    /*  
    {
      id: 2,
      titleTask: "Ir a GYM",
      description: "Esta tarea se completa al hacer ejercicios durante 1h",
      status: true,
    },
    {
      id: 3,
      titleTask: "Practica de react",
      description: "Esta tarea se completa al hacer mini",
      status: false,
    },
    {
      id: 4,
      titleTask: "Estudiar test en react con jest",
      description: "Esta tarea se completa la practicar jest",
      status: false,
    }, */
  ];
  return (
    <div className="app">
      <Header />
      <TaskList lista={listTask} />
      <div className="container-blok">
        <p>You have 2 pending task</p>
        <button className="button-clear">Clear all</button>
      </div>
    </div>
  );
}

export default App;
