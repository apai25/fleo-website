(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-post-posts-module"],{

/***/ "6CJK":
/*!******************************************************************!*\
  !*** ./src/app/components/post/post-list/post-list.component.ts ***!
  \******************************************************************/
/*! exports provided: PostListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostListComponent", function() { return PostListComponent; });
/* harmony import */ var _raw_loader_post_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./post-list.component.html */ "lYst");
/* harmony import */ var _post_list_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-list.component.css */ "H+nJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../post.service */ "a90q");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/auth.service */ "8PDw");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PostListComponent = /** @class */ (function () {
    function PostListComponent(postService, auth) {
        this.postService = postService;
        this.auth = auth;
    }
    PostListComponent.prototype.ngOnInit = function () {
        console.log("loaded");
        this.posts = this.postService.getPosts();
    };
    PostListComponent.prototype.delete = function (id) {
        this.postService.delete(id);
    };
    PostListComponent.ctorParameters = function () { return [
        { type: _post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"] },
        { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
    ]; };
    PostListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-post-list',
            template: _raw_loader_post_list_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_post_list_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"], _core_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], PostListComponent);
    return PostListComponent;
}());



/***/ }),

/***/ "H+nJ":
/*!*******************************************************************!*\
  !*** ./src/app/components/post/post-list/post-list.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px,1fr));\n    grid-template-rows: auto;\n    grid-gap: 10px;\n    margin: 0 auto;\n    max-width: 90%;\n  }\n  mat-card {\n    margin: 10px 0;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLDBEQUEwRDtJQUMxRCx3QkFBd0I7SUFDeEIsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCIiwiZmlsZSI6InBvc3QtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LDFmcikpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgICBncmlkLWdhcDogMTBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXgtd2lkdGg6IDkwJTtcbiAgfVxuICBtYXQtY2FyZCB7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gIH1cbiAgIl19 */");

/***/ }),

/***/ "Q0cf":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/post/post-detail/post-detail.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"post\">\n\n\n    <div [hidden]=\"!editing\">\n      <mat-card>\n        <h1>Edit Post</h1>\n          <mat-form-field>\n            <input matInput placeholder=\"Post title\" [(ngModel)]=\"post.title\" name=\"title\">\n          </mat-form-field>\n          <br>\n          <mat-form-field>\n            <textarea matInput placeholder=\"Post content\" [(ngModel)]=\"post.content\" name=\"content\" rows=\"10\"></textarea>\n          </mat-form-field>\n          <br>\n          <button mat-raised-button (click)=\"updatePost()\" color=\"accent\">Save</button>\n          <button mat-button (click)=\"editing=false\" *ngIf=\"editing\">Cancel</button>\n    </mat-card>\n    </div>\n  \n    <div [hidden]=\"editing\">\n      <mat-card>\n        <img mat-card-image src=\"{{post.image}}\" alt=\"{{post.title}}\">\n        <h2>{{post.title}}</h2>\n        <p>\n          <small>Posted by {{post.author}} &bull; on {{post.published.toDate() | date:\"fullDate\"}}</small>\n        </p>\n        <mat-card-content>\n          <p>{{ post.content }}</p>\n        </mat-card-content>\n        <mat-card-actions align=\"end\" *ngIf=\"auth.currentUserId === post.authorId\">\n          <button mat-icon-button (click)=\"editing=true\">\n            <mat-icon>edit</mat-icon>\n          </button>\n          <button mat-icon-button (click)=\"delete(post.id)\">\n            <mat-icon>delete</mat-icon>\n          </button>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n  </ng-container>\n  ");

/***/ }),

/***/ "RQpc":
/*!*************************************************!*\
  !*** ./src/app/components/post/posts.module.ts ***!
  \*************************************************/
