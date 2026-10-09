# Leyan TANG — academic homepage

纯 HTML / CSS / 少量 JavaScript 的学术个人网站，可直接用于 GitHub Pages。无需安装依赖、编译或主题框架，关掉 JavaScript 仍可阅读并使用导航。

**目标仓库：** `haverytang-official/haverytang-official.github.io`  
**目标网址：** https://haverytang-official.github.io/  
**部署状态：** 已于 2026-10-07 发布到 GitHub Pages（main → /(root)）；首页与样式、脚本、图标、笔记页、CV 简介页已验证可访问。

## 文件说明

- `index.html`：Home/About、Research Interests、Projects、Education、Publications、Notes（Reading Notes / Course Notes）、CV、Contact。
- `assets/style.css`：字体、颜色、桌面/手机布局、打印样式。
- `assets/site.js`：锚点导航高亮和个人资料打印按钮。
- `assets/favicon.svg`：原创托卡马克意象图标；首页图形也是原创 SVG。
- `assets/reading.css`：文献目录、单篇文献索引和章节笔记的响应式样式。
- `notes/index.html`：Reading Notes 文献目录。
- `notes/strait-2008/index.html`：Strait 等（2008）《Chapter 2: Magnetic Diagnostics》的文献资料和章节索引。
- `notes/strait-2008/magnetic-field-probes.html`：2026-10-08 发布的 II.B.2 双语阅读笔记，英文全文在前，中文在后；五个阅读问题均已解决。公式使用浏览器原生 MathML，无需外部脚本。
- `notes/starting-a-research-notebook.html`：原网站开篇说明，保留原地址。
- `cv.html`：根据提供的 CV 整理的网页版，支持浏览器打印。
- `assets/cv.pdf`：公开下载版 CV，已移除手机号及旧元数据，并按用户确认将 SWIP 入学日期修正为 2026 年 8 月；本地原始 PDF 未修改。
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
- **笔记**：使用下面的文献与章节层级，先准备草稿，作者审阅后再更新公开页面。正文保留内容与参考文献，不加入整理过程或审阅提示。
- **CV PDF**：更新 `assets/cv.pdf` 并同步 `cv.html`；首页已连接公开下载版。上传前核对公开联系信息及日期。
- **照片**：可把首页 `<figure>` 内的示意图替换为自己的照片，并写准确的替代文本；不要使用参考站的人像。
- **更新日期**：修改首页与简介页页脚。没有自动更新日期，避免让未修改的内容看起来刚更新。

内容来源：用户提供的 CV 以及聊天中确认的磁约束核聚变/托卡马克兴趣。SWIP 入学月份按用户确认采用 2026 年 8 月，2029 年毕业标为预计。UCAS 经历为天体物理课程学习，不表述为已获得硕士学位。没有添加 CV 未列出的论文、导师或项目成果。公开站点和下载版 CV 均移除了手机号。

## 本地查看

双击 `index.html` 即可浏览；所有主要资源和子页面链接采用相对路径。`404.html` 使用目标网站绝对地址，以处理任意深度的错误路径。

## Reading Notes 的维护方式

目录结构为 `Reading Notes → 文献 → 章节笔记`。目前第一篇文献为 Strait 等（2008），第一篇章节笔记为 II.B.2 Magnetic field probes。

1. **添加新文献**：在 `notes/` 下建立文献文件夹，例如 `notes/author-year/`，复制现有文献的 `index.html`，修改真实书目信息、DOI 和章节列表；在 `notes/index.html` 添加入口。
2. **添加章节**：在对应文献文件夹中建立章节 HTML，添加面包屑、标题、正文和参考文献，并更新文献的章节索引。该层资源路径为 `../../assets/`，返回总目录为 `../index.html`。
3. **保留思考过程**：原始疑问和后续解答分别记录，编号保持对应，状态以作者确认为准；已经解决的问题不能仍标作未解决。原文内容概述与个人推导应明确区分。
4. **发布前审阅**：未经作者审阅的正文留在本地网站目录之外；不要将草稿提交到公开仓库，即使没有导航链接也会公开。手写笔记照片仅用作整理素材，不公开。
5. **完成后发布**：将审阅后的正文放入章节页面，把目录和章节页的 `In preparation` 状态改为实际完成状态。如标注日期，使用实际发布日期；文献的 2008 年不作为笔记发布日期。

保持普通 HTML/CSS 即可，无需添加数据库、构建工具或 JavaScript 才能维护这一层级。

## 设计参考

参考 https://tairanhe.com/ 的白底、克制的链接色、简介与纵向学术条目阅读顺序。版式、配色、字体选择、导航、图形与页面代码均重新设计。未复制原站 HTML、CSS、人像、论文内容或多媒体。

## Course Notes 的维护方式

目录结构为 `Course Notes → 课程 → 章节笔记`，与 Reading Notes 并列。`courses/index.html` 是课程总目录，`courses/plasma-physics/index.html` 是等离子体物理课程目录，目前有第 1–3 节入口。

- 三个章节页面目前仅提供标题、主题和相邻章节导航，正文待作者审阅后发布。
- 正文按英文全文在前、中文全文在后的顺序排版，定义符号并标明近似成立的条件。
- 新增章节时复制相邻章节页面，更新标题、面包屑、前后篇链接和课程目录；资源路径保持 `../../assets/`。
- 原始手写笔记、扫描图片、原始 PDF 与未批准的正文草稿保存在公开网站目录之外，不提交到公开仓库。
- 课程笔记仅体现个人学习整理，不假定课程的讲授学校、讲师或教材来源。
