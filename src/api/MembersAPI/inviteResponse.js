import api from "../base";
import { deleteInvite } from "./deleteInvite";

export default async function inviteResponse(id, token, action) {
    if (action === "Reject") {
        return deleteInvite(id, token);
    }

    const config = {
        url: `/members/${id}`,
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}` },
        data: {
            pending: false,
        },
    };

    const response = await api(config);

    return response.data;
}
