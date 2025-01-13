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
exports.id = "app/api/getScanData/route";
exports.ids = ["app/api/getScanData/route"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FgetScanData%2Froute&page=%2Fapi%2FgetScanData%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FgetScanData%2Froute.ts&appDir=%2FUsers%2Fseadkurtovic%2FDocuments%2FUni%20%2FWiSe%202024-25%2FUIT%20IT-Praktikum%2Fuit-admin-page%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fseadkurtovic%2FDocuments%2FUni%20%2FWiSe%202024-25%2FUIT%20IT-Praktikum%2Fuit-admin-page&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FgetScanData%2Froute&page=%2Fapi%2FgetScanData%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FgetScanData%2Froute.ts&appDir=%2FUsers%2Fseadkurtovic%2FDocuments%2FUni%20%2FWiSe%202024-25%2FUIT%20IT-Praktikum%2Fuit-admin-page%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fseadkurtovic%2FDocuments%2FUni%20%2FWiSe%202024-25%2FUIT%20IT-Praktikum%2Fuit-admin-page&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_seadkurtovic_Documents_Uni_WiSe_2024_25_UIT_IT_Praktikum_uit_admin_page_src_app_api_getScanData_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/getScanData/route.ts */ \"(rsc)/./src/app/api/getScanData/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/getScanData/route\",\n        pathname: \"/api/getScanData\",\n        filename: \"route\",\n        bundlePath: \"app/api/getScanData/route\"\n    },\n    resolvedPagePath: \"/Users/seadkurtovic/Documents/Uni /WiSe 2024-25/UIT IT-Praktikum/uit-admin-page/src/app/api/getScanData/route.ts\",\n    nextConfigOutput,\n    userland: _Users_seadkurtovic_Documents_Uni_WiSe_2024_25_UIT_IT_Praktikum_uit_admin_page_src_app_api_getScanData_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZnZXRTY2FuRGF0YSUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGZ2V0U2NhbkRhdGElMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZnZXRTY2FuRGF0YSUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnNlYWRrdXJ0b3ZpYyUyRkRvY3VtZW50cyUyRlVuaSUyMCUyRldpU2UlMjAyMDI0LTI1JTJGVUlUJTIwSVQtUHJha3Rpa3VtJTJGdWl0LWFkbWluLXBhZ2UlMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGc2VhZGt1cnRvdmljJTJGRG9jdW1lbnRzJTJGVW5pJTIwJTJGV2lTZSUyMDIwMjQtMjUlMkZVSVQlMjBJVC1QcmFrdGlrdW0lMkZ1aXQtYWRtaW4tcGFnZSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDZ0U7QUFDN0k7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9zZWFka3VydG92aWMvRG9jdW1lbnRzL1VuaSAvV2lTZSAyMDI0LTI1L1VJVCBJVC1QcmFrdGlrdW0vdWl0LWFkbWluLXBhZ2Uvc3JjL2FwcC9hcGkvZ2V0U2NhbkRhdGEvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2dldFNjYW5EYXRhL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvZ2V0U2NhbkRhdGFcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2dldFNjYW5EYXRhL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL3NlYWRrdXJ0b3ZpYy9Eb2N1bWVudHMvVW5pIC9XaVNlIDIwMjQtMjUvVUlUIElULVByYWt0aWt1bS91aXQtYWRtaW4tcGFnZS9zcmMvYXBwL2FwaS9nZXRTY2FuRGF0YS9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FgetScanData%2Froute&page=%2Fapi%2FgetScanData%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FgetScanData%2Froute.ts&appDir=%2FUsers%2Fseadkurtovic%2FDocuments%2FUni%20%2FWiSe%202024-25%2FUIT%20IT-Praktikum%2Fuit-admin-page%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fseadkurtovic%2FDocuments%2FUni%20%2FWiSe%202024-25%2FUIT%20IT-Praktikum%2Fuit-admin-page&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/getScanData/route.ts":
/*!******************************************!*\
  !*** ./src/app/api/getScanData/route.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);\n// src/app/api/getScanData/route.ts\n\n\nconst uri = 'mongodb+srv://raymonreddington55:s7R2ceGtBBMYzKqy@user-data.uxhxy.mongodb.net/uit.admin?retryWrites=true&w=majority&appName=user-data'; // Deine MongoDB-Verbindungs-URI\nconst client = new mongodb__WEBPACK_IMPORTED_MODULE_1__.MongoClient(uri);\nconst dbName = 'uit'; // Ersetze mit deinem DB-Namen\nconst collectionName = 'admin'; // Deine Collection für die Anker Scans\nasync function GET() {\n    try {\n        await client.connect();\n        const database = client.db(dbName);\n        const collection = database.collection(collectionName);\n        // Abrufen aller Einträge aus der Collection\n        const scanData = await collection.find({}).toArray();\n        // Die Daten, die an das Frontend gesendet werden\n        const formattedData = scanData.map((entry)=>({\n                Time: entry.Time,\n                ID: entry.ID,\n                Location: entry.Location\n            }));\n        // Rückgabe der Daten als JSON\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(formattedData);\n    } catch (error) {\n        console.error('Fehler beim Abrufen der Daten:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Fehler beim Abrufen der Daten'\n        }, {\n            status: 500\n        });\n    } finally{\n        await client.close();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9nZXRTY2FuRGF0YS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsbUNBQW1DO0FBQ1E7QUFDTDtBQUV0QyxNQUFNRSxNQUFNLHlJQUF5SSxnQ0FBZ0M7QUFDckwsTUFBTUMsU0FBUyxJQUFJRixnREFBV0EsQ0FBQ0M7QUFDL0IsTUFBTUUsU0FBUyxPQUFPLDhCQUE4QjtBQUNwRCxNQUFNQyxpQkFBaUIsU0FBUyx1Q0FBdUM7QUFFaEUsZUFBZUM7SUFDcEIsSUFBSTtRQUNGLE1BQU1ILE9BQU9JLE9BQU87UUFDcEIsTUFBTUMsV0FBV0wsT0FBT00sRUFBRSxDQUFDTDtRQUMzQixNQUFNTSxhQUFhRixTQUFTRSxVQUFVLENBQUNMO1FBRXZDLDRDQUE0QztRQUM1QyxNQUFNTSxXQUFXLE1BQU1ELFdBQVdFLElBQUksQ0FBQyxDQUFDLEdBQUdDLE9BQU87UUFFbEQsaURBQWlEO1FBQ2pELE1BQU1DLGdCQUFnQkgsU0FBU0ksR0FBRyxDQUFDLENBQUNDLFFBQWdCO2dCQUNsREMsTUFBTUQsTUFBTUMsSUFBSTtnQkFDaEJDLElBQUlGLE1BQU1FLEVBQUU7Z0JBQ1pDLFVBQVVILE1BQU1HLFFBQVE7WUFDMUI7UUFFQSw4QkFBOEI7UUFDOUIsT0FBT25CLHFEQUFZQSxDQUFDb0IsSUFBSSxDQUFDTjtJQUMzQixFQUFFLE9BQU9PLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLGtDQUFrQ0E7UUFDaEQsT0FBT3JCLHFEQUFZQSxDQUFDb0IsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBZ0MsR0FBRztZQUFFRSxRQUFRO1FBQUk7SUFDckYsU0FBVTtRQUNSLE1BQU1wQixPQUFPcUIsS0FBSztJQUNwQjtBQUNGIiwic291cmNlcyI6WyIvVXNlcnMvc2VhZGt1cnRvdmljL0RvY3VtZW50cy9VbmkgL1dpU2UgMjAyNC0yNS9VSVQgSVQtUHJha3Rpa3VtL3VpdC1hZG1pbi1wYWdlL3NyYy9hcHAvYXBpL2dldFNjYW5EYXRhL3JvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9hcHAvYXBpL2dldFNjYW5EYXRhL3JvdXRlLnRzXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInO1xuXG5jb25zdCB1cmkgPSAnbW9uZ29kYitzcnY6Ly9yYXltb25yZWRkaW5ndG9uNTU6czdSMmNlR3RCQk1ZektxeUB1c2VyLWRhdGEudXhoeHkubW9uZ29kYi5uZXQvdWl0LmFkbWluP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSZhcHBOYW1lPXVzZXItZGF0YSc7IC8vIERlaW5lIE1vbmdvREItVmVyYmluZHVuZ3MtVVJJXG5jb25zdCBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpKTtcbmNvbnN0IGRiTmFtZSA9ICd1aXQnOyAvLyBFcnNldHplIG1pdCBkZWluZW0gREItTmFtZW5cbmNvbnN0IGNvbGxlY3Rpb25OYW1lID0gJ2FkbWluJzsgLy8gRGVpbmUgQ29sbGVjdGlvbiBmw7xyIGRpZSBBbmtlciBTY2Fuc1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xuICB0cnkge1xuICAgIGF3YWl0IGNsaWVudC5jb25uZWN0KCk7XG4gICAgY29uc3QgZGF0YWJhc2UgPSBjbGllbnQuZGIoZGJOYW1lKTtcbiAgICBjb25zdCBjb2xsZWN0aW9uID0gZGF0YWJhc2UuY29sbGVjdGlvbihjb2xsZWN0aW9uTmFtZSk7XG5cbiAgICAvLyBBYnJ1ZmVuIGFsbGVyIEVpbnRyw6RnZSBhdXMgZGVyIENvbGxlY3Rpb25cbiAgICBjb25zdCBzY2FuRGF0YSA9IGF3YWl0IGNvbGxlY3Rpb24uZmluZCh7fSkudG9BcnJheSgpO1xuXG4gICAgLy8gRGllIERhdGVuLCBkaWUgYW4gZGFzIEZyb250ZW5kIGdlc2VuZGV0IHdlcmRlblxuICAgIGNvbnN0IGZvcm1hdHRlZERhdGEgPSBzY2FuRGF0YS5tYXAoKGVudHJ5OiBhbnkpID0+ICh7XG4gICAgICBUaW1lOiBlbnRyeS5UaW1lLFxuICAgICAgSUQ6IGVudHJ5LklELFxuICAgICAgTG9jYXRpb246IGVudHJ5LkxvY2F0aW9uLFxuICAgIH0pKTtcblxuICAgIC8vIFLDvGNrZ2FiZSBkZXIgRGF0ZW4gYWxzIEpTT05cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oZm9ybWF0dGVkRGF0YSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRmVobGVyIGJlaW0gQWJydWZlbiBkZXIgRGF0ZW46JywgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnRmVobGVyIGJlaW0gQWJydWZlbiBkZXIgRGF0ZW4nIH0sIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH0gZmluYWxseSB7XG4gICAgYXdhaXQgY2xpZW50LmNsb3NlKCk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJNb25nb0NsaWVudCIsInVyaSIsImNsaWVudCIsImRiTmFtZSIsImNvbGxlY3Rpb25OYW1lIiwiR0VUIiwiY29ubmVjdCIsImRhdGFiYXNlIiwiZGIiLCJjb2xsZWN0aW9uIiwic2NhbkRhdGEiLCJmaW5kIiwidG9BcnJheSIsImZvcm1hdHRlZERhdGEiLCJtYXAiLCJlbnRyeSIsIlRpbWUiLCJJRCIsIkxvY2F0aW9uIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsInN0YXR1cyIsImNsb3NlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/getScanData/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FgetScanData%2Froute&page=%2Fapi%2FgetScanData%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FgetScanData%2Froute.ts&appDir=%2FUsers%2Fseadkurtovic%2FDocuments%2FUni%20%2FWiSe%202024-25%2FUIT%20IT-Praktikum%2Fuit-admin-page%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fseadkurtovic%2FDocuments%2FUni%20%2FWiSe%202024-25%2FUIT%20IT-Praktikum%2Fuit-admin-page&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();