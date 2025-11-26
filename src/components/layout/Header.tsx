import React from "react";
import { Text } from "../pages/OtherPages/ui/Text";
import { TEXT_STYLES } from "../pages/OtherPages/ui/home";
import type { HeaderProps } from "@/types/types";

export const Header: React.FC<HeaderProps> = ({
  currentTime,
  showUserInfo = false,
  userName,
  onUserNameClick,
  showonBack = false,
  onBack,
  pageTitle,
}) => {
  return (
    <>
      <div className="flex justify-between items-center px-8 pt-6 pb-6">
        <Text className={TEXT_STYLES.title}>{currentTime}</Text>
        <img src="/icons_other/Icons.png" alt="icon" />
      </div>

      {pageTitle && (
        <div className="flex justify-between items-center px-4 pb-3">
          {showonBack && (
            <button
              onClick={onBack}
              className="mr-3 p-1 hover:bg-gray-800 rounded-lg transition-colors"
            >
              <span className="text-xl font-semibold text-white hover:text-gray-300 transition-colors">
                &lt;
              </span>
            </button>
          )}
          <Text className="text-white font-semibold text-2xl">{pageTitle}</Text>
          <img src="/icons_other/Button.png" alt="" />
        </div>
      )}

      {showUserInfo && userName && (
        <div className="flex justify-between items-center px-4 pb-6">
          <button
            onClick={onUserNameClick}
            className="flex items-center hover:bg-gray-800 rounded-lg transition-colors px-2 py-1 group"
          >
            <img
              src="/icons_other/Avatar.png"
              alt="avatar"
              className="w-8 h-8 mr-2"
            />
            <Text className={TEXT_STYLES.title + " mr-1"}>{userName}</Text>
            <span className="text-base font-semibold group-hover:text-gray-300 transition-colors">
              &gt;
            </span>
          </button>
          <img src="/icons_other/QR.png" alt="qr code" className="w-8 h-8" />
        </div>
      )}
    </>
  );
};
