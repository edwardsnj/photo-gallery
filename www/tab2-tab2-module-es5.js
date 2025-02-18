(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"], {
    /***/
    "./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js":
    /*!**************************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js ***!
      \**************************************************************************/

    /*! exports provided: CameraSource, CameraDirection, CameraResultType, FilesystemDirectory, FilesystemEncoding, HapticsImpactStyle, HapticsNotificationType, KeyboardStyle, KeyboardResize, ActionSheetOptionStyle, PermissionType, PhotosAlbumType, StatusBarStyle, StatusBarAnimation */

    /***/
    function node_modulesCapacitorCoreDistEsmCorePluginDefinitionsJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CameraSource", function () {
        return CameraSource;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CameraDirection", function () {
        return CameraDirection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CameraResultType", function () {
        return CameraResultType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilesystemDirectory", function () {
        return FilesystemDirectory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilesystemEncoding", function () {
        return FilesystemEncoding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HapticsImpactStyle", function () {
        return HapticsImpactStyle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HapticsNotificationType", function () {
        return HapticsNotificationType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KeyboardStyle", function () {
        return KeyboardStyle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KeyboardResize", function () {
        return KeyboardResize;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActionSheetOptionStyle", function () {
        return ActionSheetOptionStyle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PermissionType", function () {
        return PermissionType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PhotosAlbumType", function () {
        return PhotosAlbumType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StatusBarStyle", function () {
        return StatusBarStyle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StatusBarAnimation", function () {
        return StatusBarAnimation;
      });

      var CameraSource;

      (function (CameraSource) {
        CameraSource["Prompt"] = "PROMPT";
        CameraSource["Camera"] = "CAMERA";
        CameraSource["Photos"] = "PHOTOS";
      })(CameraSource || (CameraSource = {}));

      var CameraDirection;

      (function (CameraDirection) {
        CameraDirection["Rear"] = "REAR";
        CameraDirection["Front"] = "FRONT";
      })(CameraDirection || (CameraDirection = {}));

      var CameraResultType;

      (function (CameraResultType) {
        CameraResultType["Uri"] = "uri";
        CameraResultType["Base64"] = "base64";
        CameraResultType["DataUrl"] = "dataUrl";
      })(CameraResultType || (CameraResultType = {}));

      var FilesystemDirectory;

      (function (FilesystemDirectory) {
        /**
         * The Documents directory
         * On iOS it's the app's documents directory.
         * Use this directory to store user-generated content.
         * On Android it's the Public Documents folder, so it's accessible from other apps.
         * It's not accesible on Android 10 unless the app enables legacy External Storage
         * by adding `android:requestLegacyExternalStorage="true"` in the `application` tag
         * in the `AndroidManifest.xml`
         */
        FilesystemDirectory["Documents"] = "DOCUMENTS";
        /**
         * The Data directory
         * On iOS it will use the Documents directory
         * On Android it's the directory holding application files.
         * Files will be deleted when the application is uninstalled.
         */

        FilesystemDirectory["Data"] = "DATA";
        /**
         * The Cache directory
         * Can be deleted in cases of low memory, so use this directory to write app-specific files
         * that your app can re-create easily.
         */

        FilesystemDirectory["Cache"] = "CACHE";
        /**
         * The external directory
         * On iOS it will use the Documents directory
         * On Android it's the directory on the primary shared/external
         * storage device where the application can place persistent files it owns.
         * These files are internal to the applications, and not typically visible
         * to the user as media.
         * Files will be deleted when the application is uninstalled.
         */

        FilesystemDirectory["External"] = "EXTERNAL";
        /**
         * The external storage directory
         * On iOS it will use the Documents directory
         * On Android it's the primary shared/external storage directory.
         * It's not accesible on Android 10 unless the app enables legacy External Storage
         * by adding `android:requestLegacyExternalStorage="true"` in the `application` tag
         * in the `AndroidManifest.xml`
         */

        FilesystemDirectory["ExternalStorage"] = "EXTERNAL_STORAGE";
      })(FilesystemDirectory || (FilesystemDirectory = {}));

      var FilesystemEncoding;

      (function (FilesystemEncoding) {
        FilesystemEncoding["UTF8"] = "utf8";
        FilesystemEncoding["ASCII"] = "ascii";
        FilesystemEncoding["UTF16"] = "utf16";
      })(FilesystemEncoding || (FilesystemEncoding = {}));

      var HapticsImpactStyle;

      (function (HapticsImpactStyle) {
        HapticsImpactStyle["Heavy"] = "HEAVY";
        HapticsImpactStyle["Medium"] = "MEDIUM";
        HapticsImpactStyle["Light"] = "LIGHT";
      })(HapticsImpactStyle || (HapticsImpactStyle = {}));

      var HapticsNotificationType;

      (function (HapticsNotificationType) {
        HapticsNotificationType["SUCCESS"] = "SUCCESS";
        HapticsNotificationType["WARNING"] = "WARNING";
        HapticsNotificationType["ERROR"] = "ERROR";
      })(HapticsNotificationType || (HapticsNotificationType = {}));

      var KeyboardStyle;

      (function (KeyboardStyle) {
        KeyboardStyle["Dark"] = "DARK";
        KeyboardStyle["Light"] = "LIGHT";
      })(KeyboardStyle || (KeyboardStyle = {}));

      var KeyboardResize;

      (function (KeyboardResize) {
        KeyboardResize["Body"] = "body";
        KeyboardResize["Ionic"] = "ionic";
        KeyboardResize["Native"] = "native";
        KeyboardResize["None"] = "none";
      })(KeyboardResize || (KeyboardResize = {}));

      var ActionSheetOptionStyle;

      (function (ActionSheetOptionStyle) {
        ActionSheetOptionStyle["Default"] = "DEFAULT";
        ActionSheetOptionStyle["Destructive"] = "DESTRUCTIVE";
        ActionSheetOptionStyle["Cancel"] = "CANCEL";
      })(ActionSheetOptionStyle || (ActionSheetOptionStyle = {})); //


      var PermissionType;

      (function (PermissionType) {
        PermissionType["Camera"] = "camera";
        PermissionType["Photos"] = "photos";
        PermissionType["Geolocation"] = "geolocation";
        PermissionType["Notifications"] = "notifications";
        PermissionType["ClipboardRead"] = "clipboard-read";
        PermissionType["ClipboardWrite"] = "clipboard-write";
        PermissionType["Microphone"] = "microphone";
      })(PermissionType || (PermissionType = {}));

      var PhotosAlbumType;

      (function (PhotosAlbumType) {
        /**
         * Album is a "smart" album (such as Favorites or Recently Added)
         */
        PhotosAlbumType["Smart"] = "smart";
        /**
         * Album is a cloud-shared album
         */

        PhotosAlbumType["Shared"] = "shared";
        /**
         * Album is a user-created album
         */

        PhotosAlbumType["User"] = "user";
      })(PhotosAlbumType || (PhotosAlbumType = {}));

      var StatusBarStyle;

      (function (StatusBarStyle) {
        /**
         * Light text for dark backgrounds.
         */
        StatusBarStyle["Dark"] = "DARK";
        /**
         * Dark text for light backgrounds.
         */

        StatusBarStyle["Light"] = "LIGHT";
      })(StatusBarStyle || (StatusBarStyle = {}));

      var StatusBarAnimation;

      (function (StatusBarAnimation) {
        /**
         * No animation during show/hide.
         */
        StatusBarAnimation["None"] = "NONE";
        /**
         * Slide animation during show/hide.
         */

        StatusBarAnimation["Slide"] = "SLIDE";
        /**
         * Fade animation during show/hide.
         */

        StatusBarAnimation["Fade"] = "FADE";
      })(StatusBarAnimation || (StatusBarAnimation = {})); //# sourceMappingURL=core-plugin-definitions.js.map

      /***/

    },

    /***/
    "./node_modules/@capacitor/core/dist/esm/global.js":
    /*!*********************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/global.js ***!
      \*********************************************************/

    /*! exports provided: Capacitor, Plugins */

    /***/
    function node_modulesCapacitorCoreDistEsmGlobalJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Capacitor", function () {
        return Capacitor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Plugins", function () {
        return Plugins;
      });
      /* harmony import */


      var _web_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./web-runtime */
      "./node_modules/@capacitor/core/dist/esm/web-runtime.js"); // Create our default Capacitor instance, which will be
      // overridden on native platforms


      var Capacitor = function (globalThis) {
        // Create a new CapacitorWeb instance if one doesn't already exist on globalThis
        // Ensure the global is assigned the same Capacitor instance,
        // then export Capacitor so it can be imported in other modules
        return globalThis.Capacitor = globalThis.Capacitor || new _web_runtime__WEBPACK_IMPORTED_MODULE_0__["CapacitorWeb"]();
      }( // figure out the current globalThis, such as "window", "self" or "global"
      // ensure errors are not thrown in an node SSR environment or web worker
      typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});

      var Plugins = Capacitor.Plugins; //# sourceMappingURL=global.js.map

      /***/
    },

    /***/
    "./node_modules/@capacitor/core/dist/esm/index.js":
    /*!********************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/index.js ***!
      \********************************************************/

    /*! exports provided: CameraSource, CameraDirection, CameraResultType, FilesystemDirectory, FilesystemEncoding, HapticsImpactStyle, HapticsNotificationType, KeyboardStyle, KeyboardResize, ActionSheetOptionStyle, PermissionType, PhotosAlbumType, StatusBarStyle, StatusBarAnimation, Capacitor, Plugins, AccessibilityPluginWeb, Accessibility, AppPluginWeb, App, BrowserPluginWeb, Browser, CameraPluginWeb, Camera, ClipboardPluginWeb, Clipboard, FilesystemPluginWeb, Filesystem, GeolocationPluginWeb, Geolocation, DevicePluginWeb, Device, LocalNotificationsPluginWeb, LocalNotifications, SharePluginWeb, Share, ModalsPluginWeb, Modals, MotionPluginWeb, Motion, NetworkPluginWeb, Network, PermissionsPluginWeb, Permissions, SplashScreenPluginWeb, SplashScreen, StoragePluginWeb, Storage, ToastPluginWeb, Toast, registerWebPlugin, WebPluginRegistry, WebPlugins, WebPlugin, mergeWebPlugins, mergeWebPlugin */

    /***/
    function node_modulesCapacitorCoreDistEsmIndexJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./core-plugin-definitions */
      "./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CameraSource", function () {
        return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["CameraSource"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CameraDirection", function () {
        return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["CameraDirection"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CameraResultType", function () {
        return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["CameraResultType"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FilesystemDirectory", function () {
        return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["FilesystemDirectory"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FilesystemEncoding", function () {
        return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["FilesystemEncoding"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "HapticsImpactStyle", function () {
        return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["HapticsImpactStyle"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "HapticsNotificationType", function () {
        return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["HapticsNotificationType"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "KeyboardStyle", function () {
        return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["KeyboardStyle"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "KeyboardResize", function () {
        return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["KeyboardResize"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ActionSheetOptionStyle", function () {
        return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["ActionSheetOptionStyle"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PermissionType", function () {
        return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["PermissionType"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PhotosAlbumType", function () {
        return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["PhotosAlbumType"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "StatusBarStyle", function () {
        return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["StatusBarStyle"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "StatusBarAnimation", function () {
        return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["StatusBarAnimation"];
      });
      /* harmony import */


      var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./global */
      "./node_modules/@capacitor/core/dist/esm/global.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Capacitor", function () {
        return _global__WEBPACK_IMPORTED_MODULE_1__["Capacitor"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Plugins", function () {
        return _global__WEBPACK_IMPORTED_MODULE_1__["Plugins"];
      });
      /* harmony import */


      var _web_plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./web-plugins */
      "./node_modules/@capacitor/core/dist/esm/web-plugins.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AccessibilityPluginWeb", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["AccessibilityPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Accessibility", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Accessibility"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AppPluginWeb", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["AppPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "App", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["App"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BrowserPluginWeb", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["BrowserPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Browser", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Browser"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CameraPluginWeb", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["CameraPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Camera", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Camera"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ClipboardPluginWeb", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["ClipboardPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Clipboard", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Clipboard"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FilesystemPluginWeb", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["FilesystemPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Filesystem", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Filesystem"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "GeolocationPluginWeb", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["GeolocationPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Geolocation", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Geolocation"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DevicePluginWeb", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["DevicePluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Device", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Device"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LocalNotificationsPluginWeb", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["LocalNotificationsPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LocalNotifications", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["LocalNotifications"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SharePluginWeb", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["SharePluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Share", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Share"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ModalsPluginWeb", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["ModalsPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Modals", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Modals"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MotionPluginWeb", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["MotionPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Motion", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Motion"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NetworkPluginWeb", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["NetworkPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Network", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Network"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PermissionsPluginWeb", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["PermissionsPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Permissions", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Permissions"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SplashScreenPluginWeb", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["SplashScreenPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SplashScreen", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["SplashScreen"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "StoragePluginWeb", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["StoragePluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Storage", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Storage"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ToastPluginWeb", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["ToastPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Toast", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Toast"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "registerWebPlugin", function () {
        return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["registerWebPlugin"];
      });
      /* harmony import */


      var _web_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./web/index */
      "./node_modules/@capacitor/core/dist/esm/web/index.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WebPluginRegistry", function () {
        return _web_index__WEBPACK_IMPORTED_MODULE_3__["WebPluginRegistry"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WebPlugins", function () {
        return _web_index__WEBPACK_IMPORTED_MODULE_3__["WebPlugins"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WebPlugin", function () {
        return _web_index__WEBPACK_IMPORTED_MODULE_3__["WebPlugin"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "mergeWebPlugins", function () {
        return _web_index__WEBPACK_IMPORTED_MODULE_3__["mergeWebPlugins"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "mergeWebPlugin", function () {
        return _web_index__WEBPACK_IMPORTED_MODULE_3__["mergeWebPlugin"];
      }); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "./node_modules/@capacitor/core/dist/esm/util.js":
    /*!*******************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/util.js ***!
      \*******************************************************/

    /*! exports provided: extend, uuid4 */

    /***/
    function node_modulesCapacitorCoreDistEsmUtilJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "extend", function () {
        return extend;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "uuid4", function () {
        return uuid4;
      });

      var extend = function extend(target) {
        var objs = [];

        for (var _i = 1; _i < arguments.length; _i++) {
          objs[_i - 1] = arguments[_i];
        }

        objs.forEach(function (o) {
          if (o && typeof o === 'object') {
            for (var k in o) {
              if (o.hasOwnProperty(k)) {
                target[k] = o[k];
              }
            }
          }
        });
        return target;
      };

      var uuid4 = function uuid4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          var r = Math.random() * 16 | 0,
              v = c === 'x' ? r : r & 0x3 | 0x8;
          return v.toString(16);
        });
      }; //# sourceMappingURL=util.js.map

      /***/

    },

    /***/
    "./node_modules/@capacitor/core/dist/esm/web-plugins.js":
    /*!**************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web-plugins.js ***!
      \**************************************************************/

    /*! exports provided: AccessibilityPluginWeb, Accessibility, AppPluginWeb, App, BrowserPluginWeb, Browser, CameraPluginWeb, Camera, ClipboardPluginWeb, Clipboard, FilesystemPluginWeb, Filesystem, GeolocationPluginWeb, Geolocation, DevicePluginWeb, Device, LocalNotificationsPluginWeb, LocalNotifications, SharePluginWeb, Share, ModalsPluginWeb, Modals, MotionPluginWeb, Motion, NetworkPluginWeb, Network, PermissionsPluginWeb, Permissions, SplashScreenPluginWeb, SplashScreen, StoragePluginWeb, Storage, ToastPluginWeb, Toast, registerWebPlugin */

    /***/
    function node_modulesCapacitorCoreDistEsmWebPluginsJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "registerWebPlugin", function () {
        return registerWebPlugin;
      });
      /* harmony import */


      var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./global */
      "./node_modules/@capacitor/core/dist/esm/global.js");
      /* harmony import */


      var _web_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./web/index */
      "./node_modules/@capacitor/core/dist/esm/web/index.js");
      /* harmony import */


      var _web_accessibility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./web/accessibility */
      "./node_modules/@capacitor/core/dist/esm/web/accessibility.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AccessibilityPluginWeb", function () {
        return _web_accessibility__WEBPACK_IMPORTED_MODULE_2__["AccessibilityPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Accessibility", function () {
        return _web_accessibility__WEBPACK_IMPORTED_MODULE_2__["Accessibility"];
      });
      /* harmony import */


      var _web_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./web/app */
      "./node_modules/@capacitor/core/dist/esm/web/app.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AppPluginWeb", function () {
        return _web_app__WEBPACK_IMPORTED_MODULE_3__["AppPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "App", function () {
        return _web_app__WEBPACK_IMPORTED_MODULE_3__["App"];
      });
      /* harmony import */


      var _web_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./web/browser */
      "./node_modules/@capacitor/core/dist/esm/web/browser.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BrowserPluginWeb", function () {
        return _web_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Browser", function () {
        return _web_browser__WEBPACK_IMPORTED_MODULE_4__["Browser"];
      });
      /* harmony import */


      var _web_camera__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./web/camera */
      "./node_modules/@capacitor/core/dist/esm/web/camera.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CameraPluginWeb", function () {
        return _web_camera__WEBPACK_IMPORTED_MODULE_5__["CameraPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Camera", function () {
        return _web_camera__WEBPACK_IMPORTED_MODULE_5__["Camera"];
      });
      /* harmony import */


      var _web_clipboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./web/clipboard */
      "./node_modules/@capacitor/core/dist/esm/web/clipboard.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ClipboardPluginWeb", function () {
        return _web_clipboard__WEBPACK_IMPORTED_MODULE_6__["ClipboardPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Clipboard", function () {
        return _web_clipboard__WEBPACK_IMPORTED_MODULE_6__["Clipboard"];
      });
      /* harmony import */


      var _web_filesystem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./web/filesystem */
      "./node_modules/@capacitor/core/dist/esm/web/filesystem.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FilesystemPluginWeb", function () {
        return _web_filesystem__WEBPACK_IMPORTED_MODULE_7__["FilesystemPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Filesystem", function () {
        return _web_filesystem__WEBPACK_IMPORTED_MODULE_7__["Filesystem"];
      });
      /* harmony import */


      var _web_geolocation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./web/geolocation */
      "./node_modules/@capacitor/core/dist/esm/web/geolocation.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "GeolocationPluginWeb", function () {
        return _web_geolocation__WEBPACK_IMPORTED_MODULE_8__["GeolocationPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Geolocation", function () {
        return _web_geolocation__WEBPACK_IMPORTED_MODULE_8__["Geolocation"];
      });
      /* harmony import */


      var _web_device__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./web/device */
      "./node_modules/@capacitor/core/dist/esm/web/device.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DevicePluginWeb", function () {
        return _web_device__WEBPACK_IMPORTED_MODULE_9__["DevicePluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Device", function () {
        return _web_device__WEBPACK_IMPORTED_MODULE_9__["Device"];
      });
      /* harmony import */


      var _web_local_notifications__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./web/local-notifications */
      "./node_modules/@capacitor/core/dist/esm/web/local-notifications.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LocalNotificationsPluginWeb", function () {
        return _web_local_notifications__WEBPACK_IMPORTED_MODULE_10__["LocalNotificationsPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LocalNotifications", function () {
        return _web_local_notifications__WEBPACK_IMPORTED_MODULE_10__["LocalNotifications"];
      });
      /* harmony import */


      var _web_share__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./web/share */
      "./node_modules/@capacitor/core/dist/esm/web/share.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SharePluginWeb", function () {
        return _web_share__WEBPACK_IMPORTED_MODULE_11__["SharePluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Share", function () {
        return _web_share__WEBPACK_IMPORTED_MODULE_11__["Share"];
      });
      /* harmony import */


      var _web_modals__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./web/modals */
      "./node_modules/@capacitor/core/dist/esm/web/modals.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ModalsPluginWeb", function () {
        return _web_modals__WEBPACK_IMPORTED_MODULE_12__["ModalsPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Modals", function () {
        return _web_modals__WEBPACK_IMPORTED_MODULE_12__["Modals"];
      });
      /* harmony import */


      var _web_motion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./web/motion */
      "./node_modules/@capacitor/core/dist/esm/web/motion.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MotionPluginWeb", function () {
        return _web_motion__WEBPACK_IMPORTED_MODULE_13__["MotionPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Motion", function () {
        return _web_motion__WEBPACK_IMPORTED_MODULE_13__["Motion"];
      });
      /* harmony import */


      var _web_network__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./web/network */
      "./node_modules/@capacitor/core/dist/esm/web/network.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NetworkPluginWeb", function () {
        return _web_network__WEBPACK_IMPORTED_MODULE_14__["NetworkPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Network", function () {
        return _web_network__WEBPACK_IMPORTED_MODULE_14__["Network"];
      });
      /* harmony import */


      var _web_permissions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./web/permissions */
      "./node_modules/@capacitor/core/dist/esm/web/permissions.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PermissionsPluginWeb", function () {
        return _web_permissions__WEBPACK_IMPORTED_MODULE_15__["PermissionsPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Permissions", function () {
        return _web_permissions__WEBPACK_IMPORTED_MODULE_15__["Permissions"];
      });
      /* harmony import */


      var _web_splash_screen__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./web/splash-screen */
      "./node_modules/@capacitor/core/dist/esm/web/splash-screen.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SplashScreenPluginWeb", function () {
        return _web_splash_screen__WEBPACK_IMPORTED_MODULE_16__["SplashScreenPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SplashScreen", function () {
        return _web_splash_screen__WEBPACK_IMPORTED_MODULE_16__["SplashScreen"];
      });
      /* harmony import */


      var _web_storage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./web/storage */
      "./node_modules/@capacitor/core/dist/esm/web/storage.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "StoragePluginWeb", function () {
        return _web_storage__WEBPACK_IMPORTED_MODULE_17__["StoragePluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Storage", function () {
        return _web_storage__WEBPACK_IMPORTED_MODULE_17__["Storage"];
      });
      /* harmony import */


      var _web_toast__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./web/toast */
      "./node_modules/@capacitor/core/dist/esm/web/toast.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ToastPluginWeb", function () {
        return _web_toast__WEBPACK_IMPORTED_MODULE_18__["ToastPluginWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Toast", function () {
        return _web_toast__WEBPACK_IMPORTED_MODULE_18__["Toast"];
      });

      Object(_web_index__WEBPACK_IMPORTED_MODULE_1__["mergeWebPlugins"])(_global__WEBPACK_IMPORTED_MODULE_0__["Plugins"]);

      var registerWebPlugin = function registerWebPlugin(plugin) {
        Object(_web_index__WEBPACK_IMPORTED_MODULE_1__["mergeWebPlugin"])(_global__WEBPACK_IMPORTED_MODULE_0__["Plugins"], plugin);
      }; //# sourceMappingURL=web-plugins.js.map

      /***/

    },

    /***/
    "./node_modules/@capacitor/core/dist/esm/web-runtime.js":
    /*!**************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web-runtime.js ***!
      \**************************************************************/

    /*! exports provided: CapacitorWeb */

    /***/
    function node_modulesCapacitorCoreDistEsmWebRuntimeJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CapacitorWeb", function () {
        return CapacitorWeb;
      });

      var CapacitorWeb =
      /** @class */
      function () {
        function CapacitorWeb() {
          var _this = this;

          this.platform = 'web';
          this.isNative = false; // Need to assign here to avoid having to define every plugin but still
          // get the typed benefits of the provided plugins in PluginRegistry

          this.Plugins = {}; // Gracefully degrade in non-Proxy supporting engines, e.g. IE11. This
          // effectively means that trying to access an unavailable plugin will
          // locally throw, but this is still better than throwing a syntax error.

          if (typeof Proxy !== 'undefined') {
            // Build a proxy for the Plugins object that returns the "Noop Plugin"
            // if a plugin isn't available
            this.Plugins = new Proxy(this.Plugins, {
              get: function get(target, prop) {
                if (typeof target[prop] === 'undefined') {
                  var thisRef_1 = _this;
                  return new Proxy({}, {
                    get: function get(_target, _prop) {
                      if (typeof _target[_prop] === 'undefined') {
                        return thisRef_1.pluginMethodNoop.bind(thisRef_1, _target, _prop, prop);
                      } else {
                        return _target[_prop];
                      }
                    }
                  });
                } else {
                  return target[prop];
                }
              }
            });
          }
        }

        CapacitorWeb.prototype.pluginMethodNoop = function (_target, _prop, pluginName) {
          return Promise.reject(pluginName + " does not have web implementation.");
        };

        CapacitorWeb.prototype.getPlatform = function () {
          return this.platform;
        };

        CapacitorWeb.prototype.isPluginAvailable = function (name) {
          return this.Plugins.hasOwnProperty(name);
        };

        CapacitorWeb.prototype.convertFileSrc = function (filePath) {
          return filePath;
        };

        CapacitorWeb.prototype.handleError = function (e) {
          console.error(e);
        };

        return CapacitorWeb;
      }(); //# sourceMappingURL=web-runtime.js.map

      /***/

    },

    /***/
    "./node_modules/@capacitor/core/dist/esm/web/accessibility.js":
    /*!********************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/accessibility.js ***!
      \********************************************************************/

    /*! exports provided: AccessibilityPluginWeb, Accessibility */

    /***/
    function node_modulesCapacitorCoreDistEsmWebAccessibilityJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccessibilityPluginWeb", function () {
        return AccessibilityPluginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Accessibility", function () {
        return Accessibility;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/@ionic/angular/node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "./node_modules/@capacitor/core/dist/esm/web/index.js");

      var AccessibilityPluginWeb =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AccessibilityPluginWeb, _super);

        function AccessibilityPluginWeb() {
          return _super.call(this, {
            name: 'Accessibility',
            platforms: ['web']
          }) || this;
        }

        AccessibilityPluginWeb.prototype.isScreenReaderEnabled = function () {
          throw new Error('Feature not available in the browser');
        };

        AccessibilityPluginWeb.prototype.speak = function (options) {
          if (!('speechSynthesis' in window)) {
            return Promise.reject('Browser does not support the Speech Synthesis API');
          }

          var utterance = new SpeechSynthesisUtterance(options.value);

          if (options.language) {
            utterance.lang = options.language;
          }

          window.speechSynthesis.speak(utterance);
          return Promise.resolve();
        };

        return AccessibilityPluginWeb;
      }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

      var Accessibility = new AccessibilityPluginWeb(); //# sourceMappingURL=accessibility.js.map

      /***/
    },

    /***/
    "./node_modules/@capacitor/core/dist/esm/web/app.js":
    /*!**********************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/app.js ***!
      \**********************************************************/

    /*! exports provided: AppPluginWeb, App */

    /***/
    function node_modulesCapacitorCoreDistEsmWebAppJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppPluginWeb", function () {
        return AppPluginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "App", function () {
        return App;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/@ionic/angular/node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "./node_modules/@capacitor/core/dist/esm/web/index.js");

      var AppPluginWeb =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AppPluginWeb, _super);

        function AppPluginWeb() {
          var _this = _super.call(this, {
            name: 'App',
            platforms: ['web']
          }) || this;

          if (typeof document !== 'undefined') {
            document.addEventListener('visibilitychange', _this.handleVisibilityChange.bind(_this), false);
          }

          return _this;
        }

        AppPluginWeb.prototype.exitApp = function () {
          throw new Error('Method not implemented.');
        };

        AppPluginWeb.prototype.canOpenUrl = function (_options) {
          return Promise.resolve({
            value: true
          });
        };

        AppPluginWeb.prototype.openUrl = function (_options) {
          return Promise.resolve({
            completed: true
          });
        };

        AppPluginWeb.prototype.getLaunchUrl = function () {
          return Promise.resolve({
            url: ''
          });
        };

        AppPluginWeb.prototype.getState = function () {
          return Promise.resolve({
            isActive: document.hidden !== true
          });
        };

        AppPluginWeb.prototype.handleVisibilityChange = function () {
          var data = {
            isActive: document.hidden !== true
          };
          this.notifyListeners('appStateChange', data);
        };

        return AppPluginWeb;
      }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

      var App = new AppPluginWeb(); //# sourceMappingURL=app.js.map

      /***/
    },

    /***/
    "./node_modules/@capacitor/core/dist/esm/web/browser.js":
    /*!**************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/browser.js ***!
      \**************************************************************/

    /*! exports provided: BrowserPluginWeb, Browser */

    /***/
    function node_modulesCapacitorCoreDistEsmWebBrowserJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BrowserPluginWeb", function () {
        return BrowserPluginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Browser", function () {
        return Browser;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/@ionic/angular/node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "./node_modules/@capacitor/core/dist/esm/web/index.js");

      var BrowserPluginWeb =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BrowserPluginWeb, _super);

        function BrowserPluginWeb() {
          return _super.call(this, {
            name: 'Browser',
            platforms: ['web']
          }) || this;
        }

        BrowserPluginWeb.prototype.open = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              this._lastWindow = window.open(options.url, options.windowName || '_blank');
              return [2
              /*return*/
              , Promise.resolve()];
            });
          });
        };

        BrowserPluginWeb.prototype.prefetch = function (_options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              // Does nothing
              return [2
              /*return*/
              , Promise.resolve()];
            });
          });
        };

        BrowserPluginWeb.prototype.close = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              this._lastWindow && this._lastWindow.close();
              return [2
              /*return*/
              , Promise.resolve()];
            });
          });
        };

        return BrowserPluginWeb;
      }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

      var Browser = new BrowserPluginWeb(); //# sourceMappingURL=browser.js.map

      /***/
    },

    /***/
    "./node_modules/@capacitor/core/dist/esm/web/camera.js":
    /*!*************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/camera.js ***!
      \*************************************************************/

    /*! exports provided: CameraPluginWeb, Camera */

    /***/
    function node_modulesCapacitorCoreDistEsmWebCameraJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CameraPluginWeb", function () {
        return CameraPluginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Camera", function () {
        return Camera;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/@ionic/angular/node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "./node_modules/@capacitor/core/dist/esm/web/index.js");
      /* harmony import */


      var _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../core-plugin-definitions */
      "./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js");

      var CameraPluginWeb =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CameraPluginWeb, _super);

        function CameraPluginWeb() {
          return _super.call(this, {
            name: 'Camera',
            platforms: ['web']
          }) || this;
        }

        CameraPluginWeb.prototype.getPhoto = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              return [2
              /*return*/
              , new Promise(function (resolve, reject) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                  var cameraModal_1, e_1;

                  var _this = this;

                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        if (!options.webUseInput) return [3
                        /*break*/
                        , 1];
                        this.fileInputExperience(options, resolve);
                        return [3
                        /*break*/
                        , 7];

                      case 1:
                        if (!customElements.get('pwa-camera-modal')) return [3
                        /*break*/
                        , 6];
                        cameraModal_1 = document.createElement('pwa-camera-modal');
                        document.body.appendChild(cameraModal_1);
                        _a.label = 2;

                      case 2:
                        _a.trys.push([2, 4,, 5]);

                        return [4
                        /*yield*/
                        , cameraModal_1.componentOnReady()];

                      case 3:
                        _a.sent();

                        cameraModal_1.addEventListener('onPhoto', function (e) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                            var photo, _a;

                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                              switch (_b.label) {
                                case 0:
                                  photo = e.detail;
                                  if (!(photo === null)) return [3
                                  /*break*/
                                  , 1];
                                  reject('User cancelled photos app');
                                  return [3
                                  /*break*/
                                  , 4];

                                case 1:
                                  if (!(photo instanceof Error)) return [3
                                  /*break*/
                                  , 2];
                                  reject(photo.message);
                                  return [3
                                  /*break*/
                                  , 4];

                                case 2:
                                  _a = resolve;
                                  return [4
                                  /*yield*/
                                  , this._getCameraPhoto(photo, options)];

                                case 3:
                                  _a.apply(void 0, [_b.sent()]);

                                  _b.label = 4;

                                case 4:
                                  cameraModal_1.dismiss();
                                  document.body.removeChild(cameraModal_1);
                                  return [2
                                  /*return*/
                                  ];
                              }
                            });
                          });
                        });
                        cameraModal_1.present();
                        return [3
                        /*break*/
                        , 5];

                      case 4:
                        e_1 = _a.sent();
                        this.fileInputExperience(options, resolve);
                        return [3
                        /*break*/
                        , 5];

                      case 5:
                        return [3
                        /*break*/
                        , 7];

                      case 6:
                        console.error("Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/pwa-elements.");
                        this.fileInputExperience(options, resolve);
                        _a.label = 7;

                      case 7:
                        return [2
                        /*return*/
                        ];
                    }
                  });
                });
              })];
            });
          });
        };

        CameraPluginWeb.prototype.fileInputExperience = function (options, resolve) {
          var input = document.querySelector('#_capacitor-camera-input');

          var cleanup = function cleanup() {
            input.parentNode && input.parentNode.removeChild(input);
          };

          if (!input) {
            input = document.createElement('input');
            input.id = '_capacitor-camera-input';
            input.type = 'file';
            document.body.appendChild(input);
          }

          input.accept = 'image/*';
          input.capture = true;

          if (options.source === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Photos || options.source === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Prompt) {
            input.removeAttribute('capture');
          } else if (options.direction === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraDirection"].Front) {
            input.capture = 'user';
          } else if (options.direction === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraDirection"].Rear) {
            input.capture = 'environment';
          }

          input.addEventListener('change', function (_e) {
            var file = input.files[0];
            var format = 'jpeg';

            if (file.type === 'image/png') {
              format = 'png';
            } else if (file.type === 'image/gif') {
              format = 'gif';
            }

            if (options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].DataUrl || options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64) {
              var reader_1 = new FileReader();
              reader_1.addEventListener('load', function () {
                if (options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].DataUrl) {
                  resolve({
                    dataUrl: reader_1.result,
                    format: format
                  });
                } else if (options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64) {
                  var b64 = reader_1.result.split(',')[1];
                  resolve({
                    base64String: b64,
                    format: format
                  });
                }

                cleanup();
              });
              reader_1.readAsDataURL(file);
            } else {
              resolve({
                webPath: URL.createObjectURL(file),
                format: format
              });
              cleanup();
            }
          });
          input.click();
        };

        CameraPluginWeb.prototype._getCameraPhoto = function (photo, options) {
          return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            var format = photo.type.split('/')[1];

            if (options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Uri) {
              resolve({
                webPath: URL.createObjectURL(photo),
                format: format
              });
            } else {
              reader.readAsDataURL(photo);

              reader.onloadend = function () {
                var r = reader.result;

                if (options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].DataUrl) {
                  resolve({
                    dataUrl: r,
                    format: format
                  });
                } else {
                  resolve({
                    base64String: r.split(',')[1],
                    format: format
                  });
                }
              };

              reader.onerror = function (e) {
                reject(e);
              };
            }
          });
        };

        return CameraPluginWeb;
      }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

      var Camera = new CameraPluginWeb(); //# sourceMappingURL=camera.js.map

      /***/
    },

    /***/
    "./node_modules/@capacitor/core/dist/esm/web/clipboard.js":
    /*!****************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/clipboard.js ***!
      \****************************************************************/

    /*! exports provided: ClipboardPluginWeb, Clipboard */

    /***/
    function node_modulesCapacitorCoreDistEsmWebClipboardJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClipboardPluginWeb", function () {
        return ClipboardPluginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Clipboard", function () {
        return Clipboard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/@ionic/angular/node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "./node_modules/@capacitor/core/dist/esm/web/index.js");

      var ClipboardPluginWeb =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ClipboardPluginWeb, _super);

        function ClipboardPluginWeb() {
          return _super.call(this, {
            name: 'Clipboard',
            platforms: ['web']
          }) || this;
        }

        ClipboardPluginWeb.prototype.write = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var blob, clipboardItemInput, err_1;

            var _a;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
              switch (_b.label) {
                case 0:
                  if (!navigator.clipboard) {
                    return [2
                    /*return*/
                    , Promise.reject('Clipboard API not available in this browser')];
                  }

                  if (!(options.string !== undefined || options.url)) return [3
                  /*break*/
                  , 2];

                  if (!navigator.clipboard.writeText) {
                    return [2
                    /*return*/
                    , Promise.reject('Writting to clipboard not supported in this browser')];
                  }

                  return [4
                  /*yield*/
                  , navigator.clipboard.writeText(options.string !== undefined ? options.string : options.url)];

                case 1:
                  _b.sent();

                  return [3
                  /*break*/
                  , 10];

                case 2:
                  if (!options.image) return [3
                  /*break*/
                  , 9];

                  if (!navigator.clipboard.write) {
                    return [2
                    /*return*/
                    , Promise.reject('Setting images not supported in this browser')];
                  }

                  _b.label = 3;

                case 3:
                  _b.trys.push([3, 7,, 8]);

                  return [4
                  /*yield*/
                  , fetch(options.image)];

                case 4:
                  return [4
                  /*yield*/
                  , _b.sent().blob()];

                case 5:
                  blob = _b.sent();
                  clipboardItemInput = new ClipboardItem((_a = {}, _a[blob.type] = blob, _a));
                  return [4
                  /*yield*/
                  , navigator.clipboard.write([clipboardItemInput])];

                case 6:
                  _b.sent();

                  return [3
                  /*break*/
                  , 8];

                case 7:
                  err_1 = _b.sent();
                  return [2
                  /*return*/
                  , Promise.reject('Failed to write image')];

                case 8:
                  return [3
                  /*break*/
                  , 10];

                case 9:
                  return [2
                  /*return*/
                  , Promise.reject('Nothing to write')];

                case 10:
                  return [2
                  /*return*/
                  , Promise.resolve()];
              }
            });
          });
        };

        ClipboardPluginWeb.prototype.read = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var clipboardItems, type, clipboardBlob, data, err_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  if (!navigator.clipboard) {
                    return [2
                    /*return*/
                    , Promise.reject('Clipboard API not available in this browser')];
                  }

                  if (!!navigator.clipboard.read) return [3
                  /*break*/
                  , 1];

                  if (!navigator.clipboard.readText) {
                    return [2
                    /*return*/
                    , Promise.reject('Reading from clipboard not supported in this browser')];
                  }

                  return [2
                  /*return*/
                  , this.readText()];

                case 1:
                  _a.trys.push([1, 5,, 6]);

                  return [4
                  /*yield*/
                  , navigator.clipboard.read()];

                case 2:
                  clipboardItems = _a.sent();
                  type = clipboardItems[0].types[0];
                  return [4
                  /*yield*/
                  , clipboardItems[0].getType(type)];

                case 3:
                  clipboardBlob = _a.sent();
                  return [4
                  /*yield*/
                  , this._getBlobData(clipboardBlob, type)];

                case 4:
                  data = _a.sent();
                  return [2
                  /*return*/
                  , Promise.resolve({
                    value: data,
                    type: type
                  })];

                case 5:
                  err_2 = _a.sent();
                  return [2
                  /*return*/
                  , this.readText()];

                case 6:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        };

        ClipboardPluginWeb.prototype.readText = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var text;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  return [4
                  /*yield*/
                  , navigator.clipboard.readText()];

                case 1:
                  text = _a.sent();
                  return [2
                  /*return*/
                  , Promise.resolve({
                    value: text,
                    type: 'text/plain'
                  })];
              }
            });
          });
        };

        ClipboardPluginWeb.prototype._getBlobData = function (clipboardBlob, type) {
          return new Promise(function (resolve, reject) {
            var reader = new FileReader();

            if (type.includes('image')) {
              reader.readAsDataURL(clipboardBlob);
            } else {
              reader.readAsText(clipboardBlob);
            }

            reader.onloadend = function () {
              var r = reader.result;
              resolve(r);
            };

            reader.onerror = function (e) {
              reject(e);
            };
          });
        };

        return ClipboardPluginWeb;
      }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

      var Clipboard = new ClipboardPluginWeb(); //# sourceMappingURL=clipboard.js.map

      /***/
    },

    /***/
    "./node_modules/@capacitor/core/dist/esm/web/device.js":
    /*!*************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/device.js ***!
      \*************************************************************/

    /*! exports provided: DevicePluginWeb, Device */

    /***/
    function node_modulesCapacitorCoreDistEsmWebDeviceJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DevicePluginWeb", function () {
        return DevicePluginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Device", function () {
        return Device;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/@ionic/angular/node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "./node_modules/@capacitor/core/dist/esm/web/index.js");
      /* harmony import */


      var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../util */
      "./node_modules/@capacitor/core/dist/esm/util.js");

      var DevicePluginWeb =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DevicePluginWeb, _super);

        function DevicePluginWeb() {
          return _super.call(this, {
            name: 'Device',
            platforms: ['web']
          }) || this;
        }

        DevicePluginWeb.prototype.getInfo = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var ua, uaFields;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              ua = navigator.userAgent;
              uaFields = this.parseUa(ua);
              return [2
              /*return*/
              , Promise.resolve({
                model: uaFields.model,
                platform: 'web',
                appVersion: '',
                appBuild: '',
                appId: '',
                appName: '',
                operatingSystem: uaFields.operatingSystem,
                osVersion: uaFields.osVersion,
                manufacturer: navigator.vendor,
                isVirtual: false,
                uuid: this.getUid()
              })];
            });
          });
        };

        DevicePluginWeb.prototype.getBatteryInfo = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var battery, e_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  battery = {};
                  _a.label = 1;

                case 1:
                  _a.trys.push([1, 3,, 4]);

                  return [4
                  /*yield*/
                  , navigator.getBattery()];

                case 2:
                  battery = _a.sent();
                  return [3
                  /*break*/
                  , 4];

                case 3:
                  e_1 = _a.sent();
                  return [3
                  /*break*/
                  , 4];

                case 4:
                  return [2
                  /*return*/
                  , Promise.resolve({
                    batteryLevel: battery.level,
                    isCharging: battery.charging
                  })];
              }
            });
          });
        };

        DevicePluginWeb.prototype.getLanguageCode = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              return [2
              /*return*/
              , {
                value: navigator.language
              }];
            });
          });
        };

        DevicePluginWeb.prototype.parseUa = function (_ua) {
          var uaFields = {};
          var start = _ua.indexOf('(') + 1;

          var end = _ua.indexOf(') AppleWebKit');

          if (_ua.indexOf(') Gecko') !== -1) {
            end = _ua.indexOf(') Gecko');
          }

          var fields = _ua.substring(start, end);

          if (_ua.indexOf('Android') !== -1) {
            uaFields.model = fields.replace('; wv', '').split('; ').pop().split(' Build')[0];
            uaFields.osVersion = fields.split('; ')[1];
          } else {
            uaFields.model = fields.split('; ')[0];

            if (navigator.oscpu) {
              uaFields.osVersion = navigator.oscpu;
            } else {
              if (_ua.indexOf('Windows') !== -1) {
                uaFields.osVersion = fields;
              } else {
                var lastParts = fields.split('; ').pop().replace(' like Mac OS X', '').split(' ');
                uaFields.osVersion = lastParts[lastParts.length - 1].replace(/_/g, '.');
              }
            }
          }

          if (/android/i.test(_ua)) {
            uaFields.operatingSystem = 'android';
          } else if (/iPad|iPhone|iPod/.test(_ua) && !window.MSStream) {
            uaFields.operatingSystem = 'ios';
          } else if (/Win/.test(_ua)) {
            uaFields.operatingSystem = 'windows';
          } else if (/Mac/i.test(_ua)) {
            uaFields.operatingSystem = 'mac';
          } else {
            uaFields.operatingSystem = 'unknown';
          }

          return uaFields;
        };

        DevicePluginWeb.prototype.getUid = function () {
          var uid = window.localStorage.getItem('_capuid');

          if (uid) {
            return uid;
          }

          uid = Object(_util__WEBPACK_IMPORTED_MODULE_2__["uuid4"])();
          window.localStorage.setItem('_capuid', uid);
          return uid;
        };

        return DevicePluginWeb;
      }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

      var Device = new DevicePluginWeb(); //# sourceMappingURL=device.js.map

      /***/
    },

    /***/
    "./node_modules/@capacitor/core/dist/esm/web/filesystem.js":
    /*!*****************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/filesystem.js ***!
      \*****************************************************************/

    /*! exports provided: FilesystemPluginWeb, Filesystem */

    /***/
    function node_modulesCapacitorCoreDistEsmWebFilesystemJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilesystemPluginWeb", function () {
        return FilesystemPluginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Filesystem", function () {
        return Filesystem;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/@ionic/angular/node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "./node_modules/@capacitor/core/dist/esm/web/index.js");
      /* harmony import */


      var _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../core-plugin-definitions */
      "./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js");

      var FilesystemPluginWeb =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FilesystemPluginWeb, _super);

        function FilesystemPluginWeb() {
          var _this = _super.call(this, {
            name: 'Filesystem',
            platforms: ['web']
          }) || this;

          _this.DEFAULT_DIRECTORY = _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["FilesystemDirectory"].Data;
          _this.DB_VERSION = 1;
          _this.DB_NAME = 'Disc';
          _this._writeCmds = ['add', 'put', 'delete'];
          return _this;
        }

        FilesystemPluginWeb.prototype.initDb = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              if (this._db !== undefined) {
                return [2
                /*return*/
                , this._db];
              }

              if (!('indexedDB' in window)) {
                throw new Error('This browser doesn\'t support IndexedDB');
              }

              return [2
              /*return*/
              , new Promise(function (resolve, reject) {
                var request = indexedDB.open(_this.DB_NAME, _this.DB_VERSION);
                request.onupgradeneeded = FilesystemPluginWeb.doUpgrade;

                request.onsuccess = function () {
                  _this._db = request.result;
                  resolve(request.result);
                };

                request.onerror = function () {
                  return reject(request.error);
                };

                request.onblocked = function () {
                  console.warn('db blocked');
                };
              })];
            });
          });
        };

        FilesystemPluginWeb.doUpgrade = function (event) {
          var eventTarget = event.target;
          var db = eventTarget.result;

          switch (event.oldVersion) {
            case 0:
            case 1:
            default:
              if (db.objectStoreNames.contains('FileStorage')) {
                db.deleteObjectStore('FileStorage');
              }

              var store = db.createObjectStore('FileStorage', {
                keyPath: 'path'
              });
              store.createIndex('by_folder', 'folder');
          }
        };

        FilesystemPluginWeb.prototype.dbRequest = function (cmd, args) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var readFlag;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              readFlag = this._writeCmds.indexOf(cmd) !== -1 ? 'readwrite' : 'readonly';
              return [2
              /*return*/
              , this.initDb().then(function (conn) {
                return new Promise(function (resolve, reject) {
                  var tx = conn.transaction(['FileStorage'], readFlag);
                  var store = tx.objectStore('FileStorage');
                  var req = store[cmd].apply(store, args);

                  req.onsuccess = function () {
                    return resolve(req.result);
                  };

                  req.onerror = function () {
                    return reject(req.error);
                  };
                });
              })];
            });
          });
        };

        FilesystemPluginWeb.prototype.dbIndexRequest = function (indexName, cmd, args) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var readFlag;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              readFlag = this._writeCmds.indexOf(cmd) !== -1 ? 'readwrite' : 'readonly';
              return [2
              /*return*/
              , this.initDb().then(function (conn) {
                return new Promise(function (resolve, reject) {
                  var tx = conn.transaction(['FileStorage'], readFlag);
                  var store = tx.objectStore('FileStorage');
                  var index = store.index(indexName);
                  var req = index[cmd].apply(index, args);

                  req.onsuccess = function () {
                    return resolve(req.result);
                  };

                  req.onerror = function () {
                    return reject(req.error);
                  };
                });
              })];
            });
          });
        };

        FilesystemPluginWeb.prototype.getPath = function (directory, uriPath) {
          directory = directory || this.DEFAULT_DIRECTORY;
          var cleanedUriPath = uriPath !== undefined ? uriPath.replace(/^[/]+|[/]+$/g, '') : '';
          var fsPath = '/' + directory;
          if (uriPath !== '') fsPath += '/' + cleanedUriPath;
          return fsPath;
        };

        FilesystemPluginWeb.prototype.clear = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var conn, tx, store;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  return [4
                  /*yield*/
                  , this.initDb()];

                case 1:
                  conn = _a.sent();
                  tx = conn.transaction(['FileStorage'], 'readwrite');
                  store = tx.objectStore('FileStorage');
                  store.clear();
                  return [2
                  /*return*/
                  , {}];
              }
            });
          });
        };
        /**
         * Read a file from disk
         * @param options options for the file read
         * @return a promise that resolves with the read file data result
         */


        FilesystemPluginWeb.prototype.readFile = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, entry;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  path = this.getPath(options.directory, options.path);
                  return [4
                  /*yield*/
                  , this.dbRequest('get', [path])];

                case 1:
                  entry = _a.sent();
                  if (entry === undefined) throw Error('File does not exist.');
                  return [2
                  /*return*/
                  , {
                    data: entry.content
                  }];
              }
            });
          });
        };
        /**
         * Write a file to disk in the specified location on device
         * @param options options for the file write
         * @return a promise that resolves with the file write result
         */


        FilesystemPluginWeb.prototype.writeFile = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, data, doRecursive, occupiedEntry, encoding, parentPath, parentEntry, subDirIndex, parentArgPath, now, pathObj;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  path = this.getPath(options.directory, options.path);
                  data = options.data;
                  doRecursive = options.recursive;
                  return [4
                  /*yield*/
                  , this.dbRequest('get', [path])];

                case 1:
                  occupiedEntry = _a.sent();
                  if (occupiedEntry && occupiedEntry.type === 'directory') throw 'The supplied path is a directory.';
                  encoding = options.encoding;
                  parentPath = path.substr(0, path.lastIndexOf('/'));
                  return [4
                  /*yield*/
                  , this.dbRequest('get', [parentPath])];

                case 2:
                  parentEntry = _a.sent();
                  if (!(parentEntry === undefined)) return [3
                  /*break*/
                  , 4];
                  subDirIndex = parentPath.indexOf('/', 1);
                  if (!(subDirIndex !== -1)) return [3
                  /*break*/
                  , 4];
                  parentArgPath = parentPath.substr(subDirIndex);
                  return [4
                  /*yield*/
                  , this.mkdir({
                    path: parentArgPath,
                    directory: options.directory,
                    recursive: doRecursive
                  })];

                case 3:
                  _a.sent();

                  _a.label = 4;

                case 4:
                  now = Date.now();
                  pathObj = {
                    path: path,
                    folder: parentPath,
                    type: 'file',
                    size: data.length,
                    ctime: now,
                    mtime: now,
                    content: !encoding && data.indexOf(',') >= 0 ? data.split(',')[1] : data
                  };
                  return [4
                  /*yield*/
                  , this.dbRequest('put', [pathObj])];

                case 5:
                  _a.sent();

                  return [2
                  /*return*/
                  , {
                    uri: pathObj.path
                  }];
              }
            });
          });
        };
        /**
         * Append to a file on disk in the specified location on device
         * @param options options for the file append
         * @return a promise that resolves with the file write result
         */


        FilesystemPluginWeb.prototype.appendFile = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, data, parentPath, now, ctime, occupiedEntry, parentEntry, subDirIndex, parentArgPath, pathObj;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  path = this.getPath(options.directory, options.path);
                  data = options.data;
                  parentPath = path.substr(0, path.lastIndexOf('/'));
                  now = Date.now();
                  ctime = now;
                  return [4
                  /*yield*/
                  , this.dbRequest('get', [path])];

                case 1:
                  occupiedEntry = _a.sent();
                  if (occupiedEntry && occupiedEntry.type === 'directory') throw 'The supplied path is a directory.';
                  return [4
                  /*yield*/
                  , this.dbRequest('get', [parentPath])];

                case 2:
                  parentEntry = _a.sent();
                  if (!(parentEntry === undefined)) return [3
                  /*break*/
                  , 4];
                  subDirIndex = parentPath.indexOf('/', 1);
                  if (!(subDirIndex !== -1)) return [3
                  /*break*/
                  , 4];
                  parentArgPath = parentPath.substr(subDirIndex);
                  return [4
                  /*yield*/
                  , this.mkdir({
                    path: parentArgPath,
                    directory: options.directory,
                    recursive: true
                  })];

                case 3:
                  _a.sent();

                  _a.label = 4;

                case 4:
                  if (occupiedEntry !== undefined) {
                    data = occupiedEntry.content + data;
                    ctime = occupiedEntry.ctime;
                  }

                  pathObj = {
                    path: path,
                    folder: parentPath,
                    type: 'file',
                    size: data.length,
                    ctime: ctime,
                    mtime: now,
                    content: data
                  };
                  return [4
                  /*yield*/
                  , this.dbRequest('put', [pathObj])];

                case 5:
                  _a.sent();

                  return [2
                  /*return*/
                  , {}];
              }
            });
          });
        };
        /**
         * Delete a file from disk
         * @param options options for the file delete
         * @return a promise that resolves with the deleted file data result
         */


        FilesystemPluginWeb.prototype.deleteFile = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, entry, entries;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  path = this.getPath(options.directory, options.path);
                  return [4
                  /*yield*/
                  , this.dbRequest('get', [path])];

                case 1:
                  entry = _a.sent();
                  if (entry === undefined) throw Error('File does not exist.');
                  return [4
                  /*yield*/
                  , this.dbIndexRequest('by_folder', 'getAllKeys', [IDBKeyRange.only(path)])];

                case 2:
                  entries = _a.sent();
                  if (entries.length !== 0) throw Error('Folder is not empty.');
                  return [4
                  /*yield*/
                  , this.dbRequest('delete', [path])];

                case 3:
                  _a.sent();

                  return [2
                  /*return*/
                  , {}];
              }
            });
          });
        };
        /**
         * Create a directory.
         * @param options options for the mkdir
         * @return a promise that resolves with the mkdir result
         */


        FilesystemPluginWeb.prototype.mkdir = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, doRecursive, parentPath, depth, parentEntry, occupiedEntry, parentArgPath, now, pathObj;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  path = this.getPath(options.directory, options.path);
                  doRecursive = options.recursive;
                  parentPath = path.substr(0, path.lastIndexOf('/'));
                  depth = (path.match(/\//g) || []).length;
                  return [4
                  /*yield*/
                  , this.dbRequest('get', [parentPath])];

                case 1:
                  parentEntry = _a.sent();
                  return [4
                  /*yield*/
                  , this.dbRequest('get', [path])];

                case 2:
                  occupiedEntry = _a.sent();
                  if (depth === 1) throw Error('Cannot create Root directory');
                  if (occupiedEntry !== undefined) throw Error('Current directory does already exist.');
                  if (!doRecursive && depth !== 2 && parentEntry === undefined) throw Error('Parent directory must exist');
                  if (!(doRecursive && depth !== 2 && parentEntry === undefined)) return [3
                  /*break*/
                  , 4];
                  parentArgPath = parentPath.substr(parentPath.indexOf('/', 1));
                  return [4
                  /*yield*/
                  , this.mkdir({
                    path: parentArgPath,
                    directory: options.directory,
                    recursive: doRecursive
                  })];

                case 3:
                  _a.sent();

                  _a.label = 4;

                case 4:
                  now = Date.now();
                  pathObj = {
                    path: path,
                    folder: parentPath,
                    type: 'directory',
                    size: 0,
                    ctime: now,
                    mtime: now
                  };
                  return [4
                  /*yield*/
                  , this.dbRequest('put', [pathObj])];

                case 5:
                  _a.sent();

                  return [2
                  /*return*/
                  , {}];
              }
            });
          });
        };
        /**
         * Remove a directory
         * @param options the options for the directory remove
         */


        FilesystemPluginWeb.prototype.rmdir = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, directory, recursive, fullPath, entry, readDirResult, _i, _a, entry_1, entryPath, entryObj;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
              switch (_b.label) {
                case 0:
                  path = options.path, directory = options.directory, recursive = options.recursive;
                  fullPath = this.getPath(directory, path);
                  return [4
                  /*yield*/
                  , this.dbRequest('get', [fullPath])];

                case 1:
                  entry = _b.sent();
                  if (entry === undefined) throw Error('Folder does not exist.');
                  if (entry.type !== 'directory') throw Error('Requested path is not a directory');
                  return [4
                  /*yield*/
                  , this.readdir({
                    path: path,
                    directory: directory
                  })];

                case 2:
                  readDirResult = _b.sent();
                  if (readDirResult.files.length !== 0 && !recursive) throw Error('Folder is not empty');
                  _i = 0, _a = readDirResult.files;
                  _b.label = 3;

                case 3:
                  if (!(_i < _a.length)) return [3
                  /*break*/
                  , 9];
                  entry_1 = _a[_i];
                  entryPath = path + "/" + entry_1;
                  return [4
                  /*yield*/
                  , this.stat({
                    path: entryPath,
                    directory: directory
                  })];

                case 4:
                  entryObj = _b.sent();
                  if (!(entryObj.type === 'file')) return [3
                  /*break*/
                  , 6];
                  return [4
                  /*yield*/
                  , this.deleteFile({
                    path: entryPath,
                    directory: directory
                  })];

                case 5:
                  _b.sent();

                  return [3
                  /*break*/
                  , 8];

                case 6:
                  return [4
                  /*yield*/
                  , this.rmdir({
                    path: entryPath,
                    directory: directory,
                    recursive: recursive
                  })];

                case 7:
                  _b.sent();

                  _b.label = 8;

                case 8:
                  _i++;
                  return [3
                  /*break*/
                  , 3];

                case 9:
                  return [4
                  /*yield*/
                  , this.dbRequest('delete', [fullPath])];

                case 10:
                  _b.sent();

                  return [2
                  /*return*/
                  , {}];
              }
            });
          });
        };
        /**
         * Return a list of files from the directory (not recursive)
         * @param options the options for the readdir operation
         * @return a promise that resolves with the readdir directory listing result
         */


        FilesystemPluginWeb.prototype.readdir = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, entry, entries, names;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  path = this.getPath(options.directory, options.path);
                  return [4
                  /*yield*/
                  , this.dbRequest('get', [path])];

                case 1:
                  entry = _a.sent();
                  if (options.path !== '' && entry === undefined) throw Error('Folder does not exist.');
                  return [4
                  /*yield*/
                  , this.dbIndexRequest('by_folder', 'getAllKeys', [IDBKeyRange.only(path)])];

                case 2:
                  entries = _a.sent();
                  names = entries.map(function (e) {
                    return e.substring(path.length + 1);
                  });
                  return [2
                  /*return*/
                  , {
                    files: names
                  }];
              }
            });
          });
        };
        /**
         * Return full File URI for a path and directory
         * @param options the options for the stat operation
         * @return a promise that resolves with the file stat result
         */


        FilesystemPluginWeb.prototype.getUri = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, entry;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  path = this.getPath(options.directory, options.path);
                  return [4
                  /*yield*/
                  , this.dbRequest('get', [path])];

                case 1:
                  entry = _a.sent();
                  if (!(entry === undefined)) return [3
                  /*break*/
                  , 3];
                  return [4
                  /*yield*/
                  , this.dbRequest('get', [path + '/'])];

                case 2:
                  entry = _a.sent();
                  _a.label = 3;

                case 3:
                  if (entry === undefined) throw Error('Entry does not exist.');
                  return [2
                  /*return*/
                  , {
                    uri: entry.path
                  }];
              }
            });
          });
        };
        /**
         * Return data about a file
         * @param options the options for the stat operation
         * @return a promise that resolves with the file stat result
         */


        FilesystemPluginWeb.prototype.stat = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, entry;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  path = this.getPath(options.directory, options.path);
                  return [4
                  /*yield*/
                  , this.dbRequest('get', [path])];

                case 1:
                  entry = _a.sent();
                  if (!(entry === undefined)) return [3
                  /*break*/
                  , 3];
                  return [4
                  /*yield*/
                  , this.dbRequest('get', [path + '/'])];

                case 2:
                  entry = _a.sent();
                  _a.label = 3;

                case 3:
                  if (entry === undefined) throw Error('Entry does not exist.');
                  return [2
                  /*return*/
                  , {
                    type: entry.type,
                    size: entry.size,
                    ctime: entry.ctime,
                    mtime: entry.mtime,
                    uri: entry.path
                  }];
              }
            });
          });
        };
        /**
         * Rename a file or directory
         * @param options the options for the rename operation
         * @return a promise that resolves with the rename result
         */


        FilesystemPluginWeb.prototype.rename = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              return [2
              /*return*/
              , this._copy(options, true)];
            });
          });
        };
        /**
         * Copy a file or directory
         * @param options the options for the copy operation
         * @return a promise that resolves with the copy result
         */


        FilesystemPluginWeb.prototype.copy = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              return [2
              /*return*/
              , this._copy(options, false)];
            });
          });
        };
        /**
         * Function that can perform a copy or a rename
         * @param options the options for the rename operation
         * @param doRename whether to perform a rename or copy operation
         * @return a promise that resolves with the result
         */


        FilesystemPluginWeb.prototype._copy = function (options, doRename) {
          if (doRename === void 0) {
            doRename = false;
          }

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var to, from, fromDirectory, toDirectory, fromPath, toPath, toObj, e_1, toPathComponents, toPath_1, toParentDirectory, fromObj, updateTime, _a, file, e_2, contents, _i, contents_1, filename;

            var _this = this;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
              switch (_b.label) {
                case 0:
                  to = options.to, from = options.from, fromDirectory = options.directory, toDirectory = options.toDirectory;

                  if (!to || !from) {
                    throw Error('Both to and from must be provided');
                  } // If no "to" directory is provided, use the "from" directory


                  if (!toDirectory) {
                    toDirectory = fromDirectory;
                  }

                  fromPath = this.getPath(fromDirectory, from);
                  toPath = this.getPath(toDirectory, to); // Test that the "to" and "from" locations are different

                  if (fromPath === toPath) {
                    return [2
                    /*return*/
                    , {}];
                  }

                  if (toPath.startsWith(fromPath)) {
                    throw Error('To path cannot contain the from path');
                  }

                  _b.label = 1;

                case 1:
                  _b.trys.push([1, 3,, 6]);

                  return [4
                  /*yield*/
                  , this.stat({
                    path: to,
                    directory: toDirectory
                  })];

                case 2:
                  toObj = _b.sent();
                  return [3
                  /*break*/
                  , 6];

                case 3:
                  e_1 = _b.sent();
                  toPathComponents = to.split('/');
                  toPathComponents.pop();
                  toPath_1 = toPathComponents.join('/');
                  if (!(toPathComponents.length > 0)) return [3
                  /*break*/
                  , 5];
                  return [4
                  /*yield*/
                  , this.stat({
                    path: toPath_1,
                    directory: toDirectory
                  })];

                case 4:
                  toParentDirectory = _b.sent();

                  if (toParentDirectory.type !== 'directory') {
                    throw new Error('Parent directory of the to path is a file');
                  }

                  _b.label = 5;

                case 5:
                  return [3
                  /*break*/
                  , 6];

                case 6:
                  // Cannot overwrite a directory
                  if (toObj && toObj.type === 'directory') {
                    throw new Error('Cannot overwrite a directory with a file');
                  }

                  return [4
                  /*yield*/
                  , this.stat({
                    path: from,
                    directory: fromDirectory
                  })];

                case 7:
                  fromObj = _b.sent();

                  updateTime = function updateTime(path, ctime, mtime) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                      var fullPath, entry;
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                        switch (_a.label) {
                          case 0:
                            fullPath = this.getPath(toDirectory, path);
                            return [4
                            /*yield*/
                            , this.dbRequest('get', [fullPath])];

                          case 1:
                            entry = _a.sent();
                            entry.ctime = ctime;
                            entry.mtime = mtime;
                            return [4
                            /*yield*/
                            , this.dbRequest('put', [entry])];

                          case 2:
                            _a.sent();

                            return [2
                            /*return*/
                            ];
                        }
                      });
                    });
                  };

                  _a = fromObj.type;

                  switch (_a) {
                    case 'file':
                      return [3
                      /*break*/
                      , 8];

                    case 'directory':
                      return [3
                      /*break*/
                      , 15];
                  }

                  return [3
                  /*break*/
                  , 28];

                case 8:
                  return [4
                  /*yield*/
                  , this.readFile({
                    path: from,
                    directory: fromDirectory
                  })];

                case 9:
                  file = _b.sent();
                  if (!doRename) return [3
                  /*break*/
                  , 11];
                  return [4
                  /*yield*/
                  , this.deleteFile({
                    path: from,
                    directory: fromDirectory
                  })];

                case 10:
                  _b.sent();

                  _b.label = 11;

                case 11:
                  // Write the file to the new location
                  return [4
                  /*yield*/
                  , this.writeFile({
                    path: to,
                    directory: toDirectory,
                    data: file.data
                  })];

                case 12:
                  // Write the file to the new location
                  _b.sent();

                  if (!doRename) return [3
                  /*break*/
                  , 14];
                  return [4
                  /*yield*/
                  , updateTime(to, fromObj.ctime, fromObj.mtime)];

                case 13:
                  _b.sent();

                  _b.label = 14;

                case 14:
                  // Resolve promise
                  return [2
                  /*return*/
                  , {}];

                case 15:
                  if (toObj) {
                    throw Error('Cannot move a directory over an existing object');
                  }

                  _b.label = 16;

                case 16:
                  _b.trys.push([16, 20,, 21]); // Create the to directory


                  return [4
                  /*yield*/
                  , this.mkdir({
                    path: to,
                    directory: toDirectory,
                    recursive: false
                  })];

                case 17:
                  // Create the to directory
                  _b.sent();

                  if (!doRename) return [3
                  /*break*/
                  , 19];
                  return [4
                  /*yield*/
                  , updateTime(to, fromObj.ctime, fromObj.mtime)];

                case 18:
                  _b.sent();

                  _b.label = 19;

                case 19:
                  return [3
                  /*break*/
                  , 21];

                case 20:
                  e_2 = _b.sent();
                  return [3
                  /*break*/
                  , 21];

                case 21:
                  return [4
                  /*yield*/
                  , this.readdir({
                    path: from,
                    directory: fromDirectory
                  })];

                case 22:
                  contents = _b.sent().files;
                  _i = 0, contents_1 = contents;
                  _b.label = 23;

                case 23:
                  if (!(_i < contents_1.length)) return [3
                  /*break*/
                  , 26];
                  filename = contents_1[_i]; // Move item from the from directory to the to directory

                  return [4
                  /*yield*/
                  , this._copy({
                    from: from + "/" + filename,
                    to: to + "/" + filename,
                    directory: fromDirectory,
                    toDirectory: toDirectory
                  }, doRename)];

                case 24:
                  // Move item from the from directory to the to directory
                  _b.sent();

                  _b.label = 25;

                case 25:
                  _i++;
                  return [3
                  /*break*/
                  , 23];

                case 26:
                  if (!doRename) return [3
                  /*break*/
                  , 28];
                  return [4
                  /*yield*/
                  , this.rmdir({
                    path: from,
                    directory: fromDirectory
                  })];

                case 27:
                  _b.sent();

                  _b.label = 28;

                case 28:
                  return [2
                  /*return*/
                  , {}];
              }
            });
          });
        };

        FilesystemPluginWeb._debug = true;
        return FilesystemPluginWeb;
      }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

      var Filesystem = new FilesystemPluginWeb(); //# sourceMappingURL=filesystem.js.map

      /***/
    },

    /***/
    "./node_modules/@capacitor/core/dist/esm/web/geolocation.js":
    /*!******************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/geolocation.js ***!
      \******************************************************************/

    /*! exports provided: GeolocationPluginWeb, Geolocation */

    /***/
    function node_modulesCapacitorCoreDistEsmWebGeolocationJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeolocationPluginWeb", function () {
        return GeolocationPluginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Geolocation", function () {
        return Geolocation;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/@ionic/angular/node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "./node_modules/@capacitor/core/dist/esm/web/index.js");
      /* harmony import */


      var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../util */
      "./node_modules/@capacitor/core/dist/esm/util.js");

      var GeolocationPluginWeb =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GeolocationPluginWeb, _super);

        function GeolocationPluginWeb() {
          return _super.call(this, {
            name: 'Geolocation',
            platforms: ['web']
          }) || this;
        }

        GeolocationPluginWeb.prototype.getCurrentPosition = function (options) {
          var _this = this;

          return new Promise(function (resolve, reject) {
            return _this.requestPermissions().then(function (_result) {
              window.navigator.geolocation.getCurrentPosition(function (pos) {
                resolve(pos);
              }, function (err) {
                reject(err);
              }, Object(_util__WEBPACK_IMPORTED_MODULE_2__["extend"])({
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
              }, options));
            });
          });
        };

        GeolocationPluginWeb.prototype.watchPosition = function (options, callback) {
          var id = window.navigator.geolocation.watchPosition(function (pos) {
            callback(pos);
          }, function (err) {
            callback(null, err);
          }, Object(_util__WEBPACK_IMPORTED_MODULE_2__["extend"])({
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
          }, options));
          return "" + id;
        };

        GeolocationPluginWeb.prototype.clearWatch = function (options) {
          window.navigator.geolocation.clearWatch(parseInt(options.id, 10));
          return Promise.resolve();
        };

        return GeolocationPluginWeb;
      }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

      var Geolocation = new GeolocationPluginWeb(); //# sourceMappingURL=geolocation.js.map

      /***/
    },

    /***/
    "./node_modules/@capacitor/core/dist/esm/web/index.js":
    /*!************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/index.js ***!
      \************************************************************/

    /*! exports provided: WebPluginRegistry, WebPlugins, WebPlugin, mergeWebPlugins, mergeWebPlugin */

    /***/
    function node_modulesCapacitorCoreDistEsmWebIndexJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WebPluginRegistry", function () {
        return WebPluginRegistry;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WebPlugins", function () {
        return WebPlugins;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WebPlugin", function () {
        return WebPlugin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mergeWebPlugins", function () {
        return mergeWebPlugins;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mergeWebPlugin", function () {
        return mergeWebPlugin;
      });

      var WebPluginRegistry =
      /** @class */
      function () {
        function WebPluginRegistry() {
          this.plugins = {};
          this.loadedPlugins = {};
        }

        WebPluginRegistry.prototype.addPlugin = function (plugin) {
          this.plugins[plugin.config.name] = plugin;
        };

        WebPluginRegistry.prototype.getPlugin = function (name) {
          return this.plugins[name];
        };

        WebPluginRegistry.prototype.loadPlugin = function (name) {
          var plugin = this.getPlugin(name);

          if (!plugin) {
            console.error("Unable to load web plugin " + name + ", no such plugin found.");
            return;
          }

          plugin.load();
        };

        WebPluginRegistry.prototype.getPlugins = function () {
          var p = [];

          for (var name_1 in this.plugins) {
            p.push(this.plugins[name_1]);
          }

          return p;
        };

        return WebPluginRegistry;
      }();

      var WebPlugins = new WebPluginRegistry();

      var WebPlugin =
      /** @class */
      function () {
        function WebPlugin(config, pluginRegistry) {
          this.config = config;
          this.loaded = false;
          this.listeners = {};
          this.windowListeners = {};

          if (!pluginRegistry) {
            WebPlugins.addPlugin(this);
          } else {
            pluginRegistry.addPlugin(this);
          }
        }

        WebPlugin.prototype.addWindowListener = function (handle) {
          window.addEventListener(handle.windowEventName, handle.handler);
          handle.registered = true;
        };

        WebPlugin.prototype.removeWindowListener = function (handle) {
          if (!handle) {
            return;
          }

          window.removeEventListener(handle.windowEventName, handle.handler);
          handle.registered = false;
        };

        WebPlugin.prototype.addListener = function (eventName, listenerFunc) {
          var _this = this;

          var listeners = this.listeners[eventName];

          if (!listeners) {
            this.listeners[eventName] = [];
          }

          this.listeners[eventName].push(listenerFunc); // If we haven't added a window listener for this event and it requires one,
          // go ahead and add it

          var windowListener = this.windowListeners[eventName];

          if (windowListener && !windowListener.registered) {
            this.addWindowListener(windowListener);
          }

          return {
            remove: function remove() {
              _this.removeListener(eventName, listenerFunc);
            }
          };
        };

        WebPlugin.prototype.removeListener = function (eventName, listenerFunc) {
          var listeners = this.listeners[eventName];

          if (!listeners) {
            return;
          }

          var index = listeners.indexOf(listenerFunc);
          this.listeners[eventName].splice(index, 1); // If there are no more listeners for this type of event,
          // remove the window listener

          if (!this.listeners[eventName].length) {
            this.removeWindowListener(this.windowListeners[eventName]);
          }
        };

        WebPlugin.prototype.removeAllListeners = function () {
          this.listeners = {};

          for (var listener in this.windowListeners) {
            this.removeWindowListener(this.windowListeners[listener]);
          }

          this.windowListeners = {};
        };

        WebPlugin.prototype.notifyListeners = function (eventName, data) {
          var listeners = this.listeners[eventName];

          if (listeners) {
            listeners.forEach(function (listener) {
              return listener(data);
            });
          }
        };

        WebPlugin.prototype.hasListeners = function (eventName) {
          return !!this.listeners[eventName].length;
        };

        WebPlugin.prototype.registerWindowListener = function (windowEventName, pluginEventName) {
          var _this = this;

          this.windowListeners[pluginEventName] = {
            registered: false,
            windowEventName: windowEventName,
            pluginEventName: pluginEventName,
            handler: function handler(event) {
              _this.notifyListeners(pluginEventName, event);
            }
          };
        };

        WebPlugin.prototype.requestPermissions = function () {
          if (Capacitor.isNative) {
            return Capacitor.nativePromise(this.config.name, 'requestPermissions', {});
          } else {
            return Promise.resolve({
              results: []
            });
          }
        };

        WebPlugin.prototype.load = function () {
          this.loaded = true;
        };

        return WebPlugin;
      }();

      var shouldMergeWebPlugin = function shouldMergeWebPlugin(plugin) {
        return plugin.config.platforms && plugin.config.platforms.indexOf(Capacitor.platform) >= 0;
      };
      /**
       * For all our known web plugins, merge them into the global plugins
       * registry if they aren't already existing. If they don't exist, that
       * means there's no existing native implementation for it.
       * @param knownPlugins the Capacitor.Plugins global registry.
       */


      var mergeWebPlugins = function mergeWebPlugins(knownPlugins) {
        var plugins = WebPlugins.getPlugins();

        for (var _i = 0, plugins_1 = plugins; _i < plugins_1.length; _i++) {
          var plugin = plugins_1[_i];
          mergeWebPlugin(knownPlugins, plugin);
        }
      };

      var mergeWebPlugin = function mergeWebPlugin(knownPlugins, plugin) {
        // If we already have a plugin registered (meaning it was defined in the native layer),
        // then we should only overwrite it if the corresponding web plugin activates on
        // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
        if (knownPlugins.hasOwnProperty(plugin.config.name) && !shouldMergeWebPlugin(plugin)) {
          return;
        }

        knownPlugins[plugin.config.name] = plugin;
      }; //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "./node_modules/@capacitor/core/dist/esm/web/local-notifications.js":
    /*!**************************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/local-notifications.js ***!
      \**************************************************************************/

    /*! exports provided: LocalNotificationsPluginWeb, LocalNotifications */

    /***/
    function node_modulesCapacitorCoreDistEsmWebLocalNotificationsJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocalNotificationsPluginWeb", function () {
        return LocalNotificationsPluginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocalNotifications", function () {
        return LocalNotifications;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/@ionic/angular/node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "./node_modules/@capacitor/core/dist/esm/web/index.js");

      var LocalNotificationsPluginWeb =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LocalNotificationsPluginWeb, _super);

        function LocalNotificationsPluginWeb() {
          var _this = _super.call(this, {
            name: 'LocalNotifications',
            platforms: ['web']
          }) || this;

          _this.pending = [];
          return _this;
        }

        LocalNotificationsPluginWeb.prototype.createChannel = function (channel) {
          throw new Error('Feature not available in the browser. ' + channel.id);
        };

        LocalNotificationsPluginWeb.prototype.deleteChannel = function (channel) {
          throw new Error('Feature not available in the browser. ' + channel.id);
        };

        LocalNotificationsPluginWeb.prototype.listChannels = function () {
          throw new Error('Feature not available in the browser');
        };

        LocalNotificationsPluginWeb.prototype.sendPending = function () {
          var _this = this;

          var toRemove = [];
          var now = +new Date();
          this.pending.forEach(function (localNotification) {
            if (localNotification.schedule && localNotification.schedule.at) {
              if (+localNotification.schedule.at <= now) {
                _this.buildNotification(localNotification);

                toRemove.push(localNotification);
              }
            }
          });
          console.log('Sent pending, removing', toRemove);
          this.pending = this.pending.filter(function (localNotification) {
            return !toRemove.find(function (ln) {
              return ln === localNotification;
            });
          });
        };

        LocalNotificationsPluginWeb.prototype.sendNotification = function (localNotification) {
          var _this = this;

          var l = localNotification;

          if (localNotification.schedule && localNotification.schedule.at) {
            var diff = +localNotification.schedule.at - +new Date();
            this.pending.push(l);
            setTimeout(function () {
              _this.sendPending();
            }, diff);
            return;
          }

          this.buildNotification(localNotification);
        };

        LocalNotificationsPluginWeb.prototype.buildNotification = function (localNotification) {
          var l = localNotification;
          return new Notification(l.title, {
            body: l.body
          });
        };

        LocalNotificationsPluginWeb.prototype.schedule = function (options) {
          var _this = this;

          var notifications = [];
          options.notifications.forEach(function (notification) {
            notifications.push(_this.sendNotification(notification));
          });
          return Promise.resolve({
            notifications: options.notifications.map(function (notification) {
              return {
                id: '' + notification.id
              };
            })
          });
        };

        LocalNotificationsPluginWeb.prototype.getPending = function () {
          return Promise.resolve({
            notifications: this.pending.map(function (localNotification) {
              return {
                id: '' + localNotification.id
              };
            })
          });
        };

        LocalNotificationsPluginWeb.prototype.registerActionTypes = function (_options) {
          throw new Error('Method not implemented.');
        };

        LocalNotificationsPluginWeb.prototype.cancel = function (pending) {
          console.log('Cancel these', pending);
          this.pending = this.pending.filter(function (localNotification) {
            return !pending.notifications.find(function (ln) {
              return ln.id === '' + localNotification.id;
            });
          });
          return Promise.resolve();
        };

        LocalNotificationsPluginWeb.prototype.areEnabled = function () {
          return Promise.resolve({
            value: Notification.permission === 'granted'
          });
        };

        LocalNotificationsPluginWeb.prototype.requestPermission = function () {
          return new Promise(function (resolve) {
            Notification.requestPermission(function (result) {
              var granted = true;

              if (result === 'denied' || result === 'default') {
                granted = false;
              }

              resolve({
                granted: granted
              });
            });
          });
        };

        LocalNotificationsPluginWeb.prototype.requestPermissions = function () {
          return new Promise(function (resolve, reject) {
            Notification.requestPermission(function (result) {
              if (result === 'denied' || result === 'default') {
                reject(result);
                return;
              }

              resolve({
                results: [result]
              });
            });
          });
        };

        return LocalNotificationsPluginWeb;
      }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

      var LocalNotifications = new LocalNotificationsPluginWeb(); //# sourceMappingURL=local-notifications.js.map

      /***/
    },

    /***/
    "./node_modules/@capacitor/core/dist/esm/web/modals.js":
    /*!*************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/modals.js ***!
      \*************************************************************/

    /*! exports provided: ModalsPluginWeb, Modals */

    /***/
    function node_modulesCapacitorCoreDistEsmWebModalsJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalsPluginWeb", function () {
        return ModalsPluginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Modals", function () {
        return Modals;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/@ionic/angular/node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "./node_modules/@capacitor/core/dist/esm/web/index.js");

      var ModalsPluginWeb =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ModalsPluginWeb, _super);

        function ModalsPluginWeb() {
          return _super.call(this, {
            name: 'Modals',
            platforms: ['web']
          }) || this;
        }

        ModalsPluginWeb.prototype.alert = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              window.alert(options.message);
              return [2
              /*return*/
              , Promise.resolve()];
            });
          });
        };

        ModalsPluginWeb.prototype.prompt = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var val;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              val = window.prompt(options.message, options.inputText || '');
              return [2
              /*return*/
              , Promise.resolve({
                value: val,
                cancelled: val === null
              })];
            });
          });
        };

        ModalsPluginWeb.prototype.confirm = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var val;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              val = window.confirm(options.message);
              return [2
              /*return*/
              , Promise.resolve({
                value: val
              })];
            });
          });
        };

        ModalsPluginWeb.prototype.showActions = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              return [2
              /*return*/
              , new Promise(function (resolve, _reject) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                  var actionSheet;

                  var _this = this;

                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                    actionSheet = document.querySelector('pwa-action-sheet');

                    if (!actionSheet) {
                      actionSheet = document.createElement('pwa-action-sheet');
                      document.body.appendChild(actionSheet);
                    }

                    actionSheet.header = options.title;
                    actionSheet.cancelable = false;
                    actionSheet.options = options.options;
                    actionSheet.addEventListener('onSelection', function (e) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                        var selection;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                          selection = e.detail;
                          resolve({
                            index: selection
                          });
                          return [2
                          /*return*/
                          ];
                        });
                      });
                    });
                    return [2
                    /*return*/
                    ];
                  });
                });
              })];
            });
          });
        };

        return ModalsPluginWeb;
      }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

      var Modals = new ModalsPluginWeb(); //# sourceMappingURL=modals.js.map

      /***/
    },

    /***/
    "./node_modules/@capacitor/core/dist/esm/web/motion.js":
    /*!*************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/motion.js ***!
      \*************************************************************/

    /*! exports provided: MotionPluginWeb, Motion */

    /***/
    function node_modulesCapacitorCoreDistEsmWebMotionJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MotionPluginWeb", function () {
        return MotionPluginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Motion", function () {
        return Motion;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/@ionic/angular/node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "./node_modules/@capacitor/core/dist/esm/web/index.js");

      var MotionPluginWeb =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MotionPluginWeb, _super);

        function MotionPluginWeb() {
          var _this = _super.call(this, {
            name: 'Motion'
          }) || this;

          _this.registerWindowListener('devicemotion', 'accel');

          _this.registerWindowListener('deviceorientation', 'orientation');

          return _this;
        }

        return MotionPluginWeb;
      }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

      var Motion = new MotionPluginWeb(); //# sourceMappingURL=motion.js.map

      /***/
    },

    /***/
    "./node_modules/@capacitor/core/dist/esm/web/network.js":
    /*!**************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/network.js ***!
      \**************************************************************/

    /*! exports provided: NetworkPluginWeb, Network */

    /***/
    function node_modulesCapacitorCoreDistEsmWebNetworkJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NetworkPluginWeb", function () {
        return NetworkPluginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Network", function () {
        return Network;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/@ionic/angular/node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "./node_modules/@capacitor/core/dist/esm/web/index.js");

      var NetworkPluginWeb =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NetworkPluginWeb, _super);

        function NetworkPluginWeb() {
          var _this = _super.call(this, {
            name: 'Network',
            platforms: ['web']
          }) || this;

          _this.listenerFunction = null;
          return _this;
        }

        NetworkPluginWeb.prototype.getStatus = function () {
          return new Promise(function (resolve, reject) {
            if (!window.navigator) {
              reject('Network info not available');
              return;
            }

            var connected = window.navigator.onLine;
            var connection = window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection;
            var connectionType = connection ? connection.type || connection.effectiveType : 'wifi';
            resolve({
              connected: connected,
              connectionType: connected ? connectionType : 'none'
            });
          });
        };

        NetworkPluginWeb.prototype.addListener = function (eventName, listenerFunc) {
          var thisRef = this;
          var connection = window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection;
          var connectionType = connection ? connection.type || connection.effectiveType : 'wifi';
          var onlineBindFunc = listenerFunc.bind(thisRef, {
            connected: true,
            connectionType: connectionType
          });
          var offlineBindFunc = listenerFunc.bind(thisRef, {
            connected: false,
            connectionType: 'none'
          });

          if (eventName.localeCompare('networkStatusChange') === 0) {
            window.addEventListener('online', onlineBindFunc);
            window.addEventListener('offline', offlineBindFunc);
            return {
              remove: function remove() {
                window.removeEventListener('online', onlineBindFunc);
                window.removeEventListener('offline', offlineBindFunc);
              }
            };
          }
        };

        return NetworkPluginWeb;
      }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

      var Network = new NetworkPluginWeb(); //# sourceMappingURL=network.js.map

      /***/
    },

    /***/
    "./node_modules/@capacitor/core/dist/esm/web/permissions.js":
    /*!******************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/permissions.js ***!
      \******************************************************************/

    /*! exports provided: PermissionsPluginWeb, Permissions */

    /***/
    function node_modulesCapacitorCoreDistEsmWebPermissionsJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PermissionsPluginWeb", function () {
        return PermissionsPluginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Permissions", function () {
        return Permissions;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/@ionic/angular/node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "./node_modules/@capacitor/core/dist/esm/web/index.js");
      /* harmony import */


      var _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../core-plugin-definitions */
      "./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js");

      var PermissionsPluginWeb =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PermissionsPluginWeb, _super);

        function PermissionsPluginWeb() {
          return _super.call(this, {
            name: 'Permissions'
          }) || this;
        }

        PermissionsPluginWeb.prototype.query = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var navigator, name, ret;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              switch (_a.label) {
                case 0:
                  navigator = window.navigator;

                  if (!navigator.permissions) {
                    return [2
                    /*return*/
                    , Promise.reject('This browser does not support the Permissions API')];
                  }

                  name = options.name === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["PermissionType"].Photos ? 'camera' : options.name;
                  return [4
                  /*yield*/
                  , navigator.permissions.query({
                    name: name
                  })];

                case 1:
                  ret = _a.sent();
                  return [2
                  /*return*/
                  , {
                    state: ret.state
                  }];
              }
            });
          });
        };

        return PermissionsPluginWeb;
      }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

      var Permissions = new PermissionsPluginWeb(); //# sourceMappingURL=permissions.js.map

      /***/
    },

    /***/
    "./node_modules/@capacitor/core/dist/esm/web/share.js":
    /*!************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/share.js ***!
      \************************************************************/

    /*! exports provided: SharePluginWeb, Share */

    /***/
    function node_modulesCapacitorCoreDistEsmWebShareJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharePluginWeb", function () {
        return SharePluginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Share", function () {
        return Share;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/@ionic/angular/node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "./node_modules/@capacitor/core/dist/esm/web/index.js");

      var SharePluginWeb =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SharePluginWeb, _super);

        function SharePluginWeb() {
          return _super.call(this, {
            name: 'Share',
            platforms: ['web']
          }) || this;
        }

        SharePluginWeb.prototype.share = function (options) {
          if (!navigator.share) {
            return Promise.reject('Web Share API not available');
          }

          return navigator.share({
            title: options.title,
            text: options.text,
            url: options.url
          });
        };

        return SharePluginWeb;
      }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

      var Share = new SharePluginWeb(); //# sourceMappingURL=share.js.map

      /***/
    },

    /***/
    "./node_modules/@capacitor/core/dist/esm/web/splash-screen.js":
    /*!********************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/splash-screen.js ***!
      \********************************************************************/

    /*! exports provided: SplashScreenPluginWeb, SplashScreen */

    /***/
    function node_modulesCapacitorCoreDistEsmWebSplashScreenJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SplashScreenPluginWeb", function () {
        return SplashScreenPluginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SplashScreen", function () {
        return SplashScreen;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/@ionic/angular/node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "./node_modules/@capacitor/core/dist/esm/web/index.js");

      var SplashScreenPluginWeb =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SplashScreenPluginWeb, _super);

        function SplashScreenPluginWeb() {
          return _super.call(this, {
            name: 'SplashScreen',
            platforms: ['web']
          }) || this;
        }

        SplashScreenPluginWeb.prototype.show = function (_options, _callback) {
          return Promise.resolve();
        };

        SplashScreenPluginWeb.prototype.hide = function (_options, _callback) {
          return Promise.resolve();
        };

        return SplashScreenPluginWeb;
      }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

      var SplashScreen = new SplashScreenPluginWeb(); //# sourceMappingURL=splash-screen.js.map

      /***/
    },

    /***/
    "./node_modules/@capacitor/core/dist/esm/web/storage.js":
    /*!**************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/storage.js ***!
      \**************************************************************/

    /*! exports provided: StoragePluginWeb, Storage */

    /***/
    function node_modulesCapacitorCoreDistEsmWebStorageJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StoragePluginWeb", function () {
        return StoragePluginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Storage", function () {
        return Storage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/@ionic/angular/node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "./node_modules/@capacitor/core/dist/esm/web/index.js");

      var StoragePluginWeb =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StoragePluginWeb, _super);

        function StoragePluginWeb() {
          var _this = _super.call(this, {
            name: 'Storage',
            platforms: ['web']
          }) || this;

          _this.KEY_PREFIX = '_cap_';
          return _this;
        }

        StoragePluginWeb.prototype.get = function (options) {
          var _this = this;

          return new Promise(function (resolve, _reject) {
            resolve({
              value: window.localStorage.getItem(_this.makeKey(options.key))
            });
          });
        };

        StoragePluginWeb.prototype.set = function (options) {
          var _this = this;

          return new Promise(function (resolve, _reject) {
            window.localStorage.setItem(_this.makeKey(options.key), options.value);
            resolve();
          });
        };

        StoragePluginWeb.prototype.remove = function (options) {
          var _this = this;

          return new Promise(function (resolve, _reject) {
            window.localStorage.removeItem(_this.makeKey(options.key));
            resolve();
          });
        };

        StoragePluginWeb.prototype.keys = function () {
          var _this = this;

          return new Promise(function (resolve, _reject) {
            resolve({
              keys: Object.keys(localStorage).filter(function (k) {
                return _this.isKey(k);
              }).map(function (k) {
                return _this.getKey(k);
              })
            });
          });
        };

        StoragePluginWeb.prototype.clear = function () {
          var _this = this;

          return new Promise(function (resolve, _reject) {
            Object.keys(localStorage).filter(function (k) {
              return _this.isKey(k);
            }).forEach(function (k) {
              return window.localStorage.removeItem(k);
            });
            resolve();
          });
        };

        StoragePluginWeb.prototype.makeKey = function (key) {
          return this.KEY_PREFIX + key;
        };

        StoragePluginWeb.prototype.isKey = function (key) {
          return key.indexOf(this.KEY_PREFIX) === 0;
        };

        StoragePluginWeb.prototype.getKey = function (key) {
          return key.substr(this.KEY_PREFIX.length);
        };

        return StoragePluginWeb;
      }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

      var Storage = new StoragePluginWeb(); //# sourceMappingURL=storage.js.map

      /***/
    },

    /***/
    "./node_modules/@capacitor/core/dist/esm/web/toast.js":
    /*!************************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/esm/web/toast.js ***!
      \************************************************************/

    /*! exports provided: ToastPluginWeb, Toast */

    /***/
    function node_modulesCapacitorCoreDistEsmWebToastJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastPluginWeb", function () {
        return ToastPluginWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Toast", function () {
        return Toast;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/@ionic/angular/node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index */
      "./node_modules/@capacitor/core/dist/esm/web/index.js");

      var ToastPluginWeb =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ToastPluginWeb, _super);

        function ToastPluginWeb() {
          return _super.call(this, {
            name: 'Toast',
            platforms: ['web']
          }) || this;
        }

        ToastPluginWeb.prototype.show = function (options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var duration, toast;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              duration = 2000;

              if (options.duration) {
                duration = options.duration === 'long' ? 3500 : 2000;
              }

              toast = document.createElement('pwa-toast');
              toast.duration = duration;
              toast.message = options.text;
              document.body.appendChild(toast);
              return [2
              /*return*/
              ];
            });
          });
        };

        return ToastPluginWeb;
      }(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]);

      var Toast = new ToastPluginWeb(); //# sourceMappingURL=toast.js.map

      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab2Tab2PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Photo Gallery\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Photo Gallery</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\" \n      *ngFor=\"let photo of photoService.photos; index as position\">\n        <ion-img [src]=\"photo.webviewPath\"></ion-img>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n  <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\n    <ion-fab-button (click)=\"addPhotoToGallery()\">\n      <ion-icon name=\"camera\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/services/photo.service.ts":
    /*!*******************************************!*\
      !*** ./src/app/services/photo.service.ts ***!
      \*******************************************/

    /*! exports provided: PhotoService */

    /***/
    function srcAppServicesPhotoServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PhotoService", function () {
        return PhotoService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var _capacitor_core__WEBP = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"],
          Camera = _capacitor_core__WEBP.Camera,
          Filesystem = _capacitor_core__WEBP.Filesystem,
          Storage = _capacitor_core__WEBP.Storage;

      var PhotoService = /*#__PURE__*/function () {
        function PhotoService(platform) {
          _classCallCheck(this, PhotoService);

          this.photos = [];
          this.PHOTO_STORAGE = "photos";

          this.convertBlobToBase64 = function (blob) {
            return new Promise(function (resolve, reject) {
              var reader = new FileReader();
              reader.onerror = reject;

              reader.onload = function () {
                resolve(reader.result);
              };

              reader.readAsDataURL(blob);
            });
          };

          this.platform = platform;
        }

        _createClass(PhotoService, [{
          key: "addNewToGallery",
          value: function addNewToGallery() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var capturedPhoto, savedImageFile;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return Camera.getPhoto({
                        resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Uri,
                        source: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Camera,
                        quality: 100
                      });

                    case 2:
                      capturedPhoto = _context.sent;
                      _context.next = 5;
                      return this.savePicture(capturedPhoto);

                    case 5:
                      savedImageFile = _context.sent;
                      this.photos.unshift(savedImageFile);
                      Storage.set({
                        key: this.PHOTO_STORAGE,
                        value: JSON.stringify(this.photos)
                      });

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "savePicture",
          value: function savePicture(cameraPhoto) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var base64Data, fileName, savedFile;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.readAsBase64(cameraPhoto);

                    case 2:
                      base64Data = _context2.sent;
                      // Write the file to the data directory
                      fileName = new Date().getTime() + '.jpeg';
                      _context2.next = 6;
                      return Filesystem.writeFile({
                        path: fileName,
                        data: base64Data,
                        directory: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["FilesystemDirectory"].Data
                      });

                    case 6:
                      savedFile = _context2.sent;

                      if (!this.platform.is('hybrid')) {
                        _context2.next = 11;
                        break;
                      }

                      return _context2.abrupt("return", {
                        filepath: savedFile.uri,
                        webviewPath: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Capacitor"].convertFileSrc(savedFile.uri)
                      });

                    case 11:
                      return _context2.abrupt("return", {
                        filepath: fileName,
                        webviewPath: cameraPhoto.webPath
                      });

                    case 12:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "readAsBase64",
          value: function readAsBase64(cameraPhoto) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var file, response, blob;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!this.platform.is('hybrid')) {
                        _context3.next = 7;
                        break;
                      }

                      _context3.next = 3;
                      return Filesystem.readFile({
                        path: cameraPhoto.path
                      });

                    case 3:
                      file = _context3.sent;
                      return _context3.abrupt("return", file.data);

                    case 7:
                      _context3.next = 9;
                      return fetch(cameraPhoto.webPath);

                    case 9:
                      response = _context3.sent;
                      _context3.next = 12;
                      return response.blob();

                    case 12:
                      blob = _context3.sent;
                      _context3.next = 15;
                      return this.convertBlobToBase64(blob);

                    case 15:
                      return _context3.abrupt("return", _context3.sent);

                    case 16:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "loadSaved",
          value: function loadSaved() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var photoList, _iterator, _step, photo, readFile;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return Storage.get({
                        key: this.PHOTO_STORAGE
                      });

                    case 2:
                      photoList = _context4.sent;
                      this.photos = JSON.parse(photoList.value) || []; // Easiest way to detect when running on the web:
                      // “when the platform is NOT hybrid, do this”

                      if (this.platform.is('hybrid')) {
                        _context4.next = 24;
                        break;
                      }

                      // Display the photo by reading into base64 format
                      _iterator = _createForOfIteratorHelper(this.photos);
                      _context4.prev = 6;

                      _iterator.s();

                    case 8:
                      if ((_step = _iterator.n()).done) {
                        _context4.next = 16;
                        break;
                      }

                      photo = _step.value;
                      _context4.next = 12;
                      return Filesystem.readFile({
                        path: photo.filepath,
                        directory: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["FilesystemDirectory"].Data
                      });

                    case 12:
                      readFile = _context4.sent;
                      // Web platform only: Load the photo as base64 data
                      photo.webviewPath = "data:image/jpeg;base64,".concat(readFile.data);

                    case 14:
                      _context4.next = 8;
                      break;

                    case 16:
                      _context4.next = 21;
                      break;

                    case 18:
                      _context4.prev = 18;
                      _context4.t0 = _context4["catch"](6);

                      _iterator.e(_context4.t0);

                    case 21:
                      _context4.prev = 21;

                      _iterator.f();

                      return _context4.finish(21);

                    case 24:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this, [[6, 18, 21, 24]]);
            }));
          }
        }]);

        return PhotoService;
      }();

      PhotoService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }];
      };

      PhotoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], PhotoService);
      /***/
    },

    /***/
    "./src/app/tab2/tab2-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/tab2/tab2-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab2PageRoutingModule */

    /***/
    function srcAppTab2Tab2RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function () {
        return Tab2PageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab2.page */
      "./src/app/tab2/tab2.page.ts");

      var routes = [{
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"]
      }];

      var Tab2PageRoutingModule = function Tab2PageRoutingModule() {
        _classCallCheck(this, Tab2PageRoutingModule);
      };

      Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab2PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tab2/tab2.module.ts":
    /*!*************************************!*\
      !*** ./src/app/tab2/tab2.module.ts ***!
      \*************************************/

    /*! exports provided: Tab2PageModule */

    /***/
    function srcAppTab2Tab2ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function () {
        return Tab2PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tab2.page */
      "./src/app/tab2/tab2.page.ts");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "./src/app/explore-container/explore-container.module.ts");
      /* harmony import */


      var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./tab2-routing.module */
      "./src/app/tab2/tab2-routing.module.ts");

      var Tab2PageModule = function Tab2PageModule() {
        _classCallCheck(this, Tab2PageModule);
      };

      Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"], _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab2PageRoutingModule"]],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]]
      })], Tab2PageModule);
      /***/
    },

    /***/
    "./src/app/tab2/tab2.page.scss":
    /*!*************************************!*\
      !*** ./src/app/tab2/tab2.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab2Tab2PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/tab2/tab2.page.ts":
    /*!***********************************!*\
      !*** ./src/app/tab2/tab2.page.ts ***!
      \***********************************/

    /*! exports provided: Tab2Page */

    /***/
    function srcAppTab2Tab2PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab2Page", function () {
        return Tab2Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_photo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/photo.service */
      "./src/app/services/photo.service.ts");

      var Tab2Page = /*#__PURE__*/function () {
        function Tab2Page(photoService) {
          _classCallCheck(this, Tab2Page);

          this.photoService = photoService;
        }

        _createClass(Tab2Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.photoService.loadSaved();

                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "addPhotoToGallery",
          value: function addPhotoToGallery() {
            this.photoService.addNewToGallery();
          }
        }]);

        return Tab2Page;
      }();

      Tab2Page.ctorParameters = function () {
        return [{
          type: _services_photo_service__WEBPACK_IMPORTED_MODULE_2__["PhotoService"]
        }];
      };

      Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab2',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tab2.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tab2.page.scss */
        "./src/app/tab2/tab2.page.scss"))["default"]]
      })], Tab2Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab2-tab2-module-es5.js.map