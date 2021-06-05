(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{430:function(t,s,a){"use strict";a.r(s);var n=a(23),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"图片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片"}},[t._v("#")]),t._v(" 图片")]),t._v(" "),a("p",[t._v("让图片更小，让图片更少。")]),t._v(" "),a("h2",{attrs:{id:"更小-格式选择"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更小-格式选择"}},[t._v("#")]),t._v(" 更小 - 格式选择")]),t._v(" "),a("p",[t._v("可以参考 "),a("a",{attrs:{href:"https://www.jd.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("某东"),a("OutboundLink")],1),t._v(" 对应看一下，这类图片很多的网站，在图片的选择上是比较恰当的。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("格式")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("透明度")]),t._v(" "),a("th",[t._v("适用场景")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("JPEG")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",[t._v("色彩丰富，大图，照片，不规则图")])]),t._v(" "),a("tr",[a("td",[t._v("PNG")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),a("td",[t._v("高保真，色彩单一，透明，形状类考虑 SVG")])]),t._v(" "),a("tr",[a("td",[t._v("WebP")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),a("td",[t._v("色彩不太丰富的图，图形和半透明图")])]),t._v(" "),a("tr",[a("td",[t._v("SVG")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),a("td",[t._v("高保真要求，缩放需求，icon，各种形状")])]),t._v(" "),a("tr",[a("td",[t._v("GIF")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),a("td",[t._v("动图，适合小图，当内容大时考虑 video 替代")])])])]),t._v(" "),a("p",[t._v("在保证兼容性，显示效果的基础上，尽可能降低数据量，WebP 与 SVG 的更多使用，会是一个趋势。")]),t._v(" "),a("ul",[a("li",[t._v("PNG：无损压缩，保存细节，适用有精细要求的场景，同时注意文件较大。")]),t._v(" "),a("li",[t._v("动画可以考虑 GIF, SVG, WebP, video 等多种方案。")]),t._v(" "),a("li",[t._v("WebP：兼容性相对较差，可以做支持性检测，利用图片服务器做处理转换，如果是可控客户端，WebP 优先。")])]),t._v(" "),a("p",[t._v("WebP 的探测加载，已经成为比较通用的方案，某东就是加载了一张图片来判断是否支持，然后再将一些图片添加"),a("code",[t._v(".webp")]),t._v("标记交给图片服务器处理。")]),t._v(" "),a("h2",{attrs:{id:"更小-图片压缩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更小-图片压缩"}},[t._v("#")]),t._v(" 更小 - 图片压缩")]),t._v(" "),a("p",[t._v("基于 "),a("a",{attrs:{href:"https://github.com/imagemin",target:"_blank",rel:"noopener noreferrer"}},[t._v("imagemin"),a("OutboundLink")],1),t._v(" ，可以使用 Webpack 插件 "),a("a",{attrs:{href:"https://webpack.js.org/plugins/image-minimizer-webpack-plugin/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ImageMinimizerWebpackPlugin\n"),a("OutboundLink")],1),t._v("，也可以定制小工具去处理。需要注意")]),t._v(" "),a("ul",[a("li",[t._v("压缩与生产环境构建分离")]),t._v(" "),a("li",[t._v("避免重复压缩")])]),t._v(" "),a("p",[t._v("自然不需要在每次构建时进行压缩，在构建之外提前执行压缩一遍即可。结合团队的工程结构设计，应用场景对压缩参数的要求等，可以再封装一个命令行小工具，进一步减少配置量，甚至做到“免配置“一键执行。")]),t._v(" "),a("p",[t._v("其他工具:")]),t._v(" "),a("ul",[a("li",[t._v("客户端："),a("a",{attrs:{href:"https://ppduck.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PPDuck3"),a("OutboundLink")],1),t._v("，腾讯 "),a("a",{attrs:{href:"https://zhitu.isux.us/",target:"_blank",rel:"noopener noreferrer"}},[t._v("智图"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("线上工具："),a("a",{attrs:{href:"https://tinypng.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("tinypng"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("命令行: ImageMagick convert")]),t._v(" "),a("li",[t._v("UI 工具：有些 UI 工具已经自带了较好的压缩能力，导出可直接使用")])]),t._v(" "),a("p",[t._v("看团队项目情况和具体业务需要确定一套处理方式吧，反正尽量减少工作量。")]),t._v(" "),a("h2",{attrs:{id:"更小-响应式图片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更小-响应式图片"}},[t._v("#")]),t._v(" 更小 - 响应式图片")]),t._v(" "),a("p",[t._v("根据窗口大小或像素密度加载不同的图片，比如 Google 上登录后的头像就使用了响应式图片")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<img\n  class="gb_Da gbii"\n  src="https://lh3.googleusercontent.com/ogw/ADGmqu_Yag3T9kWZOzKRfpm4bveeKO06BpvZP3c9LGHg=s32-c-mo"\n  srcset="https://lh3.googleusercontent.com/ogw/ADGmqu_Yag3T9kWZOzKRfpm4bveeKO06BpvZP3c9LGHg=s32-c-mo 1x,https://lh3.googleusercontent.com/ogw/ADGmqu_Yag3T9kWZOzKRfpm4bveeKO06BpvZP3c9LGHg=s64-c-mo 2x "\n  alt=""\n  aria-hidden="true"\n  data-noaft=""\n  data-atf="1">\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("可封装通用的组件进行处理。")]),t._v(" "),a("h2",{attrs:{id:"更少请求-base64-内联"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更少请求-base64-内联"}},[t._v("#")]),t._v(" 更少请求 - base64 内联")]),t._v(" "),a("p",[t._v("Webpack 的 "),a("code",[t._v("url-loader")]),t._v(" 支持设置小图片转换为 "),a("code",[t._v("base64")]),t._v(" 内联图片。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" img "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("readFileSync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./icon_in.png'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data:image/png;base64,"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"base64"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// data:image/png;base64,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")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h2",{attrs:{id:"更少请求-懒加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更少请求-懒加载"}},[t._v("#")]),t._v(" 更少请求 - 懒加载")]),t._v(" "),a("p",[t._v("通过 js 判断出当前图片是否进入或者即将进入到可视区再进行图片加载。主要涉及到加载时机判断和加载完成之前的图片占位问题。")]),t._v(" "),a("h3",{attrs:{id:"加载条件触发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加载条件触发"}},[t._v("#")]),t._v(" 加载条件触发")]),t._v(" "),a("p",[t._v("也就是图片所在位置与视口相对位置的判断，判断进入视口有两种方式")]),t._v(" "),a("ul",[a("li",[t._v("监听滚动等事件，或者通过其他方式周期性检查所在位置，如通过 "),a("code",[t._v("getBoundingClientRect")]),t._v(" 获取相对视口的位置。"),a("a",{attrs:{href:"https://github.com/hilongjw/vue-lazyload",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-lazyload"),a("OutboundLink")],1),t._v(" 就是这么做的。")]),t._v(" "),a("li",[t._v("利用 "),a("code",[t._v("IntersectionObserver")]),t._v(" 这个 API 来设置回调，在回调中加载。 "),a("a",{attrs:{href:"https://github.com/tuupola/lazyload",target:"_blank",rel:"noopener noreferrer"}},[t._v("lazyload"),a("OutboundLink")],1),t._v(" 就是这样做的。")])]),t._v(" "),a("p",[t._v("不过"),a("code",[t._v("IntersectionObserver")]),t._v("虽然好用，但支持性仍不足，需要 polyfill。")]),t._v(" "),a("h3",{attrs:{id:"占位图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#占位图"}},[t._v("#")]),t._v(" 占位图")]),t._v(" "),a("p",[t._v("懒加载相关的一个关键内容是占位图的应用。图片尚未加载的情况下，需要展示一个占位，占位常有以下实现")]),t._v(" "),a("ul",[a("li",[t._v("结构背景图占位：像文章一类的结构特点比较鲜明的内容，可以用占位图来提升视觉体验，比如"),a("a",{attrs:{href:"https://juejin.cn/post/6961605698069381134",target:"_blank",rel:"noopener noreferrer"}},[t._v("掘金"),a("OutboundLink")],1),t._v("的文章，加载时可以看到很明显的如下占位图。")])]),t._v(" "),a("img",{attrs:{src:"https://sf3-scmcdn2-tos.pstatp.com/xitu_juejin_web/img/article-loading.fca922e.png",alt:"掘金文章占位图"}}),t._v(" "),a("ul",[a("li",[t._v("背景色占位：使用背景色占满图片空间")]),t._v(" "),a("li",[t._v("小背景图铺满：使用一个 "),a("a",{attrs:{href:"https://misc.360buyimg.com/mtd/pc/common/img/blank.png",target:"_blank",rel:"noopener noreferrer"}},[t._v("极小的纯色图片"),a("OutboundLink")],1),t._v("，通过 repeat 来铺满整个图片空间")])]),t._v(" "),a("p",[t._v("某东的占位图，就综合使用了 “背景色占位” 和 ”小背景图铺满“ 的占位方式")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("lazyimg more2_img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("//misc.360buyimg.com/mtd/pc/common/img/blank.png"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("lazyimg_img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("alt")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("周大福 520礼物 星星足金黄金耳钉 EOF58 68 约1.1克"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("最开始只有外层的 div，给 div 设置了背景颜色，然后动态添加 img 标签，设置 div 背景透明，初始化 ims src 属性为 blank.png，等到图片加载完成之后，再替换上去。不过，某东这个打包好像得优化呀，重复打包的 CSS，JS 很多。\n"),a("mg",{attrs:{src:"/images/performance/lazyload.jpg",alt:""}})],1),t._v(" "),a("h3",{attrs:{id:"css-中的懒加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-中的懒加载"}},[t._v("#")]),t._v(" CSS 中的懒加载")]),t._v(" "),a("p",[t._v("在 CSS 中，无论是 背景图片，还是字体资源，如果从未使用到，就不会下载。")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/* 顺便提一下字体，如果没有元素对应的样式使用了 "Open Sans"，对应字体文件不会加载。 */')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@font-face")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Open Sans"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string url"}},[t._v('"/fonts/OpenSans-Regular-webfont.woff2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"woff2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token url"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string url"}},[t._v('"/fonts/OpenSans-Regular-webfont.woff"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"woff"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".demo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string url"}},[t._v('"img/blank.jpg"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".demo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string url"}},[t._v('"img/hero.jpg"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("p",[t._v("如果没有元素使用了 "),a("code",[t._v(".demo")]),t._v("blank.jpg 不会加载，因此可以通过这个特点，通过切换元素 className 实现懒加载。")]),t._v(" "),a("h2",{attrs:{id:"更少请求-web-font-替代"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更少请求-web-font-替代"}},[t._v("#")]),t._v(" 更少请求 - Web Font 替代")]),t._v(" "),a("p",[t._v("使用 "),a("a",{attrs:{href:"https://www.iconfont.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("iconfont"),a("OutboundLink")],1),t._v(" 等矢量图标库来替代一些 icon 图片，比如说某东，某猫等都使用了 iconfont。")]),t._v(" "),a("h2",{attrs:{id:"其他"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),a("p",[t._v("还有其他的一些图片相关的方案")]),t._v(" "),a("ul",[a("li",[t._v("渐进式 JPEG: 按照其扫描模式，从理论上来说能够提升用户体验，但是其实消耗性能，需要综合考虑")]),t._v(" "),a("li",[t._v("LQIP/SQIP: 使用"),a("a",{attrs:{href:"https://github.com/zouhir/lqip",target:"_blank",rel:"noopener noreferrer"}},[t._v("LQIP"),a("OutboundLink")],1),t._v(" 和 "),a("a",{attrs:{href:"https://github.com/axe312ger/sqip",target:"_blank",rel:"noopener noreferrer"}},[t._v("SQIP"),a("OutboundLink")],1),t._v(" 生成低质量的，也可能提升用户体验，但是同时带来额外的加载量。")]),t._v(" "),a("li",[t._v("雪碧图：我已经舍弃了。雪碧图需要配合 CSS 使用，对 CSS 的依赖过强，且调整并不灵活，Web Fonts，SVG 等都是更灵活的替代方案。")]),t._v(" "),a("li",[t._v("删除图像元数据：适合大量照片展示类的内容")]),t._v(" "),a("li",[t._v("根据网络情况来加载不同的图片")])]),t._v(" "),a("h2",{attrs:{id:"总结与参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结与参考"}},[t._v("#")]),t._v(" 总结与参考")]),t._v(" "),a("p",[t._v("图片相关的方案很多，考虑是否必要用图片，是否应该用 Web Fonts 或者 CSS 替代，在需要图片时，可以优先考虑 WebP 和 SVG。")]),t._v(" "),a("p",[a("ref",{attrs:{links:[{link:"http://www.verexif.com/en/index.php?error=1",text:"删除图片元信息工具 verexif"},{link:"https://www.gimp.org/",text:"可编辑元信息的图片编辑器 - GIMP"},{link:"https://tinypng.com/",text:"压缩工具 tinypng"},{text:"Choose the right image format",link:"https://web.dev/choose-the-right-image-format"},{text:"Replace animated GIFs with video for faster page loads",link:"https://web.dev/replace-gifs-with-videos/"},{text:"Serve responsive images",link:"https://web.dev/serve-responsive-images/"},{text:"Lazy-loading images",link:"https://web.dev/lazy-loading-images/"},{text:"Browser-level image lazy-loading for the web",link:"https://web.dev/browser-level-image-lazy-loading/"}]}})],1)])}),[],!1,null,null,null);s.default=e.exports}}]);