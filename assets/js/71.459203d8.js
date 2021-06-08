(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{508:function(s,a,t){"use strict";t.r(a);var n=t(23),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"作用域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#作用域"}},[s._v("#")]),s._v(" 作用域")]),s._v(" "),t("p",[s._v("作用域是变量的可访问范围，是一套存储和查找变量的规则。")]),s._v(" "),t("ul",[t("li",[s._v("存储：变量归属于谁。定义的这个变量，放在谁家，归谁管，这对应作用域的分类问题。JavaScript 中有全局作用域、块级作用域和函数作用域。")]),s._v(" "),t("li",[s._v("查找：我到哪里去找我要的变量？如何在不同的归属地之间查找的规则，这对应作用域链相关的内容。")])]),s._v(" "),t("h2",{attrs:{id:"静态作用域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#静态作用域"}},[s._v("#")]),s._v(" 静态作用域")]),s._v(" "),t("p",[s._v("在描述 JS 的几类作用域之前，先介绍一些静态作用域和动态作用域的概念。\n静态作用域 也叫 词法作用域，与之相对的是动态作用域。JavaScript 使用的是词法作用域，词法作用域关注在 "),t("strong",[s._v("何处声明")]),s._v("，查找的时候，由声明的位置开始去查找标识符")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" value "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 12")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" value "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("在以上代码中，两次输出都是"),t("code",[s._v("12")]),s._v("。在"),t("code",[s._v("bar")]),s._v("定义了"),t("code",[s._v("var value = 24")]),s._v("然后调用了"),t("code",[s._v("foo")]),s._v("，但是在"),t("code",[s._v("foo")]),s._v("中输出的是外部的"),t("code",[s._v("value")]),s._v("。对于"),t("code",[s._v("value")]),s._v("的查找，是根据其声明的位置去查找的，在"),t("code",[s._v("foo")]),s._v("中未查找到，则向"),t("code",[s._v("foo")]),s._v("所在的父级作用域查找。")]),s._v(" "),t("h2",{attrs:{id:"动态作用域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#动态作用域"}},[s._v("#")]),s._v(" 动态作用域")]),s._v(" "),t("p",[s._v("bash 使用的是动态作用域，有的文章会说")]),s._v(" "),t("blockquote",[t("p",[s._v("动态作用域关注的是在何处调用")])]),s._v(" "),t("p",[s._v("也就是说，如果在 foo 函数中未找到 value 标识符，则向 foo 函数调用的执行环境中查找。")]),s._v(" "),t("p",[s._v("这和静态作用域的标识符查找过程形成了鲜明对比，但是并不准确。看这个 bash 的例子")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("value")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$value")]),s._v('"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("bar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("value")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  foo\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nfoo\nbar\nfoo\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("p",[s._v("输出是 12 , 24 , 24 。如果按照前面说的解释，第 3 个  foo  调用，应该输出 12 才对，然而并不是。关键不在于在何处调用，而在 bar 中是修改了外部定义的 value 而不是定义了局部的 value。")]),s._v(" "),t("p",[s._v("对于动态作用域，可以理解为它只有一个全局的变量环境，声明的所有标识符都存在一个对象上。不管在哪里修改"),t("code",[s._v("value")]),s._v("，都是改的同一个变量，它没有局部作用域的概念。在静态作用域中，在函数中"),t("code",[s._v("var value = 24")]),s._v("是声明一个局部的变量，而在动态作用域中，"),t("code",[s._v("value=24")]),s._v("只是一个重新赋值而已。")]),s._v(" "),t("h2",{attrs:{id:"块级作用域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#块级作用域"}},[s._v("#")]),s._v(" 块级作用域")]),s._v(" "),t("p",[t("strong",[s._v("块级作用域(block scope)")]),s._v("，就是在"),t("code",[s._v("{}")]),s._v("中形成的一个独立的词法空间，是一个比函数更小级别的局部变量空间。函数作用域对应有函数执行上下文，而块级作用域并没有块级执行上下文。")]),s._v(" "),t("p",[s._v("块级作用域在执行上下文中表现为词法环境栈中的一个 "),t("strong",[s._v("词法环境对象")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" b "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" c "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" d "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" e "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[t("code",[s._v("{}")]),s._v("对应的词法环境将持有"),t("code",[s._v("c")]),s._v(" 和 "),t("code",[s._v("e")]),s._v("。当"),t("code",[s._v("{}")]),s._v("中没有 let，const 声明的时候，所谓的块级作用域，也就没有什么意义了。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" b "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" c "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" d "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" e "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("这个时候 "),t("code",[s._v("{}")]),s._v(" 中所有的变量都会提升到执行上下文的 变量环境中，这个 "),t("strong",[s._v("块级")]),s._v("，也就没有了存在的意义。")]),s._v(" "),t("h2",{attrs:{id:"函数作用域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数作用域"}},[s._v("#")]),s._v(" 函数作用域")]),s._v(" "),t("p",[s._v("函数作用域的理解，关键还是在于理解执行上下文")]),s._v(" "),t("ul",[t("li",[s._v("变量提升，是提升到函数级别，提升到执行上下文中的变量环境")]),s._v(" "),t("li",[s._v("函数执行时有独立的执行上下文")])]),s._v(" "),t("p",[s._v("从执行上下文的角度看，函数作用域，只是其一部分，是其上变量存储结构和查找规则。")]),s._v(" "),t("ul",[t("li",[s._v("存储结构：变量环境，词法环境，词法环境栈")]),s._v(" "),t("li",[s._v("查找规则：执行上下文中，从词法环境栈顶，到变量环境")])]),s._v(" "),t("h2",{attrs:{id:"作用域链"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#作用域链"}},[s._v("#")]),s._v(" 作用域链")]),s._v(" "),t("p",[s._v("作用域链，就是作用域一个个串成链嘛...JavaScript采用的是静态作用域，作用域链就是根据静态作用域标识符查找的规则，去查找变量时，能够经过的一个个作用域，根据先后顺序串起来形成的链。")]),s._v(" "),t("p",[s._v("在 "),t("RouterLink",{attrs:{to:"/docs/manual/javascript/ctx.html#标识符查找"}},[s._v("执行上下文-标识符查找")]),s._v(" 一节，已经介绍过单个函数执行上下文中标识符查找的过程。看下面的例子，了解一下涉及多个执行上下文的作用域嵌套的情况\n"),t("mg",{attrs:{src:"/images/js/call-stack.jpg",alt:"Call Stack"}}),s._v("\n对于 bar 中的 RHS，先在 bar 函数作用域中查找，如果未找到，则继续在 bar 所在的词法作用域(即foo)中查找。一个很自然的想法是，在上下文之间增加一个 outer 引用，引用栈中的前一个执行上下文\n"),t("mg",{attrs:{src:"/images/js/lookup.jpg",alt:"Itentifier Lookup",width:"600"}}),s._v("\n咋一看是很能解释得通的，我也曾经陷于这种认识。"),t("txt",{attrs:{red:"",bold:""}},[s._v("但这是不对的，是解释不通的。")]),s._v(" 作用域虽然与执行上下文紧密相关，但是要始终记得，标识符的查找，是沿着作用域链，而非执行上下文栈。在作用域链中，需要却确实有一个 outer 引用，但不是上下文之间，而是作用域之间，如 "),t("a",{attrs:{href:"https://262.ecma-international.org/5.1/#sec-10.2.1",target:"_blank",rel:"noopener noreferrer"}},[s._v("ECMA"),t("OutboundLink")],1),s._v(" 所述")],1),s._v(" "),t("blockquote",[t("p",[s._v("A Lexical Environment consists of an Environment Record and a possibly null reference to an outer Lexical Environment.")])]),s._v(" "),t("p",[s._v("每个词法环境有一个 outer 属性引用外层的词法环境。其实就是 parent scope 的概念。如下\n"),t("mg",{attrs:{src:"/images/js/scope-outer.jpg",alt:"作用域之间的 outer引用","no-shadow":""}})],1),s._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),t("p",[s._v("作用域是变量的可访问范围，是一套存储和查找变量的规则。作用域链就是根据静态作用域标识符查找的规则，去查找变量时，能够经过的一个个作用域，根据先后顺序串起来形成的链。")]),s._v(" "),t("p",[s._v("JavaScript 采用的是静态作用域，每个词法作用域都可以理解为以下这样一个对象")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("outer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// parent scope reference")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("在单个执行上下文中，确实可以从执行上下文的变量环境，词法环境的角度去确定查找的过程，去理解局部作用域的实现。但是不要把作用域链和执行上下文栈给搞混，作用域和执行上下文不是一一对应的，因而作用域也无法和变量对象一一对应。")])])}),[],!1,null,null,null);a.default=e.exports}}]);