(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-productlist-productlist"],{4905:function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={ccLoadMore:i("e59c").default,ccMask:i("7129").default},s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"p-r z"},[i("Head",{attrs:{isBack:!0,bgc:"#F3f4f5"}}),i("Top",{attrs:{keyword:t.value,isFocus:!0},on:{search:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.input.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.focus.apply(void 0,arguments)}}})],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"z p-f bc-w wbfb"},[t.searchListAll?i("List",{attrs:{searchListAll:t.searchListAll},on:{search:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)}}}):t._e()],1),i("v-uni-view",{staticClass:"p-10",staticStyle:{"z-index":"-1"}},[i("v-uni-scroll-view",{staticClass:"h-vh",attrs:{"scroll-y":!0},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.scrolltolower.apply(void 0,arguments)}}},[t._l(t.list,(function(e,n){return i("v-uni-view",{key:n,staticClass:"f-a-c b-b",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goto(e._id)}}},[i("v-uni-view",{staticClass:"p-10"},[i("v-uni-image",{staticStyle:{width:"200rpx",height:"200rpx"},attrs:{src:e.cover}})],1),i("v-uni-view",{staticClass:"m-l"},[i("v-uni-view",{},[t._v(t._s(e.name))]),i("v-uni-view",{staticClass:"f-c-9 f-s12 sl-two m-t-b5"},[t._v(t._s(e.introduction))]),i("v-uni-view",{staticClass:"f-a-c"},[i("v-uni-view",{staticClass:"price"},[t._v("￥"+t._s(e.presentPrice))]),i("v-uni-view",{staticClass:"f-c-9 o-price f-s12 m-l10"},[t._v("￥"+t._s(e.originalPrice))])],1)],1)],1)})),i("cc-load-more",{attrs:{loading:t.loading,text:t.text}})],2)],1),i("v-uni-view",[i("cc-mask",{attrs:{show:t.isShow,zIndex:1},on:{"update:show":function(e){arguments[0]=e=t.$handleEvent(e),t.isShow=e}}})],1)],1)},a=[]},"7ece":function(t,e,i){"use strict";var n=i("ddca"),s=i.n(n);s.a},9806:function(t,e,i){"use strict";i.r(e);var n=i("b373"),s=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=s.a},"9bdc":function(t,e,i){"use strict";i.r(e);var n=i("4905"),s=i("9806");for(var a in s)"default"!==a&&function(t){i.d(e,t,(function(){return s[t]}))}(a);i("7ece");var r,c=i("f0c5"),o=Object(c["a"])(s["default"],n["b"],n["c"],!1,null,"eeee08bc",null,!1,n["a"],r);e["default"]=o.exports},b373:function(t,e,i){"use strict";var n=i("4ea4");i("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=n(i("5530")),a=n(i("b81d")),r=n(i("971a")),c=n(i("6877")),o=i("2f62"),u=(0,o.createNamespacedHelpers)("product"),l=u.mapActions,h=u.mapState,d={components:{Top:a.default,Head:r.default,List:c.default},props:{},data:function(){return{value:"",isShow:!1,current:1,pageSize:20,loading:!1,text:"上拉加载更多",total:0,list:[]}},methods:(0,s.default)({scrolltolower:function(){this.list.length!=this.total&&(this.text="加载中",this.loading=!0,this.current+=1,this.getSearch({current:this.current,pageSize:this.pageSize,query:this.value}))},goto:function(t){uni.navigateTo({url:"/pages/details/details?id=".concat(t)})},focus:function(t){this.isShow=t},input:function(t){this.value=t,this.getSearchAll({query:t}),this.getSearch({current:this.current,pageSize:this.pageSize,query:t})},search:function(t){t&&(this.value=t,this.$utils.saveHistory({key:"search",data:t}),this.getSearch({current:this.current,pageSize:this.pageSize,query:t}))}},l(["getHot","getSearch","getSearchAll"])),mounted:function(){},onLoad:function(t){this.value=t.keyword,this.getSearch({current:this.current,pageSize:this.pageSize,query:t.keyword})},onShow:function(){},filters:{},computed:(0,s.default)({},h(["hot","searchList","searchListAll","searchTotal"])),watch:{searchTotal:function(t){t&&(this.total=t)},searchList:function(t){1===this.current?this.list=t:this.list=this.list.concat(t),this.list.length===this.total?(this.text="没有更多了",this.loading=!1):this.text="上拉加载更多"}}};e.default=d},d363:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.price[data-v-eeee08bc]{color:#ff6c18}.o-price[data-v-eeee08bc]{text-decoration:line-through}',""]),t.exports=e},ddca:function(t,e,i){var n=i("d363");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=i("4f06").default;s("4c0b2390",n,!0,{sourceMap:!1,shadowMode:!1})}}]);