import React, { useState } from "react";
import { dialog, DialogHeader, DialogBody, DialogFooter } from "~/component/dialog";


interface ExpiredRecord {
  id: string;
  name: string;
  category: string;
  expiredSince: string;
  riskWeight: "High" | "Medium" | "Low";
}

export default function LiabilityDisposal() {
  const [queue, setQueue] = useState<ExpiredRecord[]>([
    { id: "ARC-2019-001", name: "Old_Marketing_Leads_2019.csv", category: "Marketing", expiredSince: "2026-01-10", riskWeight: "Medium" },
    { id: "ARC-2018-992", name: "Former_Employee_Drafts.zip", category: "Personnel", expiredSince: "2025-11-22", riskWeight: "High" },
    { id: "LOG-2024-X", name: "System_Debug_Dump_v2.log", category: "Logs", expiredSince: "2026-04-01", riskWeight: "Low" },
  ]);

  // --- ACTION: INDIVIDUAL SHRED ---
  const handleShred = async (record: ExpiredRecord) => {

      // Simulate API call
      setQueue(prev => prev.filter(item => item.id !== record.id));
      
    
  };

  // --- ACTION: VIEW RISK DETAILS (Dialog) ---
  const viewRiskAssessment = async (record: ExpiredRecord) => {
    await dialog({
      width: 450,
      render: ({ close }) => (
        <>
          <DialogHeader>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-biohazard text-orange-500"></i>
              <span className="font-bold uppercase text-sm">Liability Analysis: {record.id}</span>
            </div>
          </DialogHeader>
          <DialogBody>
            <div className="text-xs space-y-3">
              <p><strong>Record:</strong> {record.name}</p>
              <p><strong>Expiration Date:</strong> {record.expiredSince}</p>
              <div className="p-3 bg-red-50 border border-red-100 text-red-800">
                <p className="font-bold uppercase text-[10px] mb-1">Risk Summary:</p>
                <p>This record contains PII (Personally Identifiable Information). Continued storage beyond the 7-year mandate increases exposure liability during potential cyber-audits.</p>
              </div>
            </div>
          </DialogBody>
          <DialogFooter>
            <button className="btn btn-sm btn-ghost rounded-none" onClick={() => close(null)}>Close</button>
            <button className="btn btn-sm btn-error text-white rounded-none" onClick={() => { handleShred(record); close(null); }}>
              Shred Now
            </button>
          </DialogFooter>
        </>
      )
    });
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      
      {/* Risk Alert Banner */}
      <div className="flex items-center gap-4 p-4 bg-red-50 border-l-4 border-red-500 shadow-sm">
        <i className="fa-solid fa-dumpster-fire text-red-600 text-xl"></i>
        <div className="flex-1">
          <h4 className="text-xs font-bold text-red-800 uppercase">Liability Alert: {queue.length} Records Expired</h4>
          <p className="text-[10px] text-red-700 leading-relaxed">
            Data identified below has exceeded its <strong>Asset Protection</strong> period. Purging these records is recommended to satisfy data minimization requirements.
          </p>
        </div>
        <button className="btn btn-xs btn-error text-white rounded-none shadow-md" onClick={() => alert("Bulk Shredding requires Multi-Factor Authentication")}>
          SHRED ALL LIABILITIES
        </button>
      </div>

      {/* Disposal Queue Table */}
      <div className="card bg-white shadow-md rounded-none border-t border-gray-200">
        <div className="px-4 py-3 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <h4 className="text-[11px] font-bold text-gray-600 uppercase tracking-widest">Liability Disposal Queue</h4>
        </div>
        
        <div className="overflow-x-auto">
          <table className="table table-sm w-full">
            <thead className="bg-gray-100/50 text-gray-500 uppercase text-[10px]">
              <tr>
                <th className="w-10"><input type="checkbox" className="checkbox checkbox-xs rounded-none" /></th>
                <th>Reference</th>
                <th>Record Name</th>
                <th>Expired On</th>
                <th>Risk Weight</th>
                <th className="text-right">Decision</th>
              </tr>
            </thead>
            <tbody className="text-xs">
              {queue.length > 0 ? queue.map((item) => (
                <tr key={item.id} className="hover:bg-red-50/20 border-b border-gray-100 transition-colors">
                  <td><input type="checkbox" className="checkbox checkbox-xs rounded-none" /></td>
                  <td className="font-mono text-red-600 font-bold">{item.id}</td>
                  <td className="font-medium text-gray-800">{item.name}</td>
                  <td className="text-gray-500">{item.expiredSince}</td>
                  <td>
                    <span className={`badge badge-xs rounded-none font-bold text-[9px] ${
                      item.riskWeight === 'High' ? 'bg-red-600 text-white' : 'bg-orange-400 text-white'
                    }`}>
                      {item.riskWeight}
                    </span>
                  </td>
                  <td className="text-right flex justify-end gap-1">
                    <button onClick={() => viewRiskAssessment(item)} className="btn btn-xs btn-ghost text-blue-600" title="View Assessment">
                      <i className="fa-solid fa-magnifying-glass-chart"></i>
                    </button>
                    <button onClick={() => handleShred(item)} className="btn btn-xs btn-ghost text-red-500" title="Authorize Destruction">
                      <i className="fa-solid fa-shredder"></i>
                    </button>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={6} className="text-center py-12 text-gray-400 italic">
                    <i className="fa-solid fa-circle-check text-success text-2xl mb-2 block opacity-50"></i>
                    All liabilities cleared. System is compliant.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}