import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/login";
import UsersPage from "./pages/users";
import UserAddOrUpdatePage from "./pages/userAddOrUpdate";
import MainLayout from "./components/layout";

const routes = {
  Base: "/",
  Login: "/login",
  Users: "/users",
  UserAdd: "/users/add",
  UserUpdate: "/users/update",
};

const router = createBrowserRouter([
  {
    path: routes.Login,
    element: <LoginPage />,
  },
  {
    path: routes.Base,
    element: <MainLayout />,
    children: [
      {
        path: routes.Users,
        element: <UsersPage />,
      },
      {
        path: routes.UserAdd,
        element: <UserAddOrUpdatePage />,
      },
    ],
  },
]);

export default router;
