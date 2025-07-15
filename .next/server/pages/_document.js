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
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./src/pages/_document.tsx":
/*!*********************************!*\
  !*** ./src/pages/_document.tsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyDocument)\n/* harmony export */ });\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"@emotion/react/jsx-dev-runtime\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/server/create-instance */ \"@emotion/server/create-instance\");\n/* harmony import */ var _utils_createEmotionCache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/createEmotionCache */ \"./src/utils/createEmotionCache.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_3__, _utils_createEmotionCache__WEBPACK_IMPORTED_MODULE_4__]);\n([_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_3__, _utils_createEmotionCache__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nclass MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_2___default()) {\n    static async getInitialProps(ctx) {\n        // Resolution order\n        //\n        // On the server:\n        // 1. app.getInitialProps\n        // 2. page.getInitialProps\n        // 3. document.getInitialProps\n        // 4. app.render\n        // 5. page.render\n        // 6. document.render\n        //\n        // On the server with error:\n        // 1. document.getInitialProps\n        // 2. app.render\n        // 3. page.render\n        // 4. document.render\n        //\n        // On the client\n        // 1. app.getInitialProps\n        // 2. page.getInitialProps\n        // 3. app.render\n        // 4. page.render\n        const originalRenderPage = ctx.renderPage;\n        // You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.\n        // However, be aware that it can have global side effects.\n        const cache = (0,_utils_createEmotionCache__WEBPACK_IMPORTED_MODULE_4__.createEmotionCache)();\n        const { extractCriticalToChunks } = (0,_emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(cache);\n        ctx.renderPage = ()=>originalRenderPage({\n                enhanceApp: (App)=>function EnhanceApp(props) {\n                        return /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(App, {\n                            emotionCache: cache,\n                            ...props\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookpro/Downloads/project/src/pages/_document.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 20\n                        }, this);\n                    }\n            });\n        const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_2___default().getInitialProps(ctx);\n        // This is important. It prevents Emotion to render invalid HTML.\n        // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153\n        const emotionStyles = extractCriticalToChunks(initialProps.html);\n        const emotionStyleTags = emotionStyles.styles.map((style)=>/*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"style\", {\n                \"data-emotion\": `${style.key} ${style.ids.join(\" \")}`,\n                // eslint-disable-next-line react/no-danger\n                dangerouslySetInnerHTML: {\n                    __html: style.css\n                }\n            }, style.key, false, {\n                fileName: \"/Users/macbookpro/Downloads/project/src/pages/_document.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this));\n        return {\n            ...initialProps,\n            styles: [\n                ...react__WEBPACK_IMPORTED_MODULE_1___default().Children.toArray(initialProps.styles),\n                ...emotionStyleTags\n            ]\n        };\n    }\n    render() {\n        return /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Html, {\n            lang: \"en\",\n            children: [\n                /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Head, {\n                    children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Downloads/project/src/pages/_document.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Downloads/project/src/pages/_document.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                    children: [\n                        /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Main, {}, void 0, false, {\n                            fileName: \"/Users/macbookpro/Downloads/project/src/pages/_document.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.NextScript, {}, void 0, false, {\n                            fileName: \"/Users/macbookpro/Downloads/project/src/pages/_document.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/macbookpro/Downloads/project/src/pages/_document.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/macbookpro/Downloads/project/src/pages/_document.tsx\",\n            lineNumber: 66,\n            columnNumber: 7\n        }, this);\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2RvY3VtZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDNkU7QUFDckM7QUFDRjtBQUVqRCxNQUFNUSxtQkFBbUJQLHNEQUFRQTtJQUM5QyxhQUFhUSxnQkFBZ0JDLEdBQW9CLEVBQUU7UUFDakQsbUJBQW1CO1FBQ25CLEVBQUU7UUFDRixpQkFBaUI7UUFDakIseUJBQXlCO1FBQ3pCLDBCQUEwQjtRQUMxQiw4QkFBOEI7UUFDOUIsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixxQkFBcUI7UUFDckIsRUFBRTtRQUNGLDRCQUE0QjtRQUM1Qiw4QkFBOEI7UUFDOUIsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixxQkFBcUI7UUFDckIsRUFBRTtRQUNGLGdCQUFnQjtRQUNoQix5QkFBeUI7UUFDekIsMEJBQTBCO1FBQzFCLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFFakIsTUFBTUMscUJBQXFCRCxJQUFJRSxVQUFVO1FBRXpDLHdHQUF3RztRQUN4RywwREFBMEQ7UUFDMUQsTUFBTUMsUUFBUU4sNkVBQWtCQTtRQUNoQyxNQUFNLEVBQUVPLHVCQUF1QixFQUFFLEdBQUdSLDJFQUFtQkEsQ0FBQ087UUFFeERILElBQUlFLFVBQVUsR0FBRyxJQUNmRCxtQkFBbUI7Z0JBQ2pCSSxZQUFZLENBQUNDLE1BQ1gsU0FBU0MsV0FBV0MsS0FBSzt3QkFDdkIscUJBQU8sdUVBQUNGOzRCQUFJRyxjQUFjTjs0QkFBUSxHQUFHSyxLQUFLOzs7Ozs7b0JBQzVDO1lBQ0o7UUFFRixNQUFNRSxlQUFlLE1BQU1uQixvRUFBd0IsQ0FBQ1M7UUFDcEQsaUVBQWlFO1FBQ2pFLDZFQUE2RTtRQUM3RSxNQUFNVyxnQkFBZ0JQLHdCQUF3Qk0sYUFBYUUsSUFBSTtRQUMvRCxNQUFNQyxtQkFBbUJGLGNBQWNHLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLHNCQUNqRCx1RUFBQ0E7Z0JBQ0NDLGdCQUFjLENBQUMsRUFBRUQsTUFBTUUsR0FBRyxDQUFDLENBQUMsRUFBRUYsTUFBTUcsR0FBRyxDQUFDQyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUVuRCwyQ0FBMkM7Z0JBQzNDQyx5QkFBeUI7b0JBQUVDLFFBQVFOLE1BQU1PLEdBQUc7Z0JBQUM7ZUFGeENQLE1BQU1FLEdBQUc7Ozs7O1FBTWxCLE9BQU87WUFDTCxHQUFHUixZQUFZO1lBQ2ZJLFFBQVE7bUJBQUl4QixxREFBYyxDQUFDbUMsT0FBTyxDQUFDZixhQUFhSSxNQUFNO21CQUFNRDthQUFpQjtRQUMvRTtJQUNGO0lBRUFhLFNBQVM7UUFDUCxxQkFDRSx1RUFBQ2xDLCtDQUFJQTtZQUFDbUMsTUFBSzs7OEJBQ1QsdUVBQUNsQywrQ0FBSUE7OEJBQ0gscUZBQUNtQzt3QkFDQ0MsS0FBSTt3QkFDSkMsTUFBSzs7Ozs7Ozs7Ozs7OEJBR1QsdUVBQUNDOztzQ0FDQyx1RUFBQ3JDLCtDQUFJQTs7Ozs7c0NBQ0wsdUVBQUNDLHFEQUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJbkI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1tYXRlcmlhbHVpLWFwcC8uL3NyYy9wYWdlcy9fZG9jdW1lbnQudHN4PzE4OGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEb2N1bWVudCwgeyBIdG1sLCBIZWFkLCBNYWluLCBOZXh0U2NyaXB0LCBEb2N1bWVudFByb3BzLCBEb2N1bWVudENvbnRleHQgfSBmcm9tICduZXh0L2RvY3VtZW50JztcbmltcG9ydCBjcmVhdGVFbW90aW9uU2VydmVyIGZyb20gJ0BlbW90aW9uL3NlcnZlci9jcmVhdGUtaW5zdGFuY2UnO1xuaW1wb3J0IHsgY3JlYXRlRW1vdGlvbkNhY2hlIH0gZnJvbSAnQC91dGlscy9jcmVhdGVFbW90aW9uQ2FjaGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeURvY3VtZW50IGV4dGVuZHMgRG9jdW1lbnQ8RG9jdW1lbnRQcm9wcz4ge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGN0eDogRG9jdW1lbnRDb250ZXh0KSB7XG4gICAgLy8gUmVzb2x1dGlvbiBvcmRlclxuICAgIC8vXG4gICAgLy8gT24gdGhlIHNlcnZlcjpcbiAgICAvLyAxLiBhcHAuZ2V0SW5pdGlhbFByb3BzXG4gICAgLy8gMi4gcGFnZS5nZXRJbml0aWFsUHJvcHNcbiAgICAvLyAzLiBkb2N1bWVudC5nZXRJbml0aWFsUHJvcHNcbiAgICAvLyA0LiBhcHAucmVuZGVyXG4gICAgLy8gNS4gcGFnZS5yZW5kZXJcbiAgICAvLyA2LiBkb2N1bWVudC5yZW5kZXJcbiAgICAvL1xuICAgIC8vIE9uIHRoZSBzZXJ2ZXIgd2l0aCBlcnJvcjpcbiAgICAvLyAxLiBkb2N1bWVudC5nZXRJbml0aWFsUHJvcHNcbiAgICAvLyAyLiBhcHAucmVuZGVyXG4gICAgLy8gMy4gcGFnZS5yZW5kZXJcbiAgICAvLyA0LiBkb2N1bWVudC5yZW5kZXJcbiAgICAvL1xuICAgIC8vIE9uIHRoZSBjbGllbnRcbiAgICAvLyAxLiBhcHAuZ2V0SW5pdGlhbFByb3BzXG4gICAgLy8gMi4gcGFnZS5nZXRJbml0aWFsUHJvcHNcbiAgICAvLyAzLiBhcHAucmVuZGVyXG4gICAgLy8gNC4gcGFnZS5yZW5kZXJcblxuICAgIGNvbnN0IG9yaWdpbmFsUmVuZGVyUGFnZSA9IGN0eC5yZW5kZXJQYWdlO1xuICAgIFxuICAgIC8vIFlvdSBjYW4gY29uc2lkZXIgc2hhcmluZyB0aGUgc2FtZSBFbW90aW9uIGNhY2hlIGJldHdlZW4gYWxsIHRoZSBTU1IgcmVxdWVzdHMgdG8gc3BlZWQgdXAgcGVyZm9ybWFuY2UuXG4gICAgLy8gSG93ZXZlciwgYmUgYXdhcmUgdGhhdCBpdCBjYW4gaGF2ZSBnbG9iYWwgc2lkZSBlZmZlY3RzLlxuICAgIGNvbnN0IGNhY2hlID0gY3JlYXRlRW1vdGlvbkNhY2hlKCk7XG4gICAgY29uc3QgeyBleHRyYWN0Q3JpdGljYWxUb0NodW5rcyB9ID0gY3JlYXRlRW1vdGlvblNlcnZlcihjYWNoZSk7XG5cbiAgICBjdHgucmVuZGVyUGFnZSA9ICgpID0+XG4gICAgICBvcmlnaW5hbFJlbmRlclBhZ2Uoe1xuICAgICAgICBlbmhhbmNlQXBwOiAoQXBwOiBhbnkpID0+XG4gICAgICAgICAgZnVuY3Rpb24gRW5oYW5jZUFwcChwcm9wcykge1xuICAgICAgICAgICAgcmV0dXJuIDxBcHAgZW1vdGlvbkNhY2hlPXtjYWNoZX0gey4uLnByb3BzfSAvPjtcbiAgICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICBjb25zdCBpbml0aWFsUHJvcHMgPSBhd2FpdCBEb2N1bWVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcbiAgICAvLyBUaGlzIGlzIGltcG9ydGFudC4gSXQgcHJldmVudHMgRW1vdGlvbiB0byByZW5kZXIgaW52YWxpZCBIVE1MLlxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbXVpL21hdGVyaWFsLXVpL2lzc3Vlcy8yNjU2MSNpc3N1ZWNvbW1lbnQtODU1Mjg2MTUzXG4gICAgY29uc3QgZW1vdGlvblN0eWxlcyA9IGV4dHJhY3RDcml0aWNhbFRvQ2h1bmtzKGluaXRpYWxQcm9wcy5odG1sKTtcbiAgICBjb25zdCBlbW90aW9uU3R5bGVUYWdzID0gZW1vdGlvblN0eWxlcy5zdHlsZXMubWFwKChzdHlsZTogYW55KSA9PiAoXG4gICAgICA8c3R5bGVcbiAgICAgICAgZGF0YS1lbW90aW9uPXtgJHtzdHlsZS5rZXl9ICR7c3R5bGUuaWRzLmpvaW4oJyAnKX1gfVxuICAgICAgICBrZXk9e3N0eWxlLmtleX1cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWRhbmdlclxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHN0eWxlLmNzcyB9fVxuICAgICAgLz5cbiAgICApKTtcblxuICAgIHJldHVybiB7XG4gICAgICAuLi5pbml0aWFsUHJvcHMsXG4gICAgICBzdHlsZXM6IFsuLi5SZWFjdC5DaGlsZHJlbi50b0FycmF5KGluaXRpYWxQcm9wcy5zdHlsZXMpLCAuLi5lbW90aW9uU3R5bGVUYWdzXSxcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8SHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MzAwLDQwMCw1MDAsNzAwJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8Ym9keT5cbiAgICAgICAgICA8TWFpbiAvPlxuICAgICAgICAgIDxOZXh0U2NyaXB0IC8+XG4gICAgICAgIDwvYm9keT5cbiAgICAgIDwvSHRtbD5cbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJEb2N1bWVudCIsIkh0bWwiLCJIZWFkIiwiTWFpbiIsIk5leHRTY3JpcHQiLCJjcmVhdGVFbW90aW9uU2VydmVyIiwiY3JlYXRlRW1vdGlvbkNhY2hlIiwiTXlEb2N1bWVudCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsIm9yaWdpbmFsUmVuZGVyUGFnZSIsInJlbmRlclBhZ2UiLCJjYWNoZSIsImV4dHJhY3RDcml0aWNhbFRvQ2h1bmtzIiwiZW5oYW5jZUFwcCIsIkFwcCIsIkVuaGFuY2VBcHAiLCJwcm9wcyIsImVtb3Rpb25DYWNoZSIsImluaXRpYWxQcm9wcyIsImVtb3Rpb25TdHlsZXMiLCJodG1sIiwiZW1vdGlvblN0eWxlVGFncyIsInN0eWxlcyIsIm1hcCIsInN0eWxlIiwiZGF0YS1lbW90aW9uIiwia2V5IiwiaWRzIiwiam9pbiIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiY3NzIiwiQ2hpbGRyZW4iLCJ0b0FycmF5IiwicmVuZGVyIiwibGFuZyIsImxpbmsiLCJyZWwiLCJocmVmIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_document.tsx\n");

