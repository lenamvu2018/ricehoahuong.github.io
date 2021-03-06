(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-brand\" href=\"#\">Title</a>\n    <ul class=\"nav navbar-nav\">\n      <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact : true}\">\n        <a [routerLink]=\"['/']\">Trang chủ</a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <a [routerLink]=\"['/dmhang']\">DM hàng</a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <a [routerLink]=\"['/dmkh']\">DM khách hàng</a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <a [routerLink]=\"['/hoadon']\">HÓA ĐƠN</a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <a [routerLink]=\"['/thongke']\">THỐNG KÊ</a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <a [routerLink]=\"['/bangke']\">BẢNG KÊ</a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <a (click)=\"logout()\">{{ login? 'Login' : 'Logout' }}</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<div>\n  <router-outlet></router-outlet>\n</div>\n<!-- <div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n      <div class=\"panel panel-primary\">\n        <div class=\"panel-heading\">\n          <h4 class=\"panel-title\" style=\"text-align: center\">HÒA VŨ RICE - 117 Nguyễn Đình Chiểu - Khóm 4 - TP.Châu Đốc - tỉnh An Giang (02963.867.749 - 0943.345.143)</h4>\n        </div>\n        <div class=\"panel-body\">\n          <router-outlet></router-outlet>\n        </div>\n      </div>\n    </div>\n  </div>\n</div> -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'HOAVU';
        this.login = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('checkLogin') == '1') {
            this.login = true;
        }
        else {
            this.login = false;
        }
    };
    AppComponent.prototype.logout = function () {
        if (localStorage.getItem('user')) {
            localStorage.removeItem('user');
            localStorage.removeItem('checkLogin');
            this.login = true;
            this.router.navigate(['']);
            //console.log(localStorage.getItem('user'));
        }
        else {
            this.login = false;
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_dmhang_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/dmhang.service */ "./src/app/services/dmhang.service.ts");
/* harmony import */ var _services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/guards/auth.guard */ "./src/app/services/guards/auth.guard.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_trangchu_trangchu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/trangchu/trangchu.component */ "./src/app/components/trangchu/trangchu.component.ts");
/* harmony import */ var _components_dmhang_dmhang_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/dmhang/dmhang.component */ "./src/app/components/dmhang/dmhang.component.ts");
/* harmony import */ var _components_dmkh_dmkh_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/dmkh/dmkh.component */ "./src/app/components/dmkh/dmkh.component.ts");
/* harmony import */ var _components_hoadon_hoadon_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/hoadon/hoadon.component */ "./src/app/components/hoadon/hoadon.component.ts");
/* harmony import */ var _components_hoadon_chitiethd_chitiethd_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/hoadon/chitiethd/chitiethd.component */ "./src/app/components/hoadon/chitiethd/chitiethd.component.ts");
/* harmony import */ var _components_dmkh_dmkh_list_dmkh_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/dmkh/dmkh-list/dmkh-list.component */ "./src/app/components/dmkh/dmkh-list/dmkh-list.component.ts");
/* harmony import */ var _components_dmkh_dmkh_detail_dmkh_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/dmkh/dmkh-detail/dmkh-detail.component */ "./src/app/components/dmkh/dmkh-detail/dmkh-detail.component.ts");
/* harmony import */ var _components_dmhang_dmhang_list_dmhang_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/dmhang/dmhang-list/dmhang-list.component */ "./src/app/components/dmhang/dmhang-list/dmhang-list.component.ts");
/* harmony import */ var _components_dmhang_dmhang_detail_dmhang_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/dmhang/dmhang-detail/dmhang-detail.component */ "./src/app/components/dmhang/dmhang-detail/dmhang-detail.component.ts");
/* harmony import */ var _components_dmhang_dmhang_add_dmhang_add_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/dmhang/dmhang-add/dmhang-add.component */ "./src/app/components/dmhang/dmhang-add/dmhang-add.component.ts");
/* harmony import */ var _components_dmhang_dmhang_edit_dmhang_edit_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/dmhang/dmhang-edit/dmhang-edit.component */ "./src/app/components/dmhang/dmhang-edit/dmhang-edit.component.ts");
/* harmony import */ var _components_dmkh_dmkh_add_dmkh_add_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/dmkh/dmkh-add/dmkh-add.component */ "./src/app/components/dmkh/dmkh-add/dmkh-add.component.ts");
/* harmony import */ var _components_dmkh_dmkh_edit_dmkh_edit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/dmkh/dmkh-edit/dmkh-edit.component */ "./src/app/components/dmkh/dmkh-edit/dmkh-edit.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_hoadon_hoadons_hoadons_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/hoadon/hoadons/hoadons.component */ "./src/app/components/hoadon/hoadons/hoadons.component.ts");
/* harmony import */ var _pipes_chitiethd_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pipes/chitiethd.pipe */ "./src/app/pipes/chitiethd.pipe.ts");
/* harmony import */ var _components_giaonhan_giaohang_giaohang_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/giaonhan/giaohang/giaohang.component */ "./src/app/components/giaonhan/giaohang/giaohang.component.ts");
/* harmony import */ var _components_giaonhan_nhanhang_nhanhang_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/giaonhan/nhanhang/nhanhang.component */ "./src/app/components/giaonhan/nhanhang/nhanhang.component.ts");
/* harmony import */ var _pipes_show_chitiethd_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pipes/show-chitiethd.pipe */ "./src/app/pipes/show-chitiethd.pipe.ts");
/* harmony import */ var _pipes_tenkh_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pipes/tenkh.pipe */ "./src/app/pipes/tenkh.pipe.ts");
/* harmony import */ var _pipes_tenhang_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pipes/tenhang.pipe */ "./src/app/pipes/tenhang.pipe.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _pipes_dmhang_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pipes/dmhang.pipe */ "./src/app/pipes/dmhang.pipe.ts");
/* harmony import */ var _components_hoadon_hoadon_edit_hoadon_edit_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/hoadon/hoadon-edit/hoadon-edit.component */ "./src/app/components/hoadon/hoadon-edit/hoadon-edit.component.ts");
/* harmony import */ var _components_hoadon_chitiethd_edit_chitiethd_edit_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/hoadon/chitiethd-edit/chitiethd-edit.component */ "./src/app/components/hoadon/chitiethd-edit/chitiethd-edit.component.ts");
/* harmony import */ var _pipes_filter_chitiethd_pipe__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pipes/filter-chitiethd.pipe */ "./src/app/pipes/filter-chitiethd.pipe.ts");
/* harmony import */ var _components_thongke_thongke_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/thongke/thongke.component */ "./src/app/components/thongke/thongke.component.ts");
/* harmony import */ var _components_thongke_bangke_bangke_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/thongke/bangke/bangke.component */ "./src/app/components/thongke/bangke/bangke.component.ts");
/* harmony import */ var _pipes_sorthoadon_pipe__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pipes/sorthoadon.pipe */ "./src/app/pipes/sorthoadon.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//import Router;

//import Service


//import HttpModule

//import ngModule































var appRoutes = [
    {
        path: '',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_29__["LoginComponent"]
    },
    {
        path: 'dmhang',
        component: _components_dmhang_dmhang_component__WEBPACK_IMPORTED_MODULE_9__["DmhangComponent"],
        canActivate: [_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        children: [
            {
                path: '',
                component: _components_dmhang_dmhang_list_dmhang_list_component__WEBPACK_IMPORTED_MODULE_15__["DmhangListComponent"]
            },
            {
                path: ':id/edit',
                component: _components_dmhang_dmhang_edit_dmhang_edit_component__WEBPACK_IMPORTED_MODULE_18__["DmhangEditComponent"]
            },
            {
                path: 'add',
                component: _components_dmhang_dmhang_add_dmhang_add_component__WEBPACK_IMPORTED_MODULE_17__["DmhangAddComponent"]
            }
        ]
    },
    {
        path: 'dmkh',
        component: _components_dmkh_dmkh_component__WEBPACK_IMPORTED_MODULE_10__["DmkhComponent"],
        canActivate: [_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        children: [
            {
                path: '',
                component: _components_dmkh_dmkh_list_dmkh_list_component__WEBPACK_IMPORTED_MODULE_13__["DmkhListComponent"]
            },
            {
                path: ':id/edit',
                component: _components_dmkh_dmkh_edit_dmkh_edit_component__WEBPACK_IMPORTED_MODULE_20__["DmkhEditComponent"]
            },
            {
                path: 'add',
                component: _components_dmkh_dmkh_add_dmkh_add_component__WEBPACK_IMPORTED_MODULE_19__["DmkhAddComponent"]
            }
        ]
    },
    {
        path: 'hoadon',
        component: _components_hoadon_hoadon_component__WEBPACK_IMPORTED_MODULE_11__["HoadonComponent"],
        canActivate: [_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        children: [
            {
                path: '',
                component: _components_hoadon_hoadons_hoadons_component__WEBPACK_IMPORTED_MODULE_22__["HoadonsComponent"]
            },
            {
                path: 'add',
                component: _components_hoadon_chitiethd_chitiethd_component__WEBPACK_IMPORTED_MODULE_12__["ChitiethdComponent"]
            },
            {
                path: ':id/edit',
                component: _components_hoadon_hoadon_edit_hoadon_edit_component__WEBPACK_IMPORTED_MODULE_31__["HoadonEditComponent"]
            },
            {
                path: ':id/editHD',
                component: _components_hoadon_chitiethd_edit_chitiethd_edit_component__WEBPACK_IMPORTED_MODULE_32__["ChitiethdEditComponent"]
            }
        ]
    },
    {
        path: 'thongke',
        component: _components_thongke_thongke_component__WEBPACK_IMPORTED_MODULE_34__["ThongkeComponent"],
        canActivate: [_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        children: [
            {
                path: '',
                component: _components_thongke_thongke_component__WEBPACK_IMPORTED_MODULE_34__["ThongkeComponent"]
            },
            {
                path: 'add',
                component: _components_thongke_thongke_component__WEBPACK_IMPORTED_MODULE_34__["ThongkeComponent"]
            }
        ]
    },
    {
        path: 'bangke',
        component: _components_thongke_bangke_bangke_component__WEBPACK_IMPORTED_MODULE_35__["BangkeComponent"],
        canActivate: [_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        children: [
            {
                path: '',
                component: _components_thongke_bangke_bangke_component__WEBPACK_IMPORTED_MODULE_35__["BangkeComponent"]
            }
        ]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_trangchu_trangchu_component__WEBPACK_IMPORTED_MODULE_8__["TrangchuComponent"],
                _components_dmhang_dmhang_component__WEBPACK_IMPORTED_MODULE_9__["DmhangComponent"],
                _components_dmkh_dmkh_component__WEBPACK_IMPORTED_MODULE_10__["DmkhComponent"],
                _components_hoadon_hoadon_component__WEBPACK_IMPORTED_MODULE_11__["HoadonComponent"],
                _components_hoadon_chitiethd_chitiethd_component__WEBPACK_IMPORTED_MODULE_12__["ChitiethdComponent"],
                _components_dmkh_dmkh_list_dmkh_list_component__WEBPACK_IMPORTED_MODULE_13__["DmkhListComponent"],
                _components_dmkh_dmkh_detail_dmkh_detail_component__WEBPACK_IMPORTED_MODULE_14__["DmkhDetailComponent"],
                _components_dmhang_dmhang_list_dmhang_list_component__WEBPACK_IMPORTED_MODULE_15__["DmhangListComponent"],
                _components_dmhang_dmhang_detail_dmhang_detail_component__WEBPACK_IMPORTED_MODULE_16__["DmhangDetailComponent"],
                _components_dmhang_dmhang_add_dmhang_add_component__WEBPACK_IMPORTED_MODULE_17__["DmhangAddComponent"],
                _components_dmhang_dmhang_edit_dmhang_edit_component__WEBPACK_IMPORTED_MODULE_18__["DmhangEditComponent"],
                _components_dmkh_dmkh_add_dmkh_add_component__WEBPACK_IMPORTED_MODULE_19__["DmkhAddComponent"],
                _components_dmkh_dmkh_edit_dmkh_edit_component__WEBPACK_IMPORTED_MODULE_20__["DmkhEditComponent"],
                _components_hoadon_hoadons_hoadons_component__WEBPACK_IMPORTED_MODULE_22__["HoadonsComponent"],
                _pipes_chitiethd_pipe__WEBPACK_IMPORTED_MODULE_23__["ChitiethdPipe"],
                _components_giaonhan_giaohang_giaohang_component__WEBPACK_IMPORTED_MODULE_24__["GiaohangComponent"],
                _components_giaonhan_nhanhang_nhanhang_component__WEBPACK_IMPORTED_MODULE_25__["NhanhangComponent"],
                _pipes_show_chitiethd_pipe__WEBPACK_IMPORTED_MODULE_26__["ShowChitiethdPipe"],
                _pipes_tenkh_pipe__WEBPACK_IMPORTED_MODULE_27__["TenkhPipe"],
                _pipes_tenhang_pipe__WEBPACK_IMPORTED_MODULE_28__["TenhangPipe"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_29__["LoginComponent"],
                _pipes_dmhang_pipe__WEBPACK_IMPORTED_MODULE_30__["DmhangPipe"],
                _components_hoadon_hoadon_edit_hoadon_edit_component__WEBPACK_IMPORTED_MODULE_31__["HoadonEditComponent"],
                _components_hoadon_chitiethd_edit_chitiethd_edit_component__WEBPACK_IMPORTED_MODULE_32__["ChitiethdEditComponent"],
                _pipes_filter_chitiethd_pipe__WEBPACK_IMPORTED_MODULE_33__["FilterChitiethdPipe"],
                _components_thongke_thongke_component__WEBPACK_IMPORTED_MODULE_34__["ThongkeComponent"],
                _components_thongke_bangke_bangke_component__WEBPACK_IMPORTED_MODULE_35__["BangkeComponent"],
                _pipes_sorthoadon_pipe__WEBPACK_IMPORTED_MODULE_36__["SorthoadonPipe"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [
                _services_dmhang_service__WEBPACK_IMPORTED_MODULE_3__["DmhangService"],
                _angular_common__WEBPACK_IMPORTED_MODULE_21__["DatePipe"],
                _services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/dmhang/dmhang-add/dmhang-add.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/dmhang/dmhang-add/dmhang-add.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dmhang/dmhang-add/dmhang-add.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/dmhang/dmhang-add/dmhang-add.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form action=\"\" method=\"POST\" role=\"form\">\n\t<legend>THÊM MỚI MẶT HÀNG</legend>\n\t<div class=\"form-group\">\n\t\t<select (click)=\"onClickTenhang()\" class=\"form-control\" [(ngModel)]=\"madiachi\" \n\t\t[ngModelOptions]=\"{standalone: true}\">\n\t\t\t\t<option value=\"GA\">Gạo</option>\n\t\t\t\t<option value=\"TT\">Tấm</option>\n\t\t\t\t<option value=\"NH\">Nếp hảo</option>\n\t\t\t\t<option value=\"NT\">Nếp thơm</option>\n\t\t\t\t<option value=\"DA\">Đậu</option>\n\t\t\t\t<option value=\"BA\">Bao</option>\n\t\t\t\t<option value=\"BB\">Bắp</option>\n\t\t\t\t<option value=\"ME\">Mè</option>\n\t\t\t</select>\t\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label for=\"\">Mã hàng</label>\n\t\t<input type=\"text\" class=\"form-control\" \n\t\t[(ngModel)]=\"db.mahang\" \n\t\t[ngModelOptions]=\"{standalone: true}\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label for=\"\">Tên hàng</label>\n\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"db.tenhang\" \n\t\t[ngModelOptions]=\"{standalone: true}\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label for=\"\">Xuất xứ</label>\n\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"db.xuatxu\" \n\t\t[ngModelOptions]=\"{standalone: true}\">\n\t</div>\n\n\t<button type=\"submit\" class=\"btn btn-primary\" (click)=\"onAdd_dmhang()\">Lưu</button>\n</form>"

/***/ }),

/***/ "./src/app/components/dmhang/dmhang-add/dmhang-add.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/dmhang/dmhang-add/dmhang-add.component.ts ***!
  \**********************************************************************/
/*! exports provided: DmhangAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DmhangAddComponent", function() { return DmhangAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dmhang_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/dmhang.service */ "./src/app/services/dmhang.service.ts");
/* harmony import */ var _services_dmdiachi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/dmdiachi.service */ "./src/app/services/dmdiachi.service.ts");
/* harmony import */ var _models_dmhang_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../models/dmhang.model */ "./src/app/models/dmhang.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DmhangAddComponent = /** @class */ (function () {
    function DmhangAddComponent(dmhangservice, dmdiachiservice, routerService) {
        this.dmhangservice = dmhangservice;
        this.dmdiachiservice = dmdiachiservice;
        this.routerService = routerService;
        this.dmhangs = [];
        this.dem = 0;
    }
    DmhangAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.dmhangservice.getAlldmhang().subscribe(function (data) {
            _this.dmhangs = data;
        });
        this.db = new _models_dmhang_model__WEBPACK_IMPORTED_MODULE_3__["dmhang"]();
    };
    DmhangAddComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    DmhangAddComponent.prototype.onClickTenhang = function () {
        this.dem = 1;
        console.log(this.madiachi);
        for (var i = this.dmhangs.length - 1; i >= 0; i--) {
            if (this.dmhangs[i].mahang.slice(0, 2) == this.madiachi) {
                this.dem++;
            }
        }
        if (this.dem < 10) {
            this.db.mahang = this.madiachi + '0' + this.dem;
        }
        else {
            this.db.mahang = this.madiachi + this.dem;
        }
    };
    DmhangAddComponent.prototype.onAdd_dmhang = function () {
        var _this = this;
        this.subscription = this.dmhangservice.add_dmhang(this.db).subscribe(function (data) {
            //console.log(data);
            if (data) {
                _this.routerService.navigate(['dmhang']);
            }
        });
    };
    DmhangAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dmhang-add',
            template: __webpack_require__(/*! ./dmhang-add.component.html */ "./src/app/components/dmhang/dmhang-add/dmhang-add.component.html"),
            styles: [__webpack_require__(/*! ./dmhang-add.component.css */ "./src/app/components/dmhang/dmhang-add/dmhang-add.component.css")]
        }),
        __metadata("design:paramtypes", [_services_dmhang_service__WEBPACK_IMPORTED_MODULE_1__["DmhangService"],
            _services_dmdiachi_service__WEBPACK_IMPORTED_MODULE_2__["DmdiachiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], DmhangAddComponent);
    return DmhangAddComponent;
}());



/***/ }),

/***/ "./src/app/components/dmhang/dmhang-detail/dmhang-detail.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/dmhang/dmhang-detail/dmhang-detail.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dmhang/dmhang-detail/dmhang-detail.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/dmhang/dmhang-detail/dmhang-detail.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dmhang/dmhang-detail/dmhang-detail.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/dmhang/dmhang-detail/dmhang-detail.component.ts ***!
  \****************************************************************************/
/*! exports provided: DmhangDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DmhangDetailComponent", function() { return DmhangDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DmhangDetailComponent = /** @class */ (function () {
    function DmhangDetailComponent() {
    }
    DmhangDetailComponent.prototype.ngOnInit = function () {
    };
    DmhangDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dmhang-detail',
            template: __webpack_require__(/*! ./dmhang-detail.component.html */ "./src/app/components/dmhang/dmhang-detail/dmhang-detail.component.html"),
            styles: [__webpack_require__(/*! ./dmhang-detail.component.css */ "./src/app/components/dmhang/dmhang-detail/dmhang-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DmhangDetailComponent);
    return DmhangDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/dmhang/dmhang-edit/dmhang-edit.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/dmhang/dmhang-edit/dmhang-edit.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dmhang/dmhang-edit/dmhang-edit.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/dmhang/dmhang-edit/dmhang-edit.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form action=\"\" method=\"POST\" role=\"form\">\n\t<legend>CẬP NHẬT LẠI MẶT HÀNG</legend>\n\n\t<div class=\"form-group\">\n\t\t<label for=\"\">Mã hàng</label>\n\t\t<input type=\"text\" class=\"form-control\" \n\t\t[(ngModel)]=\"db.mahang\" \n\t\t[ngModelOptions]=\"{standalone: true}\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label for=\"\">Tên hàng</label>\n\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"db.tenhang\" \n\t\t[ngModelOptions]=\"{standalone: true}\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label for=\"\">Xuất xứ</label>\n\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"db.xuatxu\" \n\t\t[ngModelOptions]=\"{standalone: true}\">\n\t</div>\n\n\t<button type=\"submit\" class=\"btn btn-primary\" (click)=\"onEdit_dmhang()\">Lưu</button>\n</form>"

/***/ }),

/***/ "./src/app/components/dmhang/dmhang-edit/dmhang-edit.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/dmhang/dmhang-edit/dmhang-edit.component.ts ***!
  \************************************************************************/
/*! exports provided: DmhangEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DmhangEditComponent", function() { return DmhangEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dmhang_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/dmhang.service */ "./src/app/services/dmhang.service.ts");
/* harmony import */ var _models_dmhang_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../models/dmhang.model */ "./src/app/models/dmhang.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DmhangEditComponent = /** @class */ (function () {
    function DmhangEditComponent(dmhangservice, routerService, activeRouterService) {
        this.dmhangservice = dmhangservice;
        this.routerService = routerService;
        this.activeRouterService = activeRouterService;
    }
    DmhangEditComponent.prototype.ngOnInit = function () {
        this.db = new _models_dmhang_model__WEBPACK_IMPORTED_MODULE_2__["dmhang"]();
        this.loadData();
    };
    DmhangEditComponent.prototype.loadData = function () {
        var _this = this;
        this.subscriptionParams = this.activeRouterService.params.subscribe(function (data) {
            var id = data['id'];
            _this.subscription = _this.dmhangservice.getOnedmhang(id).subscribe(function (dmhang) {
                _this.db = dmhang;
            });
        });
    };
    DmhangEditComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        if (this.subscriptionParams) {
            this.subscriptionParams.unsubscribe();
        }
    };
    DmhangEditComponent.prototype.onEdit_dmhang = function () {
        var _this = this;
        this.subscription =
            this.dmhangservice.uppdate_dmhang(this.db).subscribe(function (data) {
                _this.routerService.navigateByUrl('dmhang');
                //console.log(data);
            });
    };
    DmhangEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dmhang-edit',
            template: __webpack_require__(/*! ./dmhang-edit.component.html */ "./src/app/components/dmhang/dmhang-edit/dmhang-edit.component.html"),
            styles: [__webpack_require__(/*! ./dmhang-edit.component.css */ "./src/app/components/dmhang/dmhang-edit/dmhang-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_services_dmhang_service__WEBPACK_IMPORTED_MODULE_1__["DmhangService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], DmhangEditComponent);
    return DmhangEditComponent;
}());



