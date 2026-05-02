import React, { useState } from "react";

export default function ProfilePage() {
  // Simulated User Data
  const [userData, setUserData] = useState({
    username: "Marjon_Cajocon",
    email: "marjon.dev@archive-system.local",
    role: "System Administrator",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    newUsername: userData.username,
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleInputChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e:any) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulated API Call to your Go Backend
    setTimeout(() => {
      setUserData((prev) => ({ ...prev, username: formData.newUsername }));
      setIsLoading(false);
      setShowSuccess(true);
      
      // Clear password fields after "save"
      setFormData(prev => ({ ...prev, currentPassword: "", newPassword: "", confirmPassword: "" }));

      // Hide success message after 3 seconds
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 animate-fadeIn">
      
      {/* --- LEFT SIDE: Profile Summary --- */}
      <div className="w-full lg:w-1/3">
        <div className="card bg-white shadow-md border-t-4 border-[#007bff] rounded-none">
          <div className="card-body items-center text-center py-8">
            <div className="avatar mb-4">
              <div className="w-28 rounded-full ring-4 ring-gray-100 shadow-inner">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Marjon" alt="User" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800">{userData.username}</h3>
            <p className="text-sm text-gray-500 font-mono uppercase tracking-tighter">{userData.role}</p>
            
            <div className="divider w-full"></div>
            
            <div className="w-full space-y-3">
              <div className="flex justify-between text-sm">
                <span className="font-bold text-gray-600">Account Status</span>
                <span className="text-success font-bold text-[10px] flex items-center gap-1">
                   <span className="h-2 w-2 rounded-full bg-success"></span> ACTIVE
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="font-bold text-gray-600">Archives Managed</span>
                <span className="badge badge-sm rounded-none">1,204</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- RIGHT SIDE: Edit Tabs --- */}
      <div className="w-full lg:w-2/3">
        <div className="card bg-white shadow-md rounded-none">
          <div className="tabs tabs-lifted">
            
            {/* Tab 1: View Information */}
            <input type="radio" name="profile_tabs" className="tab font-bold" aria-label="Account Overview" defaultChecked />
            <div className="tab-content bg-base-100 border-base-300 p-8">
              <h4 className="text-lg font-bold border-b pb-3 mb-6 text-gray-700">General Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase">Username</label>
                  <p className="text-gray-800 font-medium">{userData.username}</p>
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase">Email</label>
                  <p className="text-gray-800 font-medium">{userData.email}</p>
                </div>
              </div>
            </div>

            {/* Tab 2: Security Settings (EDIT) */}
            <input type="radio" name="profile_tabs" className="tab font-bold" aria-label="Security & Privacy" />
            <div className="tab-content bg-base-100 border-base-300 p-8">
              
              {showSuccess && (
                <div className="alert alert-success rounded-none text-white mb-6 py-2 shadow-sm border-none">
                  <i className="fa-solid fa-check-circle"></i>
                  <span className="text-xs font-bold uppercase tracking-wider">Profile updated successfully.</span>
                </div>
              )}

              <form onSubmit={handleUpdate} className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-blue-600 mb-4 uppercase tracking-widest border-l-4 border-blue-600 pl-3">Update Credentials</h4>
                  
                  <div className="form-control w-full">
                    <label className="label"><span className="label-text font-bold text-gray-600">New Username</span></label>
                    <input 
                      type="text" 
                      name="newUsername"
                      value={formData.newUsername}
                      onChange={handleInputChange}
                      className="input input-bordered input-sm rounded-none focus:outline-blue-500" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t pt-6">
                  <div className="form-control w-full md:col-span-2">
                    <label className="label"><span className="label-text font-bold text-gray-600">Current Password</span></label>
                    <input 
                      type="password" 
                      name="currentPassword"
                      placeholder="Required to authorize changes"
                      value={formData.currentPassword}
                      onChange={handleInputChange}
                      className="input input-bordered input-sm rounded-none focus:outline-blue-500" 
                    />
                  </div>
                  
                  <div className="form-control w-full">
                    <label className="label"><span className="label-text font-bold text-gray-600">New Password</span></label>
                    <input 
                      type="password" 
                      name="newPassword"
                      value={formData.newPassword}
                      onChange={handleInputChange}
                      className="input input-bordered input-sm rounded-none focus:outline-blue-500" 
                    />
                  </div>

                  <div className="form-control w-full">
                    <label className="label"><span className="label-text font-bold text-gray-600">Confirm New Password</span></label>
                    <input 
                      type="password" 
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="input input-bordered input-sm rounded-none focus:outline-blue-500" 
                    />
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className={`btn btn-primary btn-sm rounded-none px-10 font-bold uppercase ${isLoading ? 'loading' : ''}`}
                  >
                    {isLoading ? 'Updating Vault...' : 'Save Settings'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}