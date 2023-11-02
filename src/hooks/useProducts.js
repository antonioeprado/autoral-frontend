import { deleteProduct } from "../api/ProductsAPI/deleteProducts";
import { updateProduct } from "../api/ProductsAPI/updateProducts";
import { fetchProducts } from "../api/ProductsAPI/fetchProducts";
import { createProduct } from "../api/ProductsAPI/createProducts";

export const useProducts = () => {
    const productsFetch = (token, id) => fetchProducts(token, id);
    const deleteProducts = (token, id) => deleteProduct(token, id);
    const updateProducts = (token, id, name) => updateProduct(token, id, name);
    const registerProduct = (token, id, name, familyId) => createProduct(token, id, name, familyId);

    return { productsFetch, deleteProducts, updateProducts, registerProduct };
};
