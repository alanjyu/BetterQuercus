// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8Mm1n":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = "localhost";
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "e792fbbdaa78ee84";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "162de3a95d8038a5";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"9Psjw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _filePreview = require("./_filePreview");
var _filePreviewDefault = parcelHelpers.interopDefault(_filePreview);
var _moduleList = require("./_moduleList");
var _moduleListDefault = parcelHelpers.interopDefault(_moduleList);
var _staticScss = require("../css/static.scss");
document.addEventListener('DOMContentLoaded', ()=>{
    const filePreviewURL = new RegExp('^/courses/\\d+/files/\\d+(\\S*)$');
    const modulesURL = new RegExp('^/courses/\\d+/modules$');
    const CSStoInject = document.createElement('style');
    document.head.appendChild(CSStoInject);
    if (filePreviewURL.test(location.pathname)) {
        console.log('works!');
        new (0, _filePreviewDefault.default)();
    } else if (/\/courses\/[0-9]+\/quizzes\/[^\/]+/.test(location.pathname)) {
        let styleSheet = document.createElement('style');
        styleSheet.innerHTML = `
      #right-side{top: 56px; position: sticky;}
      #question_list{max-height: 500px !important;}
      .list_question.marked > .jump_to_question_link{color: red !important;}
      .question.marked > .header{background: red; color: white;}
    `;
        document.body.appendChild(styleSheet);
    } else if (modulesURL.test(location.pathname)) new (0, _moduleListDefault.default)();
});

},{"./_filePreview":"fj9s5","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo","./_moduleList":"2P83v","../css/static.scss":"lCjLv"}],"fj9s5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class FilePreview {
    constructor(){
        document.body.style.overflow = 'hidden';
        this.fileTitle = document.querySelector('#content h2');
        this.mainFrame = document.querySelector('.ic-Layout-contentMain');
        this.downloadText = document.querySelector('#content > div');
        this.fileTitle.style.display = 'none';
        this.mainFrame.style.padding = '0 24px';
        this.downloadText.classList.add('Button', 'download-button');
        this.downloadText.querySelector('span > a').innerHTML = 'Download';
        // trigger the inner 'a' (download) event once the button is clicked anywhere
        this.downloadText.addEventListener('click', (e)=>{
            this.downloadText.querySelector('span > a').click();
        });
        this.downloadText.querySelector('span').addEventListener('click', (e)=>{
            this.downloadText.querySelector('span > a').click();
        });
    }
}
exports.default = FilePreview;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"boKlo":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"2P83v":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class FilePreview {
    constructor(){
        this.headerBar = document.querySelector('.header-bar');
        this.headerBar.classList.add('top-right');
    }
}
exports.default = FilePreview;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"lCjLv":[function() {},{}]},["8Mm1n","9Psjw"], "9Psjw", "parcelRequire94c2")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTztJQUFJO0FBQ3JEO0FBRUEsUUFBUSxTQUFTLEdBQUcsU0FBVSxNQUFNLEVBQUUsSUFBSTtJQUN4QyxPQUFPLElBQUksQ0FBQyxRQUFRLE9BQU8sQ0FBQyxTQUFVLEdBQUc7UUFDdkMsSUFDRSxRQUFRLGFBQ1IsUUFBUSxnQkFDUixPQUFPLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sTUFFM0M7UUFHRixPQUFPLGNBQWMsQ0FBQyxNQUFNLEtBQUs7WUFDL0IsWUFBWTtZQUNaLEtBQUs7Z0JBQ0gsT0FBTyxNQUFNLENBQUMsSUFBSTtZQUNwQjtRQUNGO0lBQ0Y7SUFFQSxPQUFPO0FBQ1Q7QUFFQSxRQUFRLE1BQU0sR0FBRyxTQUFVLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRztJQUM1QyxPQUFPLGNBQWMsQ0FBQyxNQUFNLFVBQVU7UUFDcEMsWUFBWTtRQUNaLEtBQUs7SUFDUDtBQUNGOzs7OztBQ2xDZSxNQUFNO0lBQ25CLGFBQWM7UUFDWixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsYUFBYSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztJQUMvQjtBQUNGO2tCQUxxQiIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL0BwYXJjZWwvcnVudGltZS1icm93c2VyLWhtci9saWIvcnVudGltZS01ODE5MzlkYTczNzFiYWRlLmpzIiwic3JjL2pzL2NvbnRlbnQuanMiLCJzcmMvanMvX2ZpbGVQcmV2aWV3LmpzIiwibm9kZV9tb2R1bGVzL0BwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMiLCJzcmMvanMvX21vZHVsZUxpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIEhNUl9IT1NUID0gXCJsb2NhbGhvc3RcIjt2YXIgSE1SX1BPUlQgPSAxMjM0O3ZhciBITVJfU0VDVVJFID0gZmFsc2U7dmFyIEhNUl9FTlZfSEFTSCA9IFwiZTc5MmZiYmRhYTc4ZWU4NFwiO3ZhciBITVJfVVNFX1NTRSA9IGZhbHNlO21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRCA9IFwiMTYyZGUzYTk1ZDgwMzhhNVwiO1widXNlIHN0cmljdFwiO1xuXG4vKiBnbG9iYWwgSE1SX0hPU1QsIEhNUl9QT1JULCBITVJfRU5WX0hBU0gsIEhNUl9TRUNVUkUsIEhNUl9VU0VfU1NFLCBjaHJvbWUsIGJyb3dzZXIsIF9fcGFyY2VsX19pbXBvcnRfXywgX19wYXJjZWxfX2ltcG9ydFNjcmlwdHNfXywgU2VydmljZVdvcmtlckdsb2JhbFNjb3BlICovXG4vKjo6XG5pbXBvcnQgdHlwZSB7XG4gIEhNUkFzc2V0LFxuICBITVJNZXNzYWdlLFxufSBmcm9tICdAcGFyY2VsL3JlcG9ydGVyLWRldi1zZXJ2ZXIvc3JjL0hNUlNlcnZlci5qcyc7XG5pbnRlcmZhY2UgUGFyY2VsUmVxdWlyZSB7XG4gIChzdHJpbmcpOiBtaXhlZDtcbiAgY2FjaGU6IHt8W3N0cmluZ106IFBhcmNlbE1vZHVsZXx9O1xuICBob3REYXRhOiB7fFtzdHJpbmddOiBtaXhlZHx9O1xuICBNb2R1bGU6IGFueTtcbiAgcGFyZW50OiA/UGFyY2VsUmVxdWlyZTtcbiAgaXNQYXJjZWxSZXF1aXJlOiB0cnVlO1xuICBtb2R1bGVzOiB7fFtzdHJpbmddOiBbRnVuY3Rpb24sIHt8W3N0cmluZ106IHN0cmluZ3x9XXx9O1xuICBITVJfQlVORExFX0lEOiBzdHJpbmc7XG4gIHJvb3Q6IFBhcmNlbFJlcXVpcmU7XG59XG5pbnRlcmZhY2UgUGFyY2VsTW9kdWxlIHtcbiAgaG90OiB7fFxuICAgIGRhdGE6IG1peGVkLFxuICAgIGFjY2VwdChjYjogKEZ1bmN0aW9uKSA9PiB2b2lkKTogdm9pZCxcbiAgICBkaXNwb3NlKGNiOiAobWl4ZWQpID0+IHZvaWQpOiB2b2lkLFxuICAgIC8vIGFjY2VwdChkZXBzOiBBcnJheTxzdHJpbmc+IHwgc3RyaW5nLCBjYjogKEZ1bmN0aW9uKSA9PiB2b2lkKTogdm9pZCxcbiAgICAvLyBkZWNsaW5lKCk6IHZvaWQsXG4gICAgX2FjY2VwdENhbGxiYWNrczogQXJyYXk8KEZ1bmN0aW9uKSA9PiB2b2lkPixcbiAgICBfZGlzcG9zZUNhbGxiYWNrczogQXJyYXk8KG1peGVkKSA9PiB2b2lkPixcbiAgfH07XG59XG5pbnRlcmZhY2UgRXh0ZW5zaW9uQ29udGV4dCB7XG4gIHJ1bnRpbWU6IHt8XG4gICAgcmVsb2FkKCk6IHZvaWQsXG4gICAgZ2V0VVJMKHVybDogc3RyaW5nKTogc3RyaW5nO1xuICAgIGdldE1hbmlmZXN0KCk6IHttYW5pZmVzdF92ZXJzaW9uOiBudW1iZXIsIC4uLn07XG4gIHx9O1xufVxuZGVjbGFyZSB2YXIgbW9kdWxlOiB7YnVuZGxlOiBQYXJjZWxSZXF1aXJlLCAuLi59O1xuZGVjbGFyZSB2YXIgSE1SX0hPU1Q6IHN0cmluZztcbmRlY2xhcmUgdmFyIEhNUl9QT1JUOiBzdHJpbmc7XG5kZWNsYXJlIHZhciBITVJfRU5WX0hBU0g6IHN0cmluZztcbmRlY2xhcmUgdmFyIEhNUl9TRUNVUkU6IGJvb2xlYW47XG5kZWNsYXJlIHZhciBITVJfVVNFX1NTRTogYm9vbGVhbjtcbmRlY2xhcmUgdmFyIGNocm9tZTogRXh0ZW5zaW9uQ29udGV4dDtcbmRlY2xhcmUgdmFyIGJyb3dzZXI6IEV4dGVuc2lvbkNvbnRleHQ7XG5kZWNsYXJlIHZhciBfX3BhcmNlbF9faW1wb3J0X186IChzdHJpbmcpID0+IFByb21pc2U8dm9pZD47XG5kZWNsYXJlIHZhciBfX3BhcmNlbF9faW1wb3J0U2NyaXB0c19fOiAoc3RyaW5nKSA9PiBQcm9taXNlPHZvaWQ+O1xuZGVjbGFyZSB2YXIgZ2xvYmFsVGhpczogdHlwZW9mIHNlbGY7XG5kZWNsYXJlIHZhciBTZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGU6IE9iamVjdDtcbiovXG52YXIgT1ZFUkxBWV9JRCA9ICdfX3BhcmNlbF9fZXJyb3JfX292ZXJsYXlfXyc7XG52YXIgT2xkTW9kdWxlID0gbW9kdWxlLmJ1bmRsZS5Nb2R1bGU7XG5mdW5jdGlvbiBNb2R1bGUobW9kdWxlTmFtZSkge1xuICBPbGRNb2R1bGUuY2FsbCh0aGlzLCBtb2R1bGVOYW1lKTtcbiAgdGhpcy5ob3QgPSB7XG4gICAgZGF0YTogbW9kdWxlLmJ1bmRsZS5ob3REYXRhW21vZHVsZU5hbWVdLFxuICAgIF9hY2NlcHRDYWxsYmFja3M6IFtdLFxuICAgIF9kaXNwb3NlQ2FsbGJhY2tzOiBbXSxcbiAgICBhY2NlcHQ6IGZ1bmN0aW9uIChmbikge1xuICAgICAgdGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2goZm4gfHwgZnVuY3Rpb24gKCkge30pO1xuICAgIH0sXG4gICAgZGlzcG9zZTogZnVuY3Rpb24gKGZuKSB7XG4gICAgICB0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2goZm4pO1xuICAgIH1cbiAgfTtcbiAgbW9kdWxlLmJ1bmRsZS5ob3REYXRhW21vZHVsZU5hbWVdID0gdW5kZWZpbmVkO1xufVxubW9kdWxlLmJ1bmRsZS5Nb2R1bGUgPSBNb2R1bGU7XG5tb2R1bGUuYnVuZGxlLmhvdERhdGEgPSB7fTtcbnZhciBjaGVja2VkQXNzZXRzIC8qOiB7fFtzdHJpbmddOiBib29sZWFufH0gKi8sIGRpc3Bvc2VkQXNzZXRzIC8qOiB7fFtzdHJpbmddOiBib29sZWFufH0gKi8sIGFzc2V0c1RvRGlzcG9zZSAvKjogQXJyYXk8W1BhcmNlbFJlcXVpcmUsIHN0cmluZ10+ICovLCBhc3NldHNUb0FjY2VwdCAvKjogQXJyYXk8W1BhcmNlbFJlcXVpcmUsIHN0cmluZ10+ICovO1xuZnVuY3Rpb24gZ2V0SG9zdG5hbWUoKSB7XG4gIHJldHVybiBITVJfSE9TVCB8fCAobG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZignaHR0cCcpID09PSAwID8gbG9jYXRpb24uaG9zdG5hbWUgOiAnbG9jYWxob3N0Jyk7XG59XG5mdW5jdGlvbiBnZXRQb3J0KCkge1xuICByZXR1cm4gSE1SX1BPUlQgfHwgbG9jYXRpb24ucG9ydDtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlZGVjbGFyZVxudmFyIHBhcmVudCA9IG1vZHVsZS5idW5kbGUucGFyZW50O1xuaWYgKCghcGFyZW50IHx8ICFwYXJlbnQuaXNQYXJjZWxSZXF1aXJlKSAmJiB0eXBlb2YgV2ViU29ja2V0ICE9PSAndW5kZWZpbmVkJykge1xuICB2YXIgaG9zdG5hbWUgPSBnZXRIb3N0bmFtZSgpO1xuICB2YXIgcG9ydCA9IGdldFBvcnQoKTtcbiAgdmFyIHByb3RvY29sID0gSE1SX1NFQ1VSRSB8fCBsb2NhdGlvbi5wcm90b2NvbCA9PSAnaHR0cHM6JyAmJiAhWydsb2NhbGhvc3QnLCAnMTI3LjAuMC4xJywgJzAuMC4wLjAnXS5pbmNsdWRlcyhob3N0bmFtZSkgPyAnd3NzJyA6ICd3cyc7XG4gIHZhciB3cztcbiAgaWYgKEhNUl9VU0VfU1NFKSB7XG4gICAgd3MgPSBuZXcgRXZlbnRTb3VyY2UoJy9fX3BhcmNlbF9obXInKTtcbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgd3MgPSBuZXcgV2ViU29ja2V0KHByb3RvY29sICsgJzovLycgKyBob3N0bmFtZSArIChwb3J0ID8gJzonICsgcG9ydCA6ICcnKSArICcvJyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLm1lc3NhZ2UpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIubWVzc2FnZSk7XG4gICAgICB9XG4gICAgICB3cyA9IHt9O1xuICAgIH1cbiAgfVxuXG4gIC8vIFdlYiBleHRlbnNpb24gY29udGV4dFxuICB2YXIgZXh0Q3R4ID0gdHlwZW9mIGJyb3dzZXIgPT09ICd1bmRlZmluZWQnID8gdHlwZW9mIGNocm9tZSA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogY2hyb21lIDogYnJvd3NlcjtcblxuICAvLyBTYWZhcmkgZG9lc24ndCBzdXBwb3J0IHNvdXJjZVVSTCBpbiBlcnJvciBzdGFja3MuXG4gIC8vIGV2YWwgbWF5IGFsc28gYmUgZGlzYWJsZWQgdmlhIENTUCwgc28gZG8gYSBxdWljayBjaGVjay5cbiAgdmFyIHN1cHBvcnRzU291cmNlVVJMID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgKDAsIGV2YWwpKCd0aHJvdyBuZXcgRXJyb3IoXCJ0ZXN0XCIpOyAvLyMgc291cmNlVVJMPXRlc3QuanMnKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgc3VwcG9ydHNTb3VyY2VVUkwgPSBlcnIuc3RhY2suaW5jbHVkZXMoJ3Rlc3QuanMnKTtcbiAgfVxuXG4gIC8vICRGbG93Rml4TWVcbiAgd3Mub25tZXNzYWdlID0gYXN5bmMgZnVuY3Rpb24gKGV2ZW50IC8qOiB7ZGF0YTogc3RyaW5nLCAuLi59ICovKSB7XG4gICAgY2hlY2tlZEFzc2V0cyA9IHt9IC8qOiB7fFtzdHJpbmddOiBib29sZWFufH0gKi87XG4gICAgZGlzcG9zZWRBc3NldHMgPSB7fSAvKjoge3xbc3RyaW5nXTogYm9vbGVhbnx9ICovO1xuICAgIGFzc2V0c1RvQWNjZXB0ID0gW107XG4gICAgYXNzZXRzVG9EaXNwb3NlID0gW107XG4gICAgdmFyIGRhdGEgLyo6IEhNUk1lc3NhZ2UgKi8gPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuICAgIGlmIChkYXRhLnR5cGUgPT09ICdyZWxvYWQnKSB7XG4gICAgICBmdWxsUmVsb2FkKCk7XG4gICAgfSBlbHNlIGlmIChkYXRhLnR5cGUgPT09ICd1cGRhdGUnKSB7XG4gICAgICAvLyBSZW1vdmUgZXJyb3Igb3ZlcmxheSBpZiB0aGVyZSBpcyBvbmVcbiAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJlbW92ZUVycm9yT3ZlcmxheSgpO1xuICAgICAgfVxuICAgICAgbGV0IGFzc2V0cyA9IGRhdGEuYXNzZXRzLmZpbHRlcihhc3NldCA9PiBhc3NldC5lbnZIYXNoID09PSBITVJfRU5WX0hBU0gpO1xuXG4gICAgICAvLyBIYW5kbGUgSE1SIFVwZGF0ZVxuICAgICAgbGV0IGhhbmRsZWQgPSBhc3NldHMuZXZlcnkoYXNzZXQgPT4ge1xuICAgICAgICByZXR1cm4gYXNzZXQudHlwZSA9PT0gJ2NzcycgfHwgYXNzZXQudHlwZSA9PT0gJ2pzJyAmJiBobXJBY2NlcHRDaGVjayhtb2R1bGUuYnVuZGxlLnJvb3QsIGFzc2V0LmlkLCBhc3NldC5kZXBzQnlCdW5kbGUpO1xuICAgICAgfSk7XG4gICAgICBpZiAoaGFuZGxlZCkge1xuICAgICAgICBjb25zb2xlLmNsZWFyKCk7XG5cbiAgICAgICAgLy8gRGlzcGF0Y2ggY3VzdG9tIGV2ZW50IHNvIG90aGVyIHJ1bnRpbWVzIChlLmcgUmVhY3QgUmVmcmVzaCkgYXJlIGF3YXJlLlxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIEN1c3RvbUV2ZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgncGFyY2VsaG1yYWNjZXB0JykpO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IGhtckFwcGx5VXBkYXRlcyhhc3NldHMpO1xuICAgICAgICBobXJEaXNwb3NlUXVldWUoKTtcblxuICAgICAgICAvLyBSdW4gYWNjZXB0IGNhbGxiYWNrcy4gVGhpcyB3aWxsIGFsc28gcmUtZXhlY3V0ZSBvdGhlciBkaXNwb3NlZCBhc3NldHMgaW4gdG9wb2xvZ2ljYWwgb3JkZXIuXG4gICAgICAgIGxldCBwcm9jZXNzZWRBc3NldHMgPSB7fTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhc3NldHNUb0FjY2VwdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCBpZCA9IGFzc2V0c1RvQWNjZXB0W2ldWzFdO1xuICAgICAgICAgIGlmICghcHJvY2Vzc2VkQXNzZXRzW2lkXSkge1xuICAgICAgICAgICAgaG1yQWNjZXB0KGFzc2V0c1RvQWNjZXB0W2ldWzBdLCBpZCk7XG4gICAgICAgICAgICBwcm9jZXNzZWRBc3NldHNbaWRdID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBmdWxsUmVsb2FkKCk7XG4gICAgfVxuICAgIGlmIChkYXRhLnR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAgIC8vIExvZyBwYXJjZWwgZXJyb3JzIHRvIGNvbnNvbGVcbiAgICAgIGZvciAobGV0IGFuc2lEaWFnbm9zdGljIG9mIGRhdGEuZGlhZ25vc3RpY3MuYW5zaSkge1xuICAgICAgICBsZXQgc3RhY2sgPSBhbnNpRGlhZ25vc3RpYy5jb2RlZnJhbWUgPyBhbnNpRGlhZ25vc3RpYy5jb2RlZnJhbWUgOiBhbnNpRGlhZ25vc3RpYy5zdGFjaztcbiAgICAgICAgY29uc29sZS5lcnJvcign8J+aqCBbcGFyY2VsXTogJyArIGFuc2lEaWFnbm9zdGljLm1lc3NhZ2UgKyAnXFxuJyArIHN0YWNrICsgJ1xcblxcbicgKyBhbnNpRGlhZ25vc3RpYy5oaW50cy5qb2luKCdcXG4nKSk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyBSZW5kZXIgdGhlIGZhbmN5IGh0bWwgb3ZlcmxheVxuICAgICAgICByZW1vdmVFcnJvck92ZXJsYXkoKTtcbiAgICAgICAgdmFyIG92ZXJsYXkgPSBjcmVhdGVFcnJvck92ZXJsYXkoZGF0YS5kaWFnbm9zdGljcy5odG1sKTtcbiAgICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgaWYgKHdzIGluc3RhbmNlb2YgV2ViU29ja2V0KSB7XG4gICAgd3Mub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoZS5tZXNzYWdlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZS5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdzLm9uY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1twYXJjZWxdIPCfmqggQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciB3YXMgbG9zdCcpO1xuICAgIH07XG4gIH1cbn1cbmZ1bmN0aW9uIHJlbW92ZUVycm9yT3ZlcmxheSgpIHtcbiAgdmFyIG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChPVkVSTEFZX0lEKTtcbiAgaWYgKG92ZXJsYXkpIHtcbiAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgIGNvbnNvbGUubG9nKCdbcGFyY2VsXSDinKggRXJyb3IgcmVzb2x2ZWQnKTtcbiAgfVxufVxuZnVuY3Rpb24gY3JlYXRlRXJyb3JPdmVybGF5KGRpYWdub3N0aWNzKSB7XG4gIHZhciBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG92ZXJsYXkuaWQgPSBPVkVSTEFZX0lEO1xuICBsZXQgZXJyb3JIVE1MID0gJzxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kOiBibGFjazsgb3BhY2l0eTogMC44NTsgZm9udC1zaXplOiAxNnB4OyBjb2xvcjogd2hpdGU7IHBvc2l0aW9uOiBmaXhlZDsgaGVpZ2h0OiAxMDAlOyB3aWR0aDogMTAwJTsgdG9wOiAwcHg7IGxlZnQ6IDBweDsgcGFkZGluZzogMzBweDsgZm9udC1mYW1pbHk6IE1lbmxvLCBDb25zb2xhcywgbW9ub3NwYWNlOyB6LWluZGV4OiA5OTk5O1wiPic7XG4gIGZvciAobGV0IGRpYWdub3N0aWMgb2YgZGlhZ25vc3RpY3MpIHtcbiAgICBsZXQgc3RhY2sgPSBkaWFnbm9zdGljLmZyYW1lcy5sZW5ndGggPyBkaWFnbm9zdGljLmZyYW1lcy5yZWR1Y2UoKHAsIGZyYW1lKSA9PiB7XG4gICAgICByZXR1cm4gYCR7cH1cbjxhIGhyZWY9XCIvX19wYXJjZWxfbGF1bmNoX2VkaXRvcj9maWxlPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGZyYW1lLmxvY2F0aW9uKX1cIiBzdHlsZT1cInRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyBjb2xvcjogIzg4OFwiIG9uY2xpY2s9XCJmZXRjaCh0aGlzLmhyZWYpOyByZXR1cm4gZmFsc2VcIj4ke2ZyYW1lLmxvY2F0aW9ufTwvYT5cbiR7ZnJhbWUuY29kZX1gO1xuICAgIH0sICcnKSA6IGRpYWdub3N0aWMuc3RhY2s7XG4gICAgZXJyb3JIVE1MICs9IGBcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJmb250LXNpemU6IDE4cHg7IGZvbnQtd2VpZ2h0OiBib2xkOyBtYXJnaW4tdG9wOiAyMHB4O1wiPlxuICAgICAgICAgIPCfmqggJHtkaWFnbm9zdGljLm1lc3NhZ2V9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cHJlPiR7c3RhY2t9PC9wcmU+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgJHtkaWFnbm9zdGljLmhpbnRzLm1hcChoaW50ID0+ICc8ZGl2PvCfkqEgJyArIGhpbnQgKyAnPC9kaXY+Jykuam9pbignJyl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAke2RpYWdub3N0aWMuZG9jdW1lbnRhdGlvbiA/IGA8ZGl2PvCfk50gPGEgc3R5bGU9XCJjb2xvcjogdmlvbGV0XCIgaHJlZj1cIiR7ZGlhZ25vc3RpYy5kb2N1bWVudGF0aW9ufVwiIHRhcmdldD1cIl9ibGFua1wiPkxlYXJuIG1vcmU8L2E+PC9kaXY+YCA6ICcnfVxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuICBlcnJvckhUTUwgKz0gJzwvZGl2Pic7XG4gIG92ZXJsYXkuaW5uZXJIVE1MID0gZXJyb3JIVE1MO1xuICByZXR1cm4gb3ZlcmxheTtcbn1cbmZ1bmN0aW9uIGZ1bGxSZWxvYWQoKSB7XG4gIGlmICgncmVsb2FkJyBpbiBsb2NhdGlvbikge1xuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICB9IGVsc2UgaWYgKGV4dEN0eCAmJiBleHRDdHgucnVudGltZSAmJiBleHRDdHgucnVudGltZS5yZWxvYWQpIHtcbiAgICBleHRDdHgucnVudGltZS5yZWxvYWQoKTtcbiAgfVxufVxuZnVuY3Rpb24gZ2V0UGFyZW50cyhidW5kbGUsIGlkKSAvKjogQXJyYXk8W1BhcmNlbFJlcXVpcmUsIHN0cmluZ10+ICove1xuICB2YXIgbW9kdWxlcyA9IGJ1bmRsZS5tb2R1bGVzO1xuICBpZiAoIW1vZHVsZXMpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgdmFyIHBhcmVudHMgPSBbXTtcbiAgdmFyIGssIGQsIGRlcDtcbiAgZm9yIChrIGluIG1vZHVsZXMpIHtcbiAgICBmb3IgKGQgaW4gbW9kdWxlc1trXVsxXSkge1xuICAgICAgZGVwID0gbW9kdWxlc1trXVsxXVtkXTtcbiAgICAgIGlmIChkZXAgPT09IGlkIHx8IEFycmF5LmlzQXJyYXkoZGVwKSAmJiBkZXBbZGVwLmxlbmd0aCAtIDFdID09PSBpZCkge1xuICAgICAgICBwYXJlbnRzLnB1c2goW2J1bmRsZSwga10pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoYnVuZGxlLnBhcmVudCkge1xuICAgIHBhcmVudHMgPSBwYXJlbnRzLmNvbmNhdChnZXRQYXJlbnRzKGJ1bmRsZS5wYXJlbnQsIGlkKSk7XG4gIH1cbiAgcmV0dXJuIHBhcmVudHM7XG59XG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmspIHtcbiAgdmFyIGhyZWYgPSBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICBpZiAoIWhyZWYpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG5ld0xpbmsgPSBsaW5rLmNsb25lTm9kZSgpO1xuICBuZXdMaW5rLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobGluay5wYXJlbnROb2RlICE9PSBudWxsKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICBsaW5rLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobGluayk7XG4gICAgfVxuICB9O1xuICBuZXdMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsXG4gIC8vICRGbG93Rml4TWVcbiAgaHJlZi5zcGxpdCgnPycpWzBdICsgJz8nICsgRGF0ZS5ub3coKSk7XG4gIC8vICRGbG93Rml4TWVcbiAgbGluay5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdMaW5rLCBsaW5rLm5leHRTaWJsaW5nKTtcbn1cbnZhciBjc3NUaW1lb3V0ID0gbnVsbDtcbmZ1bmN0aW9uIHJlbG9hZENTUygpIHtcbiAgaWYgKGNzc1RpbWVvdXQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY3NzVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIHZhciBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXR5cGVdXG4gICAgICB2YXIgaHJlZiAvKjogc3RyaW5nICovID0gbGlua3NbaV0uZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICB2YXIgaG9zdG5hbWUgPSBnZXRIb3N0bmFtZSgpO1xuICAgICAgdmFyIHNlcnZlZEZyb21ITVJTZXJ2ZXIgPSBob3N0bmFtZSA9PT0gJ2xvY2FsaG9zdCcgPyBuZXcgUmVnRXhwKCdeKGh0dHBzPzpcXFxcL1xcXFwvKDAuMC4wLjB8MTI3LjAuMC4xKXxsb2NhbGhvc3QpOicgKyBnZXRQb3J0KCkpLnRlc3QoaHJlZikgOiBocmVmLmluZGV4T2YoaG9zdG5hbWUgKyAnOicgKyBnZXRQb3J0KCkpO1xuICAgICAgdmFyIGFic29sdXRlID0gL15odHRwcz86XFwvXFwvL2kudGVzdChocmVmKSAmJiBocmVmLmluZGV4T2YobG9jYXRpb24ub3JpZ2luKSAhPT0gMCAmJiAhc2VydmVkRnJvbUhNUlNlcnZlcjtcbiAgICAgIGlmICghYWJzb2x1dGUpIHtcbiAgICAgICAgdXBkYXRlTGluayhsaW5rc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNzc1RpbWVvdXQgPSBudWxsO1xuICB9LCA1MCk7XG59XG5mdW5jdGlvbiBobXJEb3dubG9hZChhc3NldCkge1xuICBpZiAoYXNzZXQudHlwZSA9PT0gJ2pzJykge1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBsZXQgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICBzY3JpcHQuc3JjID0gYXNzZXQudXJsICsgJz90PScgKyBEYXRlLm5vdygpO1xuICAgICAgaWYgKGFzc2V0Lm91dHB1dEZvcm1hdCA9PT0gJ2VzbW9kdWxlJykge1xuICAgICAgICBzY3JpcHQudHlwZSA9ICdtb2R1bGUnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgdmFyIF9kb2N1bWVudCRoZWFkO1xuICAgICAgICBzY3JpcHQub25sb2FkID0gKCkgPT4gcmVzb2x2ZShzY3JpcHQpO1xuICAgICAgICBzY3JpcHQub25lcnJvciA9IHJlamVjdDtcbiAgICAgICAgKF9kb2N1bWVudCRoZWFkID0gZG9jdW1lbnQuaGVhZCkgPT09IG51bGwgfHwgX2RvY3VtZW50JGhlYWQgPT09IHZvaWQgMCB8fCBfZG9jdW1lbnQkaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaW1wb3J0U2NyaXB0cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gV29ya2VyIHNjcmlwdHNcbiAgICAgIGlmIChhc3NldC5vdXRwdXRGb3JtYXQgPT09ICdlc21vZHVsZScpIHtcbiAgICAgICAgcmV0dXJuIF9fcGFyY2VsX19pbXBvcnRfXyhhc3NldC51cmwgKyAnP3Q9JyArIERhdGUubm93KCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgX19wYXJjZWxfX2ltcG9ydFNjcmlwdHNfXyhhc3NldC51cmwgKyAnP3Q9JyArIERhdGUubm93KCkpO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmFzeW5jIGZ1bmN0aW9uIGhtckFwcGx5VXBkYXRlcyhhc3NldHMpIHtcbiAgZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGxldCBzY3JpcHRzVG9SZW1vdmU7XG4gIHRyeSB7XG4gICAgLy8gSWYgc291cmNlVVJMIGNvbW1lbnRzIGFyZW4ndCBzdXBwb3J0ZWQgaW4gZXZhbCwgd2UgbmVlZCB0byBsb2FkXG4gICAgLy8gdGhlIHVwZGF0ZSBmcm9tIHRoZSBkZXYgc2VydmVyIG92ZXIgSFRUUCBzbyB0aGF0IHN0YWNrIHRyYWNlc1xuICAgIC8vIGFyZSBjb3JyZWN0IGluIGVycm9ycy9sb2dzLiBUaGlzIGlzIG11Y2ggc2xvd2VyIHRoYW4gZXZhbCwgc29cbiAgICAvLyB3ZSBvbmx5IGRvIGl0IGlmIG5lZWRlZCAoY3VycmVudGx5IGp1c3QgU2FmYXJpKS5cbiAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTM3Mjk3XG4gICAgLy8gVGhpcyBwYXRoIGlzIGFsc28gdGFrZW4gaWYgYSBDU1AgZGlzYWxsb3dzIGV2YWwuXG4gICAgaWYgKCFzdXBwb3J0c1NvdXJjZVVSTCkge1xuICAgICAgbGV0IHByb21pc2VzID0gYXNzZXRzLm1hcChhc3NldCA9PiB7XG4gICAgICAgIHZhciBfaG1yRG93bmxvYWQ7XG4gICAgICAgIHJldHVybiAoX2htckRvd25sb2FkID0gaG1yRG93bmxvYWQoYXNzZXQpKSA9PT0gbnVsbCB8fCBfaG1yRG93bmxvYWQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9obXJEb3dubG9hZC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgIC8vIFdlYiBleHRlbnNpb24gZml4XG4gICAgICAgICAgaWYgKGV4dEN0eCAmJiBleHRDdHgucnVudGltZSAmJiBleHRDdHgucnVudGltZS5nZXRNYW5pZmVzdCgpLm1hbmlmZXN0X3ZlcnNpb24gPT0gMyAmJiB0eXBlb2YgU2VydmljZVdvcmtlckdsb2JhbFNjb3BlICE9ICd1bmRlZmluZWQnICYmIGdsb2JhbCBpbnN0YW5jZW9mIFNlcnZpY2VXb3JrZXJHbG9iYWxTY29wZSkge1xuICAgICAgICAgICAgZXh0Q3R4LnJ1bnRpbWUucmVsb2FkKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHNjcmlwdHNUb1JlbW92ZSA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgICB9XG4gICAgYXNzZXRzLmZvckVhY2goZnVuY3Rpb24gKGFzc2V0KSB7XG4gICAgICBobXJBcHBseShtb2R1bGUuYnVuZGxlLnJvb3QsIGFzc2V0KTtcbiAgICB9KTtcbiAgfSBmaW5hbGx5IHtcbiAgICBkZWxldGUgZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZTtcbiAgICBpZiAoc2NyaXB0c1RvUmVtb3ZlKSB7XG4gICAgICBzY3JpcHRzVG9SZW1vdmUuZm9yRWFjaChzY3JpcHQgPT4ge1xuICAgICAgICBpZiAoc2NyaXB0KSB7XG4gICAgICAgICAgdmFyIF9kb2N1bWVudCRoZWFkMjtcbiAgICAgICAgICAoX2RvY3VtZW50JGhlYWQyID0gZG9jdW1lbnQuaGVhZCkgPT09IG51bGwgfHwgX2RvY3VtZW50JGhlYWQyID09PSB2b2lkIDAgfHwgX2RvY3VtZW50JGhlYWQyLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gaG1yQXBwbHkoYnVuZGxlIC8qOiBQYXJjZWxSZXF1aXJlICovLCBhc3NldCAvKjogIEhNUkFzc2V0ICovKSB7XG4gIHZhciBtb2R1bGVzID0gYnVuZGxlLm1vZHVsZXM7XG4gIGlmICghbW9kdWxlcykge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoYXNzZXQudHlwZSA9PT0gJ2NzcycpIHtcbiAgICByZWxvYWRDU1MoKTtcbiAgfSBlbHNlIGlmIChhc3NldC50eXBlID09PSAnanMnKSB7XG4gICAgbGV0IGRlcHMgPSBhc3NldC5kZXBzQnlCdW5kbGVbYnVuZGxlLkhNUl9CVU5ETEVfSURdO1xuICAgIGlmIChkZXBzKSB7XG4gICAgICBpZiAobW9kdWxlc1thc3NldC5pZF0pIHtcbiAgICAgICAgLy8gUmVtb3ZlIGRlcGVuZGVuY2llcyB0aGF0IGFyZSByZW1vdmVkIGFuZCB3aWxsIGJlY29tZSBvcnBoYW5lZC5cbiAgICAgICAgLy8gVGhpcyBpcyBuZWNlc3Nhcnkgc28gdGhhdCBpZiB0aGUgYXNzZXQgaXMgYWRkZWQgYmFjayBhZ2FpbiwgdGhlIGNhY2hlIGlzIGdvbmUsIGFuZCB3ZSBwcmV2ZW50IGEgZnVsbCBwYWdlIHJlbG9hZC5cbiAgICAgICAgbGV0IG9sZERlcHMgPSBtb2R1bGVzW2Fzc2V0LmlkXVsxXTtcbiAgICAgICAgZm9yIChsZXQgZGVwIGluIG9sZERlcHMpIHtcbiAgICAgICAgICBpZiAoIWRlcHNbZGVwXSB8fCBkZXBzW2RlcF0gIT09IG9sZERlcHNbZGVwXSkge1xuICAgICAgICAgICAgbGV0IGlkID0gb2xkRGVwc1tkZXBdO1xuICAgICAgICAgICAgbGV0IHBhcmVudHMgPSBnZXRQYXJlbnRzKG1vZHVsZS5idW5kbGUucm9vdCwgaWQpO1xuICAgICAgICAgICAgaWYgKHBhcmVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgIGhtckRlbGV0ZShtb2R1bGUuYnVuZGxlLnJvb3QsIGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0c1NvdXJjZVVSTCkge1xuICAgICAgICAvLyBHbG9iYWwgZXZhbC4gV2Ugd291bGQgdXNlIGBuZXcgRnVuY3Rpb25gIGhlcmUgYnV0IGJyb3dzZXJcbiAgICAgICAgLy8gc3VwcG9ydCBmb3Igc291cmNlIG1hcHMgaXMgYmV0dGVyIHdpdGggZXZhbC5cbiAgICAgICAgKDAsIGV2YWwpKGFzc2V0Lm91dHB1dCk7XG4gICAgICB9XG5cbiAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgIGxldCBmbiA9IGdsb2JhbC5wYXJjZWxIb3RVcGRhdGVbYXNzZXQuaWRdO1xuICAgICAgbW9kdWxlc1thc3NldC5pZF0gPSBbZm4sIGRlcHNdO1xuICAgIH1cblxuICAgIC8vIEFsd2F5cyB0cmF2ZXJzZSB0byB0aGUgcGFyZW50IGJ1bmRsZSwgZXZlbiBpZiB3ZSBhbHJlYWR5IHJlcGxhY2VkIHRoZSBhc3NldCBpbiB0aGlzIGJ1bmRsZS5cbiAgICAvLyBUaGlzIGlzIHJlcXVpcmVkIGluIGNhc2UgbW9kdWxlcyBhcmUgZHVwbGljYXRlZC4gV2UgbmVlZCB0byBlbnN1cmUgYWxsIGluc3RhbmNlcyBoYXZlIHRoZSB1cGRhdGVkIGNvZGUuXG4gICAgaWYgKGJ1bmRsZS5wYXJlbnQpIHtcbiAgICAgIGhtckFwcGx5KGJ1bmRsZS5wYXJlbnQsIGFzc2V0KTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGhtckRlbGV0ZShidW5kbGUsIGlkKSB7XG4gIGxldCBtb2R1bGVzID0gYnVuZGxlLm1vZHVsZXM7XG4gIGlmICghbW9kdWxlcykge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAobW9kdWxlc1tpZF0pIHtcbiAgICAvLyBDb2xsZWN0IGRlcGVuZGVuY2llcyB0aGF0IHdpbGwgYmVjb21lIG9ycGhhbmVkIHdoZW4gdGhpcyBtb2R1bGUgaXMgZGVsZXRlZC5cbiAgICBsZXQgZGVwcyA9IG1vZHVsZXNbaWRdWzFdO1xuICAgIGxldCBvcnBoYW5zID0gW107XG4gICAgZm9yIChsZXQgZGVwIGluIGRlcHMpIHtcbiAgICAgIGxldCBwYXJlbnRzID0gZ2V0UGFyZW50cyhtb2R1bGUuYnVuZGxlLnJvb3QsIGRlcHNbZGVwXSk7XG4gICAgICBpZiAocGFyZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgb3JwaGFucy5wdXNoKGRlcHNbZGVwXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRGVsZXRlIHRoZSBtb2R1bGUuIFRoaXMgbXVzdCBiZSBkb25lIGJlZm9yZSBkZWxldGluZyBkZXBlbmRlbmNpZXMgaW4gY2FzZSBvZiBjaXJjdWxhciBkZXBlbmRlbmNpZXMuXG4gICAgZGVsZXRlIG1vZHVsZXNbaWRdO1xuICAgIGRlbGV0ZSBidW5kbGUuY2FjaGVbaWRdO1xuXG4gICAgLy8gTm93IGRlbGV0ZSB0aGUgb3JwaGFucy5cbiAgICBvcnBoYW5zLmZvckVhY2goaWQgPT4ge1xuICAgICAgaG1yRGVsZXRlKG1vZHVsZS5idW5kbGUucm9vdCwgaWQpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKGJ1bmRsZS5wYXJlbnQpIHtcbiAgICBobXJEZWxldGUoYnVuZGxlLnBhcmVudCwgaWQpO1xuICB9XG59XG5mdW5jdGlvbiBobXJBY2NlcHRDaGVjayhidW5kbGUgLyo6IFBhcmNlbFJlcXVpcmUgKi8sIGlkIC8qOiBzdHJpbmcgKi8sIGRlcHNCeUJ1bmRsZSAvKjogP3sgW3N0cmluZ106IHsgW3N0cmluZ106IHN0cmluZyB9IH0qLykge1xuICBpZiAoaG1yQWNjZXB0Q2hlY2tPbmUoYnVuZGxlLCBpZCwgZGVwc0J5QnVuZGxlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gVHJhdmVyc2UgcGFyZW50cyBicmVhZHRoIGZpcnN0LiBBbGwgcG9zc2libGUgYW5jZXN0cmllcyBtdXN0IGFjY2VwdCB0aGUgSE1SIHVwZGF0ZSwgb3Igd2UnbGwgcmVsb2FkLlxuICBsZXQgcGFyZW50cyA9IGdldFBhcmVudHMobW9kdWxlLmJ1bmRsZS5yb290LCBpZCk7XG4gIGxldCBhY2NlcHRlZCA9IGZhbHNlO1xuICB3aGlsZSAocGFyZW50cy5sZW5ndGggPiAwKSB7XG4gICAgbGV0IHYgPSBwYXJlbnRzLnNoaWZ0KCk7XG4gICAgbGV0IGEgPSBobXJBY2NlcHRDaGVja09uZSh2WzBdLCB2WzFdLCBudWxsKTtcbiAgICBpZiAoYSkge1xuICAgICAgLy8gSWYgdGhpcyBwYXJlbnQgYWNjZXB0cywgc3RvcCB0cmF2ZXJzaW5nIHVwd2FyZCwgYnV0IHN0aWxsIGNvbnNpZGVyIHNpYmxpbmdzLlxuICAgICAgYWNjZXB0ZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBPdGhlcndpc2UsIHF1ZXVlIHRoZSBwYXJlbnRzIGluIHRoZSBuZXh0IGxldmVsIHVwd2FyZC5cbiAgICAgIGxldCBwID0gZ2V0UGFyZW50cyhtb2R1bGUuYnVuZGxlLnJvb3QsIHZbMV0pO1xuICAgICAgaWYgKHAubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBwYXJlbnRzLCB0aGVuIHdlJ3ZlIHJlYWNoZWQgYW4gZW50cnkgd2l0aG91dCBhY2NlcHRpbmcuIFJlbG9hZC5cbiAgICAgICAgYWNjZXB0ZWQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBwYXJlbnRzLnB1c2goLi4ucCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBhY2NlcHRlZDtcbn1cbmZ1bmN0aW9uIGhtckFjY2VwdENoZWNrT25lKGJ1bmRsZSAvKjogUGFyY2VsUmVxdWlyZSAqLywgaWQgLyo6IHN0cmluZyAqLywgZGVwc0J5QnVuZGxlIC8qOiA/eyBbc3RyaW5nXTogeyBbc3RyaW5nXTogc3RyaW5nIH0gfSovKSB7XG4gIHZhciBtb2R1bGVzID0gYnVuZGxlLm1vZHVsZXM7XG4gIGlmICghbW9kdWxlcykge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoZGVwc0J5QnVuZGxlICYmICFkZXBzQnlCdW5kbGVbYnVuZGxlLkhNUl9CVU5ETEVfSURdKSB7XG4gICAgLy8gSWYgd2UgcmVhY2hlZCB0aGUgcm9vdCBidW5kbGUgd2l0aG91dCBmaW5kaW5nIHdoZXJlIHRoZSBhc3NldCBzaG91bGQgZ28sXG4gICAgLy8gdGhlcmUncyBub3RoaW5nIHRvIGRvLiBNYXJrIGFzIFwiYWNjZXB0ZWRcIiBzbyB3ZSBkb24ndCByZWxvYWQgdGhlIHBhZ2UuXG4gICAgaWYgKCFidW5kbGUucGFyZW50KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhtckFjY2VwdENoZWNrKGJ1bmRsZS5wYXJlbnQsIGlkLCBkZXBzQnlCdW5kbGUpO1xuICB9XG4gIGlmIChjaGVja2VkQXNzZXRzW2lkXSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGNoZWNrZWRBc3NldHNbaWRdID0gdHJ1ZTtcbiAgdmFyIGNhY2hlZCA9IGJ1bmRsZS5jYWNoZVtpZF07XG4gIGFzc2V0c1RvRGlzcG9zZS5wdXNoKFtidW5kbGUsIGlkXSk7XG4gIGlmICghY2FjaGVkIHx8IGNhY2hlZC5ob3QgJiYgY2FjaGVkLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCkge1xuICAgIGFzc2V0c1RvQWNjZXB0LnB1c2goW2J1bmRsZSwgaWRdKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuZnVuY3Rpb24gaG1yRGlzcG9zZVF1ZXVlKCkge1xuICAvLyBEaXNwb3NlIGFsbCBvbGQgYXNzZXRzLlxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFzc2V0c1RvRGlzcG9zZS5sZW5ndGg7IGkrKykge1xuICAgIGxldCBpZCA9IGFzc2V0c1RvRGlzcG9zZVtpXVsxXTtcbiAgICBpZiAoIWRpc3Bvc2VkQXNzZXRzW2lkXSkge1xuICAgICAgaG1yRGlzcG9zZShhc3NldHNUb0Rpc3Bvc2VbaV1bMF0sIGlkKTtcbiAgICAgIGRpc3Bvc2VkQXNzZXRzW2lkXSA9IHRydWU7XG4gICAgfVxuICB9XG4gIGFzc2V0c1RvRGlzcG9zZSA9IFtdO1xufVxuZnVuY3Rpb24gaG1yRGlzcG9zZShidW5kbGUgLyo6IFBhcmNlbFJlcXVpcmUgKi8sIGlkIC8qOiBzdHJpbmcgKi8pIHtcbiAgdmFyIGNhY2hlZCA9IGJ1bmRsZS5jYWNoZVtpZF07XG4gIGJ1bmRsZS5ob3REYXRhW2lkXSA9IHt9O1xuICBpZiAoY2FjaGVkICYmIGNhY2hlZC5ob3QpIHtcbiAgICBjYWNoZWQuaG90LmRhdGEgPSBidW5kbGUuaG90RGF0YVtpZF07XG4gIH1cbiAgaWYgKGNhY2hlZCAmJiBjYWNoZWQuaG90ICYmIGNhY2hlZC5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgY2FjaGVkLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChjYikge1xuICAgICAgY2IoYnVuZGxlLmhvdERhdGFbaWRdKTtcbiAgICB9KTtcbiAgfVxuICBkZWxldGUgYnVuZGxlLmNhY2hlW2lkXTtcbn1cbmZ1bmN0aW9uIGhtckFjY2VwdChidW5kbGUgLyo6IFBhcmNlbFJlcXVpcmUgKi8sIGlkIC8qOiBzdHJpbmcgKi8pIHtcbiAgLy8gRXhlY3V0ZSB0aGUgbW9kdWxlLlxuICBidW5kbGUoaWQpO1xuXG4gIC8vIFJ1biB0aGUgYWNjZXB0IGNhbGxiYWNrcyBpbiB0aGUgbmV3IHZlcnNpb24gb2YgdGhlIG1vZHVsZS5cbiAgdmFyIGNhY2hlZCA9IGJ1bmRsZS5jYWNoZVtpZF07XG4gIGlmIChjYWNoZWQgJiYgY2FjaGVkLmhvdCAmJiBjYWNoZWQuaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgbGV0IGFzc2V0c1RvQWxzb0FjY2VwdCA9IFtdO1xuICAgIGNhY2hlZC5ob3QuX2FjY2VwdENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChjYikge1xuICAgICAgbGV0IGFkZGl0aW9uYWxBc3NldHMgPSBjYihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBnZXRQYXJlbnRzKG1vZHVsZS5idW5kbGUucm9vdCwgaWQpO1xuICAgICAgfSk7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShhZGRpdGlvbmFsQXNzZXRzKSAmJiBhZGRpdGlvbmFsQXNzZXRzLmxlbmd0aCkge1xuICAgICAgICBhc3NldHNUb0Fsc29BY2NlcHQucHVzaCguLi5hZGRpdGlvbmFsQXNzZXRzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoYXNzZXRzVG9BbHNvQWNjZXB0Lmxlbmd0aCkge1xuICAgICAgbGV0IGhhbmRsZWQgPSBhc3NldHNUb0Fsc29BY2NlcHQuZXZlcnkoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuIGhtckFjY2VwdENoZWNrKGFbMF0sIGFbMV0pO1xuICAgICAgfSk7XG4gICAgICBpZiAoIWhhbmRsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZ1bGxSZWxvYWQoKTtcbiAgICAgIH1cbiAgICAgIGhtckRpc3Bvc2VRdWV1ZSgpO1xuICAgIH1cbiAgfVxufSIsImltcG9ydCBGaWxlUHJldmlldyBmcm9tICcuL19maWxlUHJldmlldyc7XHJcbmltcG9ydCBNb2R1bGVMaXN0IGZyb20gJy4vX21vZHVsZUxpc3QnO1xyXG5pbXBvcnQgJy4uL2Nzcy9zdGF0aWMuc2Nzcyc7XHJcblxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpPT4ge1xyXG4gIGNvbnN0IGZpbGVQcmV2aWV3VVJMID0gbmV3IFJlZ0V4cCgnXi9jb3Vyc2VzL1xcXFxkKy9maWxlcy9cXFxcZCsoXFxcXFMqKSQnKTtcclxuICBjb25zdCBtb2R1bGVzVVJMID0gbmV3IFJlZ0V4cCgnXi9jb3Vyc2VzL1xcXFxkKy9tb2R1bGVzJCcpO1xyXG5cclxuICBjb25zdCBDU1N0b0luamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChDU1N0b0luamVjdCk7XHJcbiAgXHJcbiAgaWYgKGZpbGVQcmV2aWV3VVJMLnRlc3QobG9jYXRpb24ucGF0aG5hbWUpKSB7XHJcbiAgICBjb25zb2xlLmxvZygnd29ya3MhJyk7XHJcbiAgICBuZXcgRmlsZVByZXZpZXcoKTtcclxuICB9XHJcbiAgXHJcbiAgZWxzZSBpZiAoL1xcL2NvdXJzZXNcXC9bMC05XStcXC9xdWl6emVzXFwvW15cXC9dKy8udGVzdChsb2NhdGlvbi5wYXRobmFtZSkpIHtcclxuICAgIGxldCBzdHlsZVNoZWV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuICAgIHN0eWxlU2hlZXQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAjcmlnaHQtc2lkZXt0b3A6IDU2cHg7IHBvc2l0aW9uOiBzdGlja3k7fVxyXG4gICAgICAjcXVlc3Rpb25fbGlzdHttYXgtaGVpZ2h0OiA1MDBweCAhaW1wb3J0YW50O31cclxuICAgICAgLmxpc3RfcXVlc3Rpb24ubWFya2VkID4gLmp1bXBfdG9fcXVlc3Rpb25fbGlua3tjb2xvcjogcmVkICFpbXBvcnRhbnQ7fVxyXG4gICAgICAucXVlc3Rpb24ubWFya2VkID4gLmhlYWRlcntiYWNrZ3JvdW5kOiByZWQ7IGNvbG9yOiB3aGl0ZTt9XHJcbiAgICBgO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdHlsZVNoZWV0KTtcclxuICB9XHJcbiAgXHJcbiAgZWxzZSBpZiAobW9kdWxlc1VSTC50ZXN0KGxvY2F0aW9uLnBhdGhuYW1lKSkge1xyXG4gICAgbmV3IE1vZHVsZUxpc3QoKTtcclxuICB9XHJcbn0pOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVQcmV2aWV3IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuXHJcbiAgICB0aGlzLmZpbGVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50IGgyJyk7XHJcbiAgICB0aGlzLm1haW5GcmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pYy1MYXlvdXQtY29udGVudE1haW4nKTtcclxuICAgIHRoaXMuZG93bmxvYWRUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQgPiBkaXYnKTtcclxuXHJcbiAgICB0aGlzLmZpbGVUaXRsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgdGhpcy5tYWluRnJhbWUuc3R5bGUucGFkZGluZyA9ICcwIDI0cHgnO1xyXG4gICAgdGhpcy5kb3dubG9hZFRleHQuY2xhc3NMaXN0LmFkZCgnQnV0dG9uJywgJ2Rvd25sb2FkLWJ1dHRvbicpO1xyXG4gICAgdGhpcy5kb3dubG9hZFRleHQucXVlcnlTZWxlY3Rvcignc3BhbiA+IGEnKS5pbm5lckhUTUwgPSAnRG93bmxvYWQnO1xyXG5cclxuICAgIC8vIHRyaWdnZXIgdGhlIGlubmVyICdhJyAoZG93bmxvYWQpIGV2ZW50IG9uY2UgdGhlIGJ1dHRvbiBpcyBjbGlja2VkIGFueXdoZXJlXHJcbiAgICB0aGlzLmRvd25sb2FkVGV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIHRoaXMuZG93bmxvYWRUZXh0LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4gPiBhJykuY2xpY2soKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZG93bmxvYWRUZXh0LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIHRoaXMuZG93bmxvYWRUZXh0LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4gPiBhJykuY2xpY2soKTtcclxuICAgIH0pO1xyXG4gIH1cclxufSIsImV4cG9ydHMuaW50ZXJvcERlZmF1bHQgPSBmdW5jdGlvbiAoYSkge1xuICByZXR1cm4gYSAmJiBhLl9fZXNNb2R1bGUgPyBhIDoge2RlZmF1bHQ6IGF9O1xufTtcblxuZXhwb3J0cy5kZWZpbmVJbnRlcm9wRmxhZyA9IGZ1bmN0aW9uIChhKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCAnX19lc01vZHVsZScsIHt2YWx1ZTogdHJ1ZX0pO1xufTtcblxuZXhwb3J0cy5leHBvcnRBbGwgPSBmdW5jdGlvbiAoc291cmNlLCBkZXN0KSB7XG4gIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKFxuICAgICAga2V5ID09PSAnZGVmYXVsdCcgfHxcbiAgICAgIGtleSA9PT0gJ19fZXNNb2R1bGUnIHx8XG4gICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZGVzdCwga2V5KVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBrZXksIHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZVtrZXldO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRlc3Q7XG59O1xuXG5leHBvcnRzLmV4cG9ydCA9IGZ1bmN0aW9uIChkZXN0LCBkZXN0TmFtZSwgZ2V0KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBkZXN0TmFtZSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBnZXQsXG4gIH0pO1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVQcmV2aWV3IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuaGVhZGVyQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1iYXInKTtcclxuICAgIHRoaXMuaGVhZGVyQmFyLmNsYXNzTGlzdC5hZGQoJ3RvcC1yaWdodCcpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC41ZDgwMzhhNS5qcy5tYXAifQ==
