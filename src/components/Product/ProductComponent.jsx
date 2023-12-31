import React, { useState } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import { useProducts } from "../../hooks/useProducts";
import useToken from "../../hooks/useToken";
import { BsTrash3, BsPencilSquare } from "react-icons/bs";

export default function ProductComponent({ id, name, createdAt, userName, familyName, reload }) {
    const [update, setUpdate] = useState(false);
    const [newName, setNewName] = useState(name);
    const token = useToken();
    const { deleteProducts, updateProducts } = useProducts();
    const { trigger, setTrigger } = reload;

    const handleDeletion = () => {
        deleteProducts(token, id).then(() => {
            setTrigger(!trigger);
        });
    };

    const handleEdit = (e) => {
        setNewName(e.target.value);
    };

    function handleFocus(e) {
        e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length);
    }

    function handleKeyPress(e) {
        if (e.key === "Escape") return setUpdate(false);
        else if (e.key === "Enter") {
            updateProducts(token, id, newName).then(() => {
                setUpdate(false);
                setTrigger(!trigger);
            });
        }
    }

    return (
        <ComponentWrapper>
            <CreationDate>{dayjs(createdAt).format("DD/MM/YY")}</CreationDate>
            {update ? (
                <ProductName>
                    <EditContainer
                        ref={(ref) => ref && ref.focus()}
                        defaultValue={name}
                        onChange={handleEdit}
                        onFocus={handleFocus}
                        onKeyDown={handleKeyPress}
                    />
                </ProductName>
            ) : (
                <ProductName>{name.toUpperCase()}</ProductName>
            )}
            <User>{userName}</User>
            <Family>{familyName}</Family>
            <Actions>
                <BsPencilSquare onClick={() => setUpdate(!update)} />
                <BsTrash3 onClick={handleDeletion} />
            </Actions>
        </ComponentWrapper>
    );
}

const ProductName = styled.td`
    width: 50%;
`;

const CreationDate = styled.td`
    text-align: center;
    color: ${(props) => props.theme.subTitleColor};
`;

const User = styled.td``;
const Family = styled.td``;

const Actions = styled.td`
    display: flex;
    height: inherit;
    align-items: center;
    justify-content: space-around;
    font-size: 24px;
    & > * {
        cursor: pointer;
    }
`;

const ComponentWrapper = styled.tr`
    & td:not(${CreationDate}) {
        text-indent: 10px;
    }
`;

const EditContainer = styled.input`
    all: unset;
    height: 100%;
    width: 100%;
    text-transform: uppercase;
`;
