export const useLogout = () => {
    const userLogout = () => {
        localStorage.removeItem("userData");
    };

    return { userLogout };
};
