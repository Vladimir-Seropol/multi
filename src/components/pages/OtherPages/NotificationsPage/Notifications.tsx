import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useNotifications } from "../../../../hooks/useNotifications";
import { NOTIFICATIONS, NOTIFICATION_FILTERS } from "../NotificationsPage/notificationsData";
import { Text } from "../ui/Text";
import { NotificationItem } from "./NotificationItem";
import { TEXT_STYLES } from "../ui/home";
import { Header } from "../../../layout/Header";
import { BottomNavigation } from "../../../layout/BottomNavigation";
import clsx from "clsx";

const Notifications: React.FC = () => {
  const navigate = useNavigate();
  const {
    currentTime,
    activeFilter,
    handleFilterClick,
    groupNotificationsByDate,
  } = useNotifications();

  const filteredNotifications = useMemo(() => {
    if (activeFilter === "All") return NOTIFICATIONS;
    return NOTIFICATIONS.filter(
      (notification) => notification.category === activeFilter
    );
  }, [activeFilter]);

  const groupedNotifications = useMemo(
    () => groupNotificationsByDate(filteredNotifications),
    [filteredNotifications, groupNotificationsByDate]
  );

  const filters = useMemo(
    () =>
      NOTIFICATION_FILTERS.map((filter) => ({
        ...filter,
        isActive: activeFilter === filter.name,
      })),
    [activeFilter]
  );

  const handleBackClick = () => {
    navigate("/home");
  };

  return (
    <div className="flex flex-col min-h-screen bg-[rgba(6,5,3,1)] text-white mx-auto max-w-[375px] rounded-3xl">
      <Header
        currentTime={currentTime}
        showBackButton
        onBackClick={handleBackClick}
        pageTitle="Notifications"
      />

      {/* Filters */}
      <div className="flex justify-between overflow-x-auto px-4 pb-4">
        {filters.map((filter) => (
          <button
            key={filter.name}
            onClick={() => handleFilterClick(filter.name)}
            className={clsx(
              "min-w-10 py-3 px-3 whitespace-nowrap transition-colors duration-200",
              filter.isActive
                ? "text-primary border-b-2 border-[rgba(254,89,0,1)]"
                : "text-gray-400 hover:text-white"
            )}
          >
            <Text className={TEXT_STYLES.small}>{filter.name}</Text>
          </button>
        ))}
      </div>

      <div className="flex-1 px-5 overflow-y-auto">
        {Object.entries(groupedNotifications).map(([dateGroup, notifications]) => (
          <div key={dateGroup} className="mb-8">
            <Text
              className={clsx(TEXT_STYLES.title, "mb-4 uppercase tracking-wider")}
            >
              {dateGroup}
            </Text>
            {notifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                notification={notification}
              />
            ))}
          </div>
        ))}
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Notifications;
