import { createFamily } from "../api/FamilyAPI/createNewFamily";
import { getUserFamily } from "../api/FamilyAPI/getUserFamily";

export const useFamily = () => {
    const fetchFamily = async (token) => getUserFamily(token);
    const newFamily = async (token, params) => createFamily(token, params);

    return { fetchFamily, newFamily };
};
