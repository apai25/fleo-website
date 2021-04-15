(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+DhY":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _raw_loader_about_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./about.component.html */ "E9vc");
/* harmony import */ var _about_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.component.css */ "0Hey");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.ctorParameters = function () { return []; };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-about',
            template: _raw_loader_about_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_about_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/abhinavsrinivas/programming/projects/FLEO/src/main.ts */"zUnb");


/***/ }),

/***/ "0Hey":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".center {\n\tdisplay: block;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\twidth: 85%;\n }\n\n/* Reset */\n\n* { \n\t\tmargin: 0;\n\t\tpadding: 0;\n\t }\n\nhtml, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tborder: 0;\n\t\tfont-size: 100%;\n\t\tfont: inherit;\n\t\tvertical-align: baseline;\n\t}\n\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\n\t\tdisplay: block;\n\t}\n\nbody {\n\t\tline-height: 1;\n\t}\n\nol, ul {\n\t\tlist-style: none;\n\t}\n\nblockquote, q {\n\t\tquotes: none;\n\t}\n\nblockquote:before, blockquote:after, q:before, q:after {\n\t\tcontent: '';\n\t\tcontent: none;\n\t}\n\ntable {\n\t\tborder-collapse: collapse;\n\t\tborder-spacing: 0;\n\t}\n\nbody {\n\t\t-webkit-text-size-adjust: none;\n\t}\n\n/* Basic */\n\n@-ms-viewport {\n\t\twidth: device-width;\n\t}\n\nbody {\n\t\t-ms-overflow-style: scrollbar;\n\t}\n\n@media screen and (max-width: 480px) {\n\n\t\thtml, body {\n\t\t\tmin-width: 320px;\n\t\t}\n\n\t}\n\nbody {\n\t\tbackground: #fff;\n\t}\n\nbody.is-loading *, body.is-loading *:before, body.is-loading *:after {\n\t\t\t-webkit-animation: none !important;\n\t\t\tanimation: none !important;\n\t\t\ttransition: none !important;\n\t\t}\n\n/* Section/Article */\n\nsection.special, article.special {\n\t\ttext-align: center;\n\t}\n\nheader p {\n\t\tposition: relative;\n\t\tmargin: 0 0 1.5em 0;\n\t}\n\nheader h2 + p {\n\t\tfont-size: 1.25em;\n\t\tmargin-top: -1em;\n\t}\n\nheader h3 + p {\n\t\tfont-size: 1.1em;\n\t\tmargin-top: -0.8em;\n\t}\n\nheader h4 + p,\n\theader h5 + p,\n\theader h6 + p {\n\t\tfont-size: 0.9em;\n\t\tmargin-top: -0.6em;\n\t}\n\nheader p {\n\t\tcolor: #bbb;\n\t}\n\n/* Split */\n\n.split {\n\t\tdisplay: -moz-flex;\n\t\tdisplay: -ms-flex;\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t\tpadding-bottom: 2em;\n\t}\n\n.split > * {\n\t\t\twidth: 50%;\n\t\t}\n\n.split > *:nth-child(odd) {\n\t\t\t\tpadding-right: 3em;\n\t\t\t}\n\n.split > *:nth-child(even) {\n\t\t\t\tpadding-left: 3em;\n\t\t\t\tborder-left: solid 2px;\n\t\t\t}\n\n.split > * > :last-child,\n\t\t\t.split > * > :last-child > :last-child,\n\t\t\t.split > * > :last-child > :last-child > :last-child {\n\t\t\t\tmargin-bottom: 0;\n\t\t\t}\n\n@media screen and (max-width: 980px) {\n\n\t\t\t.split > :nth-child(odd) {\n\t\t\t\tpadding-right: 2em;\n\t\t\t}\n\n\t\t\t.split > :nth-child(even) {\n\t\t\t\tpadding-left: 2em;\n\t\t\t}\n\n\t\t}\n\n@media screen and (max-width: 736px) {\n\n\t\t\t.split {\n\t\t\t\tpadding-bottom: 0;\n\t\t\t}\n\n\t\t\t\t.split > * {\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\tmargin-bottom: 2em;\n\t\t\t\t}\n\n\t\t\t\t\t.split > *:nth-child(odd) {\n\t\t\t\t\t\tpadding-right: 0;\n\t\t\t\t\t}\n\n\t\t\t\t\t.split > *:nth-child(even) {\n\t\t\t\t\t\tborder-left: none;\n\t\t\t\t\t\tpadding-left: 0;\n\t\t\t\t\t}\n\n\t\t}\n\n.split > :nth-child(even) {\n\t\tborder-left-color: rgba(144, 144, 144, 0.25);\n\t}\n\n/* Banner */\n\n#banner {\n\n\t\tbackground-size: 100px 100px, cover;\n\t\tcolor: rgba(255, 255, 255, 0.5);\n\t\tpadding: 14em 0 4em;\n\t}\n\n#banner h2 {\n\t\t\tfont-size: 2.5em;\n\t\t\tline-height: 1.4;\n\t\t\tmargin-bottom: 0;\n\t\t\tcolor: #fff;\n\t\t}\n\n#banner p {\n\t\t\tfont-size: 1.15em;\n\t\t\tfont-weight: bold;\n\t\t\tline-height: 1.5em;\n\t\t\tmargin-bottom: 1.5em;\n\t\t}\n\n#banner > .inner {\n\t\t\tmargin-left: auto;\n\t\t\tmargin-right: auto;\n\t\t\tmax-width: 70em;\n\t\t\twidth: 100%;\n\t\t}\n\n@media screen and (max-width: 1366px) {\n\n\t\t\t#banner {\n\t\t\t\tpadding: 10em 2.5em 3em;\n\t\t\t}\n\n\t\t\t\t#banner h2 {\n\t\t\t\t\tfont-size: 2em;\n\t\t\t\t}\n\n\t\t}\n\n@media screen and (max-width: 980px) {\n\n\t\t\t#banner {\n\t\t\t\tpadding: 10em 2em 2em;\n\t\t\t}\n\n\t\t}\n\n@media screen and (max-width: 736px) {\n\n\t\t\t#banner {\n\t\t\t\tpadding: 8em 2em 2em;\n\t\t\t}\n\n\t\t\t\t#banner h2 {\n\t\t\t\t\tfont-size: 1.75em;\n\t\t\t\t}\n\n\t\t\t\t#banner p {\n\t\t\t\t\tfont-size: 1.1em;\n\t\t\t\t}\n\n\t\t}\n\n@media screen and (max-width: 480px) {\n\n\t\t\t#banner {\n\t\t\t\tpadding: 8em 2em 2em;\n\t\t\t}\n\n\t\t}\n\n/* Main */\n\n#main {\n\t\tpadding: 4em 0 2em 0;\n\t}\n\n@media screen and (max-width: 736px) {\n\n\t\t\t#main {\n\t\t\t\tpadding: 3em 0 1em 0;\n\t\t\t}\n\n\t\t}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxjQUFjO0NBQ2QsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1Y7O0FBRUQsVUFBVTs7QUFDUjtFQUNBLFNBQVM7RUFDVCxVQUFVO0VBQ1Y7O0FBRUQ7RUFDQyxTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2YsYUFBYTtFQUNiLHdCQUF3QjtDQUN6Qjs7QUFFQTtFQUNDLGNBQWM7Q0FDZjs7QUFFQTtFQUNDLGNBQWM7Q0FDZjs7QUFFQTtFQUNDLGdCQUFnQjtDQUNqQjs7QUFFQTtFQUNDLFlBQVk7Q0FDYjs7QUFFQTtFQUNDLFdBQVc7RUFDWCxhQUFhO0NBQ2Q7O0FBRUE7RUFDQyx5QkFBeUI7RUFDekIsaUJBQWlCO0NBQ2xCOztBQUVBO0VBQ0MsOEJBQThCO0NBQy9COztBQUdELFVBQVU7O0FBRVQ7RUFDQyxtQkFBbUI7Q0FDcEI7O0FBRUE7RUFDQyw2QkFBNkI7Q0FDOUI7O0FBRUE7O0VBRUM7R0FDQyxnQkFBZ0I7RUFDakI7O0NBRUQ7O0FBRUE7RUFDQyxnQkFBZ0I7Q0FDakI7O0FBRUM7R0FFQyxrQ0FBa0M7R0FFbEMsMEJBQTBCO0dBSTFCLDJCQUEyQjtFQUM1Qjs7QUFHRixvQkFBb0I7O0FBRW5CO0VBQ0Msa0JBQWtCO0NBQ25COztBQUVBO0VBQ0Msa0JBQWtCO0VBQ2xCLG1CQUFtQjtDQUNwQjs7QUFFQTtFQUNDLGlCQUFpQjtFQUNqQixnQkFBZ0I7Q0FDakI7O0FBRUE7RUFDQyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0NBQ25COztBQUVBOzs7RUFHQyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0NBQ25COztBQUVBO0VBQ0MsV0FBVztDQUNaOztBQUdELFVBQVU7O0FBRVQ7RUFDQyxrQkFBa0I7RUFFbEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFJYixlQUFlO0VBQ2YsbUJBQW1CO0NBQ3BCOztBQUVDO0dBQ0MsVUFBVTtFQUNYOztBQUVDO0lBQ0Msa0JBQWtCO0dBQ25COztBQUVBO0lBQ0MsaUJBQWlCO0lBQ2pCLHNCQUFzQjtHQUN2Qjs7QUFFQTs7O0lBR0MsZ0JBQWdCO0dBQ2pCOztBQUVEOztHQUVDO0lBQ0Msa0JBQWtCO0dBQ25COztHQUVBO0lBQ0MsaUJBQWlCO0dBQ2xCOztFQUVEOztBQUVBOztHQUVDO0lBQ0MsaUJBQWlCO0dBQ2xCOztJQUVDO0tBQ0MsV0FBVztLQUNYLGtCQUFrQjtJQUNuQjs7S0FFQztNQUNDLGdCQUFnQjtLQUNqQjs7S0FFQTtNQUNDLGlCQUFpQjtNQUNqQixlQUFlO0tBQ2hCOztFQUVIOztBQUVEO0VBQ0MsNENBQTRDO0NBQzdDOztBQUlELFdBQVc7O0FBRVY7O0VBRUMsbUNBQW1DO0VBQ25DLCtCQUErQjtFQUMvQixtQkFBbUI7Q0FDcEI7O0FBRUM7R0FDQyxnQkFBZ0I7R0FDaEIsZ0JBQWdCO0dBQ2hCLGdCQUFnQjtHQUNoQixXQUFXO0VBQ1o7O0FBRUE7R0FDQyxpQkFBaUI7R0FDakIsaUJBQWlCO0dBQ2pCLGtCQUFrQjtHQUNsQixvQkFBb0I7RUFDckI7O0FBRUE7R0FDQyxpQkFBaUI7R0FDakIsa0JBQWtCO0dBQ2xCLGVBQWU7R0FDZixXQUFXO0VBQ1o7O0FBRUE7O0dBRUM7SUFDQyx1QkFBdUI7R0FDeEI7O0lBRUM7S0FDQyxjQUFjO0lBQ2Y7O0VBRUY7O0FBRUE7O0dBRUM7SUFDQyxxQkFBcUI7R0FDdEI7O0VBRUQ7O0FBRUE7O0dBRUM7SUFDQyxvQkFBb0I7R0FDckI7O0lBRUM7S0FDQyxpQkFBaUI7SUFDbEI7O0lBRUE7S0FDQyxnQkFBZ0I7SUFDakI7O0VBRUY7O0FBRUE7O0dBRUM7SUFDQyxvQkFBb0I7R0FDckI7O0VBRUQ7O0FBRUYsU0FBUzs7QUFFUjtFQUNDLG9CQUFvQjtDQUNyQjs7QUFFQzs7R0FFQztJQUNDLG9CQUFvQjtHQUNyQjs7RUFFRCIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlciB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRtYXJnaW4tbGVmdDogYXV0bztcblx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xuXHR3aWR0aDogODUlO1xuIH1cblxuLyogUmVzZXQgKi9cbiBcdCogeyBcblx0XHRtYXJnaW46IDA7XG5cdFx0cGFkZGluZzogMDtcblx0IH1cblxuXHRodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSwgYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLCBkZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsIHNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsIGIsIHUsIGksIGNlbnRlciwgZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSwgZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsIHRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLCBhcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSwgdGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcblx0XHRtYXJnaW46IDA7XG5cdFx0cGFkZGluZzogMDtcblx0XHRib3JkZXI6IDA7XG5cdFx0Zm9udC1zaXplOiAxMDAlO1xuXHRcdGZvbnQ6IGluaGVyaXQ7XG5cdFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuXHR9XG5cblx0YXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0fVxuXG5cdGJvZHkge1xuXHRcdGxpbmUtaGVpZ2h0OiAxO1xuXHR9XG5cblx0b2wsIHVsIHtcblx0XHRsaXN0LXN0eWxlOiBub25lO1xuXHR9XG5cblx0YmxvY2txdW90ZSwgcSB7XG5cdFx0cXVvdGVzOiBub25lO1xuXHR9XG5cblx0YmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsIHE6YmVmb3JlLCBxOmFmdGVyIHtcblx0XHRjb250ZW50OiAnJztcblx0XHRjb250ZW50OiBub25lO1xuXHR9XG5cblx0dGFibGUge1xuXHRcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cdFx0Ym9yZGVyLXNwYWNpbmc6IDA7XG5cdH1cblxuXHRib2R5IHtcblx0XHQtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XG5cdH1cblxuXG4vKiBCYXNpYyAqL1xuXG5cdEAtbXMtdmlld3BvcnQge1xuXHRcdHdpZHRoOiBkZXZpY2Utd2lkdGg7XG5cdH1cblxuXHRib2R5IHtcblx0XHQtbXMtb3ZlcmZsb3ctc3R5bGU6IHNjcm9sbGJhcjtcblx0fVxuXG5cdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG5cblx0XHRodG1sLCBib2R5IHtcblx0XHRcdG1pbi13aWR0aDogMzIwcHg7XG5cdFx0fVxuXG5cdH1cblxuXHRib2R5IHtcblx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHR9XG5cblx0XHRib2R5LmlzLWxvYWRpbmcgKiwgYm9keS5pcy1sb2FkaW5nICo6YmVmb3JlLCBib2R5LmlzLWxvYWRpbmcgKjphZnRlciB7XG5cdFx0XHQtbW96LWFuaW1hdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuXHRcdFx0LXdlYmtpdC1hbmltYXRpb246IG5vbmUgIWltcG9ydGFudDtcblx0XHRcdC1tcy1hbmltYXRpb246IG5vbmUgIWltcG9ydGFudDtcblx0XHRcdGFuaW1hdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuXHRcdFx0LW1vei10cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XG5cdFx0XHQtd2Via2l0LXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcblx0XHRcdC1tcy10cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XG5cdFx0XHR0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XG5cdFx0fVxuXG5cbi8qIFNlY3Rpb24vQXJ0aWNsZSAqL1xuXG5cdHNlY3Rpb24uc3BlY2lhbCwgYXJ0aWNsZS5zcGVjaWFsIHtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdH1cblxuXHRoZWFkZXIgcCB7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdG1hcmdpbjogMCAwIDEuNWVtIDA7XG5cdH1cblxuXHRoZWFkZXIgaDIgKyBwIHtcblx0XHRmb250LXNpemU6IDEuMjVlbTtcblx0XHRtYXJnaW4tdG9wOiAtMWVtO1xuXHR9XG5cblx0aGVhZGVyIGgzICsgcCB7XG5cdFx0Zm9udC1zaXplOiAxLjFlbTtcblx0XHRtYXJnaW4tdG9wOiAtMC44ZW07XG5cdH1cblxuXHRoZWFkZXIgaDQgKyBwLFxuXHRoZWFkZXIgaDUgKyBwLFxuXHRoZWFkZXIgaDYgKyBwIHtcblx0XHRmb250LXNpemU6IDAuOWVtO1xuXHRcdG1hcmdpbi10b3A6IC0wLjZlbTtcblx0fVxuXG5cdGhlYWRlciBwIHtcblx0XHRjb2xvcjogI2JiYjtcblx0fVxuXG5cbi8qIFNwbGl0ICovXG5cblx0LnNwbGl0IHtcblx0XHRkaXNwbGF5OiAtbW96LWZsZXg7XG5cdFx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuXHRcdGRpc3BsYXk6IC1tcy1mbGV4O1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0LW1vei1mbGV4LXdyYXA6IHdyYXA7XG5cdFx0LXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XG5cdFx0LW1zLWZsZXgtd3JhcDogd3JhcDtcblx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0cGFkZGluZy1ib3R0b206IDJlbTtcblx0fVxuXG5cdFx0LnNwbGl0ID4gKiB7XG5cdFx0XHR3aWR0aDogNTAlO1xuXHRcdH1cblxuXHRcdFx0LnNwbGl0ID4gKjpudGgtY2hpbGQob2RkKSB7XG5cdFx0XHRcdHBhZGRpbmctcmlnaHQ6IDNlbTtcblx0XHRcdH1cblxuXHRcdFx0LnNwbGl0ID4gKjpudGgtY2hpbGQoZXZlbikge1xuXHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDNlbTtcblx0XHRcdFx0Ym9yZGVyLWxlZnQ6IHNvbGlkIDJweDtcblx0XHRcdH1cblxuXHRcdFx0LnNwbGl0ID4gKiA+IDpsYXN0LWNoaWxkLFxuXHRcdFx0LnNwbGl0ID4gKiA+IDpsYXN0LWNoaWxkID4gOmxhc3QtY2hpbGQsXG5cdFx0XHQuc3BsaXQgPiAqID4gOmxhc3QtY2hpbGQgPiA6bGFzdC1jaGlsZCA+IDpsYXN0LWNoaWxkIHtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMDtcblx0XHRcdH1cblxuXHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk4MHB4KSB7XG5cblx0XHRcdC5zcGxpdCA+IDpudGgtY2hpbGQob2RkKSB7XG5cdFx0XHRcdHBhZGRpbmctcmlnaHQ6IDJlbTtcblx0XHRcdH1cblxuXHRcdFx0LnNwbGl0ID4gOm50aC1jaGlsZChldmVuKSB7XG5cdFx0XHRcdHBhZGRpbmctbGVmdDogMmVtO1xuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpIHtcblxuXHRcdFx0LnNwbGl0IHtcblx0XHRcdFx0cGFkZGluZy1ib3R0b206IDA7XG5cdFx0XHR9XG5cblx0XHRcdFx0LnNwbGl0ID4gKiB7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMmVtO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuc3BsaXQgPiAqOm50aC1jaGlsZChvZGQpIHtcblx0XHRcdFx0XHRcdHBhZGRpbmctcmlnaHQ6IDA7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnNwbGl0ID4gKjpudGgtY2hpbGQoZXZlbikge1xuXHRcdFx0XHRcdFx0Ym9yZGVyLWxlZnQ6IG5vbmU7XG5cdFx0XHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDA7XG5cdFx0XHRcdFx0fVxuXG5cdFx0fVxuXG5cdC5zcGxpdCA+IDpudGgtY2hpbGQoZXZlbikge1xuXHRcdGJvcmRlci1sZWZ0LWNvbG9yOiByZ2JhKDE0NCwgMTQ0LCAxNDQsIDAuMjUpO1xuXHR9XG5cblxuXG4vKiBCYW5uZXIgKi9cblxuXHQjYmFubmVyIHtcblxuXHRcdGJhY2tncm91bmQtc2l6ZTogMTAwcHggMTAwcHgsIGNvdmVyO1xuXHRcdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG5cdFx0cGFkZGluZzogMTRlbSAwIDRlbTtcblx0fVxuXG5cdFx0I2Jhbm5lciBoMiB7XG5cdFx0XHRmb250LXNpemU6IDIuNWVtO1xuXHRcdFx0bGluZS1oZWlnaHQ6IDEuNDtcblx0XHRcdG1hcmdpbi1ib3R0b206IDA7XG5cdFx0XHRjb2xvcjogI2ZmZjtcblx0XHR9XG5cblx0XHQjYmFubmVyIHAge1xuXHRcdFx0Zm9udC1zaXplOiAxLjE1ZW07XG5cdFx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRcdGxpbmUtaGVpZ2h0OiAxLjVlbTtcblx0XHRcdG1hcmdpbi1ib3R0b206IDEuNWVtO1xuXHRcdH1cblxuXHRcdCNiYW5uZXIgPiAuaW5uZXIge1xuXHRcdFx0bWFyZ2luLWxlZnQ6IGF1dG87XG5cdFx0XHRtYXJnaW4tcmlnaHQ6IGF1dG87XG5cdFx0XHRtYXgtd2lkdGg6IDcwZW07XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHR9XG5cblx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzY2cHgpIHtcblxuXHRcdFx0I2Jhbm5lciB7XG5cdFx0XHRcdHBhZGRpbmc6IDEwZW0gMi41ZW0gM2VtO1xuXHRcdFx0fVxuXG5cdFx0XHRcdCNiYW5uZXIgaDIge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMmVtO1xuXHRcdFx0XHR9XG5cblx0XHR9XG5cblx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5ODBweCkge1xuXG5cdFx0XHQjYmFubmVyIHtcblx0XHRcdFx0cGFkZGluZzogMTBlbSAyZW0gMmVtO1xuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpIHtcblxuXHRcdFx0I2Jhbm5lciB7XG5cdFx0XHRcdHBhZGRpbmc6IDhlbSAyZW0gMmVtO1xuXHRcdFx0fVxuXG5cdFx0XHRcdCNiYW5uZXIgaDIge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMS43NWVtO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0I2Jhbm5lciBwIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDEuMWVtO1xuXHRcdFx0XHR9XG5cblx0XHR9XG5cblx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuXG5cdFx0XHQjYmFubmVyIHtcblx0XHRcdFx0cGFkZGluZzogOGVtIDJlbSAyZW07XG5cdFx0XHR9XG5cblx0XHR9XG5cbi8qIE1haW4gKi9cblxuXHQjbWFpbiB7XG5cdFx0cGFkZGluZzogNGVtIDAgMmVtIDA7XG5cdH1cblxuXHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNnB4KSB7XG5cblx0XHRcdCNtYWluIHtcblx0XHRcdFx0cGFkZGluZzogM2VtIDAgMWVtIDA7XG5cdFx0XHR9XG5cblx0XHR9XG4iXX0= */");

