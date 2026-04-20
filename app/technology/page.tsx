import type { Metadata } from "next";
import { SectionIntro } from "@/components/section-intro";
import { algorithms } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "技术能力 | UPAIego",
  description: "手部骨骼、身体骨骼与视觉 SLAM 建模，构建标注与算法一体化能力。"
};

export default function TechnologyPage() {
  return (
    <div className="container-shell py-16">
      <SectionIntro
        title="技术能力"
        description="以标注标准化和算法落地为双核心，形成面向工业具身智能训练的一体化流程。"
      />
      <div className="grid gap-5 md:grid-cols-3">
        {algorithms.map((algo) => (
          <article key={algo.title} className="panel">
            <h2 className="text-lg font-semibold">{algo.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">{algo.desc}</p>
          </article>
        ))}
      </div>
      <div className="panel mt-6">
        <h3 className="text-lg font-semibold">标注 + 算法一体化流程</h3>
        <p className="mt-3 text-sm leading-7 text-slate-300">
          从任务建模、标签协议、质检规则到训练数据包交付统一设计，减少标注与建模之间的语义偏差，提高迭代效率。
        </p>
      </div>
    </div>
  );
}
