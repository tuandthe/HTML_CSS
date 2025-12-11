// Chứa các type nghiệp vụ (Project, Order)
export interface TeamMembers {
  memberId: number;
  name: string;
  role: string;
}
export interface Project {
  projectId: number;
  title: string;
  isCompleted: boolean;
  startDate: Date;
  progress: number;
  teamMembers: TeamMembers[];
  getProgress: () => string;
}
export interface OrderItem {
  sku: string;
  productName: string;
  quantity: number;
  price: number;
}
export interface Order {
  orderId: number;
  date: Date;
  items: OrderItem[];
  totalAmount: number;
  calculateTotal: () => number;
}
