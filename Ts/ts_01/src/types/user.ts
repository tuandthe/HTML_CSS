import type { Order, Project } from './business';
import type { Address, Metadata } from './common';

// Chứa type liên quan đến User (Contact, Preference, Main User)
export interface Contact {
  phone: string;
  address: Address;
}
export interface NotificationSettings {
  email: boolean;
  sms: boolean;
  push: boolean;
}
export interface preferences {
  theme: 'light' | 'dark';
  languages: string[];
  notification: NotificationSettings;
  updateLanguage: (lang: string) => string;
}

export type Roles = 'admin' | 'manager' | 'viewer';

export interface User {
  id: number;
  username: string;
  fullName: string;
  email: string;
  isActive: boolean;
  pointBalance: number;
  age: number | null;
  roles: Roles[];
  createdAt: Date;
  lastLogin: Date;
  contact: Contact;
  preferences: preferences;
  scores: number[];

  projects: Project[];
  orders: Order[];
  metadata: Metadata;

  tags: string[];
  token: string;

  logInfo: () => void;
  redeemPoints: (points: number) => number;
}