/***/ }),

/***/ "58ci":
/*!****************************************************!*\
  !*** ./src/app/components/team/team.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\n/* FontAwesome for working BootSnippet :> */\n#team {\n    background: #eee !important;\n}\n.btn-primary:hover,\n.btn-primary:focus {\n    background-color: #108d6f;\n    border-color: #108d6f;\n    box-shadow: none;\n    outline: none;\n}\n.btn-primary {\n    color: #fff;\n    background-color: #007b5e;\n    border-color: #007b5e;\n}\nsection {\n    padding: 60px 0;\n}\nsection .section-title {\n    text-align: center;\n    color: #007b5e;\n    margin-bottom: 50px;\n    text-transform: uppercase;\n}\n#team .card {\n    border: none;\n    background: #ffffff;\n}\n.frontside {\n    position: relative;\n\n    margin-bottom: 30px;\n}\n.frontside .card,\n.backside .card {\n    min-height: 312px;\n}\n.backside .card a {\n    font-size: 18px;\n    color: #007b5e !important;\n}\n.frontside .card .card-title,\n.backside .card .card-title {\n    color: #007b5e !important;\n}\n.frontside .card .card-body img {\n    width: 120px;\n    height: 120px;\n    border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLDBGQUEwRjtBQUYxRiwyQ0FBMkM7QUFHM0M7SUFDSSwyQkFBMkI7QUFDL0I7QUFFQTs7SUFFSSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCO0FBRUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxrQkFBa0I7O0lBRWxCLG1CQUFtQjtBQUN2QjtBQUVBOztJQUVJLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtBQUM3QjtBQUVBOztJQUVJLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7QUFDdEIiLCJmaWxlIjoidGVhbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRm9udEF3ZXNvbWUgZm9yIHdvcmtpbmcgQm9vdFNuaXBwZXQgOj4gKi9cblxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcycpO1xuI3RlYW0ge1xuICAgIGJhY2tncm91bmQ6ICNlZWUgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1wcmltYXJ5OmhvdmVyLFxuLmJ0bi1wcmltYXJ5OmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA4ZDZmO1xuICAgIGJvcmRlci1jb2xvcjogIzEwOGQ2ZjtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2I1ZTtcbiAgICBib3JkZXItY29sb3I6ICMwMDdiNWU7XG59XG5cbnNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDYwcHggMDtcbn1cblxuc2VjdGlvbiAuc2VjdGlvbi10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjMDA3YjVlO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuI3RlYW0gLmNhcmQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG4uZnJvbnRzaWRlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uZnJvbnRzaWRlIC5jYXJkLFxuLmJhY2tzaWRlIC5jYXJkIHtcbiAgICBtaW4taGVpZ2h0OiAzMTJweDtcbn1cblxuLmJhY2tzaWRlIC5jYXJkIGEge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogIzAwN2I1ZSAhaW1wb3J0YW50O1xufVxuXG4uZnJvbnRzaWRlIC5jYXJkIC5jYXJkLXRpdGxlLFxuLmJhY2tzaWRlIC5jYXJkIC5jYXJkLXRpdGxlIHtcbiAgICBjb2xvcjogIzAwN2I1ZSAhaW1wb3J0YW50O1xufVxuXG4uZnJvbnRzaWRlIC5jYXJkIC5jYXJkLWJvZHkgaW1nIHtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59Il19 */");

