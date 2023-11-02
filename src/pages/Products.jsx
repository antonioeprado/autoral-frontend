import React, { useEffect, useState } from "react";
import useUser from "../hooks/useUser";
import ProductComponent from "../components/Product/ProductComponent";
import styled from "styled-components";
import NoProductsMessage from "../components/NoProductsMessage/Message";
import { useProducts } from "../hooks/useProducts";
import AddProduct from "../components/AddProduct/AddProduct";
import useWindowDimensions from "../hooks/useWindow";
import { useContext } from "react";
import FamilyContext from "../contexts/FamilyContext";

function Products() {
    const [products, setProducts] = useState([]);
    const [trigger, setTrigger] = useState(false);
    const { id, access_token: token } = useUser();
    const { productsFetch } = useProducts();
    const windowDimensions = useWindowDimensions();
    const { width } = windowDimensions;
    const { familyData } = useContext(FamilyContext);

    useEffect(() => {
        const familyIds = familyData.map((item) => item.id);
        productsFetch(token, familyIds)
            .then((res) => setProducts(res))
            .catch((err) => console.log(err));
    }, [trigger]);

    if (!products) {
        return <div>Loading...</div>;
    }

    return (
        <ComponentWrapper sWidth={width}>
            <SectionTitle>
                <h3>GROCERIES</h3>
                <AddWrapper>
                    <AddProduct
                        id={id}
                        token={token}
                        trigger={trigger}
                        setTrigger={setTrigger}
                        familyData={familyData}
                    />
                </AddWrapper>
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
                            <FamilyHeader>FAMILY</FamilyHeader>
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
    @media screen and (max-width: 600px) {
        flex-flow: column nowrap;
    }
`;

const AddWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100px;
`;

const DateHeader = styled.th`
    column-span: 1;
    width: 70px;
`;
const ProductHeader = styled.th`
    column-span: 2;
`;
const UserHeader = styled.th`
    column-span: 1;
`;

const FamilyHeader = styled.th`
    column-span: 1;
`;

const ActionHeader = styled.th`
    column-span: 1;
    width: 80px;
`;
const Table = styled.table`
    border: ${(props) => `1px solid ${props.theme.textColor}`};
    border-radius: 7px;
    margin-bottom: 80px;
    max-width: 900px;
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
