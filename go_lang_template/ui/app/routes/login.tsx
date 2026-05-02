import { Form, Link, useNavigate } from "react-router";
import { Network } from "~/config";

export default function Login() {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 bg-gradient-to-br from-base-300 to-primary/10">
      <div className="card w-full max-w-md shadow-2xl bg-base-100/80 backdrop-blur-md border border-white/10">
        <div className="card-body">
          {/* Header */}
          <div className="flex flex-col items-center gap-2 mb-4">
            <div className="p-3 bg-primary rounded-xl text-primary-content shadow-lg">
              <i className="fas fa-archive fa-2x"></i>
            </div>
            <h2 className="card-title text-2xl font-bold italic tracking-tight">
              Archive<span className="text-primary font-black">System</span>
            </h2>
            <p className="text-sm opacity-70">Please enter your credentials to continue</p>
          </div>

          <Form method="post" className="space-y-4">
            {/* Username Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Username</span>
              </label>
              <div className="join w-full border border-base-300 focus-within:border-primary transition-colors rounded-lg overflow-hidden">
                <span className="join-item flex items-center px-4 bg-base-200 opacity-70">
                  <i className="fas fa-user text-xs"></i>
                </span>
                <input 
                  type="text" 
                  name="username" 
                  placeholder="marjon_dev" 
                  className="input join-item w-full focus:outline-none bg-transparent" 
                  required 
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="form-control">
              <div className="flex justify-between items-center">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <Link to="/forgot-password" className="text-xs link link-primary no-underline hover:underline">
                  Forgot?
                </Link>
              </div>
              <div className="join w-full border border-base-300 focus-within:border-primary transition-colors rounded-lg overflow-hidden">
                <span className="join-item flex items-center px-4 bg-base-200 opacity-70">
                  <i className="fas fa-lock text-xs"></i>
                </span>
                <input 
                  type="password" 
                  name="password" 
                  placeholder="••••••••" 
                  className="input join-item w-full focus:outline-none bg-transparent" 
                  required 
                />
              </div>
            </div>

            {/* Remember Me */}
            <div className="form-control">
              <label className="label cursor-pointer justify-start gap-3">
                <input type="checkbox" className="checkbox checkbox-primary checkbox-sm" />
                <span className="label-text">Keep me logged in</span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary gap-2 shadow-lg shadow-primary/20" onClick={async () => {
                  //navigate("/dashboard");

                  const res = await new Network().fetch_json("/api/user/auth", {

                  });
                  console.log(res);
              }}>
                <i className="fas fa-sign-in-alt"></i>
                Login to Console
              </button>
            </div>
          </Form>

          {/* Footer */}
          {/* <div className="divider text-xs opacity-50">OR</div>
          <p className="text-center text-sm opacity-70">
            Don't have access?{" "}
            <Link to="/request-access" className="link link-primary font-bold">
              Contact Admin
            </Link>
          </p> */}
        </div>
      </div>
    </div>
  );
}