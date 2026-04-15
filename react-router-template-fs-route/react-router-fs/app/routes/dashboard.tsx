import { useState } from "react";
import { Outlet } from "react-router";

export default function MaterialDashboard() {
  return (
    // "bg-base-200" gives that classic Material grey/tinted background
    <div className="drawer lg:drawer-open bg-base-200 min-h-screen font-sans">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      
      <div className="drawer-content flex flex-col">
        
        {/* --- NAVBAR (Floating Style) --- */}
        <div className="navbar bg-base-100/70 backdrop-blur-md sticky top-4 z-10 mx-auto w-[95%] rounded-xl shadow-lg mt-4 border border-white/20">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
              <i className="fa-solid fa-bars text-xl"></i>
            </label>
          </div>
          <div className="flex-1 px-4">
            <h1 className="text-sm font-semibold uppercase tracking-wider opacity-60">Dashboard / Home</h1>
          </div>
          <div className="flex-none gap-4 px-4">
            <button className="btn btn-primary btn-sm rounded-lg shadow-lg shadow-primary/30">
              <i className="fas fa-power-off"></i>
            </button>
          </div>
        </div>

        {/* --- MAIN CONTENT --- */}
        <main className="p-8">
          <Outlet />
        </main>
      </div>

      {/* --- SIDEBAR (Floating Glass Sidebar) --- */}
      <div className="drawer-side z-20">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <div className="p-2 w-72 min-h-full bg-transparent">
            {/* Sidebar Content is inside a rounded floating div */}
            <div className="bg-zinc-900 text-white rounded-3xl h-[calc(100vh-2rem)] shadow-2xl overflow-hidden flex flex-col p-4">
                <div className="p-6 text-center border-b border-white/10">
                    <span className="text-xl font-black tracking-tighter uppercase">Project-Title</span>
                </div>
                
                <ul className="menu mt-4 flex-grow px-2 gap-1">
                    <li><a className="active bg-primary text-primary-content rounded-xl mb-2"><i className="fa-solid fa-house w-6"></i> Home</a></li>
                    <li><a className="hover:bg-white/10 rounded-xl"><i className="fa-solid fa-user w-6"></i> Profile</a></li>
                    
                    {/* Multi-level Dropdown */}
                    <li>
                        <details open>
                            <summary className="hover:bg-white/10 rounded-xl"><i className="fa-solid fa-credit-card w-6"></i> Transaction</summary>
                            <ul className="before:bg-white/10">
                                <li><a className="hover:bg-white/10 rounded-xl">History</a></li>
                                <li><a className="hover:bg-white/10 rounded-xl">Setup Payment</a></li>
                            </ul>
                        </details>
                    </li>

                    <li>
                        <details>
                            <summary className="hover:bg-white/10 rounded-xl"><i className="fa-solid fa-gear w-6"></i> Settings</summary>
                            <ul className="before:bg-white/10">
                                <li><a className="hover:bg-white/10 rounded-xl">User Setup</a></li>
                                <li><a className="hover:bg-white/10 rounded-xl">Office</a></li>
                                <li><a className="hover:bg-white/10 rounded-xl">Company Setup</a></li>
                            </ul>
                        </details>
                    </li>

                    <li><a className="hover:bg-white/10 rounded-xl"><i className="fa-solid fa-circle-info w-6"></i> About</a></li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
}

// Small Helper Component for the Stat Cards
function StatCard({ title, value, icon, color, trend }: any) {
  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all border border-base-300">
      <div className="p-4 flex justify-between">
        <div>
          <p className="text-sm opacity-70 font-semibold">{title}</p>
          <h3 className="text-2xl font-bold">{value}</h3>
          <span className={`text-xs font-bold ${trend.startsWith('+') ? 'text-success' : 'text-error'}`}>{trend}</span>
        </div>
        <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center text-white shadow-lg`}>
          <i className={`fa-solid ${icon} text-xl`}></i>
        </div>
      </div>
    </div>
  );
}
