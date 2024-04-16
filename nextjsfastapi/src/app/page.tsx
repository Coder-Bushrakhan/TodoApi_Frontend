import { DelTask, getTask } from "./action";
import Input from "./inputField";
import Tasklist from "./taslist";

export interface Task {
  id: number;
  content: string;
}

export default async function Home() {
  const tasklist: Task[] = await getTask("http://127.0.0.1:8000/todos/");
  console.log(tasklist);
  return (
    <div className="bg-slate-300 p-6 rounded-md shadow-md max-w-md mx-auto mt-20 bg-gr">
      <h1 className="text-4xl text-center mt-4">
TODO API Integration in Next.js      </h1>

      <Input />
      <p className="text-center mt-8 mb-4">TODO List</p>

      <Tasklist tasklist={tasklist} />
    </div>
  );
}