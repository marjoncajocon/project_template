import { dialog } from "~/component/dialog";

const subForm = async () => {

  return await dialog({
    title: "sub form",
    render: ({close}) => {

      const D = () => {

        return <><span>this is a sub form</span>
        
        <button className="btn btn-info btn-sm" onClick={async () => {
            close(true);

        }}>
            Save
        </button></>
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
