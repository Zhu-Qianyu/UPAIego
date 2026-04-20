import Link from "next/link";
import { SectionIntro } from "@/components/section-intro";
import { algorithms, devices, fullChain, industrialValue } from "@/lib/site-data";

export default function HomePage() {
  return (
    <div className="pb-16">
      <section className="border-b border-slate-800 py-20">
        <div className="container-shell">
          <p className="text-sm font-medium tracking-widest text-cyan-300">EMBODIED AI DATA PIPELINE</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
            宇湃数字科技 UPAIego，提供工业级具身智能 EGO 数据全链路解决方案
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">
            从采集设备到训练可用数据资产，UPAIego 打通“采集 - 确认 - 标注 - 训练”全流程，帮助工业场景更快构建可复现、可迭代的具身智能能力。
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-lg bg-cyan-400 px-6 py-3 text-sm font-semibold text-brand-950">
              发起合作咨询
            </Link>
            <Link
              href="/solutions"
              className="rounded-lg border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-100"
            >
              查看全链路方案
            </Link>
          </div>
        </div>
      </section>

      <section className="container-shell py-16">
        <SectionIntro title="全链路解决方案流程" description="确保每一段数据都服务于训练可用性，而非仅完成采集任务。" />
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

      <section className="container-shell py-10">
        <SectionIntro title="设备能力矩阵" description="多设备协同覆盖从动作感知到力学感知的关键数据维度。" />
        <div className="grid gap-5 lg:grid-cols-3">
          {devices.map((device) => (
            <article key={device.name} className="panel">
              <h3 className="text-lg font-semibold">{device.name}</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>适配任务：{device.task}</li>
                <li>产出数据：{device.output}</li>
                <li>典型应用：{device.useCase}</li>
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container-shell py-10">
        <SectionIntro title="核心算法能力" description="标注与算法协同设计，提升工业动作理解和空间建模精度。" />
        <div className="grid gap-5 md:grid-cols-3">
          {algorithms.map((algo) => (
            <article key={algo.title} className="panel">
              <h3 className="text-lg font-semibold">{algo.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{algo.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-shell py-10">
        <SectionIntro title="工业场景价值" description="围绕工业生产建立可验证的数据与训练闭环。" />
        <div className="panel space-y-3 text-sm leading-7 text-slate-200">
          {industrialValue.map((value) => (
            <p key={value}>{value}</p>
          ))}
        </div>
      </section>

      <section className="container-shell pt-10">
        <div className="panel flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-semibold">合作流程：需求澄清 → 场景评估 → 试点验证 → 批量交付</h2>
            <p className="mt-2 text-sm text-slate-300">30 分钟沟通你的工业场景，我们给出数据链路与试点计划建议。</p>
          </div>
          <Link href="/contact" className="rounded-lg bg-cyan-400 px-6 py-3 text-sm font-semibold text-brand-950">
            预约技术方案沟通
          </Link>
        </div>
      </section>
    </div>
  );
}
