"use client"
import { DelTask } from "./action";
import { Task } from "./page";
import { FaTrashAlt } from "react-icons/fa";



const Tasklist = ({ tasklist }: { tasklist: Task[] }) => {
    return (
      <div className="flex-1 ">
        {tasklist.map((task: Task) => {
          return (
            <div className="flex justify-between border-2 border-slate-400 rounded-xl p-4 m-2">
            <div className="" key={task.id}>
              <p>
                {task.content}  </p>
                </div>
                <div>
                <button onClick={() => DelTask({ content: task.content, id: task.id })}>
                <FaTrashAlt className="hover:text-red-500" />
</button>
            
            </div>
            </div>
          );
        })}
      </div>
    );
  };
  export default Tasklist;