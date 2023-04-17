import React from "react";
import styled from "styled-components";
import dayjs from "dayjs";

export default function ProductComponent({ name, createdAt }) {
    return (
        <ComponentWrapper>
            <CreationDate>{dayjs(createdAt).format("DD/MM/YY")}</CreationDate>
            <Name>{name.toUpperCase()}</Name>
        </ComponentWrapper>
    );
}

const ComponentWrapper = styled.div`
    display: flex;
    width: 200px;
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
