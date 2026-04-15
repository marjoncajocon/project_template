import { dialog, DialogBody, DialogFooter, DialogHeader } from "~/component/dialog";

const subForm = async () => {

  return await dialog({
    title: "sub form",
    height: 200,
    render: ({close}) => {

      const D = () => {

        return <>
          <DialogHeader><button className="btn btn-info btn-danger">fdsa</button>this is aheader</DialogHeader>
          <DialogBody>
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 bg-primary rounded-2xl grid place-items-center shadow-lg shadow-primary/30 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
            </div>
            <h2 className="text-3xl font-black tracking-tight">Welcome Back</h2>
            <p className="text-base-content/60 text-sm">Please enter your details to sign in</p>
          </div>

          <form className="space-y-4">
            <div className="form-control">
              <label className="label px-1">
                <span className="label-text font-semibold">Email Address</span>
              </label>
              <input 
                type="email" 
                placeholder="marjon@example.com" 
                className="input input-bordered bg-base-200/50 focus:input-primary transition-all duration-300" 
                required 
              />
            </div>

            <div className="form-control">
              <label className="label px-1">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="input input-bordered bg-base-200/50 focus:input-primary transition-all duration-300" 
                required 
              />
              <div className="flex justify-end mt-2">
                <a href="#" className="text-xs link link-hover text-primary font-medium">Forgot password?</a>
              </div>
            </div>

            <button className="btn btn-primary btn-block shadow-lg shadow-primary/20 mt-4">
              Sign In
            </button>
          </form>

          <div className="divider text-xs text-base-content/40">OR CONTINUE WITH</div>

          <div className="grid grid-cols-2 gap-4">
            <button className="btn btn-outline border-base-300 hover:bg-base-200 gap-2">
              Google
            </button>
            <button className="btn btn-outline border-base-300 hover:bg-base-200 gap-2">
              GitHub
            </button>
          </div>

          <p className="text-center text-sm text-base-content/60 mt-4">
            New here? <a href="#" className="text-primary font-bold hover:underline">Create an account</a>
          </p>

        </DialogBody>

        <DialogFooter>
          <button className="btn btn-info btn-sm">
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
    title: "open Form",
    width: 1060,
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
