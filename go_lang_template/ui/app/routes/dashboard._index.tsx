import ChartJS from "~/component/Chart";

export default function Dashboard() {
  // Data for Ingestion Rate (Bar Chart)
  const ingestionLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const ingestionData = [45, 59, 80, 81, 56, 55, 40];
  const ingestionColors = ['#007bff', '#007bff', '#007bff', '#007bff', '#007bff', '#007bff', '#007bff'];

  // Data for Vault Distribution (Pie Chart)
  const storageLabels = ['Documents', 'Media', 'System Logs', 'Backups'];
  const storageData = [40, 25, 20, 15];
  const storageColors = ['#007bff', '#28a745', '#ffc107', '#dc3545'];

  return (
    <div className="space-y-6">
      
      {/* --- QUICK STATS BOXES (AdminLTE 3 Style) --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Files */}
        <div className="bg-white shadow-sm flex items-stretch rounded-sm overflow-hidden border border-gray-200">
          <div className="bg-info w-16 flex items-center justify-center text-white">
            <i className="fa-solid fa-file-shield text-2xl"></i>
          </div>
          <div className="p-3">
            <p className="text-xs font-bold text-gray-500 uppercase">Archived Files</p>
            <h3 className="text-xl font-bold">12,842</h3>
          </div>
        </div>
        
        {/* Storage */}
        <div className="bg-white shadow-sm flex items-stretch rounded-sm overflow-hidden border border-gray-200">
          <div className="bg-success w-16 flex items-center justify-center text-white">
            <i className="fa-solid fa-server text-2xl"></i>
          </div>
          <div className="p-3">
            <p className="text-xs font-bold text-gray-500 uppercase">Vault Usage</p>
            <h3 className="text-xl font-bold">82%</h3>
          </div>
        </div>

        {/* Pending */}
        <div className="bg-white shadow-sm flex items-stretch rounded-sm overflow-hidden border border-gray-200">
          <div className="bg-warning w-16 flex items-center justify-center text-white">
            <i className="fa-solid fa-hourglass-half text-2xl"></i>
          </div>
          <div className="p-3">
            <p className="text-xs font-bold text-gray-500 uppercase">Pending Review</p>
            <h3 className="text-xl font-bold">43</h3>
          </div>
        </div>

        {/* Audit */}
        <div className="bg-white shadow-sm flex items-stretch rounded-sm overflow-hidden border border-gray-200">
          <div className="bg-danger w-16 flex items-center justify-center text-white">
            <i className="fa-solid fa-fingerprint text-2xl"></i>
          </div>
          <div className="p-3">
            <p className="text-xs font-bold text-gray-500 uppercase">Today's Audits</p>
            <h3 className="text-xl font-bold">156</h3>
          </div>
        </div>
      </div>

      {/* --- GRAPHS SECTION --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Weekly Ingestion (Using your ChartJS Component) */}
        <div className="card bg-white shadow-md rounded-none border-t-2 border-primary">
          <div className="px-4 py-2 border-b border-gray-100 flex justify-between items-center">
            <h4 className="text-[13px] font-bold text-gray-700 uppercase tracking-tight">Weekly Ingestion Flow</h4>
            <div className="flex gap-1">
               <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            </div>
          </div>
          <div className="p-4 bg-white">
            <div className="h-64 flex items-center justify-center">
               <ChartJS 
                  type="bar"
                  title="Files Archived"
                  labels={ingestionLabels}
                  data={ingestionData}
                  bgColor={ingestionColors}
               />
            </div>
          </div>
        </div>

        {/* Storage Distribution (Using your ChartJS Component) */}
        <div className="card bg-white shadow-md rounded-none border-t-2 border-success">
          <div className="px-4 py-2 border-b border-gray-100">
            <h4 className="text-[13px] font-bold text-gray-700 uppercase tracking-tight">Storage Content Ratio</h4>
          </div>
          <div className="p-4 bg-white">
            <div className="h-64 flex items-center justify-center">
               <ChartJS 
                  type="pie"
                  title="Storage Type"
                  labels={storageLabels}
                  data={storageData}
                  bgColor={storageColors}
               />
            </div>
          </div>
        </div>

      </div>

      {/* --- RECENT SYSTEM LOGS --- */}
      <div className="card bg-white shadow-md rounded-none border-t-2 border-gray-300">
        <div className="px-4 py-2 border-b border-gray-100 bg-gray-50/50">
          <h4 className="text-[13px] font-bold text-gray-700 uppercase tracking-tight">Recent Activity Log</h4>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-sm w-full rounded-none">
            <thead>
              <tr className="text-gray-500 border-b border-gray-200">
                <th className="font-bold">Transaction ID</th>
                <th className="font-bold">Module</th>
                <th className="font-bold">Action</th>
                <th className="font-bold">Timestamp</th>
                <th className="font-bold">Status</th>
              </tr>
            </thead>
            <tbody className="text-xs">
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="font-mono text-blue-600">#VAULT-8821</td>
                <td>Ingestion</td>
                <td>Uploaded: 2026_Tax_Return.pdf</td>
                <td>10:05:09 PM</td>
                <td><span className="badge badge-success badge-xs text-white rounded-none">SECURE</span></td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="font-mono text-blue-600">#VAULT-8820</td>
                <td>Security</td>
                <td>Admin Password Change</td>
                <td>09:45:12 PM</td>
                <td><span className="badge badge-info badge-xs text-white rounded-none">SYSTEM</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}