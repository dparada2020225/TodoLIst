import React, { useState } from "react";

export const TaskCreator = (props) => {
  const [newTaskName, setNewTaskName] = useState("");

  const updateNewTaskValue = (e) => setNewTaskName(e.target.value);

  const createNewTask = () => {
    props.callback(newTaskName);
    setNewTaskName("");
  };

  return (
    <div className="">
      <input
        type="text"
        className=""
        value={newTaskName}
        onChange={updateNewTaskValue}
      />
      <button className="" onClick={createNewTask}>
        Add
      </button>
    </div>
  );
};
