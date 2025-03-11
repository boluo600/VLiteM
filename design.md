# VLiteM - Vue Light Mobile Template

> 一个轻量级的 Vue 3 移动端项目模板，专注于开发体验和性能表现。

## 项目概述
VLiteM 是一个基于 Vue 3 的现代化移动端前端项目模板。该模板采用了最新的前端技术栈和工具链，提供了开箱即用的移动端开发环境，包括完整的工程化配置、UI 组件库和原子化 CSS 支持，确保了良好的开发体验和性能表现。

## 技术栈
- **核心框架**: Vue 3
- **开发语言**: TypeScript
- **构建工具**: Vite
- **状态管理**: Pinia
- **UI组件库**: Vant
- **原子化CSS**: UnoCSS
- **路由管理**: Vue Router
- **HTTP客户端**: Axios
- **CSS预处理器**: SASS

## 项目结构
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

## 主要依赖说明
### 生产依赖
- `vue`: ^3.5.13 - 核心框架
- `vue-router`: ^4.5.0 - 官方路由管理器
- `pinia`: ^3.0.1 - Vue官方推荐的状态管理方案
- `vant`: ^4.9.17 - 移动端UI组件库
- `axios`: ^1.8.2 - HTTP客户端

### 开发依赖
- `typescript`: ~5.7.2 - JavaScript的超集，添加了类型系统
- `vite`: ^6.2.0 - 下一代前端构建工具
- `sass`: ^1.85.1 - CSS预处理器
- `eslint`: ^9.22.0 - 代码质量检查工具
- `prettier`: ^3.5.3 - 代码格式化工具
- `unocss`: ^66.1.0-beta.3 - 原子化CSS引擎
- `@unocss/preset-uno`: ^66.1.0-beta.3 - UnoCSS默认预设
- `@unocss/preset-attributify`: ^66.1.0-beta.3 - 属性化模式支持
- `@unocss/preset-icons`: ^66.1.0-beta.3 - 图标支持

## 开发工具和配置
### TypeScript配置
项目包含多个TypeScript配置文件：
- `tsconfig.json`: 基础配置
- `tsconfig.app.json`: 应用特定配置
- `tsconfig.node.json`: Node环境配置

### Vite配置
使用`vite.config.ts`进行构建工具配置，支持：
- Vue SFC
- TypeScript
- 组件自动导入
- 路径别名
- 环境变量
- UnoCSS配置
  - 预设：Uno、Attributify、Icons
  - 自定义快捷方式
  - 主题定制
- 开发服务器代理配置

### 环境配置
- `.env.development`: 开发环境配置
- `.env.production`: 生产环境配置

### 代码规范
- ESLint用于代码质量检查
- Prettier用于代码格式化
- TypeScript类型检查

## CSS方案
### 原子化CSS
使用UnoCSS作为原子化CSS引擎，提供：
- 预设样式类
- 属性化模式
- 图标支持
- 自定义快捷方式
- 主题配置

### 移动端适配
使用`postcss-px-to-viewport-8-plugin`插件实现移动端视口适配，确保在不同设备上有一致的显示效果。

## 构建和部署
### 开发环境
```bash
npm run dev
```

### 生产环境
```bash
npm run build
npm run preview
```

## 开发服务器
- 端口：3000
- 主机：0.0.0.0
- API代理配置：支持开发环境的跨域请求 