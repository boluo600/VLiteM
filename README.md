# VLiteM

<div align="center">
  <h1>VLiteM</h1>
  <p>一个轻量级的 Vue 3 移动端项目模板，专注于开发体验和性能表现</p>
</div>

## ✨ 特性

- 🚀 [Vue 3](https://vuejs.org/) + [Vite](https://vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/) 开发体验
- 📱 [Vant](https://vant-ui.github.io/vant/#/zh-CN) 移动端组件库
- 🎨 [UnoCSS](https://unocss.dev/) 原子化 CSS 引擎
- 📦 [组件自动导入](https://github.com/antfu/unplugin-vue-components)
- 🍍 [Pinia](https://pinia.vuejs.org/) 状态管理
- 🌐 [Vue Router](https://router.vuejs.org/) 路由管理
- 📡 [Axios](https://axios-http.com/) 请求库
- 💅 [SASS](https://sass-lang.com/) 预处理器
- 📱 移动端适配
- 🔧 完整的工程化配置
- 💪 TypeScript 类型支持
- 🎯 ESLint + Prettier 代码规范

## 🚀 快速开始

```bash
# 克隆项目
git clone https://github.com/boluo600/VLiteM.git

# 进入项目目录
cd vlitem

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

## 📦 构建

```bash
# 构建生产环境
npm run build

# 预览生产环境
npm run preview
```

## 📁 项目结构

```
src/
├── api/          # API接口定义和网络请求
├── assets/       # 静态资源文件
├── components/   # 可复用的Vue组件
├── composables/  # Vue组合式函数
├── router/       # 路由配置
├── store/        # Pinia状态管理
├── styles/       # 全局样式文件
├── utils/        # 工具函数
├── views/        # 页面级组件
├── App.vue       # 根组件
└── main.ts       # 应用入口文件
```

## 🔧 开发指南

### 环境准备

- Node.js 16+
- npm 或 yarn 或 pnpm

### 开发工具推荐

- [VSCode](https://code.visualstudio.com/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)

### 代码规范

项目使用 ESLint 和 Prettier 进行代码规范和格式化：

```bash
# 运行 ESLint 检查
npm run lint

# 运行 Prettier 格式化
npm run format
```

### 移动端适配

项目使用 `postcss-px-to-viewport-8-plugin` 进行移动端适配，默认设计稿宽度为 375px。

### 样式开发

项目采用 UnoCSS + SASS 的组合：

- 使用 UnoCSS 进行快速样式开发
- 使用 SASS 编写复杂样式
- 支持主题定制

## 📝 开发计划

- [ ] 单元测试支持
- [ ] 自动部署配置
- [ ] 多环境配置
- [ ] 微信 SDK 集成
- [ ] 完整示例页面

## 🤝 贡献指南

欢迎提交 Issue 或 Pull Request！

## 📄 开源协议

[MIT](./LICENSE)
