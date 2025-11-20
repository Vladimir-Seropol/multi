import type { FormFieldProps } from '../../types/types';

const FormField = ({
  value,
  onChange,
  onBlur,
  error,
  type = 'email',
  placeholder,
  icon,
}: FormFieldProps) => {
  const showError = !!error;

  const inputClasses = `custom-input relative block w-full pl-10 pr-3 py-2 border ${
    showError ? 'border-red-500' : 'border-gray-300'
  } text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10`;

  return (
    <div className="mb-4">
      <div className="relative">
        {icon && (
          <div className="absolute z-10 inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <img 
              src={icon} 
              alt="" 
              className="        text-gray-400"
            />
          </div>
        )}
        
        {type === 'email' && (
          <input
            type="email"
            className={inputClasses}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onBlur={onBlur}
            placeholder={placeholder}
          />
        )}

        {type === 'password' && (
           <input
            type="text" 
            className={inputClasses}
            value={value.replace(/./g, '*')} 
            onChange={(e) => onChange(e.target.value)}
            onBlur={onBlur}
            placeholder={placeholder}
          />
        )}
      </div>

      {showError && (
        <div className="mt-1 text-sm text-red-600">{error}</div>
      )}
    </div>
  );
};

export default FormField;