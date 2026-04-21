import { getLocale } from "@/lib/locale";

export async function SiteFooter() {
  const locale = await getLocale();
  return (
    <footer className="border-t border-slate-800 py-8">
      <div className="container-shell flex flex-col justify-between gap-3 text-sm text-slate-400 md:flex-row">
        <p>
          © {new Date().getFullYear()}{" "}
          {locale === "zh" ? "宇湃数字科技（UPAIego）" : "UPAIego Digital Technology"}. All rights reserved.
        </p>
        <p>
          {locale === "zh"
            ? "具身智能 EGO 数据全链路解决方案服务商"
            : "End-to-end EGO data solution provider for embodied AI"}
        </p>
      </div>
    </footer>
  );
}
