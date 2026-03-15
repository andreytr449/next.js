import { AuthBackgroundShape, Logo } from "@/app/shared/assets";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/shared/ui";
import { RegisterForm } from "./elements/register-form";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

export const RegisterModule = async () => {
  const t = await getTranslations("Auth.register");
  return (
    <div className="relative flex h-auto min-h-screen items-center justify-center overflow-x-hidden px-4 py-10 sm:px-6 lg:px-8">
      <div className="absolute">
        <AuthBackgroundShape />
      </div>

      <Card className="z-1 w-full border-none shadow-md sm:max-w-lg">
        <CardHeader className="gap-6">
          <Logo className="gap-3" />

          <div>
            <CardTitle className="mb-1.5 text-2xl">{t("title")}</CardTitle>
            <CardDescription className="text-base">
              {t("description")}
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            <RegisterForm />

            <p className="text-muted-foreground text-center">
              {t("alreadyHaveAccount")}{" "}
              <Link
                href="/auth/login"
                className="text-card-foreground hover:underline"
              >
                {t("signInInstead")}
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
