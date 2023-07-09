import React, { useState } from "react";

function Todo() {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);

  function addActivity() {
    if (activity.trim() !== "") {
      setListData((listData) => {
        const updatedList = [...listData, activity];
        console.log(updatedList);
        return updatedList;
      });
      setActivity("");
    }
  }

  function removeActivity(index) {
    const updatedList = [...listData];
    updatedList.splice(index, 1);
    setListData(updatedList);
  }

  return (
    <div>
      <h1>ToDo List</h1>
      <input
        type="text"
        placeholder="Enter Activity"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
      />
      <button onClick={addActivity}>ADD</button>
      <p>Your todo list here {":)"}</p>
      {listData.map((data, index) => (
        <div key={index}>
          <p>{data}</p>
          <button onClick={() => removeActivity(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Todo;
