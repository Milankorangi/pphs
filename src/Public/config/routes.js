import SignUp from "Public/pages/SignUp";
import Login from "../pages/Login";

const publicRoutes = [
  { path: "/login", component: <Login /> },
  { path: "/signup", component: <SignUp /> },
];

export default publicRoutes;
