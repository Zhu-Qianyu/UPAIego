import type { Metadata } from "next";
import Link from "next/link";
import { SectionIntro } from "@/components/section-intro";

export const metadata: Metadata = {
  title: "设备管理员 | UPAIego",
  description: "连接 UPAIego 设备管理平台，进行设备状态、任务与数据采集配置管理。"
};

export default function DeviceAdminPage() {
  return (
    <div className="container-shell py-16">
      <SectionIntro
        title="设备管理员入口"
        description="通过独立管理端进行设备状态查看、采集任务配置与产线节点管理。"
      />
      <div className="panel">
        <p className="text-sm leading-7 text-slate-300">
          管理平台地址：
          <Link
            href="https://upaiego-management.vercel.app/"
            target="_blank"
            className="ml-2 font-semibold text-cyan-300 underline-offset-4 hover:underline"
          >
            https://upaiego-management.vercel.app/
          </Link>
        </p>
      </div>
    </div>
  );
}
