"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/getData";
exports.ids = ["pages/api/getData"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./pages/api/getData.js":
/*!******************************!*\
  !*** ./pages/api/getData.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getStudents)\n/* harmony export */ });\n/* harmony import */ var _utils_connectdb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/connectdb */ \"(api)/./pages/api/utils/connectdb.js\");\n/* harmony import */ var _models_StudentSchema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/StudentSchema */ \"(api)/./pages/api/models/StudentSchema.js\");\nconst mongddstring = \"mongodb+srv://<username>:<password>@cluster0.ei9wg.mongodb.net/realword?retryWrites=true&w=majority\";\n\n\n/** \r\n * @param {import('next').NextApiRequest} req\r\n * @param {import('next').NextApiRequest} res\r\n\r\n*/ async function getStudents(req, res) {\n    try {\n        const dbcon = await (0,_utils_connectdb__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        if (dbcon) {\n            console.log(\"connected to database!\");\n        }\n        const students = await _models_StudentSchema__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find();\n        res.status(200).send(students);\n    //    return students\n    } catch (err) {\n        res.json(err);\n        console.log(err);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0RGF0YS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxNQUFNQSxlQUFlO0FBQ3FCO0FBQ0c7QUFFN0M7SUFPRyxJQUFHO1FBQ0gsTUFBTU0sUUFBUSxNQUFNTDs7R0FHbEJNLEVBQVFDLEdBQUcsQ0FBQztRQUNkLENBQUM7UUFDRCxNQUFNQyxXQUFXLCtEQUFNUCxFQUFRUTtRQUMvQkwsSUFBSU0sTUFBTSxDQUFDO0lBQ2QscUJBQXFCO0lBQ2xCLEVBQUM7UUFDQ04sSUFBSVMsSUFBSSxDQUFDRCxjQUFBQSxrRUFBQUE7UUFDVE4sUUFBUUMsR0FBRyxDQUFDSztJQUNkO0FBRUQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL291cmFwcC8uL3BhZ2VzL2FwaS9nZXREYXRhLmpzPzE0MzMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9uZ2Rkc3RyaW5nID0gJ21vbmdvZGIrc3J2Oi8vPHVzZXJuYW1lPjo8cGFzc3dvcmQ+QGNsdXN0ZXIwLmVpOXdnLm1vbmdvZGIubmV0L3JlYWx3b3JkP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSdcclxuaW1wb3J0IGNvbm5lY3RkYiBmcm9tICcuL3V0aWxzL2Nvbm5lY3RkYic7XHJcbmltcG9ydCBTdHVkZW50IGZyb20gJy4vbW9kZWxzL1N0dWRlbnRTY2hlbWEnO1xyXG5cclxuLyoqIFxyXG4gKiBAcGFyYW0ge2ltcG9ydCgnbmV4dCcpLk5leHRBcGlSZXF1ZXN0fSByZXFcclxuICogQHBhcmFtIHtpbXBvcnQoJ25leHQnKS5OZXh0QXBpUmVxdWVzdH0gcmVzXHJcblxyXG4qL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0U3R1ZGVudHMocmVxLCByZXMpIHtcclxuICAgdHJ5e1xyXG4gICBjb25zdCBkYmNvbiA9IGF3YWl0IGNvbm5lY3RkYigpICBcclxuICAgXHJcbiAgIGlmKGRiY29uKXtcclxuICAgICBjb25zb2xlLmxvZygnY29ubmVjdGVkIHRvIGRhdGFiYXNlIScpXHJcbiAgIH1cclxuICAgY29uc3Qgc3R1ZGVudHMgPSBhd2FpdCBTdHVkZW50LmZpbmQoKVxyXG4gICByZXMuc3RhdHVzKDIwMCkuc2VuZChzdHVkZW50cylcclxuLy8gICAgcmV0dXJuIHN0dWRlbnRzXHJcbiAgIH1jYXRjaChlcnIpe1xyXG4gICAgIHJlcy5qc29uKGVycilcclxuICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgIH1cclxuXHJcbiAgfSJdLCJuYW1lcyI6WyJtb25nZGRzdHJpbmciLCJjb25uZWN0ZGIiLCJTdHVkZW50IiwiZ2V0U3R1ZGVudHMiLCJyZXEiLCJyZXMiLCJkYmNvbiIsImNvbnNvbGUiLCJsb2ciLCJzdHVkZW50cyIsImZpbmQiLCJzdGF0dXMiLCJzZW5kIiwiZXJyIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/getData.js\n");

/***/ }),

