import React, { useEffect, useState } from "react";
import useToken from "../hooks/useToken";
import ProductComponent from "../components/Product/ProductComponent";
import styled from "styled-components";
import NoProductsMessage from "../components/NoProductsMessage/Message";
import { useProducts } from "../hooks/useProducts";
import ReactModal from "react-modal";
import ProductModal from "../components/ProductModal/ProductModal";

function Products() {
    const [products, setProducts] = useState();
    const [trigger, setTrigger] = useState(false);
    const [modalIsOpen, setIsOpen] = useState(false);

    const token = useToken();
    const { productsFetch } = useProducts();

    useEffect(() => {
        productsFetch(token)
            .then((res) => {
                setProducts(res);
            })
            .catch((err) => console.log(err));
    }, [trigger]);

    function handleOpen() {
        setIsOpen(true);
    }

    if (!products) {
        return <div>Loading...</div>;
    }

    return (
        <ComponentWrapper id='modal-main'>
            <SectionTitle>
                <h2>GROCERIES LIST</h2>
            </SectionTitle>
            {products.length === 0 && <NoProductsMessage />}
            {products.map((product) => (
                <ProductComponent key={product.id} reload={{ trigger, setTrigger }} {...product} />
            ))}
            <AddButton onClick={handleOpen}>
                <ion-icon name='add-outline'></ion-icon>
            </AddButton>
            <ProductModal token={token} modalState={{ modalIsOpen, setIsOpen }} reload={{ trigger, setTrigger }} />
        </ComponentWrapper>
    );
}

const ComponentWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    padding-left: 80px;
    height: 100%;
    position: relative;
`;

const SectionTitle = styled.header`
    margin-bottom: 30px;
    font-size: 24px;
`;

const AddButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 240px;
    bottom: 180px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.terciaryColor};
    color: ${(props) => props.theme.mainColor};
    font-size: 48px;
    cursor: pointer;
`;

export default Products;
