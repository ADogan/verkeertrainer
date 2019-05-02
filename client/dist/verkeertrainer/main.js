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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <app-sidebar></app-sidebar>\n  <div id=\"content-wrapper\" class=\"d-flex flex-column\">\n    <div id=\"content\">\n      <app-topbar></app-topbar>\n      <router-outlet></router-outlet>\n    </div>\n    <app-footer></app-footer>\n  </div>\n</div>\n<a class=\"scroll-to-top rounded\" href=\"#page-top\"><i class=\"fas fa-angle-up\"></i></a>\n<app-logout-modal></app-logout-modal>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Verkeertrainer';
    }
    AppComponent.prototype.ngOnInit = function () {
        // Toggle the side navigation
        jquery__WEBPACK_IMPORTED_MODULE_2__("#sidebarToggle, #sidebarToggleTop").on('click', function (e) {
            jquery__WEBPACK_IMPORTED_MODULE_2__("body").toggleClass("sidebar-toggled");
            jquery__WEBPACK_IMPORTED_MODULE_2__(".sidebar").toggleClass("toggled");
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quiz/quiz.component */ "./src/app/quiz/quiz.component.ts");
/* harmony import */ var _quiz_quizbox_quizbox_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./quiz/quizbox/quizbox.component */ "./src/app/quiz/quizbox/quizbox.component.ts");
/* harmony import */ var _main_layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main_layout/sidebar/sidebar.component */ "./src/app/main_layout/sidebar/sidebar.component.ts");
/* harmony import */ var _main_layout_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main_layout/topbar/topbar.component */ "./src/app/main_layout/topbar/topbar.component.ts");
/* harmony import */ var _main_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main_layout/footer/footer.component */ "./src/app/main_layout/footer/footer.component.ts");
/* harmony import */ var _main_layout_modals_logout_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./main_layout/modals/logout-modal.component */ "./src/app/main_layout/modals/logout-modal.component.ts");
/* harmony import */ var _main_layout_topbar_messages_messages_dropdown_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./main_layout/topbar/messages/messages-dropdown.component */ "./src/app/main_layout/topbar/messages/messages-dropdown.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
                _main_layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"],
                _main_layout_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_11__["TopbarComponent"],
                _main_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _main_layout_modals_logout_modal_component__WEBPACK_IMPORTED_MODULE_13__["LogoutModalComponent"],
                _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_8__["QuizComponent"],
                _quiz_quizbox_quizbox_component__WEBPACK_IMPORTED_MODULE_9__["QuizBoxComponent"],
                _main_layout_topbar_messages_messages_dropdown_component__WEBPACK_IMPORTED_MODULE_14__["MessagesDropdownComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quiz/quiz.component */ "./src/app/quiz/quiz.component.ts");





var routes = [
    { path: '', component: _home__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'quiz', component: _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_4__["QuizComponent"] },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Begin Page Content -->\n<div class=\"container-fluid\">\n\n  <!-- Page Heading -->\n  <div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\n    <h1 class=\"h3 mb-0 text-gray-800\">Dashboard</h1>\n    <a href=\"#\" class=\"d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm\"><i class=\"fas fa-download fa-sm text-white-50\"></i> Generate Report</a>\n  </div>\n\n  <!-- Content Row -->\n  <div class=\"row\">\n\n    <!-- Earnings (Monthly) Card Example -->\n    <div class=\"col-xl-3 col-md-6 mb-4\">\n      <div class=\"card border-left-primary shadow h-100 py-2\">\n        <div class=\"card-body\">\n          <div class=\"row no-gutters align-items-center\">\n            <div class=\"col mr-2\">\n              <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\">Earnings (Monthly)</div>\n              <div class=\"h5 mb-0 font-weight-bold text-gray-800\">$40,000</div>\n            </div>\n            <div class=\"col-auto\">\n              <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Earnings (Monthly) Card Example -->\n    <div class=\"col-xl-3 col-md-6 mb-4\">\n      <div class=\"card border-left-success shadow h-100 py-2\">\n        <div class=\"card-body\">\n          <div class=\"row no-gutters align-items-center\">\n            <div class=\"col mr-2\">\n              <div class=\"text-xs font-weight-bold text-success text-uppercase mb-1\">Earnings (Annual)</div>\n              <div class=\"h5 mb-0 font-weight-bold text-gray-800\">$215,000</div>\n            </div>\n            <div class=\"col-auto\">\n              <i class=\"fas fa-dollar-sign fa-2x text-gray-300\"></i>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Earnings (Monthly) Card Example -->\n    <div class=\"col-xl-3 col-md-6 mb-4\">\n      <div class=\"card border-left-info shadow h-100 py-2\">\n        <div class=\"card-body\">\n          <div class=\"row no-gutters align-items-center\">\n            <div class=\"col mr-2\">\n              <div class=\"text-xs font-weight-bold text-info text-uppercase mb-1\">Tasks</div>\n              <div class=\"row no-gutters align-items-center\">\n                <div class=\"col-auto\">\n                  <div class=\"h5 mb-0 mr-3 font-weight-bold text-gray-800\">50%</div>\n                </div>\n                <div class=\"col\">\n                  <div class=\"progress progress-sm mr-2\">\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-auto\">\n              <i class=\"fas fa-clipboard-list fa-2x text-gray-300\"></i>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Pending Requests Card Example -->\n    <div class=\"col-xl-3 col-md-6 mb-4\">\n      <div class=\"card border-left-warning shadow h-100 py-2\">\n        <div class=\"card-body\">\n          <div class=\"row no-gutters align-items-center\">\n            <div class=\"col mr-2\">\n              <div class=\"text-xs font-weight-bold text-warning text-uppercase mb-1\">Pending Requests</div>\n              <div class=\"h5 mb-0 font-weight-bold text-gray-800\">18</div>\n            </div>\n            <div class=\"col-auto\">\n              <i class=\"fas fa-comments fa-2x text-gray-300\"></i>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Content Row -->\n\n  <div class=\"row\">\n\n    <!-- Area Chart -->\n    <div class=\"col-xl-8 col-lg-7\">\n      <div class=\"card shadow mb-4\">\n        <!-- Card Header - Dropdown -->\n        <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\n          <h6 class=\"m-0 font-weight-bold text-primary\">Earnings Overview</h6>\n          <div class=\"dropdown no-arrow\">\n            <a class=\"dropdown-toggle\" href=\"#\" role=\"button\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              <i class=\"fas fa-ellipsis-v fa-sm fa-fw text-gray-400\"></i>\n            </a>\n            <div class=\"dropdown-menu dropdown-menu-right shadow animated--fade-in\" aria-labelledby=\"dropdownMenuLink\">\n              <div class=\"dropdown-header\">Dropdown Header:</div>\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n            </div>\n          </div>\n        </div>\n        <!-- Card Body -->\n        <div class=\"card-body\">\n          <div class=\"chart-area\">\n            <canvas id=\"myAreaChart\"></canvas>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Pie Chart -->\n    <div class=\"col-xl-4 col-lg-5\">\n      <div class=\"card shadow mb-4\">\n        <!-- Card Header - Dropdown -->\n        <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\n          <h6 class=\"m-0 font-weight-bold text-primary\">Revenue Sources</h6>\n          <div class=\"dropdown no-arrow\">\n            <a class=\"dropdown-toggle\" href=\"#\" role=\"button\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              <i class=\"fas fa-ellipsis-v fa-sm fa-fw text-gray-400\"></i>\n            </a>\n            <div class=\"dropdown-menu dropdown-menu-right shadow animated--fade-in\" aria-labelledby=\"dropdownMenuLink\">\n              <div class=\"dropdown-header\">Dropdown Header:</div>\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n            </div>\n          </div>\n        </div>\n        <!-- Card Body -->\n        <div class=\"card-body\">\n          <div class=\"chart-pie pt-4 pb-2\">\n            <canvas id=\"myPieChart\"></canvas>\n          </div>\n          <div class=\"mt-4 text-center small\">\n            <span class=\"mr-2\">\n              <i class=\"fas fa-circle text-primary\"></i> Direct\n            </span>\n            <span class=\"mr-2\">\n              <i class=\"fas fa-circle text-success\"></i> Social\n            </span>\n            <span class=\"mr-2\">\n              <i class=\"fas fa-circle text-info\"></i> Referral\n            </span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Content Row -->\n  <div class=\"row\">\n\n    <!-- Content Column -->\n    <div class=\"col-lg-6 mb-4\">\n\n      <!-- Project Card Example -->\n      <div class=\"card shadow mb-4\">\n        <div class=\"card-header py-3\">\n          <h6 class=\"m-0 font-weight-bold text-primary\">Projects</h6>\n        </div>\n        <div class=\"card-body\">\n          <h4 class=\"small font-weight-bold\">Server Migration <span class=\"float-right\">20%</span></h4>\n          <div class=\"progress mb-4\">\n            <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 20%\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <h4 class=\"small font-weight-bold\">Sales Tracking <span class=\"float-right\">40%</span></h4>\n          <div class=\"progress mb-4\">\n            <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 40%\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <h4 class=\"small font-weight-bold\">Customer Database <span class=\"float-right\">60%</span></h4>\n          <div class=\"progress mb-4\">\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 60%\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <h4 class=\"small font-weight-bold\">Payout Details <span class=\"float-right\">80%</span></h4>\n          <div class=\"progress mb-4\">\n            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 80%\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <h4 class=\"small font-weight-bold\">Account Setup <span class=\"float-right\">Complete!</span></h4>\n          <div class=\"progress\">\n            <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 100%\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n        </div>\n      </div>\n\n      <!-- Color System -->\n      <div class=\"row\">\n        <div class=\"col-lg-6 mb-4\">\n          <div class=\"card bg-primary text-white shadow\">\n            <div class=\"card-body\">\n              Primary\n              <div class=\"text-white-50 small\">#4e73df</div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-6 mb-4\">\n          <div class=\"card bg-success text-white shadow\">\n            <div class=\"card-body\">\n              Success\n              <div class=\"text-white-50 small\">#1cc88a</div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-6 mb-4\">\n          <div class=\"card bg-info text-white shadow\">\n            <div class=\"card-body\">\n              Info\n              <div class=\"text-white-50 small\">#36b9cc</div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-6 mb-4\">\n          <div class=\"card bg-warning text-white shadow\">\n            <div class=\"card-body\">\n              Warning\n              <div class=\"text-white-50 small\">#f6c23e</div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-6 mb-4\">\n          <div class=\"card bg-danger text-white shadow\">\n            <div class=\"card-body\">\n              Danger\n              <div class=\"text-white-50 small\">#e74a3b</div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-6 mb-4\">\n          <div class=\"card bg-secondary text-white shadow\">\n            <div class=\"card-body\">\n              Secondary\n              <div class=\"text-white-50 small\">#858796</div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"col-lg-6 mb-4\">\n\n      <!-- Illustrations -->\n      <div class=\"card shadow mb-4\">\n        <div class=\"card-header py-3\">\n          <h6 class=\"m-0 font-weight-bold text-primary\">Illustrations</h6>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"text-center\">\n            <img class=\"img-fluid px-3 px-sm-4 mt-3 mb-4\" style=\"width: 25rem;\" src=\"assets/img/undraw_posting_photo.svg\" alt=\"\">\n          </div>\n          <p>Add some quality, svg illustrations to your project courtesy of <a target=\"_blank\" rel=\"nofollow\" href=\"https://undraw.co/\">unDraw</a>, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!</p>\n          <a target=\"_blank\" rel=\"nofollow\" href=\"https://undraw.co/\">Browse Illustrations on unDraw &rarr;</a>\n        </div>\n      </div>\n\n      <!-- Approach -->\n      <div class=\"card shadow mb-4\">\n        <div class=\"card-header py-3\">\n          <h6 class=\"m-0 font-weight-bold text-primary\">Development Approach</h6>\n        </div>\n        <div class=\"card-body\">\n          <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.</p>\n          <p class=\"mb-0\">Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.</p>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n</div>\n<!-- /.container-fluid -->"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html") })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/index.ts":
/*!*******************************!*\
  !*** ./src/app/home/index.ts ***!
  \*******************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]; });




/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Login</h2>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html") })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main_layout/footer/footer.component.css":
/*!*********************************************************!*\
  !*** ./src/app/main_layout/footer/footer.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5fbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/main_layout/footer/footer.component.html":
/*!**********************************************************!*\
  !*** ./src/app/main_layout/footer/footer.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "      <!-- Footer -->\n      <footer class=\"sticky-footer bg-white\">\n        <div class=\"container my-auto\">\n          <div class=\"copyright text-center my-auto\">\n            <span>Copyright &copy; Your Website 2019</span>\n          </div>\n        </div>\n      </footer>\n      <!-- End of Footer -->"

/***/ }),

