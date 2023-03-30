import { Routes, Route } from "react-router-dom";
import { RequireAuth } from "./components/Contexts/RequireAuth";
import { CatApi } from "./pages/CatApi";
import { DogApi } from "./pages/DogApi";
import { Start } from "./pages/Start";
import { ApiUser } from "./pages/ApiUser";
import { CrudApi } from "./pages/ApiCrud";
import { ClientsApi } from "./components/Interfaces/ClientsApi";
import { Dashboard } from "./pages/Dashboard";
import { ApiCrudForm } from "./pages/ApiCrudForm";
import { SignUpDev } from "./pages/SignUpDev";

export function Router() {
    function user(user: ClientsApi): void {
        throw new Error("Function not implemented.");
    }

    return (
        <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/user" element={<RequireAuth><ApiUser onSelectUser={user} /></RequireAuth>} />
            <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
            <Route path="/dog" element={<RequireAuth><DogApi /></RequireAuth>} />
            <Route path="/cat" element={<RequireAuth><CatApi statusCode={""} /></RequireAuth>} />
            <Route path="/crud" element={<RequireAuth><CrudApi /></RequireAuth>} />
            <Route path="/form/:id" element={<RequireAuth><ApiCrudForm /></RequireAuth>} />
            <Route path="/form" element={<RequireAuth><ApiCrudForm /></RequireAuth>} />
            <Route path="/sign-up/dev" element={< SignUpDev />} />
        </Routes>
    )
}