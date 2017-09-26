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
    "url": "/_nuxt/app.4da53eda9e739d4cb860.js",
    "revision": "2692dbaf331ec798b0b2479e98b1e0f7"
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
    "url": "/_nuxt/manifest.2cfd56b76b47eb125ebe.js",
    "revision": "ed6021578a56d6528cc5882f251f38b2"
  },
  {
    "url": "/_nuxt/pages/contact.56b610badbb8b35b1266.js",
    "revision": "cbfa9e336efe72e114b1c79ec4533dc0"
  },
  {
    "url": "/_nuxt/pages/index.21d2b2cc06f62eead6c2.js",
    "revision": "16c1def4949a40f93f30a20f292dc8f3"
  },
  {
    "url": "/_nuxt/pages/profile.458bd56bfe09c272ca7e.js",
    "revision": "8b581450ef07bf4d8369386883d135c9"
  },
  {
    "url": "/_nuxt/pages/work.65ba997d835e7d19cad4.js",
    "revision": "1802707b429b0aa8d3b5dfec411e60bd"
  },
  {
    "url": "/_nuxt/pages/work/index.5c8d175171c2e904240c.js",
    "revision": "dab4fe1aa1a4df1afd06ee61c03027f1"
  },
  {
    "url": "/_nuxt/pages/work/projects.5532ccf1963653667c22.js",
    "revision": "dffce27f8dfd3d65f6ce6f3aa6b2c580"
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
    "url": "/_nuxt/pages/work/projects/ratings-slideout.d165945c04e836b7d4f4.js",
    "revision": "41858f5ad1b680c498565019ce5426c5"
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
