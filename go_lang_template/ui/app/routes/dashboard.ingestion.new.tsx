import React, { useState, useRef } from "react";

export default function IngestionPage() {
  const [queue, setQueue] = useState<any[]>([]);
  const [formData, setFormData] = useState({ fileName: "", category: "General", retention: "5" });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      // Auto-fill the record name with the filename if empty
      if (!formData.fileName) {
        setFormData({ ...formData, fileName: file.name });
      }
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In your final version, you will use FormData to send to Go
    // const payload = new FormData();
    // payload.append("document", selectedFile);
    // payload.append("metadata", JSON.stringify(formData));

    const newItem = {
      id: Math.floor(Math.random() * 1000),
      fileName: formData.fileName,
      actualFile: selectedFile?.name || "No file attached",
      category: formData.category,
      retention: formData.retention,
      status: "Pending"
    };

    setQueue([...queue, newItem]);
    
    // Reset
    setSelectedFile(null);
    setFormData({ fileName: "", category: "General", retention: "5" });
  };

  return (
    <div className="space-y-6">
      <div className="card bg-white shadow-md rounded-none border-t-4 border-[#007bff]">
        <div className="px-4 py-3 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-sm font-bold text-gray-700 uppercase">New Data Ingestion</h3>
          <i className="fa-solid fa-upload text-blue-500"></i>
        </div>
        
        <div className="p-6">
          <form onSubmit={handleSave} className="space-y-6">
            
            {/* --- FILE UPLOAD AREA --- */}
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-gray-300 p-8 text-center hover:bg-blue-50/50 hover:border-blue-400 cursor-pointer transition-all group"
            >
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                className="hidden" 
              />
              <i className="fa-solid fa-cloud-arrow-up text-4xl text-gray-300 group-hover:text-blue-500 mb-2"></i>
              <p className="text-sm font-bold text-gray-500">
                {selectedFile ? (
                  <span className="text-blue-600">Selected: {selectedFile.name}</span>
                ) : (
                  "Click to select or drag and drop document"
                )}
              </p>
              <p className="text-[10px] text-gray-400 uppercase mt-1">PDF, ZIP, DOCX up to 50MB</p>
            </div>

            {/* --- METADATA FIELDS --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
              <div className="form-control w-full">
                <label className="label"><span className="label-text font-bold text-xs text-gray-500 uppercase">Record Name</span></label>
                <input 
                  type="text" 
                  className="input input-bordered input-sm rounded-none focus:outline-blue-500" 
                  value={formData.fileName}
                  onChange={(e) => setFormData({...formData, fileName: e.target.value})}
                />
              </div>

              <div className="form-control w-full">
                <label className="label"><span className="label-text font-bold text-xs text-gray-500 uppercase">Category</span></label>
                <select 
                  className="select select-bordered select-sm rounded-none text-xs"
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                >
                  <option>Finance</option>
                  <option>Security</option>
                  <option>General</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary btn-sm rounded-none font-bold">
                ADD TO QUEUE
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* --- QUEUE TABLE --- */}
      <div className="card bg-white shadow-md rounded-none border-t border-gray-200">
        <table className="table table-sm w-full">
          <thead className="bg-gray-50 text-[10px] uppercase text-gray-500">
            <tr>
              <th>ID</th>
              <th>Record Name</th>
              <th>Attached File</th>
              <th>Category</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody className="text-xs">
            {queue.map((item) => (
              <tr key={item.id} className="border-b border-gray-100">
                <td className="font-mono text-blue-600">#{item.id}</td>
                <td className="font-bold">{item.fileName}</td>
                <td className="italic text-gray-400">{item.actualFile}</td>
                <td><span className="badge badge-ghost badge-xs rounded-none">{item.category}</span></td>
                <td className="text-center">
                  <button onClick={() => setQueue(queue.filter(i => i.id !== item.id))} className="text-red-400 hover:text-red-600">
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}