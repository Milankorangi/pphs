import { lazy } from "react";

//Dashboard
// const Dashboard = lazy(() => import("../pages/Dashboard"));
import Dashboard from "../pages/Dashboard";
import MedicalRecords from "../pages/MedicalRecords";
import MyAccount from "Private/pages/MyAccount";
import ScheduleAppointment from "Private/pages/ScheduleAppointment";
import RefillPrescriptions from "Private/pages/RefillPrescriptions";
import OnlinePayment from "Private/pages/OnlinePayment";
import InteractiveEducation from "Private/pages/InteractiveEducation";
import CommunityResources from "Private/pages/CommunityResources";
import Contact from "Private/pages/Contact";

const privateRoutes = [
  { path: "/", component: <Dashboard /> },
  { path: "/my-account", component: <MyAccount /> },
  { path: "/schedule-appointment", component: <ScheduleAppointment /> },
  { path: "/medical-records", component: <MedicalRecords /> },
  { path: "/refill-prescriptions", component: <RefillPrescriptions /> },
  { path: "/online-payment", component: <OnlinePayment /> },
  { path: "/interactive-education", component: <InteractiveEducation /> },
  { path: "/community-resources", component: <CommunityResources /> },
  { path: "/contact", component: <Contact /> },
];

export default privateRoutes;
