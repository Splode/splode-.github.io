webpackJsonp([0],{0:function(t,e){},"0ip0":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col",staticStyle:{"margin-top":"8em"}},[n("div",{staticClass:"ButtonIcon ButtonIcon--small ButtonIcon--light mx-auto",on:{click:function(e){t.updateState(null,"appWolfmap","slideDown")}}},[n("icon",{attrs:{name:"arrow-up",scale:".85"}})],1)])]),t._v(" "),n("div",{staticClass:"row Detail"},[n("div",{staticClass:"col-1 Detail-button"},[n("div",{staticClass:"ButtonIcon ButtonIcon--small ButtonIcon--light",on:{click:function(e){t.updateState(t.prevDetail,"appWolfDetail")}}},[n("icon",{attrs:{name:"arrow-left",scale:".85"}})],1)]),t._v(" "),n("div",{staticClass:"col-10"},[n("img",{attrs:{src:"./static/images/"+t.wolfState.currentDetail.image,alt:t.wolfState.currentDetail.title}})]),t._v(" "),n("div",{staticClass:"col-1 Detail-button"},[n("div",{staticClass:"ButtonIcon ButtonIcon--small ButtonIcon--light",on:{click:function(e){t.updateState(t.nextDetail,"appWolfDetail","slideUp")}}},[n("icon",{attrs:{name:"arrow-right",scale:".85"}})],1)])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-6 Detail-desc"},[n("h2",[t._v(t._s(t.wolfState.currentDetail.title))]),t._v(" "),n("p",[t._v(t._s(t.wolfState.currentDetail.description))])])])])},i=[],o={render:a,staticRenderFns:i};e.a=o},"28lb":function(t,e){},"65Hf":function(t,e,n){"use strict";var a=n("JER+"),i=n("KxHe"),o=n("VU/8"),s=o(a.a,i.a,null,null,null);e.a=s.exports},"7U/O":function(t,e){},"7WPe":function(t,e,n){"use strict";var a=n("pADT"),i=n.n(a),o=n("D4uH"),s=n("M4fF");e.a={components:{Icon:o.a},data:function(){return{content:i.a}},computed:{nextDetail:function(){var t=this.content.wolf.mapDetail,e=this.getDetailIndex(this.wolfState.currentDetail.name);return e===t.length-1?this.content.wolf.mapDetail[0]:(e+=1,this.content.wolf.mapDetail[e])},prevDetail:function(){var t=this.content.wolf.mapDetail,e=this.getDetailIndex(this.wolfState.currentDetail.name);return 0===e?(e=t.length-1,this.content.wolf.mapDetail[e]):(e-=1,this.content.wolf.mapDetail[e])},wolfState:function(){return this.$store.getters.wolfState}},methods:{getDetailIndex:function(t){return s.findIndex(this.content.wolf.mapDetail,{name:t})},updateState:function(t,e,n){var a={parent:"wolfmap",updates:{currentDetail:t,currentView:e,detailAnimation:n||"fade"}};this.$store.dispatch("updateProps",a)}},watch:{wolfState:function(t){console.dir("changed"+t)}}}},"8y8H":function(t,e){},"C+Kl":function(t,e,n){t.exports=n.p+"static/img/wolf-explore.715d513.jpg"},D4uH:function(t,e,n){"use strict";function a(t){n("z0na")}var i=n("dXrS"),o=n("O9Aw"),s=n("VU/8"),r=a,c=s(i.a,o.a,r,null,null);e.a=c.exports},DIQl:function(t,e){t.exports={navigation:[{title:"View the Gallery",slug:"gallery",defaultView:{parent:"",view:""}},{title:"Explore the Wolf",slug:"explore-the-wolf",defaultView:{parent:"wolfmap",view:"appWolfmap"}},{title:"Landscape",slug:"landscape",defaultView:{parent:"",view:""}},{title:"About",slug:"about",defaultView:{parent:"",view:""}},{title:"Donors",slug:"donors",defaultView:{parent:"",view:""}}]}},Fp3t:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"100vh"},style:{overflow:t.overflow}},[n("app-audio",{attrs:{src:"./static/audio/"+t.content.wolf.audio}}),t._v(" "),n("app-background",{attrs:{backgroundImg:"./static/images/"+t.content.wolf.backgroundImg}}),t._v(" "),n("transition",{attrs:{name:t.wolfState.detailAnimation,mode:"out-in"},on:{enter:function(e){t.overflow="hidden"},leave:function(e){t.overflow="auto"}}},[n(t.wolfState.currentView,{tag:"component"})],1)],1)},i=[],o={render:a,staticRenderFns:i};e.a=o},IrbJ:function(t,e,n){t.exports=n.p+"static/img/lww-logo.5a1b264.png"},"J+zU":function(t,e,n){"use strict";var a=n("ajzF"),i=n("ntC0"),o=n("VU/8"),s=o(a.a,i.a,null,null,null);e.a=s.exports},"JER+":function(t,e,n){"use strict";var a=n("aSYd"),i=n("pADT"),o=n.n(i);e.a={components:{appAudio:a.a},data:function(){return{content:o.a}}}},KxHe:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("app-audio",{attrs:{src:t.content.wolf.audioPath}})],1)},i=[],o={render:a,staticRenderFns:i};e.a=o},L3XS:function(t,e){},LHKt:function(t,e,n){"use strict";function a(t){n("SXpd")}var i=n("UG0K"),o=n("WfXp"),s=n("VU/8"),r=a,c=s(i.a,o.a,r,"data-v-6afde558",null);e.a=c.exports},M93x:function(t,e,n){"use strict";var a=n("xJD8"),i=n("o/oP"),o=n("VU/8"),s=o(a.a,i.a,null,null,null);e.a=s.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i=n("M93x"),o=n("YaEn"),s=n("wtEF"),r=n("8y8H");n.n(r),n("CFm9"),n("vDhf"),n("FE82"),n("inJg"),n("nZeE"),n("CHnS"),n("vXMS");n("MU8w"),a.a.config.productionTip=!1,new a.a({el:"#app",router:o.a,template:"<App/>",components:{App:i.a},store:s.a})},O9Aw:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{class:t.clazz,style:t.style,attrs:{version:"1.1",role:t.label?"img":"presentation","aria-label":t.label,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:t.box}},[t._t("default",[t.icon&&t.icon.paths?t._l(t.icon.paths,function(e){return n("path",t._b({},"path",e,!1))}):t._e(),t._v(" "),t.icon&&t.icon.polygons?t._l(t.icon.polygons,function(e){return n("polygon",t._b({},"polygon",e,!1))}):t._e(),t._v("\b\n    "),t.icon&&t.icon.raw?[n("g",{domProps:{innerHTML:t._s(t.icon.raw)}})]:t._e()])],2)},i=[],o={render:a,staticRenderFns:i};e.a=o},PD49:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t._m(0),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-10 mx-auto"},[a("svg",{staticClass:"ie",staticStyle:{"enable-background":"new 0 0 2376.8 1394.1"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 2376.8 1394.1","xml:space":"preserve"}},[a("g",{attrs:{id:"Layer_1"}},[a("image",{staticStyle:{overflow:"visible","enable-background":"new"},attrs:{width:"1110",height:"651","xlink:href":n("C+Kl"),transform:"matrix(2.1413 0 0 2.1413 -2.594803e-02 4.424129e-02)"}})]),t._v(" "),a("g",{attrs:{id:"Layer_2"}},[a("rect",{staticClass:"st0",attrs:{x:"953",y:"968","fill-opacity":"0.25",width:"656",height:"426.1"},on:{click:function(e){t.updateState("wolf-pup")}}})])]),t._v(" "),a("img",{attrs:{src:"http://via.placeholder.com/200x100"}})])])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-10 col-md-8 col-lg-6 mx-auto Blurb"},[n("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi diam nisl, vehicula vel nunc maximus, faucibus pellentesque\n        nibh. Sed sed pharetra erat, ut laoreet diam. Praesent volutpat egestas nulla in pharetra.")])])])}],o={render:a,staticRenderFns:i};e.a=o},Pfam:function(t,e){},Q2yr:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"container-fluid Background",style:{backgroundImage:"url("+t.backgroundImg+")"}})},i=[],o={render:a,staticRenderFns:i};e.a=o},QtNj:function(t,e,n){"use strict";function a(t){n("Pfam")}var i=n("UKqF"),o=n("Q2yr"),s=n("VU/8"),r=a,c=s(i.a,o.a,r,"data-v-30e68776",null);e.a=c.exports},SXpd:function(t,e){},UG0K:function(t,e,n){"use strict";var a=n("DIQl"),i=n.n(a),o=n("D4uH");e.a={components:{Icon:o.a},data:function(){return{siteConfig:i.a,isOpen:!1}},methods:{changeView:function(t){var e=t.defaultView.parent,n=t.defaultView.view,a={parent:e,key:"currentView",value:n};e&&""!==n&&this.$store.dispatch("setProp",a)},toggleMenu:function(){this.isOpen=!this.isOpen}}}},UKqF:function(t,e,n){"use strict";e.a={props:["backgroundImg"]}},WfXp:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"container-fluid Navbar"},[a("transition",{attrs:{name:"slideIn"}},[t.isOpen?a("div",{staticClass:"Navbar-menu Navbar-menu--mobile d-lg-none"},[a("ul",{staticClass:"Navbar-menu-list Navbar-menu-list--mobile"},t._l(t.siteConfig.navigation,function(e,n){return a("li",{key:n,on:{click:function(e){t.toggleMenu()}}},[a("router-link",{attrs:{to:e.slug}},[t._v(t._s(e.title))])],1)}))]):t._e()]),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-8 col-sm-6 col-lg-4"},[a("router-link",{attrs:{to:"index"}},[a("img",{attrs:{src:n("IrbJ"),alt:""}})])],1),t._v(" "),a("div",{staticClass:"col-4 col-sm-6 col-lg-8 Navbar-menu"},[a("div",{staticClass:"Navbar-menu-toggle d-lg-none",on:{click:function(e){t.toggleMenu()}}},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[t.isOpen?a("icon",{key:"close",attrs:{name:"close",scale:"1.5"}}):a("icon",{key:"open",attrs:{name:"bars",scale:"1.5"}})],1)],1),t._v(" "),a("div",{staticClass:"Navbar-menu Navbar-menu--desktop d-none d-lg-flex"},[a("ul",{staticClass:"Navbar-menu-list Navbar-menu-list--desktop"},t._l(t.siteConfig.navigation,function(e,n){return a("li",{key:n,on:{click:function(n){t.changeView(e)}}},[a("router-link",{attrs:{to:e.slug}},[t._v(t._s(e.title))])],1)}))])])])])],1)},i=[],o={render:a,staticRenderFns:i};e.a=o},YaEn:function(t,e,n){"use strict";var a=n("7+uW"),i=n("/ocq"),o=n("65Hf"),s=n("gjgT"),r=n("J+zU");a.a.use(i.a),e.a=new i.a({routes:[{path:"/",name:"index",component:o.a},{path:"/explore-the-wolf",name:"Explore the Wolf",component:s.a},{path:"/landscape",name:"Landscape",component:r.a}]})},aLra:function(t,e,n){"use strict";var a=n("D4uH");e.a={components:{Icon:a.a},props:["src"],data:function(){return{isPlaying:!0}},computed:{audio:function(){return this.getAudio("ambient")}},methods:{getAudio:function(t){return document.getElementById(t)},increaseVolume:function(){var t=this,e=setInterval(function(){t.audio.volume<.9?t.audio.volume+=.01:clearTimeout(e)},50)},initAudio:function(){this.audio.volume=0,this.audio.play(),this.increaseVolume()},toggleAudio:function(){this.isPlaying?(this.audio.pause(),this.isPlaying=!1):(this.audio.play(),this.isPlaying=!0)}},mounted:function(){}}},aSYd:function(t,e,n){"use strict";function a(t){n("28lb")}var i=n("aLra"),o=n("ekSW"),s=n("VU/8"),r=a,c=s(i.a,o.a,r,"data-v-408f3ebe",null);e.a=c.exports},ajzF:function(t,e,n){"use strict";var a=n("aSYd"),i=n("QtNj"),o=n("pADT"),s=n.n(o);e.a={components:{appAudio:a.a,appBackground:i.a},data:function(){return{content:s.a}}}},dXrS:function(t,e,n){"use strict";var a=n("7+uW"),i={};e.a={name:"icon",props:{name:{type:String,validator:function(t){return t?t in i||(a.a.util.warn('Invalid prop: prop "icon" is referring to an unregistered icon "'+t+'".\nPlesase make sure you have imported this icon before using it.',this),!1):null}},scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t=void 0===t?1:Number(t),isNaN(t)||t<=0?(a.a.util.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},clazz:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse}},icon:function(){return this.name?i[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var t=this.icon,e=t.width,n=t.height;return Math.max(e,n)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}}},mounted:function(){var t=this;if(!this.icon){this.$children.forEach(function(e){e.outerScale=t.normalizedScale});var e=0,n=0;this.$children.forEach(function(t){e=Math.max(e,t.width),n=Math.max(n,t.height)}),this.childrenWidth=e,this.childrenHeight=n,this.$children.forEach(function(t){t.x=(e-t.width)/2,t.y=(n-t.height)/2})}},register:function(t){for(var e in t){var n=t[e];n.paths||(n.paths=[]),n.d&&n.paths.push({d:n.d}),n.polygons||(n.polygons=[]),n.points&&n.polygons.push({points:n.points}),i[e]=n}},icons:i}},ekSW:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Audio"},[n("audio",{attrs:{id:"ambient",src:t.src,loop:"true"}}),t._v(" "),n("div",{staticClass:"Audio--controller ButtonIcon ButtonIcon--dark",on:{click:function(e){t.toggleAudio()}}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[t.isPlaying?n("icon",{key:"on",attrs:{name:"volume-up"}}):n("icon",{key:"off",attrs:{name:"volume-off"}})],1)],1)])},i=[],o={render:a,staticRenderFns:i};e.a=o},gjgT:function(t,e,n){"use strict";function a(t){n("L3XS")}var i=n("m640"),o=n("Fp3t"),s=n("VU/8"),r=a,c=s(i.a,o.a,r,"data-v-cfbf3e10",null);e.a=c.exports},huB6:function(t,e,n){"use strict";function a(t){n("7U/O")}var i=n("7WPe"),o=n("0ip0"),s=n("VU/8"),r=a,c=s(i.a,o.a,r,"data-v-01cb894a",null);e.a=c.exports},m640:function(t,e,n){"use strict";var a=n("aSYd"),i=n("QtNj"),o=n("v1UW"),s=n("huB6"),r=n("pADT"),c=n.n(r);e.a={components:{appAudio:a.a,appBackground:i.a,appWolfmap:o.a,appWolfDetail:s.a},data:function(){return{content:c.a,overflow:"auto"}},computed:{wolfState:function(){return this.$store.getters.wolfState}}}},ntC0:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("app-audio",{attrs:{src:"./static/audio/"+t.content.landscape.audio}}),t._v(" "),n("app-background",{attrs:{backgroundImg:t.content.landscape.backgroundImg}}),t._v(" "),t._m(0)],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-6"},[t._v("thing")]),t._v(" "),n("div",{staticClass:"col-6"},[t._v("thing")])])])}],o={render:a,staticRenderFns:i};e.a=o},"o/oP":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("app-navbar"),t._v(" "),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)},i=[],o={render:a,staticRenderFns:i};e.a=o},pADT:function(t,e){t.exports={wolf:{audio:"bird-song.mp3",backgroundImg:"wolf-bg-blur.jpg",mapDetail:[{name:"wolf-skull",image:"wolf-skull.jpg",title:"Skull",description:"Wolves have large teeth, and jaws with a bite force of 1,200 pounds per square inch, capable of crushing the thighbone of a moose."},{name:"wolf-pup",title:"Eight Week Old Puppy",image:"wolf-pup.jpg",description:"The young wolves watch the behaviors of the adults and see how the game is played. They learn how the hunters handle each different situation: what to do when the prey dashes for open ground, or turns to defend itself. In this way knowledge is passed from one generation to the next."}]},landscape:{audio:"windy-forest.mp3",backgroundImg:"http://via.placeholder.com/3048x2160"}}},rdKW:function(t,e,n){"use strict";var a=n("pADT"),i=n.n(a),o=n("M4fF");e.a={data:function(){return{content:i.a}},methods:{updateState:function(t){var e=this.getDetail(t),n={parent:"wolfmap",updates:{currentDetail:e,currentView:"appWolfDetail",detailAnimation:"slideUp"}};this.$store.dispatch("updateProps",n)},getDetail:function(t){return o.find(i.a.wolf.mapDetail,{name:t})}}}},v1UW:function(t,e,n){"use strict";function a(t){n("z7jf")}var i=n("rdKW"),o=n("PD49"),s=n("VU/8"),r=a,c=s(i.a,o.a,r,"data-v-01a5837c",null);e.a=c.exports},wtEF:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var a=n("7+uW"),i=n("NYxO");a.a.use(i.a);var o=new i.a.Store({state:{wolfmap:{currentDetail:null,currentView:"appWolfmap",detailAnimation:"fade"}},getters:{wolfState:function(t){return t.wolfmap}},mutations:{setProp:function(t,e){var n=e.parent,a=e.key,i=e.value;t[n][a]=i},updateProps:function(t,e){var n=e.parent,a=e.updates;t[n]=a}},actions:{setProp:function(t,e){(0,t.commit)("setProp",e)},updateProps:function(t,e){(0,t.commit)("updateProps",e)}}})},xJD8:function(t,e,n){"use strict";var a=n("LHKt");e.a={components:{appNavbar:a.a},name:"app"}},z0na:function(t,e){},z7jf:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.caa3a6957d2222ff6868.js.map