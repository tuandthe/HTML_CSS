"use client"; // Bắt buộc phải là Client Component

import { useEffect } from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Bạn có thể log lỗi ra service logging ở đây (vd: Sentry)
    console.error("Order Page Error:", error);
  }, [error]);

  return (
    <div className="lg:ml-64 h-[calc(100vh-theme(spacing.16))] flex items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-md mx-auto">
        {/* Icon */}
        <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <AlertTriangle className="w-10 h-10 text-orange-500" />
        </div>

        {/* Message */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-woo-text">
            Something went wrong!
          </h2>
          <p className="text-woo-text-secondary">
            We encountered an error while loading this order.
            <br />
            <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded mt-2 inline-block">
              Code: {error.name || "Unknown Error"}
            </span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={
              // reset() sẽ thử render lại component page
              () => reset()
            }
            className="inline-flex items-center gap-2 px-6 py-3 bg-woo-card border border-woo-border text-woo-text rounded-lg hover:bg-woo-bg transition-colors font-medium shadow-sm"
          >
            <RotateCcw size={18} />
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}
