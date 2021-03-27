(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{414:function(t,a,s){"use strict";s.r(a);var n=s(41),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"update"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#update"}},[t._v("#")]),t._v(" update")]),t._v(" "),s("p",[t._v("根据 "),s("doc-link",{attrs:{name:"watcher"}}),t._v(" 中的说明，"),s("code",[t._v("Watcher")]),t._v("实例化的过程会主动调用"),s("code",[t._v("updateComponent")])],1),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("updateComponent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hydrating"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("code",[t._v("updateComponent")]),t._v("会调用"),s("code",[t._v("vm._update")]),t._v("，这就是本文研究的内容。")]),t._v(" "),s("h2",{attrs:{id:"vm-update"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vm-update"}},[t._v("#")]),t._v(" vm._update")]),t._v(" "),s("p",[t._v("定义在 "),s("file",{attrs:{name:"lifecycle"}})],1),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("_update")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("vnode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" VNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  hydrating"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" boolean")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" vm"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Component "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" prevEl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$el\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" prevVnode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_vnode\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" restoreActiveInstance "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setActiveInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_vnode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vnode\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Vue.prototype.__patch__ is injected in entry points")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// based on the rendering backend used.")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("prevVnode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// initial render")]),t._v("\n    vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$el "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__patch__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vnode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hydrating"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* removeOnly */")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$el "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__patch__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prevVnode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vnode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("restoreActiveInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// update __vue__ reference")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prevEl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    prevEl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__vue__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 释放对旧vm的引用")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__vue__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vm "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 更新对vm的引用")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// if parent is an HOC, update its $el as well")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$vnode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$parent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$vnode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$parent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_vnode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$parent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$el "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$el\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// updated hook is called by the scheduler to ensure that children are")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// updated in a parent's updated hook.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("首先用"),s("code",[t._v("prevVnode")]),t._v("保存对"),s("code",[t._v("vm._vnode")]),t._v("的引用，这个"),s("code",[t._v("vm._vnode")]),t._v("是用来标记是否已经渲染过，即是"),s("code",[t._v("update")]),t._v("还是"),s("code",[t._v("initial")]),t._v("，其赋值的位置"),s("code",[t._v("prevVnode")]),t._v("定义的下方，因此初次进来执行的是第一个"),s("code",[t._v("__patch__")]),t._v("，然后下面更新了"),s("code",[t._v("__vue__")]),t._v("的引用。")]),t._v(" "),s("p",[t._v("这里还用到了"),s("code",[t._v("vm.$el")]),t._v("作为 patch 的参数，对于根节点，在 "),s("code",[t._v("initial")]),t._v(" 时，"),s("code",[t._v("$el")]),t._v(" 会被设置为 "),s("code",[t._v("el")]),t._v(" 属性对应的 DOM 元素，而对于其他节点，在 "),s("code",[t._v("initial")]),t._v(" vm.$el 为 "),s("code",[t._v("undefined")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("总结来说，这里的"),s("code",[t._v("update")]),t._v("其实包含了"),s("code",[t._v("initial")]),t._v("和"),s("code",[t._v("update")]),t._v("两种情况，初始化时主动调用了一次，根据不同情况采用不同的"),s("code",[t._v("__patch__")]),t._v("方式来更新"),s("code",[t._v("$el")]),t._v("。")])])}),[],!1,null,null,null);a.default=e.exports}}]);