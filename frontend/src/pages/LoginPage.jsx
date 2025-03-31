import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import AuthImagePattern from "../components/AuthImagePattern";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="h-full  bg-[#121212]">
      {/* Left Side - Form */}
      <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-md space-y-9">
          {/* Logo */}
          <div className="text-center mt-4 ">
            <div className="flex flex-col items-center gap-1 group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#8B5CF6]/30 to-[#9333EA]/10 
                flex items-center justify-center p-4 border border-[#8B5CF6]/20 group-hover:border-[#8B5CF6]/40
                transition-all duration-300">
                <MessageSquare className="w-8 h-8 text-[#8B5CF6]" />
              </div>
              <h1 className="text-2xl font-bold mt-4 text-[#E0E0E0] group-hover:text-white transition-colors">Welcome Back</h1>
              <p className="text-[#909090]">Sign in to your account</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="text-[#E0E0E0] font-medium">Email</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-[#8B5CF6]" />
                </div>
                <input
                  type="email"
                  className="w-full py-3 px-10 rounded-lg bg-[#181818] border border-[#282828] focus:border-[#8B5CF6] text-[#E0E0E0] transition-colors focus:outline-none"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="text-[#E0E0E0] font-medium">Password</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-[#8B5CF6]" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full py-3 px-10 rounded-lg bg-[#181818] border border-[#282828] focus:border-[#8B5CF6] text-[#E0E0E0] transition-colors focus:outline-none"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#909090] hover:text-[#E0E0E0] transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="pt-2">
              <button 
                type="submit" 
                className={`w-full py-3 px-4 rounded-lg font-medium text-white 
                  ${isLoggingIn ? 'bg-[#7C3AED]/70' : 'bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-[#9333EA] hover:to-[#8B5CF6]'}
                  transition-all duration-300 flex items-center justify-center gap-2`} 
                disabled={isLoggingIn}
              >
                {isLoggingIn ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  "Sign in"
                )}
              </button>
            </div>
          </form>

          <div className="text-center pt-4">
            <p className="text-[#909090]">
              Don&apos;t have an account?{" "}
              <Link to="/signup" className="text-[#8B5CF6] hover:text-[#9333EA] transition-colors font-medium">
                Create account
              </Link>
            </p>
          </div>
          
          {/* Optional: Demo credentials */}
          <div className="bg-[#202020] p-4 rounded-lg border border-[#282828] mt-6">
            <p className="text-[#E0E0E0] text-sm mb-2 font-medium">Demo credentials:</p>
            <div className="text-xs text-[#909090] space-y-1">
              <p>Email: demo@example.com</p>
              <p>Password: password123</p>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};
export default LoginPage;
