import { createContext } from "react";
import useSessionStorage from "../hooks/useSessionStorage";

const FamilyContext = createContext();
export default FamilyContext;

export function FamilyProvider({ children }) {
    const [familyData, setFamilyData] = useSessionStorage("familyData", {});

    return <FamilyContext.Provider value={{ familyData, setFamilyData }}>{children}</FamilyContext.Provider>;
}
