import type { Metadata } from "next";
import { SectionIntro } from "@/components/section-intro";
import { getSiteData } from "@/lib/site-data";
import { getLocale } from "@/lib/locale";

export const metadata: Metadata = {
  title: "技术能力 | UPAIego",
  description: "整合设备能力与核心算法能力，构建面向工业具身智能的数据生产与训练支撑体系。"
};

export default async function TechnologyPage() {
  const locale = await getLocale();
  const { algorithms, devices, trainingPipeline } = getSiteData(locale);
  const t = locale === "zh";
  return (
    <div className="container-shell py-section">
      <SectionIntro
        title={t ? "技术能力" : "Technology Capability"}
        description={
          t
            ? "统一整合设备能力与算法能力，形成可采、可标、可训的工业具身智能技术底座。"
            : "Integrate device and algorithm capabilities into a training-ready foundation for embodied AI."
        }
      />
      <div className="mb-8">
        <h2 className="subsection-title mb-4">{t ? "设备能力" : "Device Capability"}</h2>
        <div className="grid gap-5 lg:grid-cols-3">
          {devices.map((device) => (
            <article key={device.name} className="panel">
              <div className="mb-4 flex h-40 items-center justify-center rounded-lg border border-dashed border-slate-600 bg-brand-950/60 text-xs text-slate-400">
                {t ? "图片/视频展示位" : "Image / Video Slot"}
                <br />
                /assets/images/devices/*
              </div>
              <h3 className="text-lg font-semibold">{device.name}</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>{t ? "适配任务" : "Task Fit"}：{device.task}</li>
                <li>{t ? "产出数据" : "Output Data"}：{device.output}</li>
                <li>{t ? "典型应用" : "Typical Use Case"}：{device.useCase}</li>
              </ul>
            </article>
          ))}
        </div>
      </div>
      <h2 className="subsection-title mb-4">{t ? "核心算法能力" : "Core Algorithm Capability"}</h2>
      <div className="grid gap-5 md:grid-cols-3">
        {algorithms.map((algo) => (
          <article key={algo.title} className="panel">
            <div className="mb-4 flex h-40 items-center justify-center rounded-lg border border-dashed border-slate-600 bg-brand-950/60 text-xs text-slate-400">
              {t ? "图片/视频展示位" : "Image / Video Slot"}
              <br />
              /assets/images/algorithms/*
            </div>
            <h2 className="text-lg font-semibold">{algo.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">{algo.desc}</p>
          </article>
        ))}
      </div>
      <div className="panel mt-8">
        <h3 className="text-lg font-semibold">{t ? "标注 + 算法一体化流程" : "Integrated Annotation + Algorithm Workflow"}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-300">
          {t
            ? "从任务建模、标签协议、质检规则到训练数据包交付统一设计，减少标注与建模之间的语义偏差，提高迭代效率。"
            : "Unify task modeling, label protocol, QA rules, and training package delivery to reduce semantic gaps and speed up iteration."}
        </p>
      </div>
      <div className="mt-8">
        <h2 className="subsection-title mb-4">{t ? "数据利用训练算法" : "Data-driven Training Algorithm"}</h2>
        <p className="mb-5 text-sm leading-7 text-slate-300">
          {t
            ? "参考 EgoScale 类思路：先用大规模人类第一视角视频进行预训练，再用少量真机数据微调，最终使机器人在目标任务上获得高质量执行能力。"
            : "Following an EgoScale-like strategy: pretrain with large-scale first-person human videos, then fine-tune with small real-robot data for strong task performance."}
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          {trainingPipeline.map((item) => (
            <article key={item.title} className="panel">
              <p className="text-xs uppercase tracking-widest text-cyan-300">{item.step}</p>
              <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
