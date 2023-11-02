import api from "../base";

export async function updateProduct(token, id, name) {
    const config = {
        method: "PATCH",
        url: `/products/${id}`,
        headers: {
            authorization: `Bearer ${token}`,
        },
        data: {
            name,
        },
    };

    const response = await api(config);

    return response.data;
}