/***/ }),

/***/ "./src/utils/createEmotionCache.ts":
/*!*****************************************!*\
  !*** ./src/utils/createEmotionCache.ts ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createEmotionCache: () => (/* binding */ createEmotionCache)\n/* harmony export */ });\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/cache */ \"@emotion/cache\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_cache__WEBPACK_IMPORTED_MODULE_0__]);\n_emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n// prepend: true moves MUI styles to the top of the <head> so they're loaded first.\n// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.\nfunction createEmotionCache() {\n    return (0,_emotion_cache__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        key: \"css\",\n        prepend: true\n    });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvY3JlYXRlRW1vdGlvbkNhY2hlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXlDO0FBRXpDLG1GQUFtRjtBQUNuRixxR0FBcUc7QUFDOUYsU0FBU0M7SUFDZCxPQUFPRCwwREFBV0EsQ0FBQztRQUFFRSxLQUFLO1FBQU9DLFNBQVM7SUFBSztBQUNqRCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1tYXRlcmlhbHVpLWFwcC8uL3NyYy91dGlscy9jcmVhdGVFbW90aW9uQ2FjaGUudHM/ZWJjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlQ2FjaGUgZnJvbSAnQGVtb3Rpb24vY2FjaGUnO1xuXG4vLyBwcmVwZW5kOiB0cnVlIG1vdmVzIE1VSSBzdHlsZXMgdG8gdGhlIHRvcCBvZiB0aGUgPGhlYWQ+IHNvIHRoZXkncmUgbG9hZGVkIGZpcnN0LlxuLy8gSXQgYWxsb3dzIGRldmVsb3BlcnMgdG8gZWFzaWx5IG92ZXJyaWRlIE1VSSBzdHlsZXMgd2l0aCBvdGhlciBzdHlsaW5nIHNvbHV0aW9ucywgbGlrZSBDU1MgbW9kdWxlcy5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbW90aW9uQ2FjaGUoKSB7XG4gIHJldHVybiBjcmVhdGVDYWNoZSh7IGtleTogJ2NzcycsIHByZXBlbmQ6IHRydWUgfSk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ2FjaGUiLCJjcmVhdGVFbW90aW9uQ2FjaGUiLCJrZXkiLCJwcmVwZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/createEmotionCache.ts\n");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "@emotion/cache":
/*!*********************************!*\
  !*** external "@emotion/cache" ***!
  \*********************************/
/***/ ((module) => {

module.exports = import("@emotion/cache");;

/***/ }),

/***/ "@emotion/react/jsx-dev-runtime":
/*!*************************************************!*\
  !*** external "@emotion/react/jsx-dev-runtime" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = import("@emotion/react/jsx-dev-runtime");;

/***/ }),

/***/ "@emotion/server/create-instance":
/*!**************************************************!*\
  !*** external "@emotion/server/create-instance" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = import("@emotion/server/create-instance");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_document.tsx")));
module.exports = __webpack_exports__;

})();