/***/ "(api)/./pages/api/models/StudentSchema.js":
/*!*******************************************!*\
  !*** ./pages/api/models/StudentSchema.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst StudentSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    firstname: {\n        type: String,\n        required: true\n    },\n    lastname: {\n        type: String,\n        required: true\n    },\n    studentid: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    studentclass: {\n        type: String\n    },\n    createdAt: {\n        type: Date,\n        default: ()=>Date.now(),\n        immutable: true\n    },\n    subjects: {\n        Mathematics: [\n            Number\n        ],\n        English: [\n            Number\n        ],\n        Physics: [\n            Number\n        ],\n        Chemistry: [\n            Number\n        ],\n        Biology: [\n            Number\n        ]\n    }\n});\nconst Student = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Student || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"Student\", StudentSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Student);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbW9kZWxzL1N0dWRlbnRTY2hlbWEuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZDO0FBRTdDLE1BQU1HLGdCQUFnQixJQUFJSCw0Q0FBTUEsQ0FBQztJQUM3QkksV0FBVTtRQUNOQyxNQUFLQztRQUNMQyxVQUFVLElBQUk7SUFDbEI7SUFDQUMsVUFBUztRQUNMSCxNQUFLQztRQUNMQyxVQUFVLElBQUk7SUFDbEI7SUFDQUUsV0FBVTtRQUNOSixNQUFLQztRQUNMQyxVQUFVLElBQUk7UUFDZEcsUUFBTyxJQUFJO0lBQ2Y7SUFDQUMsY0FBYTtRQUNUTixNQUFLQztJQUVUO0lBQ0FNLFdBQVU7UUFDTlAsTUFBS1E7UUFDTEMsU0FBUSxJQUFJRCxLQUFLRSxHQUFHO1FBQ3BCQyxXQUFVLElBQUk7SUFDbEI7SUFFQUMsVUFBUztRQUNOQyxhQUFZO1lBQUNDO1NBQU87UUFDcEJDLFNBQVE7WUFBQ0Q7U0FBTztRQUNoQkUsU0FBUTtZQUFDRjtTQUFPO1FBQ2hCRyxXQUFVO1lBQUNIO1NBQU87UUFDbEJJLFNBQVE7WUFBQ0o7U0FBTztJQUNuQjtBQUNKO0FBRUEsTUFBTUssVUFBVXRCLG9EQUFjLElBQUlELCtDQUFLQSxDQUFDLFdBQVdFO0FBR25ELGlFQUFlcUIsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL291cmFwcC8uL3BhZ2VzL2FwaS9tb2RlbHMvU3R1ZGVudFNjaGVtYS5qcz8xYmY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2NoZW1hLG1vZGVsLG1vZGVsc30gZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgU3R1ZGVudFNjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG4gICAgZmlyc3RuYW1lOntcclxuICAgICAgICB0eXBlOlN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGxhc3RuYW1lOntcclxuICAgICAgICB0eXBlOlN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHN0dWRlbnRpZDp7XHJcbiAgICAgICAgdHlwZTpTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgdW5pcXVlOnRydWVcclxuICAgIH0sXHJcbiAgICBzdHVkZW50Y2xhc3M6e1xyXG4gICAgICAgIHR5cGU6U3RyaW5nLFxyXG4gICAgICAgIC8vIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZEF0OntcclxuICAgICAgICB0eXBlOkRhdGUsXHJcbiAgICAgICAgZGVmYXVsdDooKT0+RGF0ZS5ub3coKSxcclxuICAgICAgICBpbW11dGFibGU6dHJ1ZVxyXG4gICAgfSxcclxuXHJcbiAgICBzdWJqZWN0czp7XHJcbiAgICAgICBNYXRoZW1hdGljczpbTnVtYmVyXSxcclxuICAgICAgIEVuZ2xpc2g6W051bWJlcl0sXHJcbiAgICAgICBQaHlzaWNzOltOdW1iZXJdLFxyXG4gICAgICAgQ2hlbWlzdHJ5OltOdW1iZXJdLFxyXG4gICAgICAgQmlvbG9neTpbTnVtYmVyXVxyXG4gICAgfVxyXG59KVxyXG5cclxuY29uc3QgU3R1ZGVudCA9IG1vZGVscy5TdHVkZW50IHx8IG1vZGVsKCdTdHVkZW50JywgU3R1ZGVudFNjaGVtYSlcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdHVkZW50XHJcbiJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb2RlbCIsIm1vZGVscyIsIlN0dWRlbnRTY2hlbWEiLCJmaXJzdG5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJsYXN0bmFtZSIsInN0dWRlbnRpZCIsInVuaXF1ZSIsInN0dWRlbnRjbGFzcyIsImNyZWF0ZWRBdCIsIkRhdGUiLCJkZWZhdWx0Iiwibm93IiwiaW1tdXRhYmxlIiwic3ViamVjdHMiLCJNYXRoZW1hdGljcyIsIk51bWJlciIsIkVuZ2xpc2giLCJQaHlzaWNzIiwiQ2hlbWlzdHJ5IiwiQmlvbG9neSIsIlN0dWRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/models/StudentSchema.js\n");

/***/ }),

/***/ "(api)/./pages/api/utils/connectdb.js":
/*!**************************************!*\
  !*** ./pages/api/utils/connectdb.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n// const mongoose = require('mongoose');\n\nconst connectdb = async ()=>mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_STRING);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectdb);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXRpbHMvY29ubmVjdGRiLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHdDQUF3QztBQUNUO0FBRzlCLE1BQU1DLFlBQVksVUFBVUQsdURBQWdCLENBQUNHLFFBQVFDLEdBQUcsQ0FBQ0MsWUFBWTtBQUNyRSxpRUFBZUosU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL291cmFwcC8uL3BhZ2VzL2FwaS91dGlscy9jb25uZWN0ZGIuanM/OWVlMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XHJcbmltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcclxuXHJcblxyXG4gY29uc3QgY29ubmVjdGRiID0gYXN5bmMoKT0+IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09fU1RSSU5HKVxyXG4gZXhwb3J0IGRlZmF1bHQgY29ubmVjdGRiXHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3RkYiIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09fU1RSSU5HIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/utils/connectdb.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getData.js"));
module.exports = __webpack_exports__;

})();