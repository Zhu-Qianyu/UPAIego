import type { Metadata } from "next";
import { SectionIntro } from "@/components/section-intro";
import { getLocale } from "@/lib/locale";

export const metadata: Metadata = {
  title: "关于我们 | UPAIego",
  description: "宇湃数字科技（UPAIego）专注工业具身智能数据工程，打造高可信数据底座。"
};

export default async function AboutPage() {
  const locale = await getLocale();
  const t = locale === "zh";
  return (
    <div className="container-shell py-section">
      <SectionIntro
        title={t ? "关于宇湃数字科技（UPAIego）" : "About UPAIego Digital Technology"}
        description={t ? "以工程化方法构建具身智能时代的高质量数据基础设施。" : "Build high-quality data infrastructure for embodied AI with engineering methods."}
      />
      <div className="grid gap-5 md:grid-cols-3">
        <article className="panel">
          <h2 className="text-lg font-semibold">{t ? "使命" : "Mission"}</h2>
          <p className="mt-3 text-sm leading-7 text-slate-300">{t ? "让工业具身智能项目拥有可复现、可验证、可持续优化的数据能力。" : "Provide reproducible, verifiable, and continuously optimizable data capability for industrial embodied AI."}</p>
        </article>
        <article className="panel">
          <h2 className="text-lg font-semibold">{t ? "愿景" : "Vision"}</h2>
          <p className="mt-3 text-sm leading-7 text-slate-300">{t ? "成为工业场景 EGO 数据全链路服务的专业基础设施伙伴。" : "Become a trusted infrastructure partner for end-to-end EGO data services in industrial scenarios."}</p>
        </article>
        <article className="panel">
          <h2 className="text-lg font-semibold">{t ? "方法论" : "Methodology"}</h2>
          <p className="mt-3 text-sm leading-7 text-slate-300">{t ? "任务导向采集、质量门禁确认、结构化标注、训练可用交付。" : "Task-driven collection, quality gating, structured annotation, and training-ready delivery."}</p>
        </article>
      </div>

      <section className="mt-8">
        <h2 className="subsection-title mb-4">{t ? "团队合影" : "Team Photo"}</h2>
        <div className="panel">
          <div className="flex h-64 items-center justify-center rounded-xl border border-dashed border-slate-600 bg-brand-950/60 text-sm text-slate-400">
            {t ? "团队合影展示区（建议放置：/assets/images/team-photo.jpg）" : "Team photo slot (recommended: /assets/images/team-photo.jpg)"}
          </div>
          <p className="mt-3 text-xs text-slate-400">
            {t
              ? "可替换为团队现场照、办公室照片或项目交付合影，建议分辨率不低于 1920x1080。"
              : "Use team photos, office photos, or delivery snapshots. Recommended minimum resolution: 1920x1080."}
          </p>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="subsection-title mb-4">{t ? "合作伙伴" : "Partners"}</h2>
        <div className="panel">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {(t ? ["合作公司 A", "合作公司 B", "合作公司 C", "合作公司 D"] : ["Partner A", "Partner B", "Partner C", "Partner D"]).map((name) => (
              <div
                key={name}
                className="flex h-20 items-center justify-center rounded-lg border border-dashed border-slate-600 bg-brand-950/60 text-sm text-slate-400"
              >
                {name} {t ? "Logo 区" : "Logo Slot"}
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-400">
            {t
              ? "建议将合作方 Logo 放置在 /assets/images/partners/ 目录，后续可替换为真实品牌标识。"
              : "Place partner logos in /assets/images/partners/ and replace placeholders later."}
          </p>
        </div>
      </section>
    </div>
  );
}
