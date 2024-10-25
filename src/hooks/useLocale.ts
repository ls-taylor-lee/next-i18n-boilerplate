// hooks/useLocale.js
"use client";

import { locales } from "@/constants/locale";
import { Locale } from "@/types/i18n";
import { usePathname, useRouter } from "next/navigation";

const useLocale = () => {
  const pathname = usePathname();
  const router = useRouter();

  const changeLocale = (newLocale: Locale) => {
    const localePattern = locales.join("|");
    const newPath = pathname.replace(new RegExp(`^/(${localePattern})`), `/${newLocale}`); // Replace locale in path
    router.push(newPath);
  };

  return { changeLocale };
};

export default useLocale;
