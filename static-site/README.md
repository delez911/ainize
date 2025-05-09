# CSi.DAO Static Site

A static site for CSi.DAO built with Vite and Express.

## Project Structure

```
static-site/
├── src/                # Source files
│   ├── styles/        # CSS styles
│   ├── scripts/       # JavaScript files
│   └── views/         # HTML templates
├── public/            # Static assets
├── dist/              # Build output
├── app.js            # Express server
├── vite.config.js    # Vite configuration
└── package.json      # Project dependencies
```

## Development

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

5. Start production server:
```bash
npm start
```

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run style` - Process CSS with PostCSS
- `npm run clean` - Clean build directory
- sudo pm2 start npm --name aizine -- run dev 

### 安装 Nginx​

```shell

# 6. 生产环境-​使用 Let's Encrypt 免费证书​（替代自签名证书）：
sudo apt install certbot

sudo certbot  certonly --standalone -d aizine.space -d www.aizine.space
sudo certbot  certonly --standalone -d aizine.xyz -d www.aizine.xyz
sudo certbot renew --dry-run
### see nginx.conf/ Certbot 自动生成 Nginx 配置 sudo certbot --nginx -d aizine.space -d www.aizine.space

sudo apt install nginx
sudo nano /etc/nginx/sites-available/aizine-space.conf  # 编写配置
sudo ln -s /etc/nginx/sites-available/aizine-space.conf /etc/nginx/sites-enabled/
sudo nano /etc/nginx/sites-available/aizine-xyz.conf  # 编写配置
sudo ln -s /etc/nginx/sites-available/aizine-xyz.conf /etc/nginx/sites-enabled/

sudo nginx -t  # 测试配置文件
sudo systemctl start nginx  # 重启 Nginx
# sudo systemctl restart nginx  # 重启 Nginx


```

## Dependencies

- Express - Web server
- Vite - Build tool
- vite-plugin-html - HTML template processing
- PostCSS - CSS processing
- ESLint - Code linting 