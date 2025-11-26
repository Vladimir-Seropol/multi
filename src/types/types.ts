import type { CSSProperties, ReactNode } from "react";

export interface FormData {
  email: string;
  password: string;
  authCode: string[];
}

export interface FormProviderProps {
  children: ReactNode;
}

export interface ProtectedRouteProps {
  children: JSX.Element;
  requiredFields: (keyof FormData)[];
}

export interface FormFieldProps {
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: string;
  type?: "email" | "password" | "text";
  placeholder?: string;
  name: string;
  icon?: string;
}

export interface FormButtonsProps {
  currentStep: number;
  totalSteps: number;
  nextButtonProps?: Partial<ButtonProps>;
}

export interface ButtonProps {
  variant?: "primary" | "secondary" | "light";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export interface Notification {
  id: string;
  type: "payment" | "travel" | "security" | "offer";
  title: string;
  description?: string;
  amount?: string;
  cardNumber?: string;
  balance?: string;
  date: string;
  time: string;
  category: string;
  icon?: string;
}

export interface Transaction {
  id: string;
  name: string;
  type: string;
  amount: string;
  date: string;
  icon: string;
}

export interface TransactionItemProps {
  transaction: Transaction;
  dotColor: string;
}

export interface BalanceCard {
  type: string;
  number: string;
  amount: string;
  image: string;
}

export interface NavigationItem {
  name: string;
  icon: string;
  isActive: boolean;
}

export interface BalanceCardsProps {
  cards: BalanceCard[];
}

export interface HomeProps {
  userData?: {
    email?: string;
    name?: string;
  };
}

export interface NotificationItemProps {
  notification: Notification;
}

export interface NotificationFilter {
  name: string;
  isActive: boolean;
}

export interface HeaderProps {
  currentTime: string;
  showUserInfo?: boolean;
  userName?: string;
  onUserNameClick?: () => void;
  showonBack?: boolean;
  onBack?: () => void;
  pageTitle?: string;
}

export interface AuthLayoutProps {
  children: React.ReactNode;
  showonBack?: boolean;
  onBack?: () => void;
}

export type TextProps = {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
};

export interface AuthHeaderProps {
  title: string;
  subtitle?: string;
  subtitle2?: string;
}