/***/ }),

/***/ "./src/app/components/dmhang/dmhang-list/dmhang-list.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/dmhang/dmhang-list/dmhang-list.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dmhang/dmhang-list/dmhang-list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/dmhang/dmhang-list/dmhang-list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n\t<div class=\"panel-heading\">\n\t\t<h3 class=\"panel-title\">DANH SÁCH CÁC MẶT HÀNG</h3>\n\t</div>\n\t<div class=\"panel-body\">\n\t\t<div class=\"form-group\">\n\t\t<select class=\"form-control\" [(ngModel)]=\"madiachi\" \n\t\t[ngModelOptions]=\"{standalone: true}\">\n\t\t\t\t<option value=\"GA\">Gạo</option>\n\t\t\t\t<option value=\"TT\">Tấm</option>\n\t\t\t\t<option value=\"NH\">Nếp hảo</option>\n\t\t\t\t<option value=\"NT\">Nếp thơm</option>\n\t\t\t\t<option value=\"DA\">Đậu</option>\n\t\t\t\t<option value=\"BA\">Bao</option>\n\t\t\t\t<option value=\"BB\">Bắp</option>\n\t\t\t\t<option value=\"ME\">Mè</option>\n\t\t\t</select>\t\n\t</div>\n\t\t<button type=\"button\" class=\"btn btn-success\" [routerLink]=\"['/dmhang/add']\">Thêm</button>\n\t\t<!-- <label>{{ txtchon }}</label>\n\t\t<select name=\"\" id=\"input\" class=\"form-control\" [(ngModel)]=\"txtchon\">\n\t\t\t<option value=\"{{ item.mahang }}\" *ngFor=\"let item of db\">{{ item.tenhang }}</option>\n\t\t</select>\n\t\t<label>{{ txtchonkh }}</label>\n\t\t<select name=\"\" id=\"input\" class=\"form-control\" [(ngModel)]=\"txtchonkh\">\n\t\t\t<option value=\"{{ item.makh }}\" *ngFor=\"let item of db\">{{ item.tenkh }}</option>\n\t\t</select> -->\n\t\t<table class=\"table table-bordered table-hover\" [style.margin-top.px]=\"10\">\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th>STT</th>\n\t\t\t\t\t<th>Mã hàng</th>\n\t\t\t\t\t<th>Tên hàng</th>\n\t\t\t\t\t<th>Xuất xứ</th>\n\t\t\t\t\t<th>Edit</th>\n\t\t\t\t\t<th>Delete</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr *ngFor=\"let item of db | dmhang : madiachi; let i = index\">\n\t\t\t\t\t<td>{{ i + 1 }}</td>\n\t\t\t\t\t<td>{{ item.mahang }}</td>\n\t\t\t\t\t<td>{{ item.tenhang }}</td>\n\t\t\t\t\t<td>{{ item.xuatxu }}</td>\n\t\t\t\t\t<td>\n\t\t<button type=\"button\" class=\"btn btn-large btn-block btn-success\"\n\t\t\t[routerLink]=\"['/dmhang', item.id, 'edit']\"\n\t\t>Edit</button>\n\t\t\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-large btn-block btn-danger\"\n\t\t\t(click)=\"onDelete_dmhang(item.id)\"\n\t\t>Delete</button>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/components/dmhang/dmhang-list/dmhang-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/dmhang/dmhang-list/dmhang-list.component.ts ***!
  \************************************************************************/
/*! exports provided: DmhangListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DmhangListComponent", function() { return DmhangListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dmhang_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/dmhang.service */ "./src/app/services/dmhang.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DmhangListComponent = /** @class */ (function () {
    function DmhangListComponent(dmhangservice) {
        this.dmhangservice = dmhangservice;
        this.db = [];
    }
    DmhangListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.dmhangservice.getAlldmhang().subscribe(function (data) {
            _this.db = data;
        });
    };
    DmhangListComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    DmhangListComponent.prototype.onDelete_dmhang = function (id) {
        var _this = this;
        this.subscription = this.dmhangservice.delete_dmhang(id).subscribe(function (data) {
            _this.updateDataAfterDelete(id);
        });
    };
    DmhangListComponent.prototype.updateDataAfterDelete = function (id) {
        for (var i = 0; i < this.db.length; i++) {
            if (this.db[i].id == id) {
                this.db.splice(i, 1);
                break;
            }
        }
    };
    DmhangListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dmhang-list',
            template: __webpack_require__(/*! ./dmhang-list.component.html */ "./src/app/components/dmhang/dmhang-list/dmhang-list.component.html"),
            styles: [__webpack_require__(/*! ./dmhang-list.component.css */ "./src/app/components/dmhang/dmhang-list/dmhang-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_dmhang_service__WEBPACK_IMPORTED_MODULE_1__["DmhangService"]])
    ], DmhangListComponent);
    return DmhangListComponent;
}());



/***/ }),

/***/ "./src/app/components/dmhang/dmhang.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/dmhang/dmhang.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dmhang/dmhang.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/dmhang/dmhang.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/dmhang/dmhang.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/dmhang/dmhang.component.ts ***!
  \*******************************************************/
/*! exports provided: DmhangComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DmhangComponent", function() { return DmhangComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DmhangComponent = /** @class */ (function () {
    function DmhangComponent() {
    }
    DmhangComponent.prototype.ngOnInit = function () {
    };
    DmhangComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dmhang',
            template: __webpack_require__(/*! ./dmhang.component.html */ "./src/app/components/dmhang/dmhang.component.html"),
            styles: [__webpack_require__(/*! ./dmhang.component.css */ "./src/app/components/dmhang/dmhang.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DmhangComponent);
    return DmhangComponent;
}());



/***/ }),

/***/ "./src/app/components/dmkh/dmkh-add/dmkh-add.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/dmkh/dmkh-add/dmkh-add.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dmkh/dmkh-add/dmkh-add.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/dmkh/dmkh-add/dmkh-add.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form action=\"\" method=\"POST\" role=\"form\">\n\t<legend>THÊM MỚI MẶT HÀNG</legend>\n\t<div class=\"form-group\">\n<select name=\"\" id=\"input\" class=\"form-control\" required=\"required\" (click)=\"onClickTendiachi()\"\n[(ngModel)]=\"madiachi\" [ngModelOptions]=\"{standalone: true}\">\n\t\t\t<option value=\"{{item.madm}}\" *ngFor=\"let item of db_dmdiachi\">{{item.tendm}}</option>\n\t\t</select>\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label for=\"\">Mã khách hàng</label>\n\t\t<input type=\"text\" class=\"form-control\" \n\t\t[(ngModel)]=\"db.makh\" \n\t\t[ngModelOptions]=\"{standalone: true}\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label for=\"\">Tên khách hàng</label>\n\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"db.tenkh\" \n\t\t[ngModelOptions]=\"{standalone: true}\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label for=\"\">Địa chỉ</label>\n\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"db.diachi\" \n\t\t[ngModelOptions]=\"{standalone: true}\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label for=\"\">Phone</label>\n\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"db.phone\" \n\t\t[ngModelOptions]=\"{standalone: true}\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label for=\"\">STK</label>\n\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"db.tk\" \n\t\t[ngModelOptions]=\"{standalone: true}\">\n\t</div>\n\t<button type=\"submit\" class=\"btn btn-primary\" (click)=\"onAdd_dmkh()\">Lưu</button>\n</form>"

/***/ }),

/***/ "./src/app/components/dmkh/dmkh-add/dmkh-add.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/dmkh/dmkh-add/dmkh-add.component.ts ***!
  \****************************************************************/
/*! exports provided: DmkhAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DmkhAddComponent", function() { return DmkhAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dmkh_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/dmkh.service */ "./src/app/services/dmkh.service.ts");
/* harmony import */ var _services_dmdiachi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/dmdiachi.service */ "./src/app/services/dmdiachi.service.ts");
/* harmony import */ var _models_dmkh_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../models/dmkh.model */ "./src/app/models/dmkh.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DmkhAddComponent = /** @class */ (function () {
    function DmkhAddComponent(dmkhservice, dmdiachiservice, routerService) {
        this.dmkhservice = dmkhservice;
        this.dmdiachiservice = dmdiachiservice;
        this.routerService = routerService;
        this.db_dmdiachi = [];
        this.db_khachhang = [];
        this.dem = 0;
    }
    DmkhAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.db = new _models_dmkh_model__WEBPACK_IMPORTED_MODULE_3__["dmkh"]();
        this.subscription = this.dmdiachiservice.getAlldmdiachi().subscribe(function (data) {
            _this.db_dmdiachi = data;
        });
        this.subscription = this.dmkhservice.getAlldmkh().subscribe(function (data) {
            _this.db_khachhang = data;
        });
    };
    DmkhAddComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    DmkhAddComponent.prototype.onClickTendiachi = function () {
        this.dem = 1;
        for (var i = this.db_khachhang.length - 1; i >= 0; i--) {
            if (this.db_khachhang[i].makh.slice(0, 2) == this.madiachi) {
                this.dem++;
            }
        }
        if (this.dem < 10) {
            this.db.makh = this.madiachi + '0' + this.dem;
        }
        else {
            this.db.makh = this.madiachi + this.dem;
        }
    };
    DmkhAddComponent.prototype.onAdd_dmkh = function () {
        var _this = this;
        this.subscription = this.dmkhservice.add_dmkh(this.db).subscribe(function (data) {
            //console.log(data);
            if (data) {
                _this.routerService.navigate(['dmkh']);
            }
        });
    };
    DmkhAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dmkh-add',
            template: __webpack_require__(/*! ./dmkh-add.component.html */ "./src/app/components/dmkh/dmkh-add/dmkh-add.component.html"),
            styles: [__webpack_require__(/*! ./dmkh-add.component.css */ "./src/app/components/dmkh/dmkh-add/dmkh-add.component.css")]
        }),
        __metadata("design:paramtypes", [_services_dmkh_service__WEBPACK_IMPORTED_MODULE_1__["DmkhService"],
            _services_dmdiachi_service__WEBPACK_IMPORTED_MODULE_2__["DmdiachiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], DmkhAddComponent);
    return DmkhAddComponent;
}());



/***/ }),

/***/ "./src/app/components/dmkh/dmkh-detail/dmkh-detail.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/dmkh/dmkh-detail/dmkh-detail.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dmkh/dmkh-detail/dmkh-detail.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/dmkh/dmkh-detail/dmkh-detail.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dmkh-detail works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/dmkh/dmkh-detail/dmkh-detail.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/dmkh/dmkh-detail/dmkh-detail.component.ts ***!
  \**********************************************************************/
/*! exports provided: DmkhDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DmkhDetailComponent", function() { return DmkhDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DmkhDetailComponent = /** @class */ (function () {
    function DmkhDetailComponent() {
    }
    DmkhDetailComponent.prototype.ngOnInit = function () {
    };
    DmkhDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dmkh-detail',
            template: __webpack_require__(/*! ./dmkh-detail.component.html */ "./src/app/components/dmkh/dmkh-detail/dmkh-detail.component.html"),
            styles: [__webpack_require__(/*! ./dmkh-detail.component.css */ "./src/app/components/dmkh/dmkh-detail/dmkh-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DmkhDetailComponent);
    return DmkhDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/dmkh/dmkh-edit/dmkh-edit.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/dmkh/dmkh-edit/dmkh-edit.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dmkh/dmkh-edit/dmkh-edit.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/dmkh/dmkh-edit/dmkh-edit.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form action=\"\" method=\"POST\" role=\"form\">\n\t<legend>CẬP NHẬT LẠI KHÁCH HÀNG</legend>\n\n\t<div class=\"form-group\">\n\t\t<label for=\"\">Mã khách hàng</label>\n\t\t<input type=\"text\" class=\"form-control\" \n\t\t[(ngModel)]=\"db.makh\" \n\t\t[ngModelOptions]=\"{standalone: true}\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label for=\"\">Tên khách hàng</label>\n\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"db.tenkh\" \n\t\t[ngModelOptions]=\"{standalone: true}\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label for=\"\">Địa chỉ</label>\n\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"db.diachi\" \n\t\t[ngModelOptions]=\"{standalone: true}\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label for=\"\">Phone</label>\n\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"db.phone\" \n\t\t[ngModelOptions]=\"{standalone: true}\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label for=\"\">STK</label>\n\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"db.tk\" \n\t\t[ngModelOptions]=\"{standalone: true}\">\n\t</div>\n\t<button type=\"submit\" class=\"btn btn-primary\" (click)=\"onEdit_dmkh()\">Lưu</button>\n</form>"

/***/ }),

/***/ "./src/app/components/dmkh/dmkh-edit/dmkh-edit.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/dmkh/dmkh-edit/dmkh-edit.component.ts ***!
  \******************************************************************/
/*! exports provided: DmkhEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DmkhEditComponent", function() { return DmkhEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dmkh_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/dmkh.service */ "./src/app/services/dmkh.service.ts");
/* harmony import */ var _models_dmkh_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../models/dmkh.model */ "./src/app/models/dmkh.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DmkhEditComponent = /** @class */ (function () {
    function DmkhEditComponent(dmhangservice, routerService, activeRouterService) {
        this.dmhangservice = dmhangservice;
        this.routerService = routerService;
        this.activeRouterService = activeRouterService;
    }
    DmkhEditComponent.prototype.ngOnInit = function () {
        this.db = new _models_dmkh_model__WEBPACK_IMPORTED_MODULE_2__["dmkh"]();
        this.loadData();
    };
    DmkhEditComponent.prototype.loadData = function () {
        var _this = this;
        this.subscriptionParams = this.activeRouterService.params.subscribe(function (data) {
            var id = data['id'];
            _this.subscription = _this.dmhangservice.getOnedmkh(id).subscribe(function (dmkh) {
                _this.db = dmkh;
            });
        });
    };
    DmkhEditComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        if (this.subscriptionParams) {
            this.subscriptionParams.unsubscribe();
        }
    };
    DmkhEditComponent.prototype.onEdit_dmkh = function () {
        var _this = this;
        this.subscription =
            this.dmhangservice.uppdate_dmkh(this.db).subscribe(function (data) {
                _this.routerService.navigateByUrl('dmkh');
                //console.log(data);
            });
    };
    DmkhEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dmkh-edit',
            template: __webpack_require__(/*! ./dmkh-edit.component.html */ "./src/app/components/dmkh/dmkh-edit/dmkh-edit.component.html"),
            styles: [__webpack_require__(/*! ./dmkh-edit.component.css */ "./src/app/components/dmkh/dmkh-edit/dmkh-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_services_dmkh_service__WEBPACK_IMPORTED_MODULE_1__["DmkhService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], DmkhEditComponent);
    return DmkhEditComponent;
}());



/***/ }),

