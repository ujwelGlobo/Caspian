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
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed top-14 left-0 h-[calc(100vh-56px)] z-40 flex flex-col w-[248px]
          bg-[rgb(var(--color-surface))] border-r border-[rgb(var(--color-border-soft))]
          shadow-[2px_0_20px_rgba(0,0,0,0.08)]
          transition-transform duration-300 ease-in-out
          lg:fixed lg:translate-x-0 lg:z-auto lg:shadow-none
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* ── Logo Header ── */}
        <div className="flex items-center gap-3 px-4 py-4 border-b border-[rgb(var(--color-border-soft))] flex-shrink-0">
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-sm flex-shrink-0"
            style={{ background: `rgb(var(--accent))` }}
          >
            C
          </div>
          <div>
            <p className="text-[14px] font-bold leading-none tracking-tight text-[rgb(var(--color-text))]">
              CorpCRM
            </p>
            <p className="text-[10px] leading-none mt-0.5 text-[rgb(var(--color-text-muted))]">
              Management Suite
            </p>
          </div>
          <span
            className="ml-auto text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider border"
            style={{
              color: `rgb(var(--accent))`,
              background: `rgb(var(--accent-light))`,
              borderColor: `rgb(var(--accent-border))`,
            }}
          >
            Pro
          </span>
          {/* Mobile close */}
          <button
            onClick={onClose}
            className="lg:hidden w-6 h-6 flex items-center justify-center rounded-md transition-colors ml-1 text-[rgb(var(--color-text-muted))] hover:text-[rgb(var(--color-text))] hover:bg-[rgb(var(--color-bg-muted))]"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

 

        {/* ── Nav ── */}
        <nav className="flex-1 overflow-y-auto px-2 pb-2 sidebar-scroll">
          {menu.map((item) => {
            if (!item.children) {
              return (
                <NavLink
                  key={item.name + item.path}
                  to={item.path!}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center gap-2.5 px-3 py-2 rounded-xl text-[12.5px] font-medium mb-0.5 transition-all duration-150 border
                    ${isActive ? "active-nav-item" : "inactive-nav-item"}`
                  }
                  style={({ isActive }) =>
                    isActive
                      ? {
                          background: `rgb(var(--accent-light))`,
                          color: `rgb(var(--accent))`,
                          borderColor: `rgb(var(--accent-border))`,
                        }
                      : {
                          color: `rgb(var(--color-text-soft))`,
                          borderColor: "transparent",
                        }
                  }
                >
                  <span className="text-[12px] text-[rgb(var(--color-text-muted))]">{item.icon}</span>
                  {item.name}
                </NavLink>
              );
            }

            const isExpanded = openMenus[item.name] ?? false;

            return (
              <div key={item.name} className="mb-0.5">
                <button
                  onClick={() => toggleMenu(item.name)}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-[12.5px] font-medium transition-all duration-150 text-left"
                  style={{
                    color: isExpanded ? `rgb(var(--color-text))` : `rgb(var(--color-text-soft))`,
                    background: isExpanded ? `rgb(var(--color-bg-soft))` : "transparent",
                  }}
                >
                  <span className="text-[12px] text-[rgb(var(--color-text-muted))]">{item.icon}</span>
                  <span className="flex-1 text-left">{item.name}</span>
                  <span
                    className="text-[10px] px-1.5 py-0.5 rounded-full font-mono"
                    style={{
                      color: `rgb(var(--color-text-muted))`,
                      background: `rgb(var(--color-bg-muted))`,
                    }}
                  >
                    {item.children.length}
                  </span>
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ml-0.5 ${isExpanded ? "rotate-90" : ""}`}
                    style={{ color: `rgb(var(--color-text-muted))` }}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Animated submenu */}
                <div
                  className={`overflow-hidden transition-all duration-200 ease-in-out ${
                    isExpanded ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div
                    className="ml-[22px] my-1 pl-3 flex flex-col gap-0.5 border-l-2"
                    style={{ borderColor: `rgb(var(--accent-border))` }}
                  >
                    {item.children.map((child, idx) => (
                      <NavLink
                        key={`${child.name}-${idx}`}
                        to={child.path}
                        onClick={onClose}
                        className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[12px] transition-all duration-150"
                        style={({ isActive }) =>
                          isActive
                            ? {
                                color: `rgb(var(--accent))`,
                                background: `rgb(var(--accent-light))`,
                                fontWeight: 600,
                              }
                            : { color: `rgb(var(--color-text-muted))` }
                        }
                      >
                        <span
                          className="w-1 h-1 rounded-full flex-shrink-0"
                          style={{ background: `rgb(var(--color-border))` }}
                        />
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
        <div
          className="border-t px-3 py-3 flex-shrink-0"
          style={{
            borderColor: `rgb(var(--color-border-soft))`,
            background: `rgb(var(--color-bg-soft))`,
          }}
        >
          <div className="flex items-center gap-2.5 px-1">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[12px] font-bold flex-shrink-0 shadow-sm"
              style={{ background: `rgb(var(--accent))` }}
            >
              A
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[12.5px] font-semibold truncate leading-none text-[rgb(var(--color-text))]">
                Admin User
              </p>
              <p className="text-[10.5px] truncate mt-0.5 text-[rgb(var(--color-text-muted))]">
                admin@corpcrm.com
              </p>
            </div>
            <button
              className="w-7 h-7 flex items-center justify-center rounded-lg transition-all border border-transparent"
              style={{ color: `rgb(var(--color-text-muted))` }}
            >
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
        .sidebar-scroll::-webkit-scrollbar-thumb { background: rgb(var(--color-border)); border-radius: 4px; }
        .sidebar-scroll::-webkit-scrollbar-thumb:hover { background: rgb(var(--color-border)); opacity: 0.8; }
        .inactive-nav-item:hover {
          background: rgb(var(--color-bg-soft));
          color: rgb(var(--color-text));
        }
      `}</style>
    </>
  );
};

export default Sidebar;