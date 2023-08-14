import React, { useState } from 'react';
import { styled } from 'styled-components';
import DdayForm from './DdayForm';

const Navigation = styled.nav`
    // position:sticky;
    width:12%;
    height:40%;
    top:15%;
    right:3%;
    padding:10px 30px;
`
const Title = styled.div`
    display:flex;
    justify-content:space-between;
`

function Nav() {
    const [toggle, setToggle] = useState(false);
    const show = () =>{
        setToggle(true);
    }
  return (
    <Navigation>
        <Title>
            <h3>
                D-Day
            </h3>
            <h3 className='addDday'
            onClick={show}
            >
                +
            </h3>
        </Title>
        <DdayForm 
        toggle={toggle}
        setToggle={setToggle}
        />
    </Navigation>
  );
}

export default Nav;