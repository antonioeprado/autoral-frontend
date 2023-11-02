import api from "../base";

export async function getFamilyMembers(token, id) {
    const config = {
        url: `/members/family/${id}`,
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await api(config);
    return response.data;
}
