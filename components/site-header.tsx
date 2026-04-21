import Link from "next/link";
import { getLocale } from "@/lib/locale";
import { LocaleToggle } from "@/components/locale-toggle";

const linksByLocale = {
  zh: [
    { href: "/", label: "首页" },
    { href: "/solutions", label: "解决方案" },
    { href: "/industries", label: "行业场景" },
    { href: "/technology", label: "技术能力" },
    { href: "/about", label: "关于我们" },
    { href: "/contact", label: "联系我们" },
    { href: "/device-admin", label: "设备管理员" }
  ],
  en: [
    { href: "/", label: "Home" },
    { href: "/solutions", label: "Solutions" },
    { href: "/industries", label: "Industries" },
    { href: "/technology", label: "Technology" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/device-admin", label: "Device Admin" }
  ]
} as const;

export async function SiteHeader() {
  const locale = await getLocale();
  const links = linksByLocale[locale];
  return (
    <header className="sticky top-0 z-30 border-b border-slate-800/80 bg-brand-950/90 backdrop-blur">
      <div className="container-shell flex h-20 items-center justify-between">
        <Link
          href="/"
          className="text-[clamp(1.2rem,1.65vw,1.65rem)] font-semibold tracking-wide text-cyan-300"
        >
          {locale === "zh" ? "宇湃数字科技 UPAIego" : "UPAIego Digital Technology"}
        </Link>
        <div className="hidden items-center gap-4 lg:flex">
          <nav className="items-center gap-6 text-[clamp(1rem,1.08vw,1.15rem)] text-slate-200 lg:flex">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-cyan-300">
                {link.label}
              </Link>
            ))}
          </nav>
          <LocaleToggle locale={locale} />
        </div>
      </div>
      <div className="container-shell flex items-center justify-between pb-3 lg:hidden">
        <div className="flex gap-4 overflow-x-auto text-xs text-slate-300">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="whitespace-nowrap transition hover:text-cyan-300">
              {link.label}
            </Link>
          ))}
        </div>
        <LocaleToggle locale={locale} />
      </div>
    </header>
  );
}
