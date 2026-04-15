export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-base-200 p-4">
      <div className="card w-full max-w-sm bg-base-100 shadow-xl">
        <form className="card-body">
          <h2 className="card-title text-2xl font-bold justify-center mb-4">Welcome Back</h2>
          
          {/* Email Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input 
              type="email" 
              placeholder="email@example.com" 
              className="input input-bordered" 
              required 
            />
          </div>

          {/* Password Field */}
          <div className="form-control mt-2">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="input input-bordered" 
              required 
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>

          {/* Login Button */}
          <div className="form-control mt-6">
            <button className="btn btn-primary"><i className="fas fa-sign-in"></i> Login</button>
          </div>

          {/* Divider & Social Login */}
          <div className="divider">OR</div>
          
          <button type="button" className="btn btn-outline btn-secondary w-full">
            Continue with Google
          </button>

          <p className="text-center text-sm mt-4">
            Don't have an account?{" "}
            <a href="#" className="link link-primary font-semibold">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
}