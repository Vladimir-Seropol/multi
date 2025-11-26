import type { Notification, NotificationFilter } from "@/types/types";

export const NOTIFICATIONS: Notification[] = [
  {
    id: "1",
    type: "offer",
    title: "Received from Anna",
    amount: "+$110",
    cardNumber: "Debit •• 4385",
    balance: "$4,098.12",
    date: "Today 17 JunE",
    time: "17:49",
    category: " · Payments"
  },
  {
    id: "2",
    type: "travel",
    title: "See our limited offer!",
    description: "Would you like to visit new countries? Maybe it's your time!",
    date: "16 June 2025",
    time: "23:08",
    category: " · Travel"
  },
  {
    id: "3",
    type: "payment",
    title: "Sent to +2041",
    amount: "-$14.62",
    cardNumber: "Debit +4385",
    balance: "$3,987.5",
    date: "16 June 2025",
    time: "06:18",
    category: " · Payments"
  },
  {
    id: "4",
    type: "security",
    title: "New login into account",
    description: "You have logged in from a new location: IOS26.0.1-109.255.84.7-Spain",
    date: "24 March 2025",
    time: "15:44",
    category: " · Security"
  }
];

export const NOTIFICATION_FILTERS: NotificationFilter[] = [
  { name: "All", isActive: true },
  { name: "Payments", isActive: false },
  { name: "System", isActive: false },
  { name: "Delivery", isActive: false },
  { name: "Travel", isActive: false }
];