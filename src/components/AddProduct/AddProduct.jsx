import { useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import { useContext } from "react";
import FamilyContext from "../../contexts/FamilyContext";
import styled from "styled-components";

export default function AddProduct({ isOpen, setIsOpen, token, trigger, setTrigger }) {
    const [item, setItem] = useState("");

    const { familyData } = useContext(FamilyContext);
    const { registerProduct } = useProducts();

    function handleChange(e) {
        setItem(e.target.value);
    }

    function registerItem() {
        registerProduct(token, item, familyData.id).then(() => {
            setItem("");
            setTrigger(!trigger);
        });
    }

    function handleKeyPress(e) {
        if (e.key === "Escape") {
            setItem("");
            return setIsOpen(false);
        } else if (e.key === "Enter") {
            registerItem();
        }
    }

    return (
        <ComponentWrapper isOpen={isOpen}>
            <label>
                <NameInput type='text' value={item} onChange={handleChange} onKeyDown={handleKeyPress} />
            </label>
            <SubmitButton type='button' onClick={registerItem}>
                Register
            </SubmitButton>
        </ComponentWrapper>
    );
}

const ComponentWrapper = styled.div`
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    align-items: center;
    justify-content: space-evenly;
    background-color: ${(props) => props.theme.terciaryColor};
    color: ${(props) => props.theme.textColor};
    width: 400px;
    height: 80px;
    border-radius: 10px;
    box-shadow: 5px 5px 10px black;
    font-size: 16px;
`;

const NameInput = styled.input`
    width: 210px;
    height: 32px;
    padding-left: 6px;
`;

const SubmitButton = styled.button`
    all: unset;
    width: 110px;
    height: 32px;
    border-radius: 3px;
    background-color: ${(props) => props.theme.mainColor};
    color: ${(props) => props.theme.textColor};
    font-size: 12px;
    text-align: center;
    cursor: pointer;
    user-select: none;
`;
