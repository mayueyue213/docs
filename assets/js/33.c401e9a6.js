(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{371:function(t,a,s){"use strict";s.r(a);var e=s(41),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"叙述逻辑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#叙述逻辑"}},[t._v("#")]),t._v(" 叙述逻辑")]),t._v(" "),s("p",[t._v("对于一个最简单的例子")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  el"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  template"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<div class=\"header\">hello</div>'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("最终是要生成这样一段 html，在页面上把这个 hello 给展示出来")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("header"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("hello"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("开始是一个 template 字符串，最终变成页面上的一段文案，完整的 Vue 应用生成的过程，就在其中了。")]),t._v(" "),s("p",[t._v("本系列文档叙述的基本顺序，就是依据这个从模板到页面这个过程确定的，根据调用栈去了解各个步骤，去了解涉及到的各模块。")]),t._v(" "),s("h2",{attrs:{id:"叙述顺序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#叙述顺序"}},[t._v("#")]),t._v(" 叙述顺序")]),t._v(" "),s("p",[t._v("首先是项目的源码目录结构，然后是"),s("code",[t._v("Vue")]),t._v("构造函数本身，然后是根据"),s("code",[t._v("new Vue")]),t._v("实例化过程中涉及的各个模块，去学习说明。")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("整体结构\n说明源码目录结构，Vue的大体面貌，new Vue的过程。")])]),t._v(" "),s("li",[s("p",[t._v("编译过程\n说明Vue模板编译过程，从template到编译过程三个步骤，到代码生成的过程")])]),t._v(" "),s("li",[s("p",[t._v("渲染过程\n说明 编译结果 -> VDOM -> DOM 的过程\n\x3c!--")])]),t._v(" "),s("li",[s("p",[t._v("更新过程\n详细说明patch，diff，说明组件更新的逻辑")])]),t._v(" "),s("li",[s("p",[t._v("生命周期\n单独讲解各个生命周期的具体意义，相邻的生命周期之间是以什么为具体界限，比如beforeCreate和created这两个时机，差异在哪里？")])]),t._v(" "),s("li",[s("p",[t._v("SSR\n说明Vue SSR相关的原理以及应用")])]),t._v(" "),s("li",[s("p",[t._v("VueRouter")])]),t._v(" "),s("li",[s("p",[t._v("VueX")])]),t._v(" "),s("li",[s("p",[t._v("拓展")])]),t._v(" "),s("li",[s("p",[t._v("API")])]),t._v(" "),s("li",[s("p",[t._v("Nuxt\n概括说明Nuxt框架 --\x3e")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);