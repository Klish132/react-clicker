import {ClickerPage} from "../../pages/clicker/ui/ClickerPage";
import {Navigate} from "react-router-dom";

export const routes = [
    { path: "", element: <ClickerPage/> },
    {path: "*", element: <Navigate to={""} replace/>}
]