import { useNavigate } from "react-router-dom";
import { useFormContext, Controller } from "react-hook-form";
import FormButtons from "@/components/ui/FormButtons";
import Button from "@/components/ui/Button";
import AuthLayout from "@/components/layout/AuthLayout";
import AuthHeader from "@/components/ui/AuthHeader";
import type { FormData } from "@/types/types";
import { useState, useEffect, useRef } from "react";

const Step2 = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { isValid },
    watch,
    setValue,
  } = useFormContext<FormData>();

  const [showError, setShowError] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [showContinueButton, setShowContinueButton] = useState(false);
  const [showGetNewButton, setShowGetNewButton] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);


  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const authCode = watch("authCode");

  const onSubmit = (data: FormData) => {
    setHasSubmitted(true);
    const enteredCode = data.authCode.join("");
    if (enteredCode === "131311") {
      navigate("/home");
    } else {
      setShowError(true);
    }
  };

  const handleBack = () => navigate("/");

  const handleGetNewCode = () => {
    setTimeLeft(30);
    setShowGetNewButton(false);
    setShowContinueButton(false);
    setShowError(false);
    setHasSubmitted(false);
    setValue("authCode", ["", "", "", "", "", ""]);
  };

  const handleInputChange = () => {
    if (showError) {
      setShowError(false);
    }
  };

  useEffect(() => {
    if (authCode && authCode.every((digit) => digit !== "")) {
      setShowContinueButton(true);
      setShowGetNewButton(false);
    } else {
      setShowContinueButton(false);
    }
  }, [authCode]);

  useEffect(() => {
    if (timeLeft > 0 && !showContinueButton) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showContinueButton) {
      setShowGetNewButton(true);
    }
  }, [timeLeft, showContinueButton]);

  useEffect(() => {
    if (authCode && authCode.some((digit) => digit !== "")) {
      setTimeLeft(30);
      setShowGetNewButton(false);
    }
  }, [authCode]);

  return (
    <AuthLayout showonBack onBack={handleBack}>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
        <AuthHeader
          title="Two-Factor Authentication"
          subtitle="Enter the 6-digit code from the Google"
          subtitle2="  Authenticator app"
        />

        <Controller
          name="authCode"
          control={control}
          rules={{
            validate: (value) => {
              const fullCode = value.join("");
              if (fullCode.length !== 6) return "Enter full 6-digit code";
              return true;
            },
          }}
          render={({ field, fieldState }) => {
            const fullCode = field.value.join("");
            const isWrongCode = showError && fullCode.length === 6;
            const shouldShowError =
              hasSubmitted && (fieldState.error || isWrongCode);

            return (
              <div className="space-y-4">
                <div className="flex justify-center space-x-2">
                  {field.value.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength={1}
                      ref={(el) => (inputRefs.current[index] = el)}
                      className={`w-[52px] h-[60px] text-center text-xl font-bold border-2 rounded-md ${
                        shouldShowError ? "border-red-500" : "border-gray-300"
                      } focus:border-indigo-500 focus:outline-none`}
                      value={digit}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "");
                        if (value.length <= 1) {
                          const newAuthCode = [...field.value];
                          newAuthCode[index] = value;
                          field.onChange(newAuthCode);
                          handleInputChange();

                          if (value && index < 5) {
                            inputRefs.current[index + 1]?.focus();
                          }
                        }
                      }}
                      onBlur={field.onBlur}
                      onKeyDown={(e) => {
                        if (e.key === "Backspace" && !field.value[index] && index > 0) {
                          inputRefs.current[index - 1]?.focus();
                        }
                      }}
                      onPaste={(e) => {
                        e.preventDefault();
                        const pasteData = e.clipboardData
                          .getData("text")
                          .replace(/\D/g, "")
                          .slice(0, 6);

                        const newAuthCode = [...field.value];

                        pasteData.split("").forEach((char, i) => {
                          newAuthCode[i] = char;
                        });

                        field.onChange(newAuthCode);
                        handleInputChange();

                        if (pasteData.length > 0) {
                          const lastIndex = Math.min(pasteData.length - 1, 5);
                          inputRefs.current[lastIndex]?.focus();
                        }
                      }}
                      name={`digit-${index}`}
                    />
                  ))}
                </div>

                {shouldShowError && (
                  <div className="mt-2 text-center text-sm text-red-600">
                    {isWrongCode ? "Invalid code" : fieldState.error?.message}
                  </div>
                )}
              </div>
            );
          }}
        />

        {showContinueButton && (
          <FormButtons
            currentStep={2}
            nextButtonProps={{
              disabled: !isValid,
              type: "submit",
            }}
            totalSteps={3}
          />
        )}

        {showGetNewButton && (
          <div className="flex justify-center">
            <Button
              type="button"
              variant="primary"
              onClick={handleGetNewCode}
              fullWidth
            >
              Get new
            </Button>
          </div>
        )}
      </form>
    </AuthLayout>
  );
};

export default Step2;
