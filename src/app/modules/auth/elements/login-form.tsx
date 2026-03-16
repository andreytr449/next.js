"use client";

import { useState } from "react";
import { Button, FormErrorText, Input, Label } from "@/app/shared/ui";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { LoginFormData } from "../auth.interface";
import { createLoginSchema } from "../auth.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthStore } from "@/app/shared/store/";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const router = useRouter();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const t = useTranslations("Auth.form");
  const { handleSubmit, register, formState } = useForm<LoginFormData>({
    resolver: zodResolver(createLoginSchema(t)),
  });
  const { login } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);

  const errors = formState.errors;
  const onSubmit = (data: LoginFormData) => {
    setIsLoading(true);
    login({ email: data.email }, "user-token");
    setIsLoading(false);
    router.push("/en/items");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-1">
        <Label className="leading-5" htmlFor="userEmail">
          {t("email")}*
        </Label>
        <Input
          disabled={isLoading}
          {...register("email")}
          type="email"
          id="userEmail"
          placeholder={t("email-placeholder")}
        />
        <FormErrorText message={errors.email?.message} />
      </div>

      <div className="w-full space-y-1">
        <Label className="leading-5" htmlFor="password">
          {t("password")}*
        </Label>
        <div className="relative">
          <Input
            disabled={isLoading}
            {...register("password")}
            id="password"
            type={isPasswordVisible ? "text" : "password"}
            placeholder="••••••••••••••••"
            className="pr-9"
          />
          <FormErrorText message={errors.password?.message} />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsPasswordVisible((prevState) => !prevState)}
            className="text-muted-foreground focus-visible:ring-ring/50 absolute inset-y-0 right-0 rounded-l-none hover:bg-transparent"
          >
            {isPasswordVisible ? <EyeOffIcon /> : <EyeIcon />}
            <span className="sr-only">
              {isPasswordVisible ? "Hide password" : "Show password"}
            </span>
          </Button>
        </div>
      </div>
      <Button className="w-full" type="submit">
        {isLoading ? t("loading-btn") : t("login-btn")}
      </Button>
    </form>
  );
};
