export default function Card({ name, taskId, data, setData, currentCategory }) {
  const changeCategory = (event) => {
    const selectedCategory = event.target.value;

    const updatedData = data.map((column) => {
      // Remove from current category
      if (column.category === currentCategory) {
        return {
          ...column,
          tasks: column.tasks.filter((task) => task.id !== taskId),
        };
      }

      // Add to new category
      if (column.category === selectedCategory) {
        return {
          ...column,
          tasks: [...column.tasks, { id: taskId, name }],
        };
      }

      return column;
    });

    setData(updatedData);
  };

  const handleDelete = () => {
    const updatedData = data.map((item) => {
      if (item.category === currentCategory) {
        return {
          ...item,
          tasks: item.tasks.filter((task) => task.id !== taskId),
        };
      }
      return item;
    });

    setData(updatedData);
  };

  return (
    <div className="card-container">
      <h5>{name}</h5>
      <div>
        <select value={currentCategory} onChange={changeCategory}>
          {data.map((item) => (
            <option key={item.id} value={item.category}>
              {item.category}
            </option>
          ))}
        </select>
        <button onClick={handleDelete}>⛔</button>
      </div>
    </div>
  );
}
