export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 py-8">
      <div className="container-shell flex flex-col justify-between gap-3 text-sm text-slate-400 md:flex-row">
        <p>© {new Date().getFullYear()} 宇湃数字科技（UPAIego）. All rights reserved.</p>
        <p>具身智能 EGO 数据全链路解决方案服务商</p>
      </div>
    </footer>
  );
}
