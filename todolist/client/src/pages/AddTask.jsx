import { useState } from "react";
import { createTodo } from "../services/app";

function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo({title,description,category})
    // reset form
    setTitle("");
    setDescription("");
    setCategory("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-base-100 p-6 rounded-2xl shadow space-y-4"
    >
      <h2 className="text-xl font-bold">Add Task</h2>

      {/* Title */}
      <div>
        <label className="label">Title</label>
        <input
          type="text"
          placeholder="Enter title"
          className="input input-bordered w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      {/* Description */}
      <div>
        <label className="label">Description</label>
        <textarea
          placeholder="Enter description"
          className="textarea textarea-bordered w-full"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      {/* Category */}
      <div>
        <label className="label">Category</label>
        <select
          className="select select-bordered w-full"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="" disabled>
            Select category
          </option>
          <option>Work</option>
          <option>Personal</option>
          <option>Shopping</option>
          <option>Health</option>
          <option>Finance</option>
          <option>Education</option>
          <option>Home</option>
        </select>
      </div>

      {/* Submit */}
      <button className="btn btn-primary w-full">
        Save Task
      </button>
    </form>
  );
}

export default AddTask;
