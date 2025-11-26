import React from "react";
import type { TransactionItemProps } from "@/types/types";
import { Text } from "../ui/Text";
import { TEXT_STYLES } from "../ui/home";



export const TransactionItem: React.FC<TransactionItemProps> = ({
  transaction,
  dotColor
}) => (
  <div className="bg-[rgba(15,15,15,1)] rounded-xl p-4 mb-3 flex items-center">
    <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3 overflow-hidden">
      <img
        src={transaction.icon}
        alt={transaction.name}
        className="w-full h-full object-cover"
      />
    </div>

    <div className="flex-1">
      <Text className={`${TEXT_STYLES.title} mb-1`}>{transaction.name}</Text>
      <div className="flex items-center">
        <div
          className="w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0"
          style={{ backgroundColor: dotColor }}
        />
        <Text className={TEXT_STYLES.subtitle}>{transaction.type}</Text>
      </div>
    </div>

    <div className="text-right">
      <Text className={`${TEXT_STYLES.title} mb-1`}>{transaction.amount}</Text>
      <Text className={TEXT_STYLES.subtitle}>{transaction.date}</Text>
    </div>
  </div>
);

TransactionItem.displayName = "TransactionItem";