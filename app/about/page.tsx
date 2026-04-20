import type { Metadata } from "next";
import { SectionIntro } from "@/components/section-intro";

export const metadata: Metadata = {
  title: "关于我们 | UPAIego",
  description: "宇湃数字科技（UPAIego）专注工业具身智能数据工程，打造高可信数据底座。"
};

export default function AboutPage() {
  return (
    <div className="container-shell py-16">
      <SectionIntro title="关于宇湃数字科技（UPAIego）" description="以工程化方法构建具身智能时代的高质量数据基础设施。" />
      <div className="grid gap-5 md:grid-cols-3">
        <article className="panel">
          <h2 className="text-lg font-semibold">使命</h2>
          <p className="mt-3 text-sm leading-7 text-slate-300">让工业具身智能项目拥有可复现、可验证、可持续优化的数据能力。</p>
        </article>
        <article className="panel">
          <h2 className="text-lg font-semibold">愿景</h2>
          <p className="mt-3 text-sm leading-7 text-slate-300">成为工业场景 EGO 数据全链路服务的专业基础设施伙伴。</p>
        </article>
        <article className="panel">
          <h2 className="text-lg font-semibold">方法论</h2>
          <p className="mt-3 text-sm leading-7 text-slate-300">任务导向采集、质量门禁确认、结构化标注、训练可用交付。</p>
        </article>
      </div>
    </div>
  );
}
