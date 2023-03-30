import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

export function useUser() {
    const context = useContext(AuthContext);
    return context;
}