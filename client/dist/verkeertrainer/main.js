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

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>About page</h2>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html") })
    ], AboutComponent);
    return AboutComponent;
}());



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
/* harmony import */ var _services_traffic_signs_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/traffic-signs.service */ "./src/app/services/traffic-signs.service.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./quiz/quiz.component */ "./src/app/quiz/quiz.component.ts");
/* harmony import */ var _traffic_signs_traffic_signs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./traffic-signs/traffic-signs.component */ "./src/app/traffic-signs/traffic-signs.component.ts");
/* harmony import */ var _main_layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main_layout/sidebar/sidebar.component */ "./src/app/main_layout/sidebar/sidebar.component.ts");
/* harmony import */ var _main_layout_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./main_layout/topbar/topbar.component */ "./src/app/main_layout/topbar/topbar.component.ts");
/* harmony import */ var _main_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./main_layout/footer/footer.component */ "./src/app/main_layout/footer/footer.component.ts");
/* harmony import */ var _main_layout_modals_logout_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./main_layout/modals/logout-modal.component */ "./src/app/main_layout/modals/logout-modal.component.ts");
/* harmony import */ var _main_layout_topbar_messages_messages_dropdown_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./main_layout/topbar/messages/messages-dropdown.component */ "./src/app/main_layout/topbar/messages/messages-dropdown.component.ts");

// Framework modules




// Services

// Pages






// Main layout modules





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
                _traffic_signs_traffic_signs_component__WEBPACK_IMPORTED_MODULE_11__["TrafficSignsComponent"],
                _main_layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__["SidebarComponent"],
                _main_layout_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_13__["TopbarComponent"],
                _main_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                _main_layout_modals_logout_modal_component__WEBPACK_IMPORTED_MODULE_15__["LogoutModalComponent"],
                _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_10__["QuizComponent"],
                _main_layout_topbar_messages_messages_dropdown_component__WEBPACK_IMPORTED_MODULE_16__["MessagesDropdownComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [_services_traffic_signs_service__WEBPACK_IMPORTED_MODULE_5__["TrafficSignsService"]],
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
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quiz/quiz.component */ "./src/app/quiz/quiz.component.ts");
/* harmony import */ var _traffic_signs_traffic_signs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./traffic-signs/traffic-signs.component */ "./src/app/traffic-signs/traffic-signs.component.ts");







