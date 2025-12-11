// Bài 1: Orderstatus Enum
export enum OrderStatus {
  Pending = "PENDING",
  Paid = "PAID",
  Shipped = "SHIPPED",
  Delivered = "DELIVERED",
  Cancelled = "CANCELLED"
}
export function ispaid(status: OrderStatus): boolean {
  return status === OrderStatus.Paid || 
         status === OrderStatus.Shipped || 
         status === OrderStatus.Delivered;
}
export function iscancelled(status: OrderStatus): boolean {
  return status === OrderStatus.Pending || status === OrderStatus.Paid;
}

// Bài 2: LogLevel Enum
export enum LogLevel {
  Info = "INFO",
  Warn = "WARN",
  Error = "ERROR",
  Debug = "DEBUG"
}

export function logLevel(level: LogLevel, message: string): void {
  const timestamp = new Date().toISOString();
  const prefix = `[${timestamp}] [${level}]`;
  
  switch (level) {
    case LogLevel.Error:
      console.error(`${prefix} ❌ ${message}`);
      break;
    case LogLevel.Warn:
      console.warn(`${prefix} ⚠️ ${message}`);
      break;
    case LogLevel.Info:
      console.info(`${prefix} ℹ️ ${message}`);
      break;
    case LogLevel.Debug:
      console.debug(`${prefix} 🐛 ${message}`);
      break;
  }
}
