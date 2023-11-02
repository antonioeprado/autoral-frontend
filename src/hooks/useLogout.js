export const useLogout = () => {
    const userLogout = () => {
        localStorage.removeItem("userData");
        sessionStorage.removeItem("familyData");
    };

    return { userLogout };
};
