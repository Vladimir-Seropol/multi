export const TEXT_STYLES = {
  title: "font-medium text-[16px] leading-none tracking-normal text-white",
  amount: "font-medium text-[16px] leading-none tracking-normal text-[#fe5900]",
  subtitle: "font-normal text-[14px] leading-none tracking-normal text-textGray",
  small: "font-normal text-[12px] leading-none tracking-normal",
  expenseTitle: "font-medium text-[21px] leading-none tracking-normal",
  expenseAmount: "font-normal text-[18px] leading-none tracking-normal text-[rgba(174,174,174,1)]",
} as const;

export const DOT_COLORS = {
  "Money Transfer": "rgba(204, 63, 2, 1)",
  Food: "rgba(254, 89, 0, 1)",
  Entertainment: "rgba(255, 147, 50, 1)",
} as const;

export const BOTTOM_NAV_ITEMS = [
  "Home",
  "Payments",
  "History",
  "Analytics",
  "Chats",
] as const;
