import { useNavigate } from "react-router-dom";
import { useFormContext, Controller } from "react-hook-form";
import FormField from "@/components/ui/FormField";
import FormButtons from "@/components/ui/FormButtons";
import AuthLayout from "@/components/layout/AuthLayout";
import AuthHeader from "@/components/ui/AuthHeader";
import type { FormData } from "@/types/types";

const Step1 = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useFormContext<FormData>();

  const onSubmit = () => {
    navigate("/step2");
  };

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit(onSubmit)} className=" space-y-5">
        <AuthHeader title="Sign in to your account to continue" />

        <div className="rounded-md shadow-sm space-y-px">
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email required",
              validate: (value) => {
                if (!value) return "Email required";
                const isValidEmail =
                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value);
                return isValidEmail || "Please enter a valid email address.";
              },
            }}
            render={({ field, fieldState }) => (
              <FormField
                type="email"
                name="email"
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                error={fieldState.error?.message}
                icon="/icons_auth/Vector.png"
                placeholder="Email"
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            rules={{
              required: "Password required",
              minLength: {
                value: 11,
                message: "The password must contain at least 11 characters",
              },
            }}
            render={({ field, fieldState }) => (
              <FormField
                type="password" 
                name="password"
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                error={fieldState.error?.message}
                icon="/icons_auth/Vector1.png"
                placeholder="Password"
              />
            )}
          />
        </div>

        <FormButtons
          currentStep={1}
          totalSteps={3}
          nextButtonProps={{
            disabled: !isValid,
            type: "submit",
          }}
        />
      </form>
    </AuthLayout>
  );
};

export default Step1;
