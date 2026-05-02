import React, { useState } from "react";
import { dialog, DialogHeader, DialogBody, DialogFooter } from "~/component/dialog";
// Import your dialog utilities
interface RiskPolicy {
  id: string;
  category: string;
  riskLevel: string;
  retentionYears: number;
  mitigationGoal: string;
}

export default function AssetProtection() {
  const [policies, setPolicies] = useState<RiskPolicy[]>([
    { id: "POL-001", category: "Financial/Tax", riskLevel: "High", retentionYears: 7, mitigationGoal: "Audit Defense" },
    { id: "POL-002", category: "Intellectual Property", riskLevel: "Critical", retentionYears: 99, mitigationGoal: "Asset Protection" },
  ]);

  // --- DELETE SIMULATION ---
  const handleDelete = async (id: string) => {
  
      setPolicies(prev => prev.filter(p => p.id !== id));
    
  };

  // --- ADD/EDIT SIMULATION USING YOUR DIALOG ---
  const openPolicyForm = async (existingPolicy?: RiskPolicy) => {
    const result = await dialog<RiskPolicy | null>({
      width: 500,
      position: 'center',
      render: ({ close }) => {
        const D = () => {
            // Local form state inside the dialog
            const [tempData, setTempData] = useState<RiskPolicy>(existingPolicy || {
            id: `POL-${Math.floor(Math.random() * 900) + 100}`,
            category: "",
            riskLevel: "Medium",
            retentionYears: 5,
            mitigationGoal: ""
            });

            return (
            <>
                <DialogHeader>
                <div className="flex flex-col">
                    <span className="text-xs font-bold text-blue-600 uppercase">Risk Management</span>
                    <span className="text-lg font-bold text-gray-800">
                    {existingPolicy ? "Edit Asset Policy" : "New Protection Profile"}
                    </span>
                </div>
                </DialogHeader>
                <DialogBody>
                <div className="space-y-4 py-2">
                    <div className="form-control">
                    <label className="text-[10px] font-bold text-gray-400 uppercase">Category</label>
                    <input 
                        type="text" className="input input-bordered input-sm rounded-none w-full mt-1" 
                        value={tempData.category} onChange={e => setTempData({...tempData, category: e.target.value})}
                    />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                    <div className="form-control text-xs">
                        <label className="text-[10px] font-bold text-gray-400 uppercase">Risk Level</label>
                        <select 
                        className="select select-bordered select-sm rounded-none mt-1"
                        value={tempData.riskLevel} onChange={e => setTempData({...tempData, riskLevel: e.target.value})}
                        >
                        <option>Low</option><option>Medium</option><option>High</option><option>Critical</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="text-[10px] font-bold text-gray-400 uppercase">Retention (Yrs)</label>
                        <input 
                        type="number" className="input input-bordered input-sm rounded-none mt-1" 
                        value={tempData.retentionYears} onChange={e => setTempData({...tempData, retentionYears: +e.target.value})}
                        />
                    </div>
                    </div>
                </div>
                </DialogBody>
                <DialogFooter>
                <button className="btn btn-sm btn-ghost rounded-none" onClick={() => close(null)}>Cancel</button>
                <button className="btn btn-sm btn-primary rounded-none px-6" onClick={() => close(tempData)}>
                    {existingPolicy ? "Update Profile" : "Create Profile"}
                </button>
                </DialogFooter>
            </>
            );
        }

        return <D />
      }
    });

    if (result) {
      setPolicies(prev => {
        const index = prev.findIndex(p => p.id === result.id);
        if (index > -1) {
          const updated = [...prev];
          updated[index] = result;
          return updated;
        }
        return [...prev, result];
      });
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center bg-white p-4 shadow-sm border-t-2 border-blue-600">
        <h3 className="text-sm font-bold text-gray-700 uppercase">Asset Protection Rules</h3>
        <button onClick={() => openPolicyForm()} className="btn btn-xs btn-primary rounded-none">
          <i className="fa-solid fa-plus mr-1"></i> New Policy
        </button>
      </div>

      <div className="card bg-white shadow-md rounded-none overflow-hidden">
        <table className="table table-sm w-full">
          <thead className="bg-gray-100 text-[10px] uppercase text-gray-500">
            <tr>
              <th>ID</th>
              <th>Category</th>
              <th>Risk</th>
              <th className="text-right">Manage</th>
            </tr>
          </thead>
          <tbody className="text-xs">
            {policies.map((p) => (
              <tr key={p.id} className="hover:bg-blue-50/40 border-b border-gray-100">
                <td className="font-mono text-blue-600 font-bold">{p.id}</td>
                <td className="font-bold text-gray-700">{p.category}</td>
                <td>
                  <span className={`badge badge-xs rounded-none ${p.riskLevel === 'Critical' ? 'bg-purple-600 text-white' : 'bg-gray-400 text-white'}`}>
                    {p.riskLevel}
                  </span>
                </td>
                <td className="text-right flex justify-end gap-2">
                  <button onClick={() => openPolicyForm(p)} className="hover:text-blue-600"><i className="fa-solid fa-pen-to-square"></i></button>
                  <button onClick={() => handleDelete(p.id)} className="hover:text-red-500"><i className="fa-solid fa-trash-can"></i></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}