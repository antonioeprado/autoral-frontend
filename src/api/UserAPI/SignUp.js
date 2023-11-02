import api from "../base";

export async function SignUp(form) {
    const response = await api.post("/users/sign-up", { ...form });
    return response.data;
}
