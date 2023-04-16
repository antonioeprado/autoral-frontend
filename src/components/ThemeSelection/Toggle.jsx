import React, { useState } from "react";
import styled from "styled-components";

export default function ToggleSwitch({ checked = false, color = "#6ab04c", theme, themeHandling }) {
    const [toggle, setToggle] = useState(checked);

    const { themes, setTheme } = themeHandling;

    function handleThemeSelection() {
        setToggle(!toggle);
        if (theme.name === "light") {
            return setTheme(themes.dark);
        }
        return setTheme(themes.light);
    }

    return (
        <Switch theme={theme}>
            <Input {...{ color }} type='checkbox' defaultChecked={toggle} />
            <Slider {...{ toggle, color }} onClick={handleThemeSelection} />
        </Switch>
    );
}

const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${(props) => props.theme.textColor};
    border-radius: 15px;
    transition: 0.4s;

    &:before {
        content: "";

        position: absolute;
        left: 2px;
        bottom: 2px;

        width: 20px;
        height: 20px;
        border-radius: 100%;

        background-color: ${(props) => props.theme.mainColor};

        transition: 0.4s;
    }
`;

const Input = styled.input`
    &:checked + ${Slider}:before {
        transform: translateX(23.4px);
    }
`;

const Switch = styled.label`
    position: relative;
    display: inline-block;
    width: 48px;
    height: 24px;
    border-radius: 15px;
    margin-left: 10px;
    transition: 0.4s;

    & ${Input} {
        opacity: 0;
        width: 0;
        height: 0;
    }
`;
