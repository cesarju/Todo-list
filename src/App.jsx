import "./App.css";
import Header from "./components/Header";
import { TaskList } from "./components/TaskList";
function App() {
  const listTask = [
    {
      id: 1,
      title: "Hacer la cama",
      status: false,
    },
    {
      id: 2,
      title: "Ir a GYM",
      status: false,
    },
    {
      id: 3,
      title: "Practica de react",
      status: false,
    },
    {
      id: 4,
      title: "Estudiar test en react con jest",
      status: false,
    },
  ];
  return (
    <div className="App">
      <Header />
      <TaskList lista={listTask} />
    </div>
  );
}

export default App;
