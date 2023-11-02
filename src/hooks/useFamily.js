import { createFamily } from "../api/FamilyAPI/createNewFamily";
import { getUserFamily } from "../api/FamilyAPI/getUserFamily";
import { getFamilyMembers } from "../api/MembersAPI/getMembers";

export const useFamily = () => {
    const fetchFamily = async (token, id) => getUserFamily(token, id);
    const newFamily = async (token, params) => createFamily(token, params);
    const getMembers = async (token, familyId) => getFamilyMembers(token, familyId);

    return { fetchFamily, newFamily, getMembers };
};
