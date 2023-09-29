import React, { useEffect, useState } from "react";
import useToken from "../hooks/useToken";
import ProductComponent from "../components/Product/ProductComponent";
import styled from "styled-components";
import NoProductsMessage from "../components/NoProductsMessage/Message";
import { useProducts } from "../hooks/useProducts";
import { MdAddCircle } from "react-icons/md";
import AddProduct from "../components/AddProduct/AddProduct";
import useWindowDimensions from "../hooks/useWindow";

function Products() {
    const [products, setProducts] = useState();
    const [trigger, setTrigger] = useState(false);
    const [modalIsOpen, setIsOpen] = useState(false);
    const token = useToken();
    const { productsFetch } = useProducts();
    const windowDimensions = useWindowDimensions();
    const { width } = windowDimensions;

    useEffect(() => {
        productsFetch(token)
            .then((res) => {
                setProducts(res);
            })
            .catch((err) => console.log(err));
    }, [trigger]);

    function handleOpen() {
        setIsOpen(!modalIsOpen);
    }

    if (!products) {
        return <div>Loading...</div>;
    }

    return (
        <ComponentWrapper sWidth={width}>
            <SectionTitle>
                <h3>GROCERIES</h3>
            </SectionTitle>
            {products.length === 0 ? (
                <NoProductsMessage />
            ) : (
                <Table>
                    <thead>
                        <tr>
                            <DateHeader>DATE</DateHeader>
                            <ProductHeader>PRODUCT</ProductHeader>
                            <UserHeader>USER</UserHeader>
                            <ActionHeader>ACTIONS</ActionHeader>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <ProductComponent key={product.id} reload={{ trigger, setTrigger }} {...product} />
                        ))}
                    </tbody>
                </Table>
            )}
            <AddWrapper>
                <AddProduct
                    isOpen={modalIsOpen}
                    setIsOpen={setIsOpen}
                    token={token}
                    trigger={trigger}
                    setTrigger={setTrigger}
                />
                <AddButton onClick={handleOpen} />
            </AddWrapper>
        </ComponentWrapper>
    );
}

const ComponentWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    padding-left: ${(props) => (props.sWidth >= 714 ? "80px" : "0px")};
`;

const SectionTitle = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
    font-size: 24px;
`;

const AddWrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    height: 100px;
    width: 55%;
    align-self: flex-end;
`;

const AddButton = styled(MdAddCircle)`
    position: absolute;
    right: 15px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.terciaryColor};
    color: ${(props) => props.theme.mainColor};
    cursor: pointer;
`;

const DateHeader = styled.th`
    column-span: 1;
    width: 80px;
`;
const ProductHeader = styled.th`
    column-span: 3;
`;
const UserHeader = styled.th`
    column-span: 2;
`;

const ActionHeader = styled.th`
    column-span: 1;
    width: 80px;
`;
const Table = styled.table`
    border: ${(props) => `1px solid ${props.theme.textColor}`};
    border-radius: 7px;
    thead {
        height: 40px;
        background-color: ${(props) => props.theme.terciaryColor};
        ${DateHeader} {
            border-radius: 7px 0 0 0;
        }
        ${ActionHeader} {
            border-radius: 0 7px 0 0;
        }
    }
    tbody tr {
        height: 80px;
    }
`;

export default Products;
