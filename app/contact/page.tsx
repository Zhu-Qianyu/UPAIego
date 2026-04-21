import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { SectionIntro } from "@/components/section-intro";
import { getLocale } from "@/lib/locale";

export const metadata: Metadata = {
  title: "联系我们 | UPAIego",
  description: "提交工业具身智能项目需求，获取 UPAIego 的数据链路咨询与试点建议。"
};

export default async function ContactPage() {
  const locale = await getLocale();
  const t = locale === "zh";
  return (
    <div className="container-shell py-section">
      <SectionIntro
        title={t ? "联系我们" : "Contact Us"}
        description={
          t ? "欢迎提交商机咨询，我们会基于你的场景给出阶段化建议。" : "Submit your request and we will provide phased recommendations."
        }
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <ContactForm locale={locale} />
        <aside className="panel text-sm leading-7 text-slate-300">
          <h2 className="text-lg font-semibold text-white">{t ? "联系方式（占位）" : "Contact Details (Placeholder)"}</h2>
          <p className="mt-3">{t ? "电话" : "Tel"}：+86-xxx-xxxx-xxxx</p>
          <p>{t ? "邮箱" : "Email"}：business@upaiego.com</p>
          <p>{t ? "地址" : "Address"}：{t ? "上海市（示例）" : "Shanghai (Example)"}</p>
          <p className="mt-4">
            {t ? "也可通过表单提交需求，我们将在 1-2 个工作日内回复。" : "You can also submit via form. We will reply within 1-2 business days."}
          </p>
        </aside>
      </div>
    </div>
  );
}
