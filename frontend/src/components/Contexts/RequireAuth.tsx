import { useContext } from "react";
import { Start } from "../../pages/Start"
/* import { useUser } from "../hooks/useUser"; */
import { AuthContext } from "./AuthContext";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const auth = useContext(AuthContext);

    if (!auth.user) {
        return <Start />;
    }

    return children;
}

