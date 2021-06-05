(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{528:function(s,t,a){"use strict";a.r(t);var e=a(23),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css"}},[s._v("#")]),s._v(" CSS")]),s._v(" "),a("h2",{attrs:{id:"预处理器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预处理器"}},[s._v("#")]),s._v(" 预处理器")]),s._v(" "),a("p",[s._v("stylus, less 和 scss，我的选择范围只有 less 和 scss。")]),s._v(" "),a("p",[s._v("stylus & sass: 我倾向于用 {}，我个人选择不使用这两个；")]),s._v(" "),a("p",[s._v("less vs scss: 平时使用我并不关注两者的区别，我也倾向于使用两者的公共部分即可；")]),s._v(" "),a("h2",{attrs:{id:"flex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex"}},[s._v("#")]),s._v(" flex")]),s._v(" "),a("p",[s._v("关于 flex，有几个可参考的链接")]),s._v(" "),a("p",[s._v("初学者除了看 MDN 文档，可以做做这个小游戏\n"),a("a",{attrs:{href:"https://github.com/thomaspark/flexboxfroggy",target:"_blank",rel:"noopener noreferrer"}},[s._v("flexboxfroggy"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("深入了解使用，可以读读这个工具的源码，比较巧妙的结合使用了CSS属性选择器")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/lzxb/flex.css",target:"_blank",rel:"noopener noreferrer"}},[s._v("lzxb/flex.css"),a("OutboundLink")],1)])]),s._v(" "),a("p",[s._v("开发时如果如何使用功能有些模糊的时候，我就扫一下 阮一峰 的两篇文章")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Flex 布局教程：语法篇"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/07/flex-examples.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Flex 布局教程：实例篇"),a("OutboundLink")],1)])]),s._v(" "),a("p",[s._v("对于新版的 Chrome 浏览器，对于 flex 相关属性的使用，在开发者 Styles 面板会有对应的图形示意，让人眼前一亮。在熟悉之后使用，或许不再需要看其他文章了。")]),s._v(" "),a("h2",{attrs:{id:"postcss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#postcss"}},[s._v("#")]),s._v(" postcss")]),s._v(" "),a("p",[s._v("根据官方的描述")]),s._v(" "),a("blockquote",[a("p",[s._v("PostCSS is a tool for transforming styles with JS plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more.")])]),s._v(" "),a("p",[s._v("很多人都说 PostCSS 是一个用来进行 CSS 转换的工具，我觉得这很不具体，我们为什么用的是 autoprefixer，是 postcss-loader。\npostcss-loader 的使用示例如下")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  test"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\.less$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("i")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  use"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"css-loader"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"less-loader"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      loader"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"postcss-loader"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      options"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("虽然 postcss 源码并不是很复杂，但我并无兴趣仔细研究，只略微一看，验证猜测。不管是 autoprefixer 还是其他的插件，要做转换，就需要有语法分析的过程，我只当")]),s._v(" "),a("ul",[a("li",[s._v("postcss：这个库本身，它是一个通用的基础转换工具，负责解析生成 AST；")]),s._v(" "),a("li",[s._v("PostCSS：基于 postcss 的解析功能的一些列工具集的统称")])]),s._v(" "),a("h2",{attrs:{id:"css-in-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-in-js"}},[s._v("#")]),s._v(" CSS in  JS")]),s._v(" "),a("h2",{attrs:{id:"css-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-module"}},[s._v("#")]),s._v(" CSS Module")])])}),[],!1,null,null,null);t.default=r.exports}}]);