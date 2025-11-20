// src/components/pages/OtherPages/HomePage/Home.tsx
import React, { useMemo } from "react";
import type { HomeProps } from "../../../../types/types";
import { useHome } from "../../../../hooks/useHome";
import {
  TRANSACTIONS,
  BALANCE_CARDS,
  NAVIGATION_ITEMS,
} from "../HomePage/homeData";
import { TEXT_STYLES, DOT_COLORS } from "../ui/home";
import { Text } from "../ui/Text";
import { TransactionItem } from "../HomePage/TransactionItem";
import { BalanceCards } from "../HomePage/BalanceCards";
import { Header } from "../../../layout/Header";
import { BottomNavigation } from "../../../layout/BottomNavigation";
import { useNavigate } from "react-router-dom";

const Home: React.FC<HomeProps> = ({ userData }) => {
 const navigate = useNavigate();
  const {
    currentTime,
    activeNav,
    getUserName,
    handleNavigationClick,
  } = useHome(userData);

  const navigationItems = useMemo(
    () =>
      NAVIGATION_ITEMS.map((item) => ({
        ...item,
        isActive: activeNav === item.name,
      })),
    [activeNav]
  );

   const handleUserNameClick = () => {
    navigate('/notifications');
  };

  const getDotColor = (type: string): string =>
    DOT_COLORS[type as keyof typeof DOT_COLORS] || DOT_COLORS["Money Transfer"];

  return (
    <div className="flex flex-col  bg-[rgba(6,5,3,1)] text-white mx-auto h-full max-w-[375px] rounded-3xl">
  
      <Header 
        currentTime={currentTime}
        showUserInfo={true}
        userName={getUserName()}
        onUserNameClick={handleUserNameClick}
      />

      <div className="flex justify-around px-5 pb-11">
        {navigationItems.map((item) => (
          <button
            key={item.name}
            onClick={() => handleNavigationClick(item)}
            className="flex flex-col items-center group"
          >
            <img
              src={item.icon}
              alt={item.name}
              className="w-6 h-6 mb-1 transition-transform group-hover:scale-110"
            />
            <Text
              style={{
                ...TEXT_STYLES.small,
                color: item.isActive
                  ? "rgba(255, 255, 255, 1)"
                  : "rgba(107, 114, 128, 1)",
              }}
              className="transition-colors duration-200 group-hover:text-gray-300"
            >
              {item.name}
            </Text>
          </button>
        ))}
      </div>

      <div className="flex-1 px-5 overflow-y-auto">
        <BalanceCards cards={BALANCE_CARDS} />

        <div className="relative flex justify-between items-center rounded-xl py-6 mb-7">
          <Text style={TEXT_STYLES.expenseTitle}>
            Expenses in <span className="text-[rgba(254,89,0,1)]">June</span>
          </Text>
          <Text style={TEXT_STYLES.expenseAmount}>$5,091</Text>
          <img
            src="/icons_other/Bar.png"
            alt="bar"
            className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-full"
          />
        </div>

        <div className="mb-6">
          <Text style={TEXT_STYLES.title} className="mb-3">
            Today
          </Text>
          {TRANSACTIONS.slice(0, 1).map((transaction) => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
              dotColor={getDotColor(transaction.type)}
            />
          ))}

          <Text style={TEXT_STYLES.title} className="mb-3">
            Yesterday
          </Text>
          {TRANSACTIONS.slice(1).map((transaction) => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
              dotColor={getDotColor(transaction.type)}
            />
          ))}
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Home;