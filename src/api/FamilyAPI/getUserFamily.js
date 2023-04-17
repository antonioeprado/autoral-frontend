import api from "../base";

export async function getUserFamily(token) {
    const config = {
        url: "/auth/family",
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await api(config);
    return response.data;
}
