import { Routes, Route } from "react-router-dom";
import { RequireAuth } from "./components/Contexts/RequireAuth";
import { CatApi } from "./pages/CatApi";
import { DogApi } from "./pages/DogApi";
import { Start } from "./pages/Start";
import { ApiUser } from "./pages/ApiUser";
import { CrudApi } from "./pages/ApiCrud";
import { Dashboard } from "./pages/Dashboard";
import { ApiCrudForm } from "./pages/ApiCrudForm";
import { SignUpDev } from "./pages/SignUpDev";
import { ClientsApi } from "./components/Interfaces/ClientsApi";

export function Router() {

    return (
        <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/user" element={<RequireAuth><ApiUser onSelectUser={(user: ClientsApi) => { console.log(user) }} /></RequireAuth>} />
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