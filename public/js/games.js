(self.webpackChunk=self.webpackChunk||[]).push([[3903],{82203:(e,a,r)=>{"use strict";r.d(a,{Z:()=>i});var t=r(94015),n=r.n(t),s=r(23645),o=r.n(s)()(n());o.push([e.id,".link[data-v-3f72e3fb]{color:var(--v-anchor-base)}","",{version:3,sources:["webpack://./resources/js/components/GameDetailModal.vue"],names:[],mappings:"AAgDA,uBACE,0BA/CF",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.link {\n  color: var(--v-anchor-base);\n}\n"],sourceRoot:""}]);const i=o},70306:(e,a,r)=>{"use strict";r.d(a,{Z:()=>c});var t=r(87757),n=r.n(t),s=r(9669),o=r.n(s);function i(e,a,r,t,n,s,o){try{var i=e[s](o),c=i.value}catch(e){return void r(e)}i.done?a(c):Promise.resolve(c).then(t,n)}const c={props:{id:{type:[Number,String],required:!0}},data:function(){return{gamePackageId:null}},computed:{component:function(){var e=this;return this.gamePackageId?function(){return r(99593)("./".concat(e.gamePackageId,"/resources/js/pages/show"))}:null}},created:function(){var e,a=this;return(e=n().mark((function e(){var r,t;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/api/history/games/".concat(a.id,"/package"));case 2:r=e.sent,t=r.data,a.gamePackageId=t.id;case 5:case"end":return e.stop()}}),e)})),function(){var a=this,r=arguments;return new Promise((function(t,n){var s=e.apply(a,r);function o(e){i(s,t,n,o,c,"next",e)}function c(e){i(s,t,n,o,c,"throw",e)}o(void 0)}))})()}}},22964:(e,a,r)=>{"use strict";r.d(a,{Z:()=>t});const t={components:{GameDetail:r(94984).Z},props:{game:{type:Object,required:!0}},data:function(){return{modal:!1}}}},23031:(e,a,r)=>{"use strict";r.d(a,{Z:()=>f});var t=r(15566),n=r(68843),s=r(74155),o=r(75026),i=r(71229),c=r(25454),u=r(99933),l=r(20629),m=r(38136);function d(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?d(Object(r),!0).forEach((function(a){v(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function v(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}const f={components:{GameDetailModal:c.Z,UserProfileModal:i.Z,UserAvatar:o.Z},mixins:[m.Z],data:function(){return{games:{},unsubscribe:function(){}}},computed:p(p(p({},(0,l.rn)("auth",["user"])),(0,l.rn)("settings",["settings"])),{},{timeout:function(){return 1e3*Math.max(1,parseInt((0,t.v)("settings.interface.game_feed.timeout"),10))}}),created:function(){var e=this;this.isMobile||(this.unsubscribe=this.$store.subscribe((function(a,r){var t=a.type,n=a.payload;e.settings.gameFeed&&t==="game/".concat(u.ah)&&e.user.id!==n.account.user.id&&(e.games=p(p({},e.games),{},v({},n.id,n)),setTimeout((function(){delete e.games[n.id]}),e.timeout))})))},beforeDestroy:function(){this.unsubscribe()},methods:{decimal:s.decimal,truncate:n.$G}}},53472:(e,a,r)=>{"use strict";r.d(a,{Z:()=>u});var t=r(87757),n=r.n(t),s=r(68843),o=r(38136),i=r(36395);function c(e,a,r,t,n,s,o){try{var i=e[s](o),c=i.value}catch(e){return void r(e)}i.done?a(c):Promise.resolve(c).then(t,n)}const u={mixins:[o.Z,i.Z],props:{provablyFairEnabled:{type:Boolean,required:!0}},data:function(){return{menu:!1,provablyFairModal:!1,infoModal:!1,infoModalComponent:null}},computed:{gamePackageId:function(){return this.$route.params.game},provablyFairGame:function(){return this.$store.getters["provably-fair/get"](this.gamePackageId)||{}}},watch:{gamePackageId:function(e){this.initInfoModalComponent(e)}},created:function(){this.initInfoModalComponent(this.gamePackageId)},methods:{initInfoModalComponent:function(e){var a,t=this;return(a=n().mark((function a(){var s;return n().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r(48439)("./".concat(e,"/resources/js/pages/info"));case 2:s=a.sent,t.infoModalComponent=s.default;case 4:case"end":return a.stop()}}),a)})),function(){var e=this,r=arguments;return new Promise((function(t,n){var s=a.apply(e,r);function o(e){c(s,t,n,o,i,"next",e)}function i(e){c(s,t,n,o,i,"throw",e)}o(void 0)}))})()},copyToClipboard:function(e){return(0,s.vQ)(e.$el.querySelector("input"))},createProvablyFairGame:function(){this.$store.dispatch("provably-fair/create",{key:this.gamePackageId,seed:this.provablyFairGame.client_seed})}}}},49174:(e,a,r)=>{"use strict";var t=r(93379),n=r.n(t),s=r(82203),o={insert:"head",singleton:!1};n()(s.Z,o);s.Z.locals},60401:(e,a,r)=>{"use strict";r.d(a,{s:()=>t,x:()=>n});var t=function(){var e=this,a=e.$createElement;return(e._self._c||a)(e.component,{tag:"component",attrs:{id:e.id}})},n=[]},82088:(e,a,r)=>{"use strict";r.d(a,{s:()=>t,x:()=>n});var t=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("v-dialog",{attrs:{width:"500"},scopedSlots:e._u([{key:"activator",fn:function(a){var t=a.on;return[e._t("default",[r("span",e._g({staticClass:"link"},t),[e._v("\n        "+e._s(e.game.title)+" #"+e._s(e.game.id)+"\n      ")])],{on:t})]}}],null,!0),model:{value:e.modal,callback:function(a){e.modal=a},expression:"modal"}},[e._v(" "),r("v-card",[r("v-toolbar",[r("v-toolbar-title",[e._v("\n        "+e._s(e.$t("Game {0}",[e.game.id]))+"\n      ")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(a){e.modal=!1}}},[r("v-icon",[e._v("mdi-close")])],1)],1),e._v(" "),r("v-card-text",[r("game-detail",{attrs:{id:e.game.id}})],1)],1)],1)},n=[]},50074:(e,a,r)=>{"use strict";r.d(a,{s:()=>t,x:()=>n});var t=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",[e._l(Object.keys(e.games).map((function(a){return e.games[a]})),(function(a,t){return[r("v-hover",{key:a.id,scopedSlots:e._u([{key:"default",fn:function(n){var s=n.hover;return[r("v-snackbar",{staticClass:"game-snackbar",style:"margin-bottom: "+80*t+"px; opacity: "+(s?1:.8),attrs:{app:"",left:"",dark:e.$vuetify.theme.isDark,light:!e.$vuetify.theme.isDark,bottom:"",tile:"",value:!0,elevation:s?8:2,timeout:e.timeout,transition:"scroll-y-transition"}},[r("div",{staticClass:"d-flex justify-space-between"},[r("div",{staticClass:"d-flex align-center"},[r("user-avatar",{attrs:{user:a.account.user}}),e._v(" "),r("div",{staticClass:"d-flex flex-column ml-2"},[r("user-profile-modal",{attrs:{user:a.account.user},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.on;return[r("span",e._g({staticClass:"link"},n),[e._v("\n                    "+e._s(e.truncate(a.account.user.name))+"\n                  ")])]}}],null,!0)}),e._v(" "),r("div",{staticClass:"mt-1"},[r("game-detail-modal",{attrs:{game:a}})],1)],1)],1),e._v(" "),r("div",{staticClass:"d-flex align-center"},[r("v-chip",{attrs:{label:"",outlined:"",small:"",color:a.win>a.bet?"success":a.win<a.bet?"error":"warning"}},[e._v("\n              "+e._s(e.$t("Profit"))+" "+e._s(e.decimal(a.win-a.bet,2))+"\n            ")])],1)])])]}}],null,!0)})]}))],2)},n=[]},44833:(e,a,r)=>{"use strict";r.d(a,{s:()=>t,x:()=>n});var t=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",[r("v-speed-dial",{class:{"mb-10":!e.isMobile},attrs:{fixed:"",bottom:"",right:"","open-on-hover":"",direction:"top",transition:"scroll-y-transition"},scopedSlots:e._u([{key:"activator",fn:function(){return[r("v-btn",{attrs:{color:"primary",fab:""},model:{value:e.menu,callback:function(a){e.menu=a},expression:"menu"}},[e.menu?r("v-icon",[e._v("\n          mdi-close\n        ")]):r("v-icon",[e._v("\n          mdi-cards-playing-outline\n        ")])],1)]},proxy:!0}]),model:{value:e.menu,callback:function(a){e.menu=a},expression:"menu"}},[e._v(" "),e.provablyFairEnabled?r("v-btn",{attrs:{fab:"",small:"",color:"primary"},on:{click:function(a){e.provablyFairModal=!0}}},[r("v-icon",[e._v("mdi-check-decagram")])],1):e._e(),e._v(" "),r("v-btn",{attrs:{fab:"",small:"",color:"primary"},on:{click:function(a){e.infoModal=!0}}},[r("v-icon",[e._v("mdi-information-variant")])],1)],1),e._v(" "),e.provablyFairEnabled?r("v-dialog",{attrs:{width:"600"},model:{value:e.provablyFairModal,callback:function(a){e.provablyFairModal=a},expression:"provablyFairModal"}},[r("v-card",[r("v-toolbar",[r("v-toolbar-title",[e._v("\n          "+e._s(e.$t("Provably fair"))+"\n        ")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(a){e.provablyFairModal=!1}}},[r("v-icon",[e._v("mdi-close")])],1)],1),e._v(" "),r("v-card-text",{staticClass:"pa-4"},[r("v-form",{on:{submit:function(a){return a.preventDefault(),e.createProvablyFairGame(a)}},model:{value:e.formIsValid,callback:function(a){e.formIsValid=a},expression:"formIsValid"}},[r("v-text-field",{attrs:{label:e.$t("Client seed"),outlined:"",rules:[function(a){return e.validationMaxLength(a,32)}]},model:{value:e.provablyFairGame.client_seed,callback:function(a){e.$set(e.provablyFairGame,"client_seed",a)},expression:"provablyFairGame.client_seed"}}),e._v(" "),r("v-text-field",{ref:"hash",attrs:{label:e.$t("Server hash"),outlined:"",readonly:"","append-icon":"mdi-content-copy"},on:{"click:append":function(a){return e.copyToClipboard(e.$refs.hash)}},model:{value:e.provablyFairGame.hash,callback:function(a){e.$set(e.provablyFairGame,"hash",a)},expression:"provablyFairGame.hash"}}),e._v(" "),r("v-btn",{attrs:{type:"submit",color:"primary",disabled:!e.formIsValid}},[e._v("\n            "+e._s(e.$t("Generate"))+"\n          ")])],1)],1)],1)],1):e._e(),e._v(" "),r("v-dialog",{staticClass:"overflow-hidden",attrs:{width:"600"},model:{value:e.infoModal,callback:function(a){e.infoModal=a},expression:"infoModal"}},[r(e.infoModalComponent,{tag:"component",on:{close:function(a){e.infoModal=!1}}})],1)],1)},n=[]},6544:(e,a,r)=>{"use strict";r.r(a),r.d(a,{default:()=>m});var t=r(87757),n=r.n(t),s=r(15566),o=r(51519),i=r(73023);function c(e,a,r,t,n,s,o){try{var i=e[s](o),c=i.value}catch(e){return void r(e)}i.done?a(c):Promise.resolve(c).then(t,n)}function u(e){return function(){var a=this,r=arguments;return new Promise((function(t,n){var s=e.apply(a,r);function o(e){c(s,t,n,o,i,"next",e)}function i(e){c(s,t,n,o,i,"throw",e)}o(void 0)}))}}const l={middleware:["auth","verified","2fa_passed","game"],components:{GameFeed:r(8250).Z,AnimatedBackground:o.Z,GameMenu:i.Z},metaInfo:function(){return{title:this.gameComponent?this.$t(this.gameComponent.name):""}},data:function(){return{gameComponent:null,gameBackgroundImageUrl:null}},created:function(){this.$store.dispatch("auth/fetchUser"),this.initGameComponent(this.$route.params.game,this.$route.params.slug)},methods:{isMultiplayerGame:function(e){return e.startsWith("multiplayer-")},getGameBackgroundImageUrl:function(e,a){var r=(0,s.v)("".concat(e));return r.variations&&a?r.variations[r.variations.findIndex((function(e){return e.slug===a}))].background:r.background},initGameComponent:function(e,a){var t=this;return u(n().mark((function s(){var o;return n().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.isMultiplayerGame(e)||t.$store.dispatch("provably-fair/create",{key:e}),n.next=3,r(38046)("./".concat(e,"/resources/js/pages/game"));case 3:o=n.sent,t.gameComponent=o.default,t.gameBackgroundImageUrl=t.getGameBackgroundImageUrl(e,a);case 6:case"end":return n.stop()}}),s)})))()}},beforeRouteUpdate:function(e,a,r){var t=this;return u(n().mark((function a(){return n().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.initGameComponent(e.params.game,e.params.slug);case 2:r();case 3:case"end":return a.stop()}}),a)})))()}};const m=(0,r(51900).Z)(l,(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"fill-height",class:{"static-background":e.gameBackgroundImageUrl},style:{backgroundImage:e.gameBackgroundImageUrl?"url("+e.gameBackgroundImageUrl+")":"none"}},[e.gameBackgroundImageUrl?e._e():r("animated-background"),e._v(" "),r(e.gameComponent,{tag:"component",class:["game-container","game-"+e.$route.params.game]}),e._v(" "),r("game-menu",{attrs:{"provably-fair-enabled":!e.isMultiplayerGame(e.$route.params.game)}}),e._v(" "),r("game-feed")],1)}),[],!1,null,null,null).exports},38046:(e,a,r)=>{var t={"./american-roulette/resources/js/pages/game":[53575,6065,160,9295,7627,5743,5610],"./baccarat/resources/js/pages/game":[40180,6065,160,9295,2826],"./blackjack/resources/js/pages/game":[16357,6065,160,9295,6736],"./casino-holdem/resources/js/pages/game":[26107,6065,160,9295,6027],"./dice-3d/resources/js/pages/game":[6990,6065,160,9295,3958,9118,6188],"./dice/resources/js/pages/game":[22283,6065,160,9295,4494],"./european-roulette/resources/js/pages/game":[37574,6065,160,9295,7627,5743,298],"./heads-or-tails/resources/js/pages/game":[79363,6065,160,9295,3958,9118,8538],"./horse-racing/resources/js/pages/game":[26387,160,9295,914,5369,3953,800,9186,436,9230,2027,4725,9024,2686],"./keno/resources/js/pages/game":[93317,6065,160,9295,7228,7790],"./lucky-wheel/resources/js/pages/game":[88962,6065,160,9295,9687],"./multiplayer-blackjack/resources/js/pages/game":[15415,6065,160,9295,6915],"./multiplayer-roulette/resources/js/pages/game":[55622,6065,160,9295,914,5369,3953,800,9186,436,9230,2027,4274,1550],"./plinko/resources/js/pages/game":[92580,6065,160,9295,5025,8310,3671,6676,2825,8570,8777,7346],"./sic-bo/resources/js/pages/game":[44830,6065,160,9295,914,5369,3953,800,9186,436,9230,2027,3958,9118,5025,8310,3671,6676,2825,5650,9348],"./slots/resources/js/pages/game":[31791,6065,160,9295,941],"./video-poker/resources/js/pages/game":[73864,6065,160,9295,5002]};function n(e){if(!r.o(t,e))return Promise.resolve().then((()=>{var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}));var a=t[e],n=a[0];return Promise.all(a.slice(1).map(r.e)).then((()=>r(n)))}n.keys=()=>Object.keys(t),n.id=38046,e.exports=n},48439:(e,a,r)=>{var t={"./american-roulette/resources/js/pages/info":[6841,6065,6603],"./baccarat/resources/js/pages/info":[43552,6065,1344],"./blackjack/resources/js/pages/info":[90283,6065,2339],"./casino-holdem/resources/js/pages/info":[28056,6065,2613],"./dice-3d/resources/js/pages/info":[50676,6065,2195],"./dice/resources/js/pages/info":[67632,6065,6092],"./european-roulette/resources/js/pages/info":[11694,6065,3462],"./heads-or-tails/resources/js/pages/info":[96657,6065,3287],"./horse-racing/resources/js/pages/info":[45232,6065,3495],"./keno/resources/js/pages/info":[3408,6065,2412],"./lucky-wheel/resources/js/pages/info":[22721,6065,100],"./multiplayer-blackjack/resources/js/pages/info":[96646,6065,8757],"./multiplayer-roulette/resources/js/pages/info":[94990,6065,5503],"./plinko/resources/js/pages/info":[45278,6065,6959],"./sic-bo/resources/js/pages/info":[55859,6065,9702],"./slots/resources/js/pages/info":[49698,6065,5142],"./video-poker/resources/js/pages/info":[1624,6065,6713]};function n(e){if(!r.o(t,e))return Promise.resolve().then((()=>{var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}));var a=t[e],n=a[0];return Promise.all(a.slice(1).map(r.e)).then((()=>r(n)))}n.keys=()=>Object.keys(t),n.id=48439,e.exports=n},99593:(e,a,r)=>{var t={"./american-roulette/resources/js/pages/show":[30164,6065,160,2922],"./baccarat/resources/js/pages/show":[26395,6065,160,576],"./blackjack/resources/js/pages/show":[19226,6065,160,7096],"./casino-holdem/resources/js/pages/show":[14832,6065,160,4330],"./dice-3d/resources/js/pages/show":[58393,6065,160,3621],"./dice/resources/js/pages/show":[3678,6065,160,6856],"./european-roulette/resources/js/pages/show":[31448,6065,160,6e3],"./heads-or-tails/resources/js/pages/show":[84429,6065,160,4196],"./horse-racing/resources/js/pages/show":[18053,6065,160,9236],"./keno/resources/js/pages/show":[1269,6065,160,6982],"./lucky-wheel/resources/js/pages/show":[6202,6065,160,7829],"./multiplayer-blackjack/resources/js/pages/show":[98880,6065,160,7946],"./multiplayer-roulette/resources/js/pages/show":[65308,6065,160,6],"./plinko/resources/js/pages/show":[36878,6065,160,6883],"./sic-bo/resources/js/pages/show":[94805,6065,160,6389],"./slots/resources/js/pages/show":[39779,6065,160,2607],"./video-poker/resources/js/pages/show":[26946,6065,160,3234]};function n(e){if(!r.o(t,e))return Promise.resolve().then((()=>{var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}));var a=t[e],n=a[0];return Promise.all(a.slice(1).map(r.e)).then((()=>r(n)))}n.keys=()=>Object.keys(t),n.id=99593,e.exports=n}}]);
//# sourceMappingURL=games.js.map