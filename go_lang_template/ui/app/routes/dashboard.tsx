import { NavLink, Outlet, useLocation, useNavigate } from "react-router";

export default function ArchiveDashboard() {
  const location = useLocation();

  const navigate = useNavigate();

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-4 py-2 text-sm transition-all rounded-md mb-1 ${
      isActive
        ? "bg-[#007bff] text-white shadow-md font-medium"
        : "text-[#c2c7d0] hover:bg-white/10 hover:text-white"
    }`;

  return (
    <div className="drawer lg:drawer-open bg-[#f4f6f9] min-h-screen font-sans antialiased">
      <input id="archive-drawer" type="checkbox" className="drawer-toggle" />

      {/* --- MAIN PAGE CONTENT --- */}
      <div className="drawer-content flex flex-col min-w-0">
        
        {/* Top Navbar */}
        <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-4 sticky top-0 z-10 shadow-sm">
          <div className="flex items-center gap-4">
            <label htmlFor="archive-drawer" className="btn btn-ghost btn-sm lg:hidden">
              <i className="fa-solid fa-bars text-gray-600"></i>
            </label>
            <nav className="hidden md:flex gap-4 text-[13px] font-medium text-gray-500 uppercase tracking-tight">
              <a className="hover:text-gray-900 cursor-pointer">Vault Console</a>
              <a className="hover:text-gray-900 cursor-pointer text-blue-600 font-bold underline underline-offset-4">Risk Briefing</a>
            </nav>
          </div>

          <div className="flex items-center gap-4 text-gray-500">
            <div className="hidden sm:block text-right mr-2">
              <p className="text-[10px] font-bold opacity-40 uppercase">System Status</p>
              <p className="text-[10px] text-success font-mono font-bold">SECURED_ENCRYPTED</p>
            </div>
            <div className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden border border-gray-300">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Marjon" alt="profile" />
            </div>
            <button className="hover:text-error transition-colors" onClick={() => {
              navigate("/login");
            }}><i className="fa-solid fa-power-off"></i></button>
          </div>
        </header>

        {/* Dynamic Content Header */}
        <div className="px-6 py-3 bg-white border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800 capitalize tracking-tight">
            {location.pathname.split("/").pop()?.replace("-", " ") || "System Overview"}
          </h2>
          <div className="text-[11px] breadcrumbs text-gray-400">
            <ul>
              <li><a className="text-[#007bff]">Vault</a></li>
              <li>{location.pathname.includes("risk") ? "Risk Management" : "System"}</li>
              <li className="font-bold text-gray-600 uppercase">{location.pathname.split("/").pop()?.replace("-", " ") || "Dashboard"}</li>
            </ul>
          </div>
        </div>

        {/* Workspace */}
        <main className="p-4 lg:p-6 flex-1">
          <Outlet />
        </main>

        <footer className="p-4 bg-white border-t border-gray-200 text-[10px] text-gray-400 text-right font-mono italic">
          Archive Node #042 // {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}
        </footer>
      </div>

      {/* --- SIDEBAR --- */}
      <aside className="drawer-side z-30">
        <label htmlFor="archive-drawer" className="drawer-overlay"></label>
        
        <div className="w-64 bg-[#343a40] min-h-full flex flex-col shadow-2xl overflow-y-hidden hover:overflow-y-auto [scrollbar-gutter:stable] transition-all">
          
          {/* Brand Logo */}
          <div className="h-14 flex items-center px-4 border-b border-gray-600 gap-3 sticky top-0 bg-[#343a40] z-10">
            <div className="h-8 w-8 rounded bg-[#007bff] flex items-center justify-center text-white font-bold shadow-lg">
              <i className="fa-solid fa-shield-halved text-sm"></i>
            </div>
            <span className="text-xl font-light text-gray-200 tracking-tighter italic">
              ARCHIVE<span className="font-bold text-white">VAULT</span>
            </span>
          </div>

          {/* User Section */}
          <div className="px-4 py-4 border-b border-gray-600 flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center">
               <i className="fa-solid fa-user-shield text-gray-400 text-xs"></i>
            </div>
            <div className="flex flex-col">
                <span className="text-xs text-gray-200 font-bold truncate">Marjon Cajocon</span>
                <span className="text-[9px] text-primary uppercase font-bold tracking-widest">Compliance Admin</span>
            </div>
          </div>

          {/* Sidebar Menu */}
          <div className="flex-1 px-2 mt-4">
            <nav className="space-y-0.5">
              <NavLink to="/dashboard" end className={navLinkClass}>
                <i className="fa-solid fa-gauge-high w-6 text-center"></i> Dashboard
              </NavLink>

              <NavLink to="/dashboard/profile" className={navLinkClass}>
                <i className="fa-solid fa-id-card w-6 text-center"></i> Profile
              </NavLink>

              <p className="px-4 text-[10px] font-bold text-gray-500 uppercase mt-4 mb-2 tracking-[0.2em]">Data Ingestion</p>

              <NavLink to="/dashboard/ingestion/new" className={navLinkClass}>
                <i className="fa-solid fa-file-import w-6 text-center"></i> Secure Upload
              </NavLink>

              <NavLink to="/dashboard/records/browse" className={navLinkClass}>
                <i className="fa-solid fa-box-archive w-6 text-center"></i> Vault Records
              </NavLink>

              {/* Updated Risk Management Group */}
              <p className="px-4 text-[10px] font-bold text-gray-500 uppercase mt-4 mb-2 tracking-[0.2em]">Mitigation</p>
              
              <details className="group" open={location.pathname.includes("risk")}>
                <summary className="flex items-center gap-3 px-4 py-2 text-sm text-[#c2c7d0] hover:bg-white/10 hover:text-white rounded-md cursor-pointer list-none">
                  <i className="fa-solid fa-shield-virus w-6 text-center"></i>
                  <span>Risk Management</span>
                  <i className="fa-solid fa-chevron-left ml-auto text-[10px] transition-transform group-open:-rotate-90"></i>
                </summary>
                <ul className="ml-4 mt-1 border-l border-gray-600">
                  <li>
                    <NavLink to="/dashboard/risk/retention" className={navLinkClass}>
                      <i className="fa-regular fa-circle text-[8px] w-6 text-center"></i> Asset Protection
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/liability/disposal" className={navLinkClass}>
                      <i className="fa-regular fa-circle text-[8px] w-6 text-center"></i> Liability Disposal
                    </NavLink>
                  </li>
                </ul>
              </details>

              <p className="px-4 text-[10px] font-bold text-gray-500 uppercase mt-4 mb-2 tracking-[0.2em]">System Control</p>

              <NavLink to="/dashboard/setting/user" className={navLinkClass}>
                <i className="fa-solid fa-users-gear w-6 text-center"></i> Admin Access
              </NavLink>

              <NavLink to="/dashboard/setting/audit" className={navLinkClass}>
                <i className="fa-solid fa-fingerprint w-6 text-center"></i> System Audit
              </NavLink>
            </nav>
          </div>

          {/* Version Footer */}
          <div className="p-4 border-t border-gray-600 text-center sticky bottom-0 bg-[#343a40]">
            <span className="text-[10px] text-gray-500 font-mono">PRO-LTS v1.0.4</span>
          </div>
        </div>
      </aside>
    </div>
  );
}