/***/ "./src/app/main_layout/footer/footer.component.ts":
/*!********************************************************!*\
  !*** ./src/app/main_layout/footer/footer.component.ts ***!
  \********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/main_layout/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/main_layout/footer/footer.component.css")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/main_layout/modals/logout-modal.component.css":
/*!***************************************************************!*\
  !*** ./src/app/main_layout/modals/logout-modal.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5fbGF5b3V0L21vZGFscy9sb2dvdXQtbW9kYWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/main_layout/modals/logout-modal.component.html":
/*!****************************************************************!*\
  !*** ./src/app/main_layout/modals/logout-modal.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <!-- Logout Modal-->\n  <div class=\"modal fade\" id=\"logoutModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Ready to Leave?</h5>\n          <button class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">×</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">Select \"Logout\" below if you are ready to end your current session.</div>\n        <div class=\"modal-footer\">\n          <button class=\"btn btn-secondary\" type=\"button\" data-dismiss=\"modal\">Cancel</button>\n          <a class=\"btn btn-primary\" href=\"login.html\">Logout</a>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/main_layout/modals/logout-modal.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/main_layout/modals/logout-modal.component.ts ***!
  \**************************************************************/
/*! exports provided: LogoutModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutModalComponent", function() { return LogoutModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LogoutModalComponent = /** @class */ (function () {
    function LogoutModalComponent() {
    }
    LogoutModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logout-modal',
            template: __webpack_require__(/*! ./logout-modal.component.html */ "./src/app/main_layout/modals/logout-modal.component.html"),
            styles: [__webpack_require__(/*! ./logout-modal.component.css */ "./src/app/main_layout/modals/logout-modal.component.css")]
        })
    ], LogoutModalComponent);
    return LogoutModalComponent;
}());



