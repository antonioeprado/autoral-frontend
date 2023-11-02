import React from "react";
import styled, { useTheme } from "styled-components";
import ThemeContext from "../../contexts/ThemeContext";

function MainLayout({ children }) {
    const { light, dark } = useTheme(ThemeContext);
    return <PageWrapper theme={light}>{children}</PageWrapper>;
}

const PageWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    height: 100vh;
    font-family: "Roboto", sans-serif;
    background-color: ${(props) => props.theme.mainColor};
    & > * {
        color: ${(props) => props.theme.textColor};
    }
    & > h2 {
        color: ${(props) => props.theme.subTitleColor};
    }
`;

export default MainLayout;