/***/ "./src/app/components/dmkh/dmkh-list/dmkh-list.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/dmkh/dmkh-list/dmkh-list.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dmkh/dmkh-list/dmkh-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/dmkh/dmkh-list/dmkh-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n\t<div class=\"panel-heading\">\n\t\t<h3 class=\"panel-title\">DANH SÁCH CÁC KHÁCH HÀNG</h3>\n\t\t\n\t</div>\n\t<div class=\"panel-body\">\n\t\t<input type=\"tel\" name=\"\" id=\"input\" class=\"form-control\" value=\"\" required=\"required\" [(ngModel)]=\"txtTimKH\">\n\t\t<select name=\"\" id=\"input\" class=\"form-control\" required=\"required\" [(ngModel)]=\"checkMadiachi\">\n\t\t\t<option value=\"{{item.madm}}\" *ngFor=\"let item of db_dmdiachi\">{{item.tendm}}</option>\n\t\t</select>\n\t\t<button type=\"button\" class=\"btn btn-large btn-block btn-danger\"\n\t\t[routerLink]=\"['/dmkh/add']\">THÊM</button>\n\t\t<table class=\"table table-bordered table-hover\">\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th>STT</th>\n\t\t\t\t\t<th>Mã khách hàng</th>\n\t\t\t\t\t<th>Tên khách hàng</th>\n\t\t\t\t\t<th>Địa chỉ</th>\n\t\t\t\t\t<th>Phone</th>\n\t\t\t\t\t<th>STK</th>\n\t\t\t\t\t<th>Edit</th>\n\t\t\t\t\t<th>Delete</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr *ngFor=\"let item of db | tenkh : checkMadiachi : txtTimKH ; index as i\">\n\t\t\t\t\t<td>{{ i + 1 }}</td>\n\t\t\t\t\t<td>{{ item.makh }}</td>\n\t\t\t\t\t<td>{{ item.tenkh }}</td>\n\t\t\t\t\t<td>{{ item.diachi }}</td>\n\t\t\t\t\t<td>{{ item.phone }}</td>\n\t\t\t\t\t<td>{{ item.tk }}</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-large btn-block btn-success\" \n\t\t\t\t\t\t[routerLink]=\"['/dmkh', item.id, 'edit']\"\n\t\t\t\t\t>Edit</button>\n\t\t\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-large btn-block btn-danger\"\n\t\t\t(click)=\"onDelete_dmkh(item.id)\"\n\t\t>Delete</button>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/components/dmkh/dmkh-list/dmkh-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/dmkh/dmkh-list/dmkh-list.component.ts ***!
  \******************************************************************/
/*! exports provided: DmkhListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DmkhListComponent", function() { return DmkhListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dmkh_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/dmkh.service */ "./src/app/services/dmkh.service.ts");
/* harmony import */ var _services_dmdiachi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/dmdiachi.service */ "./src/app/services/dmdiachi.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DmkhListComponent = /** @class */ (function () {
    function DmkhListComponent(dmkhservice, dmdiachi) {
        this.dmkhservice = dmkhservice;
        this.dmdiachi = dmdiachi;
        this.db = [];
        this.db_dmdiachi = [];
    }
    DmkhListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.dmkhservice.getAlldmkh().subscribe(function (data) {
            _this.db = data;
        });
        this.subscription = this.dmdiachi.getAlldmdiachi().subscribe(function (data) {
            _this.db_dmdiachi = data;
        });
    };
    DmkhListComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    DmkhListComponent.prototype.onDelete_dmkh = function (id) {
        var _this = this;
        console.log(id);
        this.subscription = this.dmkhservice.delete_dmkh(id).subscribe(function (data) {
            _this.updateDataAfterDelete(id);
        });
    };
    DmkhListComponent.prototype.updateDataAfterDelete = function (id) {
        for (var i = 0; i < this.db.length; i++) {
            if (this.db[i].id == id) {
                this.db.splice(i, 1);
                break;
            }
        }
    };
    DmkhListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dmkh-list',
            template: __webpack_require__(/*! ./dmkh-list.component.html */ "./src/app/components/dmkh/dmkh-list/dmkh-list.component.html"),
            styles: [__webpack_require__(/*! ./dmkh-list.component.css */ "./src/app/components/dmkh/dmkh-list/dmkh-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_dmkh_service__WEBPACK_IMPORTED_MODULE_1__["DmkhService"], _services_dmdiachi_service__WEBPACK_IMPORTED_MODULE_2__["DmdiachiService"]])
    ], DmkhListComponent);
    return DmkhListComponent;
}());



/***/ }),

/***/ "./src/app/components/dmkh/dmkh.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/dmkh/dmkh.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dmkh/dmkh.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/dmkh/dmkh.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/dmkh/dmkh.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/dmkh/dmkh.component.ts ***!
  \***************************************************/
/*! exports provided: DmkhComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DmkhComponent", function() { return DmkhComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DmkhComponent = /** @class */ (function () {
    function DmkhComponent() {
    }
    DmkhComponent.prototype.ngOnInit = function () {
    };
    DmkhComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dmkh',
            template: __webpack_require__(/*! ./dmkh.component.html */ "./src/app/components/dmkh/dmkh.component.html"),
            styles: [__webpack_require__(/*! ./dmkh.component.css */ "./src/app/components/dmkh/dmkh.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DmkhComponent);
    return DmkhComponent;
}());



/***/ }),

/***/ "./src/app/components/giaonhan/giaohang/giaohang.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/giaonhan/giaohang/giaohang.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/giaonhan/giaohang/giaohang.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/giaonhan/giaohang/giaohang.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n\t\t<div class=\"panel panel-danger\">\n\t\t\t<div class=\"panel-heading\">\n\t\t\t\t<h3 class=\"panel-title\">Hóa đơn chưa giao</h3>\n\t\t\t</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<table class=\"table table-bordered table-hover\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>STT</th>\n\t\t\t\t\t\t\t<th>Mã hóa đơn</th>\n\t\t\t\t\t\t\t<th>Mã KH</th>\n\t\t\t\t\t\t\t<th>Tổng hóa đơn</th>\n\t\t\t\t\t\t\t<th>Thanh toán</th>\n\t\t\t\t\t\t\t<th>Còn lại</th>\n\t\t\t\t\t\t\t<th>Tình trạng</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr >\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n\t\t<div class=\"panel panel-success\">\n\t\t\t<div class=\"panel-heading\">\n\t\t\t\t<h3 class=\"panel-title\">Hóa đơn đã giao</h3>\n\t\t\t</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\tPanel content\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/components/giaonhan/giaohang/giaohang.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/giaonhan/giaohang/giaohang.component.ts ***!
  \********************************************************************/
/*! exports provided: GiaohangComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiaohangComponent", function() { return GiaohangComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GiaohangComponent = /** @class */ (function () {
    function GiaohangComponent() {
    }
    GiaohangComponent.prototype.ngOnInit = function () {
    };
    GiaohangComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-giaohang',
            template: __webpack_require__(/*! ./giaohang.component.html */ "./src/app/components/giaonhan/giaohang/giaohang.component.html"),
            styles: [__webpack_require__(/*! ./giaohang.component.css */ "./src/app/components/giaonhan/giaohang/giaohang.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GiaohangComponent);
    return GiaohangComponent;
}());



/***/ }),

/***/ "./src/app/components/giaonhan/nhanhang/nhanhang.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/giaonhan/nhanhang/nhanhang.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/giaonhan/nhanhang/nhanhang.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/giaonhan/nhanhang/nhanhang.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  nhanhang works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/giaonhan/nhanhang/nhanhang.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/giaonhan/nhanhang/nhanhang.component.ts ***!
  \********************************************************************/
/*! exports provided: NhanhangComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhanhangComponent", function() { return NhanhangComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NhanhangComponent = /** @class */ (function () {
    function NhanhangComponent() {
    }
    NhanhangComponent.prototype.ngOnInit = function () {
    };
    NhanhangComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nhanhang',
            template: __webpack_require__(/*! ./nhanhang.component.html */ "./src/app/components/giaonhan/nhanhang/nhanhang.component.html"),
            styles: [__webpack_require__(/*! ./nhanhang.component.css */ "./src/app/components/giaonhan/nhanhang/nhanhang.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NhanhangComponent);
    return NhanhangComponent;
}());



/***/ }),

/***/ "./src/app/components/hoadon/chitiethd-edit/chitiethd-edit.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/hoadon/chitiethd-edit/chitiethd-edit.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/hoadon/chitiethd-edit/chitiethd-edit.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/hoadon/chitiethd-edit/chitiethd-edit.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-hover\">\n\t<thead>\n\t\t<tr>\n\t\t\t<th>Mã Hóa đơn</th>\n\t\t\t<th>Mã KH</th>\n\t\t\t<th>Tổng cộng</th>\n\t\t\t<th>Thanh toán</th>\n\t\t\t<th>Còn lại</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr>\n\t\t\t<td>{{ db.mahoadon }}</td>\n\t\t\t<td>{{ db.makh }}</td>\n\t\t\t<td>{{ db.tonghoadon }}</td>\n\t\t\t<td>{{ db.tratien }}</td>\n\t\t\t<td>{{ db.conlai }}</td>\n\t\t</tr>\n\t</tbody>\n</table>\n<table class=\"table table-bordered table-hover\">\n\t<thead>\n\t\t<tr>\n\t\t\t<th>STT</th>\n\t\t\t<th>Chọn</th>\n\t\t\t<th>Mã hàng</th>\n\t\t\t<th>sl</th>\n\t\t\t<th>dvt</th>\n\t\t\t<th>dg</th>\n\t\t\t<th>tt</th>\n\t\t</tr>\n\t</thead>\n\t<tr *ngFor=\"let item of db_chitiethd | filterChitiethd : db.mahoadon; let i = index\">\n\t\t\t\t\t\t\t<td>{{ i + 1 }}</td>\n\t\t\t\t\t\t\t<td> \n\t\t\t\t\t\t\t<select style=\"width: 70px\" class=\"form-control\" [(ngModel)]=\"\n\t\t\t\t\t\t\t\titem.index\">\n\t\t\t\t\t\t\t\t\t\t<option value=\"GA\">Gạo</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"TT\">Tấm</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"NH\">Nếp hảo</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"NT\">Nếp thơm</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"DA\">Đậu</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"BA\">Bao</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"BB\">Bắp</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"ME\">Mè</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t </td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<select style=\"width: 200px\" name=\"\" id=\"input\" class=\"form-control\" [(ngModel)]=\"item.mahang\">\n\t\t\t\t\t\t\t<option value=\"{{ item.mahang }}\" *ngFor=\"let item of db_dmhang | dmhang : item.index\">{{ item.tenhang }}</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<input style=\"width: 70px\" type=\"number\" step=\"0.01\" name=\"\" value=\"\" \n\t\t\t\t\t\t\t\tid=\"input\" class=\"form-control\"  [(ngModel)]=\"item.sl\"\n\t\t\t\t\t\t\t\t(ngModelChange)=\"valuechange(item)\">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<select style=\"width: 90px\" name=\"\" id=\"input\" class=\"form-control\" [(ngModel)]=\"item.DVT\">\n\t\t\t\t\t\t\t<option value=\"B\" >Bao</option>\n\t\t\t\t\t\t\t<option value=\"Kg\" >Kg</option>\n\t\t\t\t\t\t\t<option value=\"T\" >Túi</option>\n\t\t\t\t\t\t\t<option value=\"Thieng\" >Thiêng</option>\n\t\t\t\t\t\t\t<option value=\"C\" >Cục</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<input style=\"width: 70px\" type=\"number\" step=\"0.01\" name=\"\" \n\t\t\t\t\t\t\t\tid=\"input\" class=\"form-control\" [(ngModel)]=\"item.dg\"\n\t\t\t\t\t\t\t\t(ngModelChange)=\"valuechange(item)\">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<input style=\"width: 100px\" type=\"number\" step=\"0.01\" name=\"\" value=\"{{ item.sl * item.dg }}\" \n\t\t\t\t\t\t\t\t[(ngModel)]=\"item.tt\" disabled=\"true\" \n\t\t\t\t\t\t\t\tid=\"input\" class=\"form-control\" [required]=\"false\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</td>\t\t\t\t\t\t\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t<tr><td colspan=\"76\" class=\"font-weight-bold\"><label>Thành tiền: </label>{{ tongtt==0 ? '' : tongtt | number :'3.0-3' }}</td></tr>\n\t\t\t\t\t\t<tr><td colspan=\"7\" class=\"font-weight-bold\"><label>Tiền cũ: </label>{{ tiencu==0 ? '' : tiencu | number :'3.0-3' }}</td></tr>\n\t\t\t\t\t\t<tr><td colspan=\"7\" class=\"font-weight-bold\"><label>Tổng thành tiền: </label>{{ tongcong==0 ? '' : tongcong | number :'3.0-3' }}</td></tr>\n\t\t\t\t\t\t<tr><td colspan=\"7\" class=\"font-weight-bold\"><label>Thanh toán: </label>\n\t\t\t\t\t\t<input type=\"number\" step=\"0.01\" name=\"\"\n\t\t\t\t\t\t\t\tid=\"input\" class=\"form-control\" [(ngModel)]=\"thanhtoan\"\n\t\t\t\t\t\t\t\t(ngModelChange)=\"Valuethanhtoan()\">\n\t\t\t\t\t\t</td></tr>\n\t\t\t\t\t\t<tr><td colspan=\"7\" class=\"font-weight-bold\"><label>Còn lại: </label>\n\t\t\t\t\t\t<input type=\"number\" step=\"0.01\" name=\"\"  \n\t\t\t\t\t\t\t\tid=\"input\" class=\"form-control\" [(ngModel)]=\"conlai\"\n\t\t\t\t\t\t\t\tdisabled=\"true\">\n\t\t\t\t\t\t</td></tr>\n\t\t\t\t\t\t<tr><td colspan=\"7\"><button type=\"button\" class=\"btn btn-large btn-block btn-primary\" (click)=\"onClick(db_chitiethd)\">Update!!!</button>\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-large btn-block btn-success\" (click)=\"onCancel()\">Cancel</button>\n\t\t\t\t\t\t</td></tr>\n\t\t\t\t\t</tbody>\n\t<!-- <tbody>\n\t\t<tr *ngFor=\"let item of db_chitiethd | filterChitiethd : db.mahoadon\">\n\t\t\t<td>{{ item.mahoadon }}</td>\n\t\t\t<td>{{ item.mahang }}</td>\n\t\t\t<td>{{ item.sl }}</td>\n\t\t\t<td>{{ item.DVT }}</td>\n\t\t\t<td>{{ item.dg }}</td>\n\t\t\t<td>{{ item.tt }}</td>\n\t\t</tr>\n\t</tbody> -->\n</table>\n<!-- \n<label>Mã hóa đơn: {{ mahoadon }} </label>\n<input type=\"text\" name=\"\" size=\"20\" value=\"\" \n\t\t\t\t\t\t\t\t[(ngModel)]=\"mahoadon\" disabled=\"true\" \n\t\t\t\t\t\t\t\tid=\"input\" class=\"form-control\">\n<hr/>\n<select name=\"\" id=\"input\" class=\"form-control\" required=\"required\" [(ngModel)]=\"check_huyen\">\n\t<option value=\"{{ item.madm }}\" *ngFor=\"let item of db_dmdiachi\">{{ item.tendm }}</option>\n</select>\n<label>Tên Khách hàng:</label>\n<select name=\"\" id=\"input\" class=\"form-control\" [(ngModel)]=\"txt_makh\" (click)=\"checkHoadon()\">\n\t<option value=\"{{ item.makh }}\" *ngFor=\"let item of db_dmkh | tenkh : check_huyen\">{{ item.tenkh }}</option>\n</select>\n<div class=\"row\">\n\t<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n\t\t<div class=\"panel panel-danger\">\n\t\t\t<div class =\"panel-heading\">\n\t\t\t\t<h3 class=\"panel-title\" style=\"text-align: center\" [routerLink]=\"['/hoadon/']\">CHI TIẾT ĐẶT HÀNG</h3>\n\t\t\t</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<table class=\"table table-bordered table-hover\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr *ngFor=\"let item of db_hoadon | chitiethd : mahoadon\">\n\t\t\t\t\t\t\t<td  colspan=\"6\">{{ item.mahoadon }}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>STT</th>\n\t\t\t\t\t\t\t<th>Tên hàng</th>\n\t\t\t\t\t\t\t<th>Số lượng</th>\n\t\t\t\t\t\t\t<th>ĐVT</th>\n\t\t\t\t\t\t\t<th>Đơn giá</th>\n\t\t\t\t\t\t\t<th>Thành tiền</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\tDong 1\n\t\t\t\t\t\t<tr *ngFor=\"let item of db_chitiet ; let i = index\">\n\t\t\t\t\t\t\t<td>{{ i + 1 }}</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<select class=\"form-control\" [(ngModel)]=\"\n\t\t\t\t\t\t\t\titem.index\">\n\t\t\t\t\t\t\t\t\t\t<option value=\"GA\">Gạo</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"TT\">Tấm</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"NH\">Nếp hảo</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"NT\">Nếp thơm</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"DA\">Đậu</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"BA\">Bao</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"BB\">Bắp</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"ME\">Mè</option>\n\t\t\t\t\t\t\t\t\t</select>\t\n\t\t\t\t\t\t\t<select name=\"\" id=\"input\" class=\"form-control\" [(ngModel)]=\"item.mahang\">\n\t\t\t\t\t\t\t<option value=\"{{ item.mahang }}\" *ngFor=\"let item of db_dmhang | dmhang : item.index\">{{ item.tenhang }}</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<input type=\"number\" step=\"0.01\" name=\"\" value=\"\" \n\t\t\t\t\t\t\t\tid=\"input\" class=\"form-control\"  [(ngModel)]=\"item.sl\"\n\t\t\t\t\t\t\t\t(ngModelChange)=\"valuechange(item)\">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<select name=\"\" id=\"input\" class=\"form-control\" [(ngModel)]=\"item.DVT\">\n\t\t\t\t\t\t\t<option value=\"B\" >Bao</option>\n\t\t\t\t\t\t\t<option value=\"Kg\" >Kg</option>\n\t\t\t\t\t\t\t<option value=\"T\" >Túi</option>\n\t\t\t\t\t\t\t<option value=\"Thieng\" >Thiêng</option>\n\t\t\t\t\t\t\t<option value=\"C\" >Cục</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<input type=\"number\" step=\"0.01\" name=\"\" \n\t\t\t\t\t\t\t\tid=\"input\" class=\"form-control\" [(ngModel)]=\"item.dg\"\n\t\t\t\t\t\t\t\t(ngModelChange)=\"valuechange(item)\">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<input type=\"number\" step=\"0.01\" name=\"\" value=\"{{ item.sl * item.dg }}\" \n\t\t\t\t\t\t\t\t[(ngModel)]=\"item.tt\" disabled=\"true\" \n\t\t\t\t\t\t\t\tid=\"input\" class=\"form-control\" [required]=\"false\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</td>\t\t\t\t\t\t\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t<tr><td colspan=\"6\" class=\"font-weight-bold\"><label>Thành tiền: </label>{{ tongtt==0 ? '' : tongtt | number :'3.0-3' }}</td></tr>\n\t\t\t\t\t\t<tr><td colspan=\"6\" class=\"font-weight-bold\"><label>Tiền cũ: </label>{{ tiencu==0 ? '' : tiencu | number :'3.0-3' }}</td></tr>\n\t\t\t\t\t\t<tr><td colspan=\"6\" class=\"font-weight-bold\"><label>Tổng thành tiền: </label>{{ tongcong==0 ? '' : tongcong | number :'3.0-3' }}</td></tr>\n\t\t\t\t\t\t<tr><td colspan=\"6\" class=\"font-weight-bold\"><label>Thanh toán: </label>\n\t\t\t\t\t\t<input type=\"number\" step=\"0.01\" name=\"\" \n\t\t\t\t\t\t\t\tid=\"input\" class=\"form-control\" [(ngModel)]=\"thanhtoan\"\n\t\t\t\t\t\t\t\t(ngModelChange)=\"Valuethanhtoan()\">\n\t\t\t\t\t\t</td></tr>\n\t\t\t\t\t\t<tr><td colspan=\"6\" class=\"font-weight-bold\"><label>Còn lại: </label>\n\t\t\t\t\t\t<input type=\"number\" step=\"0.01\" name=\"\" \n\t\t\t\t\t\t\t\tid=\"input\" class=\"form-control\" [(ngModel)]=\"conlai\"\n\t\t\t\t\t\t\t\tdisabled=\"true\">\n\t\t\t\t\t\t</td></tr>\n\t\t\t\t\t\t<tr><td colspan=\"6\"><button type=\"button\" class=\"btn btn-large btn-block btn-primary\" (click)=\"onClick(db_chitiet)\">Click me!!!</button>\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-large btn-block btn-success\" (click)=\"onCancel()\">Cancel</button>\n\t\t\t\t\t\t</td></tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n  -->"

