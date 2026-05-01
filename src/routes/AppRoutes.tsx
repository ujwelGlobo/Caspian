import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HRMLayout from "../modules/hrm/Layout/HRMLayout";
import Employees from "../modules/hrm/pages/Employees";
import HrmsDetails from "../modules/hrm/pages/HrmsDetails";
import CompanyPolicy from "../modules/hrm/pages/CompanyPolicy";
import SystemSetup from "../modules/hrm/pages/SystemSetup";
import Mailmanage from "../modules/hrm/pages/Mailmanage";
import Dashboard from "../modules/Dashboard/Pages/Dashboard";
import AddEmployee from "../modules/hrm/pages/AddEmployee";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Dashboard /> }, 

      {
        path: "hrm",
        element: <HRMLayout />,
        children: [
          { path: "employees", element: <Employees /> },
          { path: "employees/new", element: <AddEmployee/>},
          { path: "details", element: <HrmsDetails /> },
          { path: "policy", element: <CompanyPolicy /> },
          { path: "setup", element: <SystemSetup /> },
          { path: "mails", element: <Mailmanage /> },
        ],
      },
    ],
  },
]);
