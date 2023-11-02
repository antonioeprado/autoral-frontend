import api from "../base";

export async function createProduct(token, id, name, familyId) {
    const config = {
        method: "POST",
        url: `/products`,
        headers: {
            Authorization: `Bearer ${token}`,
        },
        data: {
            name,
            familyId,
            memberId: id,
        },
    };

    const response = await api(config);

    return response.data;
}
