import React from 'react';
import type { FormButtonsProps } from '../../types/types';
import Button from './Button';

const FormButtons: React.FC<FormButtonsProps> = ({
  currentStep,
  nextButtonProps = {},
}) => {

  const getButtonText = () => {
    if (currentStep === 1) return "Log in";
    if (currentStep === 2) return "Continue";
    return "Continue";
  };

  return (
    <div className="flex gap-2 mt-4">
      <Button
        type={nextButtonProps?.type || "button"}
        variant="primary"
        disabled={nextButtonProps?.disabled}
        onClick={nextButtonProps?.onClick}
        fullWidth={true}
        {...nextButtonProps}
      >
        {getButtonText()}
      </Button>
    </div>
  );
};

export default FormButtons;