import api from "../base";

export async function fetchProducts(token, ids) {
    const config = {
        method: "POST",
        url: `/products/families`,
        headers: {
            authorization: `Bearer ${token}`,
        },
        data: {
            familyIds: ids,
        },
    };
    const response = await api(config);
    return response.data;
}
