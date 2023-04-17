import api from "../base";

export async function createProduct(token, name, familyId) {
    const config = {
        method: "POST",
        url: "/auth/product",
        headers: {
            authorization: `Bearer ${token}`,
        },
        data: {
            name,
            familyId,
        },
    };

    const response = await api(config);

    return response.data;
}