var routes = [
    { path: 'home', component: _home__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: 'trafficSigns', component: _traffic_signs_traffic_signs_component__WEBPACK_IMPORTED_MODULE_6__["TrafficSignsComponent"] },
    { path: 'trafficSigns/quiz/new', component: _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_5__["QuizComponent"] },
    { path: '**', redirectTo: 'trafficSigns' }
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

module.exports = "      <!-- Footer -->\n      <footer class=\"sticky-footer bg-white\">\n        <div class=\"container my-auto\">\n          <div class=\"copyright text-center my-auto\">\n            <span>Copyright &copy; Verkeertrainer 2019</span>\n          </div>\n        </div>\n      </footer>\n      <!-- End of Footer -->"

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

module.exports = ".disabled {\n    -webkit-text-decoration-line: line-through;\n    text-decoration-line: line-through;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbl9sYXlvdXQvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQ0FBMkM7SUFDM0MsbUNBQW1DO0NBQ3RDIiwiZmlsZSI6InNyYy9hcHAvbWFpbl9sYXlvdXQvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzYWJsZWQge1xuICAgIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLWxpbmU6IGxpbmUtdGhyb3VnaDtcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogbGluZS10aHJvdWdoO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/main_layout/sidebar/sidebar.component.html":
/*!************************************************************!*\
  !*** ./src/app/main_layout/sidebar/sidebar.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- Sidebar -->\n<ul class=\"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion\" id=\"accordionSidebar\">\n\n  <!-- Sidebar - Brand -->\n  <a class=\"sidebar-brand d-flex align-items-center justify-content-center\" routerLink=\"index\">\n    <div class=\"sidebar-brand-icon rotate-n-15\">\n      <i class=\"fas fa-laugh-wink\"></i>\n    </div>\n    <div class=\"sidebar-brand-text mx-3\">Verkeertrainer</div>\n  </a>\n\n  <!-- Divider -->\n  <hr class=\"sidebar-divider my-0\">\n\n  <!-- Nav Item - Dashboard -->\n  <li class=\"nav-item active\">\n    <a class=\"nav-link\" routerLink=\"/home\">\n      <i class=\"fas fa-fw fa-tachometer-alt\"></i>\n      <span>Dashboard</span></a>\n  </li>\n\n  <hr class=\"sidebar-divider\">\n  <div class=\"sidebar-heading\">    Verkeersborden  </div>\n\n  <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/trafficSigns\">\n        <i class=\"fas fa-fw fa-sign\"></i>\n        <span>Verkeersborden Overzicht</span></a>\n    </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"/trafficSigns/quiz/new\">\n      <i class=\"fas fa-fw fa-sign\"></i>\n      <span>Borden Quiz</span></a>\n  </li>\n\n  <hr class=\"sidebar-divider\">\n  <div class=\"sidebar-heading\"> Rijbewijs B </div>\n\n  <li class=\"nav-item\">\n      <a class=\"nav-link disabled\" href=\"#\">\n        <i class=\"fas fa-fw fa-car\"></i>\n        <span>Verkeersregels</span></a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">\n          <i class=\"fas fa-fw fa-car\"></i>\n          <span>Verkeersinzicht</span></a>\n      </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link disabled\" href=\"#\">\n            <i class=\"fas fa-fw fa-car\"></i>\n            <span>Gevaarherkenning</span></a>\n        </li>\n\n  <!-- Nav Item - Pages Collapse Menu -->\n  <li class=\"nav-item\">\n    <a class=\"nav-link collapsed\" routerLink=\"#\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"true\" aria-controls=\"collapseTwo\">\n      <i class=\"fas fa-fw fa-cog\"></i>\n      <span>Oefeningen</span>\n    </a>\n    <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionSidebar\">\n      <div class=\"bg-white py-2 collapse-inner rounded\">\n        <h6 class=\"collapse-header\">Rijbewijs B quiz:</h6>\n        <a class=\"collapse-item\" routerLink=\"buttons\">Nieuw</a>\n        <a class=\"collapse-item\" routerLink=\"cards\">Afgenomen toetsen</a>\n      </div>\n    </div>\n  </li>\n\n  <!-- Divider -->\n  <hr class=\"sidebar-divider d-none d-md-block\">\n\n  <li class=\"nav-item\">\n      <a class=\"nav-link \" routerLink=\"/about\">\n        <i class=\"fas fa-fw fa-info\"></i>\n        <span>Over</span></a>\n    </li>\n  <!-- Sidebar Toggler (Sidebar) -->\n  <div class=\"text-center d-none d-md-inline\">\n    <button class=\"rounded-circle border-0\" id=\"sidebarToggle\"></button>\n  </div>\n\n</ul>\n<!-- End of Sidebar -->"

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

module.exports = "<nav class=\"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow\">\n\n  <!-- Sidebar Toggle (Topbar) -->\n  <button id=\"sidebarToggleTop\" class=\"btn btn-link d-md-none rounded-circle mr-3\">\n    <i class=\"fa fa-bars\"></i>\n  </button>\n\n  <!-- Topbar Navbar -->\n  <ul class=\"navbar-nav ml-auto\">\n\n    <!-- Nav Item - Alerts -->\n    <li class=\"nav-item dropdown no-arrow mx-1\">\n      <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"alertsDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        <i class=\"fas fa-bell fa-fw\"></i>\n        <!-- Counter - Alerts -->\n        <span class=\"badge badge-danger badge-counter\">3+</span>\n      </a>\n      <!-- Dropdown - Alerts -->\n      <div class=\"dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in\" aria-labelledby=\"alertsDropdown\">\n        <h6 class=\"dropdown-header\">\n          Alerts Center\n        </h6>\n        <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n          <div class=\"mr-3\">\n            <div class=\"icon-circle bg-primary\">\n              <i class=\"fas fa-file-alt text-white\"></i>\n            </div>\n          </div>\n          <div>\n            <div class=\"small text-gray-500\">December 12, 2019</div>\n            <span class=\"font-weight-bold\">A new monthly report is ready to download!</span>\n          </div>\n        </a>\n        <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n          <div class=\"mr-3\">\n            <div class=\"icon-circle bg-success\">\n              <i class=\"fas fa-donate text-white\"></i>\n            </div>\n          </div>\n          <div>\n            <div class=\"small text-gray-500\">December 7, 2019</div>\n            $290.29 has been deposited into your account!\n          </div>\n        </a>\n        <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n          <div class=\"mr-3\">\n            <div class=\"icon-circle bg-warning\">\n              <i class=\"fas fa-exclamation-triangle text-white\"></i>\n            </div>\n          </div>\n          <div>\n            <div class=\"small text-gray-500\">December 2, 2019</div>\n            Spending Alert: We've noticed unusually high spending for your account.\n          </div>\n        </a>\n        <a class=\"dropdown-item text-center small text-gray-500\" href=\"#\">Show All Alerts</a>\n      </div>\n    </li>\n\n    <!-- Nav Item - Messages -->\n    <li class=\"nav-item dropdown no-arrow mx-1\">\n      <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"messagesDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        <i class=\"fas fa-envelope fa-fw\"></i>\n        <!-- Counter - Messages -->\n        <span class=\"badge badge-danger badge-counter\">7</span>\n      </a>\n      <app-messages-dropdown></app-messages-dropdown>\n    </li>\n\n    <div class=\"topbar-divider d-none d-sm-block\"></div>\n\n    <!-- Nav Item - User Information -->\n    <li class=\"nav-item dropdown no-arrow\">\n      <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"userDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        <span class=\"mr-2 d-none d-lg-inline text-gray-600 small\">Place Holder</span>\n        <img class=\"img-profile rounded-circle\" src=\"https://source.unsplash.com/ZRcXS-MOIeA/60x60\">\n      </a>\n      <!-- Dropdown - User Information -->\n      <div class=\"dropdown-menu dropdown-menu-right shadow animated--grow-in\" aria-labelledby=\"userDropdown\">\n        <a class=\"dropdown-item\" routerLink=\"#\">\n          <i class=\"fas fa-user fa-sm fa-fw mr-2 text-gray-400\"></i>\n          Profile\n        </a>\n        <a class=\"dropdown-item\" routerLink=\"#\">\n          <i class=\"fas fa-cogs fa-sm fa-fw mr-2 text-gray-400\"></i>\n          Settings\n        </a>\n        <a class=\"dropdown-item\" routerLink=\"#\">\n          <i class=\"fas fa-list fa-sm fa-fw mr-2 text-gray-400\"></i>\n          Activity Log\n        </a>\n        <div class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" routerLink=\"#\" data-toggle=\"modal\" data-target=\"#logoutModal\">\n          <i class=\"fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400\"></i>\n          Logout\n        </a>\n\n        <a class=\"dropdown-item\" routerLink=\"/login\">\n          <i class=\"fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400\"></i>\n          Login\n        </a>\n        \n        <a class=\"dropdown-item\" routerLink=\"/register\">\n          <i class=\"fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400\"></i>\n          Register\n        </a>\n      </div>\n    </li>\n  </ul>\n</nav>\n"

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

module.exports = ".quizOptionCard:hover{\n    /* background-color:#36b9cc !important; */\n    cursor: pointer;\n}\n\n.quizOptionCard:active{\n    background-color:#f6c23e !important;\n    cursor: pointer;\n}\n\n.quizBox {\n    left:auto;\n    right:auto;\n    margin:0 auto;\n}\n\n.quizzedTrafficSign {\n}\n\n.quizOptionIcon {\n    color: #ddd;\n}\n\n.card > .icon {\n    float:left;\n    padding:5px;\n    width:20px;\n}\n\n.card {\n    float: left;\n    min-height:50px;\n    display: inline;\n}\n\n.quizBoxBody {\n    background-color:#f8f9fc;\n}\n\n.quizOptionBox .card-body {\n    color: #333 !important;\n    background-color: #fff;\n    border: 1px solid white;\n    border-radius: 3px;\n    /* margin: 1px; */\n}\n\n.quizOptionBox .card-body:hover {\n    color: black !important;\n    /* background-color:#eeeeee; */\n    /* border: 1px solid black; */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVpei9xdWl6LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQ0FBMEM7SUFDMUMsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksb0NBQW9DO0lBQ3BDLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsY0FBYztDQUNqQjs7QUFFRDtDQUNDOztBQUNEO0lBQ0ksWUFBWTtDQUNmOztBQUVEO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0NBQ2Q7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLHlCQUF5QjtDQUM1Qjs7QUFFRDtJQUNJLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSx3QkFBd0I7SUFDeEIsK0JBQStCO0lBQy9CLDhCQUE4QjtDQUNqQyIsImZpbGUiOiJzcmMvYXBwL3F1aXovcXVpei5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnF1aXpPcHRpb25DYXJkOmhvdmVye1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IzM2YjljYyAhaW1wb3J0YW50OyAqL1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnF1aXpPcHRpb25DYXJkOmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmNmMyM2UgIWltcG9ydGFudDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5xdWl6Qm94IHtcbiAgICBsZWZ0OmF1dG87XG4gICAgcmlnaHQ6YXV0bztcbiAgICBtYXJnaW46MCBhdXRvO1xufVxuXG4ucXVpenplZFRyYWZmaWNTaWduIHtcbn1cbi5xdWl6T3B0aW9uSWNvbiB7XG4gICAgY29sb3I6ICNkZGQ7XG59XG5cbi5jYXJkID4gLmljb24ge1xuICAgIGZsb2F0OmxlZnQ7XG4gICAgcGFkZGluZzo1cHg7XG4gICAgd2lkdGg6MjBweDtcbn1cblxuLmNhcmQge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1pbi1oZWlnaHQ6NTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5xdWl6Qm94Qm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjhmOWZjO1xufVxuXG4ucXVpek9wdGlvbkJveCAuY2FyZC1ib2R5IHtcbiAgICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC8qIG1hcmdpbjogMXB4OyAqL1xufVxuXG4ucXVpek9wdGlvbkJveCAuY2FyZC1ib2R5OmhvdmVyIHtcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiNlZWVlZWU7ICovXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXG59Il19 */"

/***/ }),

