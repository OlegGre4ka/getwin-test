import { Routes, Route } from "react-router-dom";
import Auth from "./view/Auth/Auth";
import Profile from "./view/Profile/Profile";
import NotFoundComponent from "./view/NotFoundComponent/NotFoundComponent";
import ConformTelephone from "./view/ConfirmTelephone/ConfirmTelephone";
const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/confirm-phone" element={<ConformTelephone />} />

            <Route path="*" element={<NotFoundComponent />} />
        </Routes>
    )
}
export default MainRoutes
