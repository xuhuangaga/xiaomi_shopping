(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"135c":function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,".content[data-v-7272aa3a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.logo[data-v-7272aa3a]{height:%?200?%;width:%?200?%;margin-top:%?200?%;margin-left:auto;margin-right:auto;margin-bottom:%?50?%}.text-area[data-v-7272aa3a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.title[data-v-7272aa3a]{font-size:%?36?%;color:#8f8f94}.i-nav-dv[data-v-7272aa3a]{\nmargin-top:10px\n}.notice[data-v-7272aa3a]{top:70px;\nwidth:93%!important\n}",""]),t.exports=n},"1e13":function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return a}));var a={ccSwiper:e("dc08").default},r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("v-uni-view",{staticClass:"ban-dv p-r"},[e("cc-swiper",{staticClass:"i-cc-swiper",attrs:{list:t.banner},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleClick.apply(void 0,arguments)}}})],1)],1)},i=[]},"297e":function(t,n,e){"use strict";e.r(n);var a=e("365f"),r=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=r.a},"2c0b":function(t,n,e){"use strict";e.r(n);var a=e("3aca"),r=e("3fd6");for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);e("556e");var c,o=e("f0c5"),s=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"7272aa3a",null,!1,a["a"],c);n["default"]=s.exports},"307f":function(t,n,e){"use strict";e.r(n);var a=e("7f13"),r=e("6b33");for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);e("a2d5");var c,o=e("f0c5"),s=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"001e9e8c",null,!1,a["a"],c);n["default"]=s.exports},"31f2":function(t,n,e){"use strict";var a=e("4f99"),r=e.n(a);r.a},3271:function(t,n,e){"use strict";var a=e("4ea4");e("d81d"),e("a434"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(e("5530")),i=a(e("54ac")),c=a(e("5afa")),o=a(e("4621")),s=a(e("45d5")),u=a(e("377a")),d=a(e("307f")),f=a(e("9cfb")),l=e("2f62"),v=(0,l.createNamespacedHelpers)("home"),p=v.mapActions,h=v.mapState,b={components:{Top:i.default,TopWX:c.default,Banner:o.default,Nav:s.default,News:u.default,Tabs:d.default,Goods:f.default},data:function(){return{isHide:!1,show:!0,notices:[]}},onLoad:function(){this.getBanner(),this.getNav(),this.getNews(),this.getRecommendNav(),this.getNotice()},onPageScroll:function(t){},methods:(0,r.default)({clickRight:function(){this.show=!1},del:function(t){this.navGoods.splice(t,1)},change:function(t){this.getNavGoods(t)}},p(["getBanner","getNav","getNews","getRecommendNav","getNavGoods","getNotice"])),computed:(0,r.default)({},h(["news","banner","nav","recommendNav","navGoods","notice"])),watch:{recommendNav:function(t){t&&t.length&&this.getNavGoods(t[0]._id)},notice:function(t){var n=this;t&&t.map((function(t){n.notices.push(t.content)}))}}};n.default=b},"333a":function(t,n,e){"use strict";e.r(n);var a=e("9893e"),r=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=r.a},"365f":function(t,n,e){"use strict";e("caad"),e("2532"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={components:{},props:{isHide:{type:Boolean,default:!1}},data:function(){return{value:""}},methods:{goto:function(t){t.includes("my")?uni.switchTab({url:t}):uni.navigateTo({url:t})}},mounted:function(){},onLoad:function(){},onShow:function(){},filters:{},computed:{},watch:{}};n.default=a},"377a":function(t,n,e){"use strict";e.r(n);var a=e("c513"),r=e("fba3");for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);e("e91c");var c,o=e("f0c5"),s=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"35c749ad",null,!1,a["a"],c);n["default"]=s.exports},3873:function(t,n,e){"use strict";var a=e("6034"),r=e.n(a);r.a},"3aca":function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return a}));var a={ccNoticeBar:e("0c18").default},r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"bc-e"},[t.show?e("cc-notice-bar",{staticClass:"z p-f wbfb notice",attrs:{volume:!0,closeable:!0},on:{clickRight:function(n){arguments[0]=n=t.$handleEvent(n),t.clickRight.apply(void 0,arguments)}}},[t._v(t._s(t.notices.join(" ")))]):t._e(),e("Top"),e("Banner",{attrs:{banner:t.banner}}),e("v-uni-view",{staticClass:"p-l-r10 i-nav-dv"},[e("Nav",{attrs:{nav:t.nav}})],1),e("News",{attrs:{news:t.news}}),e("Tabs",{attrs:{recommendNav:t.recommendNav},on:{change:function(n){arguments[0]=n=t.$handleEvent(n),t.change.apply(void 0,arguments)}}}),e("Goods",{attrs:{navGoods:t.navGoods},on:{del:function(n){arguments[0]=n=t.$handleEvent(n),t.del.apply(void 0,arguments)}}})],1)},i=[]},"3fd6":function(t,n,e){"use strict";e.r(n);var a=e("3271"),r=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=r.a},"450d":function(t,n,e){var a=e("96e2");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=e("4f06").default;r("3aa2cdf4",a,!0,{sourceMap:!1,shadowMode:!1})},"45d5":function(t,n,e){"use strict";e.r(n);var a=e("5044"),r=e("fe9e");for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);e("31f2");var c,o=e("f0c5"),s=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"732bfa03",null,!1,a["a"],c);n["default"]=s.exports},4621:function(t,n,e){"use strict";e.r(n);var a=e("1e13"),r=e("333a");for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);e("3873");var c,o=e("f0c5"),s=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"248f78ed",null,!1,a["a"],c);n["default"]=s.exports},"4df0":function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return a}));var a={ccSticky:e("67ca").default,ccSearch:e("9d39").default},r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("cc-sticky",{attrs:{offsetTop:-2,"z-index":"1000"}},[e("v-uni-view",{staticClass:"p-10 f-j-b i-top"},[e("v-uni-image",{attrs:{src:"/static/logo.png"}}),e("v-uni-view",{staticClass:"f-3 m-l5 t-header-cc-search"},[e("cc-search",{attrs:{value:t.value,placeholder:"请输入商品名称"},on:{"update:value":function(n){arguments[0]=n=t.$handleEvent(n),t.value=n},focus:function(n){arguments[0]=n=t.$handleEvent(n),t.goto("/pages/search/search")}},scopedSlots:t._u([{key:"action",fn:function(){return[e("v-uni-image",{staticClass:"m-l10",attrs:{src:"/static/icon-user.png"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goto("/pages/my/my")}}})]},proxy:!0}])})],1)],1)],1)},i=[]},"4f99":function(t,n,e){var a=e("6af1");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=e("4f06").default;r("6907e471",a,!0,{sourceMap:!1,shadowMode:!1})},5044:function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return a}));var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.nav?e("v-uni-view",{staticClass:"bc-w br-10 p-10"},[e("v-uni-view",{staticClass:"f-w f-j-b nav-dv"},t._l(t.nav,(function(n,a){return e("v-uni-view",{key:a},[e("v-uni-view",{staticClass:"img-dv",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goto(a)}}},[e("v-uni-image",{staticClass:"wbfb hbfb",attrs:{src:n.url}})],1)],1)})),1)],1):t._e()},i=[]},"54ac":function(t,n,e){"use strict";e.r(n);var a=e("4df0"),r=e("e93b");for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);e("7d08");var c,o=e("f0c5"),s=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"088bf159",null,!1,a["a"],c);n["default"]=s.exports},"556e":function(t,n,e){"use strict";var a=e("9216"),r=e.n(a);r.a},"56cd":function(t,n,e){var a=e("84bb");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=e("4f06").default;r("ea15084e",a,!0,{sourceMap:!1,shadowMode:!1})},"57aa":function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return a}));var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-scroll-view",{staticClass:"hbfb",attrs:{"scroll-y":!0}},[e("v-uni-view",{staticClass:"f-j-b p-10 f-w"},t._l(t.navGoods,(function(n,a){return e("v-uni-view",{key:a,staticClass:"p-r t-p-item m-b10 bc-w br-10 p-10",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goto(n._id)}}},[e("v-uni-image",{staticClass:"t-p-del bc-w yd",attrs:{src:"/static/del.png"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.del(a)}}}),e("v-uni-image",{staticClass:"wbfb",attrs:{src:n.cover,"lazy-load":"true"}}),e("v-uni-view",{staticClass:"t-p-name sl-two lh25"},[t._v(t._s(n.name))]),e("v-uni-view",{staticClass:"f-w-b f-s16 t-p-price m-t-b10"},[t._v("￥"+t._s(n.presentPrice))]),e("v-uni-view",{staticClass:"f-s12 f-c-9 o-price"},[t._v("￥"+t._s(n.originalPrice))])],1)})),1)],1)},i=[]},"5afa":function(t,n,e){"use strict";e.r(n);var a=e("edbf"),r=e("297e");for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);e("7e23");var c,o=e("f0c5"),s=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"046d8b2c",null,!1,a["a"],c);n["default"]=s.exports},6034:function(t,n,e){var a=e("6351");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=e("4f06").default;r("a249ef40",a,!0,{sourceMap:!1,shadowMode:!1})},6351:function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.bb[data-v-248f78ed]{width:100%;height:140px;position:absolute;z-index:1;overflow:hidden}.bb[data-v-248f78ed]::after{content:"";width:120%;height:100px;position:absolute;left:-10%;top:0;z-index:-1;border-radius:0 0 60% 60%;background:#ff4d00!important}',""]),t.exports=n},"6af1":function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.nav-dv .img-dv[data-v-732bfa03]{width:%?130?%;height:%?130?%}',""]),t.exports=n},"6b33":function(t,n,e){"use strict";e.r(n);var a=e("e164"),r=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=r.a},"6d33":function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.t-search-b[data-v-046d8b2c]{background-color:#fff!important}.t-search[data-v-046d8b2c]{background-color:#ff5700;height:%?116?%;padding:%?24?% %?0?% %?0?% %?20?%}.t-search .ts-idv[data-v-046d8b2c]{width:%?30?%;height:%?30?%;border-radius:%?20?%;padding:%?12?%}',""]),t.exports=n},7187:function(t,n,e){"use strict";var a=e("56cd"),r=e.n(a);r.a},"7d08":function(t,n,e){"use strict";var a=e("91d5"),r=e.n(a);r.a},"7e23":function(t,n,e){"use strict";var a=e("9111"),r=e.n(a);r.a},"7f13":function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return a}));var a={ccSticky:e("67ca").default},r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("cc-sticky",{attrs:{"offset-top":120,"z-index":"1000"}},[e("v-uni-scroll-view",{attrs:{"scroll-x":!0,"show-scrollbar":"true"}},[e("v-uni-view",{staticClass:"f t-dv m-t10 w-f-c"},[e("v-uni-view",{staticClass:"i-tabs f-a-c f-1"},t._l(t.recommendNav,(function(n,a){return e("v-uni-view",{key:a,staticClass:"t-item m-r10",class:t.active===a?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.change(a,n._id)}}},[e("v-uni-view",{staticClass:"f-s16 t-a-c t-name"},[t._v(t._s(n.name))]),e("v-uni-view",{staticClass:"m-t10 f-s12 f-c-9 t-a-c t-desc"},[t._v(t._s(n.desc))])],1)})),1)],1)],1)],1)},i=[]},"84bb":function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.t-p-item[data-v-313781cc]{width:43%}.t-p-item uni-image[data-v-313781cc]{height:%?400?%}.t-p-item .t-p-del[data-v-313781cc]{width:%?30?%;height:%?30?%;position:absolute;right:%?10?%;top:%?10?%;z-index:3}.t-p-item .t-p-price[data-v-313781cc]{color:#ff6c18}.t-p-item .o-price[data-v-313781cc]{text-decoration:line-through}',""]),t.exports=n},"8b0e":function(t,n,e){var a=e("c1e0");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=e("4f06").default;r("45c67112",a,!0,{sourceMap:!1,shadowMode:!1})},9111:function(t,n,e){var a=e("6d33");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=e("4f06").default;r("5ebe70c7",a,!0,{sourceMap:!1,shadowMode:!1})},"91d5":function(t,n,e){var a=e("a0ab");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=e("4f06").default;r("410e7960",a,!0,{sourceMap:!1,shadowMode:!1})},9216:function(t,n,e){var a=e("135c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=e("4f06").default;r("ed502200",a,!0,{sourceMap:!1,shadowMode:!1})},"96e2":function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.img[data-v-35c749ad]{height:%?200?%;border-radius:%?10?%}.n-name[data-v-35c749ad]{width:%?200?%}.n-name1[data-v-35c749ad]{width:%?200?%}.middle[data-v-35c749ad]{margin:0 %?20?%}',""]),t.exports=n},"9893e":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={components:{},props:{banner:{type:Array}},data:function(){return{}},methods:{handleClick:function(t){t.item.link&&window.open(t.item.link,"_blank")}},mounted:function(){},onLoad:function(){},onShow:function(){},filters:{},computed:{},watch:{}};n.default=a},"9cfb":function(t,n,e){"use strict";e.r(n);var a=e("57aa"),r=e("e3b1");for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);e("7187");var c,o=e("f0c5"),s=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"313781cc",null,!1,a["a"],c);n["default"]=s.exports},a0ab:function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.i-top[data-v-088bf159]{background-color:#f3f4f5}.i-top uni-image[data-v-088bf159]{width:25px;height:25px}',""]),t.exports=n},a2d5:function(t,n,e){"use strict";var a=e("8b0e"),r=e.n(a);r.a},b919:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={components:{},props:{news:{type:Array}},data:function(){return{}},methods:{goto:function(t){uni.navigateTo({url:"/pages/details/details?id=".concat(t)})}},mounted:function(){},onLoad:function(){},onShow:function(){},filters:{},computed:{},watch:{}};n.default=a},c1e0:function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.t-dv[data-v-001e9e8c]{background-color:#f3f4f5}.t-dv .i-tabs[data-v-001e9e8c]{padding:%?20?% %?0?% %?40?% %?20?%}.t-dv .i-tabs .t-item[data-v-001e9e8c]{width:%?150?%}.t-dv .i-tabs .t-item[data-v-001e9e8c]:last-child{margin-right:0!important}.t-dv .i-tabs .t-desc[data-v-001e9e8c]{padding:%?6?% %?0?%}.t-dv .i-tabs .active .t-name[data-v-001e9e8c]{color:#ff6c18}.t-dv .i-tabs .active .t-desc[data-v-001e9e8c]{background-color:#ff6c18;color:#fff;border-radius:%?40?%}',""]),t.exports=n},c513:function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return a}));var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"bc-w p-10 m-t10"},[e("v-uni-view",{staticClass:"f-w-b f-s16 f-c-6"},[t._v("人气上新")]),e("v-uni-view",{staticClass:"f-j-a m-t10"},t._l(t.news,(function(n,a){return e("v-uni-view",{key:a,class:[0===a?"f-2":"f-1",1===a?"middle":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goto(n._id)}}},[e("v-uni-view",{staticClass:"bc-e p-10 img"},[e("v-uni-image",{staticClass:"wbfb hbfb",attrs:{src:n.cover}})],1),e("v-uni-view",{staticClass:"f-j-c"},[e("v-uni-view",{staticClass:"m-t10 sl-one n-name"},[t._v(t._s(n.name))])],1)],1)})),1)],1)},i=[]},e164:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={components:{},props:{recommendNav:{type:Array}},data:function(){return{active:0}},methods:{change:function(t,n){this.active=t,this.$emit("change",n)}},mounted:function(){},onLoad:function(){},onShow:function(){},filters:{},computed:{},watch:{}};n.default=a},e39e:function(t,n,e){"use strict";e("caad"),e("2532"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={components:{},props:{},data:function(){return{value:""}},methods:{goto:function(t){t.includes("my")?uni.switchTab({url:t}):uni.navigateTo({url:t})}},mounted:function(){},onLoad:function(){},onShow:function(){},filters:{},computed:{},watch:{}};n.default=a},e3b1:function(t,n,e){"use strict";e.r(n);var a=e("f029"),r=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=r.a},e42d:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={components:{},props:{nav:{type:Array}},data:function(){return{}},methods:{goto:function(t){t||uni.navigateTo({url:"/pages/seckill/seckill"})}},mounted:function(){},onLoad:function(){},onShow:function(){},filters:{},computed:{},watch:{}};n.default=a},e91c:function(t,n,e){"use strict";var a=e("450d"),r=e.n(a);r.a},e93b:function(t,n,e){"use strict";e.r(n);var a=e("e39e"),r=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=r.a},edbf:function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return a}));var a={ccSticky:e("67ca").default,ccSearch:e("9d39").default},r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("cc-sticky",[e("v-uni-view",{staticClass:"t-search f-a-c",class:{"t-search-b":t.isHide}},[e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!t.isHide,expression:"!isHide"}],staticClass:"bc-w ts-idv"},[e("v-uni-image",{staticClass:"wbfb hbfb",attrs:{src:"/static/logo.png"}})],1),e("v-uni-view",{staticClass:"wx-cc-search-dv"},[e("cc-search",{attrs:{round:!0,value:t.value,showAction:!1,placeholder:"请输入商品名称"},on:{"update:value":function(n){arguments[0]=n=t.$handleEvent(n),t.value=n},focus:function(n){arguments[0]=n=t.$handleEvent(n),t.goto("/pages/search/search")}}})],1)],1)],1)},i=[]},f029:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={components:{},props:{navGoods:{type:Array}},data:function(){return{}},methods:{del:function(t){this.$emit("del",t)},goto:function(t){uni.navigateTo({url:"/pages/details/details?id=".concat(t)})}},mounted:function(){},onLoad:function(){},onShow:function(){},filters:{},computed:{},watch:{}};n.default=a},fba3:function(t,n,e){"use strict";e.r(n);var a=e("b919"),r=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=r.a},fe9e:function(t,n,e){"use strict";e.r(n);var a=e("e42d"),r=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=r.a}}]);