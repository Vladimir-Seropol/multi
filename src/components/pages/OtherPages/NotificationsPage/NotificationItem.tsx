import React from "react";
import type { NotificationItemProps } from "../../../../types/types";
import { Text } from "../ui/Text";
import { TEXT_STYLES } from "../ui/home";
import clsx from "clsx";

export const NotificationItem: React.FC<NotificationItemProps> = React.memo(
  ({ notification }) => {
    const getNotificationIcon = (type: string): string => {
      const icons = {
        payment: "/icons_other/Icon_payment.png",
        travel: "/icons_other/icon-nav3.png",
        security: "/icons_other/icon_security.png",
        offer: "/icons_other/icon-user.png",
      };
      return icons[type as keyof typeof icons] || "/icons_other/User.png";
    };

    return (
      <div className="rounded-xl mb-6">
        <div className="flex items-start">
          <img
            src={getNotificationIcon(notification.type)}
            alt={notification.type}
            className="w-[42px] mr-2"
          />
          <div className="flex flex-col justify-between items-start mb-2 gap-2 w-full">
            <Text className={TEXT_STYLES.title}>{notification.title}</Text>

            {notification.amount && (
              <Text className={TEXT_STYLES.amount}>{notification.amount}</Text>
            )}

            {notification.description && (
              <Text className={clsx(TEXT_STYLES.subtitle, "mb-2")}>
                {notification.description}
              </Text>
            )}

            {(notification.cardNumber || notification.balance) && (
              <div className="flex flex-col justify-start items-start mb-2">
                {notification.cardNumber && (
                  <Text className={TEXT_STYLES.subtitle}>
                    {notification.cardNumber}
                  </Text>
                )}
                {notification.balance && (
                  <Text className={TEXT_STYLES.title}>
                    {notification.balance}
                  </Text>
                )}
              </div>
            )}

            <div className="flex justify-between items-center gap-1 w-full">
              <Text className={TEXT_STYLES.subtitle}>
                {notification.date}, {notification.time}
              </Text>
              <Text className={TEXT_STYLES.subtitle}>
                {notification.category}
              </Text>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

NotificationItem.displayName = "NotificationItem";
