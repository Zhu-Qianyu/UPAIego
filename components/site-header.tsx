import Link from "next/link";

const links = [
  { href: "/", label: "首页" },
  { href: "/solutions", label: "解决方案" },
  { href: "/devices", label: "设备能力" },
  { href: "/industries", label: "行业场景" },
  { href: "/technology", label: "技术能力" },
  { href: "/about", label: "关于我们" },
  { href: "/contact", label: "联系我们" },
  { href: "/device-admin", label: "设备管理员" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-800/80 bg-brand-950/90 backdrop-blur">
      <div className="container-shell flex h-16 items-center justify-between">
        <Link href="/" className="text-sm font-semibold tracking-wide text-cyan-300 md:text-base">
          宇湃数字科技 UPAIego
        </Link>
        <nav className="hidden items-center gap-5 text-sm text-slate-300 lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-cyan-300">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="container-shell flex gap-4 overflow-x-auto pb-3 text-xs text-slate-300 lg:hidden">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="whitespace-nowrap transition hover:text-cyan-300">
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
