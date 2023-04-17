import React from "react";
import styled from "styled-components";

export default function NoProductsMessage() {
    return <ComponentWrapper>It looks like you don't have any products to buy</ComponentWrapper>;
}

const ComponentWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 150px 0;
    width: 100%;
`;