/***/ }),

/***/ "8PDw":
/*!**************************************!*\
  !*** ./src/app/core/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var AuthService = /** @class */ (function () {
    function AuthService(afAuth, router) {
        var _this = this;
        this.afAuth = afAuth;
        this.router = router;
        this.authState = null;
        this.availableEmails = ["iepicfellowkun@gmail.com", "abhisrin@gmail.com"];
        this.afAuth.authState.subscribe(function (data) { return _this.authState = data; });
        this.user = afAuth.authState;
    }
    Object.defineProperty(AuthService.prototype, "authenticated", {
        get: function () {
            return this.authState !== null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUserId", {
        get: function () {
            return this.authenticated ? this.authState.uid : null;
        },
        enumerable: false,
        configurable: true
    });
    AuthService.prototype.isLoggedIn = function () {
        return this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).toPromise();
    };
    AuthService.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.afAuth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_2__["default"].auth.GoogleAuthProvider()).then(function (res) {
                    _this.router.navigateByUrl('/blog');
                    localStorage.setItem("loggedin", "yes");
                }).catch(function (err) {
                    console.log(err);
                    alert(err);
                });
                return [2 /*return*/];
            });
        });
    };
    AuthService.prototype.logout = function () {
        console.log("logged out");
        this.afAuth.signOut();
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "93si":
/*!****************************************************!*\
  !*** ./src/app/components/components.component.ts ***!
  \****************************************************/
/*! exports provided: ComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsComponent", function() { return ComponentsComponent; });
/* harmony import */ var _raw_loader_components_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./components.component.html */ "NPo9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentsComponent = /** @class */ (function () {
    function ComponentsComponent(renderer) {
        this.renderer = renderer;
        this.page = 4;
        this.page1 = 5;
    }
    ComponentsComponent.prototype.isWeekend = function (date) {
        var d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    };
    ComponentsComponent.prototype.isDisabled = function (date, current) {
        return date.month !== current.month;
    };
    ComponentsComponent.prototype.ngOnInit = function () {
        var input_group_focus = document.getElementsByClassName('form-control');
        var input_group = document.getElementsByClassName('input-group');
        var _loop_1 = function (i) {
            input_group[i].children[0].addEventListener('focus', function () {
                input_group[i].classList.add('input-group-focus');
            });
            input_group[i].children[0].addEventListener('blur', function () {
                input_group[i].classList.remove('input-group-focus');
            });
        };
        for (var i = 0; i < input_group.length; i++) {
            _loop_1(i);
        }
    };
    ComponentsComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    ComponentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-components',
            template: _raw_loader_components_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: ["\n    ngb-progressbar {\n        margin-top: 5rem;\n    }\n    "]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], ComponentsComponent);
    return ComponentsComponent;
}());



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDE3bKu61QqpaAPFDKs2iKHEPusuEy17KQ",
        authDomain: "fleo-64bb8.firebaseapp.com",
        projectId: "fleo-64bb8",
        storageBucket: "fleo-64bb8.appspot.com",
        messagingSenderId: "273779445771",
        appId: "1:273779445771:web:2d360202a05d87b906770e",
        measurementId: "G-00KQ1CF16F"
    }
};


/***/ }),

