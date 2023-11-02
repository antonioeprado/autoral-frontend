import api from "../base";

export async function inviteMember(memberId, familyId, token) {
    const config = {
        url: "/members",
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        data: {
            familyId,
            memberId,
        },
    };

    const response = await api(config);

    return response.data;
}
