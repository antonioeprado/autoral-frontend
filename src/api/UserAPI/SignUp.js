import api from "../base";

export async function SignUp(form) {
    const response = await api.post("/user/sign-up", { ...form });
    return response.data;
}
