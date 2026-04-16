import { useState } from "react";
import { dialog, DialogBody, DialogFooter, DialogHeader } from "~/component/dialog";

const subForm = async () => {

  return await dialog({
    render: ({close}) => {

      const D = () => {

        const [formData, setFormData] = useState({
          email: '',
          password: '',
        });

        const handleChange = (e:any) => {
          const { name, value } = e.target;
          setFormData((prev) => ({
            ...prev,
            [name]: value,
          }));
        };

        const handleSubmit = (e: any) => {
          e.preventDefault();
          console.log('Login Attempt:', formData);
          // Handle authentication logic here
        };

        return <>
          <DialogHeader><button className="btn btn-info btn-danger">fdsa</button>this is aheader</DialogHeader>
          <DialogBody>

            <div className="p-2 w-full">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold">Welcome Back</h2>
                <p className="text-sm opacity-70">Please enter your details to login</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold text-base-content">Email Address</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email@example.com"
                    className="input input-bordered w-full focus:input-primary transition-all"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold text-base-content">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    className="input input-bordered w-full focus:input-primary transition-all"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <label className="label">
                    <button type="button" className="label-text-alt link link-hover text-primary">
                      Forgot password?
                    </button>
                  </label>
                </div>

                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary w-full">
                    Login
                  </button>
                </div>

                <div className="divider text-xs opacity-50 uppercase">OR</div>

                <button type="button" className="btn btn-outline w-full gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 48 48">
                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
                  </svg>
                  Sign in with Google
                </button>
              </form>

              <div className="mt-6 text-center text-sm">
                <span className="opacity-70">Don't have an account?</span>
                <button type="button" className="link link-primary font-semibold ml-1">
                  Create Account
                </button>
              </div>
            </div>

          </DialogBody>

          <DialogFooter>
            <button className="btn btn-info btn-sm" onClick={() => {
              close(false);
            }}>
              Save
            </button>
          </DialogFooter>

        </>
      }

      return <D />

    }
  });
}


const openForm = async () => {
  return await dialog({
    width: 1060,
    backDropClick: true,
    render: ({close}) => {

      const D = () => {

        return <>
          <button className="btn btn-primary" onClick={async () => {
            const res = await subForm();
            console.log(res);
          }}>this is a sample</button>
        </>
      }

      return <D />
    }
  });
}

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-base-200 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Profile Card */}
        <div className="card bg-base-100 shadow-2xl overflow-hidden border border-base-300">
          
          {/* Header/Banner */}
          <div className="h-48 w-full bg-gradient-to-r from-primary to-accent relative">
            <button className="btn btn-circle btn-sm absolute top-4 right-4 bg-black/20 border-none text-white hover:bg-black/40">
               <i className="fas fa-camera"></i>
            </button>
          </div>

          <div className="card-body pt-0 relative">
            {/* Avatar */}
            <div className="avatar -mt-16 justify-center">
              <div className="w-32 rounded-full ring ring-base-100 ring-offset-base-100 ring-offset-4 shadow-xl">
                <img src="https://pravatar.cc" alt="Profile" />
              </div>
            </div>

            {/* Profile Info */}
            <div className="text-center mt-4">
              <h1 className="text-3xl font-black text-base-content tracking-tight">Marjon Cajocon</h1>
              <p className="text-primary font-bold flex items-center justify-center gap-2 mt-1">
                <i className="fas fa-briefcase text-sm"></i> 
                Full Stack Developer
              </p>
              
              {/* Contact Icons */}
              <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm opacity-70 font-medium">
                <span className="flex items-center gap-2">
                  <i className="fas fa-map-marker-alt text-primary"></i> Bohol, Philippines
                </span>
                <span className="flex items-center gap-2">
                  <i className="fas fa-envelope text-primary"></i> marjon@example.com
                </span>
                <span className="flex items-center gap-2">
                  <i className="fas fa-link text-primary"></i> ://github.com
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-3 mt-8">
              <button className="btn btn-primary rounded-xl px-8 shadow-lg shadow-primary/30" onClick={async () => {

                const res = await openForm();
                console.log(res);

              }}>
                <i className="fas fa-user-edit mr-2"></i> Edit Profile
              </button>
              <button className="btn btn-outline rounded-xl border-2">
                <i className="fas fa-share-nodes"></i>
              </button>
            </div>

            <div className="divider my-8">About Me</div>

            {/* Bio Section */}
            <div className="px-2 lg:px-10 pb-6 text-center">
              <p className="leading-relaxed opacity-80 text-lg">
                Building the future with React Router v7 and DaisyUI. 
                Passionate about clean code and modern Material designs.
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="bg-base-200 p-6 rounded-2xl text-center border border-base-300 hover:scale-105 transition-transform">
                  <div className="text-2xl font-black text-primary">24</div>
                  <div className="text-[10px] uppercase font-bold opacity-50 tracking-widest">Projects</div>
                </div>
                <div className="bg-base-200 p-6 rounded-2xl text-center border border-base-300 hover:scale-105 transition-transform">
                  <div className="text-2xl font-black text-secondary">1.2k</div>
                  <div className="text-[10px] uppercase font-bold opacity-50 tracking-widest">Commits</div>
                </div>
                <div className="bg-base-200 p-6 rounded-2xl text-center border border-base-300 hover:scale-105 transition-transform">
                  <div className="text-2xl font-black text-accent">5+</div>
                  <div className="text-[10px] uppercase font-bold opacity-50 tracking-widest">Clients</div>
                </div>
                <div className="bg-base-200 p-6 rounded-2xl text-center border border-base-300 hover:scale-105 transition-transform">
                  <div className="text-2xl font-black text-neutral">12</div>
                  <div className="text-[10px] uppercase font-bold opacity-50 tracking-widest">Certificates</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
