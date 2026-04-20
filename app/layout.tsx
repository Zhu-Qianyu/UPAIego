import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "宇湃数字科技 UPAIego | 具身智能 EGO 数据全链路解决方案",
  description:
    "UPAIego 提供覆盖数据采集、有效确认、标注与训练的数据全链路服务，聚焦工业具身智能项目落地。",
  openGraph: {
    title: "宇湃数字科技 UPAIego",
    description: "工业具身智能 EGO 数据全链路解决方案服务商",
    url: "https://upaiego.com",
    siteName: "UPAIego",
    locale: "zh_CN",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