/***/ }),

/***/ "./src/app/components/hoadon/chitiethd-edit/chitiethd-edit.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/hoadon/chitiethd-edit/chitiethd-edit.component.ts ***!
  \******************************************************************************/
/*! exports provided: ChitiethdEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChitiethdEditComponent", function() { return ChitiethdEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dmhang_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/dmhang.service */ "./src/app/services/dmhang.service.ts");
/* harmony import */ var _services_dmkh_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/dmkh.service */ "./src/app/services/dmkh.service.ts");
/* harmony import */ var _services_dmdiachi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/dmdiachi.service */ "./src/app/services/dmdiachi.service.ts");
/* harmony import */ var _services_chitiet_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/chitiet.service */ "./src/app/services/chitiet.service.ts");
/* harmony import */ var _services_chitiethd_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/chitiethd.service */ "./src/app/services/chitiethd.service.ts");
/* harmony import */ var _services_hoadon_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/hoadon.service */ "./src/app/services/hoadon.service.ts");
/* harmony import */ var _models_chitiethd_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../models/chitiethd.model */ "./src/app/models/chitiethd.model.ts");
/* harmony import */ var _models_hoadon_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../models/hoadon.model */ "./src/app/models/hoadon.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ChitiethdEditComponent = /** @class */ (function () {
    function ChitiethdEditComponent(dmhangservice, dmkhservice, dmdiachiservice, chitietservice, chitiethdservice, hoadonservice, routerService, activeRouterService, datePipe) {
        this.dmhangservice = dmhangservice;
        this.dmkhservice = dmkhservice;
        this.dmdiachiservice = dmdiachiservice;
        this.chitietservice = chitietservice;
        this.chitiethdservice = chitiethdservice;
        this.hoadonservice = hoadonservice;
        this.routerService = routerService;
        this.activeRouterService = activeRouterService;
        this.datePipe = datePipe;
        this.db_dmhang = [];
        this.db_dmkh = [];
        this.db_dmdiachi = [];
        this.db_chitiet = [];
        this.db_chitiethd = [];
        this.db_hoadon = [];
        this.today = Date.now();
        this.fixedTimezone = this.today;
        this.tongtt = 0;
        this.dem = 1;
        this.tiencu = 0;
        this.tongcong = 0;
        this.demhd = -1;
    }
    ChitiethdEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.dmhangservice.getAlldmhang().subscribe(function (data) {
            _this.db_dmhang = data;
        });
        this.subscription = this.dmkhservice.getAlldmkh().subscribe(function (data) {
            _this.db_dmkh = data;
        });
        this.subscription = this.dmdiachiservice.getAlldmdiachi().subscribe(function (data) {
            _this.db_dmdiachi = data;
        });
        this.subscription = this.hoadonservice.getAllhoadon().subscribe(function (data) {
            _this.db_hoadon = data;
        });
        //var date = new Date();
        //this.mahoadon = this.datePipe.transform(date,"ddMMyyyy");
        this.subscription = this.chitietservice.getAllchitiet().subscribe(function (data) {
            _this.db_chitiet = data;
        });
        this.subscription = this.chitiethdservice.getAllchitiethd().subscribe(function (data) {
            _this.db_chitiethd = data;
        });
        this.db = new _models_hoadon_model__WEBPACK_IMPORTED_MODULE_8__["hoadon"]();
        this.loadData();
        this.tongtt = this.db.tonghoadon;
        this.thanhtoan = this.db.tratien;
        this.conlai = this.db.conlai;
    };
    ChitiethdEditComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    ChitiethdEditComponent.prototype.loadData = function () {
        var _this = this;
        this.subscriptionParams = this.activeRouterService.params.subscribe(function (data) {
            var id = data['id'];
            _this.subscription = _this.hoadonservice.getOnehoadon(id).subscribe(function (hoadon) {
                _this.db = hoadon;
            });
        });
    };
    ChitiethdEditComponent.prototype.valuechange = function (chitiet) {
        this.tongcong = 0;
        if (chitiet.sl != null && chitiet.dg != null) {
            chitiet.tt = chitiet.sl * chitiet.dg;
        }
        else {
            chitiet.tt = null;
        }
        this.tongtt = 0;
        for (var i = this.db_chitiethd.length - 1; i >= 0; i--) {
            if (this.db_chitiethd[i].mahoadon == this.db.mahoadon) {
                this.tongtt = this.tongtt + (this.db_chitiethd[i].tt * 1000);
            }
        }
        this.tiencu = 0;
        for (var i = this.db_hoadon.length - 1; i >= 0; i--) {
            if (this.db_hoadon[i].makh == this.db.makh && this.db_hoadon[i].id < this.db.id) {
                this.tiencu = this.tiencu + this.db_hoadon[i].conlai;
            }
        }
        if (this.tongtt > 0) {
            this.tongcong = this.tongtt + this.tiencu;
        }
        else {
            this.tongcong = 0;
        }
        this.thanhtoan = this.db.tratien;
        this.conlai = this.tongtt + this.tiencu - this.thanhtoan;
    };
    ChitiethdEditComponent.prototype.Valuethanhtoan = function () {
        this.conlai = this.tongtt - this.thanhtoan;
        this.tongcong = this.tongtt - this.thanhtoan + this.tiencu;
    };
    ChitiethdEditComponent.prototype.checkMahoadon = function () {
        this.mahoadon = this.mahoadon.slice(0, 8);
        this.dem = 1;
        for (var i = this.db_hoadon.length - 1; i >= 0; i--) {
            if (this.db_hoadon[i].mahoadon.slice(0, 8) == this.mahoadon.slice(0, 8)) {
                this.dem++;
            }
        }
        if (this.dem < 10) {
            this.mahoadon = this.mahoadon.slice(0, 8) + '00' + this.dem;
        }
        else if (this.dem < 100) {
            this.mahoadon = this.mahoadon.slice(0, 8) + '0' + this.dem;
        }
        else {
            this.mahoadon = this.mahoadon.slice(0, 8) + this.dem;
        }
    };
    ChitiethdEditComponent.prototype.checkHoadon = function () {
        this.tiencu = 0;
        this.checkMahoadon();
        for (var i = this.db_hoadon.length - 1; i >= 0; i--) {
            if (this.db_hoadon[i].kt == false && this.db_hoadon[i].makh == this.txt_makh) {
                this.tiencu = this.tiencu + this.db_hoadon[i].conlai;
            }
        }
    };
    ChitiethdEditComponent.prototype.onEdit_chitiethd = function (mahoadon, mahang, sl, dvt, dg, tt) {
        var _this = this;
        this.new_chitiethd = new _models_chitiethd_model__WEBPACK_IMPORTED_MODULE_7__["chitiethd"]();
        this.new_chitiethd.mahoadon = mahoadon;
        this.new_chitiethd.mahang = mahang;
        this.new_chitiethd.sl = sl;
        this.new_chitiethd.DVT = dvt;
        this.new_chitiethd.dg = dg;
        this.new_chitiethd.tt = tt;
        this.subscription = this.chitiethdservice.add_chitiethd(this.new_chitiethd).subscribe(function (data) {
            if (data) {
                _this.routerService.navigate(['hoadon']);
            }
        });
    };
    ChitiethdEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chitiethd-edit',
            template: __webpack_require__(/*! ./chitiethd-edit.component.html */ "./src/app/components/hoadon/chitiethd-edit/chitiethd-edit.component.html"),
            styles: [__webpack_require__(/*! ./chitiethd-edit.component.css */ "./src/app/components/hoadon/chitiethd-edit/chitiethd-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_services_dmhang_service__WEBPACK_IMPORTED_MODULE_1__["DmhangService"],
            _services_dmkh_service__WEBPACK_IMPORTED_MODULE_2__["DmkhService"],
            _services_dmdiachi_service__WEBPACK_IMPORTED_MODULE_3__["DmdiachiService"],
            _services_chitiet_service__WEBPACK_IMPORTED_MODULE_4__["ChitietService"],
            _services_chitiethd_service__WEBPACK_IMPORTED_MODULE_5__["ChitiethdService"],
            _services_hoadon_service__WEBPACK_IMPORTED_MODULE_6__["HoadonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]])
    ], ChitiethdEditComponent);
    return ChitiethdEditComponent;
}());



/***/ }),

/***/ "./src/app/components/hoadon/chitiethd/chitiethd.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/hoadon/chitiethd/chitiethd.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/hoadon/chitiethd/chitiethd.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/hoadon/chitiethd/chitiethd.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<label>Mã hóa đơn: {{ mahoadon }} </label>\n<input type=\"text\" name=\"\" size=\"20\" value=\"\" \n\t\t\t\t\t\t\t\t[(ngModel)]=\"txtTimKH\" id=\"input\" class=\"form-control\">\n<hr/>\n<select name=\"\" id=\"input\" class=\"form-control\" required=\"required\" [(ngModel)]=\"check_huyen\" \n(click)=\"checkHoadon()\">\n\t<option value=\"{{ item.madm }}\" *ngFor=\"let item of db_dmdiachi\">{{ item.tendm }}</option>\n</select>\n<label>Tên Khách hàng:</label>\n<select name=\"\" id=\"input\" class=\"form-control\" [(ngModel)]=\"txt_makh\" (click)=\"checkHoadon()\">\n\t<option value=\"{{ item.makh }}\" *ngFor=\"let item of db_dmkh | tenkh : check_huyen : txtTimKH\">{{ item.tenkh }}</option>\n</select>\n<div class=\"row\">\n\t<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n\t\t<div class=\"panel panel-danger\">\n\t\t\t<div class =\"panel-heading\">\n\t\t\t\t<h3 class=\"panel-title\" style=\"text-align: center\" [routerLink]=\"['/hoadon/']\">CHI TIẾT ĐẶT HÀNG</h3>\n\t\t\t</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<table class=\"table table-bordered table-hover\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<!-- <tr *ngFor=\"let item of db_hoadon | chitiethd : mahoadon\">\n\t\t\t\t\t\t\t<td  colspan=\"6\">{{ item.mahoadon }}</td>\n\t\t\t\t\t\t</tr> -->\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>STT</th>\n\t\t\t\t\t\t\t<th>Tên hàng</th>\n\t\t\t\t\t\t\t<th>Số lượng</th>\n\t\t\t\t\t\t\t<th>ĐVT</th>\n\t\t\t\t\t\t\t<th>Đơn giá</th>\n\t\t\t\t\t\t\t<th>Thành tiền</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<!-- Dong 1 -->\n\t\t\t\t\t\t<tr *ngFor=\"let item of db_chitiet ; let i = index\">\n\t\t\t\t\t\t\t<td>{{ i + 1 }}</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<select class=\"form-control\" [(ngModel)]=\"\n\t\t\t\t\t\t\t\titem.index\">\n\t\t\t\t\t\t\t\t\t\t<option value=\"GA\">Gạo</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"TT\">Tấm</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"NH\">Nếp hảo</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"NT\">Nếp thơm</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"DA\">Đậu</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"BA\">Bao</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"BB\">Bắp</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"ME\">Mè</option>\n\t\t\t\t\t\t\t\t\t</select>\t\n\t\t\t\t\t\t\t<select name=\"\" id=\"input\" class=\"form-control\" [(ngModel)]=\"item.mahang\">\n\t\t\t\t\t\t\t<option value=\"{{ item.mahang }}\" *ngFor=\"let item of db_dmhang | dmhang : item.index\">{{ item.tenhang }}</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<input type=\"number\" step=\"0.01\" name=\"\" value=\"\" \n\t\t\t\t\t\t\t\tid=\"input\" class=\"form-control\"  [(ngModel)]=\"item.sl\"\n\t\t\t\t\t\t\t\t(ngModelChange)=\"valuechange(item)\">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<select name=\"\" id=\"input\" class=\"form-control\" [(ngModel)]=\"item.DVT\">\n\t\t\t\t\t\t\t<option value=\"B\" >Bao</option>\n\t\t\t\t\t\t\t<option value=\"Kg\" >Kg</option>\n\t\t\t\t\t\t\t<option value=\"T\" >Túi</option>\n\t\t\t\t\t\t\t<option value=\"Thieng\" >Thiêng</option>\n\t\t\t\t\t\t\t<option value=\"C\" >Cục</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<input type=\"number\" step=\"0.01\" name=\"\" \n\t\t\t\t\t\t\t\tid=\"input\" class=\"form-control\" [(ngModel)]=\"item.dg\"\n\t\t\t\t\t\t\t\t(ngModelChange)=\"valuechange(item)\">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<input type=\"number\" step=\"0.01\" name=\"\" value=\"{{ item.sl * item.dg }}\" \n\t\t\t\t\t\t\t\t[(ngModel)]=\"item.tt\" disabled=\"true\" \n\t\t\t\t\t\t\t\tid=\"input\" class=\"form-control\" [required]=\"false\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</td>\t\t\t\t\t\t\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t<tr><td colspan=\"6\" class=\"font-weight-bold\"><label>Thành tiền: </label>{{ tongtt==0 ? '' : tongtt | number :'3.0-3' }}</td></tr>\n\t\t\t\t\t\t<tr><td colspan=\"6\" class=\"font-weight-bold\"><label>Tiền cũ: </label>{{ tiencu==0 ? '' : tiencu | number :'3.0-3' }}</td></tr>\n\t\t\t\t\t\t<tr><td colspan=\"6\" class=\"font-weight-bold\"><label>Tổng thành tiền: </label>{{ tongcong==0 ? '' : tongcong | number :'3.0-3' }}</td></tr>\n\t\t\t\t\t\t<tr><td colspan=\"6\" class=\"font-weight-bold\">\n\t\t\t\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" [(ngModel)]=\"checkTienmat\" (ngModelChange)=\"onCheckTienmat()\">\n\t\t\t\t\t\t\t\t\tTiền mặt\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\"  [(ngModel)]=\"checkThieu\" (ngModelChange)=\"onCheckThieu()\">\n\t\t\t\t\t\t\t\t\tThiếu\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<label>Thanh toán: </label>\n\t\t\t\t\t\t<input type=\"number\" step=\"0.01\" name=\"\" \n\t\t\t\t\t\t\t\tid=\"input\" class=\"form-control\" [(ngModel)]=\"thanhtoan\"\n\t\t\t\t\t\t\t\t(ngModelChange)=\"Valuethanhtoan()\">\n\t\t\t\t\t\t</td></tr>\n\t\t\t\t\t\t<tr><td colspan=\"6\" class=\"font-weight-bold\"><label>Còn lại: </label>\n\t\t\t\t\t\t<input type=\"number\" step=\"0.01\" name=\"\" \n\t\t\t\t\t\t\t\tid=\"input\" class=\"form-control\" [(ngModel)]=\"conlai\"\n\t\t\t\t\t\t\t\tdisabled=\"true\">\n\t\t\t\t\t\t</td></tr>\n\t\t\t\t\t\t<tr><td colspan=\"6\"><button type=\"button\" class=\"btn btn-large btn-block btn-primary\" (click)=\"onClick(db_chitiet)\">Click me!!!</button>\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-large btn-block btn-success\" (click)=\"onCancel()\">Cancel</button>\n\t\t\t\t\t\t</td></tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/hoadon/chitiethd/chitiethd.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/hoadon/chitiethd/chitiethd.component.ts ***!
  \********************************************************************/
