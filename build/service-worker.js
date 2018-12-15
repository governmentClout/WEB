/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

importScripts(
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  "/precache-manifest.028c31b974c682466451befd3ec29c15.js"
=======
  "/precache-manifest.f1b6c4e9acde86f6296ea4695c74ce9c.js"
>>>>>>> added build v4
=======
  "/precache-manifest.028c31b974c682466451befd3ec29c15.js"
>>>>>>> adde build v5
=======
  "/precache-manifest.3619ad9181c141cdaece7813ab2b33d1.js"
>>>>>>> built files
);

workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/index.html", {
  
  blacklist: [/^\/_/,/\/[^\/]+\.[^\/]+$/],
});
