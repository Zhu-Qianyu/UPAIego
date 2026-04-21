import { cookies } from "next/headers";

export type Locale = "zh" | "en";

export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const locale = cookieStore.get("locale")?.value;
  return locale === "en" ? "en" : "zh";
}
