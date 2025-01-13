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
exports.id = "app/api/addDoc/route";
exports.ids = ["app/api/addDoc/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FaddDoc%2Froute&page=%2Fapi%2FaddDoc%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FaddDoc%2Froute.ts&appDir=%2FUsers%2Fseadkurtovic%2FDocuments%2FUni%20%2FWiSe%202024-25%2FUIT%20IT-Praktikum%2Fuit-admin-page%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fseadkurtovic%2FDocuments%2FUni%20%2FWiSe%202024-25%2FUIT%20IT-Praktikum%2Fuit-admin-page&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FaddDoc%2Froute&page=%2Fapi%2FaddDoc%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FaddDoc%2Froute.ts&appDir=%2FUsers%2Fseadkurtovic%2FDocuments%2FUni%20%2FWiSe%202024-25%2FUIT%20IT-Praktikum%2Fuit-admin-page%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fseadkurtovic%2FDocuments%2FUni%20%2FWiSe%202024-25%2FUIT%20IT-Praktikum%2Fuit-admin-page&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_seadkurtovic_Documents_Uni_WiSe_2024_25_UIT_IT_Praktikum_uit_admin_page_src_app_api_addDoc_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/addDoc/route.ts */ \"(rsc)/./src/app/api/addDoc/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/addDoc/route\",\n        pathname: \"/api/addDoc\",\n        filename: \"route\",\n        bundlePath: \"app/api/addDoc/route\"\n    },\n    resolvedPagePath: \"/Users/seadkurtovic/Documents/Uni /WiSe 2024-25/UIT IT-Praktikum/uit-admin-page/src/app/api/addDoc/route.ts\",\n    nextConfigOutput,\n    userland: _Users_seadkurtovic_Documents_Uni_WiSe_2024_25_UIT_IT_Praktikum_uit_admin_page_src_app_api_addDoc_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhZGREb2MlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmFkZERvYyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmFkZERvYyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnNlYWRrdXJ0b3ZpYyUyRkRvY3VtZW50cyUyRlVuaSUyMCUyRldpU2UlMjAyMDI0LTI1JTJGVUlUJTIwSVQtUHJha3Rpa3VtJTJGdWl0LWFkbWluLXBhZ2UlMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGc2VhZGt1cnRvdmljJTJGRG9jdW1lbnRzJTJGVW5pJTIwJTJGV2lTZSUyMDIwMjQtMjUlMkZVSVQlMjBJVC1QcmFrdGlrdW0lMkZ1aXQtYWRtaW4tcGFnZSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDMkQ7QUFDeEk7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9zZWFka3VydG92aWMvRG9jdW1lbnRzL1VuaSAvV2lTZSAyMDI0LTI1L1VJVCBJVC1QcmFrdGlrdW0vdWl0LWFkbWluLXBhZ2Uvc3JjL2FwcC9hcGkvYWRkRG9jL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hZGREb2Mvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hZGREb2NcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2FkZERvYy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9zZWFka3VydG92aWMvRG9jdW1lbnRzL1VuaSAvV2lTZSAyMDI0LTI1L1VJVCBJVC1QcmFrdGlrdW0vdWl0LWFkbWluLXBhZ2Uvc3JjL2FwcC9hcGkvYWRkRG9jL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FaddDoc%2Froute&page=%2Fapi%2FaddDoc%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FaddDoc%2Froute.ts&appDir=%2FUsers%2Fseadkurtovic%2FDocuments%2FUni%20%2FWiSe%202024-25%2FUIT%20IT-Praktikum%2Fuit-admin-page%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fseadkurtovic%2FDocuments%2FUni%20%2FWiSe%202024-25%2FUIT%20IT-Praktikum%2Fuit-admin-page&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "(rsc)/./src/app/api/addDoc/route.ts":
/*!*************************************!*\
  !*** ./src/app/api/addDoc/route.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n // Import NextResponse for response handling\nconst uri = 'mongodb+srv://raymonreddington55:s7R2ceGtBBMYzKqy@user-data.uxhxy.mongodb.net/uit.admin?retryWrites=true&w=majority&appName=user-data'; // Replace with your MongoDB connection URI\nasync function POST() {\n    try {\n        // Get current timestamp\n        const time = new Date();\n        // Generate a random ID between 0 and 24\n        const randomID = Math.floor(Math.random() * 25); // Math.random() * 25 gives a number between 0 and 24\n        // Dictionary mapping IDs to locations\n        const locationMap = {\n            0: \"Unknown\",\n            1: \"Accessibility\",\n            2: \"Blockchain\",\n            3: \"Extended Reality\",\n            4: \"Künstliche Intelligenz\",\n            5: \"Robotic Process Automation\",\n            6: \"User Experience Design\",\n            7: \"Vision & Trend Explorer (</digitalCampus>)\",\n            8: \"Big Atari WX 04.308\",\n            9: \"CoWorking 1 04.306\",\n            10: \"CoWorking 2 04.301\",\n            11: \"Community Kitchen WX 04.315\",\n            12: \"Cyber Space WX 04.309\",\n            13: \"Discovery Space WX 04.202\",\n            14: \"Genius Zone WX 04.206\",\n            15: \"Print Hub WX 04.303\",\n            16: \"Projektfläche 1 WX 04.212\",\n            17: \"Projektfläche 2 WX 04.210\",\n            18: \"Projektfläche 3 WX 04.207\",\n            19: \"Recruiting Center WX 04.302\",\n            20: \"Staff Kitchen WX 04.201\",\n            21: \"UniHall WX 04.313\",\n            22: \"User Test Studio 1 WX 04.305\",\n            23: \"User Test Studio 2 WX 04.304\",\n            24: \"WorkBench WX 04.213\"\n        };\n        // Fetch the location based on the random ID\n        const location = locationMap[randomID]; // Use the random ID to get the location from the map\n        // MongoDB client connection\n        const client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri);\n        await client.connect();\n        // Select database and collection\n        const db = client.db('uit'); // Replace with your database name\n        const collection = db.collection('admin'); // Replace with your collection name\n        // Document to be inserted\n        const newDocument = {\n            Time: time,\n            ID: randomID.toString(),\n            Location: location // Default value for Location\n        };\n        console.log(newDocument);\n        // Insert the document into the collection\n        const result = await collection.insertOne(newDocument);\n        // Close the MongoDB client connection\n        await client.close();\n        // Respond with success using NextResponse\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            message: 'Document added successfully',\n            data: result\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        console.error(error);\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            message: 'Error adding document',\n            error\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hZGREb2Mvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFzQztBQUNLLENBQUMsNENBQTRDO0FBRXhGLE1BQU1FLE1BQU0seUlBQXlJLDJDQUEyQztBQUV6TCxlQUFlQztJQUNwQixJQUFJO1FBQ0Ysd0JBQXdCO1FBQ3hCLE1BQU1DLE9BQU8sSUFBSUM7UUFFakIsd0NBQXdDO1FBQ3hDLE1BQU1DLFdBQVdDLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLLEtBQUsscURBQXFEO1FBRXRHLHNDQUFzQztRQUN0QyxNQUFNQyxjQUF5QztZQUMzQyxHQUFHO1lBQ0gsR0FBRztZQUNILEdBQUc7WUFDSCxHQUFHO1lBQ0gsR0FBRztZQUNILEdBQUc7WUFDSCxHQUFHO1lBQ0gsR0FBRztZQUNILEdBQUc7WUFDSCxHQUFHO1lBQ0gsSUFBSTtZQUNKLElBQUk7WUFDSixJQUFJO1lBQ0osSUFBSTtZQUNKLElBQUk7WUFDSixJQUFJO1lBQ0osSUFBSTtZQUNKLElBQUk7WUFDSixJQUFJO1lBQ0osSUFBSTtZQUNKLElBQUk7WUFDSixJQUFJO1lBQ0osSUFBSTtZQUNKLElBQUk7WUFDSixJQUFJO1FBQ1I7UUFFQSw0Q0FBNEM7UUFDNUMsTUFBTUMsV0FBV0QsV0FBVyxDQUFDSixTQUFTLEVBQUUscURBQXFEO1FBRTdGLDRCQUE0QjtRQUM1QixNQUFNTSxTQUFTLElBQUlaLGdEQUFXQSxDQUFDRTtRQUMvQixNQUFNVSxPQUFPQyxPQUFPO1FBRXBCLGlDQUFpQztRQUNqQyxNQUFNQyxLQUFLRixPQUFPRSxFQUFFLENBQUMsUUFBUSxrQ0FBa0M7UUFDL0QsTUFBTUMsYUFBYUQsR0FBR0MsVUFBVSxDQUFDLFVBQVUsb0NBQW9DO1FBRS9FLDBCQUEwQjtRQUMxQixNQUFNQyxjQUFjO1lBQ2xCQyxNQUFNYjtZQUNOYyxJQUFJWixTQUFTYSxRQUFRO1lBQ3JCQyxVQUFVVCxTQUFTLDZCQUE2QjtRQUNsRDtRQUVBVSxRQUFRQyxHQUFHLENBQUNOO1FBRVosMENBQTBDO1FBQzFDLE1BQU1PLFNBQVMsTUFBTVIsV0FBV1MsU0FBUyxDQUFDUjtRQUUxQyxzQ0FBc0M7UUFDdEMsTUFBTUosT0FBT2EsS0FBSztRQUVsQiwwQ0FBMEM7UUFDMUMsT0FBT3hCLHFEQUFZQSxDQUFDeUIsSUFBSSxDQUFDO1lBQUVDLFNBQVM7WUFBK0JDLE1BQU1MO1FBQU8sR0FBRztZQUFFTSxRQUFRO1FBQUk7SUFDbkcsRUFBRSxPQUFPQyxPQUFPO1FBQ2RULFFBQVFTLEtBQUssQ0FBQ0E7UUFDZCxPQUFPN0IscURBQVlBLENBQUN5QixJQUFJLENBQUM7WUFBRUMsU0FBUztZQUF5Qkc7UUFBTSxHQUFHO1lBQUVELFFBQVE7UUFBSTtJQUN0RjtBQUNGIiwic291cmNlcyI6WyIvVXNlcnMvc2VhZGt1cnRvdmljL0RvY3VtZW50cy9VbmkgL1dpU2UgMjAyNC0yNS9VSVQgSVQtUHJha3Rpa3VtL3VpdC1hZG1pbi1wYWdlL3NyYy9hcHAvYXBpL2FkZERvYy9yb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInO1xuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInOyAvLyBJbXBvcnQgTmV4dFJlc3BvbnNlIGZvciByZXNwb25zZSBoYW5kbGluZ1xuXG5jb25zdCB1cmkgPSAnbW9uZ29kYitzcnY6Ly9yYXltb25yZWRkaW5ndG9uNTU6czdSMmNlR3RCQk1ZektxeUB1c2VyLWRhdGEudXhoeHkubW9uZ29kYi5uZXQvdWl0LmFkbWluP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSZhcHBOYW1lPXVzZXItZGF0YSc7IC8vIFJlcGxhY2Ugd2l0aCB5b3VyIE1vbmdvREIgY29ubmVjdGlvbiBVUklcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QoKSB7XG4gIHRyeSB7XG4gICAgLy8gR2V0IGN1cnJlbnQgdGltZXN0YW1wXG4gICAgY29uc3QgdGltZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAvLyBHZW5lcmF0ZSBhIHJhbmRvbSBJRCBiZXR3ZWVuIDAgYW5kIDI0XG4gICAgY29uc3QgcmFuZG9tSUQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNSk7IC8vIE1hdGgucmFuZG9tKCkgKiAyNSBnaXZlcyBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDI0XG5cbiAgICAvLyBEaWN0aW9uYXJ5IG1hcHBpbmcgSURzIHRvIGxvY2F0aW9uc1xuICAgIGNvbnN0IGxvY2F0aW9uTWFwOiB7IFtrZXk6IG51bWJlcl06IHN0cmluZyB9ID0ge1xuICAgICAgICAwOiBcIlVua25vd25cIixcbiAgICAgICAgMTogXCJBY2Nlc3NpYmlsaXR5XCIsXG4gICAgICAgIDI6IFwiQmxvY2tjaGFpblwiLFxuICAgICAgICAzOiBcIkV4dGVuZGVkIFJlYWxpdHlcIixcbiAgICAgICAgNDogXCJLw7xuc3RsaWNoZSBJbnRlbGxpZ2VuelwiLFxuICAgICAgICA1OiBcIlJvYm90aWMgUHJvY2VzcyBBdXRvbWF0aW9uXCIsXG4gICAgICAgIDY6IFwiVXNlciBFeHBlcmllbmNlIERlc2lnblwiLFxuICAgICAgICA3OiBcIlZpc2lvbiAmIFRyZW5kIEV4cGxvcmVyICg8L2RpZ2l0YWxDYW1wdXM+KVwiLFxuICAgICAgICA4OiBcIkJpZyBBdGFyaSBXWCAwNC4zMDhcIixcbiAgICAgICAgOTogXCJDb1dvcmtpbmcgMSAwNC4zMDZcIixcbiAgICAgICAgMTA6IFwiQ29Xb3JraW5nIDIgMDQuMzAxXCIsXG4gICAgICAgIDExOiBcIkNvbW11bml0eSBLaXRjaGVuIFdYIDA0LjMxNVwiLFxuICAgICAgICAxMjogXCJDeWJlciBTcGFjZSBXWCAwNC4zMDlcIixcbiAgICAgICAgMTM6IFwiRGlzY292ZXJ5IFNwYWNlIFdYIDA0LjIwMlwiLFxuICAgICAgICAxNDogXCJHZW5pdXMgWm9uZSBXWCAwNC4yMDZcIixcbiAgICAgICAgMTU6IFwiUHJpbnQgSHViIFdYIDA0LjMwM1wiLFxuICAgICAgICAxNjogXCJQcm9qZWt0ZmzDpGNoZSAxIFdYIDA0LjIxMlwiLFxuICAgICAgICAxNzogXCJQcm9qZWt0ZmzDpGNoZSAyIFdYIDA0LjIxMFwiLFxuICAgICAgICAxODogXCJQcm9qZWt0ZmzDpGNoZSAzIFdYIDA0LjIwN1wiLFxuICAgICAgICAxOTogXCJSZWNydWl0aW5nIENlbnRlciBXWCAwNC4zMDJcIixcbiAgICAgICAgMjA6IFwiU3RhZmYgS2l0Y2hlbiBXWCAwNC4yMDFcIixcbiAgICAgICAgMjE6IFwiVW5pSGFsbCBXWCAwNC4zMTNcIixcbiAgICAgICAgMjI6IFwiVXNlciBUZXN0IFN0dWRpbyAxIFdYIDA0LjMwNVwiLFxuICAgICAgICAyMzogXCJVc2VyIFRlc3QgU3R1ZGlvIDIgV1ggMDQuMzA0XCIsXG4gICAgICAgIDI0OiBcIldvcmtCZW5jaCBXWCAwNC4yMTNcIixcbiAgICB9O1xuXG4gICAgLy8gRmV0Y2ggdGhlIGxvY2F0aW9uIGJhc2VkIG9uIHRoZSByYW5kb20gSURcbiAgICBjb25zdCBsb2NhdGlvbiA9IGxvY2F0aW9uTWFwW3JhbmRvbUlEXTsgLy8gVXNlIHRoZSByYW5kb20gSUQgdG8gZ2V0IHRoZSBsb2NhdGlvbiBmcm9tIHRoZSBtYXBcblxuICAgIC8vIE1vbmdvREIgY2xpZW50IGNvbm5lY3Rpb25cbiAgICBjb25zdCBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpKTtcbiAgICBhd2FpdCBjbGllbnQuY29ubmVjdCgpO1xuXG4gICAgLy8gU2VsZWN0IGRhdGFiYXNlIGFuZCBjb2xsZWN0aW9uXG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoJ3VpdCcpOyAvLyBSZXBsYWNlIHdpdGggeW91ciBkYXRhYmFzZSBuYW1lXG4gICAgY29uc3QgY29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ2FkbWluJyk7IC8vIFJlcGxhY2Ugd2l0aCB5b3VyIGNvbGxlY3Rpb24gbmFtZVxuXG4gICAgLy8gRG9jdW1lbnQgdG8gYmUgaW5zZXJ0ZWRcbiAgICBjb25zdCBuZXdEb2N1bWVudCA9IHtcbiAgICAgIFRpbWU6IHRpbWUsXG4gICAgICBJRDogcmFuZG9tSUQudG9TdHJpbmcoKSwgLy8gRGVmYXVsdCB2YWx1ZSBmb3IgSURcbiAgICAgIExvY2F0aW9uOiBsb2NhdGlvbiAvLyBEZWZhdWx0IHZhbHVlIGZvciBMb2NhdGlvblxuICAgIH07XG5cbiAgICBjb25zb2xlLmxvZyhuZXdEb2N1bWVudClcblxuICAgIC8vIEluc2VydCB0aGUgZG9jdW1lbnQgaW50byB0aGUgY29sbGVjdGlvblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbGxlY3Rpb24uaW5zZXJ0T25lKG5ld0RvY3VtZW50KTtcblxuICAgIC8vIENsb3NlIHRoZSBNb25nb0RCIGNsaWVudCBjb25uZWN0aW9uXG4gICAgYXdhaXQgY2xpZW50LmNsb3NlKCk7XG5cbiAgICAvLyBSZXNwb25kIHdpdGggc3VjY2VzcyB1c2luZyBOZXh0UmVzcG9uc2VcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiAnRG9jdW1lbnQgYWRkZWQgc3VjY2Vzc2Z1bGx5JywgZGF0YTogcmVzdWx0IH0sIHsgc3RhdHVzOiAyMDAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogJ0Vycm9yIGFkZGluZyBkb2N1bWVudCcsIGVycm9yIH0sIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsIk5leHRSZXNwb25zZSIsInVyaSIsIlBPU1QiLCJ0aW1lIiwiRGF0ZSIsInJhbmRvbUlEIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibG9jYXRpb25NYXAiLCJsb2NhdGlvbiIsImNsaWVudCIsImNvbm5lY3QiLCJkYiIsImNvbGxlY3Rpb24iLCJuZXdEb2N1bWVudCIsIlRpbWUiLCJJRCIsInRvU3RyaW5nIiwiTG9jYXRpb24iLCJjb25zb2xlIiwibG9nIiwicmVzdWx0IiwiaW5zZXJ0T25lIiwiY2xvc2UiLCJqc29uIiwibWVzc2FnZSIsImRhdGEiLCJzdGF0dXMiLCJlcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/addDoc/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FaddDoc%2Froute&page=%2Fapi%2FaddDoc%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FaddDoc%2Froute.ts&appDir=%2FUsers%2Fseadkurtovic%2FDocuments%2FUni%20%2FWiSe%202024-25%2FUIT%20IT-Praktikum%2Fuit-admin-page%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fseadkurtovic%2FDocuments%2FUni%20%2FWiSe%202024-25%2FUIT%20IT-Praktikum%2Fuit-admin-page&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();