import React from "react";
import Menu from "../components/Menu/Menu";
import styled from "styled-components";
import { Outlet, useLocation } from "react-router-dom";
import jwtDecode from "jwt-decode";
import useToken from "../hooks/useToken";
import useWindowDimensions from "../hooks/useWindow";
import MobileMenu from "../components/Menu/MobileMenu";

function Homepage() {
    const token = useToken();
    const userData = jwtDecode(token);
    const windowDimensions = useWindowDimensions();
    const location = useLocation();

    return (
        <ComponentWrapper>
            {windowDimensions.width >= 714 && <Menu />}
            <MainContent sWidth={windowDimensions.width}>
                {windowDimensions.width >= 714 && location.pathname === "/home" && (
                    <h2>Welcome back, {userData && userData.name}</h2>
                )}
                <Outlet />
                {windowDimensions.width < 714 && <MobileMenu />}
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
    width: ${(props) => (props.sWidth >= 714 ? "80%" : "100%")};
    height: 100%;
`;

export default Homepage;
