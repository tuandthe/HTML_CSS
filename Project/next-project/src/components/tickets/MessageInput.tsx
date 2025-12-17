import { useState } from "react";
import { Paperclip, Send } from "lucide-react";

interface MessageInputProps {
  onSend: (text: string) => void;
}

export default function MessageInput({ onSend }: MessageInputProps) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div>
    <div className="bg-white p-2 mb-3 rounded-xl border border-gray-200">
      <textarea
        className="w-full resize-none outline-none text-gray-700 placeholder-gray-400 min-h-[60px] text-sm focus:ring-0"
        placeholder="Type your message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      </div>
      <div className="flex items-center justify-between">
        <button className="flex items-center gap-2 px-3 py-1.5 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors text-sm font-medium">
          <Paperclip size={18} /> Attach File
        </button>
        <button
          disabled={!text.trim()}
          onClick={handleSend}
          className={`
            flex items-center gap-2 px-6 py-2 rounded-lg font-bold text-sm transition-all
            ${
              text.trim()
                ? "bg-[#007042] hover:bg-[#005c36] text-white shadow-sm"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }
          `}
        >
          <Send size={18} /> Send Message
        </button>
      </div>
    
    </div>
  );
}
