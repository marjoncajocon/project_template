import React, { useState } from "react";

// Mock Data Structure
interface ArchiveRecord {
  id: string;
  refCode: string;
  title: string;
  category: string;
  archivedDate: string;
  status: "Active" | "Expired" | "Pending";
}

export default function ArchivedRecords() {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Mock records
  const [records] = useState<ArchiveRecord[]>([
    { id: "1", refCode: "ARC-2026-001", title: "Tax_Report_2025.pdf", category: "Finance", archivedDate: "2026-01-15", status: "Active" },
    { id: "2", refCode: "ARC-2026-002", title: "Staff_DTR_Jan.xlsx", category: "Personnel", archivedDate: "2026-02-10", status: "Active" },
    { id: "3", refCode: "ARC-2026-003", title: "System_Update_Logs.log", category: "Logs", archivedDate: "2026-03-05", status: "Expired" },
    { id: "4", refCode: "ARC-2026-004", title: "Legal_Contract_V1.pdf", category: "Legal", archivedDate: "2026-04-01", status: "Active" },
  ]);

  // Filtering Logic
  const filteredRecords = records.filter(rec => 
    rec.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    rec.refCode.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fadeIn">
      
      {/* --- FILTER & SEARCH BAR --- */}
      <div className="card bg-white shadow-sm rounded-none border-b border-gray-200 p-4 flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="flex gap-2 w-full md:w-auto">
           <input 
             type="text" 
             placeholder="Search Reference ID or Name..." 
             className="input input-bordered input-sm rounded-none w-full md:w-64"
             value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}
           />
           <button className="btn btn-sm btn-primary rounded-none">
             <i className="fa-solid fa-magnifying-glass"></i>
           </button>
        </div>
        
        <div className="flex gap-2">
           <button className="btn btn-sm btn-outline rounded-none text-gray-500">
             <i className="fa-solid fa-filter"></i> Filter
           </button>
           <button className="btn btn-sm btn-success rounded-none text-white">
             <i className="fa-solid fa-file-export"></i> Export CSV
           </button>
        </div>
      </div>

      {/* --- MAIN DATA TABLE --- */}
      <div className="card bg-white shadow-md rounded-none border-t-2 border-[#007bff]">
        <div className="px-4 py-3 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
          <h4 className="text-[12px] font-bold text-gray-600 uppercase tracking-widest">
             Archive Vault Records
          </h4>
          <span className="text-[10px] font-mono text-gray-400">Showing {filteredRecords.length} entries</span>
        </div>
        
        <div className="overflow-x-auto">
          <table className="table table-sm w-full">
            <thead className="text-[10px] text-gray-500 uppercase bg-gray-50">
              <tr>
                <th>Reference ID</th>
                <th>File Title</th>
                <th>Category</th>
                <th>Date Archived</th>
                <th>Status</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-xs text-gray-700">
              {filteredRecords.map((rec) => (
                <tr key={rec.id} className="hover:bg-blue-50/30 transition-colors border-b border-gray-100">
                  <td className="font-mono text-blue-600 font-bold">{rec.refCode}</td>
                  <td className="font-medium">{rec.title}</td>
                  <td>{rec.category}</td>
                  <td>{rec.archivedDate}</td>
                  <td>
                    <span className={`badge badge-xs rounded-none uppercase font-bold ${
                      rec.status === 'Active' ? 'badge-success text-white' : 
                      rec.status === 'Expired' ? 'badge-error text-white' : 'badge-warning'
                    }`}>
                      {rec.status}
                    </span>
                  </td>
                  <td className="flex justify-center gap-1">
                    <button className="btn btn-xs btn-ghost text-blue-500" title="View Details"><i className="fa-solid fa-eye"></i></button>
                    <button className="btn btn-xs btn-ghost text-green-500" title="Download"><i className="fa-solid fa-download"></i></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination placeholder */}
        <div className="p-3 border-t border-gray-100 flex justify-between items-center">
          <span className="text-[10px] text-gray-400 italic">Page 1 of 1</span>
          <div className="join">
            <button className="join-item btn btn-xs rounded-none">«</button>
            <button className="join-item btn btn-xs rounded-none">1</button>
            <button className="join-item btn btn-xs rounded-none">»</button>
          </div>
        </div>
      </div>
    </div>
  );
}