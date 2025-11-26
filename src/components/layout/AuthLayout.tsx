import React from "react";
import Button from "../ui/Button";
import type { AuthLayoutProps } from "@/types/types";

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  showonBack = false,
  onBack,
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full px-8 space-y-8">
        <div className="relative flex items-center justify-between">
          {showonBack ? (
            <Button
              type="button"
              variant="light"
              onClick={onBack}
              className="left-0 absolute"
            >
              <img src="/icons_auth/Back.png" alt="back" />
            </Button>
          ) : (
            <div className="w-10"></div>
          )}

          <div className="flex-grow flex justify-center">
            <img src="/icons_auth/Logo.png" alt="logo" className="w-auto" />
          </div>

          <div className="w-10"></div>
        </div>

        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
