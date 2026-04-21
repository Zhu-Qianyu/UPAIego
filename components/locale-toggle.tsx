"use client";

import { useTransition } from "react";

type LocaleToggleProps = {
  locale: "zh" | "en";
};

export function LocaleToggle({ locale }: LocaleToggleProps) {
  const [isPending, startTransition] = useTransition();

  function switchLocale() {
    const next = locale === "zh" ? "en" : "zh";
    document.cookie = `locale=${next}; path=/; max-age=31536000; samesite=lax`;
    startTransition(() => {
      window.location.reload();
    });
  }

  return (
    <button
      type="button"
      onClick={switchLocale}
      disabled={isPending}
      className="rounded-md border border-slate-600 px-2 py-1 text-xs text-slate-200 transition hover:border-cyan-300 hover:text-cyan-300"
    >
      {locale === "zh" ? "EN" : "中"}
    </button>
  );
}
