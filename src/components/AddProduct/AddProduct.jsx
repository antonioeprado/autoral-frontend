import { useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import styled from "styled-components";

export default function AddProduct({ id, token, trigger, setTrigger, familyData }) {
    const [item, setItem] = useState("");
    const [familyId, setFamilyId] = useState();

    const { registerProduct } = useProducts();

    function handleChange(e) {
        setItem(e.target.value);
    }

    function registerItem() {
        if (familyId && item.length !== 0) {
            registerProduct(token, id, item, Number(familyId)).then(() => {
                setItem("");
                setTrigger(!trigger);
            });
        }
    }

    function handleKeyPress(e) {
        if (e.key === "Escape") {
            setItem("");
            return setIsOpen(false);
        } else if (e.key === "Enter") {
            registerItem();
        }
    }

    function handleSelection(e) {
        setFamilyId(e.target.value);
    }

    return (
        <ComponentWrapper>
            <label>
                <NameInput
                    type='text'
                    value={item}
                    onChange={handleChange}
                    onKeyDown={handleKeyPress}
                    placeholder='Enter new product name here'
                />
            </label>
            <label htmlFor='families'>Select a family:</label>
            <select name='families' id='families' onChange={handleSelection}>
                <option value=''></option>
                {familyData.map((family, index) => (
                    <option key={index} value={family.id}>
                        {family.name}
                    </option>
                ))}
            </select>
            <SubmitButton type='button' onClick={registerItem}>
                Register
            </SubmitButton>
        </ComponentWrapper>
    );
}

const ComponentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: ${(props) => props.theme.mainColor};
    color: ${(props) => props.theme.textColor};
    height: 80px;
    width: 600px;
    border: 1px solid black;
    border-radius: 3px;
    box-shadow: 5px 5px 10px black;
    font-size: 16px;
    /* padding: 0 20px; */
    @media screen and (max-width: 600px) {
        flex-flow: row wrap;
        max-width: 314px;
        width: fit-content;
        height: fit-content;
        padding: 20px 0;
    }
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
    border: 1px solid black;
    border-radius: 3px;
    background-color: ${(props) => props.theme.mainColor};
    color: ${(props) => props.theme.textColor};
    font-size: 12px;
    text-align: center;
    cursor: pointer;
    user-select: none;
`;
