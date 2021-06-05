(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{503:function(e,r,t){"use strict";t.r(r);var s=t(23),a=Object(s.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"dhcp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dhcp"}},[e._v("#")]),e._v(" DHCP")]),e._v(" "),t("p",[e._v("动态主机配置协议(Dynamic Host Configuration Protocol)，用于局域网 IP 自动分配。新设备加入网络时，基本流程如下\n"),t("mg",{attrs:{src:"/images/networking/dhcp.jpg",alt:"DHCP流程"}})],1),e._v(" "),t("ol",[t("li",[e._v("DHCP Discover: 新主机以 "),t("code",[e._v("0.0.0.0")]),e._v(" 为 IP 地址，广播发送一个请求，这里关键是带上了 MAC 地址。")]),e._v(" "),t("li",[e._v("DHCP Offer: DHCP 服务器收到消息，广播回复，这里会带上服务器的 MAC 和 IP。")]),e._v(" "),t("li",[e._v("DHCP Request: 新主机收到广播，发现是给自己分配 IP 的消息，很愉快地接收了，给 DHCP 服务器回复说接受 Offer 了。注意这一步仍是广播的，因为 DHCP Server 也并不一定是唯一的，需要告诉其他 Server，它已经接受某个公司提供的 Offer 了。")]),e._v(" "),t("li",[e._v("DHCP ACK: 服务器收到确认，招到一个满意的新员工，它也很高兴。正式登记，再次大喊一声，广而告之(虽然其他人不怎么关注就是了)，欢迎新主机加入。")])]),e._v(" "),t("p",[e._v("可以通过"),t("code",[e._v("nmap")]),e._v("模拟一下")]),e._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("nmap --script broadcast-dhcp-discover\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("其中 DHCP Offer 响应如下\n"),t("mg",{attrs:{src:"/images/networking/dhcp-capture.jpg",alt:"DHCP Offer"}}),e._v("\n从中可以看到 IP 的有效期是 "),t("code",[e._v("2 hours")]),e._v("。客户机在租期过去 50%，即 1 小时之后，会向 HTTP Server 请求续租，直接向为其提供 IP 的 DHCP Server 发送 DHCP Request，尝试使用原来的同一个 IP，这个时候客户机和服务器之间就不用广播了。")],1),e._v(" "),t("p",[e._v("了解基本过程，知道连接 wifi 的时候大概是个什么过程即可。这个过程，还蛮有意思的，跟求职的过程类似。")])])}),[],!1,null,null,null);r.default=a.exports}}]);