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
              ? "bg-woo-primary text-white border-woo-primary"
              : "bg-woo-bg text-woo-text-secondary border-woo-border",
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
          <span className="font-bold text-sm text-woo-text">
            {message.senderName}
          </span>
          <span className="text-xs text-woo-text-muted font-medium">
            {message.timestamp}
          </span>
        </div>

        <div
          className={cn(
            "p-4 text-sm leading-relaxed shadow-sm whitespace-pre-wrap break-words",
            isMe
              ? "bg-woo-primary text-white rounded-2xl rounded-tr-none"
              : "bg-woo-bg text-woo-text rounded-2xl rounded-tl-none border border-woo-border",
          )}
        >
          <p>{message.text}</p>

          {/* Attachment Style */}
          {message.attachment && (
            <div
              className={cn(
                "mt-3 flex items-center gap-2 p-2.5 rounded-lg cursor-pointer transition-colors border",
                isMe
                  ? "bg-woo-primary-hover/20 border-white/20 hover:bg-woo-primary-hover/30 text-white"
                  : "bg-woo-card border-woo-border hover:bg-gray-50 text-woo-text",
              )}
            >
              <Paperclip
                size={16}
                className={isMe ? "text-white/80" : "text-woo-text-muted"}
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
