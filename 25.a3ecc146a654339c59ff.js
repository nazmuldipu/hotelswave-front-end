(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"1f+j":function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=u("mrSG"),o=u("ITiG"),i=function(){function l(l){this.userService=l,this.loading=!1}return l.prototype.ngOnInit=function(){this.getUserPage(this.userQuery)},l.prototype.getUserPage=function(l,n){return void 0===n&&(n=0),Object(t.__awaiter)(this,void 0,void 0,(function(){var u=this;return Object(t.__generator)(this,(function(e){return this.userService.getServiceAdminAgents(l,n).subscribe((function(l){u.userPage=l})),[2]}))}))},l.prototype.submit=function(){this.getUserPage(this.userQuery)},l.prototype.onCreate=function(l){return Object(t.__awaiter)(this,void 0,void 0,(function(){var n=this;return Object(t.__generator)(this,(function(u){switch(u.label){case 0:return[4,this.userService.createSerivceAdminAgent(l).subscribe((function(l){n.getUserPage(n.userQuery)}))];case 1:return u.sent(),[2]}}))}))},l.prototype.onSelect=function(l){var n=this.userPage.content.find((function(n){return n.id===l}));this.user=n},l.prototype.onRemoveAgent=function(l){return Object(t.__awaiter)(this,void 0,void 0,(function(){var n=this;return Object(t.__generator)(this,(function(u){switch(u.label){case 0:return console.log("On leave ",l),[4,this.userService.removeServiceAdminAgent(l).subscribe((function(l){n.getUserPage(n.userQuery)}))];case 1:return u.sent(),[2]}}))}))},l}(),r=function(){return function(){}}(),a=u("pMnS"),s=u("9AJC"),d=u("gIcY"),c=u("Ip0R"),g=u("WT6a"),m=u("uEz7"),p=function(){function l(l){this.builder=l,this.create=new e.EventEmitter,this.removeAgent=new e.EventEmitter,this.exists=!1,this.createForm()}return l.prototype.ngOnChanges=function(l){if(l.user&&this.user&&this.user.id){this.exists=!0;var n={name:this.user.name,phoneNumber:this.user.phoneNumber,email:this.user.email};this.form.patchValue(Object(t.__assign)({},n))}},l.prototype.createForm=function(){this.form=this.builder.group({name:["",d.y.required],phoneNumber:["",[d.y.required,d.y.pattern("^01[3-9][ ]?[0-9]{2}[ ]?[0-9]{3}[ ]?[0-9]{3}$")]],email:""})},l.prototype.submit=function(){if(this.form.valid){if(this.exists){var l=Object(t.__assign)({},this.user,this.form.value);this.create.emit(l)}else this.create.emit(this.form.value);this.onClear()}},l.prototype.onRemoveAgent=function(l){this.removeAgent.emit(l),this.onClear()},l.prototype.onClear=function(){this.form.reset(),this.exists=!1},l}(),f=e["ɵcrt"]({encapsulation:0,styles:[[""]],data:{}});function v(l){return e["ɵvid"](0,[(l()(),e["ɵeld"](0,0,null,null,1,"small",[["class","text-danger"]],null,null,null,null,null)),(l()(),e["ɵted"](-1,null,[" Name required "]))],null,null)}function h(l){return e["ɵvid"](0,[(l()(),e["ɵeld"](0,0,null,null,4,"small",[["class","text-danger"]],null,null,null,null,null)),(l()(),e["ɵeld"](1,0,null,null,1,"div",[],[[8,"hidden",0]],null,null,null,null)),(l()(),e["ɵted"](-1,null,[" Phone number required "])),(l()(),e["ɵeld"](3,0,null,null,1,"div",[],[[8,"hidden",0]],null,null,null,null)),(l()(),e["ɵted"](-1,null,[" Phone number format 01934953023 "]))],null,(function(l,n){var u=n.component;l(n,1,0,!u.form.controls.phoneNumber.errors.required),l(n,3,0,!u.form.controls.phoneNumber.errors.pattern)}))}function b(l){return e["ɵvid"](0,[(l()(),e["ɵeld"](0,0,null,null,1,"button",[["class","btn btn-sm btn-success mx-1"],["type","button"]],null,[[null,"click"]],(function(l,n,u){var e=!0,t=l.component;return"click"===n&&(e=!1!==t.onRemoveAgent(t.user.id)&&e),e}),null,null)),(l()(),e["ɵted"](-1,null,[" Remove this agent "]))],null,null)}function C(l){return e["ɵvid"](0,[(l()(),e["ɵeld"](0,0,null,null,48,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var t=!0,o=l.component;return"submit"===n&&(t=!1!==e["ɵnov"](l,2).onSubmit(u)&&t),"reset"===n&&(t=!1!==e["ɵnov"](l,2).onReset()&&t),"ngSubmit"===n&&(t=!1!==o.submit()&&t),t}),null,null)),e["ɵdid"](1,16384,null,0,d.D,[],null,null),e["ɵdid"](2,540672,null,0,d.i,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e["ɵprd"](2048,null,d.c,null,[d.i]),e["ɵdid"](4,16384,null,0,d.q,[[4,d.c]],null,null),(l()(),e["ɵeld"](5,0,null,null,33,"div",[["class","form-row"]],null,null,null,null,null)),(l()(),e["ɵeld"](6,0,null,null,10,"div",[["class","form-group col-md-6"]],null,null,null,null,null)),(l()(),e["ɵeld"](7,0,null,null,1,"label",[["for","name"]],null,null,null,null,null)),(l()(),e["ɵted"](-1,null,["Name *"])),(l()(),e["ɵeld"](9,0,null,null,5,"input",[["class","form-control"],["formControlName","name"],["id","name"],["placeholder","Name"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var t=!0;return"input"===n&&(t=!1!==e["ɵnov"](l,10)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e["ɵnov"](l,10).onTouched()&&t),"compositionstart"===n&&(t=!1!==e["ɵnov"](l,10)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e["ɵnov"](l,10)._compositionEnd(u.target.value)&&t),t}),null,null)),e["ɵdid"](10,16384,null,0,d.d,[e.Renderer2,e.ElementRef,[2,d.a]],null,null),e["ɵprd"](1024,null,d.n,(function(l){return[l]}),[d.d]),e["ɵdid"](12,671744,null,0,d.h,[[3,d.c],[8,null],[8,null],[6,d.n],[2,d.B]],{name:[0,"name"]},null),e["ɵprd"](2048,null,d.o,null,[d.h]),e["ɵdid"](14,16384,null,0,d.p,[[4,d.o]],null,null),(l()(),e["ɵand"](16777216,null,null,1,null,v)),e["ɵdid"](16,16384,null,0,c.p,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["ɵeld"](17,0,null,null,12,"div",[["class","form-group col-md-6"]],null,null,null,null,null)),(l()(),e["ɵeld"](18,0,null,null,1,"label",[["for","phone"]],null,null,null,null,null)),(l()(),e["ɵted"](-1,null,["Phone *"])),(l()(),e["ɵeld"](20,0,null,null,7,"input",[["class","form-control"],["formControlName","phoneNumber"],["id","phone"],["maxlength","11"],["placeholder","Phone"]],[[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var t=!0;return"input"===n&&(t=!1!==e["ɵnov"](l,21)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e["ɵnov"](l,21).onTouched()&&t),"compositionstart"===n&&(t=!1!==e["ɵnov"](l,21)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e["ɵnov"](l,21)._compositionEnd(u.target.value)&&t),t}),null,null)),e["ɵdid"](21,16384,null,0,d.d,[e.Renderer2,e.ElementRef,[2,d.a]],null,null),e["ɵdid"](22,540672,null,0,d.l,[],{maxlength:[0,"maxlength"]},null),e["ɵprd"](1024,null,d.m,(function(l){return[l]}),[d.l]),e["ɵprd"](1024,null,d.n,(function(l){return[l]}),[d.d]),e["ɵdid"](25,671744,null,0,d.h,[[3,d.c],[6,d.m],[8,null],[6,d.n],[2,d.B]],{name:[0,"name"]},null),e["ɵprd"](2048,null,d.o,null,[d.h]),e["ɵdid"](27,16384,null,0,d.p,[[4,d.o]],null,null),(l()(),e["ɵand"](16777216,null,null,1,null,h)),e["ɵdid"](29,16384,null,0,c.p,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["ɵeld"](30,0,null,null,8,"div",[["class","form-group col-md-6"]],null,null,null,null,null)),(l()(),e["ɵeld"](31,0,null,null,1,"label",[["for","email"]],null,null,null,null,null)),(l()(),e["ɵted"](-1,null,["Email"])),(l()(),e["ɵeld"](33,0,null,null,5,"input",[["class","form-control"],["formControlName","email"],["id","email"],["placeholder","Email"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var t=!0;return"input"===n&&(t=!1!==e["ɵnov"](l,34)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e["ɵnov"](l,34).onTouched()&&t),"compositionstart"===n&&(t=!1!==e["ɵnov"](l,34)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e["ɵnov"](l,34)._compositionEnd(u.target.value)&&t),t}),null,null)),e["ɵdid"](34,16384,null,0,d.d,[e.Renderer2,e.ElementRef,[2,d.a]],null,null),e["ɵprd"](1024,null,d.n,(function(l){return[l]}),[d.d]),e["ɵdid"](36,671744,null,0,d.h,[[3,d.c],[8,null],[8,null],[6,d.n],[2,d.B]],{name:[0,"name"]},null),e["ɵprd"](2048,null,d.o,null,[d.h]),e["ɵdid"](38,16384,null,0,d.p,[[4,d.o]],null,null),(l()(),e["ɵeld"](39,0,null,null,9,"div",[["class","d-flex flex-row-reverse bd-highlight my-2 mb-5"]],null,null,null,null,null)),(l()(),e["ɵeld"](40,0,null,null,4,"button",[["class","btn btn-sm mx-1"],["type","submit"]],null,null,null,null,null)),e["ɵprd"](512,null,c.E,c.F,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2]),e["ɵdid"](42,278528,null,0,c.n,[c.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["ɵpod"](43,{disabled:0,"btn-warning":1,"btn-success":2}),(l()(),e["ɵted"](44,null,[" "," User "])),(l()(),e["ɵand"](16777216,null,null,1,null,b)),e["ɵdid"](46,16384,null,0,c.p,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["ɵeld"](47,0,null,null,1,"button",[["class","btn btn-sm btn-danger mx-1"],["type","button"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onClear()&&e),e}),null,null)),(l()(),e["ɵted"](-1,null,[" Clear "]))],(function(l,n){var u=n.component;l(n,2,0,u.form),l(n,12,0,"name"),l(n,16,0,u.form.controls.name.errors&&u.form.controls.name.touched),l(n,22,0,"11"),l(n,25,0,"phoneNumber"),l(n,29,0,u.form.controls.phoneNumber.errors&&u.form.controls.phoneNumber.touched),l(n,36,0,"email");var e=l(n,43,0,u.form.invalid,u.exists,!u.exists);l(n,42,0,"btn btn-sm mx-1",e),l(n,46,0,u.exists)}),(function(l,n){var u=n.component;l(n,0,0,e["ɵnov"](n,4).ngClassUntouched,e["ɵnov"](n,4).ngClassTouched,e["ɵnov"](n,4).ngClassPristine,e["ɵnov"](n,4).ngClassDirty,e["ɵnov"](n,4).ngClassValid,e["ɵnov"](n,4).ngClassInvalid,e["ɵnov"](n,4).ngClassPending),l(n,9,0,e["ɵnov"](n,14).ngClassUntouched,e["ɵnov"](n,14).ngClassTouched,e["ɵnov"](n,14).ngClassPristine,e["ɵnov"](n,14).ngClassDirty,e["ɵnov"](n,14).ngClassValid,e["ɵnov"](n,14).ngClassInvalid,e["ɵnov"](n,14).ngClassPending),l(n,20,0,e["ɵnov"](n,22).maxlength?e["ɵnov"](n,22).maxlength:null,e["ɵnov"](n,27).ngClassUntouched,e["ɵnov"](n,27).ngClassTouched,e["ɵnov"](n,27).ngClassPristine,e["ɵnov"](n,27).ngClassDirty,e["ɵnov"](n,27).ngClassValid,e["ɵnov"](n,27).ngClassInvalid,e["ɵnov"](n,27).ngClassPending),l(n,33,0,e["ɵnov"](n,38).ngClassUntouched,e["ɵnov"](n,38).ngClassTouched,e["ɵnov"](n,38).ngClassPristine,e["ɵnov"](n,38).ngClassDirty,e["ɵnov"](n,38).ngClassValid,e["ɵnov"](n,38).ngClassInvalid,e["ɵnov"](n,38).ngClassPending),l(n,44,0,u.exists?"Update":"Create")}))}var y=e["ɵcrt"]({encapsulation:0,styles:[[".table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:.15rem}"]],data:{}});function k(l){return e["ɵvid"](0,[(l()(),e["ɵeld"](0,0,null,null,9,"tr",[],null,null,null,null,null)),(l()(),e["ɵeld"](1,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["ɵted"](2,null,["",""])),(l()(),e["ɵeld"](3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["ɵted"](4,null,["",""])),(l()(),e["ɵeld"](5,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["ɵted"](6,null,["",""])),(l()(),e["ɵeld"](7,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e["ɵeld"](8,0,null,null,1,"button",[["class","btn-sm btn-warning"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onSelect(l.context.$implicit.id)&&e),e}),null,null)),(l()(),e["ɵeld"](9,0,null,null,0,"i",[["class","fa fa-pencil-square-o"]],null,null,null,null,null))],null,(function(l,n){l(n,2,0,n.context.$implicit.name),l(n,4,0,n.context.$implicit.phoneNumber),l(n,6,0,n.context.$implicit.email)}))}function P(l){return e["ɵvid"](0,[(l()(),e["ɵeld"](0,0,null,null,2,"div",[["class","container-fluid"]],null,null,null,null,null)),(l()(),e["ɵeld"](1,0,null,null,1,"span",[["class","row px-3 details-title text-left"]],null,null,null,null,null)),(l()(),e["ɵted"](-1,null,["Agents"])),(l()(),e["ɵeld"](3,0,null,null,43,"div",[["class","container-fluid"]],null,null,null,null,null)),(l()(),e["ɵeld"](4,0,null,null,42,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["ɵeld"](5,0,null,null,36,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),e["ɵeld"](6,0,null,null,1,"h3",[["class","text-center"]],null,null,null,null,null)),(l()(),e["ɵted"](-1,null,["Agent list"])),(l()(),e["ɵeld"](8,0,null,null,15,"form",[["class","mx-3 my-1"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var t=!0,o=l.component;return"submit"===n&&(t=!1!==e["ɵnov"](l,10).onSubmit(u)&&t),"reset"===n&&(t=!1!==e["ɵnov"](l,10).onReset()&&t),"ngSubmit"===n&&(t=!1!==o.submit()&&t),t}),null,null)),e["ɵdid"](9,16384,null,0,d.D,[],null,null),e["ɵdid"](10,4210688,null,0,d.r,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),e["ɵprd"](2048,null,d.c,null,[d.r]),e["ɵdid"](12,16384,null,0,d.q,[[4,d.c]],null,null),(l()(),e["ɵeld"](13,0,null,null,10,"div",[["class","input-group mb-2"]],null,null,null,null,null)),(l()(),e["ɵeld"](14,0,null,null,3,"div",[["class","input-group-prepend"]],null,null,null,null,null)),(l()(),e["ɵeld"](15,0,null,null,2,"div",[["class","input-group-text"]],null,null,null,null,null)),(l()(),e["ɵeld"](16,0,null,null,0,"i",[["class","fa fa-search"]],null,null,null,null,null)),(l()(),e["ɵted"](-1,null,["  Search"])),(l()(),e["ɵeld"](18,0,null,null,5,"input",[["class","form-control"],["id","userQuery"],["name","userQuery"],["placeholder","User name or phone"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var t=!0,o=l.component;return"input"===n&&(t=!1!==e["ɵnov"](l,19)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e["ɵnov"](l,19).onTouched()&&t),"compositionstart"===n&&(t=!1!==e["ɵnov"](l,19)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e["ɵnov"](l,19)._compositionEnd(u.target.value)&&t),"ngModelChange"===n&&(t=!1!==(o.userQuery=u)&&t),t}),null,null)),e["ɵdid"](19,16384,null,0,d.d,[e.Renderer2,e.ElementRef,[2,d.a]],null,null),e["ɵprd"](1024,null,d.n,(function(l){return[l]}),[d.d]),e["ɵdid"](21,671744,null,0,d.s,[[2,d.c],[8,null],[8,null],[6,d.n]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e["ɵprd"](2048,null,d.o,null,[d.s]),e["ɵdid"](23,16384,null,0,d.p,[[4,d.o]],null,null),(l()(),e["ɵeld"](24,0,null,null,17,"table",[["class","table border"]],null,null,null,null,null)),(l()(),e["ɵeld"](25,0,null,null,8,"thead",[],null,null,null,null,null)),(l()(),e["ɵeld"](26,0,null,null,7,"tr",[],null,null,null,null,null)),(l()(),e["ɵeld"](27,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["ɵted"](-1,null,["Name"])),(l()(),e["ɵeld"](29,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["ɵted"](-1,null,["Phone"])),(l()(),e["ɵeld"](31,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["ɵted"](-1,null,["Email"])),(l()(),e["ɵeld"](33,0,null,null,0,"th",[],null,null,null,null,null)),(l()(),e["ɵeld"](34,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),e["ɵand"](16777216,null,null,1,null,k)),e["ɵdid"](36,278528,null,0,c.o,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["ɵeld"](37,0,null,null,4,"tfoot",[],null,null,null,null,null)),(l()(),e["ɵeld"](38,0,null,null,3,"tr",[],null,null,null,null,null)),(l()(),e["ɵeld"](39,0,null,null,2,"td",[["colspan","4"]],null,null,null,null,null)),(l()(),e["ɵeld"](40,0,null,null,1,"pagination",[],null,[[null,"getPage"]],(function(l,n,u){var e=!0;return"getPage"===n&&(e=!1!==l.component.getUserPage(u)&&e),e}),g.b,g.a)),e["ɵdid"](41,49152,null,0,m.a,[],{page:[0,"page"]},{getPage:"getPage"}),(l()(),e["ɵeld"](42,0,null,null,4,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),e["ɵeld"](43,0,null,null,1,"h3",[["class","text-center"]],null,null,null,null,null)),(l()(),e["ɵted"](-1,null,["Add Agent"])),(l()(),e["ɵeld"](45,0,null,null,1,"agent-form",[],null,[[null,"create"],[null,"removeAgent"]],(function(l,n,u){var e=!0,t=l.component;return"create"===n&&(e=!1!==t.onCreate(u)&&e),"removeAgent"===n&&(e=!1!==t.onRemoveAgent(u)&&e),e}),C,f)),e["ɵdid"](46,573440,null,0,p,[d.f],{user:[0,"user"]},{create:"create",removeAgent:"removeAgent"})],(function(l,n){var u=n.component;l(n,21,0,"userQuery",u.userQuery),l(n,36,0,null==u.userPage?null:u.userPage.content),l(n,41,0,u.userPage),l(n,46,0,u.user)}),(function(l,n){l(n,8,0,e["ɵnov"](n,12).ngClassUntouched,e["ɵnov"](n,12).ngClassTouched,e["ɵnov"](n,12).ngClassPristine,e["ɵnov"](n,12).ngClassDirty,e["ɵnov"](n,12).ngClassValid,e["ɵnov"](n,12).ngClassInvalid,e["ɵnov"](n,12).ngClassPending),l(n,18,0,e["ɵnov"](n,23).ngClassUntouched,e["ɵnov"](n,23).ngClassTouched,e["ɵnov"](n,23).ngClassPristine,e["ɵnov"](n,23).ngClassDirty,e["ɵnov"](n,23).ngClassValid,e["ɵnov"](n,23).ngClassInvalid,e["ɵnov"](n,23).ngClassPending)}))}function R(l){return e["ɵvid"](0,[(l()(),e["ɵeld"](0,0,null,null,1,"app-add-agent",[],null,null,null,P,y)),e["ɵdid"](1,114688,null,0,i,[o.a],null,null)],(function(l,n){l(n,1,0)}),null)}var x=e["ɵccf"]("app-add-agent",i,R,{},{},[]),E=u("CLyB"),_=u("4GxJ"),I=u("bBiL"),D=u("ZYCi"),w=u("KZX/"),S=u("MKLO");u.d(n,"ServiceAdminUsersModuleNgFactory",(function(){return A}));var A=e["ɵcmf"](r,[],(function(l){return e["ɵmod"]([e["ɵmpd"](512,e.ComponentFactoryResolver,e["ɵCodegenComponentFactoryResolver"],[[8,[a.a,s.a,s.b,s.n,s.o,s.k,s.l,s.m,x]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["ɵmpd"](4608,E.DaterangepickerConfig,E.DaterangepickerConfig,[]),e["ɵmpd"](4608,c.r,c.q,[e.LOCALE_ID,[2,c.J]]),e["ɵmpd"](4608,d.A,d.A,[]),e["ɵmpd"](4608,d.f,d.f,[]),e["ɵmpd"](4608,_.B,_.B,[e.ComponentFactoryResolver,e.Injector,_.qb,_.C]),e["ɵmpd"](1073742336,I.Daterangepicker,I.Daterangepicker,[]),e["ɵmpd"](1073742336,c.c,c.c,[]),e["ɵmpd"](1073742336,D.n,D.n,[[2,D.s],[2,D.k]]),e["ɵmpd"](1073742336,d.z,d.z,[]),e["ɵmpd"](1073742336,d.k,d.k,[]),e["ɵmpd"](1073742336,d.w,d.w,[]),e["ɵmpd"](1073742336,_.c,_.c,[]),e["ɵmpd"](1073742336,_.f,_.f,[]),e["ɵmpd"](1073742336,_.g,_.g,[]),e["ɵmpd"](1073742336,_.k,_.k,[]),e["ɵmpd"](1073742336,_.m,_.m,[]),e["ɵmpd"](1073742336,_.s,_.s,[]),e["ɵmpd"](1073742336,_.x,_.x,[]),e["ɵmpd"](1073742336,_.D,_.D,[]),e["ɵmpd"](1073742336,_.H,_.H,[]),e["ɵmpd"](1073742336,_.K,_.K,[]),e["ɵmpd"](1073742336,_.N,_.N,[]),e["ɵmpd"](1073742336,_.Q,_.Q,[]),e["ɵmpd"](1073742336,_.X,_.X,[]),e["ɵmpd"](1073742336,_.bb,_.bb,[]),e["ɵmpd"](1073742336,_.cb,_.cb,[]),e["ɵmpd"](1073742336,_.db,_.db,[]),e["ɵmpd"](1073742336,_.E,_.E,[]),e["ɵmpd"](1073742336,w.a,w.a,[]),e["ɵmpd"](1073742336,S.a,S.a,[]),e["ɵmpd"](1073742336,r,r,[]),e["ɵmpd"](1024,D.i,(function(){return[[{path:"",component:i}]]}),[])])}))},WT6a:function(l,n,u){"use strict";var e=u("CcnG"),t=u("Ip0R"),o=u("ZYCi");u("uEz7"),u.d(n,"a",(function(){return i})),u.d(n,"b",(function(){return a}));var i=e["ɵcrt"]({encapsulation:0,styles:[[".current[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:#dee2e6;font-weight:600;color:#000}.page-link[_ngcontent-%COMP%]{padding:.2rem .4rem}"]],data:{}});function r(l){return e["ɵvid"](0,[(l()(),e["ɵeld"](0,0,null,null,6,"li",[["class","page-item"]],null,null,null,null,null)),e["ɵprd"](512,null,t.E,t.F,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2]),e["ɵdid"](2,278528,null,0,t.n,[t.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["ɵpod"](3,{current:0}),(l()(),e["ɵeld"](4,0,null,null,2,"a",[["class","page-link"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var t=!0,o=l.component;return"click"===n&&(t=!1!==e["ɵnov"](l,5).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),"click"===n&&(t=!1!==o.onPaginate(l.context.$implicit)&&t),t}),null,null)),e["ɵdid"](5,671744,null,0,o.m,[o.k,o.a,t.m],null,null),(l()(),e["ɵted"](6,null,["",""]))],(function(l,n){var u=n.component,e=l(n,3,0,(null==u.page?null:u.page.number)==n.context.$implicit);l(n,2,0,"page-item",e)}),(function(l,n){l(n,4,0,e["ɵnov"](n,5).target,e["ɵnov"](n,5).href),l(n,6,0,n.context.$implicit+1)}))}function a(l){return e["ɵvid"](2,[(l()(),e["ɵeld"](0,0,null,null,32,"div",[["class","text-center"]],null,null,null,null,null)),(l()(),e["ɵeld"](1,0,null,null,31,"nav",[["aria-label","Page navigation"]],null,null,null,null,null)),(l()(),e["ɵeld"](2,0,null,null,30,"ul",[["class","pagination mb-0"]],null,null,null,null,null)),(l()(),e["ɵeld"](3,0,null,null,6,"li",[["class","page-item"]],null,null,null,null,null)),e["ɵprd"](512,null,t.E,t.F,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2]),e["ɵdid"](5,278528,null,0,t.n,[t.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["ɵpod"](6,{disabled:0}),(l()(),e["ɵeld"](7,0,null,null,2,"a",[["class","page-link"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var t=!0,o=l.component;return"click"===n&&(t=!1!==e["ɵnov"](l,8).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),"click"===n&&(t=!1!==o.onPaginate(0)&&t),t}),null,null)),e["ɵdid"](8,671744,null,0,o.m,[o.k,o.a,t.m],null,null),(l()(),e["ɵted"](9,null,[" "," "])),(l()(),e["ɵeld"](10,0,null,null,6,"li",[["class","page-item"]],null,null,null,null,null)),e["ɵprd"](512,null,t.E,t.F,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2]),e["ɵdid"](12,278528,null,0,t.n,[t.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["ɵpod"](13,{disabled:0}),(l()(),e["ɵeld"](14,0,null,null,2,"a",[["class","page-link"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var t=!0,o=l.component;return"click"===n&&(t=!1!==e["ɵnov"](l,15).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),"click"===n&&(t=!1!==o.onPaginate((null==o.page?null:o.page.number)-1)&&t),t}),null,null)),e["ɵdid"](15,671744,null,0,o.m,[o.k,o.a,t.m],null,null),(l()(),e["ɵted"](16,null,[" "," "])),(l()(),e["ɵand"](16777216,null,null,1,null,r)),e["ɵdid"](18,278528,null,0,t.o,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["ɵeld"](19,0,null,null,6,"li",[["class","page-item"]],null,null,null,null,null)),e["ɵprd"](512,null,t.E,t.F,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2]),e["ɵdid"](21,278528,null,0,t.n,[t.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["ɵpod"](22,{disabled:0}),(l()(),e["ɵeld"](23,0,null,null,2,"a",[["class","page-link"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var t=!0,o=l.component;return"click"===n&&(t=!1!==e["ɵnov"](l,24).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),"click"===n&&(t=!1!==o.onPaginate((null==o.page?null:o.page.number)+1)&&t),t}),null,null)),e["ɵdid"](24,671744,null,0,o.m,[o.k,o.a,t.m],null,null),(l()(),e["ɵted"](25,null,[" "," "])),(l()(),e["ɵeld"](26,0,null,null,6,"li",[["class","page-item"]],null,null,null,null,null)),e["ɵprd"](512,null,t.E,t.F,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2]),e["ɵdid"](28,278528,null,0,t.n,[t.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["ɵpod"](29,{disabled:0}),(l()(),e["ɵeld"](30,0,null,null,2,"a",[["class","page-link"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var t=!0,o=l.component;return"click"===n&&(t=!1!==e["ɵnov"](l,31).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),"click"===n&&(t=!1!==o.onPaginate((null==o.page?null:o.page.totalPages)-1)&&t),t}),null,null)),e["ɵdid"](31,671744,null,0,o.m,[o.k,o.a,t.m],null,null),(l()(),e["ɵted"](32,null,[" "," "]))],(function(l,n){var u=n.component,e=l(n,6,0,null==u.page?null:u.page.first);l(n,5,0,"page-item",e);var t=l(n,13,0,0==(null==u.page?null:u.page.number));l(n,12,0,"page-item",t),l(n,18,0,u.counter(null==u.page?null:u.page.number,null==u.page?null:u.page.totalPages));var o=l(n,22,0,null==u.page?null:u.page.last);l(n,21,0,"page-item",o);var i=l(n,29,0,null==u.page?null:u.page.last);l(n,28,0,"page-item",i)}),(function(l,n){var u=n.component;l(n,7,0,e["ɵnov"](n,8).target,e["ɵnov"](n,8).href),l(n,9,0,1==u.short?"<<":"First"),l(n,14,0,e["ɵnov"](n,15).target,e["ɵnov"](n,15).href),l(n,16,0,1==u.short?"<":"Previous"),l(n,23,0,e["ɵnov"](n,24).target,e["ɵnov"](n,24).href),l(n,25,0,1==u.short?">":"Next"),l(n,30,0,e["ɵnov"](n,31).target,e["ɵnov"](n,31).href),l(n,32,0,1==u.short?">>":"Last")}))}},uEz7:function(l,n,u){"use strict";u.d(n,"a",(function(){return t}));var e=u("CcnG"),t=function(){function l(){this.getPage=new e.EventEmitter}return l.prototype.onPaginate=function(l){this.getPage.emit(l)},l.prototype.counter=function(l,n){var u=0,e=10;return n<10?e=n:u=l<4?0:l+5>=n?n-10:l-4,Array.from({length:e},(function(l,n){return n+u}))},l}()}}]);