"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var precacheConfig=[["/2021/02/27/Sport/index.html","27ae2e2330d286c8c7498050b20a0b3c"],["/2021/02/28/poetry-and-word/index.html","238f214f8777804a5df6bdb5425aac2c"],["/404.html","01f47c425657660f58cb132b86312663"],["/about/index.html","9da2cc540f1cd4992c92ee854efc7807"],["/archives/2021/02/index.html","a106c319cd7e8ed079719f9e15820e8e"],["/archives/2021/index.html","15c90ab151a9c6cc8198ba9d368d9801"],["/archives/index.html","4d1929e9fc661760264e322e571acbf4"],["/books/index.html","367cd5e68ca620cc461255312494f2b4"],["/categories/index.html","07dbcaaf07b10fc9897bffc9dcd70d35"],["/categories/生活/index.html","810b3c3df59b9a4e84830bd5077ceaa5"],["/categories/生活/记录/index.html","a8f8c0bfc3e0f90ff0689022320fc37b"],["/categories/生活/记录/运动/index.html","9cb588b1e7d0e5e06e27c45bcbe18142"],["/categories/积累/index.html","c2eb5fda7db1e64ede717fa3d9ae23b2"],["/categories/积累/知识/index.html","3109c996459488e2001aec3aca7053d4"],["/categories/积累/知识/文学/index.html","7a2623501262d161016ebaa3e7aed87b"],["/css/custom.css","3c9931b74d5b11dcdd497ee9d7d2afa9"],["/css/index.css","3e67c54eb1d1db7e28805fc767a45e9b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/games/index.html","ecd2efb83389156a53186017ee95da8b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/alipay.jpg","8b88035389ea6ac2bf16dea19e49161d"],["/img/avatar.png","d4cc070d9c0fd14cb91223db246ae239"],["/img/chun.jpg","effea2239cf530c238b2b381beb40cbc"],["/img/comment_bg.png","0dd37d23a517354bf4ac6e29c8258e2e"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/index.jpg","bac5f37a118fd37b2ab47d53b68117a7"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wechat.jpg","33550b532fcafd80cc36ea69d7ea3186"],["/img/xi.jpg","072aa97163631ec276411550b42454c0"],["/index.html","4dd0caa4992fa0e9b3864421dde7c4df"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","b2218282498289bb272ef1f66a69ae41"],["/movies/index.html","67aba71ceff8c87b8b80fbda9c33a6cb"],["/plans/index.html","1c137fe4d5432d93d91896dfc71ab80e"],["/tags/Nintendo-Switch/index.html","d93b4329f909792aa6836666205057e7"],["/tags/index.html","5843dec4c366d3fdf35900f36faf9c05"],["/tags/古文字/index.html","3eb6d8a1dbd55dc1c2b673992974ed22"],["/tags/游戏/index.html","5df3a383a8c4b5df8825aa3812d08070"],["/tags/诗词/index.html","f98fca0061f5d7e7d8451d5c2f1b0f54"],["/tags/运动/index.html","e5e1b15969c47844f4da8ccd8aa1d593"],["/talking/index.html","5149a21e84060af85cce94109ff41cce"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){e=new URL(e);return"/"===e.pathname.slice(-1)&&(e.pathname+=t),e.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,r){e=new URL(e);return r&&e.pathname.match(r)||(e.search+=(e.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),e.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){e=new URL(e);return e.hash="",e.search=e.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],e=e[1],t=new URL(t,self.location),e=createCacheKey(t,hashParamName,e,!1);return[t.toString(),e]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){var n,e,r;"GET"===t.request.method&&(n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html",(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,r),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)})))}),function(e){"object"==("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).toolbox=e()}(function(){return function r(o,c,a){function i(n,e){if(!c[n]){if(!o[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(s)return s(n,!0);t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}t=c[n]={exports:{}};o[n][0].call(t.exports,function(e){var t=o[n][1][e];return i(t||e)},t,t.exports,r,o,c,a)}return c[n].exports}for(var s="function"==typeof require&&require,e=0;e<a.length;e++)i(a[e]);return i}({1:[function(e,t,n){function i(e,t){((t=t||{}).debug||a.debug)&&console.log("[sw-toolbox] "+e)}function o(e){var t=(t=e&&e.cache?e.cache.name:t)||a.cache.name;return caches.open(t)}function r(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var c,a=e("./options"),s=e("./idb-cache-expiration");t.exports={debug:i,fetchAndCache:function(n,r){var t=(r=r||{}).successResponses||a.successResponses;return fetch(n.clone()).then(function(e){return"GET"===n.method&&t.test(e.status)&&o(r).then(function(t){t.put(n,e).then(function(){var e=r.cache||a.cache;(e.maxEntries||e.maxAgeSeconds)&&e.name&&(e=function(e,t,n){var r=e.url,o=n.maxAgeSeconds,c=n.maxEntries,n=n.name,a=Date.now();return i("Updating LRU order for "+r+". Max entries is "+c+", max age is "+o),s.getDb(n).then(function(e){return s.setTimestampForUrl(e,r,a)}).then(function(e){return s.expireEntries(e,c,o,a)}).then(function(e){i("Successfully updated IDB.");e=e.map(function(e){return t.delete(e)});return Promise.all(e).then(function(){i("Done with cache cleanup.")})}).catch(function(e){i(e)})}.bind(null,n,t,e=e),c=c?c.then(e):e())})}),e.clone()})},openCache:o,renameCache:function(t,e,n){return i("Renaming cache: ["+t+"] to ["+e+"]",n),caches.delete(e).then(function(){return Promise.all([caches.open(t),caches.open(e)]).then(function(e){var n=e[0],r=e[1];return n.keys().then(function(e){return Promise.all(e.map(function(t){return n.match(t).then(function(e){return r.put(t,e)})}))}).then(function(){return caches.delete(t)})})})},cache:function(t,e){return o(e).then(function(e){return e.add(t)})},uncache:function(t,e){return o(e).then(function(e){return e.delete(t)})},precache:function(e){e instanceof Promise||r(e),a.preCacheItems=a.preCacheItems.concat(e)},validatePrecacheInput:r,isResponseFresh:function(e,t,n){if(!e)return!1;if(t){e=e.headers.get("date");if(e)if(new Date(e).getTime()+1e3*t<n)return!1}return!0}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){var o="sw-toolbox-",c=1,u="store",f="url",h="timestamp",a={};t.exports={getDb:function(e){return e in a||(a[e]=(r=e,new Promise(function(e,t){var n=indexedDB.open(o+r,c);n.onupgradeneeded=function(){n.result.createObjectStore(u,{keyPath:f}).createIndex(h,h,{unique:!1})},n.onsuccess=function(){e(n.result)},n.onerror=function(){t(n.error)}}))),a[e];var r},setTimestampForUrl:function(r,o,c){return new Promise(function(e,t){var n=r.transaction(u,"readwrite");n.objectStore(u).put({url:o,timestamp:c}),n.oncomplete=function(){e(r)},n.onabort=function(){t(n.error)}})},expireEntries:function(e,n,t,r){return a=e,s=r,((i=t)?new Promise(function(e,t){var n=1e3*i,r=[],o=a.transaction(u,"readwrite"),c=o.objectStore(u);c.index(h).openCursor().onsuccess=function(e){var t=e.target.result;t&&s-n>t.value[h]&&(e=t.value[f],r.push(e),c.delete(e),t.continue())},o.oncomplete=function(){e(r)},o.onabort=t}):Promise.resolve([])).then(function(t){return i=e,((s=n)?new Promise(function(e,t){var r=[],n=i.transaction(u,"readwrite"),o=n.objectStore(u),c=o.index(h),a=c.count();c.count().onsuccess=function(){var n=a.result;s<n&&(c.openCursor().onsuccess=function(e){var t=e.target.result;t&&(e=t.value[f],r.push(e),o.delete(e),n-r.length>s&&t.continue())})},n.oncomplete=function(){e(r)},n.onabort=t}):Promise.resolve([])).then(function(e){return t.concat(e)});var i,s});var a,i,s}}},{}],3:[function(e,t,n){function r(e){return e.reduce(function(e,t){return e.concat(t)},[])}e("serviceworker-cache-polyfill");var o=e("./helpers"),c=e("./router"),a=e("./options");t.exports={fetchListener:function(e){var t=c.match(e.request);t?e.respondWith(t(e.request)):c.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(c.default(e.request))},activateListener:function(e){o.debug("activate event fired");var t=a.cache.name+"$$$inactive$$$";e.waitUntil(o.renameCache(t,a.cache.name))},installListener:function(e){var t=a.cache.name+"$$$inactive$$$";o.debug("install event fired"),o.debug("creating cache ["+t+"]"),e.waitUntil(o.openCache({cache:{name:t}}).then(function(t){return Promise.all(a.preCacheItems).then(r).then(o.validatePrecacheInput).then(function(e){return o.debug("preCache list: "+(e.join(", ")||"(none)")),t.addAll(e)})}))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){var r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href;t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){var o=new URL("./",self.location).pathname,c=e("path-to-regexp"),e=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=c(t,this.keys)),this.method=e,this.options=r,this.handler=n};e.prototype.makeHandler=function(e){var n,r;return this.regexp&&(n=this.regexp.exec(e),r={},this.keys.forEach(function(e,t){r[e.name]=n[t+1]})),function(e){return this.handler(e,r,this.options)}.bind(this)},t.exports=e},{"path-to-regexp":15}],6:[function(e,t,n){function c(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;)new RegExp(r.value[0]).test(t)&&o.push(r.value[1]),r=n.next();return o}function o(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null}var a=e("./route"),i=e("./helpers");["get","post","put","delete","head","any"].forEach(function(r){o.prototype[r]=function(e,t,n){return this.add(r,e,t,n)}}),o.prototype.add=function(e,t,n,r){r=r||{},o=t instanceof RegExp?RegExp:(o=r.origin||self.location.origin)instanceof RegExp?o.source:o.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),e=e.toLowerCase();r=new a(e,t,n,r);this.routes.has(o)||this.routes.set(o,new Map);var o=this.routes.get(o);o.has(e)||o.set(e,new Map);o=o.get(e),e=r.regexp||r.fullUrlRegExp;o.has(e.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),o.set(e.source,r)},o.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,n=n.pathname;return this._match(e,c(this.routes,r),n)||this._match(e,[this.routes.get(RegExp)],t)},o.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],o=o&&o.get(e.toLowerCase());if(o){o=c(o,n);if(0<o.length)return o[0].makeHandler(n)}}return null},o.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new o},{"./helpers":1,"./route":5}],7:[function(e,t,n){var c=e("../options"),a=e("../helpers");t.exports=function(r,e,o){return o=o||{},a.debug("Strategy: cache first ["+r.url+"]",o),a.openCache(o).then(function(e){return e.match(r).then(function(e){var t=o.cache||c.cache,n=Date.now();return a.isResponseFresh(e,t.maxAgeSeconds,n)?e:a.fetchAndCache(r,o)})})}},{"../helpers":1,"../options":4}],8:[function(e,t,n){var o=e("../options"),c=e("../helpers");t.exports=function(t,e,r){return r=r||{},c.debug("Strategy: cache only ["+t.url+"]",r),c.openCache(r).then(function(e){return e.match(t).then(function(e){var t=r.cache||o.cache,n=Date.now();if(c.isResponseFresh(e,t.maxAgeSeconds,n))return e})})}},{"../helpers":1,"../options":4}],9:[function(e,t,n){var u=e("../helpers"),f=e("./cacheOnly");t.exports=function(a,i,s){return u.debug("Strategy: fastest ["+a.url+"]",s),new Promise(function(t,n){function r(e){c.push(e.toString()),o?n(new Error('Both cache and network failed: "'+c.join('", "')+'"')):o=!0}function e(e){e instanceof Response?t(e):r("No result returned")}var o=!1,c=[];u.fetchAndCache(a.clone(),s).then(e,r),f(a,i,s).then(e,r)})}},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){var u=e("../options"),f=e("../helpers");t.exports=function(c,e,a){var i=(a=a||{}).successResponses||u.successResponses,s=a.networkTimeoutSeconds||u.networkTimeoutSeconds;return f.debug("Strategy: network first ["+c.url+"]",a),f.openCache(a).then(function(e){var t,n,r=[];s&&(o=new Promise(function(r){t=setTimeout(function(){e.match(c).then(function(e){var t=a.cache||u.cache,n=Date.now(),t=t.maxAgeSeconds;f.isResponseFresh(e,t,n)&&r(e)})},1e3*s)}),r.push(o));var o=f.fetchAndCache(c,a).then(function(e){if(t&&clearTimeout(t),i.test(e.status))return e;throw f.debug("Response was an HTTP error: "+e.statusText,a),n=e,new Error("Bad response")}).catch(function(t){return f.debug("Network or response error, fallback to cache ["+c.url+"]",a),e.match(c).then(function(e){if(e)return e;if(n)return n;throw t})});return r.push(o),Promise.race(r)})}},{"../helpers":1,"../options":4}],12:[function(e,t,n){var r=e("../helpers");t.exports=function(e,t,n){return r.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}},{"../helpers":1}],13:[function(e,t,n){var r=e("./options"),o=e("./router"),c=e("./helpers"),a=e("./strategies"),e=e("./listeners");c.debug("Service Worker Toolbox is loading"),self.addEventListener("install",e.installListener),self.addEventListener("activate",e.activateListener),self.addEventListener("fetch",e.fetchListener),t.exports={networkOnly:a.networkOnly,networkFirst:a.networkFirst,cacheOnly:a.cacheOnly,cacheFirst:a.cacheFirst,fastest:a.fastest,router:o,options:r,cache:c.cache,uncache:c.uncache,precache:c.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n=[],r=0,o=0,c="",a=t&&t.delimiter||"/";null!=(h=b.exec(e));){var i,s,u,f,h,l,d=h[0],p=h[1],m=h.index;c+=e.slice(o,m),o=m+d.length,p?c+=p[1]:(f=e[o],i=h[2],s=h[3],u=h[4],l=h[5],m=h[6],d=h[7],c&&(n.push(c),c=""),p=null!=i&&null!=f&&f!==i,f="+"===m||"*"===m,m="?"===m||"*"===m,h=h[2]||a,l=u||l,n.push({name:s||r++,prefix:i||"",delimiter:h,optional:m,repeat:f,partial:p,asterisk:!!d,pattern:l?l.replace(/([=!:$\/()])/g,"\\$1"):d?".*":"[^"+g(h)+"]+?"}))}return o<e.length&&(c+=e.substr(o)),c&&n.push(c),n}function l(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function o(f){for(var h=new Array(f.length),e=0;e<f.length;e++)"object"==_typeof(f[e])&&(h[e]=new RegExp("^(?:"+f[e].pattern+")$"));return function(e,t){for(var n="",r=e||{},o=(t||{}).pretty?l:encodeURIComponent,c=0;c<f.length;c++){var a=f[c];if("string"!=typeof a){var i,s=r[a.name];if(null==s){if(a.optional){a.partial&&(n+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be defined')}if(m(s)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but received `'+JSON.stringify(s)+"`");if(0===s.length){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var u=0;u<s.length;u++){if(i=o(s[u]),!h[c].test(i))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'", but received `'+JSON.stringify(i)+"`");n+=(0===u?a.prefix:a.delimiter)+i}}else{if(i=a.asterisk?encodeURI(s).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}):o(s),!h[c].test(i))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but received "'+i+'"');n+=a.prefix+i}}else n+=a}return n}}function g(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function d(e,t){return e.keys=t,e}function p(e){return e.sensitive?"":"i"}function c(e,t,n){m(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,o=!1!==n.end,c="",a=0;a<e.length;a++){var i,s,u=e[a];"string"==typeof u?c+=g(u):(i=g(u.prefix),s="(?:"+u.pattern+")",t.push(u),u.repeat&&(s+="(?:"+i+s+")*"),c+=s=u.optional?u.partial?i+"("+s+")?":"(?:"+i+"("+s+"))?":i+"("+s+")")}var f=g(n.delimiter||"/"),h=c.slice(-f.length)===f;return r||(c=(h?c.slice(0,-f.length):c)+"(?:"+f+"(?=$))?"),c+=o?"$":r&&h?"":"(?="+f+"|$)",d(new RegExp("^"+c,p(n)),t)}function a(e,t,n){return m(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return d(e,t)}(e,t):m(e)?function(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(a(e[o],t,n).source);return d(new RegExp("(?:"+r.join("|")+")",p(n)),t)}(e,t,n):(t=t,c(r(e,n=n),t,n))}var m=e("isarray");t.exports=a,t.exports.parse=r,t.exports.compile=function(e,t){return o(r(e,t))},t.exports.tokensToFunction=o,t.exports.tokensToRegExp=c;var b=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){var r,o,c,a;c=Cache.prototype.addAll,(a=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/))&&(r=a[1],o=parseInt(a[2])),c&&(!a||"Firefox"===r&&46<=o||"Chrome"===r&&50<=o)||(Cache.prototype.addAll=function(n){function r(e){this.name="NetworkError",this.code=19,this.message=e}var o=this;return r.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return n=n.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(n.map(function(e){"string"==typeof e&&(e=new Request(e));var t=new URL(e.url).protocol;if("http:"!==t&&"https:"!==t)throw new r("Invalid scheme");return fetch(e.clone())}))}).then(function(e){if(e.some(function(e){return!e.ok}))throw new r("Incorrect response status");return Promise.all(e.map(function(e,t){return o.put(n[t],e)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})},{}]},{},[13])(13)}),toolbox.router.get("/*",toolbox.cacheFirst,{origin:"trenzalore.net"});