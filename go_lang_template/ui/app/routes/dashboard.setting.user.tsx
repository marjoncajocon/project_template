import React, { useState } from "react";
import { dialog, DialogHeader, DialogBody, DialogFooter } from "~/component/dialog";

interface AdminUser {
  id: number;
  name: string;
  role: "Super Admin" | "Compliance Officer" | "Financial Auditor";
  status: "Active" | "Suspended";
  lastLogin: string;
}

export default function AdminAccess() {
  const [users, setUsers] = useState<AdminUser[]>([
    { id: 1, name: "Marjon Cajocon", role: "Super Admin", status: "Active", lastLogin: "2026-04-17 08:30" },
    { id: 2, name: "Sarah Jenkins", role: "Compliance Officer", status: "Active", lastLogin: "2026-04-16 14:15" },
    { id: 3, name: "Robert Chen", role: "Financial Auditor", status: "Suspended", lastLogin: "2026-03-01 10:00" },
  ]);

  // --- ACTION: ADD/EDIT USER ---
  const handleUserDialog = async (existingUser?: AdminUser) => {
    const result = await dialog<AdminUser | null>({
      width: 450,
      render: ({ close }) => {
       const D = () => {
         const [tempUser, setTempUser] = useState<AdminUser>(existingUser || {
          id: Date.now(),
          name: "",
          role: "Compliance Officer",
          status: "Active",
          lastLogin: "Never"
        });

        return (
          <>
            <DialogHeader>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-user-lock text-blue-600"></i>
                <span className="font-bold uppercase text-sm">
                  {existingUser ? "Modify Access" : "Grant New Access"}
                </span>
              </div>
            </DialogHeader>
            <DialogBody>
              <div className="space-y-4 py-2">
                <div className="form-control">
                  <label className="text-[10px] font-bold text-gray-400 uppercase">Full Name</label>
                  <input 
                    type="text" className="input input-bordered input-sm rounded-none w-full mt-1" 
                    value={tempUser.name} onChange={e => setTempUser({...tempUser, name: e.target.value})}
                  />
                </div>
                <div className="form-control">
                  <label className="text-[10px] font-bold text-gray-400 uppercase">Assigned Role</label>
                  <select 
                    className="select select-bordered select-sm rounded-none mt-1"
                    value={tempUser.role} onChange={e => setTempUser({...tempUser, role: e.target.role as any})}
                  >
                    <option>Super Admin</option>
                    <option>Compliance Officer</option>
                    <option>Financial Auditor</option>
                  </select>
                  <p className="text-[9px] text-gray-400 mt-1 italic">Roles define access to Liability Disposal and Audit Logs.</p>
                </div>
                <div className="form-control">
                  <label className="text-[10px] font-bold text-gray-400 uppercase">Account Status</label>
                  <div className="flex gap-4 mt-2">
                    <label className="flex items-center gap-2 text-xs cursor-pointer">
                      <input type="radio" name="status" checked={tempUser.status === 'Active'} onChange={() => setTempUser({...tempUser, status: 'Active'})} className="radio radio-xs radio-primary" /> Active
                    </label>
                    <label className="flex items-center gap-2 text-xs cursor-pointer">
                      <input type="radio" name="status" checked={tempUser.status === 'Suspended'} onChange={() => setTempUser({...tempUser, status: 'Suspended'})} className="radio radio-xs radio-error" /> Suspended
                    </label>
                  </div>
                </div>
              </div>
            </DialogBody>
            <DialogFooter>
              <button className="btn btn-sm btn-ghost rounded-none" onClick={() => close(null)}>Cancel</button>
              <button className="btn btn-sm btn-primary rounded-none" onClick={() => close(tempUser)}>Save Permissions</button>
            </DialogFooter>
          </>
        );
       }

       return <D />
      }
    });

    if (result) {
      setUsers(prev => {
        const exists = prev.find(u => u.id === result.id);
        return exists ? prev.map(u => u.id === result.id ? result : u) : [...prev, result];
      });
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      
      {/* Page Header */}
      <div className="bg-white p-5 border-l-4 border-gray-800 shadow-sm flex justify-between items-center">
        <div>
          <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider">Identity & Access Management</h3>
          <p className="text-[10px] text-gray-500 font-medium">Internal Vault Administrators</p>
        </div>
        <button onClick={() => handleUserDialog()} className="btn btn-sm bg-gray-800 text-white rounded-none hover:bg-black">
          <i className="fa-solid fa-user-plus mr-2"></i> ADD ADMINISTRATOR
        </button>
      </div>

      {/* User Table */}
      <div className="card bg-white shadow-md rounded-none border-t border-gray-200">
        <table className="table table-sm w-full">
          <thead className="bg-gray-50 text-[10px] uppercase text-gray-400 font-bold">
            <tr>
              <th>Administrator</th>
              <th>Assigned Role</th>
              <th>Status</th>
              <th>Last Access</th>
              <th className="text-right">Action</th>
            </tr>
          </thead>
          <tbody className="text-xs">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 border-b border-gray-100">
                <td className="py-3">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded bg-gray-100 flex items-center justify-center text-gray-400 border border-gray-200 uppercase font-bold text-[10px]">
                      {user.name.charAt(0)}
                    </div>
                    <span className="font-bold text-gray-700">{user.name}</span>
                  </div>
                </td>
                <td>
                  <span className="badge badge-outline badge-xs rounded-none text-[9px] font-bold uppercase py-2 px-2 border-gray-300">
                    {user.role}
                  </span>
                </td>
                <td>
                  <span className={`flex items-center gap-1.5 font-bold ${user.status === 'Active' ? 'text-success' : 'text-error'}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${user.status === 'Active' ? 'bg-success' : 'bg-error'}`}></span>
                    {user.status}
                  </span>
                </td>
                <td className="text-gray-400 font-mono">{user.lastLogin}</td>
                <td className="text-right">
                  <button onClick={() => handleUserDialog(user)} className="btn btn-xs btn-ghost text-blue-600">
                    <i className="fa-solid fa-user-gear"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 bg-gray-100 border-dashed border-2 border-gray-300 rounded-none text-center">
        <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest italic">
          <i className="fa-solid fa-circle-info mr-2"></i>
          All access changes are recorded in the System Audit Log for compliance.
        </p>
      </div>
    </div>
  );
}