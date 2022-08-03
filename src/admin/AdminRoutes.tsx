import { Routes , Route} from "react-router-dom";
import AdminPanel from "./Admin";

function AdminRoutes() {
    return (
        <Routes>
            <Route index element={<AdminPanel/> }></Route>
        </Routes>
    )
}
 export default AdminRoutes;