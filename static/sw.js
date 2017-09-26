importScripts('workbox-sw.prod.v1.3.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/_nuxt/app.30671bf1f47b6f0db7a4.js",
    "revision": "104c89894a18f3c9124df6c937e745a9"
  },
  {
    "url": "/_nuxt/common.c3de9ec769dd63a5c405.js",
    "revision": "5d31cc882bd1d42dc11aba58ffe1e323"
  },
  {
    "url": "/_nuxt/layouts/blank.8ecffabcfb97613b85ee.js",
    "revision": "3b8aae5bb3e91dec8914ce6fcfd11c73"
  },
  {
    "url": "/_nuxt/layouts/default.4614e5a0c39eb9967d8c.js",
    "revision": "eb4cd6efb10f046174e697994b0db016"
  },
  {
    "url": "/_nuxt/manifest.3ea8749114b4972d1fed.js",
    "revision": "e4bd851b3911d6857ff44a749d9a8f77"
  },
  {
    "url": "/_nuxt/pages/contact.5bebc2210e5730d325ec.js",
    "revision": "65b0508cf01145cd0033b4b107cf3aa4"
  },
  {
    "url": "/_nuxt/pages/index.21d2b2cc06f62eead6c2.js",
    "revision": "16c1def4949a40f93f30a20f292dc8f3"
  },
  {
    "url": "/_nuxt/pages/profile.c3b2317e6ee2f2460003.js",
    "revision": "b251876322a674ec07a923e42b8450bc"
  },
  {
    "url": "/_nuxt/pages/work.65ba997d835e7d19cad4.js",
    "revision": "1802707b429b0aa8d3b5dfec411e60bd"
  },
  {
    "url": "/_nuxt/pages/work/index.7a650158018e589dfc9f.js",
    "revision": "fef19c31687c996b76b21b358754987c"
  },
  {
    "url": "/_nuxt/pages/work/projects.ff8a1cd2bcf4008d1e2b.js",
    "revision": "2c11105d81e220be2df180b39f36c827"
  },
  {
    "url": "/_nuxt/pages/work/projects/eight.7474e20ccad8159a88b0.js",
    "revision": "06f07d03284d911ebcf603abdb121f84"
  },
  {
    "url": "/_nuxt/pages/work/projects/index.641252ecf610cb08aeeb.js",
    "revision": "d5efcf8d01b5322fabd0f0a1662abcc2"
  },
  {
    "url": "/_nuxt/pages/work/projects/marathon.2fe2110f7732917a24b1.js",
    "revision": "0a49e1a90a109f69ec924b606875baa9"
  },
  {
    "url": "/_nuxt/pages/work/projects/ratings-slideout.539b67d8d010628ae989.js",
    "revision": "ee568d66a9a7764dfee5d9cc6ed5fa95"
  },
  {
    "url": "/_nuxt/pages/work/projects/scss-colors.2d957c45ad4373759c07.js",
    "revision": "0f986f06be9e087005e7529f1ccf31f4"
  },
  {
    "url": "/_nuxt/pages/work/projects/seven.09172dbda6151dae1ece.js",
    "revision": "130399bda15f3ba1d82527405d244ffc"
  },
  {
    "url": "/_nuxt/pages/work/projects/six.48602a7e042433999767.js",
    "revision": "c63043c38f497d52c72cec242947050d"
  },
  {
    "url": "/_nuxt/pages/work/projects/web-banners.16f06e0adbff4c650fc1.js",
    "revision": "ad03896da38f0949d2c129048a1a266f"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "portfolio_1.0.0",
  "clientsClaim": true,
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/**', workboxSW.strategies.networkFirst({}), 'GET');
workboxSW.router.registerRoute('/_nuxt/**', workboxSW.strategies.cacheFirst({}), 'GET');
