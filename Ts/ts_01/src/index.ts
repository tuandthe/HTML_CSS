import type { User } from './types/user';

const userData: User = {
  id: 1001,
  username: 'dai.phan',
  fullName: 'Dai Phan',
  email: 'dai.phan@example.com',
  isActive: true,
  pointBalance: 1500.75,
  age: null,
  roles: ['admin', 'manager', 'viewer'],
  createdAt: new Date('2025-01-01T10:00:00.000Z'),
  lastLogin: new Date('2025-12-01T08:30:00.000Z'),

  contact: {
    phone: '+84-123-456-789',
    address: {
      street: '45 Nguyen Trai',
      district: 'Thanh Xuan',
      city: 'Ha Noi',
      postalCode: 100000,
      country: 'VN',
    },
  },

  preferences: {
    theme: 'dark',
    languages: ['vi', 'en'],
    notification: {
      email: true,
      sms: false,
      push: true,
    },
    updateLanguage(lang: string): string {
      return `changed to ${lang}`;
    },
  },

  scores: [9.8, 8.5, 7.9, 6.5],

  projects: [
    {
      projectId: 501,
      title: 'Internal System Upgrade',
      isCompleted: false,
      startDate: new Date('2025-03-10'),
      progress: 45.5,
      teamMembers: [
        { memberId: 1, name: 'Alice', role: 'developer' },
        { memberId: 2, name: 'Bob', role: 'tester' },
      ],
      getProgress(): string {
        return `${this.progress}%`;
      },
    },
  ],

  orders: [
    {
      orderId: 9001,
      date: new Date('2025-11-05'),
      items: [
        {
          sku: 'TS-001',
          productName: 'T-Shirt',
          quantity: 2,
          price: 15.5,
        },
      ],
      totalAmount: 39.0,
      calculateTotal(): number {
        return this.items.reduce((sum, item) => sum + item.quantity * item.price, 0);
      },
    },
  ],

  metadata: {
    version: '2.1.0',
    build: 'release-2025',
    updatedAt: new Date('2025-12-05T14:20:00.000Z'),
  },

  tags: [],
  token: 'XYZ-123-ABC',

  logInfo(): void {
    console.log(`User: ${this.username}`);
  },

  redeemPoints(points: number): number {
    return this.pointBalance - points;
  },
};

// --- TẠO BÁO CÁO (DTO - Data Transfer Object) ---

const userReport = {
  basicInfo: {
    id: userData.id,
    username: userData.username,
    fullName: userData.fullName,
    email: userData.email,
    isActive: userData.isActive,
    age: userData.age,
    roles: userData.roles,
    token: userData.token,
    created: userData.createdAt,
    lastLogin: userData.lastLogin,
  },

  finance: {
    currentPoints: userData.pointBalance,
    pointsAfterRedeem500: userData.redeemPoints(500),
    scores: userData.scores,
  },

  contact: userData.contact,

  preferences: {
    theme: userData.preferences.theme,
    languages: userData.preferences.languages,
    notification: userData.preferences.notification,
    testLanguageUpdate: userData.preferences.updateLanguage('vi'),
  },

  projects: userData.projects.map((project) => ({
    id: project.projectId,
    title: project.title,
    isCompleted: project.isCompleted,
    startDate: project.startDate,
    teamMembers: project.teamMembers,
    rawProgress: project.progress,
    formattedProgress: project.getProgress(),
  })),

  orders: userData.orders.map((order) => ({
    id: order.orderId,
    date: order.date,
    items: order.items,
    finalTotal: order.calculateTotal(),
  })),

  metadata: userData.metadata,
};

console.log('--- FULL USER REPORT ---');
console.log(JSON.stringify(userData, null, 2));
console.log(userData);
