import React from "react";
import styled, { useTheme } from "styled-components";
import ThemeContext from "../../contexts/ThemeContext";

function Title() {
    const theme = useTheme(ThemeContext);
    return <TitleStyled theme={theme}>Groceries App</TitleStyled>;
}

const TitleStyled = styled.div`
    font-size: 3vw;
    font-family: "Syncopate", sans-serif;
    color: ${(props) => props.theme.topbarTextColor};
    text-shadow: 0px -3px 4px #516391;
    margin: 0 15px;
    cursor: default;
    user-select: none;
`;
export default Title;
