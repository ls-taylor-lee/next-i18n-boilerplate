import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <h1>{t("about_title")}</h1>
    </div>
  );
}
