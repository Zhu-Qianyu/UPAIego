import type { Metadata } from "next";
import { SectionIntro } from "@/components/section-intro";
import { devices } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "设备能力 | UPAIego",
  description: "UPAIego 三类数采设备覆盖视频、多视角与力学传感，服务工业具身智能数据生产。"
};

export default function DevicesPage() {
  return (
    <div className="container-shell py-16">
      <SectionIntro title="设备能力" description="设备与任务强绑定，保障产出数据可直接进入确认、标注与训练流程。" />
      <div className="grid gap-5 lg:grid-cols-3">
        {devices.map((device) => (
          <article key={device.name} className="panel">
            <h2 className="text-lg font-semibold">{device.name}</h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="text-slate-400">适配任务类型</dt>
                <dd className="text-slate-100">{device.task}</dd>
              </div>
              <div>
                <dt className="text-slate-400">产出数据类型</dt>
                <dd className="text-slate-100">{device.output}</dd>
              </div>
              <div>
                <dt className="text-slate-400">典型应用</dt>
                <dd className="text-slate-100">{device.useCase}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </div>
  );
}
