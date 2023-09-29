import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useLogout } from "../../hooks/useLogout";

export default function MobileMenu() {
    const { userLogout } = useLogout();
    const navigate = useNavigate();

    function handleLogout() {
        userLogout();
        navigate("/sign-in");
    }

    return (
        <ComponentWrapper>
            <StyledList>
                <NavLink to='/home'>
                    <ion-icon name='bag-outline'></ion-icon>
                </NavLink>
            </StyledList>
            <StyledList>
                <NavLink to='/family'>
                    <ion-icon name='people-outline'></ion-icon>
                </NavLink>
            </StyledList>
            <StyledList>
                <NavLink to='/profile'>
                    <ion-icon name='key-outline'></ion-icon>
                </NavLink>
            </StyledList>
            <StyledList onClick={handleLogout}>
                <ion-icon name='log-out-outline'></ion-icon>
            </StyledList>
        </ComponentWrapper>
    );
}

const ComponentWrapper = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: ${(props) => props.theme.mainColor};
`;

const StyledList = styled.div`
    display: flex;
    align-items: center;
    width: 100px;
    list-style: none;
    margin: 10px 0;
    & > * {
        width: 80px;
        color: ${(props) => props.theme.textColor};
        text-decoration: none;
        text-align: center;
    }

    &:last-child {
        cursor: pointer;
    }

    a.active {
        padding-bottom: 5px;
        border-bottom: ${(props) => `1px solid ${props.theme.subTitleColor}`};
    }

    ion-icon {
        font-size: 2rem;
    }
`;
