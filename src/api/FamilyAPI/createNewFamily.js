import api from "../base";

export async function createFamily(token, params) {
    const config = {
        url: "/auth/family",
        method: "POST",
        headers: {
            authorization: `Bearer ${token}`,
        },
        data: { ...params },
    };
    const response = await api(config);

    return response.data;
}
