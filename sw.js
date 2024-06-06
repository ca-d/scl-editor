if(!self.define){let e,s={};const c=(c,i)=>(c=new URL(c+".js",i).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(i,d)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let r={};const n=e=>c(e,o),l={module:{uri:o},exports:r,require:n};s[o]=Promise.all(i.map((e=>l[e]||n(e)))).then((e=>(d(...e),r)))}}define(["./workbox-9f2c24b2"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"070c0e4f.js",revision:"3f353005c5cc445143f6eb9bfd009e87"},{url:"0ecce0aa.css",revision:"e597df30cf5be1ae021774fc565e5853"},{url:"index.html",revision:"e37949ab0eaa307454ba69c2f87c6548"},{url:"open-scd-core/doc/assets/highlight.css",revision:"22cf708b0a808968df47d1c165a86399"},{url:"open-scd-core/doc/assets/main.js",revision:"4fe2dfd0294d18ad31b44315a2dfa148"},{url:"open-scd-core/doc/assets/search.js",revision:"f674cb9dff96290a5e17dcf90301f9dd"},{url:"open-scd-core/doc/assets/style.css",revision:"ec1f946c4be565e89cd9031880fd8c44"},{url:"open-scd-core/doc/functions/cyrb64.html",revision:"148d0904ac591c626515df4b223d74f2"},{url:"open-scd-core/doc/functions/handleEdit.html",revision:"1e2fa205808bc6705f1c4aefb78a93c8"},{url:"open-scd-core/doc/functions/isComplex.html",revision:"a91bd397784aea0d71f5f0220be2fd0a"},{url:"open-scd-core/doc/functions/isInsert.html",revision:"c68bf81d63391f21a0805073d3bc3cb3"},{url:"open-scd-core/doc/functions/isNamespaced.html",revision:"fc7d3857059d2f9f9470410dff006e9c"},{url:"open-scd-core/doc/functions/isRemove.html",revision:"bf7366d8b55cbe649049b2d4d9c7ca87"},{url:"open-scd-core/doc/functions/isUpdate.html",revision:"90c0932970c5e65fa16305d29e7f213c"},{url:"open-scd-core/doc/functions/newEditEvent.html",revision:"a86f36fd923340ec0479fab8d0042750"},{url:"open-scd-core/doc/functions/newOpenEvent.html",revision:"29dfe5c88cb9946a188e3132f3db130c"},{url:"open-scd-core/doc/index.html",revision:"f0ea5d07e6004955389597ebc11d863f"},{url:"open-scd-core/doc/modules.html",revision:"3ff9dc49036b406b2d6403d40b920722"},{url:"open-scd-core/doc/types/AttributeValue.html",revision:"8cb43f75468e9b0076a832b449747c01"},{url:"open-scd-core/doc/types/Edit.html",revision:"6e9a8b0dc151d7fcbbd15e0203e5e14d"},{url:"open-scd-core/doc/types/EditEvent.html",revision:"4871c313043b0ae22b34e41baa870409"},{url:"open-scd-core/doc/types/Insert.html",revision:"b3382967803cafa8928c668ea5b802ac"},{url:"open-scd-core/doc/types/LitElementConstructor.html",revision:"91fb368073f74ffe83ea473db42da228"},{url:"open-scd-core/doc/types/NamespacedAttributeValue.html",revision:"b05028b3c2aa74d7acee7a51919bff51"},{url:"open-scd-core/doc/types/OpenDetail.html",revision:"c3668443f028b10b2c7d54d8b993150b"},{url:"open-scd-core/doc/types/OpenEvent.html",revision:"4cb05a55acb193a4ceb63d8f4001534a"},{url:"open-scd-core/doc/types/Remove.html",revision:"ecfc7023f8973c02f3e91df233cae593"},{url:"open-scd-core/doc/types/Update.html",revision:"e6041796e3e0328557479f83cc4ce0c7"},{url:"open-scd-core/foundation.js",revision:"6c03c6c96e514522ec174d0c155b1266"},{url:"open-scd-core/foundation/cyrb64.js",revision:"b3c3454430fd163996ce1bf405791659"},{url:"open-scd-core/foundation/edit-event.js",revision:"f26665d0771641fd607e134b2996b76d"},{url:"open-scd-core/foundation/open-event.js",revision:"8fc5c08429cb298a1e9721810eabb0d2"},{url:"open-scd-core/locales/de.js",revision:"2e89e9952c9b152aad8a8863febc2dd4"},{url:"open-scd-core/open-scd.js",revision:"25b1fb7cb021bf1db5410d15a117f8da"},{url:"plugins/oscd-communication/scl-communication.js",revision:"a5beee113f0cc606a9abad9174796d69"},{url:"plugins/oscd-designer/__snapshots__/oscd-designer.spec.snap.js",revision:"1d56ce4c9f87a89505e97f4736f51ed3"},{url:"plugins/oscd-designer/about.html",revision:"151c6bb02f96f55515cc3b5e737cb9de"},{url:"plugins/oscd-designer/assets/about-977b8a3b.html",revision:"151c6bb02f96f55515cc3b5e737cb9de"},{url:"plugins/oscd-designer/icons.js",revision:"543d725b186a20d6eeeb53b3f0730549"},{url:"plugins/oscd-designer/oscd-designer.js",revision:"899b83b18ecc705d9e2d91302cb4e6b6"},{url:"plugins/oscd-designer/oscd-designer.spec.js",revision:"64979aa0b2358bfab41b52f55566a5ac"},{url:"plugins/oscd-designer/sld-editor.js",revision:"9485bf4845752680409e212a60508903"},{url:"plugins/oscd-designer/sw.js",revision:"e8a2c065b496cf48e578cf43e0415f4c"},{url:"plugins/oscd-designer/util.js",revision:"d728c658543df94d189d009ae04db55c"},{url:"plugins/oscd-designer/workbox-088bfcc4.js",revision:"3363a5cb1a66340da9247a89ee6d9fc6"},{url:"plugins/oscd-open/oscd-open.js",revision:"b0fe18c4c1ecc3c0e6eaf61ee16ebe9e"},{url:"plugins/oscd-publisher/oscd-publisher.js",revision:"3ad90355c27eb74ff190fbc678b4d40f"},{url:"plugins/oscd-save/oscd-save.js",revision:"c8dccd475f2bc50bdb8ee4a044a659a1"},{url:"plugins/oscd-template-generator/generate-templates.js",revision:"4e58576004ef50e993797cb774139896"},{url:"plugins/oscd-template-generator/oscd-template-generator.js",revision:"f68b86459bbd26ef0b240fd1cbbb738b"},{url:"plugins/oscd-template-generator/oscd-template-generator.spec.js",revision:"846e3dd2257a634daf4e4fe4d7f996ad"},{url:"plugins/oscd-template-generator/sw.js",revision:"ff9890474d554686471391c09ac61b69"},{url:"plugins/oscd-template-generator/workbox-088bfcc4.js",revision:"3363a5cb1a66340da9247a89ee6d9fc6"},{url:"plugins/scl-editor-landing/scl-editor-landing.js",revision:"e994d9a8e7e65c256fba535078a90885"},{url:"plugins/scl-ied-browser/scl-ied-browser.js",revision:"198634fa7dcc464e564c3669e08c488d"},{url:"plugins/scl-ied-editor/scl-ied-editor.js",revision:"cffd9c972bd6c400aebafd22c01a3c0a"},{url:"plugins/scl-import-ied/scl-import-ied.js",revision:"8c7fda944e8ea5df6bbe82d845cfafb3"},{url:"plugins/scl-substation-editor/scl-substation-editor.js",revision:"d80cc3a4549f213d9b46730ce2eb1e96"},{url:"plugins/scl-template/scl-template.js",revision:"1f570409473fef5a1762592534291816"},{url:"plugins/scl-validating/scl-validating.js",revision:"6664a4a7839cb1fb931c5f029c5b087b"},{url:"plugins/scl-validating/xmlvalidate/worker.js",revision:"a77ab898eac9d3acc3841252aefe5f36"},{url:"plugins/scl-validating/xmlvalidate/xmlvalidate.js",revision:"13a15ca3eb50636fb4971e1ea7d664e8"},{url:"plugins/scl-wizarding/ace/ext-searchbox.js",revision:"c3ad58df7587107f71fc1d511624250d"},{url:"plugins/scl-wizarding/ace/mode-xml.js",revision:"9785371a49d2674f50bc4884eef35301"},{url:"plugins/scl-wizarding/ace/theme-solarized_dark.js",revision:"06f0522377bc0d70432b087bd37ffdf6"},{url:"plugins/scl-wizarding/ace/theme-solarized_light.js",revision:"e5f391ed15940217eea430074be6f6e5"},{url:"plugins/scl-wizarding/ace/worker-xml.js",revision:"1028c8cbfbf27b3242f66ea35531eaa4"},{url:"plugins/scl-wizarding/scl-wizarding.js",revision:"2b2b4f66c3a9651a06d3bef9a10eb33b"},{url:"plugins/subscriber-later-binding/index.deploy.html",revision:"8dda12ed7ed35b0f4dcb2e3fae1db1b5"},{url:"plugins/subscriber-later-binding/oscd-subscriber-later-binding.js",revision:"ceb77f67f026d25ef47685761a82c5f4"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html")))}));
//# sourceMappingURL=sw.js.map