/***/ "Cadm":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/team/team.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n\n<!-- Team -->\n<section id=\"team\" class=\"pb-5\">\n    <div class=\"container\">\n        <h1 class=\"section-title h1\">Our Team</h1>\n        <h2 class=\"section-title h2\">The Executive Board</h2>\n        <div class=\"row\">\n            <!-- Team member -->\n            <div class=\"col-xs-12 col-sm-6 col-md-4\">\n                <div class=\"image-flip\" >\n                    <div class=\"mainflip flip-0\">\n                        <div class=\"frontside\">\n                            <div class=\"card\">\n                                <div class=\"card-body text-center\">\n                                    <p><img class=\" img-fluid\" src=\"https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png\" alt=\"card image\"></p>\n                                    <h4 class=\"card-title\"><a href=\"https://www.linkedin.com/in/annikaseo/\">Annika Seo</a></h4>\n                                    <p class=\"card-text\">Chief Executive Officer</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- ./Team member -->\n            <!-- Team member -->\n            <div class=\"col-xs-12 col-sm-6 col-md-4\">\n                <div class=\"image-flip\" ontouchstart=\"this.classList.toggle('hover');\">\n                    <div class=\"mainflip\">\n                        <div class=\"frontside\">\n                            <div class=\"card\">\n                                <div class=\"card-body text-center\">\n                                    <p><img class=\" img-fluid\" src=\"https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_02.png\" alt=\"card image\"></p>\n                                    <h4 class=\"card-title\">Sunlimetech</h4>\n                                    <p class=\"card-text\">This is basic card with image on top, title, description and button.</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- ./Team member -->\n            <!-- Team member -->\n            <div class=\"col-xs-12 col-sm-6 col-md-4\">\n                <div class=\"image-flip\" ontouchstart=\"this.classList.toggle('hover');\">\n                    <div class=\"mainflip\">\n                        <div class=\"frontside\">\n                            <div class=\"card\">\n                                <div class=\"card-body text-center\">\n                                    <p><img class=\" img-fluid\" src=\"https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_03.png\" alt=\"card image\"></p>\n                                    <h4 class=\"card-title\">Sunlimetech</h4>\n                                    <p class=\"card-text\">This is basic card with image on top, title, description and button.</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- ./Team member -->\n            <!-- Team member -->\n            <div class=\"col-xs-12 col-sm-6 col-md-4\">\n                <div class=\"image-flip\" ontouchstart=\"this.classList.toggle('hover');\">\n                    <div class=\"mainflip\">\n                        <div class=\"frontside\">\n                            <div class=\"card\">\n                                <div class=\"card-body text-center\">\n                                    <p><img class=\" img-fluid\" src=\"https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_04.jpg\" alt=\"card image\"></p>\n                                    <h4 class=\"card-title\">Sunlimetech</h4>\n                                    <p class=\"card-text\">This is basic card with image on top, title, description and button.</p>\n                                </div>\n                            </div>\n                        </div>\n                    \n                    </div>\n                </div>\n            </div>\n            <!-- ./Team member -->\n            <!-- Team member -->\n            <div class=\"col-xs-12 col-sm-6 col-md-4\">\n                <div class=\"image-flip\" ontouchstart=\"this.classList.toggle('hover');\">\n                    <div class=\"mainflip\">\n                        <div class=\"frontside\">\n                            <div class=\"card\">\n                                <div class=\"card-body text-center\">\n                                    <p><img class=\" img-fluid\" src=\"https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_05.png\" alt=\"card image\"></p>\n                                    <h4 class=\"card-title\">Sunlimetech</h4>\n                                    <p class=\"card-text\">This is basic card with image on top, title, description and button.</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- ./Team member -->\n            <!-- Team member -->\n            <div class=\"col-xs-12 col-sm-6 col-md-4\">\n                <div class=\"image-flip\" ontouchstart=\"this.classList.toggle('hover');\">\n                    <div class=\"mainflip\">\n                        <div class=\"frontside\">\n                            <div class=\"card\">\n                                <div class=\"card-body text-center\">\n                                    <p><img class=\" img-fluid\" src=\"https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_06.jpg\" alt=\"card image\"></p>\n                                    <h4 class=\"card-title\">Sunlimetech</h4>\n                                    <p class=\"card-text\">This is basic card with image on top, title, description and button.</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- ./Team member -->\n            <div class=\"col-xs-12 col-sm-6 col-md-4\">\n                <div class=\"image-flip\" ontouchstart=\"this.classList.toggle('hover');\">\n                    <div class=\"mainflip\">\n                        <div class=\"frontside\">\n                            <div class=\"card\">\n                                <div class=\"card-body text-center\">\n                                    <p><img class=\" img-fluid\" src=\"https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_02.png\" alt=\"card image\"></p>\n                                    <h4 class=\"card-title\">Sunlimetech</h4>\n                                    <p class=\"card-text\">This is basic card with image on top, title, description and button.</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- ./Team member -->\n            <!-- Team member -->\n            <div class=\"col-xs-12 col-sm-6 col-md-4\">\n                <div class=\"image-flip\" ontouchstart=\"this.classList.toggle('hover');\">\n                    <div class=\"mainflip\">\n                        <div class=\"frontside\">\n                            <div class=\"card\">\n                                <div class=\"card-body text-center\">\n                                    <p><img class=\" img-fluid\" src=\"https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_03.png\" alt=\"card image\"></p>\n                                    <h4 class=\"card-title\">Sunlimetech</h4>\n                                    <p class=\"card-text\">This is basic card with image on top, title, description and button.</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- ./Team member -->\n            <!-- Team member -->\n            <div class=\"col-xs-12 col-sm-6 col-md-4\">\n                <div class=\"image-flip\" ontouchstart=\"this.classList.toggle('hover');\">\n                    <div class=\"mainflip\">\n                        <div class=\"frontside\">\n                            <div class=\"card\">\n                                <div class=\"card-body text-center\">\n                                    <p><img class=\" img-fluid\" src=\"https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_04.jpg\" alt=\"card image\"></p>\n                                    <h4 class=\"card-title\">Sunlimetech</h4>\n                                    <p class=\"card-text\">This is basic card with image on top, title, description and button.</p>\n                                </div>\n                            </div>\n                        </div>\n                    \n                    </div>\n                </div>\n            </div>\n            <!-- ./Team member -->\n            <!-- Team member -->\n            <div class=\"col-xs-12 col-sm-6 col-md-4\">\n                <div class=\"image-flip\" ontouchstart=\"this.classList.toggle('hover');\">\n                    <div class=\"mainflip\">\n                        <div class=\"frontside\">\n                            <div class=\"card\">\n                                <div class=\"card-body text-center\">\n                                    <p><img class=\" img-fluid\" src=\"https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_05.png\" alt=\"card image\"></p>\n                                    <h4 class=\"card-title\">Sunlimetech</h4>\n                                    <p class=\"card-text\">This is basic card with image on top, title, description and button.</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- ./Team member -->\n            <!-- Team member -->\n            <div class=\"col-xs-12 col-sm-6 col-md-4\">\n                <div class=\"image-flip\" ontouchstart=\"this.classList.toggle('hover');\">\n                    <div class=\"mainflip\">\n                        <div class=\"frontside\">\n                            <div class=\"card\">\n                                <div class=\"card-body text-center\">\n                                    <p><img class=\" img-fluid\" src=\"https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_06.jpg\" alt=\"card image\"></p>\n                                    <h4 class=\"card-title\">Sunlimetech</h4>\n                                    <p class=\"card-text\">This is basic card with image on top, title, description and button.</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- Team -->");

/***/ }),

/***/ "E9vc":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<section id=\"banner\" style=\"background-color: rgb(72, 72, 72);\">\n  <div class=\"inner split\">\n    <section>\n      <h2>Our Mission</h2>\n    </section>\n    <section>\n      <p>To offer every student the opportunity regardless of ethnicity, race, socioeconomic status, gender, exceptionalities, language, religion, sexual orientation, and geographical area to become financially literate.</p>\n    </section>\n  </div>\n</section>\n\n<section id=\"banner\" class=\"wrapper\">\n  <div class=\"inner split\">\n    <section>\n      <p style=\"color: black;\">To offer every student the opportunity regardless of ethnicity, race, socioeconomic status, gender, exceptionalities, language, religion, sexual orientation, and geographical area to become financially literate.</p>\n\n    </section>\n    <section>\n      <h2 style=\"color: black;\">Our Vision</h2>\n    </section>\n  </div>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <h1 style=\"text-align: center; color: black; font-size: 50px; line-height:60px\"><b>Team Member Locations</b></h1>\n  <br>\n  <br>\n  <img class=\"center\" src=\"../../../assets/img/fleomap.png\">\n</section>\n\n\n");

/***/ }),

/***/ "EtQq":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "zRkE");
/* harmony import */ var _navbar_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.component.css */ "cIR/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var app_core_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/core/auth.service */ "8PDw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element, authService, router) {
        this.location = location;
        this.element = element;
        this.authService = authService;
        this.router = router;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.isHome = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        if (titlee === '/home') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.isDocumentation = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        if (titlee === '/') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.isLoggedIn = function () {
        var x = localStorage.getItem("loggedin");
        if (x) {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.logout = function () {
        this.authService.logout();
        localStorage.removeItem("loggedin");
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: app_core_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-navbar',
            template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_navbar_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], app_core_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "NPo9":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/components.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "O5bD":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-header\" data-parallax=\"true\" style=\"background-image: url('../../../assets/img/loginback.jpg');\" >\n  <div class=\"demo\">\n    <div class=\"login\">\n      <div class=\"login__check\"></div>\n      <div class=\"login__form\">\n        <div class=\"login__row\">\n          <svg class=\"login__icon name svg-icon\" viewBox=\"0 0 20 20\">\n            <path d=\"M0,20 a10,8 0 0,1 20,0z M10,0 a4,4 0 0,1 0,8 a4,4 0 0,1 0,-8\" />\n          </svg>\n          <input type=\"password\" class=\"login__input pass\" placeholder=\"Admin Pin\" [(ngModel)]=\"adminpin\" />\n          <button type=\"button\" class=\"login__submit\" (click)=\"Login()\" >Sign in with Google</button>\n        </div>\n      </div>\n    </div>\n    \n</div>");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/filter */ "fjAU");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "EtQq");
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
    function AppComponent(renderer, router, document, element, location) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; }).subscribe(function (event) {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }
            else {
                window.document.activeElement.scrollTop = 0;
            }
            _this.navbar.sidebarClose();
        });
        this.renderer.listen('window', 'scroll', function (event) {
            var number = window.scrollY;
            if (number > 150 || window.pageYOffset > 150) {
                // add logic
                navbar.classList.remove('navbar-transparent');
            }
            else {
                // remove logic
                navbar.classList.add('navbar-transparent');
            }
        });
        var ua = window.navigator.userAgent;
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        if (version) {
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('ie-background');
        }
    };
    AppComponent.prototype.removeFooter = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (titlee === 'login' || titlee === 'nucleoicons') {
            return false;
        }
        else {
            return true;
        }
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
    ]; };
    AppComponent.propDecorators = {
        navbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],] }]
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer *ngIf=\"removeFooter()\"></app-footer>\n");

