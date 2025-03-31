import { X, Phone, Video } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  return (
    <div className="px-4 py-3 border-b border-[#282828] bg-[#181818]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="avatar">
            <div className="size-11 rounded-full relative border-2 border-[#282828]">
              <img src={selectedUser.profilePic || "/avatar.png"} alt={selectedUser.fullName} />
              {onlineUsers.includes(selectedUser._id) && (
                <span className="absolute bottom-0 right-0 size-3 bg-[#10B981] rounded-full ring-2 ring-[#181818]" />
              )}
            </div>
          </div>

          {/* User info */}
          <div>
            <h3 className="font-medium text-[#E0E0E0]">{selectedUser.fullName}</h3>
            <p className={`text-sm ${onlineUsers.includes(selectedUser._id) ? "text-[#10B981]" : "text-[#909090]"}`}>
              {onlineUsers.includes(selectedUser._id) ? "Online" : "Offline"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Call buttons (decorative) */}
          <button className="btn btn-sm btn-circle bg-[#202020] hover:bg-[#282828] border-none text-[#909090]">
            <Phone size={16} />
          </button>
          <button className="btn btn-sm btn-circle bg-[#202020] hover:bg-[#282828] border-none text-[#909090]">
            <Video size={16} />
          </button>
          
          {/* Close button */}
          <button 
            onClick={() => setSelectedUser(null)} 
            className="btn btn-sm btn-circle bg-[#202020] hover:bg-[#282828] border-none text-[#909090]"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ChatHeader;