/*! exports provided: ChitiethdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChitiethdComponent", function() { return ChitiethdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dmhang_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/dmhang.service */ "./src/app/services/dmhang.service.ts");
/* harmony import */ var _services_dmkh_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/dmkh.service */ "./src/app/services/dmkh.service.ts");
/* harmony import */ var _services_dmdiachi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/dmdiachi.service */ "./src/app/services/dmdiachi.service.ts");
/* harmony import */ var _services_chitiet_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/chitiet.service */ "./src/app/services/chitiet.service.ts");
/* harmony import */ var _services_chitiethd_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/chitiethd.service */ "./src/app/services/chitiethd.service.ts");
/* harmony import */ var _services_hoadon_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/hoadon.service */ "./src/app/services/hoadon.service.ts");
/* harmony import */ var _models_chitiethd_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../models/chitiethd.model */ "./src/app/models/chitiethd.model.ts");
/* harmony import */ var _models_hoadon_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../models/hoadon.model */ "./src/app/models/hoadon.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ChitiethdComponent = /** @class */ (function () {
    function ChitiethdComponent(dmhangservice, dmkhservice, dmdiachiservice, chitietservice, chitiethdservice, hoadonservice, routerService, activeRouterService, datePipe) {
        this.dmhangservice = dmhangservice;
        this.dmkhservice = dmkhservice;
        this.dmdiachiservice = dmdiachiservice;
        this.chitietservice = chitietservice;
        this.chitiethdservice = chitiethdservice;
        this.hoadonservice = hoadonservice;
        this.routerService = routerService;
        this.activeRouterService = activeRouterService;
        this.datePipe = datePipe;
        this.db_dmhang = [];
        this.db_dmkh = [];
        this.db_dmdiachi = [];
        this.db_chitiet = [];
        this.db_hoadon = [];
        this.checkTienmat = false;
        this.checkThieu = false;
        this.today = Date.now();
        this.fixedTimezone = this.today;
        this.tongtt = 0;
        this.dem = 1;
        this.tiencu = 0;
        this.tongcong = 0;
    }
    ChitiethdComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.dmhangservice.getAlldmhang().subscribe(function (data) {
            _this.db_dmhang = data;
        });
        this.subscription = this.dmkhservice.getAlldmkh().subscribe(function (data) {
            _this.db_dmkh = data;
        });
        this.subscription = this.dmdiachiservice.getAlldmdiachi().subscribe(function (data) {
            _this.db_dmdiachi = data;
        });
        this.subscription = this.chitietservice.getAllchitiet().subscribe(function (data) {
            _this.db_chitiet = data;
        });
        this.subscription = this.hoadonservice.getAllhoadon().subscribe(function (data) {
            _this.db_hoadon = data;
        });
        var date = new Date();
        this.mahoadon = this.datePipe.transform(date, "ddMMyyyy");
    };
    ChitiethdComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    ChitiethdComponent.prototype.valuechange = function (chitiet) {
        this.tongcong = 0;
        if (chitiet.sl != null && chitiet.dg != null) {
            chitiet.tt = chitiet.sl * chitiet.dg;
        }
        else {
            chitiet.tt = null;
        }
        this.tongtt = 0;
        for (var i = this.db_chitiet.length - 1; i >= 0; i--) {
            this.tongtt = this.tongtt + (this.db_chitiet[i].tt * 1000);
        }
        if (this.tongtt > 0) {
            this.tongcong = this.tongtt + this.tiencu;
        }
        else {
            this.tongcong = 0;
        }
    };
    ChitiethdComponent.prototype.ValueCheck = function () {
        //this.thanhtoan = this.thanhtoan * 1000;
        if (this.checkTienmat == true) {
            this.thanhtoan = this.tongtt;
            this.conlai = 0;
            this.tongcong = this.tongtt - this.thanhtoan + this.tiencu;
        }
        else if (this.checkThieu == true) {
            this.conlai = this.tongtt;
            this.thanhtoan = 0;
            this.tongcong = this.tongtt - this.thanhtoan + this.tiencu;
        }
    };
    ChitiethdComponent.prototype.Valuethanhtoan = function () {
        this.conlai = this.tongtt - this.thanhtoan * 1000;
        this.tongcong = this.tongtt - this.thanhtoan * 1000 + this.tiencu;
    };
    ChitiethdComponent.prototype.checkMahoadon = function () {
        this.mahoadon = this.mahoadon.slice(0, 8);
        this.dem = 1;
        for (var i = this.db_hoadon.length - 1; i >= 0; i--) {
            if (this.db_hoadon[i].mahoadon.slice(0, 8) == this.mahoadon.slice(0, 8)) {
                this.dem++;
            }
        }
        if (this.dem < 10) {
            this.mahoadon = this.mahoadon.slice(0, 8) + '00' + this.dem;
        }
        else if (this.dem < 100) {
            this.mahoadon = this.mahoadon.slice(0, 8) + '0' + this.dem;
        }
        else {
            this.mahoadon = this.mahoadon.slice(0, 8) + this.dem;
        }
    };
    ChitiethdComponent.prototype.checkHoadon = function () {
        this.Update_Form();
        this.tiencu = 0;
        this.checkMahoadon();
        for (var i = this.db_hoadon.length - 1; i >= 0; i--) {
            if (this.db_hoadon[i].kt == false && this.db_hoadon[i].makh == this.txt_makh) {
                this.tiencu = this.tiencu + this.db_hoadon[i].conlai;
            }
        }
    };
    ChitiethdComponent.prototype.onClick = function (csdl) {
        if (this.checkTienmat == false && this.checkThieu == false) {
            this.thanhtoan = this.thanhtoan * 1000;
        }
        this.Add_hoadon(this.mahoadon, this.txt_makh, this.tongtt, this.thanhtoan, this.conlai);
        for (var i = this.db_chitiet.length - 1; i >= 0; i--) {
            if (this.db_chitiet[i].tt != null) {
                this.onAdd_chitiethd(this.mahoadon, this.db_chitiet[i].mahang, this.db_chitiet[i].sl, this.db_chitiet[i].DVT, this.db_chitiet[i].dg, this.db_chitiet[i].tt);
            }
        }
        this.Clear_Form();
        this.Update_Form();
    };
    ChitiethdComponent.prototype.onAdd_chitiethd = function (mahoadon, mahang, sl, dvt, dg, tt) {
        var _this = this;
        this.new_chitiethd = new _models_chitiethd_model__WEBPACK_IMPORTED_MODULE_7__["chitiethd"]();
        this.new_chitiethd.mahoadon = mahoadon;
        this.new_chitiethd.mahang = mahang;
        this.new_chitiethd.sl = sl;
        this.new_chitiethd.DVT = dvt;
        this.new_chitiethd.dg = dg;
        this.new_chitiethd.tt = tt;
        this.subscription = this.chitiethdservice.add_chitiethd(this.new_chitiethd).subscribe(function (data) {
            if (data) {
                _this.routerService.navigate(['hoadon']);
            }
        });
    };
    ChitiethdComponent.prototype.Add_hoadon = function (mahoadon, makh, tonghoadon, tratien, conlai) {
        var _this = this;
        this.new_hoadon = new _models_hoadon_model__WEBPACK_IMPORTED_MODULE_8__["hoadon"]();
        this.new_hoadon.mahoadon = mahoadon;
        this.new_hoadon.makh = makh;
        this.new_hoadon.tonghoadon = tonghoadon;
        this.new_hoadon.tratien = tratien;
        this.new_hoadon.conlai = conlai;
        this.new_hoadon.tinhtrang = false;
        if (tonghoadon == tratien) {
            this.new_hoadon.kt = true;
        }
        else {
            this.new_hoadon.kt = false;
        }
        this.subscription = this.hoadonservice.add_hoadon(this.new_hoadon).subscribe(function (data) {
            if (data) {
                _this.routerService.navigate(['hoadon']);
            }
        });
    };
    ChitiethdComponent.prototype.Clear_Form = function () {
        for (var i = this.db_chitiet.length - 1; i >= 0; i--) {
            this.db_chitiet[i].hoadon = null;
            this.db_chitiet[i].mahang = null;
            this.db_chitiet[i].sl = null;
            this.db_chitiet[i].DVT = null;
            this.db_chitiet[i].dg = null;
            this.db_chitiet[i].tt = null;
        }
        this.tongtt = 0;
        this.tiencu = 0;
        this.txt_makh = '';
        this.conlai = 0;
        this.thanhtoan = 0;
        this.tongcong = 0;
        this.Update_Form();
        this.checkMahoadon();
    };
    ChitiethdComponent.prototype.onCancel = function () {
        this.Clear_Form();
    };
    ChitiethdComponent.prototype.Update_Form = function () {
        var _this = this;
        this.subscription = this.dmhangservice.getAlldmhang().subscribe(function (data) {
            _this.db_dmhang = data;
        });
        this.subscription = this.dmkhservice.getAlldmkh().subscribe(function (data) {
            _this.db_dmkh = data;
        });
        this.subscription = this.chitietservice.getAllchitiet().subscribe(function (data) {
            _this.db_chitiet = data;
        });
        this.subscription = this.hoadonservice.getAllhoadon().subscribe(function (data) {
            _this.db_hoadon = data;
        });
    };
    ChitiethdComponent.prototype.onCheckThieu = function () {
        if (this.checkThieu == true) {
            this.checkTienmat = false;
        }
        else {
            this.checkTienmat = false;
            this.checkThieu = false;
        }
        this.ValueCheck();
    };
    ChitiethdComponent.prototype.onCheckTienmat = function () {
        if (this.checkTienmat == true) {
            this.checkThieu = false;
        }
        else {
            this.checkTienmat = false;
            this.checkThieu = false;
        }
        this.ValueCheck();
    };
    ChitiethdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chitiethd',
            template: __webpack_require__(/*! ./chitiethd.component.html */ "./src/app/components/hoadon/chitiethd/chitiethd.component.html"),
            styles: [__webpack_require__(/*! ./chitiethd.component.css */ "./src/app/components/hoadon/chitiethd/chitiethd.component.css")]
        }),
        __metadata("design:paramtypes", [_services_dmhang_service__WEBPACK_IMPORTED_MODULE_1__["DmhangService"],
            _services_dmkh_service__WEBPACK_IMPORTED_MODULE_2__["DmkhService"],
            _services_dmdiachi_service__WEBPACK_IMPORTED_MODULE_3__["DmdiachiService"],
            _services_chitiet_service__WEBPACK_IMPORTED_MODULE_4__["ChitietService"],
            _services_chitiethd_service__WEBPACK_IMPORTED_MODULE_5__["ChitiethdService"],
            _services_hoadon_service__WEBPACK_IMPORTED_MODULE_6__["HoadonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]])
    ], ChitiethdComponent);
    return ChitiethdComponent;
}());



/***/ }),

/***/ "./src/app/components/hoadon/hoadon-edit/hoadon-edit.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/hoadon/hoadon-edit/hoadon-edit.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/hoadon/hoadon-edit/hoadon-edit.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/hoadon/hoadon-edit/hoadon-edit.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form action=\"\" method=\"POST\" role=\"form\">\n\t<legend>CẬP NHẬT LẠI HÓA ĐƠN</legend>\n\n\t<div class=\"form-group\">\n\t\t<label for=\"\">Mã Hóa đơn</label>\n\t\t<input type=\"text\" class=\"form-control\" \n\t\t[(ngModel)]=\"db.mahoadon\" \n\t\t[ngModelOptions]=\"{standalone: true}\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label for=\"\">Tổng tiền</label>\n\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"db.tonghoadon\" \n\t\t[ngModelOptions]=\"{standalone: true}\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label for=\"\">Thanh toán</label>\n\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"db.tratien\" \n\t\t[ngModelOptions]=\"{standalone: true}\" (ngModelChange)=\"Valuethanhtoan()\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label for=\"\">Còn lại</label>\n\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"db.conlai\" \n\t\t[ngModelOptions]=\"{standalone: true}\">\n\t</div>\n\n\t<button type=\"submit\" class=\"btn btn-primary\" (click)=\"onEdit_hoadon()\">Lưu</button>\n</form>"

/***/ }),

/***/ "./src/app/components/hoadon/hoadon-edit/hoadon-edit.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/hoadon/hoadon-edit/hoadon-edit.component.ts ***!
  \************************************************************************/
/*! exports provided: HoadonEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoadonEditComponent", function() { return HoadonEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_hoadon_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/hoadon.service */ "./src/app/services/hoadon.service.ts");
/* harmony import */ var _models_hoadon_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../models/hoadon.model */ "./src/app/models/hoadon.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HoadonEditComponent = /** @class */ (function () {
    function HoadonEditComponent(dmhangservice, routerService, activeRouterService) {
        this.dmhangservice = dmhangservice;
        this.routerService = routerService;
        this.activeRouterService = activeRouterService;
    }
    HoadonEditComponent.prototype.ngOnInit = function () {
        this.db = new _models_hoadon_model__WEBPACK_IMPORTED_MODULE_2__["hoadon"]();
        this.loadData();
    };
    HoadonEditComponent.prototype.loadData = function () {
        var _this = this;
        this.subscriptionParams = this.activeRouterService.params.subscribe(function (data) {
            var id = data['id'];
            _this.subscription = _this.dmhangservice.getOnehoadon(id).subscribe(function (hoadon) {
                _this.db = hoadon;
            });
        });
    };
    HoadonEditComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        if (this.subscriptionParams) {
            this.subscriptionParams.unsubscribe();
        }
    };
    HoadonEditComponent.prototype.onEdit_hoadon = function () {
        var _this = this;
        this.subscription =
            this.dmhangservice.uppdate_hoadon(this.db).subscribe(function (data) {
                _this.routerService.navigateByUrl('hoadon');
                //console.log(data);
            });
    };
    HoadonEditComponent.prototype.Valuethanhtoan = function () {
        this.db.conlai = this.db.tonghoadon - this.db.tratien;
    };
    HoadonEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hoadon-edit',
            template: __webpack_require__(/*! ./hoadon-edit.component.html */ "./src/app/components/hoadon/hoadon-edit/hoadon-edit.component.html"),
            styles: [__webpack_require__(/*! ./hoadon-edit.component.css */ "./src/app/components/hoadon/hoadon-edit/hoadon-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_services_hoadon_service__WEBPACK_IMPORTED_MODULE_1__["HoadonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], HoadonEditComponent);
    return HoadonEditComponent;
}());



/***/ }),

/***/ "./src/app/components/hoadon/hoadon.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/hoadon/hoadon.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/hoadon/hoadon.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/hoadon/hoadon.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/hoadon/hoadon.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/hoadon/hoadon.component.ts ***!
  \*******************************************************/
/*! exports provided: HoadonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoadonComponent", function() { return HoadonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HoadonComponent = /** @class */ (function () {
    function HoadonComponent() {
    }
    HoadonComponent.prototype.ngOnInit = function () {
    };
    HoadonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hoadon',
            template: __webpack_require__(/*! ./hoadon.component.html */ "./src/app/components/hoadon/hoadon.component.html"),
            styles: [__webpack_require__(/*! ./hoadon.component.css */ "./src/app/components/hoadon/hoadon.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HoadonComponent);
    return HoadonComponent;
}());



/***/ }),

/***/ "./src/app/components/hoadon/hoadons/hoadons.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/hoadon/hoadons/hoadons.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/hoadon/hoadons/hoadons.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/hoadon/hoadons/hoadons.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"show_chua\">\n\t<input type=\"text\" name=\"\" id=\"input\" class=\"form-control\" [(ngModel)]=\"mahoadon\">\n<select name=\"\" id=\"input\" class=\"form-control\" required=\"required\" [(ngModel)]=\"makhs\">\n\t<option value=\"{{ item.makh }}\" *ngFor=\"let item of db_dmkh\">{{ item.tenkh }}</option>\n</select>\t\n</div>\n\n \n<div class=\"row\">\n\t<div *ngIf=\"show_chua\" class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n\t\t<div class=\"panel panel-danger\">\n\t\t\t<div class=\"panel-heading\">\n\t\t\t\t<h3 class=\"panel-title\" style=\"text-align: center\" [routerLink]=\"['/hoadon/add']\">HÓA ĐƠN CHƯA GIAO</h3>\n\t\t\t</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<table class=\"table table-bordered table-hover\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>STT</th>\n\t\t\t\t\t\t\t<th>Mã hóa đơn</th>\n\t\t\t\t\t\t\t<th (click)=\"onSort('MAKH')\">Tên khách hàng</th>\n\t\t\t\t\t\t\t<th>Tổng hóa đơn</th>\n\t\t\t\t\t\t\t<th (click)=\"onSort('THANHTOAN')\">Thanh toán</th>\n\t\t\t\t\t\t\t<th>Còn lại</th>\n\t\t\t\t\t\t\t<th>Tình trạng</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr  *ngFor=\"let item of db_hoadon | chitiethd : mahoadon : kttt : makhs | sorthoadon : sortBy : sortValue; let i = index\">\n\t\t\t\t\t\t\t<td>{{ i + 1 }}</td>\n\t\t\t\t\t\t\t<td (click)=\"list_chitiethd(item.mahoadon,item.makh,item.id,item.tratien,item.conlai,item.tonghoadon,false,false,true)\">{{ item.mahoadon }}</td>\n\t\t\t\t\t\t<td *ngFor=\"let tam of db_dmkh | tenkh : item.makh\">{{ tam.tenkh }}</td>\n\t\t\t\t\t\t\t<td >{{ item.tonghoadon }}</td>\n\t\t\t\t\t\t\t<td [routerLink]=\"['/hoadon', item.id, 'edit']\">{{ item.tratien }}</td>\n\t\t\t\t\t\t\t<td>{{ item.conlai }}</td>\n\t\t\t\t\t\t\t<td >\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-large btn-block btn-success\"\n\t\t\t(click)=\"onEdit_hoadon(item.id)\"\n\t\t>{{ item.tinhtrang ? 'Giao' : 'Chưa' }}</button>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!-- Dong nay la chinh giua -->\n<div *ngIf=\"show\" class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\" style=\"width: 470px\">\n\t\t<div  class=\"panel panel-primary\">\n\t\t\t<div style=\"text-align: right;\">\n\t\t\t\t<label><h4>{{ ngay }}</h4></label>\n\t\t\t</div>\n\t\t\t<div style=\"text-align: right;\">\n\t\t\t\t<label><h3>{{ tenkhs }}</h3></label>\n\t\t\t</div>\n\t\t\t<!-- <div class=\"panel-heading\">\n\t\t\t\t<h3 class=\"panel-title\" style=\"text-align: center\" (click)=\"onPrint()\">Chi tiết hóa đơn số: {{ mahd }} - ngày: {{ ngay }}</h3>\n\t\t\t</div> -->\n\t\t\t<div class=\"panel-body\" align=\"center\">\n\t\t\t\t\n\t\t\t\t<tr align=\"center\"><td style=\"mar\">\n\t\t\t\t\t\t\t<table   (click)=\"list_back(true,true,false)\" class=\"table table-bordered table-hover\" style=\"size: 14px\">\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr style=\"text-align: center\">\n\t\t\t\t\t\t\t\t\t\t\t<th>STT</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Tên hàng</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>SL</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>DVT</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>ĐG</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>TT</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let item of db_chitiethd | showChitiethd : mahd; let myId = index\">\n\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: center\">{{ myId + 1 }}</td>\n\t\t\t\t<td *ngFor=\"let tam of db_dmhang | tenhang : item.mahang\">{{ tam.tenhang }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: center\">{{ item.sl }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: center\">{{ item.DVT }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: center\">{{ item.dg }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: right;\">{{ item.tt }}</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"2\" style=\"font: bold; text-align: right;\">Tổng toa:</td>\n\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"4\" style=\"font: bold; text-align: right;\"><h5> {{ tongcong ==0 ? '' : tongcong | number :'3.0-3'}}</h5> </td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr *ngIf=\"test_conlai\">\n\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"2\" style=\"font: bold; text-align: right;\">Tiền cũ:</td>\n\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"4\" style=\"font: bold;color: green; text-align: right;\"><h5> \n\t\t\t\t\t\t\t\t\t\t\t\t{{ test_conlai ==0 ? '' : test_conlai | number :'3.0-3'}}\n\t\t\t\t\t\t\t\t\t\t\t<!-- {{ test_conlai ==0 ? '' : test_conlai + thanhtoan - tongtt  | number :'3.0-3'}} --></h5> </td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr *ngIf=\"test_conlai\">\n\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"2\" style=\"font: bold; text-align: right;\">Tổng cộng:</td>\n\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"4\" style=\"font: bold;color: red; text-align: right;\"><b><h5>\n\t\t\t\t\t\t\t\t\t\t\t\t{{ test_tonghoadon ==0 ? '' : tongcong + test_conlai | number :'3.0-3'}}\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- {{ test_tonghoadon ==0 ? '' : test_tonghoadon - test_tratien + thanhtoan | number :'3.0-3'}} --></h5></b></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t\t\t<tr *ngIf=\"test_tratien\">\n\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"2\" style=\"font: bold; text-align: right;\">Thanh toán:</td>\n\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"4\" style=\"font: bold;color: blue; text-align: right;\"><h5>{{ test_tratien==0 ? '' : test_tratien | number :'3.0-3'}}</h5></td></tr>\n\t\t\t\t\t\t\t\t\t\t<tr *ngIf=\"test_tratien\">\n\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"2\" style=\"font: bold; text-align: right;\">Còn lại:</td>\n\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"4\" style=\"font: bold; text-align: right;\"><h5>{{ test_tratien==0 ? '' : tongcong + test_conlai - test_tratien | number :'3.0-3' }}</h5></td></tr>\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</td></tr>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n<!-- Dong nay la ben phai -->\n\t<div *ngIf=\"show_giao\" class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n\t\t<div class=\"panel panel-success\">\n\t\t\t<div class=\"panel-heading\">\n\t\t\t\t<h3 class=\"panel-title\" style=\"text-align: center\" [routerLink]=\"['/hoadon/add']\">HÓA ĐƠN ĐÃ GIAO</h3>\n\t\t\t</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<table class=\"table table-bordered table-hover\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>STT</th>\n\t\t\t\t\t\t\t<th (click)=\"onSort('MAHOADON')\">Mã hóa đơn</th>\n\t\t\t\t\t\t\t<th (click)=\"onSort('MAKH')\">Tên khách hàng</th>\n\t\t\t\t\t\t\t<th>Tổng hóa đơn</th>\n\t\t\t\t\t\t\t<th (click)=\"onSort('THANHTOAN')\">Thanh toán</th>\n\t\t\t\t\t\t\t<th>Còn lại</th>\n\t\t\t\t\t\t\t<th>Tình trạng</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr  *ngFor=\"let item of db_hoadon | chitiethd : mahoadon : !kttt : makhs | sorthoadon : sortBy : sortValue; let i = index\">\n\t\t\t\t\t\t\t<td [routerLink]=\"['/hoadon', item.id, 'editHD']\">{{ i + 1 }}</td>\n\t\t\t\t\t\t\t<td (click)=\"list_chitiethd(item.mahoadon,item.makh,item.id,item.tratien,item.conlai,item.tonghoadon,false,false,true)\">{{ item.mahoadon }}</td>\n\t\t\t\t\t\t<td *ngFor=\"let tam of db_dmkh | tenkh : item.makh\">{{ tam.tenkh }}</td>\n\t\t\t\t\t\t\t<td>{{ item.tonghoadon }}</td>\n\t\t\t\t\t\t\t<td [routerLink]=\"['/hoadon', item.id, 'edit']\">\n\t\t\t\t\t\t\t\t\t{{ item.tratien }}\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>{{ item.conlai }}</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\n\t\t<button type=\"button\" class=\"btn btn-large btn-block btn-danger\"\n\t\t\t(click)=\"onEdit_hoadon(item.id)\"\n\t\t>{{ item.tinhtrang ? 'Giao' : 'Chưa' }}</button>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!--  Dòng này thử -->\n\n<!-- \"id\": 8,\n      \"mahoadon\": \"03112018005\",\n      \"makh\": \"AP01\",\n      \"tonghoadon\": 5850000,\n      \"tratien\": 750000,\n      \"conlai\": 5100000,\n      \"kt\": false,\n      \"tinhtrang\": true -->\n"

