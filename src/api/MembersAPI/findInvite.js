import api from "../base";

export async function findInvite(searchId, familyId, token) {
    const config = {
        url: `/members/invite?memberId=${searchId}&familyId=${familyId}`,
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await api(config);

    return response.data;
}
