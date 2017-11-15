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
    "url": "/_nuxt/app.9cf15951778e1dc3b55a.js",
    "revision": "45f422ad3bb19a2db019d0c7fb8fc882"
  },
  {
    "url": "/_nuxt/common.b54fa0f594657359f141.js",
    "revision": "9a0a0b1388d34f46d2fe0b953e70d7a4"
  },
  {
    "url": "/_nuxt/layouts/blank.56285c73c316a7b9d861.js",
    "revision": "a4070579e9e652beb96e6452b3493d32"
  },
  {
    "url": "/_nuxt/layouts/default.144f7e9d0c361b7097b7.js",
    "revision": "1b7df394739b393aa9de516cac22154a"
  },
  {
    "url": "/_nuxt/manifest.6b49d3657cb4aa522ca8.js",
    "revision": "c4e687cf360ed8648ed5edaa6cdc7459"
  },
  {
    "url": "/_nuxt/pages/contact.7fda2de0fcf549c7fad8.js",
    "revision": "f2942b371770818d7a8eeb3f3a5aac39"
  },
  {
    "url": "/_nuxt/pages/index.54fca7c4e5faafcf25e7.js",
    "revision": "2d37c48a08a593c7f33d7b64699152a3"
  },
  {
    "url": "/_nuxt/pages/profile.7577141048e1242ec3ba.js",
    "revision": "aff06508659f4f15ea63dc4e02ab3b2f"
  },
  {
    "url": "/_nuxt/pages/test/buttons.2a23ea88c5d08849c417.js",
    "revision": "c6324776d163f45f5cf5538c04b9be82"
  },
  {
    "url": "/_nuxt/pages/test/colors.b167ba3f28a96ea28e69.js",
    "revision": "3ab4347e7325f4cbe276729eaa10bad4"
  },
  {
    "url": "/_nuxt/pages/test/vr.945bb3d6888b967d568d.js",
    "revision": "b688e152500b1c9adc2b1781c4f22e4b"
  },
  {
    "url": "/_nuxt/pages/work.33a8809f0158b82d2f99.js",
    "revision": "5f235a9ff72caebb1b9340d222bca20f"
  },
  {
    "url": "/_nuxt/pages/work/index.1ae51481866ecacd8f06.js",
    "revision": "5ff75bbe5748141d5c3e2285a36f6dab"
  },
  {
    "url": "/_nuxt/pages/work/projects.e921daece303dffe7ba6.js",
    "revision": "88ffd030eb9e9218ffca9392cf45aa56"
  },
  {
    "url": "/_nuxt/pages/work/projects/application-to-sc.4debba7fb93379f802ff.js",
    "revision": "c9019bfda7d3d10a9890df248fc5aacc"
  },
  {
    "url": "/_nuxt/pages/work/projects/corporate-website.662db8eac29df7db1c5b.js",
    "revision": "21c76118bf3a073b5a31bfe661859653"
  },
  {
    "url": "/_nuxt/pages/work/projects/data-dashboard.a6edbf7c64d4f8bd98d6.js",
    "revision": "38e12a98d73244626eeb68e5a77c243e"
  },
  {
    "url": "/_nuxt/pages/work/projects/hotel-item-element.7c35b5e276b9624f2125.js",
    "revision": "1a67df6162871ac22fbc960487320ba5"
  },
  {
    "url": "/_nuxt/pages/work/projects/index.66c0fb242a3c60d88269.js",
    "revision": "de6d2a06ec3691d8c9ebe03e8b7256d9"
  },
  {
    "url": "/_nuxt/pages/work/projects/marathon.eb657661c9111979f809.js",
    "revision": "c54219194961e1615fc543eb1893482f"
  },
  {
    "url": "/_nuxt/pages/work/projects/product-mockups.7b8e911317af824a85a2.js",
    "revision": "ac20ab4fe2c82251ccf21672d1493a80"
  },
  {
    "url": "/_nuxt/pages/work/projects/ratings-slideout.ea95e84f662889b8f47f.js",
    "revision": "a39a82171695df066c2fa5b69fe9ee67"
  },
  {
    "url": "/_nuxt/pages/work/projects/scss-colors.ce5b6342411b80dc5793.js",
    "revision": "b8b38f903fdaa9261279662faf955842"
  },
  {
    "url": "/_nuxt/pages/work/projects/template.8ff1b5caf320710a8fdb.js",
    "revision": "69625b2844e85a1b7b3e950bac213556"
  },
  {
    "url": "/_nuxt/pages/work/projects/trivago-misc.1ad1a791bfa89663bfad.js",
    "revision": "ea0618ed6203697ce12eebe52a359373"
  },
  {
    "url": "/_nuxt/pages/work/projects/vertical-rhythm.ad8fbb13611a92a19056.js",
    "revision": "48c8e89d51d0bd085e80f0f53040eb3c"
  },
  {
    "url": "/_nuxt/pages/work/projects/web-banners.2d67463517aead0de31d.js",
    "revision": "b3a2c7a8865d114e7841d42b0bc28095"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "tiny_1.0.0",
  "clientsClaim": true,
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/**', workboxSW.strategies.networkFirst({}), 'GET');
workboxSW.router.registerRoute('/_nuxt/**', workboxSW.strategies.cacheFirst({}), 'GET');
