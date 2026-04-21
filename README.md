# UPAIego 官网（UPAI Website）

宇湃数字科技（UPAIego）公司官网项目。  
技术栈：`Next.js` + `TypeScript` + `Tailwind CSS`（App Router）。

---

## 1. 本地部署（开发环境）

### 1.1 环境要求

- Node.js >= 18（建议使用 20+）
- npm >= 9

检查版本：

```bash
node -v
npm -v
```

### 1.2 安装依赖

在项目根目录执行：

```bash
npm install
```

### 1.3 启动开发服务

```bash
npm run dev
```

启动成功后访问：

- [http://localhost:3000](http://localhost:3000)

常用页面路径：

- `/` 首页
- `/solutions` 解决方案
- `/industries` 行业场景
- `/technology` 技术能力
- `/about` 关于我们
- `/contact` 联系我们
- `/device-admin` 设备管理员入口

### 1.3.1 一键本地运行脚本（Windows）

项目已提供一键脚本（自动检测依赖并启动）：

```bat
scripts\run-local.bat
```

如果你使用 PowerShell，也可以执行：

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\run-local.ps1
```

### 1.4 本地生产模式验证（可选）

```bash
npm run build
npm run start
```

用于模拟线上运行效果。

---

## 2. 线上部署（阿里云 ECS）

本项目推荐使用：`ECS + Node.js + PM2 + Nginx`。

### 2.1 服务器准备

- 操作系统：Ubuntu 22.04（推荐）
- 安全组放行端口：`22`、`80`、`443`
- 域名解析：将域名 A 记录指向 ECS 公网 IP

### 2.2 安装运行环境

```bash
# 安装 Node.js 20、Git、Nginx
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs git nginx

# 安装 PM2
sudo npm i -g pm2
```

### 2.3 拉取代码并构建

```bash
cd /var/www
sudo git clone https://github.com/Zhu-Qianyu/UPAIego-website.git
cd UPAIego-website

npm install
npm run build
```

### 2.4 启动 Next.js 服务（3000 端口）

```bash
pm2 start npm --name upaiego-web -- start
pm2 save
pm2 startup
```

查看运行状态：

```bash
pm2 status
pm2 logs upaiego-web
```

### 2.5 配置 Nginx 反向代理

创建配置文件：

```bash
sudo nano /etc/nginx/sites-available/upaiego
```

写入以下内容（把域名改成你自己的）：

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

启用配置并重启 Nginx：

```bash
sudo ln -s /etc/nginx/sites-available/upaiego /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 2.6 配置 HTTPS（Let's Encrypt）

```bash
sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

### 2.7 后续更新发布

每次代码更新后，在服务器执行：

```bash
cd /var/www/UPAIego-website
git pull
npm install
npm run build
pm2 restart upaiego-web
```

### 2.8 一键部署脚本（ECS）

项目已提供部署脚本：`scripts/deploy-ecs.sh`  
建议首次在服务器执行一次授权：

```bash
cd /var/www/UPAIego-website
chmod +x scripts/deploy-ecs.sh
```

之后每次更新只需执行：

```bash
cd /var/www/UPAIego-website
./scripts/deploy-ecs.sh
```

---

## 3. 静态素材放置规范

网页素材统一放在 `public/assets/` 下：

- `public/assets/images/` 图片
- `public/assets/videos/` 视频
- `public/assets/docs/` 文档

示例引用路径：

- `/assets/images/team-photo.jpg`
- `/assets/videos/demo.mp4`

---

## 4. 常见问题

### Q1: PowerShell 报 `ExecutionPolicy` 脚本限制

可在当前终端临时执行：

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

### Q2: `git push` 到 GitHub 失败（443 网络问题）

优先检查网络/代理；如 HTTPS 受限，建议使用 SSH over 443。

### Q3: 服务器更新后页面没变化

按以下顺序检查：

1. `npm run build` 是否成功
2. `pm2 restart upaiego-web` 是否执行
3. `pm2 logs upaiego-web` 是否有报错
4. `sudo systemctl status nginx` 是否正常

---

## 5. 项目脚本

```bash
npm run dev    # 本地开发
npm run build  # 生产构建
npm run start  # 启动生产服务
npm run lint   # 代码检查
```
