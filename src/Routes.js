import { Routes, Route } from "react-router-dom";
import Auth from "./view/Auth/Auth";
import Profile from "./view/Profile/Profile";
import NotFoundComponent from "./view/NotFoundComponent/NotFoundComponent";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<NotFoundComponent />} />
        </Routes>
    )
}
export default MainRoutes
