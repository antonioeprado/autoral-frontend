import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useLogout } from "../../hooks/useLogout";

export default function Menu() {
    const { userLogout } = useLogout();
    const navigate = useNavigate();

    function handleLogout() {
        userLogout();
        navigate("/sign-in");
    }

    return (
        <ComponentWrapper>
            <header>
                <h4>Menu</h4>
            </header>
            <ul>
                <StyledList>
                    <span>
                        <ion-icon name='bag-outline'></ion-icon>
                    </span>
                    <NavLink to='/home'>Home</NavLink>
                </StyledList>
                <StyledList>
                    <span>
                        <ion-icon name='people-outline'></ion-icon>
                    </span>
                    <NavLink to='/family'>Family</NavLink>
                </StyledList>
                <StyledList>
                    <span>
                        <ion-icon name='key-outline'></ion-icon>
                    </span>
                    <NavLink to='/profile'>Profile</NavLink>
                </StyledList>
                <LogoutButton onClick={handleLogout}>
                    <span>
                        <ion-icon name='log-out-outline'></ion-icon>
                    </span>
                    Logout
                </LogoutButton>
            </ul>
        </ComponentWrapper>
    );
}

const ComponentWrapper = styled.nav`
    width: 20%;
    margin-top: 80px;
    & header {
        font-size: 16px;
        line-height: 1.5;
        margin-bottom: 20px;
        text-align: center;
        color: ${(props) => props.theme.terciaryColor};

        h4::before,
        h4::after {
            content: "";
            display: inline-block;
            height: 1px;
            position: relative;
            vertical-align: middle;
            box-sizing: inherit;
            border-bottom: ${(props) => `1px solid ${props.theme.terciaryColor}`};
        }

        h4::before {
            width: 30%;
            margin-left: -30%;
            right: 0.5em;
        }

        h4::after {
            width: 30%;
            margin-right: -30%;
            left: 0.5em;
        }
    }
    & ul {
        display: flex;
        flex-flow: column nowrap;
        align-items: end;
        padding: 0 40px 0 0;
    }
`;

const LogoutButton = styled.li`
    display: flex;
    align-items: center;
    width: 100px;
    list-style: none;
    margin: 10px 0;
    cursor: pointer;
    transition: 300ms;
    &:hover {
        transition: 300ms;
        padding-right: 20px;
    }
    span {
        margin-right: 15px;
        ion-icon {
            font-size: 26px;
        }
    }
`;

const StyledList = styled.li`
    display: flex;
    align-items: center;
    width: 100px;
    list-style: none;
    margin: 10px 0;
    transition: 300ms;
    &:hover {
        transition: 300ms;
        padding-right: 20px;
    }
    a {
        width: 80px;
        color: ${(props) => props.theme.textColor};
        text-decoration: none;
        text-align: center;
    }
    a.active {
        padding-bottom: 5px;
        border-bottom: ${(props) => `1px solid ${props.theme.subTitleColor}`};
    }
    span {
        margin-right: 15px;
        ion-icon {
            font-size: 26px;
        }
    }
`;
