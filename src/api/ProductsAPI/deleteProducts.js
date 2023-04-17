import api from "../base";

export async function deleteProduct(token, id) {
    const config = {
        method: "DELETE",
        url: `/auth/product/${id}`,
        headers: {
            authorization: `Bearer ${token}`,
        },
    };

    const response = await api(config);

    return response.data;
}