/***/ }),

/***/ "./src/app/main_layout/sidebar/sidebar.component.css":
/*!***********************************************************!*\
  !*** ./src/app/main_layout/sidebar/sidebar.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5fbGF5b3V0L3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main_layout/sidebar/sidebar.component.html":
/*!************************************************************!*\
  !*** ./src/app/main_layout/sidebar/sidebar.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- Sidebar -->\n<ul class=\"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion\" id=\"accordionSidebar\">\n\n  <!-- Sidebar - Brand -->\n  <a class=\"sidebar-brand d-flex align-items-center justify-content-center\" href=\"index.html\">\n    <div class=\"sidebar-brand-icon rotate-n-15\">\n      <i class=\"fas fa-laugh-wink\"></i>\n    </div>\n    <div class=\"sidebar-brand-text mx-3\">Verkeertrainer</div>\n  </a>\n\n  <!-- Divider -->\n  <hr class=\"sidebar-divider my-0\">\n\n  <!-- Nav Item - Dashboard -->\n  <li class=\"nav-item active\">\n    <a class=\"nav-link\" href=\"index.html\">\n      <i class=\"fas fa-fw fa-tachometer-alt\"></i>\n      <span>Dashboard</span></a>\n  </li>\n\n  <!-- Divider -->\n  <hr class=\"sidebar-divider\">\n\n  <!-- Heading -->\n  <div class=\"sidebar-heading\">\n    Interface\n  </div>\n\n  <!-- Nav Item - Charts -->\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"/quiz\">\n      <i class=\"fas fa-fw fa-chart-area\"></i>\n      <span>Quiz</span></a>\n  </li>\n\n  <!-- Nav Item - Pages Collapse Menu -->\n  <li class=\"nav-item\">\n    <a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"true\" aria-controls=\"collapseTwo\">\n      <i class=\"fas fa-fw fa-cog\"></i>\n      <span>Components</span>\n    </a>\n    <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionSidebar\">\n      <div class=\"bg-white py-2 collapse-inner rounded\">\n        <h6 class=\"collapse-header\">Custom Components:</h6>\n        <a class=\"collapse-item\" href=\"buttons.html\">Buttons</a>\n        <a class=\"collapse-item\" href=\"cards.html\">Cards</a>\n      </div>\n    </div>\n  </li>\n\n  <!-- Nav Item - Utilities Collapse Menu -->\n  <li class=\"nav-item\">\n    <a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapseUtilities\" aria-expanded=\"true\" aria-controls=\"collapseUtilities\">\n      <i class=\"fas fa-fw fa-wrench\"></i>\n      <span>Utilities</span>\n    </a>\n    <div id=\"collapseUtilities\" class=\"collapse\" aria-labelledby=\"headingUtilities\" data-parent=\"#accordionSidebar\">\n      <div class=\"bg-white py-2 collapse-inner rounded\">\n        <h6 class=\"collapse-header\">Custom Utilities:</h6>\n        <a class=\"collapse-item\" href=\"utilities-color.html\">Colors</a>\n        <a class=\"collapse-item\" href=\"utilities-border.html\">Borders</a>\n        <a class=\"collapse-item\" href=\"utilities-animation.html\">Animations</a>\n        <a class=\"collapse-item\" href=\"utilities-other.html\">Other</a>\n      </div>\n    </div>\n  </li>\n\n  <!-- Divider -->\n  <hr class=\"sidebar-divider\">\n\n  <!-- Heading -->\n  <div class=\"sidebar-heading\">\n    Addons\n  </div>\n\n  <!-- Nav Item - Pages Collapse Menu -->\n  <li class=\"nav-item\">\n    <a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapsePages\" aria-expanded=\"true\" aria-controls=\"collapsePages\">\n      <i class=\"fas fa-fw fa-folder\"></i>\n      <span>Pages</span>\n    </a>\n    <div id=\"collapsePages\" class=\"collapse\" aria-labelledby=\"headingPages\" data-parent=\"#accordionSidebar\">\n      <div class=\"bg-white py-2 collapse-inner rounded\">\n        <h6 class=\"collapse-header\">Login Screens:</h6>\n        <a class=\"collapse-item\" routerLink=\"/login\">Login</a>\n        <a class=\"collapse-item\" routerLink=\"/register\">Register</a>\n        <!-- <a class=\"collapse-item\" href=\"forgot-password.html\">Forgot Password</a> -->\n        <div class=\"collapse-divider\"></div>\n        <h6 class=\"collapse-header\">Other Pages:</h6>\n        <a class=\"collapse-item\" href=\"404.html\">404 Page</a>\n        <a class=\"collapse-item\" href=\"blank.html\">Blank Page</a>\n      </div>\n    </div>\n  </li>\n\n  <!-- Nav Item - Charts -->\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" href=\"charts.html\">\n      <i class=\"fas fa-fw fa-chart-area\"></i>\n      <span>Charts</span></a>\n  </li>\n\n  <!-- Nav Item - Tables -->\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" href=\"tables.html\">\n      <i class=\"fas fa-fw fa-table\"></i>\n      <span>Tables</span></a>\n  </li>\n\n  <!-- Divider -->\n  <hr class=\"sidebar-divider d-none d-md-block\">\n\n  <!-- Sidebar Toggler (Sidebar) -->\n  <div class=\"text-center d-none d-md-inline\">\n    <button class=\"rounded-circle border-0\" id=\"sidebarToggle\"></button>\n  </div>\n\n</ul>\n<!-- End of Sidebar -->"

/***/ }),

