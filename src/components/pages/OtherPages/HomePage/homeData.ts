import type { Transaction, BalanceCard, NavigationItem } from "../../../../types/types";

export const TRANSACTIONS: Transaction[] = [
  {
    id: "1",
    name: "Matthew Billson",
    type: "Money Transfer",
    amount: "-$56.19",
    date: "Jun 9, 12:08",
    icon: "/icons_other/User_avatar.png",
  },
  {
    id: "2",
    name: "Starbucks",
    type: "Food",
    amount: "-$122.47",
    date: "Jun 8, 19:21",
    icon: "/icons_other/Star_avatar.png",
  },
  {
    id: "3",
    name: "Netflix",
    type: "Entertainment",
    amount: "-$13.17",
    date: "Jun 8, 08:53",
    icon: "/icons_other/Net_avatar.png",
  },
];

export const BALANCE_CARDS: BalanceCard[] = [
  {
    type: "Debit",
    number: "4385",
    amount: "$4,098.12",
    image: "/icons_other/Card.png",
  },
  {
    type: "Virtual",
    number: "9081",
    amount: "$14.71",
    image: "/icons_other/Card1.png",
  },
];

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { name: "Travel", icon: "/icons_other/icon-navi1.png", isActive: true },
  { name: "Delivery", icon: "/icons_other/icon-navi2.png", isActive: false },
  { name: "Bonuses", icon: "/icons_other/icon-navi3.png", isActive: false },
  { name: "Support", icon: "/icons_other/icon-navi4.png", isActive: false },
];