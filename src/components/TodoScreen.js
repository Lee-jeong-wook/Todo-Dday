import React from "react";
import TodoList from "./TodoList";
import helmet from "../img/helmet 1.png"

function TodoScreen(){
    return(
        <div className="todoScreen">
            <div className="todoHeader">
                <h2>T O D O <br></br>LIST</h2>
                <img src={helmet} className="helmetImg" alt = "hel"></img>
            </div>
            <TodoList />
        </div>
    )
}

export default TodoScreen