/***/ "./src/app/quiz/quiz.component.html":
/*!******************************************!*\
  !*** ./src/app/quiz/quiz.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-xl-9 col-lg-8 quizBox\">\n        <div class=\"card shadow mb-4\">\n            <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\n                <h6 class=\"m-0 font-weight-bold text-primary\">Verkeersborden Quiz</h6>\n            </div>\n            <!-- Card Body -->\n            <div class=\"card-body quizBoxBody\">\n                <div class=\"text-center\">\n                    <img class=\"img-fluid px-3 px-sm-4 mt-3 mb-4 quizzedTrafficSign\" style=\"width: 25rem;\" src=\"assets/img/traffic_signs/{{currentSignImageFileName}}.png\" alt=\"\">\n                </div>\n                <p>Wat is de beschrijving van dit verkeersbord?</p>\n    \n                <div class=\"row\">\n                    <div class=\"col-lg-6 mb-4 quizOptionBox\" *ngFor=\"let quizOption of quizOptions; let i=index\">\n                        <div class=\"card bg-light quizOptionCard\">\n                            <span class=\"icon quizOptionIcon\"><i>{{i+1}}</i></span>\n                            <div class=\"card-body\" (click)=\"clickedAnswer()\">\n                                {{quizOption.description}}\n                            </div>\n                        </div>\n                    </div>\n                    <button *ngIf=\"showContinueButton\">Button here</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n    </div>\n  </div>"

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
/* harmony import */ var _services_traffic_signs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/traffic-signs.service */ "./src/app/services/traffic-signs.service.ts");



var QuizComponent = /** @class */ (function () {
    function QuizComponent(trafficSignsService) {
        this.trafficSignsService = trafficSignsService;
        this.quizOptionsAvailablePositions = [0, 1, 2, 3];
        this.showContinueButton = false;
    }
    QuizComponent.prototype.clickedAnswer = function () {
        var clickedSignCode = 'A1';
        var correct = this.checkAnswer(clickedSignCode);
        console.log('your answer is: ' + correct);
        this.feedbackTime();
    };
    QuizComponent.prototype.checkAnswer = function (clickedSignCode) {
        // throw new Error("Method not implemented.");
        if (clickedSignCode === this.correctSign.code) {
            return true;
        }
        else {
            return false;
        }
    };
    QuizComponent.prototype.feedbackTime = function () {
        var _this = this;
        this.showFeedback();
        console.log('let\'s wait, shall we?');
        setTimeout(function () { _this.newQuestion(); }, 4000);
    };
    QuizComponent.prototype.showFeedback = function () {
        this.showContinueButton = true;
    };
    QuizComponent.prototype.ngOnInit = function () {
        this.newQuestion();
    };
    QuizComponent.prototype.newQuestion = function () {
        this.showContinueButton = false;
        this.resetQuizOptionsAvailablePositions();
        this.quizOptions = [{ code: 'A1', description: 'A1.'
            }, { code: 'A2', description: 'A2.'
            }, { code: 'A3', description: 'A3.'
            }, { code: 'A4', description: 'A4.' }];
        this.setCorrectSignInQuizOptions();
        this.setIncorrectOptionInQuizOptions();
        this.setIncorrectOptionInQuizOptions();
        this.setIncorrectOptionInQuizOptions();
    };
    QuizComponent.prototype.resetQuizOptionsAvailablePositions = function () {
        this.quizOptionsAvailablePositions = [0, 1, 2, 3];
    };
    QuizComponent.prototype.setCorrectSignInQuizOptions = function () {
        var sign = this.setOptionInQuizOptions();
        this.correctSign = sign;
        this.currentSignImageFileName = sign.image.filename;
        console.log("correct sign is set!");
    };
    QuizComponent.prototype.setIncorrectOptionInQuizOptions = function () {
        this.setOptionInQuizOptions();
    };
    QuizComponent.prototype.setOptionInQuizOptions = function () {
        var currentSign = this.trafficSignsService.getRandomTrafficSign();
        var answerPosition = this.getUniqueRandomNumberBelow4();
        this.setSignAsOption(currentSign, answerPosition);
        return currentSign;
    };
    QuizComponent.prototype.setSignAsOption = function (sign, quizoptionsIndex) {
        console.log('setting to position: ' + quizoptionsIndex);
        this.quizOptions[quizoptionsIndex].description = sign.description;
        this.quizOptions[quizoptionsIndex].code = sign.code;
        this.removeFromAvailableOptionPositions(quizoptionsIndex);
    };
    QuizComponent.prototype.removeFromAvailableOptionPositions = function (quizoptionsIndex) {
        var indexInAvailablePositions = this.quizOptionsAvailablePositions.indexOf(quizoptionsIndex);
        if (!(indexInAvailablePositions === -1)) {
            this.quizOptionsAvailablePositions.splice(indexInAvailablePositions, 1);
        }
    };
    QuizComponent.prototype.getUniqueRandomNumberBelow4 = function () {
        var randomNumberAvailable = false;
        var randomNumber;
        this.isRandomNumberAvailableInQuizOptions(randomNumber);
        var i = 0;
        while (!randomNumberAvailable) {
            console.log('attempt' + ++i);
            randomNumber = this.getRandomNumberBelow4();
            randomNumberAvailable = this.isRandomNumberAvailableInQuizOptions(randomNumber);
        }
        return randomNumber;
    };
    QuizComponent.prototype.isRandomNumberAvailableInQuizOptions = function (randomNumber) {
        var randomNumberIndex = this.quizOptionsAvailablePositions.indexOf(randomNumber);
        var randomNumberNotPresent = randomNumberIndex === -1;
        if (randomNumberNotPresent) {
            return false;
        }
        else {
            return true;
        }
    };
    QuizComponent.prototype.getRandomNumberBelow4 = function () {
        var randomNumber = Math.floor(Math.random() * 4);
        return randomNumber;
    };
    QuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quiz',
            template: __webpack_require__(/*! ./quiz.component.html */ "./src/app/quiz/quiz.component.html"),
            styles: [__webpack_require__(/*! ./quiz.component.css */ "./src/app/quiz/quiz.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_traffic_signs_service__WEBPACK_IMPORTED_MODULE_2__["TrafficSignsService"]])
    ], QuizComponent);
    return QuizComponent;
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

/***/ "./src/app/services/traffic-signs.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/traffic-signs.service.ts ***!
  \***************************************************/
/*! exports provided: TrafficSignsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrafficSignsService", function() { return TrafficSignsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TrafficSignsService = /** @class */ (function () {
    function TrafficSignsService() {
        this.images_url_base = 'assets/img/traffic_signs/';
        this.trafficSignsSourceUrl = 'https://wetten.overheid.nl/BWBR0004825/2018-07-01';
    }
    TrafficSignsService.prototype.getTrafficSignsImagesUrlBase = function () {
        return this.images_url_base;
    };
    TrafficSignsService.prototype.getTrafficSigns = function () {
        return TRAFFIC_SIGNS;
    };
    TrafficSignsService.prototype.getTrafficSignsSourceUrl = function () {
        return this.trafficSignsSourceUrl;
    };
    TrafficSignsService.prototype.getRandomTrafficSign = function () {
        var random_number = Math.floor(Math.random() * (TRAFFIC_SIGNS.length));
        console.log(random_number);
        return TRAFFIC_SIGNS[random_number];
    };
    TrafficSignsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], TrafficSignsService);
    return TrafficSignsService;
}());

