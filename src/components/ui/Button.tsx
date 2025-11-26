import React from 'react';
import type { ButtonProps } from '@/types/types';

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  type = 'button',
  disabled = false,
  onClick,
  children,
  className = '',
  fullWidth = false
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const sizeClasses = 'px-4 py-2 text-base';


  const getVariantClasses = () => {
    if (variant === 'primary') {
      return disabled 
        ? 'bg-[#D9D9D9] text-[#00000040] cursor-not-allowed' 
        : 'bg-[#1677FF] text-white hover:bg-[#4096ff] focus:ring-[#1677FF]';
    }
    
    const variantMap = {
      secondary: disabled ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-gray-500 text-white hover:bg-gray-600',
      light: disabled ? 'bg-none text-gray-500 cursor-not-allowed' : 'bg-none text-gray-800 hover:bg-gray-200',
    };
    
    return variantMap[variant as keyof typeof variantMap] || variantMap.secondary;
  };

  const widthClass = fullWidth ? 'w-full' : '';

  const buttonClasses = `${baseClasses} ${sizeClasses} ${getVariantClasses()} ${widthClass} ${className}`;

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;