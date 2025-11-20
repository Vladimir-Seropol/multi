export const TEXT_STYLES = {
  inter: { fontFamily: "Inter" as const },
  title: {
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "100%",
    letterSpacing: "0%",
    color: "rgba(255, 255, 255, 1)",
  },
  subtitle: {
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "100%",
    letterSpacing: "0%",
    color: "rgba(179, 179, 179, 1)",
  },
  subtitle2: {
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "100%",
    letterSpacing: "0%",
    color: "rgba(179, 179, 179, 1)",
  },
  small: {
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "100%",
    letterSpacing: "0%",
  },
  expenseTitle: {
    fontWeight: 500,
    fontSize: "21px",
    lineHeight: "100%",
    letterSpacing: "0%",
  },
  expenseAmount: {
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "100%",
    letterSpacing: "0%",
    color: "rgba(174, 174, 174, 1)",
  },
} as const;

export const DOT_COLORS = {
  "Money Transfer": "rgba(204, 63, 2, 1)",
  Food: "rgba(254, 89, 0, 1)",
  Entertainment: "rgba(255, 147, 50, 1)",
} as const;

export const BOTTOM_NAV_ITEMS = ["Home", "Payments", "History", "Analytics", "Chats"] as const;