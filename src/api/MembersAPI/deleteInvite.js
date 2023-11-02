import api from "../base";

export async function deleteInvite(inviteId, token) {
    const config = {
        url: `/members/${inviteId}`,
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await api(config);

    return response.data;
}
