import React, { useState } from "react";
import styled, { css } from "styled-components";
import Close from "../img/Vector.png";

const DdayBox = styled.div`
    // display:none;
    position:fixed;
    top:20%;
    left:42%;
    width:15%;
    height:40%;
    background-color:white;
    border:1px solid black;
    border-radius:20px;
    padding:10px
`
const InputForm = styled.form`
    width:100%;
    height:85%;
    background-color:555;
    margin-top:10%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between
`

function DdayList({ ddays, setDdays }) {
  const calculateDday = (dday) => {
    try {
      const targetDateObj = new Date(dday);
      const today = new Date();
      const ddayInMillis = targetDateObj - today;
      let dDay = Math.floor(ddayInMillis / (1000 * 60 * 60 * 24));
      if (dDay > -1) {
        return `D-${dDay}`;
      } else {
        return `D + ${dDay - (dDay * 2) -1}`;
      }
    } catch (error) {
      return;
    }
  };

  const removeDday = (id) => {
    const updatedDdays = ddays.filter((dday) => dday.id !== id);
    setDdays(updatedDdays);
  };

  return (
    <ul>
      {ddays.map((dday) => (
        <li key={dday.id}>
          <div className="deleteDday" onClick={() => removeDday(dday.id)}>
            X
          </div>
          <strong>{dday.title}</strong> - {calculateDday(dday.date)}
        </li>
      ))}
    </ul>
  );
}

function DdayForm({toggle,setToggle}) {
  const [targetTitle, setTargetTitle] = useState("");
  const [targetDate, setTargetDate] = useState("");
  const [ddays, setDdays] = useState([]);

  const titleChange = (e) => {
    setTargetTitle(e.target.value);
  };

  const dateChange = (e) => {
    setTargetDate(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newDday = {
      id: Math.floor(Math.random() * 10000),
      title: targetTitle,
      date: targetDate
    };

    setDdays([...ddays, newDday]);
    setTargetTitle("");
    setTargetDate("");
  };

  const removeDday = id => {
    const removedArr = [...ddays].filter(dday => dday.id !== dday);

    setDdays(removedArr);
  };

  const hide = () => {
    setToggle(false);
  }

  return (
    <div>
      {toggle&&
      <DdayBox>
        <img src={Close} alt="close" className="close" onClick={hide}></img>
        <InputForm onSubmit={onSubmit}>
          <h2>D-DAY 추가</h2>
          <input
            className="titleInput"
            placeholder="제목을 입력하세요"
            onChange={titleChange}
            value={targetTitle}
            required
          />
          <input
            type="date"
            onChange={dateChange}
            value={targetDate}
            required
          />
          <button className="dDaySubmit">추가</button>
        </InputForm>
      </DdayBox>
}
      <DdayList ddays={ddays} setDdays={setDdays}/>
    </div>
  );
}

export default DdayForm