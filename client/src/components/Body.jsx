import React, { useState, useEffect } from "react";
import axios from "axios";

const Body = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const fetchTodos = async () => {
    try {
      const response = await axios.get("http://localhost:5000/todos");
      setTodos(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleChange = (e) => setTask(e.target.value);

  const handleSave = async () => {
    if (!task.trim()) return;
    try {
      await axios.post("http://localhost:5000/todos", { description: task });
      setTask("");
      fetchTodos();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/todos/${id}`);
      fetchTodos();
    } catch (err) {
      console.error(err);
    }
  };

  const startEdit = (id, currentText) => {
    setEditId(id);
    setEditText(currentText);
  };

  const handleEditSave = async (id) => {
    try {
      await axios.put(`http://localhost:5000/todos/${id}`, {
        description: editText,
      });
      setEditId(null);
      setEditText("");
      fetchTodos();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-violet-100 min-h-screen py-10">
      <div className="max-w-xl mx-auto bg-white/50 backdrop-blur-md rounded-xl shadow-lg px-6 py-8">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Taskify - Manage your todos at one place
        </h1>

        
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Add a Todo</label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Enter your task"
              value={task}
              onChange={handleChange}
              className="flex-1 rounded-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <button
              onClick={handleSave}
              className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-full"
            >
              Save
            </button>
          </div>
        </div>

        
        {todos.map((todo) => (
          <div
            key={todo.todo_id}
            className="flex justify-between items-center bg-white rounded-md px-4 py-2 shadow mt-4"
          >
            {editId === todo.todo_id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="flex-1 border rounded px-2 py-1"
              />
            ) : (
              <p className="text-gray-800">⬤ {todo.description}</p>
            )}

            <div className="flex items-center gap-2">
              {editId === todo.todo_id ? (
                <button
                  onClick={() => handleEditSave(todo.todo_id)}
                  className="text-green-600 hover:text-green-800 text-lg"
                >
                  💾
                </button>
              ) : (
                <button
                  onClick={() => startEdit(todo.todo_id, todo.description)}
                  className="text-blue-600 hover:text-blue-800 text-lg"
                >
                  ✏️
                </button>
              )}
              <button
                onClick={() => handleDelete(todo.todo_id)}
                className="text-red-500 hover:text-red-700 text-lg"
              >
                🗑
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
