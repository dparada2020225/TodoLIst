import React, { useState, useEffect } from "react";
import {TaskRow} from '../TaskRow/TaskRow';
import {TaskCreator} from '../TaskCreator/TaskCreator';
import {VisibilityControl} from '../VisibilityControl/VisibilityControl';

export const TodoList= ()=> {
    const [taskItems, setTaskItems] = useState([]);
  const [showCompleted, setshowCompleted] = useState(true);

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data != null) {
      setTaskItems(JSON.parse(data));
    } else {
      setshowCompleted(true);
      setTaskItems()
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems)
    );
  }, [taskItems]);

  const createNewTask = (taskName) => {
    if (!taskItems.find((t) => (t.name === taskName && t.id === 1))) { 
      setTaskItems([...taskItems, { name: taskName, done: false , id: 1}]);
      console.log(taskItems)
    }else {
      alert("La tarea ya existe");
    }
  };

  const toggleTask = (task) =>
    setTaskItems(
      taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );

  const taskTableRows = (doneValue) =>
    taskItems
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TaskRow key={task.name} task={task} toggleTask={toggleTask} />
      ));
      

  return (
    <div>
      <div className="">
        <TaskCreator callback={createNewTask} />
        <table className="">
          <thead>
            <tr>
              <th>Description</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>{taskTableRows(false)}</tbody>
        </table>
        <div className="">
          <VisibilityControl
            description="Completed Tasks"
            isChecked={showCompleted}
            callback={(checked) => setshowCompleted(checked)}
          />
        </div>

        {showCompleted && (
          <table className="">
            <thead>
              <tr>
                <th>Description</th>
                <th>Done</th>
              </tr>
            </thead>
            <tbody>{taskTableRows(true)}</tbody>
          </table>
        )}
      </div>
    </div>
  );
}