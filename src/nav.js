import React from 'react';
import DdayCalendar from './components/DdayCalender';
import { styled } from 'styled-components';

const Navigation = styled.div`
    position:fixed;
    width:300px;
    height:500px;
    top:10%;
`

function Nav() {
  return (
    <Navigation>
        <DdayCalendar/>
    </Navigation>
  );
}

export default Nav;