import api from "../base";

export async function SignIn(form) {
    const response = await api.post("/user/sign-in", { ...form });
    return response.data;
}
