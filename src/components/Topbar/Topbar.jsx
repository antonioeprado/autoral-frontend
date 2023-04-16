import React from "react";
import styled, { useTheme } from "styled-components";
import ToggleSwitch from "../ThemeSelection/Toggle";
import ThemeContext from "../../contexts/ThemeContext";
import Title from "../Title/Title";

function Topbar(props) {
    const theme = useTheme(ThemeContext);
    const { themes, setTheme } = props;

    return (
        <ComponentWrapper theme={theme}>
            <Title />
            <div>
                <span>{`${theme.name} mode`}</span>
                <ToggleSwitch theme={theme} themeHandling={{ themes, setTheme }} />
            </div>
        </ComponentWrapper>
    );
}

const ComponentWrapper = styled.nav`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: 80px;
    background-color: ${(props) => props.theme.secondaryColor};
    & div {
        margin-right: 15px;
        color: ${(props) => props.theme.topbarTextColor};
    }
`;

export default Topbar;
