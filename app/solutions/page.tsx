import type { Metadata } from "next";
import { SectionIntro } from "@/components/section-intro";
import { getLocale } from "@/lib/locale";

export const metadata: Metadata = {
  title: "解决方案 | UPAIego",
  description: "以数据采集、数据标注、场景算法训练三大阶段构建工业具身智能解决方案。"
};

export default function SolutionsPage() {
  const localePromise = getLocale();
  return <SolutionsContent localePromise={localePromise} />;
}

async function SolutionsContent({ localePromise }: { localePromise: Promise<"zh" | "en"> }) {
  const locale = await localePromise;
  const t = locale === "zh";
  const solutionStages = t
    ? [
        {
          title: "数据采集",
          summary: "面向工业任务场景构建稳定、可复现的数据输入基础。",
          outcome: "形成多模态原始数据资产，为后续标注与训练提供高质量样本来源。"
        },
        {
          title: "数据标注",
          summary: "围绕任务目标进行结构化语义标注与质量校验。",
          outcome: "沉淀可直接用于模型学习的标准化标签数据集。"
        },
        {
          title: "场景算法训练",
          summary: "结合场景约束与任务目标进行模型训练与迭代优化。",
          outcome: "输出可落地、可评估、可持续迭代的场景算法能力。"
        }
      ]
    : [
        {
          title: "Data Collection",
          summary: "Build stable and reproducible data input for industrial tasks.",
          outcome: "Generate multimodal raw datasets for high-quality annotation and training."
        },
        {
          title: "Data Annotation",
          summary: "Apply structured semantic annotation and quality checks around task objectives.",
          outcome: "Deliver standardized labels ready for model learning."
        },
        {
          title: "Scenario Algorithm Training",
          summary: "Train and iterate models based on scenario constraints and target outcomes.",
          outcome: "Output deployable, measurable, and continuously improvable algorithm capability."
        }
      ];
  return (
    <div className="container-shell py-section">
      <SectionIntro
        title={t ? "解决方案" : "Solutions"}
        description={
          t
            ? "以三阶段闭环交付工业具身智能数据与算法能力：数据采集、数据标注、场景算法训练。"
            : "Deliver embodied AI data and algorithms through a three-stage closed loop: collection, annotation, and scenario training."
        }
      />
      <div className="space-y-5">
        {solutionStages.map((stage, index) => (
          <article key={stage.title} className="panel">
            <p className="text-xs uppercase tracking-widest text-cyan-300">{t ? `阶段 ${index + 1}` : `Stage ${index + 1}`}</p>
            <h2 className="subsection-title mt-2">{stage.title}</h2>
            <p className="mt-2 text-sm text-cyan-300">{stage.summary}</p>
            <div className="mt-4 rounded-lg border border-slate-700 p-4 text-sm text-slate-300">
              {t ? "阶段产出" : "Output"}：{stage.outcome}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
