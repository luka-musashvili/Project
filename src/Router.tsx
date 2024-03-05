import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/login";
import UsersPage from "./pages/users";
import MainLayout from "./components/layout";

const routes = {
    Base: "/",
    Login: "/login",
    Users: "/users",
}

const router = createBrowserRouter([
    {
      path: routes.Login,
      element: <LoginPage />,
    },
    {
        path: routes.Base,
        element: <MainLayout/>,
        children: [
            {
                path: routes.Users,
                element: <UsersPage />,
            },
        ]
    }
    
]);

export default router