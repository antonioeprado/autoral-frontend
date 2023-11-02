import React from "react";
import styled from "styled-components";

export default function NoProductsMessage() {
    return (
        <ComponentWrapper>
            <p>It looks like you don't have any products to buy</p>
        </ComponentWrapper>
    );
}

const ComponentWrapper = styled.div`
    display: flex;
    width: 100%;
    margin: auto;
    padding: 120px 0px;
`;
