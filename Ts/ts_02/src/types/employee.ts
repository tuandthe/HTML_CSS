// 1. Tạo interface Employee
export interface Employee {
    employeeId: number;
    name: string;
    position: string;
}
// 2. Tạo type ResponseStatus
export type ResponseStatus = 'ok' | 'error';

// 3. Tạo type EmployeeWithTime 
export type EmployeeWithTime = Employee & { createdAt: Date };

