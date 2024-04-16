"use server"

import next from "next";
import { revalidateTag } from "next/cache";

export const getTask = async (url: string) => {
  const fetchTask = await fetch(url,
    {
      next :{
    
    tags:["task"],
    }
});
  const res = await fetchTask.json();
  
  return res;
};
export const AddTask = async (url: string, data: any) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
revalidateTag("task")
  const result = await response.json();
  return result;
};
  
export const DelTask = async (data: { content: string; id: number }) => {
  const response = await fetch(`http://127.0.0.1:8000/todos/${data.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to delete the task.");
  }

  console.log("Task deleted successfully.");
  revalidateTag("task");
};