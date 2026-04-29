import { useState } from "react";
import { NavLink } from "react-router-dom";

const menu = [
  { name: "Dashboard", path: "/", icon: "⊞" },
  {
    name: "Business Dev",
    icon: "◈",
    children: [
      { name: "Clients", path: "/biz/clients" },
      { name: "Sourcing", path: "/biz/sourcing" },
      { name: "Candidate", path: "/biz/candidate" },
    ],
  },
  {
    name: "On Boarding",
    icon: "◎",
    children: [
      { name: "Onboarding", path: "/onboard/main" },
      { name: "Requirement List", path: "/onboard/requirements" },
      { name: "Induction Reports", path: "/onboard/induction" },
    ],
  },
  { name: "Compliance", path: "/compliances", icon: "◻" },
  {
    name: "Client Service",
    icon: "◇",
    children: [
      { name: "Attendance & Salary", path: "/cs/attendance" },
      { name: "ID & Visiting", path: "/cs/id" },
      { name: "Reimbursement", path: "/cs/reimbursement" },
      { name: "Grievance", path: "/cs/grievance" },
      { name: "Incentive", path: "/cs/incentive" },
      { name: "Resignation", path: "/cs/resignation" },
      { name: "Recruitment Track", path: "/cs/recruitment" },
      { name: "Designation Manage", path: "/cs/designation" },
    ],
  },
  {
    name: "Finance",
    icon: "◑",
    children: [
      { name: "Salary Process", path: "/finance/salary" },
      { name: "F&F Tracker", path: "/finance/ff" },
      { name: "Invoice", path: "/finance/invoice" },
      { name: "Annexure", path: "/finance/annexure" },
      { name: "Incentive List", path: "/finance/incentive" },
      { name: "Reimbursement", path: "/finance/reimbursement" },
      { name: "Bonus", path: "/finance/bonus" },
      { name: "ID & Visiting Card", path: "/finance/id" },
      { name: "Leave Encashment", path: "/finance/leave" },
      { name: "Recruitment Tracker", path: "/finance/recruitment" },
      { name: "Wage Sheet", path: "/finance/wage" },
    ],
  },
  {
    name: "Exit Management",
    icon: "◐",
    children: [
      { name: "Exit Management", path: "/exit/manage" },
      { name: "F&F Details", path: "/exit/ff" },
    ],
  },
  {
    name: "HRM",
    icon: "◉",
    children: [
      { name: "Employees", path: "/hrm/employees" },
      { name: "HRMS Details", path: "/hrm/details" },
      { name: "Company Policy", path: "/hrm/policy" },
      { name: "System Setup", path: "/hrm/setup" },
      { name: "Mails", path: "/hrm/mails" },
    ],
  },
  {
    name: "Reports",
    icon: "◬",
    children: [
      { name: "Manage Candidate", path: "/reports/candidate" },
      { name: "Leave Encashment", path: "/reports/leave" },
      { name: "Annexure Report", path: "/reports/annexure" },
      { name: "Resignation", path: "/reports/resignation" },
      { name: "Employee OnBoarding", path: "/reports/onboarding" },
      { name: "Reimbursement", path: "/reports/reimbursement" },
      { name: "Grievance", path: "/reports/grievance" },
      { name: "ID & Visiting Details", path: "/reports/id" },
      { name: "Recruitment & Payouts", path: "/reports/recruitment" },
      { name: "F&F Tracker", path: "/reports/ff" },
      { name: "Incentive Tracker", path: "/reports/incentive" },
      { name: "Invoice List", path: "/reports/invoice" },
    ],
  },
  {
    name: "User Management",
    icon: "◯",
    children: [
      { name: "User", path: "/users/list" },
      { name: "Role", path: "/users/roles" },
    ],
  },
  { name: "Messenger", path: "/messenger", icon: "◫" },
  {
    name: "Settings",
    icon: "◌",
    children: [
      { name: "System Settings", path: "/settings/system" },
      { name: "Subscription Plan", path: "/settings/subscription" },
      { name: "Order", path: "/settings/order" },
    ],
  },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  const toggleMenu = (name: string) => {
    setOpenMenus((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-800/30 backdrop-blur-sm z-30 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-full z-40 flex flex-col
          w-[248px] bg-white border-r border-gray-100
          shadow-[2px_0_20px_rgba(0,0,0,0.08)]
          transition-transform duration-300 ease-in-out
          lg:relative lg:translate-x-0 lg:z-auto lg:shadow-none
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* ── Logo Header ── */}
        <div className="flex items-center gap-3 px-4 py-4 border-b border-gray-100 flex-shrink-0">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white font-bold text-sm shadow-sm flex-shrink-0">
            C
          </div>
          <div>
            <p className="text-[14px] font-bold text-gray-800 leading-none tracking-tight">CorpCRM</p>
            <p className="text-[10px] text-gray-400 leading-none mt-0.5">Management Suite</p>
          </div>
      
          {/* Mobile close */}
          <button
            onClick={onClose}
            className="lg:hidden w-6 h-6 flex items-center justify-center rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors ml-1"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

      

        {/* ── Nav ── */}
        <nav className="flex-1 overflow-y-auto px-2 pb-2 sidebar-scroll">
          {menu.map((item) => {
            /* Simple link */
            if (!item.children) {
              return (
                <NavLink
                  key={item.name + item.path}
                  to={item.path!}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center gap-2.5 px-3 py-2 rounded-xl text-[12.5px] font-medium mb-0.5 transition-all duration-150
                    ${isActive
                      ? "bg-orange-50 text-orange-600 border border-orange-100 shadow-[0_1px_3px_rgba(249,115,22,0.12)]"
                      : "text-black hover:text-gray-700 hover:bg-gray-50"
                    }`
                  }
                >
                  <span className="text-gray-400 text-[12px]">{item.icon}</span>
                  {item.name}
                </NavLink>
              );
            }

            const isExpanded = openMenus[item.name] ?? false;

            return (
              <div key={item.name} className="mb-0.5">
                {/* Parent toggle */}
                <button
                  onClick={() => toggleMenu(item.name)}
                  className={`
                    w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-[12.5px] font-medium
                    transition-all duration-150 text-left group
                    ${isExpanded
                      ? "text-gray-700 bg-gray-50"
                      : "text-black hover:text-gray-700 hover:bg-gray-50"
                    }
                  `}
                >
                  <span className="text-gray-400 text-[12px]">{item.icon}</span>
                  <span className="flex-1 text-left">{item.name}</span>

                  {/* Count badge */}
                  <span className="text-[10px] text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded-full font-mono">
                    {item.children.length}
                  </span>

                  {/* Chevron */}
                  <svg
                    className={`w-3.5 h-3.5 text-gray-300 transition-transform duration-200 ml-0.5 ${isExpanded ? "rotate-90" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Animated submenu */}
                <div
                  className={`overflow-hidden transition-all duration-250 ease-in-out ${
                    isExpanded ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="ml-[22px] my-1 border-l-2 border-orange-100 pl-3 flex flex-col gap-0.5">
                    {item.children.map((child, idx) => (
                      <NavLink
                        key={`${child.name}-${idx}`}
                        to={child.path}
                        onClick={onClose}
                        className={({ isActive }) =>
                          `flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[12px] transition-all duration-150
                          ${isActive
                            ? "text-orange-600 bg-orange-50 font-semibold"
                            : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
                          }`
                        }
                      >
                        <span className={`w-1 h-1 rounded-full flex-shrink-0 transition-colors ${
                          false ? "bg-orange-400" : "bg-gray-200"
                        }`} />
                        {child.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        {/* ── User Footer ── */}
        <div className="border-t border-gray-100 px-3 py-3 bg-gray-50/80 flex-shrink-0">
          <div className="flex items-center gap-2.5 px-1">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white text-[12px] font-bold flex-shrink-0 shadow-sm">
              A
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[12.5px] font-semibold text-gray-700 truncate leading-none">Admin User</p>
              <p className="text-[10.5px] text-gray-400 truncate mt-0.5">admin@corpcrm.com</p>
            </div>
            <button className="w-7 h-7 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-600 hover:bg-white transition-all border border-transparent hover:border-gray-200">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
        </div>
      </aside>

      <style>{`
        .sidebar-scroll::-webkit-scrollbar { width: 3px; }
        .sidebar-scroll::-webkit-scrollbar-track { background: transparent; }
        .sidebar-scroll::-webkit-scrollbar-thumb { background: #f3f4f6; border-radius: 4px; }
        .sidebar-scroll::-webkit-scrollbar-thumb:hover { background: #e5e7eb; }
      `}</style>
    </>
  );
};

export default Sidebar;