"use client";

import { useState } from "react";

type FormData = {
  name: string;
  company: string;
  email: string;
  demand: string;
};

const initialData: FormData = {
  name: "",
  company: "",
  email: "",
  demand: ""
};

type ContactFormProps = {
  locale: "zh" | "en";
};

export function ContactForm({ locale }: ContactFormProps) {
  const t = locale === "zh";
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const nextErrors: Partial<FormData> = {};
    if (!data.name.trim()) nextErrors.name = t ? "请输入姓名" : "Please enter your name";
    if (!data.company.trim()) nextErrors.company = t ? "请输入公司名称" : "Please enter your company";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) nextErrors.email = t ? "请输入有效邮箱" : "Please enter a valid email";
    if (data.demand.trim().length < 10) nextErrors.demand = t ? "请至少输入 10 个字描述需求" : "Please enter at least 10 characters";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(false);
    if (validate()) {
      setSubmitted(true);
      setData(initialData);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="panel space-y-5">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm text-slate-300">
          {t ? "姓名" : "Name"}
        </label>
        <input
          id="name"
          value={data.name}
          onChange={(event) => setData((prev) => ({ ...prev, name: event.target.value }))}
          className="w-full rounded-lg border border-slate-700 bg-brand-950 px-3 py-2 text-sm"
        />
        {errors.name ? <p className="mt-1 text-xs text-rose-300">{errors.name}</p> : null}
      </div>

      <div>
        <label htmlFor="company" className="mb-1 block text-sm text-slate-300">
          {t ? "公司" : "Company"}
        </label>
        <input
          id="company"
          value={data.company}
          onChange={(event) => setData((prev) => ({ ...prev, company: event.target.value }))}
          className="w-full rounded-lg border border-slate-700 bg-brand-950 px-3 py-2 text-sm"
        />
        {errors.company ? <p className="mt-1 text-xs text-rose-300">{errors.company}</p> : null}
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm text-slate-300">
          {t ? "邮箱" : "Email"}
        </label>
        <input
          id="email"
          type="email"
          value={data.email}
          onChange={(event) => setData((prev) => ({ ...prev, email: event.target.value }))}
          className="w-full rounded-lg border border-slate-700 bg-brand-950 px-3 py-2 text-sm"
        />
        {errors.email ? <p className="mt-1 text-xs text-rose-300">{errors.email}</p> : null}
      </div>

      <div>
        <label htmlFor="demand" className="mb-1 block text-sm text-slate-300">
          {t ? "需求描述" : "Requirement"}
        </label>
        <textarea
          id="demand"
          rows={5}
          value={data.demand}
          onChange={(event) => setData((prev) => ({ ...prev, demand: event.target.value }))}
          className="w-full rounded-lg border border-slate-700 bg-brand-950 px-3 py-2 text-sm"
        />
        {errors.demand ? <p className="mt-1 text-xs text-rose-300">{errors.demand}</p> : null}
      </div>

      <button type="submit" className="rounded-lg bg-cyan-400 px-5 py-2 text-sm font-semibold text-brand-950">
        {t ? "提交咨询" : "Submit"}
      </button>

      {submitted ? (
        <p className="text-sm text-emerald-300">{t ? "提交成功，我们将尽快与您联系。" : "Submitted successfully. We will contact you soon."}</p>
      ) : null}
    </form>
  );
}
