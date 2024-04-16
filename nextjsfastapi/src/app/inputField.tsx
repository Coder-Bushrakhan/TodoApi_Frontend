"use client"
import { useState } from "react";
import { AddTask } from "./action";
export default function Home() {
  const [content, setContent] = useState("");

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    await AddTask("http://127.0.0.1:8000/todos/", { content });
    setContent("");
    
  };

  return (
    <div className="text-center mt-4">
      <form onSubmit={handleSubmit}>
        <input
          type="text"

          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border-2 rounded-xl border-slate-400 flex-1 w-48 p-2"
        />
        <button type="submit"className="bg-amber-400 rounded-xl m-4 p-2 hover:bg-green-500 ">Add Task</button>
      </form>
    </div>
  );
}