/***/ }),

/***/ "./src/app/components/hoadon/hoadons/hoadons.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/hoadon/hoadons/hoadons.component.ts ***!
  \****************************************************************/
/*! exports provided: HoadonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoadonsComponent", function() { return HoadonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dmhang_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/dmhang.service */ "./src/app/services/dmhang.service.ts");
/* harmony import */ var _services_dmkh_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/dmkh.service */ "./src/app/services/dmkh.service.ts");
/* harmony import */ var _services_chitiet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/chitiet.service */ "./src/app/services/chitiet.service.ts");
/* harmony import */ var _services_chitiethd_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/chitiethd.service */ "./src/app/services/chitiethd.service.ts");
/* harmony import */ var _services_hoadon_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/hoadon.service */ "./src/app/services/hoadon.service.ts");
/* harmony import */ var _models_hoadon_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../models/hoadon.model */ "./src/app/models/hoadon.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HoadonsComponent = /** @class */ (function () {
    function HoadonsComponent(dmhangservice, dmkhservice, chitietservice, chitiethdservice, hoadonservice, routerService, activeRouterService, datePipe) {
        this.dmhangservice = dmhangservice;
        this.dmkhservice = dmkhservice;
        this.chitietservice = chitietservice;
        this.chitiethdservice = chitiethdservice;
        this.hoadonservice = hoadonservice;
        this.routerService = routerService;
        this.activeRouterService = activeRouterService;
        this.datePipe = datePipe;
        this.sortBy = 'MAHOADON';
        this.sortValue = 1;
        this.db_dmhang = [];
        this.db_dmkh = [];
        this.db_chitiet = [];
        this.db_chitiethd = [];
        this.db_hoadon = [];
        this.db_hoadon1 = [];
        this.db_hd = [];
        this.today = Date.now();
        this.fixedTimezone = this.today;
        this.tongtt = 0;
        this.dem = 1;
        this.tiencu = 0;
        this.tongcong = 0;
        this.show = false;
        this.show_chua = true;
        this.show_giao = true;
        this.kttt = false;
        this.test_tonghoadon = 0;
        this.test_tratien = 0;
        this.test_conlai = 0;
    }
    HoadonsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.dmhangservice.getAlldmhang().subscribe(function (data) {
            _this.db_dmhang = data;
        });
        this.subscription = this.dmkhservice.getAlldmkh().subscribe(function (data) {
            _this.db_dmkh = data;
        });
        this.subscription = this.chitietservice.getAllchitiet().subscribe(function (data) {
            _this.db_chitiet = data;
        });
        this.subscription = this.chitiethdservice.getAllchitiethd().subscribe(function (data) {
            _this.db_chitiethd = data;
        });
        this.subscription = this.hoadonservice.getAllhoadon().subscribe(function (data) {
            _this.db_hoadon = data;
        });
        this.subscription = this.hoadonservice.getAllhoadon().subscribe(function (data) {
            _this.db_hoadon1 = data;
        });
        var date = new Date();
        this.mahoadon = this.datePipe.transform(date, "ddMMyyyy");
    };
    HoadonsComponent.prototype.Clear_Form = function () {
        for (var i = this.db_chitiet.length - 1; i >= 0; i--) {
            this.db_chitiet[i].hoadon = null;
            this.db_chitiet[i].mahang = null;
            this.db_chitiet[i].sl = null;
            this.db_chitiet[i].DVT = null;
            this.db_chitiet[i].dg = null;
            this.db_chitiet[i].tt = null;
        }
        this.tongtt = 0;
        this.tiencu = 0;
        this.txt_makh = '';
        this.conlai = 0;
        this.thanhtoan = 0;
        this.tongcong = 0;
    };
    HoadonsComponent.prototype.Update_Form = function () {
        var _this = this;
        this.subscription = this.dmhangservice.getAlldmhang().subscribe(function (data) {
            _this.db_dmhang = data;
        });
        this.subscription = this.dmkhservice.getAlldmkh().subscribe(function (data) {
            _this.db_dmkh = data;
        });
        this.subscription = this.chitietservice.getAllchitiet().subscribe(function (data) {
            _this.db_chitiet = data;
        });
        this.subscription = this.chitiethdservice.getAllchitiethd().subscribe(function (data) {
            _this.db_chitiethd = data;
        });
        this.subscription = this.hoadonservice.getAllhoadon().subscribe(function (data) {
            _this.db_hoadon = data;
        });
    };
    HoadonsComponent.prototype.onEdit_hoadon = function (id) {
        var _this = this;
        this.db = new _models_hoadon_model__WEBPACK_IMPORTED_MODULE_6__["hoadon"]();
        for (var i = this.db_hoadon.length - 1; i >= 0; i--) {
            if (this.db_hoadon[i].id == id) {
                this.db.id = this.db_hoadon[i].id;
                this.db.mahoadon = this.db_hoadon[i].mahoadon;
                this.db.makh = this.db_hoadon[i].makh;
                this.db.tonghoadon = this.db_hoadon[i].tonghoadon;
                this.db.tratien = this.db_hoadon[i].tratien;
                this.db.conlai = this.db_hoadon[i].conlai;
                this.db.kt = this.db_hoadon[i].kt;
                this.db.tinhtrang = !this.db_hoadon[i].tinhtrang;
            }
        }
        this.subscription =
            this.hoadonservice.uppdate_hoadon(this.db).subscribe(function (data) {
                _this.routerService.navigateByUrl('hoadon');
                //console.log(data);
            });
        //this.Update_Form();
        this.ngOnInit();
    };
    HoadonsComponent.prototype.list_chitiethd = function (mahd, makh, id, thanhtoan, conlai, tonghoadon, chua, giao, show) {
        this.mahd = mahd;
        this.ngay = mahd.slice(0, 2) + "/" + mahd.slice(2, 4) + "/" + mahd.slice(4, 8);
        for (var i = this.db_chitiethd.length - 1; i >= 0; i--) {
            if (this.db_chitiethd[i].mahoadon == mahd) {
                this.db_hd[i] = this.db_chitiethd[i];
                //console.log(this.db_hd[i]);
            }
        }
        this.tiencu = 0;
        this.tongcong = tonghoadon;
        this.test_tonghoadon = conlai;
        this.test_tratien = thanhtoan;
        this.test_conlai = 0;
        for (var i = this.db_dmkh.length - 1; i >= 0; i--) {
            if (this.db_dmkh[i].makh == makh) {
                this.tenkhs = this.db_dmkh[i].tenkh;
            }
        }
        for (var i = this.db_hoadon.length - 1; i >= 0; i--) {
            //console.log(this.db_hoadon[i].mahoadon + ' ');
            if (this.db_hoadon[i].id < id && this.db_hoadon[i].makh == makh) {
                this.test_conlai = this.test_conlai + this.db_hoadon[i].conlai;
            }
        }
        //console.log(this.test_tonghoadon + ' - ' + this.test_tratien + ' - ' + this.test_conlai);
        this.show = show;
        this.show_chua = chua;
        this.show_giao = giao;
    };
    HoadonsComponent.prototype.list_back = function (chua, giao, show) {
        this.show = show;
        this.show_chua = chua;
        this.show_giao = giao;
    };
    HoadonsComponent.prototype.onPrint = function () {
        window.print();
    };
    HoadonsComponent.prototype.onSort = function (col) {
        this.sortBy = col;
        this.sortValue = -this.sortValue;
    };
    HoadonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hoadons',
            template: __webpack_require__(/*! ./hoadons.component.html */ "./src/app/components/hoadon/hoadons/hoadons.component.html"),
            styles: [__webpack_require__(/*! ./hoadons.component.css */ "./src/app/components/hoadon/hoadons/hoadons.component.css")]
        }),
        __metadata("design:paramtypes", [_services_dmhang_service__WEBPACK_IMPORTED_MODULE_1__["DmhangService"],
            _services_dmkh_service__WEBPACK_IMPORTED_MODULE_2__["DmkhService"],
            _services_chitiet_service__WEBPACK_IMPORTED_MODULE_3__["ChitietService"],
            _services_chitiethd_service__WEBPACK_IMPORTED_MODULE_4__["ChitiethdService"],
            _services_hoadon_service__WEBPACK_IMPORTED_MODULE_5__["HoadonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]])
    ], HoadonsComponent);
    return HoadonsComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-warning\" *ngIf=\"error ==-1\">\n\t<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\n\t<strong>Tên đăng nhập không đúng!</strong> Bạn vui lòng nhập lại....\n</div>\n<div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n\t<div class=\"panel panel-warning\">\n\t\t<div class=\"panel-heading\">\n\t\t\t<h3 class=\"panel-title\" style=\"text-align: center\">LOGIN</h3>\n\t\t</div>\n\t\t<div class=\"panel-body\">\n\t\t\t<form autocomplete=\"false\" novalidate=\"true\">\n\t\t\t\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"\">Username:</label>\n\t\t\t\t\t<input \ttype=\"text\" \n\t\t\t\t\t\t\tclass=\"form-control\" \n\t\t\t\t\t\t\t#username>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"\">Password:</label>\n\t\t\t\t\t<input \ttype=\"Password\" \n\t\t\t\t\t\t\tclass=\"form-control\" \n\t\t\t\t\t\t\t#password>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\n\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\" (click)=\"onLogin(username.value,password.value)\">Login</button>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
        this.error = 0;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.checkLogin();
    };
    LoginComponent.prototype.checkLogin = function () {
        if (localStorage.getItem('user')) {
            this.router.navigate(['']);
        }
    };
    LoginComponent.prototype.onLogin = function (usn, pass) {
        var use = {
            username: usn,
            password: pass
        };
        if (usn == 'admin' && pass == 'admin') {
            localStorage.setItem('user', JSON.stringify(use));
            localStorage.setItem('checkLogin', '1');
            this.router.navigate(['hoadon']);
        }
        else {
            this.error = -1;
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/thongke/bangke/bangke.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/thongke/bangke/bangke.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/thongke/bangke/bangke.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/thongke/bangke/bangke.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"tel\" name=\"\" id=\"input\" class=\"form-control\" value=\"\" required=\"required\" [(ngModel)]=\"sumCash\" (ngModelChange)=\"valueInput()\">\n<div class=\"panel panel-primary\" >\n\t<div class=\"panel-heading\">\n\t\t<h3 class=\"panel-title\" style=\"text-align: center\">BẢNG KÊ TIỀN MẶT</h3>\n\t</div>\n\t<div class=\"panel-body\">\n\t\t<div class=\"row\">\n\t\t\t<div>\n\t\t\t\t<table class=\"table table-hover\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr><th colspan=\"4\" style=\"text-align: center;\"><h3>{{sumCash | number :'3.0-3'}}</h3></th></tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>STT</th>\n\t\t\t\t\t\t\t<th>Mệnh giá</th>\n\t\t\t\t\t\t\t<th>Số lượng</th>\n\t\t\t\t\t\t\t<th>Thành tiền</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>1</td>\n\t\t\t\t\t\t\t<td>500.000</td>\n\t\t\t\t\t\t\t<td><input type=\"tel\" name=\"\" id=\"input\" class=\"form-control\" value=\"\" required=\"required\" [(ngModel)]=\"txt500\" (ngModelChange)=\"valuechange()\"></td>\n\t\t\t\t\t\t\t<td>{{ sum500 | number :'3.0-3' }}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>2</td>\n\t\t\t\t\t\t\t<td>200.000</td>\n\t\t\t\t\t\t\t<td><input type=\"tel\" name=\"\" id=\"input\" class=\"form-control\" value=\"\" required=\"required\" [(ngModel)]=\"txt200\" (ngModelChange)=\"valuechange()\"></td>\n\t\t\t\t\t\t\t<td>{{ sum200 | number :'3.0-3' }}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>3</td>\n\t\t\t\t\t\t\t<td>100.000</td>\n\t\t\t\t\t\t\t<td><input type=\"tel\" name=\"\" id=\"input\" class=\"form-control\" value=\"\" required=\"required\" [(ngModel)]=\"txt100\" (ngModelChange)=\"valuechange()\"></td>\n\t\t\t\t\t\t\t<td>{{ sum100 | number :'3.0-3' }}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>4</td>\n\t\t\t\t\t\t\t<td>50.000</td>\n\t\t\t\t\t\t\t<td><input type=\"tel\" name=\"\" id=\"input\" class=\"form-control\" value=\"\" required=\"required\" [(ngModel)]=\"txt50\" (ngModelChange)=\"valuechange()\"></td>\n\t\t\t\t\t\t\t<td>{{ sum50 | number :'3.0-3' }}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>5</td>\n\t\t\t\t\t\t\t<td>20.000</td>\n\t\t\t\t\t\t\t<td><input type=\"tel\" name=\"\" id=\"input\" class=\"form-control\" value=\"\" required=\"required\" [(ngModel)]=\"txt20\" (ngModelChange)=\"valuechange()\"></td>\n\t\t\t\t\t\t\t<td>{{ sum20 | number :'3.0-3' }}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>6</td>\n\t\t\t\t\t\t\t<td>10.000</td>\n\t\t\t\t\t\t\t<td><input type=\"tel\" name=\"\" id=\"input\" class=\"form-control\" value=\"\" required=\"required\" [(ngModel)]=\"txt10\" (ngModelChange)=\"valuechange()\"></td>\n\t\t\t\t\t\t\t<td>{{ sum10 | number :'3.0-3'}}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>7</td>\n\t\t\t\t\t\t\t<td>5.000</td>\n\t\t\t\t\t\t\t<td><input type=\"tel\" name=\"\" id=\"input\" class=\"form-control\" value=\"\" required=\"required\" [(ngModel)]=\"txt5\" (ngModelChange)=\"valuechange()\"></td>\n\t\t\t\t\t\t\t<td>{{ sum5 | number :'3.0-3' }}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>8</td>\n\t\t\t\t\t\t\t<td>2.000</td>\n\t\t\t\t\t\t\t<td><input type=\"tel\" name=\"\" id=\"input\" class=\"form-control\" value=\"\" required=\"required\" [(ngModel)]=\"txt2\" (ngModelChange)=\"valuechange()\"></td>\n\t\t\t\t\t\t\t<td>{{ sum2 | number :'3.0-3' }}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>9</td>\n\t\t\t\t\t\t\t<td>1.000</td>\n\t\t\t\t\t\t\t<td><input type=\"tel\" name=\"\" id=\"input\" class=\"form-control\" value=\"\" required=\"required\" [(ngModel)]=\"txt1\" (ngModelChange)=\"valuechange()\"></td>\n\t\t\t\t\t\t\t<td>{{ sum1 | number :'3.0-3' }}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t\t<b><label for=\"\">Còn lại: {{ sumLast | number :'3.0-3'}}</label></b>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/components/thongke/bangke/bangke.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/thongke/bangke/bangke.component.ts ***!
  \***************************************************************/
/*! exports provided: BangkeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BangkeComponent", function() { return BangkeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BangkeComponent = /** @class */ (function () {
    function BangkeComponent() {
        this.sum500 = 0;
        this.sum200 = 0;
        this.sum100 = 0;
        this.sum50 = 0;
        this.sum20 = 0;
        this.sum10 = 0;
        this.sum5 = 0;
        this.sum2 = 0;
        this.sum1 = 0;
        this.sumLast = 0;
    }
    BangkeComponent.prototype.ngOnInit = function () {
    };
    BangkeComponent.prototype.valuechange = function () {
        if (this.txt500) {
            this.sum500 = this.txt500 * 500000;
        }
        else {
            this.sum500 = 0;
        }
        if (this.txt200) {
            this.sum200 = this.txt200 * 200000;
        }
        else {
            this.sum200 = 0;
        }
        if (this.txt100) {
            this.sum100 = this.txt100 * 100000;
        }
        else {
            this.sum100 = 0;
        }
        if (this.txt50) {
            this.sum50 = this.txt50 * 50000;
        }
        else {
            this.sum50 = 0;
        }
        if (this.txt20) {
            this.sum20 = this.txt20 * 20000;
        }
        else {
            this.sum20 = 0;
        }
        if (this.txt10) {
            this.sum10 = this.txt10 * 10000;
        }
        else {
            this.sum10 = 0;
        }
        if (this.txt5) {
            this.sum5 = this.txt5 * 5000;
        }
        else {
            this.sum5 = 0;
        }
        if (this.txt2) {
            this.sum2 = this.txt2 * 2000;
        }
        else {
            this.sum2 = 0;
        }
        if (this.txt1) {
            this.sum1 = this.txt1 * 1000;
        }
        else {
            this.sum1 = 0;
        }
        this.sumLast = this.sumCash - (this.sum500 + this.sum200 + this.sum100 + this.sum50 + this.sum20 + this.sum10 + this.sum5 + this.sum2 + this.sum1);
        //console.log(this.sumLast);
    };
    BangkeComponent.prototype.valueInput = function () {
        this.sum500 = 0;
        this.sum200 = 0;
        this.sum100 = 0;
        this.sum50 = 0;
        this.sum20 = 0;
        this.sum10 = 0;
        this.sum5 = 0;
        this.sum2 = 0;
        this.sum1 = 0;
        this.txt500 = null;
        this.txt200 = null;
        this.txt100 = null;
        this.txt50 = null;
        this.txt20 = null;
        this.txt10 = null;
        this.txt5 = null;
        this.txt2 = null;
        this.txt1 = null;
        this.sumLast = null;
    };
    BangkeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bangke',
            template: __webpack_require__(/*! ./bangke.component.html */ "./src/app/components/thongke/bangke/bangke.component.html"),
            styles: [__webpack_require__(/*! ./bangke.component.css */ "./src/app/components/thongke/bangke/bangke.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BangkeComponent);
    return BangkeComponent;
}());



/***/ }),

/***/ "./src/app/components/thongke/thongke.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/thongke/thongke.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/thongke/thongke.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/thongke/thongke.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<table class=\"table table-hover\">\n\t\t<thead>\n\t\t\t<tr>\n\t\t\t\t<th>Ngày hóa đơn</th>\n\t\t\t\t<th>Địa chỉ</th>\n\t\t\t\t<th>Tên khách hàng</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr>\n\t\t\t\t<td>\n\t\t\t\t\t<input type=\"tel\" name=\"\"  id=\"input\" class=\"form-control\" [(ngModel)]=\"checkDate\">\n\t\t\t\t</td>\n\t\t\t\t<td>\n\t\t\t\t\t<select name=\"\" id=\"input\" class=\"form-control\" required=\"required\" [(ngModel)]=\"checkdiachi\" (ngModelChange)=\"change_diachi()\">\n\t\t<option value=\"{{item.madm}}\" *ngFor=\"let item of db_dmdiachi\">{{ item.tendm }}</option>\n\t</select>\n\t\t\t\t</td>\n\t\t\t\t<td>\n\t\t\t\t\t<select name=\"\" id=\"input\" class=\"form-control\" required=\"required\" [(ngModel)]=\"checkKH\" (ngModelChange)=\"change_khachhang()\">\n\t<option value=\"{{item.makh}}\" *ngFor=\"let item of db_dmkh | tenkh : checkdiachi \">{{ item.tenkh }}</option>\n</select>\t\t\t\t\t\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n\t\t\t<table class=\"table table-bordered table-hover\" border=\"1\">\n\t\t\t<tbody>\n\t\t\t\t<div *ngIf=\"checkKH\">\n\t\t\t\t<tr *ngFor=\"let item of db_hoadon | chitiethd : checkDate : 'true' : checkKH | sorthoadon : sortBy : sortValue; let i = index\" style=\"text-align: center;\">\n\t\t\t\t\t<td>\n\t\t\t\t<tr>\n\t\t\t\t\t\t<th style=\"width: 50px\"></th>\n\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t<th>Ngày</th>\n\t\t\t\t\t\t<th>Tổng hóa đơn</th>\n\t\t\t\t\t\t<th>Thanh toán</th>\n\t\t\t\t\t\t<th>Còn lại</th>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"text-align: center;\">\n\t\t\t\t\t<td>{{ i + 1 }}</td>\n\t\t\t\t\t<td *ngFor=\"let a of db_dmkh | tenkh : item.makh\" (click)=\"onSort('MAKH')\">{{ a.tenkh }}</td>\n\t\t\t\t\t<td >\n\t\t\t\t\t\t{{ item.mahoadon | slice :0:2 }}\n\t\t\t\t\t\t/\n\t\t\t\t\t\t{{ item.mahoadon | slice :3:5 }}\n\t\t\t\t\t\t/\n\t\t\t\t\t\t{{ item.mahoadon | slice : 6 :10 }}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>{{ item.tonghoadon | number :'3.0-3' }}</td>\n\t\t\t\t\t<td>{{ item.tratien | number :'3.0-3' }}</td>\n\t\t\t\t\t<td>{{ item.conlai | number :'3.0-3'}}</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"text-align: center;\">\n\t\t\t\t\t<th></th>\n\t\t\t\t\t<th></th>\n\t\t\t\t\t<th>STT</th>\n\t\t\t\t\t<th>Tên hàng</th>\n\t\t\t\t\t<th>SL</th>\n\t\t\t\t\t<th>DVT</th>\n\t\t\t\t\t<th style=\"width: 100px\">DG</th>\n\t\t\t\t\t<th style=\"width: 100px\">TT</th>\n\t\t\t\t</tr >\n\t\t\t\t<tr *ngFor=\"let a of db_chitiethd | filterChitiethd : item.mahoadon; let i = index\" style=\"text-align: center;\">\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td>{{ i + 1 }}</td>\n\t\t\t\t\t<td *ngFor=\"let b of db_dmhang | tenhang : a.mahang\">{{ b.tenhang }}</td>\n\t\t\t\t\t<td>{{ a.sl }}</td>\n\t\t\t\t\t<td>{{ a.DVT }}</td>\n\t\t\t\t\t<td>{{ a.dg | number :'3.0-3' }}</td>\n\t\t\t\t\t<td>{{ a.tt | number :'3.0-3' }}</td>\n\t\t\t\t</tr>\n\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"!checkKH\">\n\t\t\t\t<tr *ngFor=\"let item of db_hoadon | chitiethd : checkDate : 'true' : checkdiachi | sorthoadon : sortBy : sortValue; let i = index\">\n\t\t\t\t\t<td>\n\t\t\t\t<tr style=\"text-align: center;\">\n\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t<th>Ngày</th>\n\t\t\t\t\t\t<th>Tổng hóa đơn</th>\n\t\t\t\t\t\t<th>Thanh toán</th>\n\t\t\t\t\t\t<th>Còn lại</th>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"text-align: center;\">\n\t\t\t\t\t<td>{{ i + 1 }}</td>\n\t\t\t\t\t<td *ngFor=\"let a of db_dmkh | tenkh : item.makh\" (click)=\"onSort('MAKH')\">{{ a.tenkh }}</td>\n\t\t\t\t\t<td >\n\t\t\t\t\t\t{{ item.mahoadon | slice :0:2 }}\n\t\t\t\t\t\t/\n\t\t\t\t\t\t{{ item.mahoadon | slice :2:4 }}\n\t\t\t\t\t\t/\n\t\t\t\t\t\t{{ item.mahoadon | slice : 4 :8 }}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>{{ item.tonghoadon | number :'3.0-3'  }}</td>\n\t\t\t\t\t<td>{{ item.tratien | number :'3.0-3'  }}</td>\n\t\t\t\t\t<td>{{ item.conlai | number :'3.0-3'  }}</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr style=\"text-align: center;\">\n\t\t\t\t\t<th style=\"width: 50px\"></th>\n\t\t\t\t\t<th></th>\n\t\t\t\t\t<th>STT</th>\n\t\t\t\t\t<th>Tên hàng</th>\n\t\t\t\t\t<th>SL</th>\n\t\t\t\t\t<th>DVT</th>\n\t\t\t\t\t<th style=\"width: 100px\">DG</th>\n\t\t\t\t\t<th style=\"width: 100px\">TT</th>\n\t\t\t\t</tr>\n\t\t\t\t<tr *ngFor=\"let a of db_chitiethd | filterChitiethd : item.mahoadon; let i = index\" style=\"text-align: center;\">\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td>{{ i + 1 }}</td>\n\t\t\t\t\t<td *ngFor=\"let b of db_dmhang | tenhang : a.mahang\">{{ b.tenhang }}</td>\n\t\t\t\t\t<td>{{ a.sl }}</td>\n\t\t\t\t\t<td>{{ a.DVT }}</td>\n\t\t\t\t\t<td>{{ a.dg | number :'3.0-3'  }}</td>\n\t\t\t\t\t<td>{{ a.tt | number :'3.0-3'  }}</td>\n\t\t\t\t</tr>\n\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t</div>\n\t\t\t</tbody>\n\t\t</table>\t\n\t\t</div>\n\t</div>\n\t\n</div>\n\n<!-- <tr *ngFor=\"let a of db_chitiethd | filterChitiethd : item.mahoadon; let i = index\">\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>STT</th>\n\t\t\t\t\t\t<th>Mã Hóa Đơn</th>\n\t\t\t\t\t\t<th>Tên Khách hàng</th>\n\t\t\t\t\t\t<th>Tổng hóa đơn</th>\n\t\t\t\t\t\t<th>Thanh toán</th>\n\t\t\t\t\t\t<th>Còn lại</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>{{ i + 1 }}</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t{{ item.mahoadon }}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>{{ item.makh }}</td>\n\t\t\t\t\t<td>{{ item.tonghoadon }}</td>\n\t\t\t\t\t<td>{{ item.tratien }}</td>\n\t\t\t\t\t<td>{{ item.conlai }}</td>\t\t\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<table class=\"table table-bordered table-hover\">\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th>STT</th>\n\t\t\t\t\t<th>Ma hang</th>\n\t\t\t\t\t<th>SL</th>\n\t\t\t\t\t<th>DVT</th>\n\t\t\t\t\t<th>DG</th>\n\t\t\t\t\t<th>TT</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr *ngFor=\"let item of db_hoadon | chitiethd : checkDate : 'true'; let i = index\">\n\t\t\t\t\t<td>{{ i + 1 }}</td>\n\t\t\t\t\t<td>{{ a.mahang }}</td>\n\t\t\t\t\t<td>{{ a.sl }}</td>\n\t\t\t\t\t<td>{{ a.DVT }}</td>\n\t\t\t\t\t<td>{{ a.dg }}</td>\n\t\t\t\t\t<td>{{ a.tt }}</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\t\t\t\t\t\n\t\t\t\t</tr> -->"

/***/ }),