/***/ "./src/app/main_layout/sidebar/sidebar.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/main_layout/sidebar/sidebar.component.ts ***!
  \**********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/main_layout/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/main_layout/sidebar/sidebar.component.css")]
        })
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/main_layout/topbar/messages/messages-dropdown.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/main_layout/topbar/messages/messages-dropdown.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5fbGF5b3V0L3RvcGJhci9tZXNzYWdlcy9tZXNzYWdlcy1kcm9wZG93bi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main_layout/topbar/messages/messages-dropdown.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/main_layout/topbar/messages/messages-dropdown.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "      <!-- Dropdown - Messages -->\n      <div class=\"dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in\" aria-labelledby=\"messagesDropdown\">\n        <h6 class=\"dropdown-header\">\n          Message Center\n        </h6>\n        <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n          <div class=\"dropdown-list-image mr-3\">\n            <img class=\"rounded-circle\" src=\"https://source.unsplash.com/fn_BT9fwg_E/60x60\" alt=\"\">\n            <div class=\"status-indicator bg-success\"></div>\n          </div>\n          <div class=\"font-weight-bold\">\n            <div class=\"text-truncate\">Hi there! I am wondering if you can help me with a problem I've been having.</div>\n            <div class=\"small text-gray-500\">Emily Fowler · 58m</div>\n          </div>\n        </a>\n        <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n          <div class=\"dropdown-list-image mr-3\">\n            <img class=\"rounded-circle\" src=\"https://source.unsplash.com/AU4VPcFN4LE/60x60\" alt=\"\">\n            <div class=\"status-indicator\"></div>\n          </div>\n          <div>\n            <div class=\"text-truncate\">I have the photos that you ordered last month, how would you like them sent to you?</div>\n            <div class=\"small text-gray-500\">Jae Chun · 1d</div>\n          </div>\n        </a>\n        <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n          <div class=\"dropdown-list-image mr-3\">\n            <img class=\"rounded-circle\" src=\"https://source.unsplash.com/CS2uCrpNzJY/60x60\" alt=\"\">\n            <div class=\"status-indicator bg-warning\"></div>\n          </div>\n          <div>\n            <div class=\"text-truncate\">Last month's report looks great, I am very happy with the progress so far, keep up the good work!</div>\n            <div class=\"small text-gray-500\">Morgan Alvarez · 2d</div>\n          </div>\n        </a>\n        <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n          <div class=\"dropdown-list-image mr-3\">\n            <img class=\"rounded-circle\" src=\"https://source.unsplash.com/Mv9hjnEUHR4/60x60\" alt=\"\">\n            <div class=\"status-indicator bg-success\"></div>\n          </div>\n          <div>\n            <div class=\"text-truncate\">Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...</div>\n            <div class=\"small text-gray-500\">Chicken the Dog · 2w</div>\n          </div>\n        </a>\n        <a class=\"dropdown-item text-center small text-gray-500\" href=\"#\">Read More Messages</a>\n      </div>"

