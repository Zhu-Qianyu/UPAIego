import type { Metadata } from "next";
import { SectionIntro } from "@/components/section-intro";
import { getLocale } from "@/lib/locale";

export const metadata: Metadata = {
  title: "行业场景 | UPAIego",
  description: "聚焦工业生产场景，支持装配、巡检和操作学习等具身智能落地任务。"
};

export default async function IndustriesPage() {
  const locale = await getLocale();
  const t = locale === "zh";
  const scenarios = t
    ? [
        { name: "装配场景", detail: "采集标准工序与异常工序，建立可复现动作样本库，服务装配机器人策略学习。" },
        { name: "巡检场景", detail: "通过多视角设备捕捉巡检路径与状态变化，支持异常检测与流程优化。" },
        { name: "操作学习场景", detail: "结合手部力学和骨骼标注，沉淀高价值示教数据，提升复杂任务学习效率。" }
      ]
    : [
        { name: "Assembly", detail: "Capture standard and abnormal procedures to build reproducible action datasets for robot policy learning." },
        { name: "Inspection", detail: "Use multi-view capture for route and state changes to support anomaly detection and process optimization." },
        { name: "Operation Learning", detail: "Combine force sensing and skeleton annotation for high-value demonstrations in complex tasks." }
      ];
  return (
    <div className="container-shell py-section">
      <SectionIntro
        title={t ? "行业场景能力" : "Industry Scenarios"}
        description={
          t
            ? "以工业生产为核心，结合全场景合作伙伴网络实现多行业可复制交付。"
            : "Focused on industrial production with partner collaboration for scalable delivery."
        }
      />
      <div className="grid gap-5 md:grid-cols-3">
        {scenarios.map((scenario) => (
          <article key={scenario.name} className="panel">
            <h2 className="text-lg font-semibold">{scenario.name}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">{scenario.detail}</p>
          </article>
        ))}
      </div>
      <div className="panel mt-6 text-sm leading-7 text-slate-300">
        {t
          ? "全场景合作伙伴能力：UPAIego 可联合设备方、场景方、算法方协同交付，保障从试点到规模化实施的连续性。"
          : "Partner capability across scenarios: UPAIego coordinates device, scenario, and algorithm partners from pilot to scale."}
      </div>
    </div>
  );
}
