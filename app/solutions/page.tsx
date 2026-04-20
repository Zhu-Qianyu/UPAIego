import type { Metadata } from "next";
import { SectionIntro } from "@/components/section-intro";
import { fullChain } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "解决方案 | UPAIego",
  description: "分阶段解析 UPAIego 数据链路的输入、处理和输出，重点保证数据有效确认与训练可用性。"
};

export default function SolutionsPage() {
  return (
    <div className="container-shell py-16">
      <SectionIntro
        title="全链路解决方案"
        description="每个阶段都定义明确输入/输出，避免数据生产与训练目标脱节。"
      />
      <div className="space-y-5">
        {fullChain.map((stage, index) => (
          <article key={stage.title} className="panel">
            <p className="text-xs uppercase tracking-widest text-cyan-300">阶段 {index + 1}</p>
            <h2 className="mt-2 text-xl font-semibold">{stage.title}</h2>
            <p className="mt-2 text-sm text-cyan-300">{stage.value}</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">{stage.details}</p>
            <div className="mt-4 rounded-lg border border-slate-700 p-4 text-sm text-slate-300">
              关键输出：可用于下一环节处理的结构化样本集与质量报告，确保训练可用性。
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
