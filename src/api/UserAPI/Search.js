import api from "../base";

export async function SearchUser(token, name) {
    const config = {
        url: `/users/search/?user=${name}`,
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await api(config);
    return response.data;
}
