import Button from "@/components/ui/Button";
import React from "react";
import { useNavigate } from "react-router-dom";

const InDevelopment: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-6 py-10 text-white">
      <img
        src="/icons_other/developer.svg"
        alt="dev"
        className="w-auto h-48 mb-6 opacity-80"
      />

      <h1 className="text-2xl font-semibold mb-3 text-[#FE5900]">
        Раздел в разработке
      </h1>

      <p className="text-gray-300 mb-8 max-w-xs">
        Мы уже работаем над этим функционалом. Совсем скоро он станет доступен!
      </p>

        <Button
        onClick={() => navigate(-1)}
        className="!bg-[#FE5900] !text-black hover:!bg-[#ff6f1a]"
      >
        Вернуться назад
      </Button>
    </div>
  );
};

export default InDevelopment;
