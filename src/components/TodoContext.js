import React, { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components";

const ListForm = styled.form`
  width: 100%;
  height: 400px;
  box-shadow: -1px 5px 5px black;
  overflow: auto;
  border-radius: 10px;
`;

const Size = styled.div`
  width: 30%;
`;

const CheckBox = styled.input.attrs({
  type: "checkbox",
})`
  // width: 20px;
`;

const CheckBoxLabel = styled.label`
width: 20px;
&::after {
  content: "✔";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 5px;
  border: 2px solid transparent;
  border-top: none;
  border-right: none;
  transform-origin: center;
  opacity: 0;
}

&:checked::after {
  opacity: 1;
}
`;

function TodoContext({ todos, completeTodo, removeTodo, updateTodo }) {
  const [editedId, setEditedId] = useState(null);
  const [newText, setNewText] = useState("");

  const editRef = useRef(null);

  const editMode = (id, text) => {
    setEditedId(id);
    setNewText(text);
  };

  const editChange = (e) => {
    setNewText(e.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    if (editedId !== null && newText.trim() !== "") {
      updateTodo(editedId, { text: newText }); // 수정된 내용을 업데이트하는 함수 호출
      setEditedId(null);
      setNewText("");
    }
  };

  return (
    <ListForm onSubmit={formSubmit} className="todoForm">
      <div>
      {todos.map((todo) => (
        <div
          className={todo.isComplete ? "todo-row-complete" : "todo-row"}
          key={todo.id}
        ><div>
            <CheckBoxLabel htmlFor={`checkbox_${todo.id}`}></CheckBoxLabel>
              <CheckBox
                id={`checkbox_${todo.id}`}
                checked={todo.isComplete}
                onChange={() => completeTodo(todo.id)}
              />
          <div>
            {editedId === todo.id ? (
              <input
                value={newText}
                ref={editRef}
                onChange={editChange}
                required
              />
            ) : (
              <span>{todo.text}</span>
            )}
          </div>
          </div>
          <div className="btnWrap">
            {editedId === todo.id ? (
              <button type="button" className="cancleEdit" onClick={() => setEditedId(null)}>취소</button>
            ) : (
              <button type="button" className="editing" onClick={() => editMode(todo.id, todo.text)}>수정</button>
            )}
            {editedId === todo.id 
              ?<button type="submit" className="edited">완료</button>
              :<button type="button" className="delete" onClick={() => removeTodo(todo.id)}>삭제</button>
            }
          </div>
        </div>
      ))}
      </div>
    </ListForm>
  );
}

export default TodoContext;