/***/ "./src/app/components/thongke/thongke.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/thongke/thongke.component.ts ***!
  \*********************************************************/
/*! exports provided: ThongkeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongkeComponent", function() { return ThongkeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dmhang_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/dmhang.service */ "./src/app/services/dmhang.service.ts");
/* harmony import */ var _services_dmkh_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/dmkh.service */ "./src/app/services/dmkh.service.ts");
/* harmony import */ var _services_dmdiachi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/dmdiachi.service */ "./src/app/services/dmdiachi.service.ts");
/* harmony import */ var _services_chitiet_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/chitiet.service */ "./src/app/services/chitiet.service.ts");
/* harmony import */ var _services_chitiethd_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/chitiethd.service */ "./src/app/services/chitiethd.service.ts");
/* harmony import */ var _services_hoadon_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/hoadon.service */ "./src/app/services/hoadon.service.ts");
/* harmony import */ var _models_hoadon_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../models/hoadon.model */ "./src/app/models/hoadon.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ThongkeComponent = /** @class */ (function () {
    function ThongkeComponent(dmhangservice, dmkhservice, dmdiachiservice, chitietservice, chitiethdservice, hoadonservice, routerService, activeRouterService, datePipe) {
        this.dmhangservice = dmhangservice;
        this.dmkhservice = dmkhservice;
        this.dmdiachiservice = dmdiachiservice;
        this.chitietservice = chitietservice;
        this.chitiethdservice = chitiethdservice;
        this.hoadonservice = hoadonservice;
        this.routerService = routerService;
        this.activeRouterService = activeRouterService;
        this.datePipe = datePipe;
        this.sortBy = 'MAHOADON';
        this.sortValue = 1;
        this.db_dmhang = [];
        this.db_dmkh = [];
        this.db_dmdiachi = [];
        this.db_chitiet = [];
        this.db_chitiethd = [];
        this.db_hoadon = [];
        this.db_hoadon1 = [];
        this.db_hd = [];
        this.today = Date.now();
        this.fixedTimezone = this.today;
        this.tongtt = 0;
        this.mahoadon = null;
        this.mhd = null;
        this.dem = 1;
        this.tiencu = 0;
        this.tongcong = 0;
        this.show = false;
        this.show_chua = true;
        this.show_giao = true;
        this.kttt = false;
        this.test_tonghoadon = 0;
        this.test_tratien = 0;
        this.test_conlai = 0;
    }
    ThongkeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.dmhangservice.getAlldmhang().subscribe(function (data) {
            _this.db_dmhang = data;
        });
        this.subscription = this.dmkhservice.getAlldmkh().subscribe(function (data) {
            _this.db_dmkh = data;
        });
        this.subscription = this.dmdiachiservice.getAlldmdiachi().subscribe(function (data) {
            _this.db_dmdiachi = data;
        });
        this.subscription = this.chitietservice.getAllchitiet().subscribe(function (data) {
            _this.db_chitiet = data;
        });
        this.subscription = this.chitiethdservice.getAllchitiethd().subscribe(function (data) {
            _this.db_chitiethd = data;
        });
        this.subscription = this.hoadonservice.getAllhoadon().subscribe(function (data) {
            _this.db_hoadon = data;
        });
        this.subscription = this.hoadonservice.getAllhoadon().subscribe(function (data) {
            _this.db_hoadon1 = data;
        });
        var date = new Date();
        this.mahoadon = this.datePipe.transform(date, "ddMMyyyy");
        this.checkDate = this.mahoadon;
    };
    ThongkeComponent.prototype.Clear_Form = function () {
        for (var i = this.db_chitiet.length - 1; i >= 0; i--) {
            this.db_chitiet[i].hoadon = null;
            this.db_chitiet[i].mahang = null;
            this.db_chitiet[i].sl = null;
            this.db_chitiet[i].DVT = null;
            this.db_chitiet[i].dg = null;
            this.db_chitiet[i].tt = null;
        }
        this.tongtt = 0;
        this.tiencu = 0;
        this.txt_makh = '';
        this.conlai = 0;
        this.thanhtoan = 0;
        this.tongcong = 0;
    };
    ThongkeComponent.prototype.Update_Form = function () {
        var _this = this;
        this.subscription = this.dmhangservice.getAlldmhang().subscribe(function (data) {
            _this.db_dmhang = data;
        });
        this.subscription = this.dmkhservice.getAlldmkh().subscribe(function (data) {
            _this.db_dmkh = data;
        });
        this.subscription = this.chitietservice.getAllchitiet().subscribe(function (data) {
            _this.db_chitiet = data;
        });
        this.subscription = this.chitiethdservice.getAllchitiethd().subscribe(function (data) {
            _this.db_chitiethd = data;
        });
        this.subscription = this.hoadonservice.getAllhoadon().subscribe(function (data) {
            _this.db_hoadon = data;
        });
    };
    ThongkeComponent.prototype.onEdit_hoadon = function (id) {
        var _this = this;
        this.db = new _models_hoadon_model__WEBPACK_IMPORTED_MODULE_7__["hoadon"]();
        for (var i = this.db_hoadon.length - 1; i >= 0; i--) {
            if (this.db_hoadon[i].id == id) {
                this.db.id = this.db_hoadon[i].id;
                this.db.mahoadon = this.db_hoadon[i].mahoadon;
                this.db.makh = this.db_hoadon[i].makh;
                this.db.tonghoadon = this.db_hoadon[i].tonghoadon;
                this.db.tratien = this.db_hoadon[i].tratien;
                this.db.conlai = this.db_hoadon[i].conlai;
                this.db.kt = this.db_hoadon[i].kt;
                this.db.tinhtrang = !this.db_hoadon[i].tinhtrang;
            }
        }
        this.subscription =
            this.hoadonservice.uppdate_hoadon(this.db).subscribe(function (data) {
                _this.routerService.navigateByUrl('hoadon');
                //console.log(data);
            });
        //this.Update_Form();
        this.ngOnInit();
    };
    ThongkeComponent.prototype.list_chitiethd = function (mahd, makh, id, thanhtoan, conlai, tonghoadon, chua, giao, show) {
        this.mahd = mahd;
        this.ngay = mahd.slice(0, 2) + "/" + mahd.slice(2, 4) + "/" + mahd.slice(4, 8);
        for (var i = this.db_chitiethd.length - 1; i >= 0; i--) {
            if (this.db_chitiethd[i].mahoadon == mahd) {
                this.db_hd[i] = this.db_chitiethd[i];
                //console.log(this.db_hd[i]);
            }
        }
        this.tiencu = 0;
        this.tongcong = tonghoadon;
        this.test_tonghoadon = conlai;
        this.test_tratien = thanhtoan;
        this.test_conlai = 0;
        for (var i = this.db_dmkh.length - 1; i >= 0; i--) {
            if (this.db_dmkh[i].makh == makh) {
                this.tenkhs = this.db_dmkh[i].tenkh;
            }
        }
        for (var i = this.db_hoadon.length - 1; i >= 0; i--) {
            //console.log(this.db_hoadon[i].mahoadon + ' ');
            if (this.db_hoadon[i].id < id && this.db_hoadon[i].makh == makh) {
                this.test_conlai = this.test_conlai + this.db_hoadon[i].conlai;
            }
        }
        //console.log(this.test_tonghoadon + ' - ' + this.test_tratien + ' - ' + this.test_conlai);
        this.show = show;
        this.show_chua = chua;
        this.show_giao = giao;
    };
    ThongkeComponent.prototype.list_back = function (chua, giao, show) {
        this.show = show;
        this.show_chua = chua;
        this.show_giao = giao;
    };
    ThongkeComponent.prototype.checkHoadon = function () {
        for (var i = this.db_hoadon.length - 1; i >= 0; i--) {
            if (this.db_hoadon[i].mahoadon.slice(0, 8) == this.checkDate) {
                this.mhd = this.db_hoadon[i].mahoadon.slice(0, 8);
            }
        }
    };
    ThongkeComponent.prototype.change_diachi = function () {
    };
    ThongkeComponent.prototype.change_khachhang = function () {
    };
    ThongkeComponent.prototype.onSort = function (col) {
        this.sortBy = col;
        this.sortValue = -this.sortValue;
    };
    ThongkeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-thongke',
            template: __webpack_require__(/*! ./thongke.component.html */ "./src/app/components/thongke/thongke.component.html"),
            styles: [__webpack_require__(/*! ./thongke.component.css */ "./src/app/components/thongke/thongke.component.css")]
        }),
        __metadata("design:paramtypes", [_services_dmhang_service__WEBPACK_IMPORTED_MODULE_1__["DmhangService"],
            _services_dmkh_service__WEBPACK_IMPORTED_MODULE_2__["DmkhService"],
            _services_dmdiachi_service__WEBPACK_IMPORTED_MODULE_3__["DmdiachiService"],
            _services_chitiet_service__WEBPACK_IMPORTED_MODULE_4__["ChitietService"],
            _services_chitiethd_service__WEBPACK_IMPORTED_MODULE_5__["ChitiethdService"],
            _services_hoadon_service__WEBPACK_IMPORTED_MODULE_6__["HoadonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]])
    ], ThongkeComponent);
    return ThongkeComponent;
}());



