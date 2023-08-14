import React from "react";
import styled, { css } from "styled-components";
import logo from "../img/logo.png";

const HeaderStyle = styled.div`
    border-bottom:1px solid #7DA09A
`

function Header(){
    return(
        <HeaderStyle className="header">
            <img src={logo} alt></img>
        </HeaderStyle>
    )
}

export default Header