/***/ }),

/***/ "./src/app/main_layout/topbar/messages/messages-dropdown.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/main_layout/topbar/messages/messages-dropdown.component.ts ***!
  \****************************************************************************/
/*! exports provided: MessagesDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesDropdownComponent", function() { return MessagesDropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MessagesDropdownComponent = /** @class */ (function () {
    function MessagesDropdownComponent() {
    }
    MessagesDropdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-messages-dropdown',
            template: __webpack_require__(/*! ./messages-dropdown.component.html */ "./src/app/main_layout/topbar/messages/messages-dropdown.component.html"),
            styles: [__webpack_require__(/*! ./messages-dropdown.component.css */ "./src/app/main_layout/topbar/messages/messages-dropdown.component.css")]
        })
    ], MessagesDropdownComponent);
    return MessagesDropdownComponent;
}());



/***/ }),

/***/ "./src/app/main_layout/topbar/topbar.component.css":
/*!*********************************************************!*\
  !*** ./src/app/main_layout/topbar/topbar.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5fbGF5b3V0L3RvcGJhci90b3BiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/main_layout/topbar/topbar.component.html":
/*!**********************************************************!*\
  !*** ./src/app/main_layout/topbar/topbar.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow\">\n\n  <!-- Sidebar Toggle (Topbar) -->\n  <button id=\"sidebarToggleTop\" class=\"btn btn-link d-md-none rounded-circle mr-3\">\n    <i class=\"fa fa-bars\"></i>\n  </button>\n\n  <!-- Topbar Search -->\n  <form class=\"d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search\">\n    <div class=\"input-group\">\n      <input type=\"text\" class=\"form-control bg-light border-0 small\" placeholder=\"Search for...\" aria-label=\"Search\" aria-describedby=\"basic-addon2\">\n      <div class=\"input-group-append\">\n        <button class=\"btn btn-primary\" type=\"button\">\n          <i class=\"fas fa-search fa-sm\"></i>\n        </button>\n      </div>\n    </div>\n  </form>\n\n  <!-- Topbar Navbar -->\n  <ul class=\"navbar-nav ml-auto\">\n\n    <!-- Nav Item - Search Dropdown (Visible Only XS) -->\n    <li class=\"nav-item dropdown no-arrow d-sm-none\">\n      <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"searchDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        <i class=\"fas fa-search fa-fw\"></i>\n      </a>\n      <!-- Dropdown - Messages -->\n      <div class=\"dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in\" aria-labelledby=\"searchDropdown\">\n        <form class=\"form-inline mr-auto w-100 navbar-search\">\n          <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control bg-light border-0 small\" placeholder=\"Search for...\" aria-label=\"Search\" aria-describedby=\"basic-addon2\">\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-primary\" type=\"button\">\n                <i class=\"fas fa-search fa-sm\"></i>\n              </button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </li>\n\n    <!-- Nav Item - Alerts -->\n    <li class=\"nav-item dropdown no-arrow mx-1\">\n      <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"alertsDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        <i class=\"fas fa-bell fa-fw\"></i>\n        <!-- Counter - Alerts -->\n        <span class=\"badge badge-danger badge-counter\">3+</span>\n      </a>\n      <!-- Dropdown - Alerts -->\n      <div class=\"dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in\" aria-labelledby=\"alertsDropdown\">\n        <h6 class=\"dropdown-header\">\n          Alerts Center\n        </h6>\n        <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n          <div class=\"mr-3\">\n            <div class=\"icon-circle bg-primary\">\n              <i class=\"fas fa-file-alt text-white\"></i>\n            </div>\n          </div>\n          <div>\n            <div class=\"small text-gray-500\">December 12, 2019</div>\n            <span class=\"font-weight-bold\">A new monthly report is ready to download!</span>\n          </div>\n        </a>\n        <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n          <div class=\"mr-3\">\n            <div class=\"icon-circle bg-success\">\n              <i class=\"fas fa-donate text-white\"></i>\n            </div>\n          </div>\n          <div>\n            <div class=\"small text-gray-500\">December 7, 2019</div>\n            $290.29 has been deposited into your account!\n          </div>\n        </a>\n        <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n          <div class=\"mr-3\">\n            <div class=\"icon-circle bg-warning\">\n              <i class=\"fas fa-exclamation-triangle text-white\"></i>\n            </div>\n          </div>\n          <div>\n            <div class=\"small text-gray-500\">December 2, 2019</div>\n            Spending Alert: We've noticed unusually high spending for your account.\n          </div>\n        </a>\n        <a class=\"dropdown-item text-center small text-gray-500\" href=\"#\">Show All Alerts</a>\n      </div>\n    </li>\n\n    <!-- Nav Item - Messages -->\n    <li class=\"nav-item dropdown no-arrow mx-1\">\n      <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"messagesDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        <i class=\"fas fa-envelope fa-fw\"></i>\n        <!-- Counter - Messages -->\n        <span class=\"badge badge-danger badge-counter\">7</span>\n      </a>\n      <app-messages-dropdown></app-messages-dropdown>\n    </li>\n\n    <div class=\"topbar-divider d-none d-sm-block\"></div>\n\n    <!-- Nav Item - User Information -->\n    <li class=\"nav-item dropdown no-arrow\">\n      <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"userDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        <span class=\"mr-2 d-none d-lg-inline text-gray-600 small\">Valerie Luna</span>\n        <img class=\"img-profile rounded-circle\" src=\"https://source.unsplash.com/QAB-WJcbgJk/60x60\">\n      </a>\n      <!-- Dropdown - User Information -->\n      <div class=\"dropdown-menu dropdown-menu-right shadow animated--grow-in\" aria-labelledby=\"userDropdown\">\n        <a class=\"dropdown-item\" href=\"#\">\n          <i class=\"fas fa-user fa-sm fa-fw mr-2 text-gray-400\"></i>\n          Profile\n        </a>\n        <a class=\"dropdown-item\" href=\"#\">\n          <i class=\"fas fa-cogs fa-sm fa-fw mr-2 text-gray-400\"></i>\n          Settings\n        </a>\n        <a class=\"dropdown-item\" href=\"#\">\n          <i class=\"fas fa-list fa-sm fa-fw mr-2 text-gray-400\"></i>\n          Activity Log\n        </a>\n        <div class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" href=\"#\" data-toggle=\"modal\" data-target=\"#logoutModal\">\n          <i class=\"fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400\"></i>\n          Logout\n        </a>\n      </div>\n    </li>\n\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/main_layout/topbar/topbar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/main_layout/topbar/topbar.component.ts ***!
  \********************************************************/
