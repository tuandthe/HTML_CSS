import { cn } from "@/lib/utils";
import { Message } from "@/types/ticket";
import { Paperclip, User } from "lucide-react";

interface ChatBubbleProps {
  message: Message;
  isMe: boolean;
}
export default function ChatBubble({ message, isMe }: ChatBubbleProps) {
  return (
    <div
      className={cn("flex gap-4 mb-6", isMe ? "flex-row-reverse" : "flex-row")}
    >
      {/* Avatar */}
      <div className="flex-shrink-0">
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 overflow-hidden">
          <User size={20} />
        </div>
      </div>
      {/* Content */}
      <div
        className={cn(
          "flex flex-col max-w-[85%] sm:max-w-[75%]",
          isMe && "items-end",
        )}
      >
        <div className="flex items-center gap-2 mb-1">
          <span className="font-bold text-sm text-gray-900">
            {message.senderName}
          </span>
          <span className="text-xs text-gray-400">{message.timestamp}</span>
        </div>
        <div
          className={cn(
            "p-4 rounded-xl text-sm leading-relaxed shadow-sm whitespace-pre-wrap",
            isMe
              ? "bg-[#007042] text-white rounded-tr-none" // Màu xanh chuẩn Starbucks
              : "bg-gray-100 text-gray-800 rounded-tl-none",
          )}
        >
          {message.text}
          {message.attachment && (
            <div
              className={cn(
                "mt-3 flex items-center gap-2 p-2 rounded-lg cursor-pointer transition-colors",
                isMe
                  ? "bg-[#005c36] hover:bg-[#004b2c]"
                  : "bg-white border border-gray-200 hover:bg-gray-50",
              )}
            >
              <Paperclip size={16} />
              <span className="underline truncate max-w-[200px]">
                {message.attachment}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
