import "./styles.css";
import jsonData from "./data.json";
import { useState } from "react";
import Card from "./Card";
import UserInput from "./UserInput";

// Backlogs, Doing, Review , Done
export default function App() {
  const [data, setData] = useState(jsonData);

  return (
    <div className="App">
      <h1>Trello Board</h1>
      <UserInput data={data} setData={setData} />
      <div className="board">
        {data?.map((item) => (
          <div key={item.id} className="category-container">
            <h3 className="category">{item.category}</h3>
            {item?.tasks.map((task) => (
              <Card
                key={task.id}
                name={task.name}
                taskId={task.id}
                data={data}
                setData={setData}
                currentCategory={item.category}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
