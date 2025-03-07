import { ChevronRight, TrashIcon } from "lucide-react";

function Tasks (props) {
    return (
        <>
            <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
                {props.tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                    <button onClick={() => props.onTaskClick(task.id)}
                    className={`bg-slate-400 text-left text-white p-2 rounded-md w-100 ${task.isCompleted && 'line-through'}`}>
                        {task.title}
                        </button>
                    <button className="bg-slate-400 p-2 rounded-md text-white"><ChevronRight /></button>
                    <button onClick={() => props.onDeleteTaskClick(task.id)} className="bg-slate-400 p-2 rounded-md text-white"><TrashIcon /></button>
                </li>
            ))}
            </ul>
        </>
    );
}

export default Tasks;