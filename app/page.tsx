import Link from "next/link";
import { SectionIntro } from "@/components/section-intro";
import { getSiteData } from "@/lib/site-data";
import { getLocale } from "@/lib/locale";

export default async function HomePage() {
  const locale = await getLocale();
  const { fullChain, industrialValue } = getSiteData(locale);
  const t = locale === "zh";
  return (
    <div className="pb-16">
      <section className="border-b border-slate-800 py-section">
        <div className="container-shell">
          <p className="text-[clamp(0.95rem,1.15vw,1.1rem)] font-medium tracking-[0.18em] text-cyan-300">
            EMBODIED AI DATA PIPELINE
          </p>
          <h1 className="mt-4 max-w-[22ch] text-[clamp(1.9rem,4.4vw,4rem)] font-bold leading-[clamp(1.18,1.05+0.25vw,1.34)] tracking-[clamp(0em,-0.01vw,-0.02em)] [text-wrap:balance]">
            {t
              ? "宇湃数字科技 UPAIego，提供工业级具身智能 EGO 数据全链路解决方案"
              : "UPAIego delivers end-to-end EGO data solutions for industrial embodied AI"}
          </h1>
          <p className="mt-6 max-w-4xl text-[clamp(1.08rem,1.35vw,1.35rem)] leading-[1.95] text-slate-300">
            {t
              ? "从采集设备到训练可用数据资产，UPAIego 打通“采集 - 确认 - 标注 - 训练”全流程，帮助工业场景更快构建可复现、可迭代的具身智能能力。"
              : "From capture devices to training-ready datasets, UPAIego connects collection, validation, annotation, and training for faster and reproducible deployment."}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-cyan-400 px-7 py-3.5 text-[clamp(0.98rem,1.05vw,1.1rem)] font-semibold text-brand-950"
            >
              {t ? "发起合作咨询" : "Start a Collaboration"}
            </Link>
            <Link
              href="/solutions"
              className="rounded-lg border border-slate-600 px-7 py-3.5 text-[clamp(0.98rem,1.05vw,1.1rem)] font-semibold text-slate-100"
            >
              {t ? "查看全链路方案" : "View Solution"}
            </Link>
          </div>
        </div>
      </section>

      <section className="container-shell py-section">
        <SectionIntro
          title={t ? "全链路解决方案流程" : "End-to-end Solution Flow"}
          description={
            t
              ? "确保每一段数据都服务于训练可用性，而非仅完成采集任务。"
              : "Ensure each data step contributes to training readiness, not just data production."
          }
        />
        <div className="grid gap-5 md:grid-cols-2">
          {fullChain.map((item) => (
            <article key={item.title} className="panel">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-cyan-300">{item.value}</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.details}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-shell py-section-tight">
        <SectionIntro
          title={t ? "工业场景价值" : "Industrial Value"}
          description={t ? "围绕工业生产建立可验证的数据与训练闭环。" : "Build a verifiable data-training loop around industrial production."}
        />
        <div className="panel space-y-3 text-sm leading-7 text-slate-200">
          {industrialValue.map((value) => (
            <p key={value}>{value}</p>
          ))}
        </div>
      </section>

      <section className="container-shell py-section-tight">
        <div className="panel flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="hero-block-title">
              {t
                ? "合作流程：需求澄清 → 场景评估 → 试点验证 → 批量交付"
                : "Collaboration Flow: Requirement Clarification -> Scenario Assessment -> Pilot -> Scale Delivery"}
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              {t
                ? "30 分钟沟通你的工业场景，我们给出数据链路与试点计划建议。"
                : "Discuss your scenario in 30 minutes and receive a phased data and pilot plan."}
            </p>
          </div>
          <Link href="/contact" className="rounded-lg bg-cyan-400 px-6 py-3 text-sm font-semibold text-brand-950">
            {t ? "预约技术方案沟通" : "Book a Technical Consultation"}
          </Link>
        </div>
      </section>
    </div>
  );
}
