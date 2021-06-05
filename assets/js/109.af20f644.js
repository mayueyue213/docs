(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{535:function(s,t,n){"use strict";n.r(t);var a=n(23),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"vue-构造函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue-构造函数"}},[s._v("#")]),s._v(" Vue 构造函数")]),s._v(" "),n("p",[s._v("根据 "),n("code",[s._v("new Vue")]),s._v(" 调用，可以猜测到 "),n("code",[s._v("Vue")]),s._v(" 大概是这样的一个结构")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nVue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("xxx "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("yyy "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" b\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("相对于 Java 等语言类的写法，JavaScript 这种写法其实不便于观察这个 “类” 的整体面貌。")]),s._v(" "),n("p",[s._v("本文的目标就在于说明 "),n("code",[s._v("Vue")]),s._v(" 构造函数及 "),n("code",[s._v("Vue.prototype")]),s._v(" 本身的定义，说说 "),n("strong",[s._v("那些"),n("code",[s._v("new Vue")]),s._v("之前的事情。")])]),s._v(" "),n("h2",{attrs:{id:"构造函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#构造函数"}},[s._v("#")]),s._v(" 构造函数")]),s._v(" "),n("p",[s._v("Vue 构造函数定义在 "),n("file",{attrs:{name:"instance"}})],1),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" initMixin "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./init'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" stateMixin "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./state'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" renderMixin "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./render'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" eventsMixin "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./events'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" lifecycleMixin "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./lifecycle'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" warn "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../util/index'")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Vue")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("options")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("process"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("env"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NODE_ENV")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'production'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("instanceof")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("warn")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Vue is a constructor and should be called with the `new` keyword'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("_init")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("initMixin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("stateMixin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("eventsMixin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("lifecycleMixin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("renderMixin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" Vue\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("p",[s._v("根据经验，可以知道这堆 "),n("strong",[s._v("xxxxMixin")]),s._v(" 是对"),n("code",[s._v("Vue")]),s._v("构造函数或者其原型进行设置。")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("initMixin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("stateMixin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("eventsMixin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("lifecycleMixin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("renderMixin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("此处进行了很好的模块划分，但是通过这些源码，我们仍旧难以对"),n("code",[s._v("Vue")]),s._v("这个“类”形成一个完整的印象，需要深入进去看，才会知道每个模块给"),n("code",[s._v("Vue")]),s._v("或者"),n("code",[s._v("Vue.prototype")]),s._v("加了些什么内容。")]),s._v(" "),n("p",[s._v("只是直接看源码是不够的，可以通过 "),n("strong",[s._v("断点调试")]),s._v(" 和 "),n("strong",[s._v("源码阅读")]),s._v(" 相结合，通过直接查看各步骤 ”运行时“ 结果，快速了解各模块所作所为。如下，当我们在"),n("code",[s._v("vue.js")]),s._v("最底部添加断点时，我们可以直接看到 "),n("code",[s._v("Vue")]),s._v(" 的全貌\n"),n("mg",{attrs:{src:"/images/vue/vue.jpg",alt:"Vue",width:"600"}}),s._v("\n熟悉的同学应该很快就能看出来，这里大部分的属性就是官方文档所说的 "),n("strong",[s._v("全局 API")]),s._v("，比如"),n("code",[s._v("Vue.use")]),s._v("，"),n("code",[s._v("Vue.extend")]),s._v("。")],1),s._v(" "),n("p",[n("code",[s._v("Vue.prototype")]),s._v("的内容如下\n"),n("mg",{attrs:{src:"/images/vue/vue-prototype-1.jpg",alt:"Vue.prototype",width:"600"}})],1),s._v(" "),n("p",[n("code",[s._v("$xxx")]),s._v("属性是官方文档里面说的那些实例 API，包括实例属性，数据方法和事件方法等等。")]),s._v(" "),n("p",[n("code",[s._v("_xxx")]),s._v("都是方法，是在编译，渲染等过程中使用的一些方法。对于"),n("code",[s._v("_xxx")]),s._v("，在这里稍微提一下，它可以分成两个部分")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("_init")]),s._v("，"),n("code",[s._v("_render")]),s._v("，"),n("code",[s._v("_patch")]),s._v("，"),n("code",[s._v("_update")]),s._v("是四个非常重要的内部方法，每一个就代表着一大块核心的功能，这几个在后面是需要单独讲解的；")]),s._v(" "),n("li",[s._v("其他的"),n("code",[s._v("_x")]),s._v("方法，是一些工具方法，可以在其右边看到它更容易理解的方法名，比如说"),n("code",[s._v("createTextVNode")]),s._v("就是创建一个文本的虚拟DOM节点；")])]),s._v(" "),n("p",[s._v("当然，这里只是在"),n("code",[s._v("new Vue")]),s._v("之前，我们可以看到"),n("code",[s._v("Vue")]),s._v("和"),n("code",[s._v("Vue.prototype")]),s._v("的定义，在实例化过程中，还会添加一些其他方法，比如说"),n("code",[s._v("$createElement")]),s._v("的别名"),n("code",[s._v("_c")]),s._v("这个最知名的方法。")]),s._v(" "),n("h2",{attrs:{id:"断点调试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#断点调试"}},[s._v("#")]),s._v(" 断点调试")]),s._v(" "),n("p",[s._v("前面我们通过在"),n("code",[s._v("vue.js")]),s._v("最末尾断点，快速了解了"),n("code",[s._v("Vue")]),s._v("和"),n("code",[s._v("Vue.prototype")]),s._v("的整体面貌，同样的方式，我们可以通过断点快速了解各个模块大概做了什么。如下在 stateMixin 行断点")]),s._v(" "),n("mg",{attrs:{src:"/images/vue/init-mixin.jpg",alt:"initMixin",width:"600"}}),s._v(" "),n("p",[s._v("在 "),n("code",[s._v("Scope")]),s._v(" 面板可以看到，"),n("code",[s._v("Vue.prototype")]),s._v(" 上有一个"),n("code",[s._v("_init")]),s._v("方法，这便是 "),n("code",[s._v("initMixin")]),s._v(" 添加的内容。")]),s._v(" "),n("p",[s._v("下面概括展示一下各个"),n("code",[s._v("mixin")]),s._v("模块做了什么")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Vue")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("options")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("_init")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// initMixin")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("_init")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("options"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Object")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* ... */")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// stateMixin")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$data "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_data\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$props "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_props\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$set "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" set\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" del\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("$watch")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// eventsMixin")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$on\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$once\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$off\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$emit\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// lifecycleMixin")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_update\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$forceUpdate\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$destroy\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// renderMixin")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$nextTick\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_render\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br")])]),n("p",[s._v("上面只是最里层的"),n("code",[s._v("instance-entry")]),s._v("拓展的内容内容，外面的三层"),n("code",[s._v("entry")]),s._v("增加的内容如下")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// src/core/index.js")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$isServer\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$ssrContext\nVue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("FunctionalRenderContext\nVue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("version "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'__VERSION__'")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// src/platforms/web/entry-runtime.js")]),s._v("\nVue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mustUseProp "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" mustUseProp\nVue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("isReservedTag "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" isReservedTag\nVue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("isReservedAttr "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" isReservedAttr\nVue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("getTagNamespace "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" getTagNamespace\nVue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("isUnknownElement "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" isUnknownElement\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("extend")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("directives"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" platformDirectives"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("extend")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("components"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" platformComponents"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("__patch__ "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" inBrowser "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" patch "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" noop\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$mount\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// src/platforms/web/entry-runtime-with-compiler.js")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" mount "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$mount\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("$mount")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("el"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" string "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Element"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  hydrating"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" boolean")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Component "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nVue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("compile "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" compileToFunctions\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br")])]),n("p",[s._v("综合以上，就可以得到一个较为完整的"),n("code",[s._v("Vue")]),s._v("构造函数的形象，并且大概知道各个"),n("code",[s._v("mixin")]),s._v("，各级"),n("code",[s._v("entry")]),s._v("是做了什么。")]),s._v(" "),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),n("p",[s._v("从阅读的角度，我一般将源码分为 iife(为了和通常意义上的 IIFE 函数区分，记为小写) 和 runtime 两个部分，举例来说")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nVue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("xxx "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("yyy "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" b\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("iife 就是会直接执行部分，比如说这里 Vue 函数的定义，Vue.xxx 和 Vue.prototype.yyy 的赋值。runtime 部分主要是指函数，对于函数，如果不是 IIFE 函数，在快速阅读时就可以跳过。其实就是从上往下，根据执行顺序来查看。")]),s._v(" "),n("p",[s._v("我们可以通过 iife 部分快速了解宏观面貌，形成一个比较形象的认知，然后再通过 runtime 部分实时断点调试，去了解主要的模块，去把握关键的细节。")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("iife 部分：既然"),n("code",[s._v("Vue")]),s._v("本身是个构造函数，我们就可以推测到其定义的基本流程和形式，可以通过对 iife 部分的快速浏览，对整体的定义形成一个”类“的形象。")])]),s._v(" "),n("li",[n("p",[s._v("runtime 部分：通过断点调试，可以直观地了解各个"),n("code",[s._v("entry")]),s._v("、"),n("code",[s._v("mixin")]),s._v("大概功能。")])])])],1)}),[],!1,null,null,null);t.default=e.exports}}]);