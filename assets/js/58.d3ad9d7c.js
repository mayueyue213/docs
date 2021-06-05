(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{433:function(t,s,a){"use strict";a.r(s);var n=a(23),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"执行上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文"}},[t._v("#")]),t._v(" 执行上下文")]),t._v(" "),a("p",[t._v("执行上下文(Execution Contexts，简称EC)是执行一段代码时的运行环境，也可以理解为这段代码被执行时的状态描述。理解”一段“的概念很重要，这个”一段“是管理区间的划分，对应执行上下文的分类")]),t._v(" "),a("ul",[a("li",[t._v("全局执行上下文")]),t._v(" "),a("li",[t._v("函数执行上下文")]),t._v(" "),a("li",[t._v("eval执行上下文")])]),t._v(" "),a("p",[t._v("仔细思索一下，全局，函数，eval，有什么共同点？")]),t._v(" "),a("p",[a("strong",[t._v("其内部代码，在其执行时才会进行编译")])]),t._v(" "),a("p",[t._v("根据 "),a("a",{attrs:{href:"https://262.ecma-international.org/5.1/#sec-10.3",target:"_blank",rel:"noopener noreferrer"}},[t._v("ECMA规范中的定义"),a("OutboundLink")],1),t._v("，上下文由以下三个部分组成\n"),a("mg",{attrs:{src:"/images/js/ctx-composition.jpg",alt:"Execution Contexts"}}),t._v("\n变量环境和 this 可以当做对象去看待，this 对象，变量环境对象，而词法环境应该当做是一个栈去理解，词法环境栈，栈中的每一项称作词法环境对象。")],1),t._v(" "),a("h2",{attrs:{id:"变量环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量环境"}},[t._v("#")]),t._v(" 变量环境")]),t._v(" "),a("blockquote",[a("p",[t._v("Identifies the "),a("strong",[t._v("Lexical Environment")]),t._v(" whose environment record holds bindings created by "),a("strong",[a("em",[t._v("VariableStatements")])]),t._v(" and "),a("strong",[a("em",[t._v("FunctionDeclarations")])]),t._v(" within this execution context.")])]),t._v(" "),a("p",[t._v("变量环境是特殊的词法环境，它包含整个执行上下文中通过 var 和 函数声明定义的变量，不包含通过 let, const 声明的变量(变量是泛指声明的标识符)。")]),t._v(" "),a("p",[t._v("如下使用 var, let, const 声明了一些变量\n"),a("mg",{attrs:{src:"/images/js/context-0.jpg",alt:"Variable Environment example"}}),t._v("\n在右侧的"),a("code",[t._v("Scope")]),t._v("中，"),a("code",[t._v("Local")]),t._v("对应当前上下文，现在还看不出有什么特别的内容。接下来将一部分声明挪到一个"),a("code",[t._v("{}")]),t._v("块里面，如下\n"),a("mg",{attrs:{src:"/images/js/context-1.jpg",alt:"Variable Environment example"}}),t._v("\n右侧显示多了一个"),a("code",[t._v("Block")]),t._v("，在"),a("code",[t._v("{}")]),t._v("块级作用域中通过"),a("code",[t._v("var")]),t._v("声明的变量 d，被提升到了 "),a("code",[t._v("Local")]),t._v(" 里面，而通过 let 和 const 声明的，被放到一个新的"),a("code",[t._v("Block")]),t._v("中。对于都在 foo 词法作用域中的 a 和 b，根据声明方式的不同，可以拆分成两个部分")],1),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设想有这个 Block 的存在，将 b 拆分出来")]),t._v("\nBlock0"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  b"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// a 在变量环境中")]),t._v("\nVarAndFunc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  d"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("p",[t._v("根据定义，所有"),a("code",[t._v("var")]),t._v("和"),a("code",[t._v("function")]),t._v("定义的变量保存在变量环境对象中，那么执行上下文中的状态可以表示如下\n"),a("mg",{attrs:{src:"/images/js/ctx-ve.jpg",alt:"Execution Contexts"}}),t._v("\n一个执行上下文有且只有一个变量环境，所谓的变量提升是提升到哪里？就是提升到变量环境中。现在，我们已经知道通过 "),a("code",[t._v("var")]),t._v(" 声明的变量会放在哪里了，那么，")],1),t._v(" "),a("ul",[a("li",[t._v("foo 函数作用域通过 let 声明的 b 在哪里呢？")]),t._v(" "),a("li",[t._v("局部作用域"),a("code",[t._v("{}")]),t._v("中通过 let 和 const 声明的"),a("code",[t._v("c")]),t._v("和"),a("code",[t._v("e")]),t._v("，又在哪里呢？")])]),t._v(" "),a("p",[t._v("在上下文中又是以何种形式保存的呢？那就是下一节词法环境的内容了。")]),t._v(" "),a("h2",{attrs:{id:"词法环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#词法环境"}},[t._v("#")]),t._v(" 词法环境")]),t._v(" "),a("blockquote",[a("p",[t._v("Identifies the Lexical Environment used to resolve identifier references made by code within this execution context.")])]),t._v(" "),a("p",[t._v("这个描述并不容易理解，尤其是 "),a("strong",[t._v("within this execution context")]),t._v("。变量环境和执行上下文是一一对应，可以这样描述，但词法环境不与上下文一一对应，而是与词法作用域对应，这种描述就不是很便于理解了。可以简单理解为")]),t._v(" "),a("p",[a("strong",[t._v("每个词法作用域对应有一个词法环境对象，这个词法环境对象上保存了其中定义的变量。")])]),t._v(" "),a("p",[t._v("根据这个解释，函数作用域，块级作用域，都是一个词法作用域，则")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("{}")]),t._v("局部作用域，对应一个词法环境对象，保存其中定义的变量")]),t._v(" "),a("li",[t._v("函数局部作用域，对应一个词法环境对象，保存其中定义的变量")])]),t._v(" "),a("p",[t._v("但是由于 "),a("strong",[t._v("作用域嵌套")]),t._v(" 和 "),a("strong",[t._v("变量提升")]),t._v(" 的存在，事情变得不那么简单了")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" d "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" e "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[t._v("从作用域嵌套和变量提升两个角度进行分析")]),t._v(" "),a("ul",[a("li",[t._v("变量提升：由于变量提升，"),a("code",[t._v("d")]),t._v("的作用范围并不局限于"),a("code",[t._v("{}")]),t._v("。通过 var 声明的变量，是属于执行上下文级别的，而不是局部词法环境，而 "),a("txt",{attrs:{bold:"",orange:""}},[t._v("词法环境对象上只保存了使用 let, const 声明的局部变量")]),t._v("。")],1),t._v(" "),a("li",[t._v("作用域嵌套："),a("code",[t._v("foo")]),t._v(" 对应一个词法环境对象，"),a("code",[t._v("{}")]),t._v("对应一个词法环境对象，由于嵌套，需要对词法环境对象间的关系进行管理，并且由于"),a("code",[t._v("{}")]),t._v("对应的词法环境对象，只有在代码执行到其内部才有意义，因此"),a("txt",{attrs:{bold:"",orange:""}},[t._v("执行上下文中引入了词法环境栈来管理嵌套的词法环境(作用域)")]),t._v("。局部作用域就是通过这样来实现的呀。")],1)]),t._v(" "),a("p",[t._v("于是在执行到 "),a("code",[t._v("let e = 5")]),t._v(" 时，执行上下文状态可表示如下\n"),a("mg",{attrs:{src:"/images/js/ctx-le.jpg",alt:"词法环境"}}),t._v("\n词法环境栈中，可以看到")],1),t._v(" "),a("ul",[a("li",[a("code",[t._v("foo")]),t._v(" 及其嵌套块级作用域中，通过 var 声明的变量都被保存到了变量环境。")]),t._v(" "),a("li",[a("code",[t._v("foo")]),t._v(" 内，且并不在更小的局部作用域中的变量，通过"),a("code",[t._v("let")]),t._v(","),a("code",[t._v("const")]),t._v("声明的变量，保存到了栈底的一个词法环境对象。")]),t._v(" "),a("li",[t._v("在局部作用域 "),a("code",[t._v("{}")]),t._v(" 中通过"),a("code",[t._v("let")]),t._v(","),a("code",[t._v("const")]),t._v("声明的变量，保存在了一个单独的词法环境对象中，并入栈。")])]),t._v(" "),a("h2",{attrs:{id:"标识符查找"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标识符查找"}},[t._v("#")]),t._v(" 标识符查找")]),t._v(" "),a("p",[t._v("结合前面的执行上下文示意图，从词法环境栈，变量环境的角度说明标识符查找的过程。对于下面这个例子")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" d "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" e "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("66")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a + b is: '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" d "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("p",[t._v("相对前面的例子，在"),a("code",[t._v("{}")]),t._v("内增加了一个与外部作用域中同名的"),a("code",[t._v("b")]),t._v("。在输出语句“执行”时，变量 a 的 RHS 过程示意如下\n"),a("mg",{attrs:{src:"/images/js/ctx-identifier.jpg",alt:"变量a的查找过程"}}),t._v("\n对于变量 "),a("code",[t._v("b")]),t._v("，在词法环境栈的栈顶的对象就查找到了是 "),a("code",[t._v("66")]),t._v("，其他的变量查找的过程也是一样的，因此最终输出是 "),a("code",[t._v("79")]),t._v("。")],1),t._v(" "),a("p",[t._v("通过词法环境栈，可以很容易看出，同一个执行上下文中，在嵌套的作用域中，是如何实现同名变量之间的隔离的，这是局部作用域实现的关键。")]),t._v(" "),a("p",[t._v("这一小节只是说明了在同一个执行上下文中变量的查找，在执行上下文之间查找，将在作用域链和闭包相关章节进行说明。")]),t._v(" "),a("h2",{attrs:{id:"变量对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量对象"}},[t._v("#")]),t._v(" 变量对象")]),t._v(" "),a("p",[t._v("《JavaScript高级教程》里面对“变量对象”(Variable Object，简称VO)是这样描述的：")]),t._v(" "),a("blockquote",[a("p",[t._v("每个上下文都有一个关联的变量对象（variable object），而这个上下文中定义的 "),a("txt",{attrs:{bold:"",orange:""}},[t._v("所有变量和函数")]),t._v(" 都存在于这个对象上")],1)]),t._v(" "),a("p",[t._v("在没有"),a("code",[t._v("let")]),t._v("和"),a("code",[t._v("const")]),t._v("的年代，上面的描述可以等价于")]),t._v(" "),a("blockquote",[a("p",[t._v("每个上下文都有一个关联的变量对象（variable object），而这个上下文中 "),a("txt",{attrs:{bold:"",orange:""}},[t._v("var 定义的所有变量，函数声明")]),t._v(" 都存在于这个对象上")],1)]),t._v(" "),a("p",[t._v("当加入了 let 和 const，加入了块级作用域之后，这两个描述不等价了。")]),t._v(" "),a("p",[a("strong",[t._v("原来的”变量对象“就是如今的“变量环境”，如果仍要使用 “变量对象” 这个概念，那么应该仍旧按照第一个描述，仍旧是描述一个“保存上下文中定义的所有变量和函数”的对象")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"调用栈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调用栈"}},[t._v("#")]),t._v(" 调用栈")]),t._v(" "),a("p",[t._v("调用栈就是执行上下文栈，是用来管理执行上下文的。由于函数执行上下文是日常开发中的主要关注的执行上下文，可以认为调用栈是用来维护函数调用关系的。前面的例子做一些修改\n"),a("mg",{attrs:{src:"/images/js/call-stack.jpg",alt:"Call Stack"}}),t._v("\n此时执行上下文栈可表示为如下\n"),a("mg",{attrs:{src:"/images/js/call-stack-cascader.jpg",width:"300",alt:"调用栈内容示意图"}}),t._v("\n那么对于变量 "),a("code",[t._v("a")]),t._v("，显然跨了作用域，甚至是在不同的执行上下文中了，是如何查找到的呢？看起来是在 bar 执行上下文找不到，就到 foo 执行上下文找。但是真的是这样吗？")],1),t._v(" "),a("ul",[a("li",[t._v("JavaScript 采用的可是静态作用域，为何是沿着上下文找？上下文和作用域的生存期可不是一样的。")]),t._v(" "),a("li",[t._v("如果是返回了 bar，然后在外部调用，则调用时栈中已经没有 foo 的执行上下文了，又该去哪里找 "),a("code",[t._v("a")]),t._v("？")])]),t._v(" "),a("p",[t._v("此外，对于"),a("code",[t._v("Scope")]),t._v("面板中下面这一部分")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Closure (foo)\n  a: 1\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("又隐藏了多少的信息呢")]),t._v(" "),a("ul",[a("li",[t._v("这并不是我们所普遍认为的那种函数中返回函数的情况，为什么也称为 Closure？")]),t._v(" "),a("li",[t._v("Closure (foo) 里面为什么只有 a ? 为什么没有 b ?")]),t._v(" "),a("li",[t._v("Closure (foo) 与 foo 函数的作用域有什么关系？")]),t._v(" "),a("li",[t._v("Closure (foo) 是以什么形式存在？是何时产生的")])]),t._v(" "),a("p",[t._v("这看起来平平无奇的一小段代码，细究起来知识点可不少，这些问题将在闭包，作用域，和内存管理等相关文章中进行说明。")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("在引入块级作用域之前，用一个对象去保存所有变量的引用就可以了，这在以前叫做变量对象。引入块级作用域之后，由于普通块级作用域执行并不创建新的上下文，通过将变量对象拆分，用变量环境来替代原变量对象，用词法环境来隔离嵌套作用域中的同名变量，通过词法环境栈来维护变量查找顺序。")]),t._v(" "),a("p",[t._v("在执行上下文中，对于 “保存定义的变量和函数的对象”，有几个名词：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名词")]),t._v(" "),a("th",[t._v("缩写")]),t._v(" "),a("th",[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("变量对象")]),t._v(" "),a("td",[t._v("VO")]),t._v(" "),a("td",[t._v("保存"),a("strong",[t._v("上下文")]),t._v("中定义的"),a("strong",[t._v("所有变量")]),t._v("的对象")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("变量环境")]),t._v(" "),a("td",[t._v("VE")]),t._v(" "),a("td",[t._v("保存"),a("strong",[t._v("上下文")]),t._v("中定义的"),a("strong",[t._v("所有 var 声明 变量和函数标识符")]),t._v("的对象")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("词法环境")]),t._v(" "),a("td",[t._v("LE")]),t._v(" "),a("td",[t._v("保存"),a("strong",[t._v("作用域")]),t._v("中定义的"),a("strong",[t._v("所有 let, const 声明 变量和函数标识符")]),t._v("的对象")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);