/*! exports provided: PostsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsModule", function() { return PostsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _post_dashboard_post_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post-dashboard/post-dashboard.component */ "ONMp");
/* harmony import */ var _post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post-detail/post-detail.component */ "ckNa");
/* harmony import */ var _post_list_post_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post-list/post-list.component */ "6CJK");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post.service */ "a90q");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var app_core_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/core/auth-guard.service */ "/vdw");
/* harmony import */ var _workshops_workshops_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../workshops/workshops.service */ "RS0p");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var routes = [
    { path: '', component: _post_list_post_list_component__WEBPACK_IMPORTED_MODULE_5__["PostListComponent"] },
    { path: 'dashboard', component: _post_dashboard_post_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["PostDashboardComponent"], canActivate: [app_core_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"]] },
    { path: ':id', component: _post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_4__["PostDetailComponent"] },
];
var PostsModule = /** @class */ (function () {
    function PostsModule() {
    }
    PostsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"]
            ],
            declarations: [
                _post_dashboard_post_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["PostDashboardComponent"],
                _post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_4__["PostDetailComponent"],
                _post_list_post_list_component__WEBPACK_IMPORTED_MODULE_5__["PostListComponent"]
            ],
            providers: [_post_service__WEBPACK_IMPORTED_MODULE_6__["PostService"], _workshops_workshops_service__WEBPACK_IMPORTED_MODULE_16__["WorkshopsService"]]
        })
    ], PostsModule);
    return PostsModule;
}());



/***/ }),

/***/ "baXX":
/*!***********************************************************************!*\
  !*** ./src/app/components/post/post-detail/post-detail.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card {\n    margin: 10px auto;\n    max-width: 700px;\n  }\n  mat-form-field {\n    width: 100%;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxXQUFXO0VBQ2IiLCJmaWxlIjoicG9zdC1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xuICB9XG4gIG1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAiXX0= */");

/***/ }),

/***/ "ckNa":
/*!**********************************************************************!*\
  !*** ./src/app/components/post/post-detail/post-detail.component.ts ***!
  \**********************************************************************/
/*! exports provided: PostDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDetailComponent", function() { return PostDetailComponent; });
/* harmony import */ var _raw_loader_post_detail_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./post-detail.component.html */ "Q0cf");
/* harmony import */ var _post_detail_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-detail.component.css */ "baXX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../post.service */ "a90q");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/auth.service */ "8PDw");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PostDetailComponent = /** @class */ (function () {
    function PostDetailComponent(route, router, postService, auth) {
        this.route = route;
        this.router = router;
        this.postService = postService;
        this.auth = auth;
        this.editing = false;
    }
    PostDetailComponent.prototype.ngOnInit = function () {
        console.log("detal loaded");
        this.getPost();
    };
    PostDetailComponent.prototype.getPost = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.postService.getPostData(id).subscribe(function (post) { return (_this.post = post); });
    };
    PostDetailComponent.prototype.updatePost = function () {
        var formData = {
            title: this.post.title,
            content: this.post.content
        };
        var id = this.route.snapshot.paramMap.get('id');
        this.postService.update(id, formData);
        this.editing = false;
    };
    PostDetailComponent.prototype.delete = function () {
        var id = this.route.snapshot.paramMap.get('id');
        this.postService.delete(id);
        this.router.navigate(['/blog']);
    };
    PostDetailComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"] },
        { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
    ]; };
    PostDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-post-detail',
            template: _raw_loader_post_detail_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_post_detail_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], PostDetailComponent);
    return PostDetailComponent;
}());



/***/ }),

/***/ "lYst":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/post/post-list/post-list.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n  <div fxLayout=\"column\" fxLayoutAlign=\"start start\">\n  <mat-card *ngFor=\"let post of posts | async\">\n    <mat-card-content routerLink=\"{{post.id}}\">\n      <img mat-card-image src=\"{{post.image}}\" alt=\"{{post.title}}\">\n      <h2>{{post.title}}</h2>\n      <p>\n        <small>Posted by {{post.author}} &bull; on {{post.published.toDate() | date:\"fullDate\"}}</small>\n      </p>\n    </mat-card-content>\n    <mat-card-actions align=\"end\" *ngIf=\"auth.currentUserId === post.authorId\">\n      <button mat-icon-button (click)=\"delete(post.id)\">\n        <mat-icon>delete</mat-icon>\n      </button>\n    </mat-card-actions>\n  </mat-card>\n</div>\n</section>\n");

/***/ })

}]);
//# sourceMappingURL=components-post-posts-module.js.map