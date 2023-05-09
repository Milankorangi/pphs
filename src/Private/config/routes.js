import { lazy } from "react";

//Dashboard
// const Dashboard = lazy(() => import("../pages/Dashboard"));
import Dashboard from "../pages/Dashboard";
import MedicalRecords from "../pages/MedicalRecords";

const privateRoutes = [
  { path: "/", component: <Dashboard /> },
  { path: "/medical-records", component: <MedicalRecords /> },
];

export default privateRoutes;
