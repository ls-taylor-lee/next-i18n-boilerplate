"use client";

import { locales } from "@/constants/locale";
import useLocale from "@/hooks/useLocale";
import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const router = useRouter();

  const t = useTranslations("HomePage");
  const { changeLocale } = useLocale();

  return (
    <div className="p-8">
      <h1 className="text-4xl">{t("title")}</h1>
      <div
        className="underline cursor-pointer"
        onClick={() => {
          router.push("/about");
        }}
      >
        {t("about_link")}
      </div>

      {locales.map((v) => {
        return (
          <h1
            className="underline cursor-pointer"
            key={v}
            onClick={() => {
              changeLocale(v);
            }}
          >
            {v.toUpperCase()}
          </h1>
        );
      })}
    </div>
  );
}