var TRAFFIC_SIGNS = [
    {
        code: 'A1',
        image: {
            filename: '27593'
        },
        description: 'Maximumsnelheid',
        category: 'Snelheid'
    },
    {
        code: 'A2',
        image: {
            filename: '27594'
        },
        description: 'Einde maximumsnelheid',
        category: 'Snelheid'
    },
    {
        code: 'A3',
        image: {
            filename: '27596'
        },
        description: 'Maximumsnelheid op een electronisch signaleringsbord',
        category: 'Snelheid'
    },
    {
        code: 'A4',
        image: {
            filename: '27597'
        },
        description: 'Adviessnelheid',
        category: 'Snelheid'
    },
    {
        code: 'A5',
        image: {
            filename: '27598'
        },
        description: 'Einde adviessnelheid',
        category: 'Snelheid'
    },
    {
        code: 'B1',
        image: {
            filename: '27599'
        },
        description: 'Voorrangsweg',
        category: 'Voorrang'
    },
    {
        code: 'B2',
        image: {
            filename: '27600'
        },
        description: 'Einde voorrangsweg',
        category: 'Voorrang'
    },
    {
        code: 'B3',
        image: {
            filename: '27601'
        },
        description: 'Voorrangskruispunt',
        category: 'Voorrang'
    },
    {
        code: 'B4',
        image: {
            filename: '27602'
        },
        description: 'Voorrangskruispunt Zijweg links',
        category: 'Voorrang'
    },
    {
        code: 'B5',
        image: {
            filename: '27603'
        },
        description: 'Voorrangskruispunt Zijweg rechts',
        category: 'Voorrang'
    },
    {
        code: 'B6',
        image: {
            filename: '27604'
        },
        description: 'Verleen voorrang aan bestuurders op de kruisende weg',
        category: 'Voorrang'
    },
    {
        code: 'B7',
        image: {
            filename: '27605'
        },
        description: 'Stop; verleen voorrang aan bestuurders op de kruisende weg',
        category: 'Voorrang'
    },
    {
        code: 'C1',
        image: {
            filename: '27606'
        },
        description: 'Gesloten in beide richtingen voor voertuigen, ruiters en geleiders van rij- of trekdieren of vee',
        category: 'Geslotenverklaring'
    },
    {
        code: 'C2',
        image: {
            filename: '27607'
        },
        description: 'Eenrichtingsweg, in deze richting gesloten voor voertuigen, ruiters en geleiders van rij- of trekdieren of vee',
        category: 'Geslotenverklaring'
    },
    {
        code: 'C3',
        image: {
            filename: '27608'
        },
        description: 'Eenrichtingsweg',
        category: 'Geslotenverklaring'
    },
    {
        code: 'C4',
        image: {
            filename: '27609'
        },
        description: 'Eenrichtingsweg',
        category: ''
    },
    {
        code: 'C5',
        image: {
            filename: '27610'
        },
        description: 'Inrijden toegestaan',
        category: 'Geslotenverklaring'
    },
    {
        code: 'C6',
        image: {
            filename: '27611'
        },
        description: 'Gesloten voor motorvoertuigen op meer dan twee wielen',
        category: 'Geslotenverklaring'
    },
    {
        code: 'C7',
        image: {
            filename: '27612'
        },
        description: 'Gesloten voor vrachtauto\'s',
        category: 'Geslotenverklaring'
    },
    {
        code: 'C7a',
        image: {
            filename: '246891'
        },
        description: 'Gesloten voor autobussen',
        category: 'Geslotenverklaring'
    },
    {
        code: 'C7b',
        image: {
            filename: '246892'
        },
        description: 'Gesloten voor autobussen en vrachtauto’s',
        category: 'Geslotenverklaring'
    },
    {
        code: 'C8',
        image: {
            filename: '27613'
        },
        description: 'Gesloten voor motorvoertuigen die niet sneller kunnen of mogen rijden dan 25 km/h',
        category: 'Geslotenverklaring'
    },
    {
        code: 'C9',
        image: {
            filename: '27614'
        },
        description: 'Gesloten voor ruiters, vee, wagens, motorvoertuigen die niet sneller kunnen of mogen rijden dan 25 km/h en brommobielen alsmede fietsen, bromfietsen en gehandicaptenvoertuigen',
        category: 'Geslotenverklaring'
    },
    {
        code: 'C10',
        image: {
            filename: '27615'
        },
        description: 'Gesloten voor motorvoertuigen met aanhangwagen',
        category: 'Geslotenverklaring'
    },
    {
        code: 'C11',
        image: {
            filename: '27616'
        },
        description: 'Gesloten voor motorfietsen',
        category: 'Geslotenverklaring'
    },
    {
        code: 'C12',
        image: {
            filename: '27617'
        },
        description: 'Gesloten voor alle motorvoertuigen',
        category: 'Geslotenverklaring'
    },
    {
        code: 'C13',
        image: {
            filename: '27618'
        },
        description: 'Gesloten voor bromfietsen, snorfietsen en gehandicaptenvoertuigen, met in werking zijnde motor',
        category: 'Geslotenverklaring'
    },
    {
        code: 'C14',
        image: {
            filename: '27619'
        },
        description: 'Gesloten voor fietsen en voor gehandicaptenvoertuigen zonder motor',
        category: 'Geslotenverklaring'
    },
    {
        code: 'C15',
        image: {
            filename: '27620'
        },
        description: 'Gesloten voor fietsen, bromfietsen en gehandicaptenvoertuigen',
        category: 'Geslotenverklaring'
    },
    {
        code: 'C16',
        image: {
            filename: '27621'
        },
        description: 'Gesloten voor voetgangers',
        category: 'Geslotenverklaring'
    },
    {
        code: 'C17',
        image: {
            filename: '27622'
        },
        description: 'Gesloten voor voertuigen en samenstellen van voertuigen die, met inbegrip van de lading, langer zijn dan op het bord is aangegeven',
        category: 'Geslotenverklaring'
    },
    {
        code: 'C18',
        image: {
            filename: '27623'
        },
        description: 'Gesloten voor voertuigen die, met inbegrip van de lading, breder zijn dan op het bord is aangegeven',
        category: 'Geslotenverklaring'
    },
    {
        code: 'C19',
        image: {
            filename: '27624'
        },
        description: 'Gesloten voor voertuigen die, met inbegrip van de lading, hoger zijn dan op het bord is aangegeven',
        category: 'Geslotenverklaring'
    },
    {
        code: 'C20',
        image: {
            filename: '27625'
        },
        description: 'Gesloten voor voertuigen waarvan de aslast hoger is dan op het bord is aangegeven',
        category: 'Geslotenverklaring'
    },
    {
        code: 'C21',
        image: {
            filename: '27626'
        },
        description: 'Gesloten voor voertuigen en samenstellen van voertuigen, waarvan de totaalmassa hoger is dan op het bord is aangegeven',
        category: 'Geslotenverklaring'
    },
    {
        code: 'C22',
        image: {
            filename: '27627'
        },
        description: 'Gesloten voor voertuigen met bepaalde gevaarlijke stoffen',
        category: 'Geslotenverklaring'
    },
    {
        code: 'C22a',
        image: {
            filename: '244282'
        },
        description: ' Gesloten voor vrachtauto’s die niet voldoen aan de eisen, genoemd in artikel 86d',
        category: 'Geslotenverklaring'
    },
    {
        code: 'C22b',
        image: {
            filename: '244283'
        },
        description: 'Einde geslotenverklaring voor vrachtauto’s die niet voldoen aan de eisen, genoemd in artikel 86d',
        category: 'Geslotenverklaring'
    },
    {
        code: 'C23-01',
        image: {
            filename: '53250'
        },
        description: 'Spitsstrook open',
        category: 'Geslotenverklaring'
    },
    {
        code: 'C23-02',
        image: {
            filename: '53251'
        },
        description: 'Spitsstrook vrijmaken ',
        category: 'Geslotenverklaring'
    },
    {
        code: 'C23-03',
        image: {
            filename: '53252'
        },
        description: 'Einde spitsstrook ',
        category: 'Geslotenverklaring'
    },
    {
        code: 'D1',
        image: {
            filename: '27628'
        },
        description: 'Rotonde; verplichte rijrichting',
        category: 'Rijrichting'
    },
    {
        code: 'D2',
        image: {
            filename: '27629'
        },
        description: 'Gebod voor alle bestuurders het bord voorbij te gaan aan de zijde die de pijl aangeeft',
        category: 'Rijrichting'
    },
    {
        code: 'D3',
        image: {
            filename: '27630'
        },
        description: 'Bord mag aan beide zijden worden voorbijgegaan',
        category: 'Rijrichting'
    },
    {
        code: 'D4',
        image: {
            filename: '27631'
        },
        description: 'Gebod tot het volgen van de rijrichting die op het bord is aangegeven',
        category: 'Rijrichting'
    },
    {
        code: 'D5',
        image: {
            filename: '27632'
        },
        description: 'Gebod tot het volgen van de rijrichting die op het bord is aangegeven',
        category: 'Rijrichting'
    },
    {
        code: 'D6',
        image: {
            filename: '27633'
        },
        description: 'Gebod tot het volgen van één van de rijrichtingen die op het bord zijn aangegeven',
        category: 'Rijrichting'
    },
    {
        code: 'D7',
        image: {
            filename: '27634'
        },
        description: 'Gebod tot het volgen van één van de rijrichtingen die op het bord zijn aangegeven',
        category: 'Rijrichting'
    },
    {
        code: 'E1',
        image: {
            filename: '27635'
        },
        description: 'Parkeerverbod',
        category: 'Parkeren en stilstaan'
    },
    {
        code: 'E2',
        image: {
            filename: '27636'
        },
        description: 'Verbod stil te staan',
        category: 'Parkeren en stilstaan'
    },
    {
        code: 'E3',
        image: {
            filename: '27637'
        },
        description: 'Verbod fietsen en bromfietsen te plaatsen',
        category: 'Parkeren en stilstaan'
    },
    {
        code: 'E4',
        image: {
            filename: '27638'
        },
        description: 'Parkeergelegenheid',
        category: 'Parkeren en stilstaan'
    },
    {
        code: 'E5',
        image: {
            filename: '27639'
        },
        description: 'Taxistandplaats',
        category: 'Parkeren en stilstaan'
    },
    {
        code: 'E6',
        image: {
            filename: '27640'
        },
        description: 'Gehandicaptenparkeerplaats',
        category: 'Parkeren en stilstaan'
    },
    {
        code: 'E7',
        image: {
            filename: '27641'
        },
        description: 'Gelegenheid bestemd voor het onmiddellijk laden en lossen van goederen',
        category: 'Parkeren en stilstaan'
    },
    {
        code: 'E8',
        image: {
            filename: '27642'
        },
        description: 'Parkeergelegenheid alleen bestemd voor de voertuigcategorie of groep voertuigen die op het bord is aangegeven',
        category: 'Parkeren en stilstaan'
    },
    {
        code: 'E9',
        image: {
            filename: '27643'
        },
        description: 'Parkeergelegenheid alleen bestemd voor vergunninghouders',
        category: 'Parkeren en stilstaan'
    },
    {
        code: 'E10',
        image: {
            filename: '27644'
        },
        description: 'Parkeerschijf-zone met verplicht gebruik van parkeerschijf, tevens parkeerverbod indien er langer wordt geparkeerd dan de parkeerduur die op het bord is aangegeven',
        category: 'Parkeren en stilstaan'
    },
    {
        code: 'E11',
        image: {
            filename: '27645'
        },
        description: 'Einde parkeerschijf-zone met verplicht gebruik van parkeerschijf',
        category: 'Parkeren en stilstaan'
    },
    {
        code: 'E12',
        image: {
            filename: '27646'
        },
        description: 'Parkeergelegenheid ten behoeve van overstappers op het openbaar vervoer',
        category: 'Parkeren en stilstaan'
    },
    {
        code: 'E13',
        image: {
            filename: '27647'
        },
        description: 'Parkeergelegenheid ten behoeve van carpoolers',
        category: 'Parkeren en stilstaan'
    },
    {
        code: 'F1',
        image: {
            filename: '27654'
        },
        description: 'Verbod voor motorvoertuigen om elkaar onderling in te halen',
        category: 'Overige geboden en verboden'
    },
    {
        code: 'F2',
        image: {
            filename: '27655'
        },
        description: 'Einde verbod voor motorvoertuigen om elkaar onderling in te halen',
        category: 'Overige geboden en verboden'
    },
    {
        code: 'F3',
        image: {
            filename: '27656'
        },
        description: 'Verbod voor vrachtauto\'s om motorvoertuigen in te halen',
        category: 'Overige geboden en verboden'
    },
    {
        code: 'F4',
        image: {
            filename: '27657'
        },
        description: 'Einde verbod voor vrachtauto\'s om motorvoertuigen in te halen',
        category: 'Overige geboden en verboden'
    },
    {
        code: 'F5',
        image: {
            filename: '27658'
        },
        description: 'Verbod voor bestuurders door te gaan bij nadering van verkeer uit tegengestelde richting',
        category: 'Overige geboden en verboden'
    },
    {
        code: 'F6',
        image: {
            filename: '27659'
        },
        description: 'Bestuurders uit tegengestelde richting moeten verkeer dat van deze richting nadert voor laten gaan',
        category: 'Overige geboden en verboden'
    },
    {
        code: 'F7',
        image: {
            filename: '27660'
        },
        description: 'Keerverbod',
        category: 'Overige geboden en verboden'
    },
    {
        code: 'F8',
        image: {
            filename: '27661'
        },
        description: 'Einde van alle door verkeersborden aangegeven verboden',
        category: 'Overige geboden en verboden'
    },
    {
        code: 'F9',
        image: {
            filename: '27663'
        },
        description: 'Einde van alle op een elektronisch signaleringsbord aangegeven verboden',
        category: 'Overige geboden en verboden'
    },
    {
        code: 'F10',
        image: {
            filename: '27664'
        },
        description: 'Stop. In het bord kan worden aangegeven door wie of waarom het bord wordt toegepast',
        category: 'Overige geboden en verboden'
    },
    {
        code: 'F11',
        image: {
            filename: '258559'
        },
        description: 'Verplicht gebruik passeerbaan of passeerstrook (rijbaan of -strook om ingehaald te kunnen worden), uitsluitend bestemd voor motorvoertuigen die niet sneller kunnen of mogen rijden dan 25 km/h',
        category: 'Overige geboden en verboden'
    },
    {
        code: 'F12',
        image: {
            filename: '258560'
        },
        description: 'Einde verplicht gebruik passeerbaan of passeerstrook voor motorvoertuigen die niet sneller kunnen of mogen rijden dan 25 km/h',
        category: 'Overige geboden en verboden'
    },
    {
        code: 'F13',
        image: {
            filename: '258561'
        },
        description: 'Rijbaan of -strook uitsluitend ten behoeve van lijnbussen',
        category: 'Overige geboden en verboden'
    },
    {
        code: 'F14',
        image: {
            filename: '258562'
        },
        description: 'Einde busbaan of -strook',
        category: 'Overige geboden en verboden'
    },
    {
        code: 'F15',
        image: {
            filename: '258563'
        },
        description: 'Rijbaan of -strook uitsluitend ten behoeve van trams',
        category: 'Overige geboden en verboden'
    },
    {
        code: 'F16',
        image: {
            filename: '258564'
        },
        description: 'Einde trambaan of -strook',
        category: 'Overige geboden en verboden'
    },
    {
        code: 'F17',
        image: {
            filename: '258565'
        },
        description: 'Rijbaan of -strook uitsluitend ten behoeve van lijnbussen en trams',
        category: 'Overige geboden en verboden'
    },
    {
        code: 'F18',
        image: {
            filename: '258566'
        },
        description: 'Einde bus- en trambaan of -strook',
        category: 'Overige geboden en verboden'
    },
    {
        code: 'F19',
        image: {
            filename: '258567'
        },
        description: 'Rijbaan of -strook uitsluitend ten behoeve van vrachtauto’s en lijnbussen',
        category: 'Overige geboden en verboden'
    },
    {
        code: 'F20',
        image: {
            filename: '258568'
        },
        description: 'Einde rijbaan of -strook voor vrachtauto’s en lijnbussen',
        category: 'Overige geboden en verboden'
    },
    {
        code: 'F21',
        image: {
            filename: '258569'
        },
        description: 'Rijbaan of -strook uitsluitend ten behoeve van vrachtauto’s',
        category: 'Overige geboden en verboden'
    },
    {
        code: 'F22',
        image: {
            filename: '258570'
        },
        description: 'Einde rijbaan of -strook voor vrachtauto’s',
        category: 'Overige geboden en verboden'
    },
    {
        code: 'G1',
        image: {
            filename: '27666'
        },
        description: 'Autosnelweg',
        category: 'Verkeersregels'
    },
    {
        code: 'G2',
        image: {
            filename: '27667'
        },
        description: 'Einde Autosnelweg',
        category: 'Verkeersregels'
    },
    {
        code: 'G3',
        image: {
            filename: '27668'
        },
        description: 'Autoweg',
        category: 'Verkeersregels'
    },
    {
        code: 'G4',
        image: {
            filename: '27670'
        },
        description: 'Einde autoweg',
        category: 'Verkeersregels'
    },
    {
        code: 'G5',
        image: {
            filename: '27672'
        },
        description: 'Erf',
        category: 'Verkeersregels'
    },
    {
        code: 'G6',
        image: {
            filename: '27673'
        },
        description: 'Einde erf',
        category: 'Verkeersregels'
    },
    {
        code: 'G7',
        image: {
            filename: '27675'
        },
        description: 'Voetpad',
        category: 'Verkeersregels'
    },
    {
        code: 'G8',
        image: {
            filename: '27677'
        },
        description: 'Einde voetpad',
        category: 'Verkeersregels'
    },
    {
        code: 'G9',
        image: {
            filename: '27678'
        },
        description: 'Ruiterpad',
        category: 'Verkeersregels'
    },
    {
        code: 'G10',
        image: {
            filename: '27679'
        },
        description: 'Einde ruiterpad',
        category: 'Verkeersregels'
    },
    {
        code: 'G11',
        image: {
            filename: '27680'
        },
        description: 'Verplicht fietspad',
        category: 'Verkeersregels'
    },
    {
        code: 'G12',
        image: {
            filename: '27681'
        },
        description: 'Einde verplicht fietspad',
        category: 'Verkeersregels'
    },
    {
        code: 'G12a',
        image: {
            filename: '29586'
        },
        description: 'Fiets/bromfietspad',
        category: 'Verkeersregels'
    },
    {
        code: 'G12b',
        image: {
            filename: '29587'
        },
        description: 'Einde fiets/bromfietspad',
        category: 'Verkeersregels'
    },
    {
        code: 'G13',
        image: {
            filename: '27682'
        },
        description: 'Onverplicht fietspad',
        category: 'Verkeersregels'
    },
    {
        code: 'G14',
        image: {
            filename: '27684'
        },
        description: 'Einde onverplicht fietspad',
        category: 'Verkeersregels'
    },
    {
        code: 'H1',
        image: {
            filename: '27685'
        },
        description: 'Bebouwde kom',
        category: 'Bebouwde kom'
    },
    {
        code: 'H2',
        image: {
            filename: '27686'
        },
        description: 'Einde bebouwde kom',
        category: 'Bebouwde kom'
    },
    {
        code: 'J1',
        image: {
            filename: '27688'
        },
        description: 'Slecht wegdek',
        category: 'Waarschuwing'
    },
    {
        code: 'J2',
        image: {
            filename: '27689'
        },
        description: 'Bocht naar rechts',
        category: 'Waarschuwing'
    },
    {
        code: 'J3',
        image: {
            filename: '27690'
        },
        description: 'Bocht naar links',
        category: 'Waarschuwing'
    },
    {
        code: 'J4',
        image: {
            filename: '27691'
        },
        description: 'S-bocht(en), eerst naar rechts',
        category: 'Waarschuwing'
    },
    {
        code: 'J5',
        image: {
            filename: '27692'
        },
        description: 'S-bocht(en), eerst naar links',
        category: 'Waarschuwing'
    },
    {
        code: 'J6',
        image: {
            filename: '27693'
        },
        description: 'Steile helling',
        category: 'Waarschuwing'
    },
    {
        code: 'J7',
        image: {
            filename: '27694'
        },
        description: 'Gevaarlijke daling',
        category: 'Waarschuwing'
    },
    {
        code: 'J8',
        image: {
            filename: '27695'
        },
        description: 'Gevaarlijk kruispunt',
        category: 'Waarschuwing'
    },
    {
        code: 'J9',
        image: {
            filename: '27697'
        },
        description: 'Rotonde',
        category: 'Waarschuwing'
    },
    {
        code: 'J10',
        image: {
            filename: '27698'
        },
        description: 'Overweg met slagbomen',
        category: 'Waarschuwing'
    },
    {
        code: 'J11',
        image: {
            filename: '27701'
        },
        description: 'Overweg zonder slagbomen',
        category: 'Waarschuwing'
    },
    {
        code: 'J12',
        image: {
            filename: '27702'
        },
        description: 'Overweg met enkel spoor',
        category: 'Waarschuwing'
    },
    {
        code: 'J13',
        image: {
            filename: '27703'
        },
        description: 'Overweg met twee of meer sporen',
        category: 'Waarschuwing'
    },
    {
        code: 'J14',
        image: {
            filename: '27704'
        },
        description: 'Tram(kruising)',
        category: 'Waarschuwing'
    },
    {
        code: 'J15',
        image: {
            filename: '27705'
        },
        description: 'Beweegbare brug',
        category: 'Waarschuwing'
    },
    {
        code: 'J16',
        image: {
            filename: '27707'
        },
        description: 'Werk in uitvoering',
        category: 'Waarschuwing'
    },
    {
        code: 'J17',
        image: {
            filename: '27708'
        },
        description: 'Rijbaanversmalling',
        category: 'Waarschuwing'
    },
    {
        code: 'J18',
        image: {
            filename: '27709'
        },
        description: 'Rijbaanversmalling rechts',
        category: 'Waarschuwing'
    },
    {
        code: 'J19',
        image: {
            filename: '27710'
        },
        description: 'Rijbaanversmalling links',
        category: 'Waarschuwing'
    },
    {
        code: 'J20',
        image: {
            filename: '27712'
        },
        description: 'Slipgevaar',
        category: 'Waarschuwing'
    },
    {
        code: 'J21',
        image: {
            filename: '27713'
        },
        description: 'Kinderen',
        category: 'Waarschuwing'
    },
    {
        code: 'J22',
        image: {
            filename: '27715'
        },
        description: 'Voetgangersoversteekplaats',
        category: 'Waarschuwing'
    },
    {
        code: 'J23',
        image: {
            filename: '27716'
        },
        description: 'Voetgangers',
        category: 'Waarschuwing'
    },
    {
        code: 'J24',
        image: {
            filename: '27718'
        },
        description: 'Fietsers en bromfietsers',
        category: 'Waarschuwing'
    },
    {
        code: 'J25',
        image: {
            filename: '27719'
        },
        description: 'Losliggende stenen',
        category: 'Waarschuwing'
    },
    {
        code: 'J26',
        image: {
            filename: '27720'
        },
        description: 'Kade of rivieroever',
        category: 'Waarschuwing'
    },
    {
        code: 'J27',
        image: {
            filename: '27721'
        },
        description: 'Groot wild',
        category: 'Waarschuwing'
    },
    {
        code: 'J28',
        image: {
            filename: '27722'
        },
        description: 'Vee',
        category: 'Waarschuwing'
    },
    {
        code: 'J29',
        image: {
            filename: '27723'
        },
        description: 'Tegenliggers',
        category: 'Waarschuwing'
    },
    {
        code: 'J30',
        image: {
            filename: '27725'
        },
        description: 'Laagvliegende vliegtuigen',
        category: 'Waarschuwing'
    },
    {
        code: 'J31',
        image: {
            filename: '27726'
        },
        description: 'Zijwind',
        category: 'Waarschuwing'
    },
    {
        code: 'J32',
        image: {
            filename: '27727'
        },
        description: 'Verkeerslichten',
        category: 'Waarschuwing'
    },
    {
        code: 'J33',
        image: {
            filename: '27728'
        },
        description: 'File',
        category: 'Waarschuwing'
    },
    {
        code: 'J34',
        image: {
            filename: '53258'
        },
        description: 'Ongeval',
        category: 'Waarschuwing'
    },
    {
        code: 'J35',
        image: {
            filename: '27729'
        },
        description: 'Slecht zicht door sneeuw, regen of mist',
        category: 'Waarschuwing'
    },
    {
        code: 'J36',
        image: {
            filename: '27730'
        },
        description: 'IJzel of sneeuw',
        category: 'Waarschuwing'
    },
    {
        code: 'J37',
        image: {
            filename: '27731'
        },
        description: 'Gevaar (de aard van het gevaar is aangegeven op het onderbord',
        category: 'Waarschuwing'
    },
    {
        code: 'J38',
        image: {
            filename: '69760'
        },
        description: 'Verkeersdrempel',
        category: 'Waarschuwing'
    },
    {
        code: 'J39',
        image: {
            filename: '250761'
        },
        description: 'Waarschuwing voor elektrische in- en uitschuifbare paal in de rijbaan (poller) waarmee toegankelijkheid van straten en gebieden kan worden geregeld.',
        category: 'Waarschuwing'
    },
    {
        code: 'K1',
        image: {
            filename: '27732'
        },
        description: 'Lage beslissingwegwijzer langs autosnelweg voor de doorgaande richting, met interlokale doelen en routenummer autosnelweg',
        category: 'Bewegwijzering'
    },
    {
        code: 'K2',
        image: {
            filename: '27733'
        },
        description: 'Voorwegwijzer langs autosnelweg voor de afgaande richting, met afstandaanduiding, afritnummer, interlokale doelen (bovenste doel = afritnaam), verwijzing naar vliegveld/luchthaven en routenummer niet-autosnelweg',
        category: 'Bewegwijzering'
    },
    {
        code: 'K3',
        image: {
            filename: '27734'
        },
        description: 'Beslissingswegwijzer langs autosnelweg voor de afgaande richting naar een verzorginsgsplaats, met de naam van de parkeerplaats en symbolen die de aard van de voorzieningen aangeven',
        category: 'Bewegwijzering'
    },
    {
        code: 'K4',
        image: {
            filename: '27735'
        },
        description: 'Hoge beslissingswegwijzer langs autosnelweg met rijstrookpaneel voor de doorgaande richting en aftakkingspaneel voor de afgaande richting, met interlokale doelen, routenummers autosnelwegen en Europese hoofdroutes',
        category: 'Bewegwijzering'
    },
    {
        code: 'K5',
        image: {
            filename: '27736'
        },
        description: 'Voorwegwijzer langs niet-autosnelweg, met interlokale doelen, routenummers, viaductsymbool en aanduiding industrieterrein',
        category: 'Bewegwijzering'
    },
    {
        code: 'K6',
        image: {
            filename: '27737'
        },
        description: 'Beslissingswegwijzer langs niet-autosnelweg met interlokale doelen en routenummer niet-autosnelweg',
        category: 'Bewegwijzering'
    },
    {
        code: 'K7',
        image: {
            filename: '27738'
        },
        description: 'Wegwijzer voor fietsers en bromfietsers (handwijzer), met lokaal doel, interlokaal doel, stedelijk fietsroutenummer (boven), en met interlokale doelen en interlokaal fietsroutenummer (onder)',
        category: 'Bewegwijzering'
    },
    {
        code: 'K8',
        image: {
            filename: '27739'
        },
        description: 'Wegwijzer voor fietsers en bromfietsers (stapelbord), met interlokale doelen en een via een alternatieve route te bereiken doel (cursief)',
        category: 'Bewegwijzering'
    },
    {
        code: 'K9',
        image: {
            filename: '27740'
        },
        description: 'Omleiding. Maatregel op voorwegwijzer langs niet-autosnelweg',
        category: 'Bewegwijzering'
    },
    {
        code: 'K10',
        image: {
            filename: '27741'
        },
        description: 'Voorwegwijzer binnen de bebouwde kom met interlokaal doel, lokaal doel, een dagrecreatiecentrum, objecten en stadsroutenummers',
        category: 'Bewegwijzering'
    },
    {
        code: 'K11',
        image: {
            filename: '27742'
        },
        description: 'Voorsorteren op niet-autosnelweg. Bord met interlokale doelen, routenummers en verwijzing naar autosnelweg',
        category: 'Bewegwijzering'
    },
    {
        code: 'K12',
        image: {
            filename: '27743'
        },
        description: 'Wijkwegwijzer binnen de bebouwde kom, met wijknamen (in verkeersgebieden)',
        category: 'Bewegwijzering'
    },
    {
        code: 'K13',
        image: {
            filename: '27744'
        },
        description: 'Wijkwegwijzer binnen de bebouwde kom, met wijknummers (in verkeersgebieden)',
        category: 'Bewegwijzering'
    },
    {
        code: 'K14',
        image: {
            filename: '27745'
        },
        description: 'Route voor het vervoer van bepaalde gevaarlijke stoffen',
        category: 'Bewegwijzering'
    },
    {
        code: 'L1',
        image: {
            filename: '27746'
        },
        description: 'Hoogte onderdoorgang',
        category: 'Informatie'
    },
    {
        code: 'L2',
        image: {
            filename: '27747'
        },
        description: 'Voetgangersoversteekplaats',
        category: 'Informatie'
    },
    {
        code: 'L3',
        image: {
            filename: '250762'
        },
        description: 'Bushalte / tramhalte',
        category: 'Informatie'
    },
    {
        code: 'L3',
        image: {
            filename: '250763'
        },
        description: 'Bushalte / tramhalte',
        category: 'Informatie'
    },
    {
        code: 'L3',
        image: {
            filename: '250764'
        },
        description: 'Bushalte / tramhalte',
        category: 'Informatie'
    },
    {
        code: 'L4',
        image: {
            filename: '27749'
        },
        description: 'Voorsorteren',
        category: 'Informatie'
    },
    {
        code: 'L5',
        image: {
            filename: '27750'
        },
        description: 'Einde rijstrook',
        category: 'Informatie'
    },
    {
        code: 'L6',
        image: {
            filename: '27751'
        },
        description: 'Splitsing',
        category: 'Informatie'
    },
    {
        code: 'L7',
        image: {
            filename: '27752'
        },
        description: 'Aantal doorgaande rijstroken',
        category: 'Informatie'
    },
    {
        code: 'L8',
        image: {
            filename: '27753'
        },
        description: 'Doodlopende weg',
        category: 'Informatie'
    },
    {
        code: 'L9',
        image: {
            filename: '27754'
        },
        description: 'Vooraanduiding doodlopende weg',
        category: 'Informatie'
    },
    {
        code: 'L10',
        image: {
            filename: '27755'
        },
        description: 'Vooraanduiding verkeersmaatregel voor de aangegeven richting',
        category: 'Informatie'
    },
    {
        code: 'L11',
        image: {
            filename: '27756'
        },
        description: 'Verkeersbord geldt alleen voor de aangegeven rijstrook/rijstroken',
        category: 'Informatie'
    },
    {
        code: 'L12',
        image: {
            filename: '27757'
        },
        description: 'Verkeersbord geldt alleen voor de aangegeven rijstrook',
        category: 'Informatie'
    },
    {
        code: 'L13',
        image: {
            filename: '239092'
        },
        description: 'Verkeerstunnel',
        category: 'Informatie'
    },
    {
        code: 'L14',
        image: {
            filename: '239093'
        },
        description: ' Vluchthaven',
        category: 'Informatie'
    },
    {
        code: 'L15',
        image: {
            filename: '239094'
        },
        description: ' Vluchthaven voorzien van een noodtelefoon en brandblusapparaat',
        category: 'Informatie'
    },
    {
        code: 'L16',
        image: {
            filename: '239095'
        },
        description: ' Noodtelefoon',
        category: 'Informatie'
    },
    {
        code: 'L17',
        image: {
            filename: '239096'
        },
        description: 'Brandblusapparaat',
        category: 'Informatie'
    },
    {
        code: 'L18',
        image: {
            filename: '239097'
        },
        description: 'Noodtelefoon en brandblusapparaat',
        category: 'Informatie'
    },
    {
        code: 'L19',
        image: {
            filename: '239098'
        },
        description: 'Dichtstbijzijnde uitgang of twee dichtstbijzijnde uitgangen in de op het bord aangegeven richting en afstand',
        category: 'Informatie'
    },
    {
        code: 'L20',
        image: {
            filename: '258571'
        },
        description: 'Uitwijkplaats rechts van de weg',
        category: 'Informatie'
    },
    {
        code: 'L21',
        image: {
            filename: '258572'
        },
        description: 'Uitwijkplaats links van de weg',
        category: 'Informatie'
    },
];


