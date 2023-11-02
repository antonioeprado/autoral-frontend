import React from "react";
import styled, { useTheme } from "styled-components";
import ToggleSwitch from "../ThemeSelection/Toggle";
import ThemeContext from "../../contexts/ThemeContext";
import Title from "../Title/Title";
import Searchbox from "../Searchbox/searchbox";
import { useLocation } from "react-router-dom";

function Topbar(props) {
    const theme = useTheme(ThemeContext);
    const { themes, setTheme } = props;
    const location = useLocation();

    return (
        <ComponentWrapper theme={theme}>
            <Title />
            {location.pathname === "/family" && <Searchbox />}
            <div style={{ padding: 12 }}>
                <ThemeName>{`${theme.name} mode`}</ThemeName>
                <ToggleSwitch theme={theme} themeHandling={{ themes, setTheme }} />
            </div>
        </ComponentWrapper>
    );
}

const ComponentWrapper = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: 80px;
    background-color: ${(props) => props.theme.secondaryColor};
    &:not(SearchboxWrapper) {
        margin-right: 15px;
        color: ${(props) => props.theme.topbarTextColor};
        span {
            cursor: default;
            user-select: none;
        }
    }
`;

const ThemeName = styled.span`
    @media screen and (max-width: 600px) {
        font-size: 12px;
    }
`;

export default Topbar;
