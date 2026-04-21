import type { Metadata } from "next";
import Link from "next/link";
import { SectionIntro } from "@/components/section-intro";
import { getLocale } from "@/lib/locale";

export const metadata: Metadata = {
  title: "设备管理员 | UPAIego",
  description: "连接 UPAIego 设备管理平台，进行设备状态、任务与数据采集配置管理。"
};

export default async function DeviceAdminPage() {
  const locale = await getLocale();
  const t = locale === "zh";
  return (
    <div className="container-shell py-section">
      <SectionIntro
        title={t ? "设备管理员入口" : "Device Admin Entry"}
        description={
          t
            ? "通过独立管理端进行设备状态查看、采集任务配置与产线节点管理。"
            : "Access the management console for device status, capture tasks, and production node management."
        }
      />
      <div className="panel">
        <p className="text-sm leading-7 text-slate-300">
          {t ? "管理平台地址" : "Management Platform"}：
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
