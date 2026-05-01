const stats = [
  {
    label: "Total Employees",
    value: "1,284",
    change: "+12%",
    positive: true,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m4-4a4 4 0 100-8 4 4 0 000 8zm6 0a3 3 0 100-6 3 3 0 000 6zM3 20a3 3 0 016 0" />
      </svg>
    ),
  },
  {
    label: "Active Clients",
    value: "342",
    change: "+8%",
    positive: true,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Open Grievances",
    value: "27",
    change: "-4%",
    positive: false,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      </svg>
    ),
  },
  {
    label: "Pending Invoices",
    value: "₹4.2L",
    change: "+3%",
    positive: false,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 2.5 2 2.5-2 3.5 2z" />
      </svg>
    ),
  },
  {
    label: "New Onboardings",
    value: "18",
    change: "+22%",
    positive: true,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
    ),
  },
  {
    label: "Salary Processed",
    value: "₹28.6L",
    change: "This month",
    positive: true,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const recentActivity = [
  { action: "New employee onboarded", name: "Arjun Menon", time: "2 min ago", type: "onboard" },
  { action: "Invoice raised for", name: "TechCorp Pvt Ltd", time: "18 min ago", type: "invoice" },
  { action: "Grievance filed by", name: "Priya Nair", time: "1 hr ago", type: "grievance" },
  { action: "Resignation submitted by", name: "Rahul Das", time: "3 hr ago", type: "resign" },
  { action: "Salary processed for", name: "IT Department", time: "5 hr ago", type: "salary" },
  { action: "New client added", name: "Gokulam Holdings", time: "Yesterday", type: "client" },
  { action: "Leave encashment for", name: "Deepa Krishnan", time: "Yesterday", type: "leave" },
];

const activityColor: Record<string, string> = {
  onboard: "rgb(34 197 94)",    // green
  invoice: "rgb(var(--accent))", // orange
  grievance: "rgb(239 68 68)",   // red
  resign: "rgb(249 115 22)",     // orange
  salary: "rgb(99 102 241)",     // indigo
  client: "rgb(14 165 233)",     // sky
  leave: "rgb(168 85 247)",      // purple
};

const quickLinks = [
  { label: "Add Employee", icon: "👤" },
  { label: "Raise Invoice", icon: "🧾" },
  { label: "Process Salary", icon: "💰" },
  { label: "View Reports", icon: "📊" },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">

      {/* ── Page Header ── */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1
            className="text-[20px] font-bold tracking-tight"
            style={{ color: `rgb(var(--color-text))` }}
          >
            Dashboard
          </h1>
          <p
            className="text-[13px] mt-0.5"
            style={{ color: `rgb(var(--color-text-muted))` }}
          >
            Welcome back, Admin — here's what's happening today.
          </p>
        </div>

        {/* Date badge */}
        <div
          className="text-[12px] font-medium px-3 py-1.5 rounded-xl"
          style={{
            background: `rgb(var(--color-bg-muted))`,
            color: `rgb(var(--color-text-soft))`,
          }}
        >
          {new Date().toLocaleDateString("en-IN", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </div>
      </div>

      {/* ── Quick Links ── */}
      {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {quickLinks.map((link) => (
          <button
            key={link.label}
            className="flex items-center gap-2.5 px-4 py-3 rounded-xl text-[13px] font-semibold transition-all text-white shadow-sm hover:opacity-90 active:scale-95"
            style={{ background: `rgb(var(--accent))` }}
          >
            <span className="text-base">{link.icon}</span>
            {link.label}
          </button>
        ))}
      </div> */}

      {/* ── Stat Cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl p-5 flex items-start justify-between gap-4 shadow-[0_2px_12px_rgba(0,0,0,0.05)] transition-all hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
            style={{
              background: `rgb(var(--color-surface))`,
              border: `1px solid rgb(var(--color-border-soft))`,
            }}
          >
            <div className="flex-1 min-w-0">
              <p
                className="text-[12px] font-medium uppercase tracking-wider"
                style={{ color: `rgb(var(--color-text-muted))` }}
              >
                {stat.label}
              </p>
              <p
                className="text-[26px] font-bold mt-1 leading-none tracking-tight"
                style={{ color: `rgb(var(--color-text))` }}
              >
                {stat.value}
              </p>
              <span
                className="inline-block mt-2 text-[11px] font-semibold px-2 py-0.5 rounded-full"
                style={{
                  color: stat.positive ? "rgb(22 163 74)" : "rgb(220 38 38)",
                  background: stat.positive ? "rgb(240 253 244)" : "rgb(254 242 242)",
                }}
              >
                {stat.change} vs last month
              </span>
            </div>

            {/* Icon */}
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: `rgb(var(--accent-light))`,
                color: `rgb(var(--accent))`,
              }}
            >
              {stat.icon}
            </div>
          </div>
        ))}
      </div>

      {/* ── Bottom Row: Activity + Summary ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

        {/* Recent Activity — takes 2/3 */}
        <div
          className="lg:col-span-2 rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.05)]"
          style={{
            background: `rgb(var(--color-surface))`,
            border: `1px solid rgb(var(--color-border-soft))`,
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-5 py-4"
            style={{ borderBottom: `1px solid rgb(var(--color-border-soft))` }}
          >
            <div>
              <h3
                className="text-[14px] font-bold"
                style={{ color: `rgb(var(--color-text))` }}
              >
                Recent Activity
              </h3>
              <p
                className="text-[11.5px] mt-0.5"
                style={{ color: `rgb(var(--color-text-muted))` }}
              >
                Latest actions across your CRM
              </p>
            </div>
            <button
              className="text-[12px] font-medium px-3 py-1.5 rounded-lg transition-all"
              style={{
                color: `rgb(var(--accent))`,
                background: `rgb(var(--accent-light))`,
              }}
            >
              View all
            </button>
          </div>

          {/* Activity list */}
          <div className="divide-y" style={{ borderColor: `rgb(var(--color-border-soft))` }}>
            {recentActivity.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-5 py-3.5 transition-colors hover:bg-[rgb(var(--color-bg-soft))]"
              >
                {/* Dot */}
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: activityColor[item.type] }}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] truncate" style={{ color: `rgb(var(--color-text-soft))` }}>
                    {item.action}{" "}
                    <span className="font-semibold" style={{ color: `rgb(var(--color-text))` }}>
                      {item.name}
                    </span>
                  </p>
                </div>
                <span
                  className="text-[11px] flex-shrink-0"
                  style={{ color: `rgb(var(--color-text-muted))` }}
                >
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Panel — takes 1/3 */}
        <div
          className="rounded-2xl p-5 flex flex-col gap-4 shadow-[0_2px_12px_rgba(0,0,0,0.05)]"
          style={{
            background: `rgb(var(--color-surface))`,
            border: `1px solid rgb(var(--color-border-soft))`,
          }}
        >
          <div>
            <h3
              className="text-[14px] font-bold"
              style={{ color: `rgb(var(--color-text))` }}
            >
              Monthly Summary
            </h3>
            <p
              className="text-[11.5px] mt-0.5"
              style={{ color: `rgb(var(--color-text-muted))` }}
            >
              April 2026 overview
            </p>
          </div>

          {[
            { label: "Employees Joined", value: 18, total: 30, color: "rgb(34 197 94)" },
            { label: "Resignations", value: 5, total: 30, color: "rgb(239 68 68)" },
            { label: "Invoices Raised", value: 22, total: 40, color: `rgb(var(--accent))` },
            { label: "Grievances Resolved", value: 14, total: 20, color: "rgb(99 102 241)" },
          ].map((item) => (
            <div key={item.label} className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[12px]" style={{ color: `rgb(var(--color-text-soft))` }}>
                  {item.label}
                </span>
                <span className="text-[12px] font-semibold" style={{ color: `rgb(var(--color-text))` }}>
                  {item.value}/{item.total}
                </span>
              </div>
              {/* Progress bar */}
              <div
                className="w-full h-1.5 rounded-full overflow-hidden"
                style={{ background: `rgb(var(--color-bg-muted))` }}
              >
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${(item.value / item.total) * 100}%`,
                    background: item.color,
                  }}
                />
              </div>
            </div>
          ))}

          {/* Divider */}
          <div
            className="border-t pt-4 mt-auto"
            style={{ borderColor: `rgb(var(--color-border-soft))` }}
          >
            <p className="text-[12px]" style={{ color: `rgb(var(--color-text-muted))` }}>
              Next payroll run
            </p>
            <p className="text-[15px] font-bold mt-0.5" style={{ color: `rgb(var(--color-text))` }}>
              May 1, 2026
            </p>
            <div
              className="mt-2 text-[11px] font-medium px-2.5 py-1 rounded-lg inline-block"
              style={{
                background: `rgb(var(--accent-light))`,
                color: `rgb(var(--accent))`,
              }}
            >
              1 day away
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;