(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{G6KV:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=u("Ye0E"),a=function(l,n,u,e){return new(u||(u=Promise))(function(t,a){function i(l){try{o(e.next(l))}catch(l){a(l)}}function d(l){try{o(e.throw(l))}catch(l){a(l)}}function o(l){l.done?t(l.value):new u(function(n){n(l.value)}).then(i,d)}o((e=e.apply(l,n||[])).next())})},i=function(l,n){var u,e,t,a,i={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return a={next:d(0),throw:d(1),return:d(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function d(a){return function(d){return function(a){if(u)throw new TypeError("Generator is already executing.");for(;i;)try{if(u=1,e&&(t=e[2&a[0]?"return":a[0]?"throw":"next"])&&!(t=t.call(e,a[1])).done)return t;switch(e=0,t&&(a=[0,t.value]),a[0]){case 0:case 1:t=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,e=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(t=(t=i.trys).length>0&&t[t.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!t||a[1]>t[0]&&a[1]<t[3])){i.label=a[1];break}if(6===a[0]&&i.label<t[1]){i.label=t[1],t=a;break}if(t&&i.label<t[2]){i.label=t[2],i.ops.push(a);break}t[2]&&i.ops.pop(),i.trys.pop();continue}a=n.call(l,i)}catch(l){a=[6,l],e=0}finally{u=t=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,d])}}},d=function(){function l(l,n,u){this.sanitizer=l,this.packageService=n,this.activeRoute=u,this.tab="GALLERY",this.mapUrl="",this.id=u.snapshot.paramMap.get("id")}return l.prototype.ngOnInit=function(){this.id&&this.getPackage(this.id)},l.prototype.getTab=function(l){this.tab=l},l.prototype.getPackage=function(l){return a(this,void 0,void 0,function(){var n=this;return i(this,function(u){switch(u.label){case 0:return[4,this.packageService.getPackageForUser(l).subscribe(function(u){n.package=u,n.loadPackageImages(l),n.setMapUrl(n.package.place)})];case 1:return u.sent(),[2]}})})},l.prototype.loadPackageImages=function(l){return a(this,void 0,void 0,function(){var n=this;return i(this,function(u){switch(u.label){case 0:return[4,this.packageService.getPackageImageUrls(l).subscribe(function(l){if(l.length){var u=[];l.forEach(function(l){u.push(n.packageService.imageUrl+l)}),n.package.imagePaths=u}},function(l){console.log(l)})];case 1:return u.sent(),[2]}})})},l.prototype.setMapUrl=function(l){this.mapUrl="https://maps.google.com/maps?q="+l+"&z=10&output=embed&key=AIzaSyBebHxv0TAvEui-oTwWyjODuraQ2QaYQXU"},l}(),o=function(){},c=u("pMnS"),s=u("9AJC"),r=u("Ip0R"),p=u("zrJq"),f=u("CLyB"),g=u("ZYjt"),m=u("ZYCi"),v=e["\u0275crt"]({encapsulation:0,styles:[[".package-details[_ngcontent-%COMP%]{font-family:Questrial}.package-details-head-image[_ngcontent-%COMP%]{width:100%;height:60vh;min-height:400px}.package-details-header[_ngcontent-%COMP%]{text-align:center;font-size:35px;font-weight:700;padding-bottom:30px;color:#fff;text-shadow:2px 2px 4px #000;z-index:3}.package-details-image[_ngcontent-%COMP%]{width:100%;height:60vh}.package-details-text[_ngcontent-%COMP%]{font-size:24px;font-weight:600}.package-details-facilities[_ngcontent-%COMP%]{background:rgba(0,0,0,.1)}.package-details-facilities-box[_ngcontent-%COMP%]{background:#fff;margin:5px;padding:0}.package-details-facilities-box-image[_ngcontent-%COMP%]{padding:5px;height:60px;width:100%}.package-details-facilities-box-text[_ngcontent-%COMP%]{text-align:center;font-size:14px}.package-details-gallery-image[_ngcontent-%COMP%]{width:100%;height:40vh}.information-head-price[_ngcontent-%COMP%]{color:#3fd0d4;font-size:18px;font-weight:600}.information-description[_ngcontent-%COMP%]{padding:10px 0;text-align:justify}.information-line[_ngcontent-%COMP%]{padding:10px 0;font-size:16px}.plan-title[_ngcontent-%COMP%]{font-size:20px;font-weight:800;margin-bottom:30px}.plan-head[_ngcontent-%COMP%]{font-size:18px;font-weight:600}.plan-description[_ngcontent-%COMP%]{font-size:16px;padding:15px 0}.plan-point[_ngcontent-%COMP%]{display:list-item;font-size:16px;list-style-type:square;list-style-position:inside}.plan-index[_ngcontent-%COMP%]{position:relative;display:inline-block;font-size:20px;font-weight:800;height:50px;width:50px;color:#fff;padding-top:12px;text-align:center;background-color:#3fd0d4}.nav-item[_ngcontent-%COMP%]{padding:21px 20px;cursor:pointer}.nav-item.active[_ngcontent-%COMP%], .nav-item[_ngcontent-%COMP%]:hover{background:#fff}.nav-link[_ngcontent-%COMP%]{font-family:Catamaran,sans-serif;font-size:13px;line-height:1.692307692307692em;font-weight:800;letter-spacing:.1em;color:#212121}"]],data:{}});function k(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,0,"img",[["alt","package image 1"],["class","package-details-head-image"]],[[8,"src",4]],null,null,null,null))],null,function(l,n){l(n,0,0,n.component.package.imagePaths[0])})}function h(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,[" ",", "]))],null,function(l,n){l(n,1,0,n.context.$implicit)})}function b(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"div",[["class","col-6 py-2"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,0,"i",[["class","fa fa-check-circle-o"]],null,null,null,null,null)),(l()(),e["\u0275ted"](2,null,[" "," "]))],null,function(l,n){l(n,2,0,n.context.$implicit)})}function R(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"div",[["class","col-6 py-2"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,0,"i",[["class","fa fa-times-circle-o"]],null,null,null,null,null)),(l()(),e["\u0275ted"](2,null,[" "," "]))],null,function(l,n){l(n,2,0,n.context.$implicit)})}function x(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,72,"div",[["class","information"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,5,"div",[["class","information-head"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e["\u0275ted"](3,null,["",""])),(l()(),e["\u0275eld"](4,0,null,null,1,"span",[["class","information-head-price"]],null,null,null,null,null)),(l()(),e["\u0275ted"](5,null,["BDT ",""])),(l()(),e["\u0275ted"](-1,null,[" / per person "])),(l()(),e["\u0275eld"](7,0,null,null,1,"div",[["class","information-description"]],null,null,null,null,null)),(l()(),e["\u0275ted"](8,null,[" "," "])),(l()(),e["\u0275eld"](9,0,null,null,7,"div",[["class","information-line"]],null,null,null,null,null)),(l()(),e["\u0275eld"](10,0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](11,0,null,null,2,"div",[["class","col-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](12,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Destination"])),(l()(),e["\u0275eld"](14,0,null,null,2,"div",[["class","col-8"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,h)),e["\u0275did"](16,278528,null,0,r.n,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](17,0,null,null,6,"div",[["class","information-line"]],null,null,null,null,null)),(l()(),e["\u0275eld"](18,0,null,null,5,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](19,0,null,null,2,"div",[["class","col-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](20,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Departure"])),(l()(),e["\u0275eld"](22,0,null,null,1,"div",[["class","col-8"]],null,null,null,null,null)),(l()(),e["\u0275ted"](23,null,[" "," "])),(l()(),e["\u0275eld"](24,0,null,null,6,"div",[["class","information-line"]],null,null,null,null,null)),(l()(),e["\u0275eld"](25,0,null,null,5,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](26,0,null,null,2,"div",[["class","col-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](27,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Departure Date"])),(l()(),e["\u0275eld"](29,0,null,null,1,"div",[["class","col-8"]],null,null,null,null,null)),(l()(),e["\u0275ted"](30,null,[" "," "])),(l()(),e["\u0275eld"](31,0,null,null,6,"div",[["class","information-line"]],null,null,null,null,null)),(l()(),e["\u0275eld"](32,0,null,null,5,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](33,0,null,null,2,"div",[["class","col-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](34,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Departure Time"])),(l()(),e["\u0275eld"](36,0,null,null,1,"div",[["class","col-8"]],null,null,null,null,null)),(l()(),e["\u0275ted"](37,null,[" Approximately "," "])),(l()(),e["\u0275eld"](38,0,null,null,6,"div",[["class","information-line"]],null,null,null,null,null)),(l()(),e["\u0275eld"](39,0,null,null,5,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](40,0,null,null,2,"div",[["class","col-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](41,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Return Date"])),(l()(),e["\u0275eld"](43,0,null,null,1,"div",[["class","col-8"]],null,null,null,null,null)),(l()(),e["\u0275ted"](44,null,[" "," "])),(l()(),e["\u0275eld"](45,0,null,null,6,"div",[["class","information-line"]],null,null,null,null,null)),(l()(),e["\u0275eld"](46,0,null,null,5,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](47,0,null,null,2,"div",[["class","col-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](48,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Return Time"])),(l()(),e["\u0275eld"](50,0,null,null,1,"div",[["class","col-8"]],null,null,null,null,null)),(l()(),e["\u0275ted"](51,null,["Approximately ",""])),(l()(),e["\u0275eld"](52,0,null,null,8,"div",[["class","information-line"]],null,null,null,null,null)),(l()(),e["\u0275eld"](53,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](54,0,null,null,2,"div",[["class","col-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](55,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Included"])),(l()(),e["\u0275eld"](57,0,null,null,3,"div",[["class","col-8"]],null,null,null,null,null)),(l()(),e["\u0275eld"](58,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,b)),e["\u0275did"](60,278528,null,0,r.n,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](61,0,null,null,8,"div",[["class","information-line"]],null,null,null,null,null)),(l()(),e["\u0275eld"](62,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](63,0,null,null,2,"div",[["class","col-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](64,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Not Included"])),(l()(),e["\u0275eld"](66,0,null,null,3,"div",[["class","col-8"]],null,null,null,null,null)),(l()(),e["\u0275eld"](67,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,R)),e["\u0275did"](69,278528,null,0,r.n,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](70,0,null,null,2,"div",[["class","information-head"]],null,null,null,null,null)),(l()(),e["\u0275eld"](71,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Other packages"]))],function(l,n){var u=n.component;l(n,16,0,u.package.destinations),l(n,60,0,u.package.include),l(n,69,0,u.package.exclude)},function(l,n){var u=n.component;l(n,3,0,u.package.title),l(n,5,0,u.package.price),l(n,8,0,u.package.description),l(n,23,0,u.package.departurePlace),l(n,30,0,u.package.departureDate),l(n,37,0,u.package.departureTime),l(n,44,0,u.package.returnDate),l(n,51,0,u.package.returnTime)})}function w(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"div",[["class","plan-point"]],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,[" "," "]))],null,function(l,n){l(n,1,0,n.context.$implicit)})}function y(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,10,"div",[["class","row pl-3 pb-5"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,2,"div",[["class","plan-line"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,1,"span",[["class","plan-index"]],null,null,null,null,null)),(l()(),e["\u0275ted"](3,null,[""," "])),(l()(),e["\u0275eld"](4,0,null,null,6,"div",[["class","col"]],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,1,"div",[["class","plan-head"]],null,null,null,null,null)),(l()(),e["\u0275ted"](6,null,["",""])),(l()(),e["\u0275eld"](7,0,null,null,1,"div",[["class","plan-description"]],null,null,null,null,null)),(l()(),e["\u0275ted"](8,null,["",""])),(l()(),e["\u0275and"](16777216,null,null,1,null,w)),e["\u0275did"](10,278528,null,0,r.n,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,10,0,n.context.$implicit.points)},function(l,n){l(n,3,0,n.context.index+1),l(n,6,0,n.context.$implicit.head),l(n,8,0,n.context.$implicit.description)})}function C(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,2,"div",[["class","plan-title"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Tour Plan"])),(l()(),e["\u0275and"](16777216,null,null,1,null,y)),e["\u0275did"](5,278528,null,0,r.n,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,5,0,n.component.package.packagePlans)},null)}function I(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,2,"div",[["class","plan-title"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Tour Location"])),(l()(),e["\u0275eld"](4,0,null,null,0,"iframe",[["allowfullscreen",""],["frameborder","0"],["height","450"],["style","border:0"],["width","100%"]],[[8,"src",5]],null,null,null,null))],null,function(l,n){var u=n.component;l(n,4,0,u.sanitizer.bypassSecurityTrustResourceUrl(u.mapUrl))})}function O(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"div",[["class","col-6 p-0 py-1"]],null,null,null,null,null)),e["\u0275did"](1,278528,null,0,r.m,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](2,{"pl-md-1":0,"pr-md-1":1}),(l()(),e["\u0275eld"](3,0,null,null,0,"img",[["alt","room image 1"],["class","package-details-gallery-image"]],[[8,"src",4]],null,null,null,null))],function(l,n){l(n,1,0,"col-6 p-0 py-1",l(n,2,0,n.context.odd,n.context.even))},function(l,n){l(n,3,0,n.context.$implicit)})}function T(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,7,"div",[],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,2,"div",[["class","plan-title"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Gallery"])),(l()(),e["\u0275eld"](4,0,null,null,3,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,2,null,O)),e["\u0275did"](6,278528,null,0,r.n,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),e["\u0275pid"](0,r.u,[])],function(l,n){var u=n.component;l(n,6,0,e["\u0275unv"](n,6,0,e["\u0275nov"](n,7).transform(null==u.package?null:u.package.imagePaths,1)))},null)}function D(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"div",[],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,2,"div",[["class","plan-title"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Reviews Scores and Score Breakdown"]))],null,null)}function P(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,5,"tr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](2,null,["",""])),e["\u0275ppd"](3,2),(l()(),e["\u0275eld"](4,0,null,null,1,"th",[["class","text-right"]],null,null,null,null,null)),(l()(),e["\u0275ted"](5,null,["BDT ",""]))],null,function(l,n){l(n,2,0,e["\u0275unv"](n,2,0,l(n,3,0,e["\u0275nov"](n.parent.parent.parent,0),n.context.$implicit.key,"d MMM,yy"))),l(n,5,0,n.context.$implicit.value)})}function M(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,16,"div",[["class","border my-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,15,"table",[["class","table table-striped table-hover"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,14,"tbody",[],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Date"])),(l()(),e["\u0275eld"](6,0,null,null,1,"th",[["class","text-right"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Price"])),(l()(),e["\u0275and"](16777216,null,null,2,null,P)),e["\u0275did"](9,278528,null,0,r.n,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),e["\u0275pid"](0,r.i,[e.KeyValueDiffers]),(l()(),e["\u0275eld"](11,0,null,null,5,"tr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](12,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Total"])),(l()(),e["\u0275eld"](14,0,null,null,2,"th",[["class","text-right"]],null,null,null,null,null)),(l()(),e["\u0275eld"](15,0,null,null,1,"span",[["style"," font-size: 20px;font-weight: 600;"]],null,null,null,null,null)),(l()(),e["\u0275ted"](16,null,[" BDT "," "]))],function(l,n){var u=n.component;l(n,9,0,e["\u0275unv"](n,9,0,e["\u0275nov"](n,10).transform(u.priceMap)))},function(l,n){l(n,16,0,n.component.totalPrice)})}function A(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"div",[["class","border my-4 text-center"],["style","padding-left: 20px;"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"span",[["style"," font-size: 30px;font-weight: 600;"]],null,null,null,null,null)),(l()(),e["\u0275ted"](2,null,[" "," BDT "])),(l()(),e["\u0275ted"](-1,null,[" / PER NIGHT "]))],null,function(l,n){var u=n.component;l(n,2,0,null==u.room?null:u.room.price)})}function V(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"button",[["class","btn btn-block btn-warning"]],null,[[null,"click"]],function(l,n,u){var e=!0,t=l.component;return"click"===n&&(e=!1!==t.checkRoomAvailability(t.room.id)&&e),e},null,null)),(l()(),e["\u0275ted"](-1,null,[" CLICK FOR BOOKING "]))],null,null)}function E(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"button",[["class","btn btn-block btn-success"]],null,[[null,"click"]],function(l,n,u){var e=!0,t=l.component;return"click"===n&&(e=!1!==t.bookRoom(t.room.id)&&e),e},null,null)),(l()(),e["\u0275ted"](-1,null,[" BOOK NOW "]))],null,null)}function L(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"button",[["class","btn btn-block btn-danger"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.goBack()&&e),e},null,null)),(l()(),e["\u0275ted"](-1,null,[" SORRY THIS ROOM IS NOT AVAILABLE "]))],null,null)}function F(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,73,"div",[["class","package-details"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,4,"div",[["class","container-fluid"],["style","z-index: -39;"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,3,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,2,"div",[["class","col-12 p-0"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,k)),e["\u0275did"](5,16384,null,0,r.o,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](6,0,null,null,67,"div",[["class","container"],["style","z-index: 10;"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,66,"div",[["style","margin-top: -187px; border: 1px solid lightgray;"]],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,65,"div",[["class","row m-0 mt-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](9,0,null,null,2,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](10,0,null,null,1,"div",[["class","package-details-header"]],null,null,null,null,null)),(l()(),e["\u0275ted"](11,null,[" "," "])),(l()(),e["\u0275eld"](12,0,null,null,33,"div",[["class","col-12 p-0 bg-light"]],null,null,null,null,null)),(l()(),e["\u0275eld"](13,0,null,null,32,"nav",[["class","navbar navbar-expand-md p-0"]],null,null,null,null,null)),(l()(),e["\u0275eld"](14,0,null,null,31,"div",[["class","collapse navbar-collapse"],["id","navbarsExampleDefault"]],null,null,null,null,null)),(l()(),e["\u0275eld"](15,0,null,null,30,"ul",[["class","navbar-nav mr-auto"]],null,null,null,null,null)),(l()(),e["\u0275eld"](16,0,null,null,5,"li",[["class","nav-item"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.getTab("INFORMATION")&&e),e},null,null)),e["\u0275did"](17,278528,null,0,r.m,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](18,{active:0}),(l()(),e["\u0275eld"](19,0,null,null,2,"a",[["class","nav-link"]],null,null,null,null,null)),(l()(),e["\u0275eld"](20,0,null,null,0,"i",[["class","fa fa-info"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" \xa0 INFORMATION "])),(l()(),e["\u0275eld"](22,0,null,null,5,"li",[["class","nav-item"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.getTab("TOUR PLAN")&&e),e},null,null)),e["\u0275did"](23,278528,null,0,r.m,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](24,{active:0}),(l()(),e["\u0275eld"](25,0,null,null,2,"a",[["class","nav-link"]],null,null,null,null,null)),(l()(),e["\u0275eld"](26,0,null,null,0,"i",[["class","fa fa-calendar-o"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" \xa0 TOUR PLAN "])),(l()(),e["\u0275eld"](28,0,null,null,5,"li",[["class","nav-item "]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.getTab("LOCATION")&&e),e},null,null)),e["\u0275did"](29,278528,null,0,r.m,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](30,{active:0}),(l()(),e["\u0275eld"](31,0,null,null,2,"a",[["class","nav-link"]],null,null,null,null,null)),(l()(),e["\u0275eld"](32,0,null,null,0,"i",[["class","fa fa-map-marker"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" \xa0 LOCATION "])),(l()(),e["\u0275eld"](34,0,null,null,5,"li",[["class","nav-item"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.getTab("GALLERY")&&e),e},null,null)),e["\u0275did"](35,278528,null,0,r.m,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](36,{active:0}),(l()(),e["\u0275eld"](37,0,null,null,2,"a",[["class","nav-link"]],null,null,null,null,null)),(l()(),e["\u0275eld"](38,0,null,null,0,"i",[["class","fa fa-camera"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" \xa0 GALLERY "])),(l()(),e["\u0275eld"](40,0,null,null,5,"li",[["class","nav-item"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.getTab("REVIEWS")&&e),e},null,null)),e["\u0275did"](41,278528,null,0,r.m,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](42,{active:0}),(l()(),e["\u0275eld"](43,0,null,null,2,"a",[["class","nav-link"]],null,null,null,null,null)),(l()(),e["\u0275eld"](44,0,null,null,0,"i",[["class","fa fa-comments-o"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" \xa0 REVIEWS "])),(l()(),e["\u0275eld"](46,0,null,null,10,"div",[["class","col-md-9 pt-4"],["style","background-color: white; z-index: 20;"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,x)),e["\u0275did"](48,16384,null,0,r.o,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,C)),e["\u0275did"](50,16384,null,0,r.o,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,I)),e["\u0275did"](52,16384,null,0,r.o,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,T)),e["\u0275did"](54,16384,null,0,r.o,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,D)),e["\u0275did"](56,16384,null,0,r.o,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](57,0,null,null,16,"div",[["class","col-md-3"],["style","background-color: white; z-index: 20; padding-top: 120px;"]],null,null,null,null,null)),(l()(),e["\u0275eld"](58,0,null,null,5,"div",[["class","input-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](59,0,null,null,2,"div",[["class","input-group-prepend"]],null,null,null,null,null)),(l()(),e["\u0275eld"](60,0,null,null,1,"div",[["class","input-group-text"]],null,null,null,null,null)),(l()(),e["\u0275eld"](61,0,null,null,0,"i",[["class","fa fa-calendar"]],null,null,null,null,null)),(l()(),e["\u0275eld"](62,0,null,null,1,"input",[["class","form-control"],["daterangepicker",""],["name","daterangeInput"],["type","text"]],null,[[null,"selected"]],function(l,n,u){var e=!0;return"selected"===n&&(e=!1!==l.component.selectedDate(u)&&e),e},null,null)),e["\u0275did"](63,4603904,null,0,p.DaterangePickerComponent,[e.ElementRef,f.DaterangepickerConfig,e.KeyValueDiffers],{options:[0,"options"]},{selected:"selected"}),(l()(),e["\u0275and"](16777216,null,null,1,null,M)),e["\u0275did"](65,16384,null,0,r.o,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,A)),e["\u0275did"](67,16384,null,0,r.o,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,V)),e["\u0275did"](69,16384,null,0,r.o,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,E)),e["\u0275did"](71,16384,null,0,r.o,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,L)),e["\u0275did"](73,16384,null,0,r.o,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,5,0,null==u.package?null:null==u.package.imagePaths?null:u.package.imagePaths.length),l(n,17,0,"nav-item",l(n,18,0,"INFORMATION"==u.tab)),l(n,23,0,"nav-item",l(n,24,0,"TOUR PLAN"==u.tab)),l(n,29,0,"nav-item ",l(n,30,0,"LOCATION"==u.tab)),l(n,35,0,"nav-item",l(n,36,0,"GALLERY"==u.tab)),l(n,41,0,"nav-item",l(n,42,0,"REVIEWS"==u.tab)),l(n,48,0,"INFORMATION"==u.tab),l(n,50,0,"TOUR PLAN"==u.tab),l(n,52,0,"LOCATION"==u.tab),l(n,54,0,"GALLERY"==u.tab),l(n,56,0,"REVIEWS"==u.tab),l(n,63,0,u.options),l(n,65,0,u.priceMap),l(n,67,0,!u.priceMap),l(n,69,0,u.showCheckAvailability),l(n,71,0,u.showBookNow),l(n,73,0,u.showUnavailable)},function(l,n){var u=n.component;l(n,11,0,null==u.package?null:u.package.title)})}function z(l){return e["\u0275vid"](0,[e["\u0275pid"](0,r.f,[e.LOCALE_ID]),(l()(),e["\u0275and"](16777216,null,null,1,null,F)),e["\u0275did"](2,16384,null,0,r.o,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,2,0,n.component.package)},null)}var N=e["\u0275ccf"]("app-details",d,function(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-details",[],null,null,null,z,v)),e["\u0275did"](1,114688,null,0,d,[g.b,t.a,m.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),_=u("gIcY"),S=u("4GxJ"),B=u("bBiL"),U=u("KZX/");u.d(n,"PackagesModuleNgFactory",function(){return K});var K=e["\u0275cmf"](o,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[c.a,s.a,s.b,s.m,s.i,s.j,s.k,s.l,N]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,f.DaterangepickerConfig,f.DaterangepickerConfig,[]),e["\u0275mpd"](4608,r.q,r.p,[e.LOCALE_ID,[2,r.D]]),e["\u0275mpd"](4608,_.A,_.A,[]),e["\u0275mpd"](4608,_.f,_.f,[]),e["\u0275mpd"](4608,S.y,S.y,[e.ComponentFactoryResolver,e.Injector,S.ab,S.z]),e["\u0275mpd"](1073742336,B.Daterangepicker,B.Daterangepicker,[]),e["\u0275mpd"](1073742336,r.c,r.c,[]),e["\u0275mpd"](1073742336,m.m,m.m,[[2,m.s],[2,m.k]]),e["\u0275mpd"](1073742336,_.x,_.x,[]),e["\u0275mpd"](1073742336,_.k,_.k,[]),e["\u0275mpd"](1073742336,_.u,_.u,[]),e["\u0275mpd"](1073742336,S.c,S.c,[]),e["\u0275mpd"](1073742336,S.f,S.f,[]),e["\u0275mpd"](1073742336,S.g,S.g,[]),e["\u0275mpd"](1073742336,S.k,S.k,[]),e["\u0275mpd"](1073742336,S.m,S.m,[]),e["\u0275mpd"](1073742336,S.s,S.s,[]),e["\u0275mpd"](1073742336,S.v,S.v,[]),e["\u0275mpd"](1073742336,S.A,S.A,[]),e["\u0275mpd"](1073742336,S.E,S.E,[]),e["\u0275mpd"](1073742336,S.F,S.F,[]),e["\u0275mpd"](1073742336,S.I,S.I,[]),e["\u0275mpd"](1073742336,S.L,S.L,[]),e["\u0275mpd"](1073742336,S.S,S.S,[]),e["\u0275mpd"](1073742336,S.W,S.W,[]),e["\u0275mpd"](1073742336,S.X,S.X,[]),e["\u0275mpd"](1073742336,S.Y,S.Y,[]),e["\u0275mpd"](1073742336,S.B,S.B,[]),e["\u0275mpd"](1073742336,U.a,U.a,[]),e["\u0275mpd"](1073742336,o,o,[]),e["\u0275mpd"](1024,m.i,function(){return[[{path:":id",component:d},{path:"**",redirectTo:"/"}]]},[])])})}}]);