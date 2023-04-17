import React from "react";
import styled from "styled-components";

export default function NoProductsMessage() {
    return <ComponentWrapper>It looks like you don't have any products to buy</ComponentWrapper>;
}

const ComponentWrapper = styled.div`
    display: flex;
    padding: 120px;
    width: 100%;
`;
