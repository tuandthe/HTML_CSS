import { cn } from "@/lib/utils/utils";
import { Message } from "@/lib/types/ticket";
import { Paperclip, User } from "lucide-react";

interface ChatBubbleProps {
  message: Message;
  isMe: boolean;
}

export default function ChatBubble({ message, isMe }: ChatBubbleProps) {
  return (
    <div
      className={cn(
        "flex gap-4 mb-6 w-full",
        isMe ? "flex-row-reverse" : "flex-row",
      )}
    >
      {/* Avatar */}
      <div className="flex-shrink-0">
        <div
          className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center overflow-hidden border",
            isMe
              ? "bg-[#007042] text-white border-[#007042]"
              : "bg-gray-100 text-gray-500 border-gray-200",
          )}
        >
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
        <div
          className={cn(
            "flex items-center gap-2 mb-1.5",
            isMe && "flex-row-reverse",
          )}
        >
          <span className="font-bold text-sm text-gray-900">
            {message.senderName}
          </span>
          <span className="text-xs text-gray-400 font-medium">
            {message.timestamp}
          </span>
        </div>

        <div
          className={cn(
            "p-4 text-sm leading-relaxed shadow-sm whitespace-pre-wrap break-words",
            isMe
              ? "bg-[#007042] text-white rounded-2xl rounded-tr-none"
              : "bg-[#F3F4F6] text-gray-800 rounded-2xl rounded-tl-none",
          )}
        >
          <p>{message.text}</p>

          {/* Attachment Style */}
          {message.attachment && (
            <div
              className={cn(
                "mt-3 flex items-center gap-2 p-2.5 rounded-lg cursor-pointer transition-colors border",
                isMe
                  ? "bg-[#005c36] border-[#005c36] hover:bg-[#004b2c] text-white"
                  : "bg-white border-gray-200 hover:bg-gray-50 text-gray-700",
              )}
            >
              <Paperclip
                size={16}
                className={isMe ? "text-white/80" : "text-gray-500"}
              />
              <span className="font-medium text-xs truncate max-w-[200px]">
                {message.attachment}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