/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./login.component.html */ "O5bD");
/* harmony import */ var _login_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.scss */ "Yz0z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_core_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/auth.service */ "8PDw");
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
    function LoginComponent(authService) {
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.Login = function () {
        if (this.adminpin == "123456") {
            this.authService.login();
        }
        else {
            alert("pin incorrect");
        }
    };
    LoginComponent.ctorParameters = function () { return [
        { type: app_core_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_core_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "Whhu":
/*!*************************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lcGFnZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "Yz0z":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*, *:before, *:after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml, body {\n  font-size: 62.5%;\n  height: 100%;\n  overflow: hidden;\n}\n\n@media (max-width: 768px) {\n  html, body {\n    font-size: 50%;\n  }\n}\n\nsvg {\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  overflow: visible;\n}\n\n.svg-icon {\n  cursor: pointer;\n}\n\n.svg-icon path {\n  stroke: rgba(255, 255, 255, 0.9);\n  fill: none;\n  stroke-width: 1;\n}\n\ninput, button {\n  outline: none;\n  border: none;\n}\n\n.cont {\n  position: relative;\n  height: 100%;\n  background-image: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/slider-2.jpg\");\n  background-size: cover;\n  overflow: auto;\n}\n\n.demo {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-left: -15rem;\n  margin-top: -26.5rem;\n  width: 30rem;\n  height: 53rem;\n  overflow: hidden;\n}\n\n.login {\n  position: relative;\n  height: 100%;\n  background: linear-gradient(to bottom, rgba(146, 135, 187, 0.8) 0%, rgba(0, 0, 0, 0.6) 100%);\n  transition: opacity 0.1s, transform 0.3s cubic-bezier(0.17, -0.65, 0.665, 1.25);\n  transform: scale(1);\n}\n\n.login.inactive {\n  opacity: 0;\n  transform: scale(1.1);\n}\n\n.login__check {\n  position: absolute;\n  top: 16rem;\n  left: 13.5rem;\n  width: 14rem;\n  height: 2.8rem;\n  background: #fff;\n  transform-origin: 0 100%;\n  transform: rotate(-45deg);\n}\n\n.login__check:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 100%;\n  width: 2.8rem;\n  height: 5.2rem;\n  background: #fff;\n  box-shadow: inset -0.2rem -2rem 2rem rgba(0, 0, 0, 0.2);\n}\n\n.login__form {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 100%;\n  height: 50%;\n  padding: 1.5rem 2.5rem;\n  text-align: center;\n}\n\n.login__row {\n  height: 5rem;\n  padding-top: 1rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n}\n\n.login__icon {\n  margin-bottom: -0.4rem;\n  margin-right: 0.5rem;\n}\n\n.login__icon.name path {\n  stroke-dasharray: 73.5019607544;\n  stroke-dashoffset: 73.5019607544;\n  -webkit-animation: animatePath 2s 0.5s forwards;\n          animation: animatePath 2s 0.5s forwards;\n}\n\n.login__icon.pass path {\n  stroke-dasharray: 92.106628418;\n  stroke-dashoffset: 92.106628418;\n  -webkit-animation: animatePath 2s 0.5s forwards;\n          animation: animatePath 2s 0.5s forwards;\n}\n\n.login__input {\n  display: inline-block;\n  width: 22rem;\n  height: 100%;\n  padding-left: 1.5rem;\n  font-size: 1.5rem;\n  background: transparent;\n  color: #FDFCFD;\n}\n\n.login__submit {\n  position: relative;\n  width: 100%;\n  height: 4rem;\n  margin: 5rem 0 2.2rem;\n  color: rgba(255, 255, 255, 0.8);\n  background: #FF3366;\n  font-size: 1.5rem;\n  border-radius: 3rem;\n  cursor: pointer;\n  overflow: hidden;\n  transition: width 0.3s 0.15s, font-size 0.1s 0.15s;\n}\n\n.login__submit:after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-left: -1.5rem;\n  margin-top: -1.5rem;\n  width: 3rem;\n  height: 3rem;\n  border: 2px dotted #fff;\n  border-radius: 50%;\n  border-left: none;\n  border-bottom: none;\n  transition: opacity 0.1s 0.4s;\n  opacity: 0;\n}\n\n.login__submit.processing {\n  width: 4rem;\n  font-size: 0;\n}\n\n.login__submit.processing:after {\n  opacity: 1;\n  -webkit-animation: rotate 0.5s 0.4s infinite linear;\n          animation: rotate 0.5s 0.4s infinite linear;\n}\n\n.login__submit.success {\n  transition: transform 0.3s 0.1s ease-out, opacity 0.1s 0.3s, background-color 0.1s 0.3s;\n  transform: scale(30);\n  opacity: 0.9;\n}\n\n.login__submit.success:after {\n  transition: opacity 0.1s 0s;\n  opacity: 0;\n  -webkit-animation: none;\n          animation: none;\n}\n\n.login__signup {\n  font-size: 1.2rem;\n  color: #ABA8AE;\n}\n\n.login__signup a {\n  color: #fff;\n  cursor: pointer;\n}\n\n.app {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  display: none;\n  transition: opacity 0.1s, transform 0.3s cubic-bezier(0.68, -0.45, 0.465, 1.25);\n  transform: scale(1.2);\n}\n\n.app.active {\n  opacity: 1;\n  transform: scale(1);\n}\n\n.app.active .app__user-photo {\n  transform: scale(1);\n}\n\n.app.active .app__meeting {\n  transform: translateY(0);\n  opacity: 1;\n}\n\n.app.active .app__logout {\n  transform: scale(1);\n}\n\n.app__top {\n  position: relative;\n  height: 28rem;\n  background: rgba(0, 0, 0, 0.5);\n  padding: 6rem 1.5rem 2rem;\n  text-align: center;\n}\n\n.app__bot {\n  position: relative;\n  height: 25rem;\n  background: #fff;\n}\n\n.app__menu-btn {\n  position: absolute;\n  top: 2rem;\n  left: 1.5rem;\n  width: 1.8rem;\n  height: 1.7rem;\n  cursor: pointer;\n}\n\n.app__menu-btn span, .app__menu-btn:before, .app__menu-btn:after {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 1px;\n  background: rgba(255, 255, 255, 0.6);\n}\n\n.app__menu-btn span {\n  top: 0.8rem;\n}\n\n.app__menu-btn:before {\n  content: \"\";\n  top: 0;\n}\n\n.app__menu-btn:after {\n  content: \"\";\n  bottom: 0;\n}\n\n.app__icon {\n  position: absolute;\n  top: 2rem;\n}\n\n.app__icon.search {\n  right: 1.5rem;\n  stroke-dasharray: 61.8471374512;\n  stroke-dashoffset: 61.8471374512;\n  -webkit-animation: animatePath 0.5s 0.5s forwards;\n          animation: animatePath 0.5s 0.5s forwards;\n}\n\n.app__hello {\n  font-size: 2.2rem;\n  color: #fff;\n  font-weight: normal;\n  margin-bottom: 3rem;\n}\n\n.app__user {\n  position: relative;\n  display: inline-block;\n  width: 9rem;\n  height: 9rem;\n  margin-bottom: 3rem;\n}\n\n.app__user-photo {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  transition: transform 0.3s 0.2s cubic-bezier(0.62, 0.35, 0.56, 1.55);\n  transform: scale(0);\n}\n\n.app__user-notif {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 3rem;\n  height: 3rem;\n  border-radius: 50%;\n  line-height: 3rem;\n  text-align: center;\n  background: #50D2C2;\n  color: #fff;\n  font-size: 1.5rem;\n}\n\n.app__month:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.app__month-name {\n  display: inline-block;\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 1.2rem;\n  text-transform: uppercase;\n}\n\n.app__month-btn {\n  display: inline-block;\n  width: 1.2rem;\n  height: 1.2rem;\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  border-left: none;\n  border-bottom: none;\n  cursor: pointer;\n}\n\n.app__month-btn.left {\n  float: left;\n  transform: rotate(-135deg);\n}\n\n.app__month-btn.right {\n  float: right;\n  transform: rotate(45deg);\n}\n\n.app__days {\n  height: 7rem;\n  padding: 1.5rem 2rem;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.app__day {\n  width: 14%;\n  text-align: center;\n  font-size: 1.2rem;\n}\n\n.app__day.weekday {\n  color: #919197;\n  text-transform: uppercase;\n}\n\n.app__day.date {\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: #3C3C43;\n}\n\n.app__meeting {\n  position: relative;\n  height: 6rem;\n  border-top: 1px solid #EEEEEF;\n  padding: 1rem 2rem 1rem 7.5rem;\n  transition: transform 0.3s, opacity 0.3s;\n  transform: translateY(-50%);\n  opacity: 0;\n}\n\n.app__meeting:nth-child(1) {\n  transition-delay: 0.2s;\n}\n\n.app__meeting:nth-child(2) {\n  transition-delay: 0.3s;\n}\n\n.app__meeting:nth-child(3) {\n  transition-delay: 0.4s;\n}\n\n.app__meeting:nth-child(4) {\n  transition-delay: 0.5s;\n}\n\n.app__meeting:nth-child(5) {\n  transition-delay: 0.6s;\n}\n\n.app__meeting-photo {\n  position: absolute;\n  left: 2rem;\n  top: 1rem;\n  width: 4rem;\n  height: 4rem;\n}\n\n.app__meeting-name {\n  color: #000;\n  font-size: 1.3rem;\n}\n\n.app__meeting-info {\n  color: #949498;\n  font-size: 1.1rem;\n}\n\n.app__logout {\n  position: absolute;\n  bottom: 3.3rem;\n  right: 3.3rem;\n  width: 4.6rem;\n  height: 4.6rem;\n  margin-right: -2.3rem;\n  margin-bottom: -2.3rem;\n  background: #FC3768;\n  color: #fff;\n  font-size: 2rem;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: bottom 0.4s 0.1s, right 0.4s 0.1s, transform 0.4s 0.4s, opacity 0.1s 0.7s, background-color 0.1s 0.7s;\n  transform: scale(0);\n}\n\n.app__logout.clicked {\n  bottom: 50%;\n  right: 50%;\n  transform: scale(30) !important;\n  opacity: 0.9;\n}\n\n.app__logout.clicked svg {\n  opacity: 0;\n}\n\n.app__logout-icon {\n  position: absolute;\n  width: 3rem;\n  height: 3rem;\n  top: 50%;\n  left: 50%;\n  margin-left: -1.5rem;\n  margin-top: -1.5rem;\n  transition: opacity 0.1s;\n}\n\n.app__logout-icon path {\n  stroke-width: 4px;\n  stroke-dasharray: 64.3623504639;\n  stroke-dashoffset: 64.3623504639;\n  -webkit-animation: animatePath 0.5s 0.5s forwards;\n          animation: animatePath 0.5s 0.5s forwards;\n}\n\n.ripple {\n  position: absolute;\n  width: 15rem;\n  height: 15rem;\n  margin-left: -7.5rem;\n  margin-top: -7.5rem;\n  background: rgba(0, 0, 0, 0.4);\n  transform: scale(0);\n  -webkit-animation: animRipple 0.4s;\n          animation: animRipple 0.4s;\n  border-radius: 50%;\n}\n\n@-webkit-keyframes animRipple {\n  to {\n    transform: scale(3.5);\n    opacity: 0;\n  }\n}\n\n@keyframes animRipple {\n  to {\n    transform: scale(3.5);\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes rotate {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes rotate {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes animatePath {\n  to {\n    stroke-dashoffset: 0;\n  }\n}\n\n@keyframes animatePath {\n  to {\n    stroke-dashoffset: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFFRTtFQUxGO0lBTUksY0FBQTtFQUNGO0FBQ0Y7O0FBQ0E7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFBQTtFQUNFLGVBQUE7QUFHRjs7QUFERTtFQUNFLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFHSjs7QUFBQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBR0Y7O0FBREE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5RkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQUlGOztBQUZBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBS0Y7O0FBSEE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSw0RkFBQTtFQUNBLCtFQUFBO0VBQ0EsbUJBQUE7QUFNRjs7QUFKRTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtBQU1KOztBQUhFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0FBS0o7O0FBSEk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1REFBQTtBQUtOOztBQURFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQUdKOztBQUFFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaURBQUE7QUFFSjs7QUFDRTtFQUNFLHNCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFDSTtFQUNFLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQ0FBQTtVQUFBLHVDQUFBO0FBQ047O0FBQ0k7RUFDRSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0NBQUE7VUFBQSx1Q0FBQTtBQUNOOztBQUdFO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFESjs7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0RBQUE7QUFGSjs7QUFJSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7QUFGTjs7QUFLSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBSE47O0FBS007RUFDRSxVQUFBO0VBQ0EsbURBQUE7VUFBQSwyQ0FBQTtBQUhSOztBQU9JO0VBQ0UsdUZBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUFMTjs7QUFRTTtFQUNFLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO1VBQUEsZUFBQTtBQU5SOztBQVdFO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FBVEo7O0FBV0k7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQVROOztBQWVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSwrRUFBQTtFQUNBLHFCQUFBO0FBWkY7O0FBY0U7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7QUFaSjs7QUFjSTtFQUNFLG1CQUFBO0FBWk47O0FBZUk7RUFDRSx3QkFBQTtFQUNBLFVBQUE7QUFiTjs7QUFnQkk7RUFDRSxtQkFBQTtBQWROOztBQWtCRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQWhCSjs7QUFtQkU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQWpCSjs7QUFvQkU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBbEJKOztBQW9CSTtFQUdFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7QUFwQk47O0FBdUJJO0VBQ0UsV0FBQTtBQXJCTjs7QUF1Qkk7RUFDRSxXQUFBO0VBQ0EsTUFBQTtBQXJCTjs7QUF1Qkk7RUFDRSxXQUFBO0VBQ0EsU0FBQTtBQXJCTjs7QUF5QkU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7QUF2Qko7O0FBeUJJO0VBQ0UsYUFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpREFBQTtVQUFBLHlDQUFBO0FBdkJOOztBQTJCRTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUF6Qko7O0FBNEJFO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUExQko7O0FBNEJFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9FQUFBO0VBQ0EsbUJBQUE7QUExQko7O0FBNEJFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUExQko7O0FBNkJFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBM0JKOztBQThCRTtFQUNFLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBNUJKOztBQStCRTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSwwQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBN0JKOztBQStCSTtFQUNFLFdBQUE7RUFDQSwwQkFBQTtBQTdCTjs7QUFnQ0k7RUFDRSxZQUFBO0VBQ0Esd0JBQUE7QUE5Qk47O0FBa0NFO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQWhDSjs7QUFtQ0U7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQWpDSjs7QUFtQ0k7RUFDRSxjQUFBO0VBQ0EseUJBQUE7QUFqQ047O0FBbUNJO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFqQ047O0FBcUNFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLHdDQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0FBbkNKOztBQXNDTTtFQUNFLHNCQUFBO0FBcENSOztBQW1DTTtFQUNFLHNCQUFBO0FBakNSOztBQWdDTTtFQUNFLHNCQUFBO0FBOUJSOztBQTZCTTtFQUNFLHNCQUFBO0FBM0JSOztBQTBCTTtFQUNFLHNCQUFBO0FBeEJSOztBQTRCSTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQTFCTjs7QUE0Qkk7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUExQk47O0FBNEJJO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBMUJOOztBQThCRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUhBQUE7RUFDQSxtQkFBQTtBQTVCSjs7QUE4Qkk7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtBQTVCTjs7QUErQk07RUFDRSxVQUFBO0FBN0JSOztBQWlDSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQS9CTjs7QUFpQ007RUFDRSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpREFBQTtVQUFBLHlDQUFBO0FBL0JSOztBQXNDQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxrQkFBQTtBQW5DRjs7QUFxQ0E7RUFDRTtJQUNFLHFCQUFBO0lBQ0EsVUFBQTtFQWxDRjtBQUNGOztBQThCQTtFQUNFO0lBQ0UscUJBQUE7SUFDQSxVQUFBO0VBbENGO0FBQ0Y7O0FBb0NBO0VBQ0U7SUFDRSx5QkFBQTtFQWxDRjtBQUNGOztBQStCQTtFQUNFO0lBQ0UseUJBQUE7RUFsQ0Y7QUFDRjs7QUFvQ0E7RUFDRTtJQUNFLG9CQUFBO0VBbENGO0FBQ0Y7O0FBK0JBO0VBQ0U7SUFDRSxvQkFBQTtFQWxDRjtBQUNGIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbiRvcGVuU2FuczogJ09wZW4gU2FucycsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG5odG1sLCBib2R5IHtcbiAgZm9udC1zaXplOiA2Mi41JTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZm9udC1zaXplOiA1MCU7XG4gIH1cbn1cbnN2ZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDJyZW07XG4gIGhlaWdodDogMnJlbTtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG4uc3ZnLWljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgcGF0aCB7XG4gICAgc3Ryb2tlOiByZ2JhKDI1NSwyNTUsMjU1LDAuOSk7XG4gICAgZmlsbDogbm9uZTtcbiAgICBzdHJva2Utd2lkdGg6IDE7XG4gIH1cbn1cbmlucHV0LCBidXR0b24ge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG59XG4uY29udCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE0Mjk5Ni9zbGlkZXItMi5qcGcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4uZGVtbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0xNXJlbTtcbiAgbWFyZ2luLXRvcDogLTI2LjVyZW07XG4gIHdpZHRoOiAzMHJlbTtcbiAgaGVpZ2h0OiA1M3JlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5sb2dpbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDE0NiwgMTM1LCAxODcsIDAuOCkgMCUsIHJnYmEoMCwwLDAsMC42KSAxMDAlKTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjFzLCB0cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC4xNywgLTAuNjUsIDAuNjY1LCAxLjI1KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgXG4gICYuaW5hY3RpdmUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB9XG4gIFxuICAmX19jaGVjayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTZyZW07XG4gICAgbGVmdDogMTMuNXJlbTtcbiAgICB3aWR0aDogMTRyZW07XG4gICAgaGVpZ2h0OiAyLjhyZW07XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICBcbiAgICAmOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIGJvdHRvbTogMTAwJTtcbiAgICAgIHdpZHRoOiAyLjhyZW07XG4gICAgICBoZWlnaHQ6IDUuMnJlbTtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICBib3gtc2hhZG93OiBpbnNldCAtMC4ycmVtIC0ycmVtIDJyZW0gcmdiYSgwLDAsMCwwLjIpO1xuICAgIH1cbiAgfVxuICBcbiAgJl9fZm9ybSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgcGFkZGluZzogMS41cmVtIDIuNXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gICZfX3JvdyB7XG4gICAgaGVpZ2h0OiA1cmVtO1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMik7XG4gIH1cbiAgXG4gICZfX2ljb24ge1xuICAgIG1hcmdpbi1ib3R0b206IC0wLjRyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gICAgXG4gICAgJi5uYW1lIHBhdGgge1xuICAgICAgc3Ryb2tlLWRhc2hhcnJheTogNzMuNTAxOTYwNzU0Mzk0NTM7XG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogNzMuNTAxOTYwNzU0Mzk0NTM7XG4gICAgICBhbmltYXRpb246IGFuaW1hdGVQYXRoIDJzIDAuNXMgZm9yd2FyZHM7XG4gICAgfVxuICAgICYucGFzcyBwYXRoIHtcbiAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDkyLjEwNjYyODQxNzk2ODc1O1xuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDkyLjEwNjYyODQxNzk2ODc1O1xuICAgICAgYW5pbWF0aW9uOiBhbmltYXRlUGF0aCAycyAwLjVzIGZvcndhcmRzO1xuICAgIH1cbiAgfVxuICBcbiAgJl9faW5wdXQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMjJyZW07XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjRkRGQ0ZEO1xuICB9XG4gIFxuICAmX19zdWJtaXQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDRyZW07XG4gICAgbWFyZ2luOiA1cmVtIDAgMi4ycmVtO1xuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7XG4gICAgYmFja2dyb3VuZDogI0ZGMzM2NjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAzcmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgMC4xNXMsIGZvbnQtc2l6ZSAwLjFzIDAuMTVzO1xuICAgIFxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogNTAlO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgbWFyZ2luLWxlZnQ6IC0xLjVyZW07XG4gICAgICBtYXJnaW4tdG9wOiAtMS41cmVtO1xuICAgICAgd2lkdGg6IDNyZW07XG4gICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICBib3JkZXI6IDJweCBkb3R0ZWQgI2ZmZjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xcyAwLjRzO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgXG4gICAgJi5wcm9jZXNzaW5nIHtcbiAgICAgIHdpZHRoOiA0cmVtO1xuICAgICAgZm9udC1zaXplOiAwO1xuICAgICAgXG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgYW5pbWF0aW9uOiByb3RhdGUgMC41cyAwLjRzIGluZmluaXRlIGxpbmVhcjtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgJi5zdWNjZXNzIHtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIDAuMXMgZWFzZS1vdXQsIG9wYWNpdHkgMC4xcyAwLjNzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuMXMgMC4zcztcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMzApO1xuICAgICAgb3BhY2l0eTogMC45O1xuICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuOTUpO1xuICAgICAgXG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjFzIDBzO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBhbmltYXRpb246IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAmX19zaWdudXAge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGNvbG9yOiAjQUJBOEFFO1xuICAgIFxuICAgIGEge1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG4gIFxufVxuXG4uYXBwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9wYWNpdHk6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xcywgdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjQ1LCAwLjQ2NSwgMS4yNSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgXG4gICYuYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgXG4gICAgLmFwcF9fdXNlci1waG90byB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbiAgICBcbiAgICAuYXBwX19tZWV0aW5nIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIFxuICAgIC5hcHBfX2xvZ291dCB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbiAgfVxuXG4gICZfX3RvcCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMjhyZW07XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjUpO1xuICAgIHBhZGRpbmc6IDZyZW0gMS41cmVtIDJyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgJl9fYm90IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAyNXJlbTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB9XG4gIFxuICAmX19tZW51LWJ0biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMnJlbTtcbiAgICBsZWZ0OiAxLjVyZW07XG4gICAgd2lkdGg6IDEuOHJlbTtcbiAgICBoZWlnaHQ6IDEuN3JlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgXG4gICAgc3BhbixcbiAgICAmOmJlZm9yZSxcbiAgICAmOmFmdGVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMXB4O1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjYpO1xuICAgIH1cbiAgICBcbiAgICBzcGFuIHtcbiAgICAgIHRvcDogMC44cmVtO1xuICAgIH1cbiAgICAmOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgdG9wOiAwO1xuICAgIH1cbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBib3R0b206IDA7XG4gICAgfVxuICB9XG5cbiAgJl9faWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMnJlbTtcblxuICAgICYuc2VhcmNoIHtcbiAgICAgIHJpZ2h0OiAxLjVyZW07XG4gICAgICBzdHJva2UtZGFzaGFycmF5OiA2MS44NDcxMzc0NTExNzE4NzU7XG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogNjEuODQ3MTM3NDUxMTcxODc1O1xuICAgICAgYW5pbWF0aW9uOiBhbmltYXRlUGF0aCAwLjVzIDAuNXMgZm9yd2FyZHM7XG4gICAgfVxuICB9XG4gIFxuICAmX19oZWxsbyB7XG4gICAgZm9udC1zaXplOiAyLjJyZW07XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICB9XG4gIFxuICAmX191c2VyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA5cmVtO1xuICAgIGhlaWdodDogOXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICB9XG4gICZfX3VzZXItcGhvdG8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgMC4ycyBjdWJpYy1iZXppZXIoLjYyLC4zNSwuNTYsMS41NSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICAmX191c2VyLW5vdGlmIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAzcmVtO1xuICAgIGhlaWdodDogM3JlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICM1MEQyQzI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbiAgXG4gICZfX21vbnRoOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIGNsZWFyOiBib3RoO1xuICB9XG4gIFxuICAmX19tb250aC1uYW1lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC42KTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIFxuICAmX19tb250aC1idG4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMS4ycmVtO1xuICAgIGhlaWdodDogMS4ycmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC42KTtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBcbiAgICAmLmxlZnQge1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcbiAgICB9XG4gICAgXG4gICAgJi5yaWdodCB7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgfVxuICB9XG4gIFxuICAmX19kYXlzIHtcbiAgICBoZWlnaHQ6IDdyZW07XG4gICAgcGFkZGluZzogMS41cmVtIDJyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG4gIFxuICAmX19kYXkge1xuICAgIHdpZHRoOiAxNCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIFxuICAgICYud2Vla2RheSB7XG4gICAgICBjb2xvcjogIzkxOTE5NztcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxuICAgICYuZGF0ZSB7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgY29sb3I6ICMzQzNDNDM7XG4gICAgfVxuICB9XG4gIFxuICAmX19tZWV0aW5nIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiA2cmVtO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRUVFRUVGO1xuICAgIHBhZGRpbmc6IDFyZW0gMnJlbSAxcmVtIDcuNXJlbTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgb3BhY2l0eSAwLjNzO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIFxuICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggNSB7XG4gICAgICAmOm50aC1jaGlsZCgjeyRpfSkge1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjFzICsgMC4xcyAqICRpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAmLXBob3RvIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDJyZW07XG4gICAgICB0b3A6IDFyZW07XG4gICAgICB3aWR0aDogNHJlbTtcbiAgICAgIGhlaWdodDogNHJlbTtcbiAgICB9XG4gICAgJi1uYW1lIHtcbiAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgfVxuICAgICYtaW5mbyB7XG4gICAgICBjb2xvcjogIzk0OTQ5ODtcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIH1cbiAgfVxuICBcbiAgJl9fbG9nb3V0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAzLjNyZW07XG4gICAgcmlnaHQ6IDMuM3JlbTtcbiAgICB3aWR0aDogNC42cmVtO1xuICAgIGhlaWdodDogNC42cmVtO1xuICAgIG1hcmdpbi1yaWdodDogLTIuM3JlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAtMi4zcmVtO1xuICAgIGJhY2tncm91bmQ6ICNGQzM3Njg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYm90dG9tIDAuNHMgMC4xcywgcmlnaHQgMC40cyAwLjFzLCB0cmFuc2Zvcm0gMC40cyAwLjRzLCBvcGFjaXR5IDAuMXMgMC43cywgYmFja2dyb3VuZC1jb2xvciAwLjFzIDAuN3M7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICBcbiAgICAmLmNsaWNrZWQge1xuICAgICAgYm90dG9tOiA1MCU7XG4gICAgICByaWdodDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgzMCkgIWltcG9ydGFudDtcbiAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjk1KTtcbiAgICAgIFxuICAgICAgc3ZnIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgJi1pY29uIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAzcmVtO1xuICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgdG9wOiA1MCU7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICBtYXJnaW4tbGVmdDogLTEuNXJlbTtcbiAgICAgIG1hcmdpbi10b3A6IC0xLjVyZW07XG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMXM7XG4gICAgICBcbiAgICAgIHBhdGgge1xuICAgICAgICBzdHJva2Utd2lkdGg6IDRweDtcbiAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogNjQuMzYyMzUwNDYzODY3MTk7XG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiA2NC4zNjIzNTA0NjM4NjcxOTtcbiAgICAgICAgYW5pbWF0aW9uOiBhbmltYXRlUGF0aCAwLjVzIDAuNXMgZm9yd2FyZHM7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxufVxuXG4ucmlwcGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTVyZW07XG4gIGhlaWdodDogMTVyZW07XG4gIG1hcmdpbi1sZWZ0OiAtNy41cmVtO1xuICBtYXJnaW4tdG9wOiAtNy41cmVtO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNCk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIGFuaW1hdGlvbjogYW5pbVJpcHBsZSAwLjRzO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5Aa2V5ZnJhbWVzIGFuaW1SaXBwbGUge1xuICB0byB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgzLjUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcm90YXRlIHtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYW5pbWF0ZVBhdGgge1xuICB0byB7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "EtQq");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/footer/footer.component */ "jQpT");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/components.module */ "j1ZV");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "kHmC");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/about/about.component */ "+DhY");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./core/core.module */ "pKmL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_11__["HomepageComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__["AngularFirestoreModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_15__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].firebase),
                _core_core_module__WEBPACK_IMPORTED_MODULE_17__["CoreModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButtonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__["MatToolbarModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_components_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components.component */ "93si");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "kHmC");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/about/about.component */ "+DhY");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/team/team.component */ "yoyL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', redirectTo: 'homepage', pathMatch: 'full' },
    { path: 'homepage', component: _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__["HomepageComponent"] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'team', component: _components_team_team_component__WEBPACK_IMPORTED_MODULE_8__["TeamComponent"] },
    { path: 'home', component: _components_components_component__WEBPACK_IMPORTED_MODULE_4__["ComponentsComponent"] },
    { path: 'blog', loadChildren: './components/post/posts.module#PostsModule' },
    { path: 'workshops', loadChildren: './components/workshops/workshops.module#WorkshopsModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                    useHash: false
                })
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "cIR/":
/*!****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo {\n    height: 140px;\n    width: 140px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEIiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nbyB7XG4gICAgaGVpZ2h0OiAxNDBweDtcbiAgICB3aWR0aDogMTQwcHg7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./components/post/posts.module": [
		"RQpc",
		"default~components-post-posts-module~components-workshops-workshops-module",
		"components-post-posts-module"
	],
	"./components/workshops/workshops.module": [
		"6ipB",
		"default~components-post-posts-module~components-workshops-workshops-module",
		"components-workshops-workshops-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "crnd";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "f2YT":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\n  color: #c4c4c4;\n}\n\n#div_top_hypers {\n  background-color: #eeeeee;\n  display: inline;\n}\n\n#ul_top_hypers li {\n  display: inline-block;\n}\n\n.footer {\n  background: #2c2c2c;\n  text-align: center;\n  padding: 20px;\n}\n\n.copyright {\n  color: #c4c4c4;\n  padding: 0px;\n}\n\np {\n  padding: 0px;\n  color: #c4c4c4;\n}\n\n.footer-logo {\n  height: 100;\n  width: 150px;\n}\n\n.subtitle {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGNBQUE7QUFBSjs7QUFHQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUVBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUVJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBQUo7O0FBR0E7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7QUFBSjs7QUFHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0FBQUoiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5kaXYge1xuICAgIGNvbG9yOiByZ2IoMTk2LCAxOTYsIDE5Nik7XG5cbn1cbiNkaXZfdG9wX2h5cGVycyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZWVlZWVlO1xuICAgIGRpc3BsYXk6aW5saW5lOyAgICAgIFxufVxuI3VsX3RvcF9oeXBlcnMgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmZvb3RlciB7XG4gICAgXG4gICAgYmFja2dyb3VuZDogcmdiKDQ0LCA0NCwgNDQpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uY29weXJpZ2h0IHtcbiAgICBjb2xvcjogcmdiKDE5NiwgMTk2LCAxOTYpO1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxucCB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGNvbG9yOiByZ2IoMTk2LCAxOTYsIDE5Nik7XG59XG5cbi5mb290ZXItbG9nbyB7XG4gICAgaGVpZ2h0OiAxMDA7XG4gICAgd2lkdGg6IDE1MHB4O1xufVxuXG4uc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-nouislider */ "yw8I");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "yQBb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components.component */ "93si");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./team/team.component */ "yoyL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