/***/ }),

/***/ "./src/app/traffic-signs/traffic-signs.component.css":
/*!***********************************************************!*\
  !*** ./src/app/traffic-signs/traffic-signs.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".traffic-sign {\n    margin:10px;\n    padding:10px;\n    /* color:white; */\n}\n\n.traffic-sign:hover { \n    cursor:pointer;\n    color:black;\n}\n\n.traffic-sign:active {\n    color:black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhZmZpYy1zaWducy90cmFmZmljLXNpZ25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLGVBQWU7SUFDZixZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxZQUFZO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC90cmFmZmljLXNpZ25zL3RyYWZmaWMtc2lnbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50cmFmZmljLXNpZ24ge1xuICAgIG1hcmdpbjoxMHB4O1xuICAgIHBhZGRpbmc6MTBweDtcbiAgICAvKiBjb2xvcjp3aGl0ZTsgKi9cbn1cblxuLnRyYWZmaWMtc2lnbjpob3ZlciB7IFxuICAgIGN1cnNvcjpwb2ludGVyO1xuICAgIGNvbG9yOmJsYWNrO1xufVxuXG4udHJhZmZpYy1zaWduOmFjdGl2ZSB7XG4gICAgY29sb3I6YmxhY2s7XG59Il19 */"

/***/ }),

