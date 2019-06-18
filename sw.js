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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d85ad9797d9da51488e19492474d014f"
  },
  {
    "url": "favicon.ico",
    "revision": "bc658e81b95610f3f6e1b2970c5975e7"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "28a07d07f74817e6064a076539df5a2e"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "0ba7745e4247c6e446fafa195161c47c"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "c4499a201b90450345fa00cfc703f998"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "01ca6297a71e9d83326919b2649c0ef2"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "c885f8f1fb9bee702d5ee3d6375de5fe"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "eb637ec5c7f851481900aa39e16506e8"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "f35dc664ab7d1ce1167f02d24d0cc185"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "d956ec27b6a1bac6f5d6e4ec3b465615"
  },
  {
    "url": "index.html",
    "revision": "596e4db4139f617bc122ff466624f2c2"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "1cdfd3795c23477df5646602cde82328"
  },
  {
    "url": "projects/analisis2019.png",
    "revision": "702665e4d921d51df56939b0181ce995"
  },
  {
    "url": "projects/atrox.png",
    "revision": "8f031421c0619c5bfd51ba154e5e59a2"
  },
  {
    "url": "projects/csgo.jpg",
    "revision": "38d3063428962d2475b5a26bce93f2bb"
  },
  {
    "url": "projects/index.html",
    "revision": "0cbda3b9225ef6b707b98b57555e7744"
  },
  {
    "url": "projects/lasor.jpg",
    "revision": "78f9d448d596e69c6d73a765f53e8d08"
  },
  {
    "url": "projects/Layout.jpg",
    "revision": "1111f8dfaca84607ca18eefd1e29a7d7"
  },
  {
    "url": "projects/linebot.jpg",
    "revision": "c016e79a91a1bda152e52e51e795eaad"
  },
  {
    "url": "projects/logo.png",
    "revision": "eb637ec5c7f851481900aa39e16506e8"
  },
  {
    "url": "projects/master.css",
    "revision": "1edc1e3e6b389623dcffcf6a0669bfbb"
  },
  {
    "url": "projects/menu.png",
    "revision": "78fb0c3497c6b9a4fb467adafda663ff"
  },
  {
    "url": "script.js",
    "revision": "a655e3c0c4224b7adaca527f7946d8eb"
  },
  {
    "url": "style.css",
    "revision": "55f00047271dd754ccfed97a13313f5d"
  },
  {
    "url": "workbox-config.js",
    "revision": "2953d5a302700b2275846cd2cb6eab8c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
