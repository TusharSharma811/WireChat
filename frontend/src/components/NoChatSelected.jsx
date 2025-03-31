import { MessageSquare } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-[#121212]">
      <div className="max-w-md text-center space-y-6">
        {/* Icon Display */}
        <div className="flex justify-center gap-4 mb-6">
          <div className="relative">
            <div className="size-20 rounded-full bg-gradient-to-br from-[#8B5CF6]/30 to-[#9333EA]/10 
                flex items-center justify-center backdrop-blur-sm p-6 border border-[#8B5CF6]/20">
              <MessageSquare className="w-10 h-10 text-[#8B5CF6]" />
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <h2 className="text-2xl font-bold text-[#E0E0E0]">Welcome to Chatty!</h2>
        <p className="text-[#909090] text-lg">
          Select a conversation from the sidebar to start chatting
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;
