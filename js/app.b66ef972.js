(function(){"use strict";var e={5899:function(e,t,s){var n=s(9242),o=s(3396);const i={id:"app"};function a(e,t){const s=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(s)])}var r=s(89);const c={},l=(0,r.Z)(c,[["render",a]]);var p=l,d=s(2483),u=s(7139);const h={class:"shopping-card-cart"},m=["disabled"],f={class:"sort-container"},g={class:"sort-option"},b=(0,o._)("p",null,"Sort By",-1),w=(0,o._)("option",{value:"",selected:"",disabled:"",hidden:""},"Choose",-1),v=(0,o._)("option",null,"Subject",-1),_=(0,o._)("option",null,"Location",-1),y=(0,o._)("option",null,"Price",-1),L=(0,o._)("option",null,"Availability",-1),C=[w,v,_,y,L],k={class:"sort-option"},j={key:0},S=(0,o._)("option",{value:"",selected:"",disabled:"",hidden:""},"Choose",-1),O=(0,o._)("option",null,"Ascending",-1),A=(0,o._)("option",null,"Descending",-1),D=[S,O,A],x={class:"container-lessons"};function $(e,t,s,i,a,r){const c=(0,o.up)("LessonCard");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",h,[(0,o._)("button",{class:(0,u.C_)(["card-btn",{dis:0==this.$store.state.cart.length}]),onClick:t[0]||(t[0]=(...e)=>r.openShopping&&r.openShopping(...e)),disabled:0==this.$store.state.cart.length}," Cart: "+(0,u.zw)(this.$store.state.cart.length),11,m)]),(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>a.search=e),onKeypress:t[2]||(t[2]=(...t)=>e.searchOnLessons&&e.searchOnLessons(...t)),class:"search",type:"text",placeholder:"search for lessons or locations"},null,544),[[n.nr,a.search]]),(0,o._)("div",f,[(0,o._)("div",g,[b,(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":t[3]||(t[3]=e=>a.sortBy=e)},C,512),[[n.bM,a.sortBy]])]),(0,o._)("div",k,[a.sortBy?((0,o.wg)(),(0,o.iD)("p",j,"Order")):(0,o.kq)("",!0),a.sortBy?(0,o.wy)(((0,o.wg)(),(0,o.iD)("select",{key:1,"onUpdate:modelValue":t[4]||(t[4]=e=>a.order=e)},D,512)),[[n.bM,a.order]]):(0,o.kq)("",!0)]),a.order?((0,o.wg)(),(0,o.iD)("button",{key:0,class:"sort-btn",onClick:t[5]||(t[5]=(...e)=>r.sortedLessons&&r.sortedLessons(...e))},"sort")):(0,o.kq)("",!0)]),(0,o._)("div",x,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.lessonFilter,(e=>((0,o.wg)(),(0,o.j4)(c,{key:e.id,lesson:e},null,8,["lesson"])))),128))])],64)}s(7658);const z=e=>((0,o.dD)("data-v-badedbea"),e=e(),(0,o.Cn)(),e),P={class:"lesson-card"},T=["src","alt"],q=z((()=>(0,o._)("hr",null,null,-1))),B=z((()=>(0,o._)("hr",null,null,-1))),E=z((()=>(0,o._)("hr",null,null,-1))),N=z((()=>(0,o._)("hr",null,null,-1))),Y=["disabled"];function H(e,t,s,n,i,a){return(0,o.wg)(),(0,o.iD)("div",P,[(0,o._)("img",{src:s.lesson.image,alt:s.lesson.subject+" image"},null,8,T),(0,o._)("h4",null,[(0,o.Uk)("Subject: "+(0,u.zw)(s.lesson.subject)+" ",1),(0,o._)("i",{class:(0,u.C_)(s.lesson.icon)},null,2)]),q,(0,o._)("p",null,"Location: "+(0,u.zw)(s.lesson.location),1),B,(0,o._)("p",null,"Price: "+(0,u.zw)("£"+s.lesson.price),1),E,(0,o._)("p",null,"Space: "+(0,u.zw)(a.getLeftSpaces()),1),N,(0,o._)("button",{disabled:0==a.getLeftSpaces(),onClick:t[0]||(t[0]=e=>a.handleAddToCart())}," Add to Cart ",8,Y)])}var I={name:"LessonCard",props:{lesson:Object},data(){return{}},methods:{handleAddToCart(){this.$store.commit("ADD_TO_CART",this.lesson),this.$store.state.cart.find((e=>e.id==this.lesson.id)).space--,this.getLeftSpaces()},getLeftSpaces(){return this.$store.state.cart.find((e=>e.id==this.lesson.id))?.space??5}}};const M=(0,r.Z)(I,[["render",H],["__scopeId","data-v-badedbea"]]);var U=M,Z=s(65),V=(0,Z.MT)({state:{cart:[]},getters:{getTodoById(e){return e}},mutations:{ADD_TO_CART(e,t){e.cart.push(t)}},actions:{},modules:{}});function F(){return[{id:1,subject:"Algebra",location:"London",price:200,image:"https://therealschool.in/blog/wp-content/uploads/2021/06/algebra-games-for-kids-1.jpg",icon:"fa-solid fa-square-root-variable",space:5,getLeftSpace(){return V.state.cart.find((e=>e.id==this.id))?.space??5}},{id:2,subject:"Arithmetic",location:"York",price:150,image:"https://www.mathplanet.com/media/2439951/digitalamatte.png?width=500&height=333.3333333333333",icon:"fa-solid fa-calculator",space:5,getLeftSpace(){return V.state.cart.find((e=>e.id==this.id))?.space??5}},{id:3,subject:"Geometry",location:"London",price:550,image:"https://d2r55xnwy6nx47.cloudfront.net/uploads/2022/11/NovemberAcademy-cr.RobertNeubecker-Lede-scaled.webp",icon:"fa-solid fa-shapes",space:5,getLeftSpace(){return V.state.cart.find((e=>e.id==this.id))?.space??5}},{id:4,subject:"Calculus",location:"Halton",price:350,image:"https://s3.amazonaws.com/campus.reform/17472/7dkibmcalculus.jpeg",icon:"fa-solid fa-divide",space:5,getLeftSpace(){return V.state.cart.find((e=>e.id==this.id))?.space??5}},{id:5,subject:"Analysis",location:"York",price:100,image:"https://images.ctfassets.net/lh3zuq09vnm2/6ETyYNfs3khwXxNtEmmxeN/9fb43476bf6538952b83b72df2da02bd/Website_Analysis.png",icon:"fa-solid fa-chart-pie",space:5,getLeftSpace(){return V.state.cart.find((e=>e.id==this.id))?.space??5}},{id:6,subject:"Science",location:"London",price:850,image:"https://img.freepik.com/free-vector/hand-drawn-science-education-background_23-2148499325.jpg",icon:"fa-solid fa-microscope",space:5,getLeftSpace(){return V.state.cart.find((e=>e.id==this.id))?.space??5}},{id:7,subject:"Physics",location:"York",price:700,image:"https://images.theconversation.com/files/191827/original/file-20171025-25516-g7rtyl.jpg?ixlib=rb-1.1.0&rect=0%2C70%2C7875%2C5667&q=45&auto=format&w=926&fit=clip",icon:"fa-brands fa-codepen",space:5,getLeftSpace(){return V.state.cart.find((e=>e.id==this.id))?.space??5}},{id:8,subject:"Chemistry",location:"Halton",price:400,image:"https://facts.net/wp-content/uploads/2020/03/chemistry-facts-1024x509.jpg",icon:"fa-solid fa-flask-vial",space:5,getLeftSpace(){return V.state.cart.find((e=>e.id==this.id))?.space??5}},{id:9,subject:"Biology",location:"London",price:500,image:"https://www.ncl.ac.uk/mediav8/natural-and-environmental-sciences/images/chemical-biology-hero.jpg",icon:"fa-solid fa-dna",space:5,getLeftSpace(){return V.state.cart.find((e=>e.id==this.id))?.space??5}},{id:10,subject:"History",location:"Halton",price:250,image:"https://www.thebritishacademy.ac.uk//media/images/March-of-Intellect-1828-William-H.e1dfd90c.fill-1200x675.jpg",icon:"fa-solid fa-landmark-dome",space:5,getLeftSpace(){return V.state.cart.find((e=>e.id==this.id))?.space??5}},{id:11,subject:"Python",location:"York",price:600,image:"https://thewriteress.com/wp-content/uploads/2021/01/Learn-Python-in-Arabic.jpg",icon:"fa-brands fa-python",space:5,getLeftSpace(){return V.state.cart.find((e=>e.id==this.id))?.space??5}},{id:12,subject:"Java",location:"Halton",price:300,image:"https://www.chawtechsolutions.com/wp-content/uploads/2020/10/java_binary.jpg",icon:"fa-brands fa-java",space:5,getLeftSpace(){return V.state.cart.find((e=>e.id==this.id))?.space??5}}]}var K=F,R={name:"LessonsList",components:{LessonCard:U},data(){return{search:"",sortBy:"",order:"",lessons:K()}},methods:{openShopping(){this.$router.push({path:"/Shopping"})},sortedLessons(){if(this.sortLetters("Subject"),this.sortLetters("Location"),this.sortNumbers("Price"),"Availability"==this.sortBy)return"Ascending"==this.order?this.lessons.sort(((e,t)=>e.getLeftSpace()-t.getLeftSpace())):this.lessons.sort(((e,t)=>t.getLeftSpace()-e.getLeftSpace()))},sortLetters(e){if(this.sortBy==e)return"Ascending"==this.order?this.lessons.sort((function(t,s){return t[e.toLowerCase()]<s[e.toLowerCase()]?-1:t[e.toLowerCase()]>s[e.toLowerCase()]?1:0})):this.lessons.sort((function(t,s){return s[e.toLowerCase()]<t[e.toLowerCase()]?-1:s[e.toLowerCase()]>t[e.toLowerCase()]?1:0}))},sortNumbers(e){if(this.sortBy==e)return"Ascending"==this.order?this.lessons.sort(((t,s)=>t[e.toLowerCase()]-s[e.toLowerCase()])):this.lessons.sort(((t,s)=>s[e.toLowerCase()]-t[e.toLowerCase()]))}},computed:{lessonFilter(){return this.lessons.filter((e=>e.subject.toLowerCase().includes(this.search.toLowerCase())||e.location.toLowerCase().includes(this.search.toLowerCase())))}}};const W=(0,r.Z)(R,[["render",$]]);var G=W;const J=e=>((0,o.dD)("data-v-6d21d596"),e=e(),(0,o.Cn)(),e),X={class:"shopping-card-cart"},Q={class:"shopping-list"},ee={class:"total-price"},te={class:"user-details"},se={class:"user-name-container"},ne={class:"user-name"},oe={key:0,class:"error"},ie={class:"user-phone-container"},ae={class:"user-phone"},re={key:0,class:"error"},ce={key:0,class:"modal-container"},le={class:"modal-content-container"},pe=J((()=>(0,o._)("h4",null,"Successful Operation",-1))),de=J((()=>(0,o._)("p",null,"The order has been submitted successfully",-1)));function ue(e,t,s,i,a,r){const c=(0,o.up)("ShoppingCart");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",X,[(0,o._)("button",{class:"card-btn",onClick:t[0]||(t[0]=(...e)=>r.openLessons&&r.openLessons(...e))}," Cart: "+(0,u.zw)(a.items.length),1)]),(0,o._)("div",Q,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.items,((e,t)=>((0,o.wg)(),(0,o.j4)(c,{item:e,key:t,index:t},null,8,["item","index"])))),128))]),(0,o._)("p",ee,"Total Price: £"+(0,u.zw)(r.totalPrice),1),(0,o._)("div",te,[(0,o._)("div",se,[(0,o._)("p",ne,"Your Name is: "+(0,u.zw)(a.username),1),(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>a.username=e),placeholder:"enter your name"},null,512),[[n.nr,a.username]]),a.nameEmpty?((0,o.wg)(),(0,o.iD)("p",oe,"name is required*")):(0,o.kq)("",!0)]),(0,o._)("div",ie,[(0,o._)("p",ae,"Your Phone is: "+(0,u.zw)(a.userphone),1),(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>a.userphone=e),placeholder:"enter your phone"},null,512),[[n.nr,a.userphone]]),a.phoneEmpty?((0,o.wg)(),(0,o.iD)("p",re,"phone is required*")):(0,o.kq)("",!0)]),(0,o._)("button",{onClick:t[3]||(t[3]=e=>r.checkoutOrder()),class:"checkout"},"checkout")]),a.isOpen?((0,o.wg)(),(0,o.iD)("div",ce,[(0,o._)("div",le,[pe,de,(0,o._)("button",{onClick:t[4]||(t[4]=(...e)=>r.closeModal&&r.closeModal(...e))},"home page")])])):(0,o.kq)("",!0)])}const he={class:"shopping-card-container"},me=["src","alt"];function fe(e,t,s,n,i,a){return(0,o.wg)(),(0,o.iD)("div",he,[(0,o._)("img",{src:s.item.image,alt:s.item.subject+" image"},null,8,me),(0,o._)("p",null,(0,u.zw)(s.item.subject),1),(0,o._)("p",null,(0,u.zw)(s.item.location),1),(0,o._)("p",null,(0,u.zw)("£"+s.item.price),1),(0,o._)("button",{onClick:t[0]||(t[0]=(...e)=>a.removeItem&&a.removeItem(...e)),class:"remove-btn"},"remove")])}var ge={name:"ShoppingCart",props:{item:Object,index:Number},methods:{removeItem(){this.$store.state.cart.splice(this.index,1),this.$store.state.cart.find((e=>e.id==this.item.id)).space+=1}}};const be=(0,r.Z)(ge,[["render",fe],["__scopeId","data-v-6e195428"]]);var we=be,ve={name:"ShoppingList",components:{ShoppingCart:we},data(){return{isOpen:!1,username:"",userphone:"",phoneEmpty:!1,nameEmpty:!1,items:this.$store.state.cart}},methods:{openLessons(){this.$router.push({path:"/"})},checkoutOrder(){var e=/^[a-zA-Z ]+$/.test(this.username),t=/^\d*$/.test(this.userphone);0==this.username.length?this.nameEmpty=!0:0!=this.username.length&&(this.nameEmpty=!1),0==this.userphone.length?this.phoneEmpty=!0:0!=this.userphone.length&&(this.phoneEmpty=!1),0==!this.username.length&&0==!this.userphone.length&&(e&&t?this.$store.state.cart.length>0?this.isOpen=!0:alert("shopping cart is empty"):e?alert("Phone must be numbers"):alert("Name must be letters only"))},closeModal(){this.isOpen=!1,this.$router.push({path:"/"}),this.$store.state.cart=[]}},computed:{totalPrice(){const e=this.items.reduce(((e,t)=>e+t.price),0);return e}}};const _e=(0,r.Z)(ve,[["render",ue],["__scopeId","data-v-6d21d596"]]);var ye=_e;const Le=[{path:"/",name:"LessonsList",component:G},{path:"/Shopping",name:"ShoppingList",component:ye}],Ce=(0,d.p7)({history:(0,d.PO)("/lesson-app/"),routes:Le});var ke=Ce;(0,n.ri)(p).use(V).use(ke).mount("#app")}},t={};function s(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,s),i.exports}s.m=e,function(){var e=[];s.O=function(t,n,o,i){if(!n){var a=1/0;for(p=0;p<e.length;p++){n=e[p][0],o=e[p][1],i=e[p][2];for(var r=!0,c=0;c<n.length;c++)(!1&i||a>=i)&&Object.keys(s.O).every((function(e){return s.O[e](n[c])}))?n.splice(c--,1):(r=!1,i<a&&(a=i));if(r){e.splice(p--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var p=e.length;p>0&&e[p-1][2]>i;p--)e[p]=e[p-1];e[p]=[n,o,i]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,i,a=n[0],r=n[1],c=n[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(o in r)s.o(r,o)&&(s.m[o]=r[o]);if(c)var p=c(s)}for(t&&t(n);l<a.length;l++)i=a[l],s.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return s.O(p)},n=self["webpackChunklesson_app"]=self["webpackChunklesson_app"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(5899)}));n=s.O(n)})();
//# sourceMappingURL=app.b66ef972.js.map