/***/ }),

/***/ "./src/app/components/trangchu/trangchu.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/trangchu/trangchu.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/trangchu/trangchu.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/trangchu/trangchu.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  trangchu works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/trangchu/trangchu.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/trangchu/trangchu.component.ts ***!
  \***********************************************************/
/*! exports provided: TrangchuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrangchuComponent", function() { return TrangchuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrangchuComponent = /** @class */ (function () {
    function TrangchuComponent() {
    }
    TrangchuComponent.prototype.ngOnInit = function () {
    };
    TrangchuComponent.prototype.logout = function () {
        if (localStorage.getItem('user')) {
            localStorage.setItem('user', null);
        }
    };
    TrangchuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trangchu',
            template: __webpack_require__(/*! ./trangchu.component.html */ "./src/app/components/trangchu/trangchu.component.html"),
            styles: [__webpack_require__(/*! ./trangchu.component.css */ "./src/app/components/trangchu/trangchu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TrangchuComponent);
    return TrangchuComponent;
}());



/***/ }),

/***/ "./src/app/models/chitiethd.model.ts":
/*!*******************************************!*\
  !*** ./src/app/models/chitiethd.model.ts ***!
  \*******************************************/
/*! exports provided: chitiethd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chitiethd", function() { return chitiethd; });
var chitiethd = /** @class */ (function () {
    function chitiethd() {
    }
    return chitiethd;
}());



/***/ }),

/***/ "./src/app/models/dmhang.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/dmhang.model.ts ***!
  \****************************************/
/*! exports provided: dmhang */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dmhang", function() { return dmhang; });
var dmhang = /** @class */ (function () {
    function dmhang() {
    }
    return dmhang;
}());



/***/ }),

/***/ "./src/app/models/dmkh.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/dmkh.model.ts ***!
  \**************************************/
/*! exports provided: dmkh */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dmkh", function() { return dmkh; });
var dmkh = /** @class */ (function () {
    function dmkh() {
    }
    return dmkh;
}());



/***/ }),

/***/ "./src/app/models/hoadon.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/hoadon.model.ts ***!
  \****************************************/
/*! exports provided: hoadon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hoadon", function() { return hoadon; });
var hoadon = /** @class */ (function () {
    function hoadon() {
    }
    return hoadon;
}());



/***/ }),

/***/ "./src/app/pipes/chitiethd.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/chitiethd.pipe.ts ***!
  \*****************************************/
/*! exports provided: ChitiethdPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChitiethdPipe", function() { return ChitiethdPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChitiethdPipe = /** @class */ (function () {
    function ChitiethdPipe() {
    }
    ChitiethdPipe.prototype.transform = function (hoadons, mahd, id, makhs) {
        if (!mahd) {
            if (makhs) {
                hoadons = hoadons.filter(function (item) {
                    return item.tinhtrang.toString().toLocaleLowerCase().indexOf(id.toString().toLocaleLowerCase()) !== -1;
                });
                return hoadons.filter(function (item) {
                    return item.makh.toString().toLocaleLowerCase().indexOf(makhs.toString().toLocaleLowerCase()) !== -1;
                });
            }
            else {
                return hoadons.filter(function (item) {
                    return item.tinhtrang.toString().toLocaleLowerCase().indexOf(id.toString().toLocaleLowerCase()) !== -1;
                });
            }
        }
        else if (mahd) {
            /*hoadons = hoadons.filter(x =>{
                //console.log(x.id.toString().indexOf(id));
                return x.id.toString().includes(id);
            });*/
            if (makhs) {
                hoadons = hoadons.filter(function (item) {
                    return item.tinhtrang.toString().toLocaleLowerCase().indexOf(id.toString().toLocaleLowerCase()) !== -1;
                });
                hoadons = hoadons.filter(function (item) {
                    return item.mahoadon.toString().toLocaleLowerCase().indexOf(mahd.toString().toLocaleLowerCase()) !== -1;
                });
                return hoadons.filter(function (item) {
                    return item.makh.toString().toLocaleLowerCase().indexOf(makhs.toString().toLocaleLowerCase()) !== -1;
                });
            }
            else {
                hoadons = hoadons.filter(function (item) {
                    return item.tinhtrang.toString().toLocaleLowerCase().indexOf(id.toString().toLocaleLowerCase()) !== -1;
                });
                return hoadons.filter(function (item) {
                    return item.mahoadon.toString().toLocaleLowerCase().indexOf(mahd.toString().toLocaleLowerCase()) !== -1;
                });
            }
        }
    };
    ChitiethdPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'chitiethd'
        })
    ], ChitiethdPipe);
    return ChitiethdPipe;
}());



/***/ }),

/***/ "./src/app/pipes/dmhang.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/dmhang.pipe.ts ***!
  \**************************************/
/*! exports provided: DmhangPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DmhangPipe", function() { return DmhangPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DmhangPipe = /** @class */ (function () {
    function DmhangPipe() {
    }
    DmhangPipe.prototype.transform = function (dmhangs, mahangs) {
        if (!mahangs) {
            return dmhangs;
        }
        else if (mahangs) {
            return dmhangs.filter(function (item) {
                return item.mahang.toString().toLocaleLowerCase().indexOf(mahangs.toLocaleLowerCase()) !== -1;
            });
        }
        else {
            return dmhangs;
        }
    };
    DmhangPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'dmhang'
        })
    ], DmhangPipe);
    return DmhangPipe;
}());



/***/ }),

/***/ "./src/app/pipes/filter-chitiethd.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/pipes/filter-chitiethd.pipe.ts ***!
  \************************************************/
/*! exports provided: FilterChitiethdPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterChitiethdPipe", function() { return FilterChitiethdPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterChitiethdPipe = /** @class */ (function () {
    function FilterChitiethdPipe() {
    }
    FilterChitiethdPipe.prototype.transform = function (chitiethds, mahd) {
        if (mahd) {
            return chitiethds.filter(function (item) {
                return item.mahoadon.toString().toLocaleLowerCase().indexOf(mahd.toString().toLocaleLowerCase()) !== -1;
            });
        }
        else {
            return chitiethds;
        }
    };
    FilterChitiethdPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterChitiethd'
        })
    ], FilterChitiethdPipe);
    return FilterChitiethdPipe;
}());



/***/ }),

/***/ "./src/app/pipes/show-chitiethd.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/pipes/show-chitiethd.pipe.ts ***!
  \**********************************************/
/*! exports provided: ShowChitiethdPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowChitiethdPipe", function() { return ShowChitiethdPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ShowChitiethdPipe = /** @class */ (function () {
    function ShowChitiethdPipe() {
    }
    ShowChitiethdPipe.prototype.transform = function (chitiethds, mahd) {
        if (!mahd) {
            return chitiethds;
        }
        else if (mahd) {
            return chitiethds.filter(function (item) {
                return item.mahoadon.toString().toLocaleLowerCase().indexOf(mahd.toLocaleLowerCase()) !== -1;
            });
        }
        else {
            return chitiethds;
        }
    };
    ShowChitiethdPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'showChitiethd'
        })
    ], ShowChitiethdPipe);
    return ShowChitiethdPipe;
}());



/***/ }),

/***/ "./src/app/pipes/sorthoadon.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/pipes/sorthoadon.pipe.ts ***!
  \******************************************/
/*! exports provided: SorthoadonPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SorthoadonPipe", function() { return SorthoadonPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SorthoadonPipe = /** @class */ (function () {
    function SorthoadonPipe() {
    }
    SorthoadonPipe.prototype.transform = function (hoadons, sortBy, sortValue) {
        if (sortBy === 'MAKH') {
            hoadons.sort(function (a, b) {
                if (a.makh > b.makh) {
                    return sortValue;
                }
                else if (a.makh < b.makh) {
                    return -sortValue;
                }
                else
                    return 0;
            });
        }
        if (sortBy === 'THANHTOAN') {
            hoadons.sort(function (a, b) {
                if (a.tratien > b.tratien) {
                    return sortValue;
                }
                else if (a.tratien < b.tratien) {
                    return -sortValue;
                }
                else
                    return 0;
            });
        }
        if (sortBy === 'MAHOADON') {
            hoadons.sort(function (a, b) {
                if (a.mahoadon > b.mahoadon) {
                    return sortValue;
                }
                else if (a.mahoadon < b.mahoadon) {
                    return -sortValue;
                }
                else
                    return 0;
            });
        }
        return hoadons;
    };
    SorthoadonPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'sorthoadon'
        })
    ], SorthoadonPipe);
    return SorthoadonPipe;
}());



/***/ }),

/***/ "./src/app/pipes/tenhang.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/tenhang.pipe.ts ***!
  \***************************************/
/*! exports provided: TenhangPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenhangPipe", function() { return TenhangPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TenhangPipe = /** @class */ (function () {
    function TenhangPipe() {
    }
    TenhangPipe.prototype.transform = function (dmhangs, mahangs) {
        if (!mahangs) {
            return dmhangs;
        }
        else if (mahangs) {
            return dmhangs.filter(function (item) {
                return item.mahang.toString().toLocaleLowerCase().indexOf(mahangs.toLocaleLowerCase()) !== -1;
            });
        }
        else {
            return dmhangs;
        }
    };
    TenhangPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'tenhang'
        })
    ], TenhangPipe);
    return TenhangPipe;
}());



/***/ }),

/***/ "./src/app/pipes/tenkh.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/pipes/tenkh.pipe.ts ***!
  \*************************************/
/*! exports provided: TenkhPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenkhPipe", function() { return TenkhPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TenkhPipe = /** @class */ (function () {
    function TenkhPipe() {
    }
    TenkhPipe.prototype.transform = function (dmkhs, makhs, tenkhs) {
        /*  if(!makhs)
          {
           return dmkhs;
          }else
          if(makhs)
          {
                return dmkhs.filter(item =>
                   item.makh.toString().toLocaleLowerCase().indexOf(makhs.toString().toLocaleLowerCase()) !== -1);
       
          }else
       {
         return dmkhs;
       }*/
        if (!tenkhs && !makhs) {
            return dmkhs;
        }
        else if (tenkhs && !makhs) {
            return dmkhs.filter(function (item) {
                return item.tenkh.toString().toLocaleLowerCase().indexOf(tenkhs.toString().toLocaleLowerCase()) !== -1;
            });
        }
        else if (!tenkhs && makhs) {
            return dmkhs.filter(function (item) {
                return item.makh.toString().toLocaleLowerCase().indexOf(makhs.toString().toLocaleLowerCase()) !== -1;
            });
        }
        else if (makhs && tenkhs) {
            dmkhs = dmkhs.filter(function (item) {
                return item.makh.toString().toLocaleLowerCase().indexOf(makhs.toString().toLocaleLowerCase()) !== -1;
            });
            return dmkhs.filter(function (item) {
                return item.tenkh.toString().toLocaleLowerCase().indexOf(tenkhs.toString().toLocaleLowerCase()) !== -1;
            });
        }
        else {
            return dmkhs;
        }
    };
    TenkhPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'tenkh'
        })
    ], TenkhPipe);
    return TenkhPipe;
}());



/***/ }),

/***/ "./src/app/services/chitiet.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/chitiet.service.ts ***!
  \*********************************************/
/*! exports provided: ChitietService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChitietService", function() { return ChitietService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import HttpClient vào để sử dụng

var ChitietService = /** @class */ (function () {
    function ChitietService(http) {
        this.http = http;
        this.API = 'http://localhost:3000/chitiet';
    }
    //List danh sách  các mặt hàng
    ChitietService.prototype.getAllchitiet = function () {
        return this.http.get(this.API);
    };
    ChitietService.prototype.getOnechitiet = function (id) {
        return this.http.get(this.API + "/" + id);
    };
    ChitietService.prototype.add_chitiet = function (chitiet) {
        return this.http.post(this.API, chitiet);
    };
    ChitietService.prototype.delete_chitiet = function (id) {
        return this.http.delete(this.API + "/" + id);
    };
    ChitietService.prototype.uppdate_chitiet = function (chitiet) {
        return this.http.put(this.API + "/" + chitiet.id, chitiet);
    };
    ChitietService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ChitietService);
    return ChitietService;
}());



/***/ }),

/***/ "./src/app/services/chitiethd.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/chitiethd.service.ts ***!
  \***********************************************/
/*! exports provided: ChitiethdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChitiethdService", function() { return ChitiethdService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import HttpClient vào để sử dụng

var ChitiethdService = /** @class */ (function () {
    function ChitiethdService(http) {
        this.http = http;
        this.API = 'http://localhost:3000/chitiethd';
    }
    ChitiethdService.prototype.getAllchitiethd = function () {
        return this.http.get(this.API);
    };
    ChitiethdService.prototype.getOnechitiethd = function (id) {
        return this.http.get(this.API + "/" + id);
    };
    ChitiethdService.prototype.add_chitiethd = function (chitiethd) {
        return this.http.post(this.API, chitiethd);
    };
    ChitiethdService.prototype.delete_chitiethd = function (id) {
        return this.http.delete(this.API + "/" + id);
    };
    ChitiethdService.prototype.uppdate_chitiethd = function (chitiethd) {
        return this.http.put(this.API + "/" + chitiethd.id, chitiethd);
    };
    ChitiethdService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ChitiethdService);
    return ChitiethdService;
}());



/***/ }),

/***/ "./src/app/services/dmdiachi.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/dmdiachi.service.ts ***!
  \**********************************************/
/*! exports provided: DmdiachiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DmdiachiService", function() { return DmdiachiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import HttpClient vào để sử dụng

var DmdiachiService = /** @class */ (function () {
    function DmdiachiService(http) {
        this.http = http;
        this.API = 'http://localhost:3000/dmdiachi';
    }
    //List danh sách  các mặt hàng
    DmdiachiService.prototype.getAlldmdiachi = function () {
        return this.http.get(this.API);
    };
    DmdiachiService.prototype.getOnedmdiachi = function (id) {
        return this.http.get(this.API + "/" + id);
    };
    DmdiachiService.prototype.add_dmdiachi = function (dmdiachi) {
        return this.http.post(this.API, dmdiachi);
    };
    DmdiachiService.prototype.delete_dmdiachi = function (id) {
        return this.http.delete(this.API + "/" + id);
    };
    DmdiachiService.prototype.uppdate_dmdiachi = function (dmdiachi) {
        return this.http.put(this.API + "/" + dmdiachi.id, dmdiachi);
    };
    DmdiachiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DmdiachiService);
    return DmdiachiService;
}());



/***/ }),

/***/ "./src/app/services/dmhang.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/dmhang.service.ts ***!
  \********************************************/
/*! exports provided: DmhangService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DmhangService", function() { return DmhangService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import HttpClient vào để sử dụng
/*import { HttpClient } from '@angular/common/http';*/

var DmhangService = /** @class */ (function () {
    function DmhangService(http) {
        this.http = http;
        //Khai báo đường dẫn đến Server để lấy dl
        /*  public API : string = 'http://localhost:3000/dmhang';
         public API : string = 'http://localhost:3000/dmhang';
        */
        this.API = 'http://localhost:3000/dmhang';
    }
    //List danh sách  các mặt hàng
    DmhangService.prototype.getAlldmhang = function () {
        //console.log(this.API);
        return this.http.get(this.API);
        /*.map((resp : Response) => <dmhang[]>resp.json());*/
    };
    DmhangService.prototype.getOnedmhang = function (id) {
        return this.http.get(this.API + "/" + id);
    };
    DmhangService.prototype.add_dmhang = function (dmhang) {
        return this.http.post(this.API, dmhang);
    };
    DmhangService.prototype.delete_dmhang = function (id) {
        return this.http.delete(this.API + "/" + id);
    };
    DmhangService.prototype.uppdate_dmhang = function (dmhang) {
        return this.http.put(this.API + "/" + dmhang.id, dmhang);
    };
    DmhangService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])( /*{
          providedIn: 'root'
        }*/),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DmhangService);
    return DmhangService;
}());



/***/ }),

/***/ "./src/app/services/dmkh.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/dmkh.service.ts ***!
  \******************************************/
/*! exports provided: DmkhService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DmkhService", function() { return DmkhService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import HttpClient vào để sử dụng

var DmkhService = /** @class */ (function () {
    function DmkhService(http) {
        this.http = http;
        //Khai báo đường dẫn đến Server để lấy dl
        this.API = 'http://localhost:3000/dmkh';
    }
    //List danh sách  các mặt hàng
    DmkhService.prototype.getAlldmkh = function () {
        return this.http.get(this.API);
    };
    DmkhService.prototype.getOnedmkh = function (id) {
        return this.http.get(this.API + "/" + id);
    };
    DmkhService.prototype.add_dmkh = function (dmkh) {
        return this.http.post(this.API, dmkh);
    };
    DmkhService.prototype.delete_dmkh = function (id) {
        return this.http.delete(this.API + "/" + id);
    };
    DmkhService.prototype.uppdate_dmkh = function (dmkh) {
        return this.http.put(this.API + "/" + dmkh.id, dmkh);
    };
    DmkhService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DmkhService);
    return DmkhService;
}());



/***/ }),

/***/ "./src/app/services/guards/auth.guard.ts":
/*!***********************************************!*\
  !*** ./src/app/services/guards/auth.guard.ts ***!
  \***********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('user')) {
            return true;
        }
        else {
            this.router.navigate(['']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/hoadon.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/hoadon.service.ts ***!
  \********************************************/
/*! exports provided: HoadonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoadonService", function() { return HoadonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import HttpClient vào để sử dụng

var HoadonService = /** @class */ (function () {
    function HoadonService(http) {
        this.http = http;
        this.API = 'http://localhost:3000/hoadon';
    }
    //List danh sách  các mặt hàng
    HoadonService.prototype.getAllhoadon = function () {
        return this.http.get(this.API);
    };
    HoadonService.prototype.getOnehoadon = function (id) {
        return this.http.get(this.API + "/" + id);
    };
    HoadonService.prototype.add_hoadon = function (hoadon) {
        return this.http.post(this.API, hoadon);
    };
    HoadonService.prototype.delete_hoadon = function (id) {
        return this.http.delete(this.API + "/" + id);
    };
    HoadonService.prototype.uppdate_hoadon = function (hoadon) {
        return this.http.put(this.API + "/" + hoadon.id, hoadon);
    };
    HoadonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HoadonService);
    return HoadonService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\angular 4\HOAVU\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map