/***/ "./src/app/traffic-signs/traffic-signs.component.html":
/*!************************************************************!*\
  !*** ./src/app/traffic-signs/traffic-signs.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <!-- Page Heading -->\n  <div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\n    <h1 class=\"h3 mb-0 text-gray-800\">Verkeersborden, {{TrafficSigns.length}} op deze pagina.</h1>\n    <a routerLink=\"/trafficSigns/quiz/new\" class=\"d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm\">\n      <i class=\"fas fa-traffic-light fa-sm text-white-50\"></i> Start BordenQuiz\n    </a>\n \n  </div>\n\n  <!-- Content Row -->\n  <div class=\"row\">\n      <div class=\"card traffic-sign\" style=\"width: 18rem;\" *ngFor=\"let trafficSign of TrafficSigns\">\n          <img class=\"card-img-top\" src=\"{{trafficSignImageUrlBase + trafficSign.image.filename + '.png'}}\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{trafficSign.title}}</h5>\n            <p class=\"card-text\">{{trafficSign.description}}</p>\n          </div>\n        </div>\n      </div>\n  <p>Source: {{signsSourceUrl}}.</p>\n</div>"

/***/ }),

/***/ "./src/app/traffic-signs/traffic-signs.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/traffic-signs/traffic-signs.component.ts ***!
  \**********************************************************/
/*! exports provided: TrafficSignsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrafficSignsComponent", function() { return TrafficSignsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_traffic_signs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/traffic-signs.service */ "./src/app/services/traffic-signs.service.ts");



var TrafficSignsComponent = /** @class */ (function () {
    function TrafficSignsComponent(trafficSignsService) {
        this.trafficSignsService = trafficSignsService;
    }
    TrafficSignsComponent.prototype.ngOnInit = function () {
        this.trafficSignImageUrlBase = this.trafficSignsService.getTrafficSignsImagesUrlBase();
        this.signsSourceUrl = this.trafficSignsService.getTrafficSignsSourceUrl();
        var response = this.trafficSignsService.getTrafficSigns();
        this.TrafficSigns = response;
    };
    TrafficSignsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: __webpack_require__(/*! ./traffic-signs.component.html */ "./src/app/traffic-signs/traffic-signs.component.html"), styles: [__webpack_require__(/*! ./traffic-signs.component.css */ "./src/app/traffic-signs/traffic-signs.component.css")] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_traffic_signs_service__WEBPACK_IMPORTED_MODULE_2__["TrafficSignsService"]])
    ], TrafficSignsComponent);
    return TrafficSignsComponent;
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