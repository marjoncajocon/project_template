import React, { useState } from "react";
import { dialog, DialogHeader, DialogBody, DialogFooter } from "~/component/dialog";

interface AuditEntry {
  id: string;
  timestamp: string;
  actor: string;
  action: "UPLOAD" | "VIEW" | "SHRED" | "POLICY_CHANGE" | "LOGIN";
  target: string;
  ipAddress: string;
  riskImpact: "Low" | "Medium" | "High" | "Critical";
}

export default function SystemAudit() {
  const [logs] = useState<AuditEntry[]>([
    { id: "LOG-8821", timestamp: "2026-04-17 10:22:15", actor: "Marjon Cajocon", action: "SHRED", target: "ARC-2018-992", ipAddress: "192.168.1.45", riskImpact: "High" },
    { id: "LOG-8820", timestamp: "2026-04-17 09:45:02", actor: "Sarah Jenkins", action: "POLICY_CHANGE", target: "Financial/Tax", ipAddress: "192.168.1.12", riskImpact: "Critical" },
    { id: "LOG-8819", timestamp: "2026-04-17 09:12:33", actor: "Marjon Cajocon", action: "VIEW", target: "IP_Patent_v2.pdf", ipAddress: "192.168.1.45", riskImpact: "Medium" },
    { id: "LOG-8818", timestamp: "2026-04-17 08:00:10", actor: "System Auth", action: "LOGIN", target: "Console Session", ipAddress: "192.168.1.45", riskImpact: "Low" },
  ]);

  // --- ACTION: VIEW DETAILED JSON LOG ---
  const viewFullLog = async (log: AuditEntry) => {
    await dialog({
      width: 500,
      render: ({ close }) => (
        <>
          <DialogHeader>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-gray-400 uppercase">Audit Reference: {log.id}</span>
              <span className="text-lg font-bold text-gray-800">Immutable Event Record</span>
            </div>
          </DialogHeader>
          <DialogBody>
            <div className="bg-gray-900 text-green-400 p-4 font-mono text-[11px] rounded shadow-inner overflow-x-auto">
              <pre>{JSON.stringify({
                event_id: log.id,
                triggered_by: log.actor,
                action_type: log.action,
                object_id: log.target,
                network_origin: log.ipAddress,
                timestamp_utc: new Date(log.timestamp).toISOString(),
                verification_hash: "sha256:7f83b1657ff1fc53b92..."
              }, null, 2)}</pre>
            </div>
            <p className="mt-4 text-[10px] text-gray-500 italic">
              * Note: This record is cryptographically signed and cannot be modified.
            </p>
          </DialogBody>
          <DialogFooter>
            <button className="btn btn-sm btn-ghost border border-gray-300 rounded-none w-full" onClick={() => close(null)}>
              Dismiss
            </button>
          </DialogFooter>
        </>
      )
    });
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      
      {/* Search & Filter Bar */}
      <div className="bg-white p-4 shadow-sm border-t-2 border-gray-800 flex flex-wrap gap-3 items-center">
        <div className="flex-1 min-w-[200px]">
          <div className="relative">
            <i className="fa-solid fa-magnifying-glass absolute left-3 top-2.5 text-gray-400 text-xs"></i>
            <input type="text" placeholder="Search by Actor, Target, or Action..." className="input input-sm input-bordered w-full pl-9 rounded-none text-xs" />
          </div>
        </div>
        <select className="select select-sm select-bordered rounded-none text-xs">
          <option>All Actions</option>
          <option>Shred Events</option>
          <option>Policy Changes</option>
        </select>
        <button className="btn btn-sm btn-outline rounded-none border-gray-300">
          <i className="fa-solid fa-file-export mr-2"></i> Export CSV
        </button>
      </div>

      {/* Audit Table */}
      <div className="card bg-white shadow-md rounded-none overflow-hidden">
        <table className="table table-sm w-full">
          <thead className="bg-gray-50 text-[10px] uppercase text-gray-400 font-bold border-b border-gray-200">
            <tr>
              <th>Timestamp</th>
              <th>Actor</th>
              <th>Action</th>
              <th>Target Object</th>
              <th>Impact</th>
              <th className="text-right">Detail</th>
            </tr>
          </thead>
          <tbody className="text-xs">
            {logs.map((log) => (
              <tr key={log.id} className="hover:bg-gray-50 border-b border-gray-100 transition-colors">
                <td className="font-mono text-gray-500">{log.timestamp}</td>
                <td className="font-bold text-gray-700">{log.actor}</td>
                <td>
                  <span className={`font-bold ${
                    log.action === 'SHRED' ? 'text-red-600' : 
                    log.action === 'POLICY_CHANGE' ? 'text-purple-600' : 'text-blue-600'
                  }`}>
                    {log.action}
                  </span>
                </td>
                <td className="text-gray-600">{log.target}</td>
                <td>
                  <span className={`badge badge-xs rounded-none font-bold ${
                    log.riskImpact === 'Critical' ? 'bg-purple-600 text-white' :
                    log.riskImpact === 'High' ? 'bg-red-500 text-white' : 'bg-gray-300 text-gray-700'
                  }`}>
                    {log.riskImpact}
                  </span>
                </td>
                <td className="text-right">
                  <button onClick={() => viewFullLog(log)} className="text-gray-400 hover:text-black">
                    <i className="fa-solid fa-code"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Audit Totals */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 border border-gray-200 shadow-sm flex items-center justify-between">
          <span className="text-[10px] font-bold text-gray-400 uppercase">Integrity Status</span>
          <span className="text-success font-bold text-xs uppercase flex items-center gap-1">
            <i className="fa-solid fa-circle-check"></i> Validated
          </span>
        </div>
        <div className="bg-white p-4 border border-gray-200 shadow-sm flex items-center justify-between">
          <span className="text-[10px] font-bold text-gray-400 uppercase">Storage Location</span>
          <span className="text-gray-700 font-mono text-xs italic">/nodes/audit/log_042</span>
        </div>
      </div>
    </div>
  );
}