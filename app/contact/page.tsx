import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { SectionIntro } from "@/components/section-intro";

export const metadata: Metadata = {
  title: "联系我们 | UPAIego",
  description: "提交工业具身智能项目需求，获取 UPAIego 的数据链路咨询与试点建议。"
};

export default function ContactPage() {
  return (
    <div className="container-shell py-16">
      <SectionIntro title="联系我们" description="欢迎提交商机咨询，我们会基于你的场景给出阶段化建议。" />
      <div className="grid gap-6 lg:grid-cols-2">
        <ContactForm />
        <aside className="panel text-sm leading-7 text-slate-300">
          <h2 className="text-lg font-semibold text-white">联系方式（占位）</h2>
          <p className="mt-3">电话：+86-xxx-xxxx-xxxx</p>
          <p>邮箱：business@upaiego.com</p>
          <p>地址：上海市（示例）</p>
          <p className="mt-4">也可通过表单提交需求，我们将在 1-2 个工作日内回复。</p>
        </aside>
      </div>
    </div>
  );
}