;


var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__["NouisliderModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__["JwBootstrapSwitchNg2Module"]
            ],
            declarations: [
                _components_component__WEBPACK_IMPORTED_MODULE_7__["ComponentsComponent"],
                _team_team_component__WEBPACK_IMPORTED_MODULE_8__["TeamComponent"],
            ],
            entryComponents: [],
            exports: [_components_component__WEBPACK_IMPORTED_MODULE_7__["ComponentsComponent"]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "jGP6":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\n  <p class=\"subtitle\">Developed By: </p>\n  <p>Abhinav Srinivas &nbsp;&nbsp;&nbsp;&nbsp;Anirudh Pai &nbsp;&nbsp;&nbsp;&nbsp;Satvik Eltepu &nbsp;&nbsp;&nbsp;&nbsp;Vasanth Pugalenthi &nbsp;&nbsp;&nbsp;&nbsp;Kanishka Verose</p>\n  <a routerLink=\"/homepage\"><img class=\"footer-logo\" src=\"../../../assets/img/fleologo.png\"></a>\n  <div class=\"navbar-collapse\" id=\"navbarToggler\">\n      <div id=\"div_top_hypers\">\n        <ul id=\"ul_top_hypers\">\n            <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\n                <a style=\"color:rgb(0, 157, 58)\" class=\"nav-link\" rel=\"tooltip\" title=\"Follow us on Twitter\" data-placement=\"bottom\" href=\"\" target=\"_blank\">\n                    <i class=\"fa fa-twitter\"></i>\n                    <p class=\"d-lg-none\">Twitter</p>\n                </a>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\n                <a style=\"color:rgb(0, 157, 58)\" class=\"nav-link\" rel=\"tooltip\" title=\"Like us on Facebook\" data-placement=\"bottom\" href=\"\" target=\"_blank\">\n                    <i class=\"fa fa-facebook-square\"></i>\n                    <p class=\"d-lg-none\">Facebook</p>\n                </a>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\n                <a style=\"color:rgb(0, 157, 58)\" class=\"nav-link\" rel=\"tooltip\" title=\"Follow us on Instagram\" data-placement=\"bottom\" href=\"http://www.instagram.com/fleo.online/\" target=\"_blank\">\n                    <i class=\"fa fa-instagram\"></i>\n                    <p class=\"d-lg-none\">Instagram</p>\n                </a>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"!isDocumentation() \">\n                <a style=\"color:rgb(0, 157, 58)\" class=\"nav-link\" rel=\"tooltip\" title=\"Star on GitHub\" data-placement=\"bottom\" href=\"\" target=\"_blank\">\n                    <i class=\"fa fa-github\"></i>\n                    <p class=\"d-lg-none\">GitHub</p>\n                </a>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\n                <a routerLink=\"/about\" class=\"nav-link\" style=\"color:rgb(222, 148, 0)\"><i class=\"nc-icon nc-tag-content\"></i> About</a>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\n                <a routerLink=\"/blog\" class=\"nav-link\" style=\"color:rgb(222, 148, 0)\"><i class=\"nc-icon nc-single-copy-04\"></i> Newsletter</a>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\n                <a routerLink=\"/workshops\" class=\"nav-link\" style=\"color:rgb(222, 148, 0)\"><i class=\"nc-icon nc-ruler-pencil\"></i> Workshops</a>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\n                <a routerLink=\"/team\" class=\"nav-link\" style=\"color:rgb(222, 148, 0)\"><i class=\"nc-icon nc-badge\"></i> The Team</a>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"!isDocumentation() && isLoggedIn()\">\n                <a routerLink=\"/blog/dashboard\" class=\"nav-link\" style=\"color:rgb(222, 148, 0)\"><i class=\"nc-icon nc-planet\"></i> Dashboard</a>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"!isDocumentation() && isLoggedIn() \">\n                <a (click)=\"logout()\" class=\"nav-link\" style=\"color:rgb(222, 148, 0)\"><i class=\"nc-icon nc-stre-left\"></i> Log Out</a>\n            </li>\n        </ul>\n    </div>  \n</div>\n  <div class=\"copyright\">Copyright 2021 FLEO Online. All rights reserved.</div>\n</footer>");

