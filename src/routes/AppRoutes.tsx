import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HRMLayout from "../modules/hrm/Layout/HRMLayout";
import Employees from "../modules/hrm/pages/Employees";
import HrmsDetails from "../modules/hrm/pages/HrmsDetails";
import CompanyPolicy from "../modules/hrm/pages/CompanyPolicy";
import SystemSetup from "../modules/hrm/pages/SystemSetup";
import Mailmanage from "../modules/hrm/pages/Mailmanage";

export const router = createBrowserRouter([

{ path: "/", element: <MainLayout />,

   children: [

  {path: "hrm", element:<HRMLayout/>
  , children: [
  { path: "employees", element: <Employees />, },
  { path: "details", element: <HrmsDetails /> },
  { path: "policy", element: <CompanyPolicy /> },
    { path: "setup", element: <SystemSetup /> },
    { path: "mails", element: <Mailmanage/> },

    ],
    },

],
},
]);
