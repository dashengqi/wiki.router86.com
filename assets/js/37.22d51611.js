(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{460:function(a,s,t){"use strict";t.r(s);var e=t(15),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[a._v("注意")]),a._v(" "),t("p",[a._v("本文只适用于 OpenWRT 系统")])]),a._v(" "),t("h2",{attrs:{id:"找不到后台登陆地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#找不到后台登陆地址"}},[a._v("#")]),a._v(" 找不到后台登陆地址？")]),a._v(" "),t("h3",{attrs:{id:"能连接显示器和键盘"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#能连接显示器和键盘"}},[a._v("#")]),a._v(" 能连接显示器和键盘")]),a._v(" "),t("p",[a._v("如果能连接显示器和键盘，就登录输入命令")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ifconfig br-lan\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("输出的 ip 就是登录地址。")]),a._v(" "),t("h3",{attrs:{id:"不能连接显示器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不能连接显示器"}},[a._v("#")]),a._v(" 不能连接显示器")]),a._v(" "),t("p",[a._v("不能连接显示器，就断开软路由和其他设备的连接，只留一个电脑插 LAN 口，然后电脑网络设置为 DHCP 模式。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://file.sm9.top/item/5f714164160a154a67f9a01e.png",alt:""}})]),a._v(" "),t("p",[a._v("等一会或者重新拔插网线，看详细信息")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://file.sm9.top/item/5f714164160a154a67f9a01b.png",alt:""}})]),a._v(" "),t("p",[a._v("网关就是管理后台的地址。")]),a._v(" "),t("h2",{attrs:{id:"怎么修改管理地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#怎么修改管理地址"}},[a._v("#")]),a._v(" 怎么修改管理地址？")]),a._v(" "),t("h3",{attrs:{id:"可以在浏览器登录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可以在浏览器登录"}},[a._v("#")]),a._v(" 可以在浏览器登录")]),a._v(" "),t("p",[a._v("如果能登陆到后台，就直接修改，在网络 - 接口 - LAN 口选项卡中。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://file.sm9.top/item/5f714164160a154a67f9a025.png",alt:""}})]),a._v(" "),t("h3",{attrs:{id:"不能在浏览器登录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不能在浏览器登录"}},[a._v("#")]),a._v(" 不能在浏览器登录")]),a._v(" "),t("p",[a._v("如果因为特殊原因不能正常登录到后台，如果可以接显示器和键盘，可以临时修改 LAN 口地址，然后再登录到后台。")]),a._v(" "),t("p",[a._v("连接显示器和键盘，登录，输入命令")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ifconfig br-lan 192.168.1.1\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("然后连接电脑，打开浏览器，使用 ip  "),t("code",[a._v("192.168.1.1")]),a._v("  登录到后台，按照上面的步骤修改。")]),a._v(" "),t("h3",{attrs:{id:"不想开浏览器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不想开浏览器"}},[a._v("#")]),a._v(" 不想开浏览器")]),a._v(" "),t("p",[a._v("连接显示器或者 ssh 连接到后台")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("## 查看当前 IP\nifconfig br-lan\n\n## 修改 IP，注意要修改为你自己的，其中 192.168.1.1 为原本的 ip，192.168.1.101 为想要设置的 ip\nsed -i \"s/option ipaddr '192.168.1.1'/option ipaddr '192.168.1.101'/g\" /etc/config/network\n\n## 重启网卡\nservice network restart\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br")])]),t("hr")])}),[],!1,null,null,null);s.default=r.exports}}]);