/***/ }),

/***/ "jPwQ":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/homepage/homepage.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-header\" data-parallax=\"true\" style=\"background-image: url('./assets/img/background.png');\">\n    <div class=\"filter\"></div>\n    <div class=\"container\">\n        <div class=\"motto text-center\">\n            <h1>FLEO</h1>\n            <h3>The Bridge Between Students And Financial Literacy.</h3>\n            <br />\n            <a routerLink=\"/login\" class=\"btn btn-outline-neutral btn-round\"><i class=\"fa fa-play\"></i>Admin Login!</a>\n        </div>\n    </div>\n</div>\n<div class=\"main\">\n    <div class=\"section text-center\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-8 mr-auto ml-auto\">\n                <h2 class=\"title\">About Us</h2>\n                <h5 class=\"description\">Financial Literacy Education Organization (FLEO) is a nonprofit that strives to provide a platform for financial literacy content to be taught to the youth through enjoyable and engaging lessons. With workshops being taught in 5 continents, FLEO wants to increase the overall financial health of today’s youth by making financial literacy content more accessible to them.</h5>\n                <br>\n                <a href=\"#paper-kit\" class=\"btn btn-danger btn-round\">See Details</a>\n            </div>\n        </div>\n        <br/><br/>\n\n    </div>\n</div>\n\n<div class=\"section section-dark text-center\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-8 mr-auto ml-auto\">\n                <h2 class=\"title\">How It Works</h2>\n                <h5 class=\"description\">FLEO will address the problem of a lack of engagement with financial literacy content. Currently, only 34 percent of Millennials in the United States are financially literate (Hasler, Lusardi, and Yakoboski, 2018). To ensure that this doesn’t happen to Gen Z, it’s not a case of pumping more content into the internet. It’s a matter of getting people to sign up and learn integral personal finance skills. To combat the gross disparity between the vast amount of financial literacy content and the comparative lack of engagement with these courses, FLEO believes that hosting events that incentivize today’s teens to take part in this initiative would drive great success in terms of people enriching themselves with these fundamental tools for prosperity.</h5>\n                <br>\n            </div>\n        </div>\n        <br/><br/>\n\n    </div>\n</div>\n\n<div class=\"main\">\n    <div class=\"container\">\n        <div class=\"embed-responsive embed-responsive-16by9\">\n            <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/wJAWDqYYyMQ\" allowfullscreen></iframe>\n          </div>\n    </div>\n</div>\n\n    <!-- \n        CONTACT PAGE \n    <div class=\"section landing-section\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 mr-auto ml-auto\">\n                    <h2 class=\"text-center\">Keep in touch?</h2>\n                    <form class=\"contact-form\">\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <label>Name</label>\n                                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                                    <div class=\"input-group-prepend\">\n                                      <span class=\"input-group-text\"><i class=\"nc-icon nc-single-02\"></i></span>\n                                    </div>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Name\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <label>Email</label>\n                                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n                                    <div class=\"input-group-prepend\">\n                                      <span class=\"input-group-text\">  <i class=\"nc-icon nc-email-85\"></i></span>\n                                    </div>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Email\" (focus)=\"focus1=true\" (blur)=\"focus1=false\" >\n                                </div>\n                            </div>\n                        </div>\n                        <label>Message</label>\n                        <textarea class=\"form-control\" rows=\"4\" placeholder=\"Tell us your thoughts and feelings...\"></textarea>\n                        <div class=\"row\">\n                            <div class=\"col-md-4 mr-auto ml-auto\">\n                                <button class=\"btn btn-danger btn-lg btn-fill\">Send Message</button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n    -->\n</div>\n");

