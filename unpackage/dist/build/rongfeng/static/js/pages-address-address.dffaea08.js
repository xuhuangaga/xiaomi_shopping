(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-address-address"],{"03e7":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return a}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"p-10 bc-w head p-f z wbfb",class:[{"f-a-c":!t.isCenter},{"f-j-b":t.isCenter},{"t-w":t.isCenter}],style:{"background-color":t.bgc}},[t.isBack?n("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}},[n("v-uni-image",{staticClass:"back",attrs:{src:"/static/back.png"}})],1):t._e(),n("v-uni-view",{staticClass:"m-l10 title",class:{"t-a-c":t.isCenter}},[t._v(t._s(t.title))]),t._t("right")],2)},s=[]},"0998":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.ads-dv[data-v-55e71834]{padding-top:%?100?%}',""]),t.exports=e},"0b1c":function(t,e,n){"use strict";var a=n("9ee1"),r=n.n(a);r.a},1894:function(t,e,n){"use strict";var a=n("b913"),r=n.n(a);r.a},"1a68":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return a}));var a={ccAddressList:n("6330").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"bc-e"},[n("Head",{attrs:{isBack:!0,bgc:"#F3f4f5",title:"地址列表"}}),n("v-uni-view",{staticClass:"ads-dv p-10"},[t.list.length?n("cc-address-list",{attrs:{addButtonColor:"#Ff6c18",tagColor:"#Ff6c18",value:t.chosenAddressId,list:t.list,"default-tag-text":"默认"},on:{select:function(e){arguments[0]=e=t.$handleEvent(e),t.select.apply(void 0,arguments)},add:function(e){arguments[0]=e=t.$handleEvent(e),t.add.apply(void 0,arguments)},edit:function(e){arguments[0]=e=t.$handleEvent(e),t.edit.apply(void 0,arguments)}}}):t._e(),t.list.length?t._e():n("v-uni-view",[n("cc-address-list",{attrs:{addButtonColor:"#Ff6c18",tagColor:"#Ff6c18",value:t.chosenAddressId,list:t.list,"default-tag-text":"默认"},on:{add:function(e){arguments[0]=e=t.$handleEvent(e),t.add.apply(void 0,arguments)},edit:function(e){arguments[0]=e=t.$handleEvent(e),t.edit.apply(void 0,arguments)}}})],1)],1)],1)},s=[]},"1fc1":function(t,e,n){"use strict";n.r(e);var a=n("1a68"),r=n("ef3f");for(var s in r)"default"!==s&&function(t){n.d(e,t,(function(){return r[t]}))}(s);n("1894");var i,d=n("f0c5"),c=Object(d["a"])(r["default"],a["b"],a["c"],!1,null,"55e71834",null,!1,a["a"],i);e["default"]=c.exports},"7da8":function(t,e,n){"use strict";n.r(e);var a=n("ee77"),r=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e["default"]=r.a},8396:function(t,e,n){"use strict";var a=n("4ea4");n("d81d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("5530")),s=a(n("971a")),i=a(n("0644")),d=n("2f62"),c=(0,d.createNamespacedHelpers)("users"),u=c.mapActions,o=c.mapState,f={components:{Head:s.default},props:{},data:function(){return{chosenAddressId:"",list:[]}},methods:(0,r.default)({select:function(t){uni.getStorageSync("isOrders")&&(uni.setStorageSync("defaultAddress",t.item),uni.navigateTo({url:"/pages/orders/orders"}))},add:function(){uni.navigateTo({url:"/pages/editAddress/editAddress"})},edit:function(t){uni.navigateTo({url:"/pages/editAddress/editAddress?item=".concat(JSON.stringify(t.item))})}},u(["getAddress"])),created:function(){this.getAddress(this.user._id)},mounted:function(){},onLoad:function(){},onShow:function(){},filters:{},computed:(0,r.default)({user:function(){return uni.getStorageSync("userInfo")}},o(["addressList"])),watch:{addressList:function(t){var e=this;t&&t.length&&(t.map((function(t){t.isDefault&&(e.chosenAddressId=t.id),e.$set(t,"id",t.id),e.$set(t,"name",t.username),e.$set(t,"tel",t.mobile),e.$set(t,"isDefault",t.isDefault),e.$set(t,"addressDetail",t.detailAddress),e.$set(t,"address",t.address)})),this.list=(0,i.default)(t))}}};e.default=f},"971a":function(t,e,n){"use strict";n.r(e);var a=n("03e7"),r=n("7da8");for(var s in r)"default"!==s&&function(t){n.d(e,t,(function(){return r[t]}))}(s);n("0b1c");var i,d=n("f0c5"),c=Object(d["a"])(r["default"],a["b"],a["c"],!1,null,"a678ae0a",null,!1,a["a"],i);e["default"]=c.exports},"9ee1":function(t,e,n){var a=n("dec9");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("5466d780",a,!0,{sourceMap:!1,shadowMode:!1})},b913:function(t,e,n){var a=n("0998");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("fe37f1e0",a,!0,{sourceMap:!1,shadowMode:!1})},dec9:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.back[data-v-a678ae0a]{width:%?40?%;height:%?40?%}.title[data-v-a678ae0a]{margin-top:%?-10?%}.t-w[data-v-a678ae0a]{width:95%}',""]),t.exports=e},ee77:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={components:{},props:{isBack:{type:Boolean},title:{type:String,default:"小米Lite"},bgc:{type:String,default:"#fff"},isCenter:{type:Boolean,default:!1}},data:function(){return{}},methods:{goBack:function(){uni.navigateBack()}},mounted:function(){},onLoad:function(){},onShow:function(){},filters:{},computed:{},watch:{}};e.default=a},ef3f:function(t,e,n){"use strict";n.r(e);var a=n("8396"),r=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e["default"]=r.a}}]);