import React from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import { useProducts } from "../../hooks/useProducts";
import useToken from "../../hooks/useToken";

export default function ProductComponent({ id, name, createdAt, reload }) {
    const token = useToken();
    const { deleteProducts, updateProducts } = useProducts();
    const { trigger, setTrigger } = reload;

    const handleDeletion = () => {
        deleteProducts(token, id);
        setTrigger(!trigger);
    };

    return (
        <ComponentWrapper>
            <CreationDate>{dayjs(createdAt).format("DD/MM/YY")}</CreationDate>
            <Name>{name.toUpperCase()}</Name>
            <Edit>
                <ion-icon name='pencil-outline'></ion-icon>
            </Edit>
            <TrashBin onClick={handleDeletion}>
                <ion-icon name='trash-outline'></ion-icon>
            </TrashBin>
        </ComponentWrapper>
    );
}

const ComponentWrapper = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    text-justify: justify;
    font-size: 18px;
    margin-bottom: 10px;
`;
const Name = styled.span`
    margin-left: 15px;
`;

const CreationDate = styled.span`
    color: ${(props) => props.theme.subTitleColor};
`;

const TrashBin = styled.span`
    position: absolute;
    right: 40px;
    cursor: pointer;
`;

const Edit = styled.span``;