/*! exports provided: TopbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopbarComponent", function() { return TopbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TopbarComponent = /** @class */ (function () {
    function TopbarComponent() {
    }
    TopbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-topbar',
            template: __webpack_require__(/*! ./topbar.component.html */ "./src/app/main_layout/topbar/topbar.component.html"),
            styles: [__webpack_require__(/*! ./topbar.component.css */ "./src/app/main_layout/topbar/topbar.component.css")]
        })
    ], TopbarComponent);
    return TopbarComponent;
}());



/***/ }),

/***/ "./src/app/quiz/quiz.component.css":
/*!*****************************************!*\
  !*** ./src/app/quiz/quiz.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1aXovcXVpei5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/quiz/quiz.component.html":
/*!******************************************!*\
  !*** ./src/app/quiz/quiz.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n\n    <!-- Page Heading -->\n    <!-- <div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\n      <h1 class=\"h3 mb-0 text-gray-800\">Quiz</h1>\n   </div> -->\n    <div class=\"row\">\n      <app-quiz-box></app-quiz-box>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/quiz/quiz.component.ts":
/*!****************************************!*\
  !*** ./src/app/quiz/quiz.component.ts ***!
  \****************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var QuizComponent = /** @class */ (function () {
    function QuizComponent() {
    }
    QuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quiz',
            template: __webpack_require__(/*! ./quiz.component.html */ "./src/app/quiz/quiz.component.html"),
            styles: [__webpack_require__(/*! ./quiz.component.css */ "./src/app/quiz/quiz.component.css")]
        })
    ], QuizComponent);
    return QuizComponent;
}());



