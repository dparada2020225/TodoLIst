import { useState } from "react";
import "./todoApp.css";
import Checkbox from '@mui/material/Checkbox';

import Button from '@mui/material/Button';

export default function Todo({ item, onUpdate, onComplete, onDelete }) {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(item.title ?? "");

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleUpdate() {
    onUpdate(item.id, value);
    setIsEdit(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdate(item.id, value);
    setIsEdit(false);
  }

  function handleCheckboxChange(e) {
    onComplete(item.id, e.target.checked);
  }

  return (
    <div className="todo">
      {isEdit ? (
        <form onSubmit={handleSubmit} className="todoUpdateForm">
          <input
            className="todoInput"
            type="text"
            value={value}
            onChange={handleChange}
          />
          <Button variant="contained" color="primary" className="button" onClick={handleUpdate}
          sx={{ 
            backgroundColor: '#10963B',
            Textcolor: "black",
            opacity: [0.8],
            '&:hover': {
              backgroundColor: '#10963B',
              opacity: [1 ],
              },
          }}
          >
            Update
          </Button>
        </form>
      ) : (
        <div className="todoInfo">
          <Checkbox color="success"
            // type={"checkbox"}
            onChange={handleCheckboxChange}
            checked={item.checked}
          />
          <span
            className="todoTitle"
            style={{
              // color: item.completed ? "#ccc" : "",
              color: item.completed ? "#24DC03" : "#0E41EF" ,
              textDecoration: item.completed ? "line-through" : "",
            }}
          >
            {item.title}
          </span>
          <Button variant="contained" className="button" onClick={() => setIsEdit(true)}
          sx={{ 
            backgroundColor: '#FF8000',
            Textcolor: "black",
            opacity: [0.8],
            '&:hover': {
              backgroundColor: '#FF8000',
              opacity: [1 ],
              },
            }}>
            Edit
          </Button>
          <Button variant="contained"  color="error" className="buttonDelete" onClick={() => onDelete(item.id)}
          sx={{
            backgroundColor: '#FF0000',
            opacity: [0.8],
            '&:hover': {
              backgroundColor: '#FF0000',
              opacity: [1 ],
              },
          }}>
            Delete
          </Button>
        </div>
      )}
    </div>
  );
}
