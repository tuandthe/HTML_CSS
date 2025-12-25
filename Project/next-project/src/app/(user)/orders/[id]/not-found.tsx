import Link from "next/link";
import { FileQuestion, ArrowLeft } from "lucide-react";

export default function OrderNotFound() {
  return (
    <div className="lg:ml-64 h-[calc(100vh-theme(spacing.16))] flex items-center justify-center p-4 !w-full max-w-7xl">
      <div className="text-center space-y-6 max-w-md mx-auto">
        {/* Icon */}
        <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <FileQuestion className="w-10 h-10 text-red-500" />
        </div>

        {/* Message */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-woo-text">Order Not Found</h2>
          <p className="text-woo-text-secondary">
            Sorry, the order you are looking for does not exist or has been
            removed.
          </p>
        </div>

        {/* Action Button */}
        <Link
          href="/orders"
          className="inline-flex items-center gap-2 px-6 py-3 bg-woo-primary text-white rounded-lg hover:bg-woo-primary/90 transition-colors font-medium"
        >
          <ArrowLeft size={18} />
          Back to Orders
        </Link>
      </div>
    </div>
  );
}