/***/ }),

/***/ "./src/app/quiz/quizbox/quizbox.component.css":
/*!****************************************************!*\
  !*** ./src/app/quiz/quizbox/quizbox.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".quizchoice:hover{\n    background-color:#36b9cc !important;\n    cursor: pointer;\n}\n\n.quizchoice:active{\n    background-color:#f6c23e !important;\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVpei9xdWl6Ym94L3F1aXpib3guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9DQUFvQztJQUNwQyxnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxvQ0FBb0M7SUFDcEMsZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvcXVpei9xdWl6Ym94L3F1aXpib3guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xdWl6Y2hvaWNlOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IzM2YjljYyAhaW1wb3J0YW50O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnF1aXpjaG9pY2U6YWN0aXZle1xuICAgIGJhY2tncm91bmQtY29sb3I6I2Y2YzIzZSAhaW1wb3J0YW50O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/quiz/quizbox/quizbox.component.html":
/*!*****************************************************!*\
  !*** ./src/app/quiz/quizbox/quizbox.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xl-9 col-lg-8\">\n    <div class=\"card shadow mb-4\">\n        <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\n            <h6 class=\"m-0 font-weight-bold text-primary\">Verkeersborden Quiz</h6>\n        </div>\n        <!-- Card Body -->\n        <div class=\"card-body\">\n\n            <div class=\"text-center\">\n                <img class=\"img-fluid px-3 px-sm-4 mt-3 mb-4\" style=\"width: 25rem;\" src=\"assets/img/undraw_posting_photo.svg\" alt=\"\">\n            </div>\n            <p>Wat is het volgende verkeersbord?</p>\n\n            <div class=\"row\">\n                <div class=\"col-lg-6 mb-4\">\n                    <div class=\"card bg-primary text-white shadow quizchoice\">\n                        <div class=\"card-body\">\n                            The possible answer could be a very long one.\n                            <div class=\"text-white-50 small\">#4e73df</div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-6 mb-4\">\n                    <div class=\"card bg-primary text-white shadow\">\n                    <div class=\"card-body\">\n                            The possible answer could be a very long one.\n                        <div class=\"text-white-50 small\">#1cc88a</div>\n                    </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-6 mb-4\">\n                    <div class=\"card bg-primary text-white shadow\">\n                    <div class=\"card-body\">\n                            The possible answer could be a very long one.\n                        <div class=\"text-white-50 small\">#36b9cc</div>\n                    </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-6 mb-4\">\n                    <div class=\"card bg-primary text-white shadow\">\n                    <div class=\"card-body\">\n                            The possible answer could be a very long one.\n                        <div class=\"text-white-50 small\">#f6c23e</div>\n                    </div>\n                    </div>\n                </div>\n            </div>\n\n                                  \n            <a href=\"#\" class=\"d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm\">A.<i class=\"fas fa-download fa-sm text-white-50\"></i> Possible answer could be very long</a>\n            <a href=\"#\" class=\"d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm\">B.<i class=\"fas fa-download fa-sm text-white-50\"></i> Possible answer could be very long</a>\n            <a href=\"#\" class=\"d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm\">C.<i class=\"fas fa-download fa-sm text-white-50\"></i> Possible answer could be very long</a>      \n\n            \n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/quiz/quizbox/quizbox.component.ts":
/*!***************************************************!*\
  !*** ./src/app/quiz/quizbox/quizbox.component.ts ***!
  \***************************************************/
/*! exports provided: QuizBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizBoxComponent", function() { return QuizBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var QuizBoxComponent = /** @class */ (function () {
    function QuizBoxComponent() {
    }
    QuizBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quiz-box',
            template: __webpack_require__(/*! ./quizbox.component.html */ "./src/app/quiz/quizbox/quizbox.component.html"),
            styles: [__webpack_require__(/*! ./quizbox.component.css */ "./src/app/quiz/quizbox/quizbox.component.css")]
        })
    ], QuizBoxComponent);
    return QuizBoxComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Register</h2>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html") })
    ], RegisterComponent);
    return RegisterComponent;
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

module.exports = __webpack_require__(/*! /Volumes/intensae/Works_Projects/verkeertrainer/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map