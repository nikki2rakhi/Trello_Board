import { useState } from "react";

export default function UserInput({ data, setData }) {
  const [text, setText] = useState("");
  const [selectCategory, setSelectCategory] = useState("");

  const handleSubmit = () => {
    if (!text || !selectCategory) return;

    const newTask = {
      id: Date.now(),
      name: text,
    };

    const updatedData = data.map((item) => {
      if (item.category === selectCategory) {
        return {
          ...item,
          tasks: [...item.tasks, newTask],
        };
      }
      return item; // ✅ Important to return unchanged items
    });

    setData(updatedData);
    setText(""); // Clear input after adding
    setSelectCategory(""); // Optionally reset dropdown
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={text}
        placeholder="Enter task name"
        onChange={(e) => setText(e.target.value)}
      />
      <select
        value={selectCategory}
        onChange={(e) => setSelectCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        {data.map((item) => (
          <option key={item.id} value={item.category}>
            {item.category}
          </option>
        ))}
      </select>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
