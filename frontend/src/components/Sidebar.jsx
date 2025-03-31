import { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";
import { Users } from "lucide-react";

const Sidebar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = useChatStore();
  const { onlineUsers } = useAuthStore();
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = showOnlineOnly
    ? users.filter((user) => onlineUsers.includes(user._id))
    : users;

  if (isUsersLoading) return <SidebarSkeleton />;

  return (
    <aside className="h-full w-20 lg:w-80 border-r border-[#282828] flex flex-col transition-all duration-200 bg-[#181818]">
      <div className="border-b border-[#282828] w-full p-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="size-9 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center">
            <Users className="size-5 text-[#8B5CF6]" />
          </div>
          <span className="font-semibold text-[#E0E0E0] hidden lg:block text-lg">Contacts</span>
        </div>
        
        {/* Online filter toggle */}
        <div className="mt-3 hidden lg:block">
          <label className="cursor-pointer flex items-center gap-2.5 bg-[#202020] p-2 rounded-md">
            <span className="relative">
              <input
                type="checkbox"
                checked={showOnlineOnly}
                onChange={(e) => setShowOnlineOnly(e.target.checked)}
                className="checkbox checkbox-sm checkbox-primary"
              />
            </span>
            <span className="text-sm text-[#E0E0E0]">Show online only</span>
            <span className="text-xs text-[#909090] ml-auto">({onlineUsers.length - 1} online)</span>
          </label>
        </div>
      </div>

      <div className="overflow-y-auto w-full py-3 scrollbar-thin">
        {filteredUsers.map((user) => (
          <button
            key={user._id}
            onClick={() => setSelectedUser(user)}
            className={`
              w-full p-3 flex items-center gap-3
              hover:bg-[#202020] transition-all duration-200
              ${selectedUser?._id === user._id ? "bg-[#202020]" : ""}
              ${selectedUser?._id === user._id ? "border-l-2 border-[#8B5CF6]" : ""}
            `}
          >
            <div className="relative mx-auto lg:mx-0">
              <div className={`size-12 rounded-full border-2 ${onlineUsers.includes(user._id) ? "border-[#10B981]" : "border-[#282828]"} overflow-hidden`}>
                <img
                  src={user.profilePic || "/avatar.png"}
                  alt={user.name}
                  className="size-full object-cover"
                />
              </div>
              {onlineUsers.includes(user._id) && (
                <span
                  className="absolute bottom-0 right-0 size-3.5 bg-[#10B981] 
                  rounded-full ring-2 ring-[#181818]"
                />
              )}
            </div>

            {/* User info - only visible on larger screens */}
            <div className="hidden lg:block text-left min-w-0">
              <div className="font-medium text-[#E0E0E0] truncate">{user.fullName}</div>
              <div className={`text-sm ${onlineUsers.includes(user._id) ? "text-[#10B981]" : "text-[#909090]"}`}>
                {onlineUsers.includes(user._id) ? "Online" : "Offline"}
              </div>
            </div>
          </button>
        ))}

        {filteredUsers.length === 0 && (
          <div className="text-center text-[#909090] py-6">
            <div className="flex flex-col items-center gap-2">
              <div className="size-12 rounded-full bg-[#202020] flex items-center justify-center">
                <Users className="size-6 opacity-30" />
              </div>
              <p>No users found</p>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
export default Sidebar;
