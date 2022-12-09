# 基于Next.js实现的个人站点

记录所见所得，不断追寻当下的认同感，努力成为被认可的；靠谱的；值得信任的伙伴

## 我的next.js学习文档

语雀文档地址：[next.js学习](https://www.yuque.com/docs/share/6cec89df-e7c1-4849-8ba9-2e9fa7161116?#《next.jsstudy》)

## 如何创建自己的blog

执行 [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) 通过 [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), 或者 [pnpm](https://pnpm.io) 下载引导示例👇👇

```bash
npx create-next-app --example blog-starter blog-starter-app
```

```bash
yarn create next-app --example blog-starter blog-starter-app
```

```bash
pnpm create next-app --example blog-starter blog-starter-app
```

本地运行，你的项目会运行在这个地址 [http://localhost:3000](http://localhost:3000)! 如果它没有工作，你可以去提 [GitHub discussions](https://github.com/vercel/next.js/discussions).

如果你想要将其部署到云端，请访问 [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

## 使用到的技术

- [React](https://zh-hans.reactjs.org/)
- [tailwindcss](https://www.tailwindcss.cn/)

## 引入第三方库
> `~`会匹配最近的小版本依赖包，例如：`~1.2.3` 会匹配所以`1.2.x`的版本，但是不包括`1.3.0`及更高
> `^`会匹配最新的大版本依赖包，比如`^1.2.3` 会匹配所有`1.x.x` 的版本，但是不包括`2.0.0` 及以上
> 更多请参考文档：https://github.com/mqyqingfeng/Blog/issues/312

### 官方自带的
- [classnames](https://www.npmjs.com/package/classnames)：React的动态样式解决方案，是对 React的classname的属性扩展，
- [date-fns](https://www.npmjs.com/package/date-fns)：是一个非常好用的JS时间处理库,同时支持浏览器和NodeJS环境,而且使用方便,API全面, [参考文档](https://zhuanlan.zhihu.com/p/354019460)
- [gray-matter](https://www.npmjs.com/package/gray-matter)：获取**元数据** 从字符串或文件中解析前面的内容。快速、可靠且易于使用。[参考文档](http://www.npmdoc.org/gray-matterzhongwenwendanggray-matter-jszhongwenjiaochengjiexi.html)
- [remark](https://www.npmjs.com/package/remark)：一个解析Markdown为PPT的工具，[参考文档](https://blog.bihe0832.com/my_html.html) [参考2](https://cloud.tencent.com/developer/article/1397249)
- [remark-html](https://www.npmjs.com/package/remark-html)：将 Markdown 序列化为 HTML 的remark插件。[参考文档](http://www.npmdoc.org/remark-htmlzhongwenwendangremark-html-jszhongwenjiaochengjiexi.html)
- [autoprefixer](https://www.npmjs.com/package/autoprefixer)：`autoprefixer`插件 就可以帮我们自动补齐前缀，解放双手，
- [postcss](https://www.npmjs.com/package/postcss)：webpack需要，PostCSS 是一个 CSS 处理工具，[参考文档](https://webpack.wuhaolin.cn/3%E5%AE%9E%E6%88%98/3-5%E4%BD%BF%E7%94%A8PostCSS.html)
- [tailwindcss](https://www.npmjs.com/package/tailwindcss)：样式工具
- `next`
- `react`
- `react-dom`
- `typescript` 及其`@types/node`；`@types/react`；`@types/react-dom`

### 我们需要的
> 为了更好的完成我们的个人网站，我们需要引入的第三方库
`dependencies` 
- [dayjs](https://dayjs.gitee.io/zh-CN/) ： 一个时间处理库
- [contentlayer](https://www.npmjs.com/package/contentlayer)： 验证您的内容并将其转换为类型安全的 JSON 数据
- [framer-motion](https://hoon.cc/2020-05-09-Framer-Motion-%E5%AD%A6%E4%B9%A0%E6%89%8B%E5%86%8C/)：一个强大的 React 动画库
- [fs-extra](https://www.npmjs.com/package/fs-extra) ： node.js文件系统
- [pinyin](https://www.npmjs.com/package/pinyin)：汉字拼音转换工具
- 

## 很高兴遇见你
如果觉得对您有帮助，拜托点一个star🌟，它对我是一个很大的鼓励😜😜
