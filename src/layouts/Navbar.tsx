interface NavbarProps {
  onMenuToggle: () => void;
}

const Navbar = ({ onMenuToggle }: NavbarProps) => {
  return (
    <header className="h-14 bg-white border-b border-gray-100 flex items-center px-4 gap-3 flex-shrink-0 sticky top-0 z-20 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">

      {/* Hamburger — mobile only */}
      <button
        onClick={onMenuToggle}
        className="lg:hidden flex flex-col justify-center gap-1.5 w-8 h-8 rounded-lg hover:bg-gray-100 transition-colors items-center"
        aria-label="Open menu"
      >
        <span className="w-4.5 h-px bg-gray-500 rounded-full block w-[18px]" />
        <span className="w-4.5 h-px bg-gray-500 rounded-full block w-[13px]" />
        <span className="w-4.5 h-px bg-gray-500 rounded-full block w-[18px]" />
      </button>

      {/* Page title — desktop */}
      <div className="hidden lg:flex items-center gap-2">
        <span className="text-[13px] font-semibold text-black">Dashboard</span>
      </div>
{/* <button onClick={toggleTheme}>🌙</button> */}
      {/* Search — center */}
      <div className="flex-1 max-w-sm mx-auto hidden sm:block">
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-300"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search anything..."
            className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-9 pr-10 py-2 text-[13px] text-gray-600 placeholder-gray-300 outline-none focus:border-orange-300 focus:ring-2 focus:ring-orange-50 focus:bg-white transition-all"
          />
          <kbd className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-gray-300 font-mono border border-gray-200 bg-white px-1.5 py-0.5 rounded">
            ⌘K
          </kbd>
        </div>
      </div>

      {/* Right actions */}
      <div className="ml-auto flex items-center gap-1.5">

        {/* Notification bell */}
        <button className="relative w-9 h-9 rounded-xl flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all">
          <svg className="w-4.5 h-4.5 w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute top-2 right-2 w-2 h-2 bg-orange-500 border-2 border-white rounded-full" />
        </button>

        {/* Divider */}
        <div className="w-px h-5 bg-gray-200 mx-0.5" />

        {/* Avatar + name */}
        <button className="flex items-center gap-2 px-2 py-1.5 rounded-xl hover:bg-gray-100 transition-all">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white text-[11px] font-bold shadow-sm">
            A
          </div>
          <span className="hidden sm:block text-[12.5px] font-medium text-gray-700">Admin</span>
          <svg className="w-3 h-3 text-gray-300 hidden sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;