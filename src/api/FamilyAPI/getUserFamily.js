import api from "../base";

export async function getUserFamily(token, id) {
    const config = {
        url: `/families/user/${id}`,
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await api(config);
    return response.data;
}
