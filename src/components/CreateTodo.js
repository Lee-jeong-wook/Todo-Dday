import React, { useState } from "react";
import styled, { css } from "styled-components";

const FormToDo = styled.form`
    width:100%;
    outline:none;
    border-bottom:0.5px solid #000;
    display:flex;
    justify-content:space-between;
    box-sizing:border-box;
    margin-bottom:30px;
    &:before{
        content:'◆';
        font-size:10px;
        display:inline:block;
        position:relative;
        top:22px;
        left:-1px;
    }
`;

const InputToDo = styled.input`
    width:90%;
    border:none;
    &:focus{
        outline:none;
        border:0px
    }
`;

const SubmitBtn = styled.button.attrs({
    type:'submit'
})`
    justify-self:flex-end;
    width:80px;
    background-color:#72CCC7;
    color:#fff;
    font-size:20px;
    text-align:center;
    vertical-align:middle;
    border:0.5px solid #aaa;
    cursor:pointer;
    border-radius:5px 5px 0 0;
    box-sizing:border-box;
    &:focus{
        background-color:#50aaa5;
    }
`;

function CreateTodo(props){
    let [value, setValue] = useState("");
    const onChange = (e) => {
        setValue(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id:Math.floor(Math.random()*10000),
            text:value
        })
        setValue('');
    }
    return(
        <div>
            <FormToDo onSubmit={onSubmit}>
                <InputToDo 
                onChange={onChange}
                value={value}
                placeholder='할 일을 입력하세요'
                required
                />
                <SubmitBtn>+</SubmitBtn>
            </FormToDo>
        </div>
    )
}

export default CreateTodo;