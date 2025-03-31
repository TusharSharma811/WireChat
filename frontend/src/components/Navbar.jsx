import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User, Bell } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header
      className="bg-[#181818]/90 border-b border-[#282828] fixed w-full top-0 z-40 
      backdrop-blur-lg"
    >
      <div className="container mx-auto px-4 h-14">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
              <div className="size-9 rounded-full bg-gradient-to-br from-[#8B5CF6]/30 to-[#9333EA]/10 
                 flex items-center justify-center p-2 border border-[#8B5CF6]/20">
                <MessageSquare className="w-5 h-5 text-[#8B5CF6]" />
              </div>
              <h1 className="text-lg font-bold text-[#E0E0E0]">WireChat</h1>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <button className="btn btn-sm btn-circle bg-[#202020] hover:bg-[#282828] border-none text-[#909090]">
              <Bell size={18} />
            </button>
            
            <Link
              to={"/settings"}
              className="btn btn-sm gap-2 transition-colors bg-[#202020] hover:bg-[#282828] border-none text-[#E0E0E0]"
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </Link>

            {authUser && (
              <>
                <Link to={"/profile"} className="btn btn-sm gap-2 bg-[#202020] hover:bg-[#282828] border-none text-[#E0E0E0]">
                  <User className="size-4" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button 
                  className="flex gap-2 items-center btn btn-sm bg-[#202020] hover:bg-[#282828] border-none text-[#E0E0E0]" 
                  onClick={logout}
                >
                  <LogOut className="size-4" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
