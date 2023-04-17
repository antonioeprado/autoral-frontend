import { deleteProduct } from "../api/ProductsAPI/deleteProducts";
import { updateProduct } from "../api/ProductsAPI/updateProducts";
import { fetchProducts } from "../api/ProductsAPI/fetchProducts";
import { createProduct } from "../api/ProductsAPI/createProducts";

export const useProducts = () => {
    const productsFetch = (token) => fetchProducts(token);
    const deleteProducts = (token, id) => deleteProduct(token, id);
    const updateProducts = (token, id, name) => updateProduct(token, id, name);
    const registerProduct = (token, name, familyId) => createProduct(token, name, familyId);

    return { productsFetch, deleteProducts, updateProducts, registerProduct };
};
