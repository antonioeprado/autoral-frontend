import api from "../base";

export async function deleteProduct(token, id) {
    const config = {
        method: "DELETE",
        url: `/products/${id}`,
        headers: {
            authorization: `Bearer ${token}`,
        },
    };

    const response = await api(config);

    return response.data;
}
