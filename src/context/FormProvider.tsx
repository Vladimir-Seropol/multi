import { useForm, FormProvider as RHFProvider } from "react-hook-form";
import type { FormData, FormProviderProps } from "../types/types";

export const FormProvider = ({ children }: FormProviderProps) => {
  const methods = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
      authCode: ["", "", "", "", "", ""]
      
    },
    mode: "onBlur",
  });

  return <RHFProvider {...methods}>{children}</RHFProvider>;
};