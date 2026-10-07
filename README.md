# Leyan TANG — academic homepage

纯 HTML / CSS / 少量 JavaScript 的学术个人网站，可直接用于 GitHub Pages。无需安装依赖、编译或主题框架，关掉 JavaScript 仍可阅读并使用导航。

**目标仓库：** `haverytang-official/haverytang-official.github.io`  
**目标网址：** https://haverytang-official.github.io/  
**部署状态：** 已于 2026-10-07 发布到 GitHub Pages（main → /(root)）；首页与样式、脚本、图标、笔记页、CV 简介页已验证可访问。

## 文件说明

- `index.html`：Home/About、Research Interests、Projects、Education、Publications、Notes/Blog、CV、Contact。
- `assets/style.css`：字体、颜色、桌面/手机布局、打印样式。
- `assets/site.js`：锚点导航高亮和个人资料打印按钮。
- `assets/favicon.svg`：原创托卡马克意象图标；首页图形也是原创 SVG。
- `notes/starting-a-research-notebook.html`：首篇网站开篇说明。
- `cv.html`：已确认资料的简介页，支持浏览器打印为 PDF；明确说明完整 CV 尚待提供。
- `404.html`：GitHub Pages 找不到页面时的返回入口。
- `.nojekyll`：跳过 Jekyll，直接发布静态文件。

## 部署

1. 使用账号 `haverytang-official` 创建公开仓库 `haverytang-official.github.io`。如仓库已存在，先保留原文件与历史，审阅后再更新。
2. 将本目录的**内容**放到仓库根目录（不要额外套一层 `academic-website` 文件夹），提交到 `main`。
3. 仓库 **Settings → Pages → Build and deployment → Source** 选择 **Deploy from a branch**。
4. Branch 选择 **main**，目录选择 **/(root)**，点击 **Save**。
5. 等 Pages 构建完成后访问目标网址。官方说明发布可能需要最多约 10 分钟：https://docs.github.com/en/pages/quickstart 。

本版本不包含 Actions 工作流，也不需要授予额外工作流权限。

## 后续维护

直接在 GitHub 编辑文件并提交，Pages 就会更新。

- **姓名与介绍**：编辑 `index.html` 的 `id="about"` 区域；同时更新 `<title>`、description 和 `cv.html`。
- **研究方向**：编辑 `id="research"`；保留真实信息，不把研究兴趣写成已经完成的成果。
- **项目**：在 `id="projects"` 内复制已有 `<article class="entry">`，填入真实名称、介绍和项目链接。
- **教育**：编辑 `id="education"`，补充准确的学位、院校、年份，再同步 `cv.html`。
- **论文**：将 `id="publications"` 内占位文字替换为标题、作者、年份、会议/期刊及 DOI、PDF、代码链接。
- **笔记**：复制 `notes/starting-a-research-notebook.html` 为新文件，改标题、日期和内容，然后在首页 `id="notes"` 增加链接。子页面资源引用保留 `../assets/`。
- **CV PDF**：将真实 PDF 放到 `assets/cv.pdf`，把首页 CV 链接改为 `href="assets/cv.pdf"`。别在文件未上传时添加下载链接。
- **照片**：可把首页 `<figure>` 内的示意图替换为自己的照片，并写准确的替代文本；不要使用参考站的人像。
- **更新日期**：修改首页与简介页页脚。没有自动更新日期，避免让未修改的内容看起来刚更新。

目前仅使用用户确认的姓名 Leyan TANG、2026 年 8 月入学 SWIP、磁约束核聚变/托卡马克兴趣，以及用户同意公开的 Gmail。未填入学位、导师、其他教育经历或论文。

## 本地查看

双击 `index.html` 即可浏览；所有主要资源和子页面链接采用相对路径。`404.html` 使用目标网站绝对地址，以处理任意深度的错误路径。

## 设计参考

参考 https://tairanhe.com/ 的白底、克制的链接色、简介与纵向学术条目阅读顺序。版式、配色、字体选择、导航、图形与页面代码均重新设计。未复制原站 HTML、CSS、人像、论文内容或多媒体。
