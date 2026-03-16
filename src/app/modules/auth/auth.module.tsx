"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { LoginForm, AuthCard, RegisterForm } from "./elements";

export const AuthModule = () => {
  const [currentForm, setCurrentForm] = useState<"login" | "register">("login");
  const isLogin = currentForm == "login";
  const t = useTranslations(isLogin ? "Auth.login" : "Auth.register");
  return (
    <AuthCard
      title={t("title")}
      description={t("description")}
      footer={{
        text: isLogin ? t("noAccount") : t("alreadyHaveAccount"),
        linkText: isLogin ? t("signUpInstead") : t("signInInstead"),
        onSwitch: () => setCurrentForm(isLogin ? "register" : "login"),
      }}
    >
      {isLogin ? <LoginForm /> : <RegisterForm />}
    </AuthCard>
  );
};
