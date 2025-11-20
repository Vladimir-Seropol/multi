import { useState, useEffect, useCallback } from "react";
import type { Notification } from "../types/types";

export const useNotifications = () => {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [activeBottomNav, setActiveBottomNav] = useState<string>("Notifications");

  useEffect(() => {
    const updateTime = (): void => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  const handleFilterClick = useCallback((filterName: string): void => {
    setActiveFilter(filterName);
  }, []);

  const handleBottomNavClick = useCallback((item: string): void => {
    setActiveBottomNav(item);
    console.log(`Bottom nav: ${item}`);
  }, []);

  const groupNotificationsByDate = (notifications: Notification[]) => {
    const groups: { [key: string]: Notification[] } = {};
    
    notifications.forEach(notification => {
      const groupKey = notification.date.split(',')[0];
      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }
      groups[groupKey].push(notification);
    });
    
    return groups;
  };

  return {
    currentTime,
    activeFilter,
    activeBottomNav,
    handleFilterClick,
    handleBottomNavClick,
    groupNotificationsByDate,
  };
};