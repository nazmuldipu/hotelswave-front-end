(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"/YPm":function(t,e,o){"use strict";o.d(e,"a",function(){return u});var n=o("8Y7J"),a=o("d26D"),c=o("s7LF"),b=o("SVse"),l=o("uEz7"),r=function(t,e,o,n){return new(o||(o=Promise))(function(a,c){function b(t){try{r(n.next(t))}catch(e){c(e)}}function l(t){try{r(n.throw(t))}catch(e){c(e)}}function r(t){var e;t.done?a(t.value):(e=t.value,e instanceof o?e:new o(function(t){t(e)})).then(b,l)}r((n=n.apply(t,e||[])).next())})},i=function(t,e){var o,n,a,c,b={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return c={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function l(c){return function(l){return function(c){if(o)throw new TypeError("Generator is already executing.");for(;b;)try{if(o=1,n&&(a=2&c[0]?n.return:c[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,c[1])).done)return a;switch(n=0,a&&(c=[2&c[0],a.value]),c[0]){case 0:case 1:a=c;break;case 4:return b.label++,{value:c[1],done:!1};case 5:b.label++,n=c[1],c=[0];continue;case 7:c=b.ops.pop(),b.trys.pop();continue;default:if(!((a=(a=b.trys).length>0&&a[a.length-1])||6!==c[0]&&2!==c[0])){b=0;continue}if(3===c[0]&&(!a||c[1]>a[0]&&c[1]<a[3])){b.label=c[1];break}if(6===c[0]&&b.label<a[1]){b.label=a[1],a=c;break}if(a&&b.label<a[2]){b.label=a[2],b.ops.push(c);break}a[2]&&b.ops.pop(),b.trys.pop();continue}c=e.call(t,b)}catch(l){c=[6,l],n=0}finally{o=a=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,l])}}};function s(t,e){if(1&t){var o=n.Rb();n.Qb(0,"a",7),n.bc("click",function(){n.wc(o);var t=e.$implicit;return n.dc().onSelectHotel(t.id)}),n.Mb(1,"i",8),n.Fc(2),n.Pb()}if(2&t){var a=e.$implicit;n.zb(2),n.Hc(" ",a.name," ")}}function d(t,e){if(1&t){var o=n.Rb();n.Qb(0,"pagination",9),n.bc("getPage",function(t){return n.wc(o),n.dc().getAdminHotelPage(t)}),n.Pb()}if(2&t){var a=n.dc();n.lc("page",a.hotelPage)("short",a.short)}}var u=function(){function t(t){this.hotelService=t,this.hotel=new n.n,this.short=!0}return t.prototype.ngOnInit=function(){this.getAdminHotelPage()},t.prototype.getAdminHotelPage=function(t){return void 0===t&&(t=0),r(this,void 0,void 0,function(){var e,o=this;return i(this,function(n){switch(n.label){case 0:return e=localStorage.getItem("hotelId"),[4,this.hotelService.getAdminHotelPage(t,this.hotelName).subscribe(function(t){o.hotelPage=t,e&&o.getAdminHotel(+e)})];case 1:return n.sent(),[2]}})})},t.prototype.getAdminHotel=function(t){return r(this,void 0,void 0,function(){var e,o=this;return i(this,function(n){switch(n.label){case 0:return null!=(e=this.hotelPage.content.find(function(e){return e.id===t}))?[3,2]:[4,this.hotelService.getAdminHotel(t).subscribe(function(t){o.hotel.emit(t)})];case 1:return n.sent(),[3,3];case 2:console.log("amdin hotel "+e.name),this.hotel.emit(e),n.label=3;case 3:return[2]}})})},t.prototype.onSelectHotel=function(t){localStorage.setItem("hotelId",t.toString());var e=this.hotelPage.content.find(function(e){return e.id===t});this.hotel.emit(e)},t.\u0275fac=function(e){return new(e||t)(n.Lb(a.a))},t.\u0275cmp=n.Fb({type:t,selectors:[["admin-hotel-list"]],outputs:{hotel:"hotel"},decls:11,vars:3,consts:[[1,"list-group"],[1,"list-group-item"],[1,"mx-3","my-1",3,"ngSubmit"],[1,"form-group","mb-0"],["type","text","id","hotelName","name","hotelName","placeholder","Hotel name",1,"form-control",3,"ngModel","ngModelChange"],["class","list-group-item list-group-item-action",3,"click",4,"ngFor","ngForOf"],[3,"page","short","getPage",4,"ngIf"],[1,"list-group-item","list-group-item-action",3,"click"],[1,"fa","fa-building"],[3,"page","short","getPage"]],template:function(t,e){1&t&&(n.Qb(0,"ul",0),n.Qb(1,"li",1),n.Qb(2,"h5"),n.Fc(3,"Hotel List"),n.Pb(),n.Qb(4,"small"),n.Fc(5,"Choose a hotel from below list"),n.Pb(),n.Pb(),n.Qb(6,"form",2),n.bc("ngSubmit",function(){return e.getAdminHotelPage()}),n.Qb(7,"div",3),n.Qb(8,"input",4),n.bc("ngModelChange",function(t){return e.hotelName=t}),n.Pb(),n.Pb(),n.Pb(),n.Dc(9,s,3,1,"a",5),n.Dc(10,d,1,2,"pagination",6),n.Pb()),2&t&&(n.zb(8),n.lc("ngModel",e.hotelName),n.zb(1),n.lc("ngForOf",null==e.hotelPage?null:e.hotelPage.content),n.zb(1),n.lc("ngIf",null!=e.hotelPage))},directives:[c.x,c.n,c.o,c.b,c.m,c.p,b.p,b.q,l.a],styles:[".list-group-item[_ngcontent-%COMP%]{cursor:pointer;padding:.25rem 1.25rem}"]}),t}()},"3whx":function(t,e,o){"use strict";o.d(e,"a",function(){return c});var n=o("KZX/"),a=o("8Y7J"),c=function(){function t(){}return t.\u0275mod=a.Jb({type:t}),t.\u0275inj=a.Ib({factory:function(e){return new(e||t)},imports:[[n.a],n.a]}),t}()},lWB2:function(t,e,o){"use strict";o.d(e,"a",function(){return l});var n=o("8Y7J"),a=o("SVse");function c(t,e){if(1&t){var o=n.Rb();n.Ob(0),n.Qb(1,"div",2),n.Qb(2,"div",3),n.Fc(3," Manual Booking Details "),n.Pb(),n.Pb(),n.Qb(4,"div",4),n.Qb(5,"div",5),n.Qb(6,"label",6),n.Fc(7,"Guest Name"),n.Pb(),n.Qb(8,"label",7),n.Fc(9),n.Pb(),n.Pb(),n.Qb(10,"div",5),n.Qb(11,"label",8),n.Fc(12,"Guest Phone"),n.Pb(),n.Qb(13,"label",9),n.Fc(14),n.Pb(),n.Pb(),n.Qb(15,"div",5),n.Qb(16,"label",10),n.Fc(17,"Guest Email"),n.Pb(),n.Qb(18,"label",11),n.Fc(19),n.Pb(),n.Pb(),n.Pb(),n.Qb(20,"div",4),n.Qb(21,"div",5),n.Qb(22,"label",12),n.Fc(23,"Service Type"),n.Pb(),n.Qb(24,"label",13),n.Fc(25),n.Pb(),n.Pb(),n.Qb(26,"div",5),n.Qb(27,"label",14),n.Fc(28,"Service Name"),n.Pb(),n.Qb(29,"label",15),n.Fc(30),n.Pb(),n.Pb(),n.Qb(31,"div",5),n.Qb(32,"label",16),n.Fc(33,"Service category"),n.Pb(),n.Qb(34,"label",17),n.Fc(35),n.Pb(),n.Pb(),n.Pb(),n.Qb(36,"div",4),n.Qb(37,"div",18),n.Qb(38,"label",19),n.Fc(39,"Start/Check in Date"),n.Pb(),n.Qb(40,"label",20),n.Fc(41),n.Pb(),n.Pb(),n.Qb(42,"div",18),n.Qb(43,"label",21),n.Fc(44,"End Date/Check out Date"),n.Pb(),n.Qb(45,"label",22),n.Fc(46),n.Pb(),n.Pb(),n.Qb(47,"div",18),n.Qb(48,"label",23),n.Fc(49,"Place / Start From"),n.Pb(),n.Qb(50,"label",24),n.Fc(51),n.Pb(),n.Pb(),n.Qb(52,"div",18),n.Qb(53,"label",21),n.Fc(54,"End Date/Check out Date"),n.Pb(),n.Qb(55,"label",25),n.Fc(56),n.Pb(),n.Pb(),n.Pb(),n.Qb(57,"div",4),n.Qb(58,"div",18),n.Qb(59,"label",26),n.Fc(60,"Booking id / Reference"),n.Pb(),n.Qb(61,"label",27),n.Fc(62),n.Pb(),n.Pb(),n.Qb(63,"div",18),n.Qb(64,"label",28),n.Fc(65,"Quantity"),n.Pb(),n.Qb(66,"label",29),n.Fc(67),n.Pb(),n.Pb(),n.Qb(68,"div",18),n.Qb(69,"label",30),n.Fc(70,"Rate"),n.Pb(),n.Qb(71,"label",31),n.Fc(72),n.Pb(),n.Pb(),n.Qb(73,"div",32),n.Qb(74,"label",33),n.Fc(75,"Price"),n.Pb(),n.Qb(76,"label",34),n.Fc(77),n.Pb(),n.Pb(),n.Pb(),n.Qb(78,"div",4),n.Mb(79,"div",35),n.Qb(80,"div",32),n.Fc(81,"Discount"),n.Pb(),n.Qb(82,"div",32),n.Qb(83,"label",25),n.Fc(84),n.Pb(),n.Pb(),n.Pb(),n.Qb(85,"div",4),n.Qb(86,"div",32),n.Fc(87,"Vat "),n.Pb(),n.Qb(88,"div",32),n.Qb(89,"label",25),n.Fc(90),n.Pb(),n.Pb(),n.Qb(91,"div",32),n.Fc(92,"Sub total"),n.Pb(),n.Qb(93,"div",32),n.Qb(94,"label",25),n.Fc(95),n.Pb(),n.Pb(),n.Pb(),n.Qb(96,"div",4),n.Mb(97,"div",35),n.Qb(98,"div",32),n.Fc(99,"Total Payable"),n.Pb(),n.Qb(100,"div",32),n.Qb(101,"label",25),n.Fc(102),n.Pb(),n.Pb(),n.Pb(),n.Qb(103,"div",36),n.Qb(104,"div",18),n.Qb(105,"label",37),n.Fc(106,"Payment Method"),n.Pb(),n.Qb(107,"label",38),n.Fc(108),n.Pb(),n.Pb(),n.Qb(109,"div",18),n.Qb(110,"label",26),n.Fc(111,"Reference"),n.Pb(),n.Qb(112,"label",39),n.Fc(113),n.Pb(),n.Pb(),n.Qb(114,"div",32),n.Fc(115,"Advance"),n.Pb(),n.Qb(116,"div",32),n.Qb(117,"label",25),n.Fc(118),n.Pb(),n.Pb(),n.Pb(),n.Qb(119,"div",4),n.Mb(120,"div",35),n.Qb(121,"div",32),n.Fc(122,"Due"),n.Pb(),n.Qb(123,"div",32),n.Qb(124,"label",25),n.Fc(125),n.Pb(),n.Pb(),n.Pb(),n.Qb(126,"div",40),n.Qb(127,"button",41),n.bc("click",function(){return n.wc(o),n.dc().onClear()}),n.Fc(128,"Close"),n.Pb(),n.Pb(),n.Nb()}if(2&t){var a=n.dc();n.zb(9),n.Hc(" ",a.manualBooking.guestName," "),n.zb(5),n.Hc(" ",a.manualBooking.guestPhone," "),n.zb(5),n.Hc(" ",a.manualBooking.guestEmail," "),n.zb(6),n.Hc(" ",a.manualBooking.bookingType," "),n.zb(5),n.Hc(" ",a.manualBooking.name," "),n.zb(5),n.Hc(" ",a.manualBooking.category," "),n.zb(6),n.Hc(" ",a.manualBooking.startDate," "),n.zb(5),n.Hc(" ",a.manualBooking.endDate," "),n.zb(5),n.Hc(" ",a.manualBooking.startFrom," "),n.zb(5),n.Hc(" ",a.manualBooking.destination," "),n.zb(6),n.Hc(" ",a.manualBooking.reference," "),n.zb(5),n.Hc(" ",a.manualBooking.quantity," "),n.zb(5),n.Hc(" ",a.manualBooking.rate," "),n.zb(5),n.Hc(" ",a.manualBooking.price," "),n.zb(7),n.Hc(" ",a.manualBooking.discount," "),n.zb(6),n.Hc(" ",a.manualBooking.vatPercent," "),n.zb(5),n.Hc(" ",a.manualBooking.price-a.manualBooking.discount," "),n.zb(7),n.Hc(" ",a.manualBooking.payable," "),n.zb(6),n.Hc(" ",a.manualBooking.paymentMethod," "),n.zb(5),n.Hc(" ",a.manualBooking.paymentRef," "),n.zb(5),n.Hc(" ",a.manualBooking.advance," "),n.zb(7),n.Hc(" ",a.manualBooking.due," ")}}function b(t,e){1&t&&(n.Qb(0,"div",42),n.Mb(1,"i",43),n.Fc(2," No booking selected yet. Please select a Manual booking from list tab. "),n.Pb())}var l=function(){function t(){this.clear=new n.n}return t.prototype.ngOnInit=function(){},t.prototype.onClear=function(){this.clear.emit()},t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Fb({type:t,selectors:[["manual-booking-details"]],inputs:{manualBooking:"manualBooking"},outputs:{clear:"clear"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["noManualBooking",""],[1,"row","mb-3"],[1,"col-12","form-head","mx-3"],[1,"row"],[1,"col-sm-4"],["for","guestName",1,"d-none","d-sm-block","col-form-label","col-form-label-sm"],["id","guestName",1,"form-control","form-control-sm"],["for","guestPhone",1,"d-none","d-sm-block","col-form-label","col-form-label-sm"],["id","guestPhone",1,"form-control","form-control-sm"],["for","guestEmail",1,"d-none","d-sm-block","col-form-label","col-form-label-sm"],["id","guestEmail",1,"form-control","form-control-sm"],["for","bookingType",1,"d-none","d-sm-block","col-form-label","col-form-label-sm"],["id","bookingType",1,"form-control","form-control-sm"],["for","name",1,"d-none","d-sm-block","col-form-label","col-form-label-sm"],["id","name",1,"form-control","form-control-sm"],["for","category",1,"d-none","d-sm-block","col-form-label","col-form-label-sm"],["id","category",1,"form-control","form-control-sm"],[1,"col-sm-3"],["for","startDate",1,"d-none","d-sm-block","col-form-label","col-form-label-sm"],["id","startDate",1,"form-control","form-control-sm"],["for","endDate",1,"d-none","d-sm-block","col-form-label","col-form-label-sm"],["id","endDate",1,"form-control","form-control-sm"],["for","startFrom",1,"d-none","d-sm-block","col-form-label","col-form-label-sm"],["id","startFrom",1,"form-control","form-control-sm"],[1,"form-control","form-control-sm"],["for","reference",1,"d-none","d-sm-block","col-form-label","col-form-label-sm"],["id","reference",1,"form-control","form-control-sm"],["for","quantity",1,"d-none","d-sm-block","col-form-label","col-form-label-sm"],["id","quantity",1,"form-control","form-control-sm"],["for","rate",1,"d-none","d-sm-block","col-form-label","col-form-label-sm"],["id","rate",1,"form-control","form-control-sm"],[1,"col-sm-3","text-right"],["for","price",1,"d-none","d-sm-block","col-form-label","col-form-label-sm"],["id","price",1,"form-control","form-control-sm"],[1,"col-sm-6"],[1,"row","mb-2"],["for","paymentMethod",1,"d-none","d-sm-block","col-form-label","col-form-label-sm"],["id","paymentMethod",1,"form-control","form-control-sm"],["id","paymentRef",1,"form-control","form-control-sm"],[1,"d-flex","flex-row-reverse","bd-highlight"],[1,"btn","btn-sm","btn-outline-danger",3,"click"],[1,"text-center"],[1,"fa","fa-frown-o"]],template:function(t,e){if(1&t&&(n.Dc(0,c,129,22,"ng-container",0),n.Dc(1,b,3,0,"ng-template",null,1,n.Ec)),2&t){var o=n.vc(2);n.lc("ngIf",null!=e.manualBooking)("ngIfElse",o)}},directives:[a.q],styles:[""]}),t}()},s1VS:function(t,e,o){"use strict";o.d(e,"a",function(){return b});var n=o("W2O4"),a=o("jgEc"),c=o("8Y7J"),b=function(){function t(t,e){this.dataSource=t,this.http=e,this.adminUrl="api/v1/admin/manual"}return t.prototype.create=function(t){return this.dataSource.sendRequest(n.d.Post,this.adminUrl,t,!0,null)},t.prototype.all=function(t){return void 0===t&&(t=null),this.dataSource.sendRequest(n.d.Get,this.adminUrl,null,!0,null===t?"":"page="+t+"&")},t.prototype.one=function(t){return this.dataSource.sendRequest(n.d.Get,this.adminUrl+"/"+t,null,!0,null)},t.prototype.getCreateBy=function(t){return this.dataSource.sendRequest(n.d.Get,this.adminUrl+"/createdBy/"+t,null,!0,null)},t.prototype.getForDay=function(t){return this.dataSource.sendRequest(n.d.Get,this.adminUrl+"/forDay",null,!0,"date="+t+"&")},t.prototype.getForDayAndCreateBy=function(t,e){return this.dataSource.sendRequest(n.d.Get,this.adminUrl+"/forDay/"+t,null,!0,"date="+e+"&")},t.\u0275fac=function(e){return new(e||t)(c.Yb(a.a),c.Yb(n.a))},t.\u0275prov=c.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},sMOk:function(t,e,o){"use strict";o.d(e,"a",function(){return i});var n=o("8Y7J"),a=o("SVse");function c(t,e){if(1&t){var o=n.Rb();n.Qb(0,"tr"),n.Qb(1,"th",11),n.Fc(2),n.Pb(),n.Qb(3,"td"),n.Fc(4),n.Pb(),n.Qb(5,"td"),n.Fc(6),n.Pb(),n.Qb(7,"td"),n.Fc(8),n.Pb(),n.Qb(9,"td",6),n.Fc(10),n.Pb(),n.Qb(11,"td",6),n.Fc(12),n.Pb(),n.Qb(13,"td",6),n.Fc(14),n.Pb(),n.Qb(15,"td",6),n.Fc(16),n.Pb(),n.Qb(17,"td",6),n.Fc(18),n.Pb(),n.Qb(19,"td",6),n.Qb(20,"a",12),n.bc("click",function(){n.wc(o);var t=e.$implicit;return n.dc(2).onDetails(t.id)}),n.Fc(21,"Details"),n.Pb(),n.Pb(),n.Pb()}if(2&t){var a=e.$implicit,c=e.index;n.zb(2),n.Gc(c+1),n.zb(2),n.Hc(" ",a.bookingType," "),n.zb(2),n.Ic(" ",a.name," [",a.category,"] "),n.zb(2),n.Hc(" ",a.startDate," "),n.zb(2),n.Hc(" ",a.payable," "),n.zb(2),n.Hc(" ",a.advance," "),n.zb(2),n.Hc(" ",a.due," "),n.zb(2),n.Gc(a.deposited?"Deposited":"On Hand"),n.zb(2),n.Hc(" ",a.paymentMethod," ")}}function b(t,e){if(1&t){var o=n.Rb();n.Qb(0,"div",13),n.Qb(1,"button",14),n.bc("click",function(){return n.wc(o),n.dc(2).onReceive()}),n.Fc(2),n.Pb(),n.Pb()}if(2&t){var a=n.dc(2);n.zb(2),n.Hc(" Receive ",a.manual?"manual":"automatic"," payments")}}function l(t,e){if(1&t&&(n.Qb(0,"div"),n.Qb(1,"table",2),n.Qb(2,"thead"),n.Qb(3,"tr"),n.Qb(4,"td",3),n.Fc(5),n.Pb(),n.Pb(),n.Qb(6,"tr"),n.Qb(7,"th",4),n.Fc(8,"#"),n.Pb(),n.Qb(9,"th",4),n.Fc(10,"Type"),n.Pb(),n.Qb(11,"th",4),n.Fc(12,"Service"),n.Pb(),n.Qb(13,"th",4),n.Fc(14,"StartDate"),n.Pb(),n.Qb(15,"th",5),n.Fc(16,"Payable"),n.Pb(),n.Qb(17,"th",5),n.Fc(18,"Advance"),n.Pb(),n.Qb(19,"th",5),n.Fc(20,"Due"),n.Pb(),n.Qb(21,"th",6),n.Fc(22,"Status"),n.Pb(),n.Qb(23,"th",6),n.Fc(24,"Method"),n.Pb(),n.Qb(25,"th",5),n.Fc(26,"Action"),n.Pb(),n.Pb(),n.Pb(),n.Qb(27,"tbody"),n.Dc(28,c,22,10,"tr",7),n.Pb(),n.Qb(29,"tfoot"),n.Qb(30,"tr"),n.Mb(31,"td",8),n.Qb(32,"th",6),n.Fc(33,"Total"),n.Pb(),n.Qb(34,"th",6),n.Fc(35),n.Pb(),n.Qb(36,"th",6),n.Fc(37),n.Pb(),n.Qb(38,"th",6),n.Fc(39),n.Pb(),n.Mb(40,"td",8),n.Pb(),n.Pb(),n.Pb(),n.Qb(41,"table",9),n.Qb(42,"thead"),n.Qb(43,"tr"),n.Qb(44,"td",3),n.Fc(45),n.Pb(),n.Pb(),n.Pb(),n.Qb(46,"tbody",6),n.Qb(47,"tr"),n.Qb(48,"th"),n.Fc(49,"Method"),n.Pb(),n.Qb(50,"td"),n.Fc(51,"Cash"),n.Pb(),n.Qb(52,"td"),n.Fc(53,"BKash"),n.Pb(),n.Qb(54,"td"),n.Fc(55,"Roket"),n.Pb(),n.Qb(56,"td"),n.Fc(57,"Nagad"),n.Pb(),n.Qb(58,"td"),n.Fc(59,"SSL"),n.Pb(),n.Qb(60,"td"),n.Fc(61,"Bank Transfer"),n.Pb(),n.Qb(62,"td"),n.Fc(63,"Other"),n.Pb(),n.Qb(64,"th"),n.Fc(65,"Deposited"),n.Pb(),n.Qb(66,"th"),n.Fc(67,"Due"),n.Pb(),n.Pb(),n.Qb(68,"tr"),n.Qb(69,"th"),n.Fc(70,"Amount"),n.Pb(),n.Qb(71,"td"),n.Fc(72),n.Pb(),n.Qb(73,"td"),n.Fc(74),n.Pb(),n.Qb(75,"td"),n.Fc(76),n.Pb(),n.Qb(77,"td"),n.Fc(78),n.Pb(),n.Qb(79,"td"),n.Fc(80),n.Pb(),n.Qb(81,"td"),n.Fc(82),n.Pb(),n.Qb(83,"td"),n.Fc(84),n.Pb(),n.Qb(85,"th"),n.Fc(86),n.Pb(),n.Qb(87,"th"),n.Fc(88),n.Pb(),n.Pb(),n.Pb(),n.Pb(),n.Dc(89,b,3,1,"div",10),n.Pb()),2&t){var o=n.dc();n.zb(5),n.Hc(" ",o.manual?"Manual":"Automatic"," day sells "),n.zb(23),n.lc("ngForOf",o.manualBookingList),n.zb(7),n.Gc(o.total.payable),n.zb(2),n.Gc(o.total.advance),n.zb(2),n.Gc(o.total.due),n.zb(6),n.Hc(" ",o.manual?"Manual":"Automatic"," payment sum "),n.zb(27),n.Gc(o.total.cash),n.zb(2),n.Gc(o.total.bkash),n.zb(2),n.Gc(o.total.roket),n.zb(2),n.Gc(o.total.nagad),n.zb(2),n.Gc(o.total.ssl),n.zb(2),n.Gc(o.total.bank_transfer),n.zb(2),n.Gc(o.total.other),n.zb(2),n.Gc(o.total.deposited),n.zb(2),n.Gc(o.total.advance-o.total.deposited),n.zb(1),n.lc("ngIf",o.manualBookingList.length>0&&o.admin)}}function r(t,e){if(1&t&&(n.Qb(0,"div",15),n.Mb(1,"i",16),n.Fc(2),n.Pb()),2&t){var o=n.dc();n.zb(2),n.Hc(" Sorry no ",o.manual?"manual":"automatic"," booking found; ")}}var i=function(){function t(){this.details=new n.n,this.receive=new n.n,this.total={payable:0,advance:0,due:0,deposited:0,cash:0,bkash:0,roket:0,nagad:0,ssl:0,bank_transfer:0,other:0}}return t.prototype.ngOnChanges=function(t){t.manualBookingList&&null!=this.manualBookingList&&this.manualBookingList.length>0&&(this.total=this.calculateTotal(this.manualBookingList))},t.prototype.onDetails=function(t){this.details.emit(t)},t.prototype.onReceive=function(){this.receive.emit(this.total.advance-this.total.deposited)},t.prototype.calculateTotal=function(t){var e={payable:0,advance:0,due:0,deposited:0,cash:0,bkash:0,roket:0,nagad:0,ssl:0,bank_transfer:0,other:0};return t.forEach(function(t){if(e.payable+=t.payable,e.advance+=t.advance,e.due+=t.due,t.deposited)e.deposited+=t.advance;else switch(t.paymentMethod){case"CASH":e.cash+=t.advance;break;case"BKASH":e.bkash+=t.advance;break;case"ROCKET":e.roket+=t.advance;break;case"NAGAD":e.nagad+=t.advance;break;case"SSL":e.ssl+=t.advance;break;case"BANK_TRANSFER":e.bank_transfer+=t.advance;break;case"OTHER":e.other+=t.advance;break;default:e.cash+=t.advance}}),e},t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Fb({type:t,selectors:[["manual-booking-list"]],inputs:{manualBookingList:"manualBookingList",manual:"manual",admin:"admin"},outputs:{details:"details",receive:"receive"},features:[n.xb],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["noBookingFound",""],[1,"table","table-striped","border","table-sm","table-responsive-sm"],["colspan","10",1,"form-head"],["scope","col"],["scope","col",1,"text-right"],[1,"text-right"],[4,"ngFor","ngForOf"],["colspan","3"],[1,"table","table-bordered","table-sm"],["class","d-flex justify-content-end mb-4",4,"ngIf"],["scope","row"],[1,"edit_link",3,"click"],[1,"d-flex","justify-content-end","mb-4"],[1,"btn","btn-sm","btn-success",3,"click"],[1,"text-center"],[1,"fa","fa-frown-o"]],template:function(t,e){if(1&t&&(n.Dc(0,l,90,16,"div",0),n.Dc(1,r,3,1,"ng-template",null,1,n.Ec)),2&t){var o=n.vc(2);n.lc("ngIf",(null==e.manualBookingList?null:e.manualBookingList.length)>0)("ngIfElse",o)}},directives:[a.q,a.p],styles:[".btn-web[_ngcontent-%COMP%], .hotel-button[_ngcontent-%COMP%]{color:#fff;background-color:#3f87c7}.hotel-button-reverse[_ngcontent-%COMP%], .hotel-button[_ngcontent-%COMP%]:hover{background-color:#f7a71a}.hotel-button-reverse[_ngcontent-%COMP%]{color:#fff}.hotel-button-reverse[_ngcontent-%COMP%]:hover{background-color:#3f87c7}.form-head[_ngcontent-%COMP%], td.form-head[_ngcontent-%COMP%]{width:inherit;font-size:20px!important;line-height:22px;padding:5px;background-color:#bdbdbd}.form-head-link[_ngcontent-%COMP%], td.form-head-link[_ngcontent-%COMP%]{font-size:16px}.edit_link[_ngcontent-%COMP%], .form-head-link[_ngcontent-%COMP%], td.form-head-link[_ngcontent-%COMP%]{text-decoration:none;cursor:pointer}"]}),t}()}}]);