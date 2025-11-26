import React from 'react';
import type { AuthHeaderProps } from '@/types/types';


const AuthHeader: React.FC<AuthHeaderProps> = ({ title, subtitle, subtitle2 }) => {
  return (
    <div>
      <h3 className="text-center text-2xl font-semibold">
        {title}
      </h3>
      {subtitle && (
        <p className="mt-2 text-center text-sm text-gray-600">
          {subtitle}
        </p>
      )}
      {subtitle2 && (
        <p className="mt-2 text-center text-sm text-gray-600">
          {subtitle2}
        </p>
      )}
    </div>
  );
};

export default AuthHeader;