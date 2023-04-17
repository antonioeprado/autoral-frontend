import React, { useEffect, useState } from "react";
import { fetchProducts } from "../api/ProductsAPI/fetchProducts";
import useToken from "../hooks/useToken";
import ProductComponent from "../components/Product/ProductComponent";
import styled from "styled-components";
import NoProductsMessage from "../components/NoProductsMessage/Message";

function Products() {
    const [products, setProducts] = useState();
    const token = useToken();
    useEffect(() => {
        fetchProducts(token)
            .then((res) => {
                setProducts(res);
            })
            .catch((err) => console.log(err));
    }, []);

    if (!products) {
        return <div>Loading...</div>;
    }

    if (products.length === 0) {
        return <NoProductsMessage />;
    }
    return (
        <ComponentWrapper>
            <SectionTitle>
                <h2>GROCERIES LIST</h2>
            </SectionTitle>
            {products.map((product) => (
                <ProductComponent key={product.id} {...product} />
            ))}
        </ComponentWrapper>
    );
}

const ComponentWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    padding-left: 80px;
`;

const SectionTitle = styled.header`
    margin-bottom: 30px;
    font-size: 24px;
`;

export default Products;
