import { useRef, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { Image, Send, X, Smile, Paperclip } from "lucide-react";
import toast from "react-hot-toast";

const MessageInput = () => {
  const [text, setText] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const { sendMessage } = useChatStore();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!text.trim() && !imagePreview) return;

    try {
      await sendMessage({
        text: text.trim(),
        image: imagePreview,
      });

      // Clear form
      setText("");
      setImagePreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <div className="p-4 w-full border-t border-[#282828] bg-[#181818]">
      {imagePreview && (
        <div className="mb-3 flex items-center gap-2">
          <div className="relative">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-24 h-24 object-cover rounded-md border border-[#282828]"
            />
            <button
              onClick={removeImage}
              className="absolute -top-2 -right-2 size-6 rounded-full bg-[#282828]
              flex items-center justify-center text-[#E0E0E0] hover:bg-[#404040]"
              type="button"
            >
              <X className="size-3.5" />
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSendMessage} className="flex items-center gap-2">
        <div className="flex-1 flex gap-1.5">
          <button
            type="button"
            className="btn btn-sm btn-circle bg-[#202020] hover:bg-[#282828] border-none text-[#909090]"
          >
            <Smile size={18} />
          </button>
          
          <input
            type="text"
            className="w-full bg-[#202020] rounded-full py-2 px-4 text-[#E0E0E0] focus:outline-none border border-[#282828] focus:border-[#8B5CF6] transition-colors"
            placeholder="Type a message..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleImageChange}
          />

          <button
            type="button"
            className={`btn btn-sm btn-circle bg-[#202020] hover:bg-[#282828] border-none
                     ${imagePreview ? "text-[#8B5CF6]" : "text-[#909090]"}`}
            onClick={() => fileInputRef.current?.click()}
          >
            <Image size={18} />
          </button>
          
          <button
            type="button"
            className="btn btn-sm btn-circle bg-[#202020] hover:bg-[#282828] border-none text-[#909090] hidden sm:flex"
          >
            <Paperclip size={18} />
          </button>
        </div>
        
        <button
          type="submit"
          className={`btn btn-sm btn-circle ${
            !text.trim() && !imagePreview 
              ? "bg-[#282828] text-[#606060]" 
              : "bg-[#8B5CF6] hover:bg-[#7C3AED] text-white"
          }`}
          disabled={!text.trim() && !imagePreview}
        >
          <Send size={18} />
        </button>
      </form>
    </div>
  );
};
export default MessageInput;
