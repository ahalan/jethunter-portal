(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{523:function(e,t,a){},525:function(e,t,a){},527:function(e,t,a){},672:function(e,t,a){"use strict";a.r(t);var r={};a.r(r),a.d(r,"actions",function(){return P}),a.d(r,"fetchCurrentUser",function(){return q});var n=a(11),s=a.n(n),l=a(14),i=a(8),o=a(33),c=a(10),m=a(6),u=a(9),p=a(0),d=a.n(p),h=a(135),g=a(518),f=(a(164),a(523),function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return d.a.createElement("div",null,d.a.createElement(h.k,null,d.a.createElement(h.v,null,d.a.createElement(h.i,{sm:"3",className:"text-center"},d.a.createElement("div",null,d.a.createElement("img",{src:a(186),className:"bg-danger width-100 rounded-circle img-fluid mb-4",alt:"Card cap 02"})),d.a.createElement("div",null,d.a.createElement(h.b,{tag:g.a,to:"/profile",color:"info",className:"shadow-z-2 gradient-nepal",size:"sm"},"Edit profile"))),d.a.createElement(h.i,{sm:"9"},d.a.createElement(h.v,null,d.a.createElement(h.i,null,d.a.createElement("h3",{className:"font-large-1"},this.props.fullName))),d.a.createElement(h.v,null,d.a.createElement(h.i,null,d.a.createElement("h5",null,"Broker at ",d.a.createElement("a",{href:"#"},this.props.company)))),d.a.createElement(h.v,null,d.a.createElement(h.i,null,d.a.createElement("span",null,"We help to alleviate the expense and burden of recruiting and subsequent administrative support functions through our crew leasing and recruiting services. ")))))))}}]),t}(p.PureComponent)),b=a(25),E=a.n(b),y=a(187),v=a.n(y),N=a(188),C=a.n(N),w=(a(525),function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e,t,a;return"right"===this.props.iconSide?t=this.props.children:(e=this.props.children,a="text-right"),d.a.createElement(h.c,{className:E()(this.props.cardBgColor)},d.a.createElement(h.d,{className:"pt-2 pb-0"},d.a.createElement(h.s,null,e,d.a.createElement(h.s,{body:!0,className:E()("white",a)},d.a.createElement("h3",{className:E()("font-large-1 mb-1",this.props.statisticsColor)},this.props.statistics),d.a.createElement("span",null,this.props.text)),t)),d.a.createElement(v.a,{className:"WidgetlineChart WidgetlineChartshadow mb-2",data:this.props.chartData,type:"Line",options:{height:"75px",axisX:{showGrid:!0,showLabel:!1,offset:0},axisY:{showGrid:!1,low:40,showLabel:!1,offset:0},lineSmooth:C.a.Interpolation.cardinal({tension:0}),fullWidth:!0}}))}}]),t}(p.PureComponent)),D={ChartistData:{labels:["1","2","3","4","5","6","7","8","9","10","11","12","13"],series:[[50,45,60,55,70,55,60,55,65,57,60,53,53]]},ChartistData2:{labels:["Jan","Feb","Mar","Apr","May","June","July","Aug"],series:[[55,60,50,55,50,60,55,57]]},DonutChartData1:{series:[{name:"done",className:"ct-done",value:10},{name:"outstanding",className:"ct-outstanding",value:3}]},DonutChartData2:{series:[{name:"done",className:"ct-done",value:10},{name:"outstanding",className:"ct-outstanding",value:3}]},DonutChartData3:{series:[{name:"done",className:"ct-done",value:10},{name:"outstanding",className:"ct-outstanding",value:3}]}},j=a(147),k=(a(527),function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return d.a.createElement(h.c,null,d.a.createElement(h.f,null,d.a.createElement(h.h,{className:"mb-0"},this.props.cardTitle)),d.a.createElement(h.d,{className:"pt-2 pb-0"},d.a.createElement("div",{className:"chart-info mb-2"},d.a.createElement("span",{className:"gradient-blackberry d-inline-block rounded-circle mr-1 p-1"}," "),this.props.salesText,d.a.createElement("span",{className:"gradient-mint d-inline-block rounded-circle mr-1 ml-2 p-1"}," "),this.props.visitText)),d.a.createElement(v.a,{className:"height-350 lineArea",data:this.props.productsSalesData,type:"Line",options:{low:0,showArea:!0,fullWidth:!0,onlyInteger:!0,axisY:{low:0,scaleMinSpace:50,offset:35},axisX:{showGrid:!1}},listener:{created:function(e){var t=e.svg.elem("defs");t.elem("linearGradient",{id:"gradient",x1:0,y1:1,x2:1,y2:0}).elem("stop",{offset:0,"stop-color":"rgba(0, 201, 255, 1)"}).parent().elem("stop",{offset:1,"stop-color":"rgba(146, 254, 157, 1)"}),t.elem("linearGradient",{id:"gradient1",x1:0,y1:1,x2:1,y2:0}).elem("stop",{offset:0,"stop-color":"rgba(132, 60, 247, 1)"}).parent().elem("stop",{offset:1,"stop-color":"rgba(56, 184, 242, 1)"})}}}))}}]),t}(p.PureComponent)),x={WeeklySalesStatisticsBarChartData:{labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],series:[[80,85,75,65,63,70,82]]},MonthlySalesStatisticsBarChartData:{labels:["Jan","Feb","Mar","Apr","May","Jun"],series:[[8,9,5,6,7,4],[2,1,5,4,3,6]]},HobbiesStatisticsBarChartData:{labels:["Sport","Music","Travel","News"],series:[[53,23,40,30]]},ProjectStatsDonutChartData:{series:[{name:"Done",className:"ct-done",progressClassName:"bg-success",value:40},{name:"Progress",className:"ct-progress",progressClassName:"bg-amber",value:15},{name:"Outstanding",className:"ct-outstanding",progressClassName:"bg-deep-purple bg-lighten-1",value:20},{name:"Started",className:"ct-started",progressClassName:"bg-blue",value:25}]},UserListData:{series:[{img:"https://randomuser.me/api/portraits/med/women/10.jpg",fullName:"Jessica Rice",position:"UX Designer",flag:1},{img:"https://randomuser.me/api/portraits/med/men/0.jpg",fullName:"Jacob Rios",position:"HTML Developer",flag:0},{img:"https://randomuser.me/api/portraits/med/men/1.jpg",fullName:"Russell Delgado",position:"Database Designer",flag:0},{img:"https://randomuser.me/api/portraits/med/women/3.jpg",fullName:"Sara McDonald",position:"Team Leader",flag:1},{img:"https://randomuser.me/api/portraits/med/men/3.jpg",fullName:"Peter Parker",position:"UI/UX Designer",flag:1}]},DiscoverPeopleList:{series:[{img:"https://randomuser.me/api/portraits/med/women/0.jpg",fullName:"Jessica Jack",role:"Sales",followBtn:"gradient-blackberry white",followTxt:"Following"},{img:"https://randomuser.me/api/portraits/med/women/2.jpg",fullName:"Russell Rice",role:"Marketing",followBtn:"btn-outline-grey",followTxt:"Follow"},{img:"https://randomuser.me/api/portraits/med/women/3.jpg",fullName:"Sara McDo",role:"Sales",followBtn:"gradient-blackberry white",followTxt:"Following"},{img:"https://randomuser.me/api/portraits/med/women/9.jpg",fullName:"Marshal Jack",role:"Marketing",followBtn:"gradient-blackberry white",followTxt:"Following"},{img:"https://randomuser.me/api/portraits/med/men/6.jpg",fullName:"Tony Rios",role:"Engineering",followBtn:"btn-outline-grey",followTxt:"Follow"}]},DailyDietList:{list:[{item:"Protein Milk",priorityColor:"bg-primary",quantity:4},{item:"Oz Water",priorityColor:"bg-info",quantity:2},{item:"Vegetable Juice",priorityColor:"bg-warning",quantity:6},{item:"Sugar Free Jello-O",priorityColor:"bg-success",quantity:1},{item:"Protein Meal",priorityColor:"bg-danger",quantity:3}]},ShoppingCart:{list:[{img:"avatar-s-11",product:"Ferrero Rocher",quantity:2,status:"active",amount:"$19.94",delete:"X"},{img:"avatar-s-11",product:"Headphones",quantity:4,status:"cancled",amount:"$8.4",delete:"X"},{img:"avatar-s-11",product:"Camera",quantity:1,status:"active",amount:"$20.24",delete:"X"},{img:"avatar-s-11",product:"Beer",quantity:6,status:"active",amount:"$1.4",delete:"X"}]},VisitSalesData:{labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],series:[[5,30,25,55,45,65,60,105,80,110,120,150],[80,95,87,155,140,147,130,180,160,175,165,200]]},ProductsSalesData:{labels:[1,2,3,4,5,6,7,8],series:[[0,20,10,45,20,36,21,0],[0,5,22,14,32,12,28,0]]},SalesAnalysisData:{labels:["Jan","Feb","Mar","Apr","May","Jun"],series:[[65,105,145,105,145,185],[125,80,30,70,110,150],[175,190,160,190,140,100]]},SalesPerVisitData:{labels:[1,2,3,4,5,6,7,8],series:[[0,5,15,8,15,9,30,0],[0,3,5,2,8,1,5,0]]},UserStatisticData:{labels:["Jan","Feb","Mar","Apr","May"],series:[[50,70,45,75,85]]},EarningStatisticData:{labels:["1","2","3","4","5","6","7","8","9","10","11","12","13"],series:[[50,45,60,55,70,55,60,55,65,57,60,53,53]]}},S=a(15),O=a(529),M=a.n(O),J=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).handleCopyClick=function(e){e.preventDefault(),e.stopPropagation(),M()(a.props.brokerInfo.jetmanId),S.toastr.success("Copied to clipboard!")},a.renderNotFilled=function(){return d.a.createElement("div",{className:"text-center"},d.a.createElement("h1",null,"Hi ",a.props.firstName,"!"),d.a.createElement("h1",null,"You need to fill out your profile information before continue"),d.a.createElement(h.b,{tag:g.a,to:"/profile",color:"info",className:"shadow-z-2 gradient-purple-bliss"},"Go to Profile"))},a.renderFilled=function(){var e=a.props,t=e.firstName,r=e.lastName,n=e.brokerInfo,s=void 0===n?{}:n;return d.a.createElement(p.Fragment,null,d.a.createElement(h.v,null,d.a.createElement(h.i,{sm:"12",md:"12"},d.a.createElement(h.c,null,d.a.createElement(h.d,{className:"text-center"},d.a.createElement(h.h,null,"Congratulations ",t,"!"),d.a.createElement(h.g,null,"You have completed the creation of Jetman Profile! The Jetman ID was assigned."),d.a.createElement("div",null,"Your JETMAN ID:"),d.a.createElement("div",{className:"text-center"},d.a.createElement("a",{href:"https://".concat(s.jetmanId,".jetman.io")},"https://".concat(s.jetmanId,".jetman.io")),d.a.createElement("div",{className:"pad2"},d.a.createElement("br",null),d.a.createElement(h.b,{color:"info",className:"shadow-z-2 gradient-purple-bliss",size:"sm",onClick:a.handleCopyClick},"Copy"),d.a.createElement("span",null,"\xa0"),d.a.createElement(h.b,{color:"info",className:"shadow-z-2 gradient-pomegranate",size:"sm",onClick:a.handleCopyClick},"Share"))))))),d.a.createElement(h.v,null,d.a.createElement(h.i,{sm:"12",md:"12"},d.a.createElement(h.c,null,d.a.createElement(h.d,null,d.a.createElement(f,{fullName:"".concat(t," ").concat(r),company:s.company}))))),d.a.createElement("h3",null,"Your Landing Page visits"),d.a.createElement(h.v,{className:"row-eq-height"},d.a.createElement(h.i,{sm:"12",md:"6",xl:"3"},d.a.createElement(w,{chartData:D.ChartistData,cardBgColor:"gradient-blackberry",statistics:"15",text:"Today",iconSide:"right"},d.a.createElement(j.BarChart,{size:36,strokeWidth:"1.3",color:"#fff"}))),d.a.createElement(h.i,{sm:"12",md:"6",xl:"3"},d.a.createElement(w,{chartData:D.ChartistData,cardBgColor:"gradient-ibiza-sunset",statistics:"98",text:"Week",iconSide:"right"},d.a.createElement(j.BarChart,{size:36,strokeWidth:"1.3",color:"#fff"}))),d.a.createElement(h.i,{sm:"12",md:"6",xl:"3"},d.a.createElement(w,{chartData:D.ChartistData,cardBgColor:"gradient-green-teal",statistics:"456",text:"Month",iconSide:"right"},d.a.createElement(j.BarChart,{size:36,strokeWidth:"1.3",color:"#fff"}))),d.a.createElement(h.i,{sm:"12",md:"6",xl:"3"},d.a.createElement(w,{chartData:D.ChartistData,cardBgColor:"gradient-pomegranate",statistics:"4566",text:"Total",iconSide:"right"},d.a.createElement(j.BarChart,{size:36,strokeWidth:"1.3",color:"#fff"})))),d.a.createElement("h3",null,"Requests statistics"),d.a.createElement(h.v,null,d.a.createElement(h.i,{sm:"12"},d.a.createElement(k,{productsSalesData:x.ProductsSalesData,cardTitle:"Products Sales",salesText:"Sales",visitText:"Visits"}))))},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.fetchCurrentUser();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.props.brokerInfo?this.renderFilled():this.renderNotFilled()}}]),t}(p.Component),T=a(27),B=a(2),F=a(23),P={};function q(){return function(){var e=Object(l.a)(s.a.mark(function e(t,a,r){var n,l,i;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.graphqlRequest,l=r.history,t({type:P.start,payload:{}}),e.next=4,n("query {\n    me {\n      login,\n      firstName,\n      lastName,\n      brokerInfo {\n        description,\n        company,\n        jetmanId\n      }\n    }\n  }");case 4:if(!(i=e.sent).errors){e.next=8;break}return t({type:P.error,payload:{errors:i.errors}}),e.abrupt("return",Object(F.a)(i,{history:l}));case 8:return t({type:P.success,payload:Object(B.a)({},i.data.me)}),e.abrupt("return",Object(B.a)({},i.data.me));case 10:case"end":return e.stop()}},e)}));return function(t,a,r){return e.apply(this,arguments)}}()}["start","success","error"].forEach(function(e){P[e.toLowerCase()]="".concat("FETCH_CURRENT_USER","_").concat(e.toUpperCase())});var z=a(5);t.default=Object(T.connect)(function(e){return e.dashboard},function(e){return Object(z.b)(r,e)})(J)}}]);
//# sourceMappingURL=2.bffbba0b.chunk.js.map