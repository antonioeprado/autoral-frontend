import api from "../base";

export async function fetchProducts(token) {
    const config = {
        method: "GET",
        url: "/auth/product",
        headers: {
            authorization: `Bearer ${token}`,
        },
    };
    const response = await api(config);
    return response.data;
}
