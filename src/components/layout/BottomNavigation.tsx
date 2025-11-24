import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Text } from "../pages/OtherPages/ui/Text";
import { TEXT_STYLES } from "../pages/OtherPages/ui/home";
import clsx from "clsx";

const BOTTOM_NAV_ITEMS = ["Home", "Payments", "History", "Analytics", "Chats"];

export const BottomNavigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveItem = (): string => {
    const routeMap: { [key: string]: string } = {
      "/home": "Home",
      "/payments": "Payments",
      "/history": "History",
      "/analytics": "Analytics",
      "/chats": "Chats",
    };
    return routeMap[location.pathname] || "Home";
  };

  const activeBottomNav = getActiveItem();

  const handleBottomNavClick = (item: string): void => {
    const routeMap: { [key: string]: string } = {
      Home: "/home",
      Payments: "/payments",
      History: "/history",
      Analytics: "/analytics",
      Chats: "/chats",
    };

    if (routeMap[item] && routeMap[item] !== location.pathname) {
      navigate(routeMap[item]);
    }
  };

  const isHomePage = location.pathname === "/home";

  return (
    <div className="flex justify-around items-center pb-6 bg-black rounded-3xl">
      {BOTTOM_NAV_ITEMS.map((item) => {
        const isActive = item === "Home" ? isHomePage : activeBottomNav === item;
        const iconPath = `/icons_other/${item.toLowerCase()}.svg`;

        return (
          <button
            key={item}
            onClick={() => handleBottomNavClick(item)}
            className="flex flex-col items-center min-w-0 flex-1 px-1 group hover:bg-gray-800 rounded-lg py-2 transition-all duration-200"
          >
            <img
              src={iconPath}
              alt={item}
              className="w-5 h-5 mb-1 transition-all duration-200 group-hover:scale-110"
              style={{
                filter: isActive
                  ? "invert(75%) sepia(98%) saturate(2584%) hue-rotate(360deg) brightness(101%) contrast(105%)"
                  : "none",
              }}
            />
            <Text
              className={clsx(
                TEXT_STYLES.small,
                "truncate text-center w-full transition-colors duration-200",
                isActive ? "text-[#FE5900]" : "text-white"
              )}
            >
              {item}
            </Text>
          </button>
        );
      })}
    </div>
  );
};
