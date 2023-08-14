import React, { useState } from "react";
import CreateTodo from "./CreateTodo";
import TodoConText from "./TodoContext";
import styled, { css } from "styled-components";

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if(todo.id===id){
                todo.isComplete = !todo.isComplete;
                console.log(todo.is)
            }
            return todo;
        })
        setTodos(updatedTodos);
    }

    const deleteAll = id => {
        todos.map(todo=>{
            removeTodo(todo.id)
        })
    }

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
          return;
        }
        
        console.log(newValue);

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
      };
    
      const removeTodo = id => {
        const removedArr = [...todos].filter(todo => todo.id !== id);
    
        setTodos(removedArr);
      };

    return(
        <div>
            <CreateTodo onSubmit={addTodo}/>
            <TodoConText 
            todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
            />
        </div>
    )
}

export default TodoList;