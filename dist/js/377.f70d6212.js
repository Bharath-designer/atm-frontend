"use strict";(self["webpackChunkatm_vue"]=self["webpackChunkatm_vue"]||[]).push([[377],{5758:function(t,a,n){n.r(a),n.d(a,{default:function(){return C}});var s=n(6768),e=n(4232);const r=t=>((0,s.Qi)("data-v-1b080120"),t=t(),(0,s.jt)(),t),i={class:"history-wrapper"},o=r((()=>(0,s.Lk)("div",{class:"history-title"}," Transaction History ",-1))),c={key:0,class:"loader"},d={key:1,class:"transactions"},u={class:"transaction"},l={class:"top-row"},v={class:"transaction-"},p={class:"desc"};function g(t,a,n,r,g,h){return(0,s.uX)(),(0,s.CE)("div",i,[o,g.loading?((0,s.uX)(),(0,s.CE)("div",c,"Loading....")):((0,s.uX)(),(0,s.CE)("div",d,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(g.data,(t=>((0,s.uX)(),(0,s.CE)("div",u,[(0,s.Lk)("div",l,[(0,s.Lk)("div",{class:(0,e.C4)(["transaction-amount",t.transactionType])},(0,e.v_)("Credit"===t.transactionType?"+":"-")+" "+(0,e.v_)(t.transactionAmount),3),(0,s.Lk)("div",v,(0,e.v_)(h.formatDate(t.transactionDateTime)),1)]),(0,s.Lk)("div",p,(0,e.v_)(t.transactionDescription),1)])))),256))]))])}var h=n(8726);const k={0:"Jan",1:"Feb",2:"Mar",3:"Apr",4:"May",5:"Jun",6:"Jul",7:"Aug",8:"Sep",9:"Oct",10:"Nov",11:"Dec"};var m={name:"Withdrawal",data(){return{data:[],loading:!0}},async beforeMount(){try{const t=await(0,h.A)("/api/Atm/GetTransaction");this.data=t.data}catch(t){alert(t.response?.data.message)}finally{this.loading=!1}},methods:{formatDate(t){const a=new Date(t),n=k[a.getMonth()],s=a.getDate(),e=a.getFullYear();let r=a.getHours();const i=(a.getMinutes()<10?"0":"")+a.getMinutes(),o=r<12?"AM":"PM";r>12?r-=12:0===r&&(r=12);const c=`${n} ${s}, ${e} - ${r}:${i} ${o}`;return c}}},y=n(1241);const f=(0,y.A)(m,[["render",g],["__scopeId","data-v-1b080120"]]);var C=f}}]);
//# sourceMappingURL=377.f70d6212.js.map