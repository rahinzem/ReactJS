import { useState } from "react";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState ([
    {
      id: 1,
      title: "Estudar programação",
      description: "Estudar programação para se tornar um desenvolver full-stack.",
      isCompleted: false
    },
    {
      id: 2,
      title: "Estudar inglês",
      description: "Estudar inglês para se tornar fluente.",
      isCompleted: false
    },
    {
      id: 3,
      title: "Ler a Bíblia",
      description: "Esta sempre mais próximo do Pai.",
      isCompleted: false
    },
])

function onTaskClick (taskId) {
  const newTasks = tasks.map((task) => {
    if (task.id === taskId) {
      return { ...task, isCompleted: !task.isCompleted};
    }
    return task;
  });
  setTasks(newTasks);
}

function onDeleteTaskClick(TaskId) {
  const newTasks = tasks.filter((task) => task.id !== TaskId);
    setTasks(newTasks);
}
  
  return (
    <>
      <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
        <div className="w-[500px]">
          <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>

          <Tasks tasks ={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}/>

        </div>
      </div>
    </>
  )
}

export default App;
