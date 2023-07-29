import { Routes , Route} from "react-router-dom";
import AdminPanel from "./Admin";
import ProfileForm from "./pages/ProfileForm";
import ProfilesPage from "./pages/ProfilesPage";
import ActiveProfile from "./pages/ActiveProfile";
import ProfileEditForm from "./pages/ProfileEditForm";

function AdminRoutes() {
    return (
        <Routes>
            <Route element={<AdminPanel/>}>
                <Route index element={<h1>Admin Page</h1>}/>
                <Route path="profile-create" element={<ProfileForm/>}/>
                <Route path="profile-list" element={<ProfilesPage/>}/>
                <Route path="profile-edit/:id" element={<ProfileEditForm/>}/>
                <Route path="active-profile" element={<ActiveProfile />} />
            </Route>

        </Routes>
    )
}
 export default AdminRoutes;