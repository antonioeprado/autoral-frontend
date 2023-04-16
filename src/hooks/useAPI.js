import { SignUp, SignIn } from "../api/UserAPI";

export const useAPI = () => {
    const signUp = (params) => SignUp(params);
    const signIn = (params) => SignIn(params);

    return { signUp, signIn };
};
