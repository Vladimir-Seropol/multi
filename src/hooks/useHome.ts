import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import type { HomeProps, NavigationItem } from "../types/types";

export const useHome = (userData?: HomeProps["userData"]) => {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [activeNav, setActiveNav] = useState<string>("Travel");
  const [activeBottomNav, setActiveBottomNav] = useState<string>("Home");
  const location = useLocation();

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

  const getUserName = useCallback((): string => {
    if (userData?.name) return userData.name;
    const state = location.state as { formData?: { email?: string } };
    return state?.formData?.email?.split("@")[0] || "Charlotte";
  }, [userData, location.state]);

  const handleNavigationClick = useCallback((item: NavigationItem): void => {
    setActiveNav(item.name);
    
  }, []);

  const handleBottomNavClick = useCallback((item: string): void => {
    setActiveBottomNav(item);
    
  }, []);

  return {
    currentTime,
    activeNav,
    activeBottomNav,
    getUserName,
    handleNavigationClick,
    handleBottomNavClick,
  };
};