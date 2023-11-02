import api from "../base";

export default async function loadInvitations(id, token) {
    const config = {
        url: `/members/invite/pending/${id}`,
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
    };

    const response = await api(config);

    return response.data;
}
