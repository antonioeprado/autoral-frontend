import React from "react";
import Menu from "../components/Menu/Menu";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

function Homepage() {
    return (
        <ComponentWrapper>
            <Menu />
            <MainContent>
                <Outlet />
            </MainContent>
        </ComponentWrapper>
    );
}

const ComponentWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    margin: auto;
    margin-top: 100px;
    height: 100%;
    width: 90%;
`;

const MainContent = styled.main`
    width: 80%;
`;

export default Homepage;