/***/ }),

/***/ "jQpT":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "jGP6");
/* harmony import */ var _footer_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.scss */ "f2YT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var app_core_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/core/auth.service */ "8PDw");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FooterComponent = /** @class */ (function () {
    function FooterComponent(location, authService) {
        this.location = location;
        this.authService = authService;
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent.prototype.isDocumentation = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        if (titlee === '/') {
            return true;
        }
        else {
            return false;
        }
    };
    FooterComponent.prototype.isLoggedIn = function () {
        var x = localStorage.getItem("loggedin");
        if (x) {
            return true;
        }
        else {
            return false;
        }
    };
    FooterComponent.prototype.logout = function () {
        this.authService.logout();
        localStorage.removeItem("loggedin");
    };
    FooterComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: app_core_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
    ]; };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-footer',
            template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], app_core_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "kHmC":
/*!***********************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.ts ***!
  \***********************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _raw_loader_homepage_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./homepage.component.html */ "jPwQ");
/* harmony import */ var _homepage_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage.component.scss */ "Whhu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () { };
    HomepageComponent.ctorParameters = function () { return []; };
    HomepageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-landing',
            template: _raw_loader_homepage_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_homepage_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "pKmL":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "8PDw");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "yoyL":
/*!***************************************************!*\
  !*** ./src/app/components/team/team.component.ts ***!
  \***************************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _raw_loader_team_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./team.component.html */ "Cadm");
/* harmony import */ var _team_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./team.component.css */ "58ci");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeamComponent = /** @class */ (function () {
    function TeamComponent() {
    }
    TeamComponent.prototype.ngOnInit = function () {
    };
    TeamComponent.ctorParameters = function () { return []; };
    TeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-team',
            template: _raw_loader_team_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_team_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "zRkE":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg sticky-top navbar-light bg-light\" color-on-scroll=\"500\">\n    <div class=\"container\">\n        <div class=\"navbar-translate\">\n            <a class=\"navbar-brand\" *ngIf=\"!isDocumentation()\" routerLink=\"/homepage\"><img class=\"logo\" src=\"assets/img/fleologo.png\"></a>\n            <button class=\"navbar-toggler navbar-burger\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"sidebarToggle()\">\n                <span class=\"navbar-toggler-bar\"></span>\n                <span class=\"navbar-toggler-bar\"></span>\n                <span class=\"navbar-toggler-bar\"></span>\n            </button>\n        </div>\n        <div class=\"navbar-collapse\" id=\"navbarToggler\">\n            <ul class=\"navbar-nav ml-auto\">\n                <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\n                    <a routerLink=\"/about\" class=\"nav-link\" style=\"color:black\"><i class=\"nc-icon nc-tag-content\"></i> About</a>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\n                    <a routerLink=\"/blog\" class=\"nav-link\" style=\"color:black\"><i class=\"nc-icon nc-single-copy-04\"></i> Newsletter</a>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\n                    <a routerLink=\"/workshops\" class=\"nav-link\" style=\"color:black\"><i class=\"nc-icon nc-ruler-pencil\"></i> Workshops</a>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\n                    <a routerLink=\"/team\" class=\"nav-link\" style=\"color:black\"><i class=\"nc-icon nc-badge\"></i> The Team</a>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"!isDocumentation() && isLoggedIn()\">\n                    <a routerLink=\"/blog/dashboard\" class=\"nav-link\" style=\"color:black\"><i class=\"nc-icon nc-planet\"></i> Dashboard</a>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\n                    <a style=\"color:black\" class=\"nav-link\" rel=\"tooltip\" title=\"Follow us on Twitter\" data-placement=\"bottom\" href=\"\" target=\"_blank\">\n                        <i class=\"fa fa-twitter\"></i>\n                        <p class=\"d-lg-none\">Twitter</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\n                    <a style=\"color:black\" class=\"nav-link\" rel=\"tooltip\" title=\"Like us on Facebook\" data-placement=\"bottom\" href=\"\" target=\"_blank\">\n                        <i class=\"fa fa-facebook-square\"></i>\n                        <p class=\"d-lg-none\">Facebook</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\n                    <a style=\"color:black\" class=\"nav-link\" rel=\"tooltip\" title=\"Follow us on Instagram\" data-placement=\"bottom\" href=\"http://www.instagram.com/fleo.online/\" target=\"_blank\">\n                        <i class=\"fa fa-instagram\"></i>\n                        <p class=\"d-lg-none\">Instagram</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"!isDocumentation() \">\n                    <a style=\"color:black\" class=\"nav-link\" rel=\"tooltip\" title=\"Star on GitHub\" data-placement=\"bottom\" href=\"\" target=\"_blank\">\n                        <i class=\"fa fa-github\"></i>\n                        <p class=\"d-lg-none\">GitHub</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"!isDocumentation() && isLoggedIn() \">\n                    <a (click)=\"logout()\" class=\"nav-link\" style=\"color:black\"><i class=\"nc-icon nc-stre-left\"></i> Log Out</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/*!

 =========================================================
 * Paper Kit 2 Angular - v1.4.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/paper-kit-2-angular
 * Copyright 2020 Creative Tim (https://www.creative-tim.com)
 * Licensed under MIT (https://github.com/timcreative/paper-kit/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map