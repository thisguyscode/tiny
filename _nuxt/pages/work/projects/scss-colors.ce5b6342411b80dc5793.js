webpackJsonp([7],{"/iyj":function(e,t,n){"use strict";t.a={props:{fullWidth:{type:Boolean,default:!1},relativeElementSelector:{type:String,required:!0},className:{type:String,required:!1},z:{type:Number,required:!1},offset:{type:Object,default:function(){return{top:80,bottom:0}}}},computed:{placeholder:function(){return this.$refs.jsPlaceholder},actual:function(){return this.$refs.jsActual},classObject:function(){return{"l-affix--full-width":this.fullWidth}}},methods:{setPlaceholderHeight:function(){this.$refs.jsPlaceholder.style.visibility="hidden",this.$refs.jsActual.style.visibility="visible"},removePlaceholderHeight:function(){this.$refs.jsPlaceholder.style.visibility="visible",this.$refs.jsActual.style.visibility="hidden"},affixTopHandler:function(){this.removePlaceholderHeight()},affixBottomHandler:function(){this.setPlaceholderHeight()},affixHandler:function(){this.setPlaceholderHeight()}},mounted:function(){this.removePlaceholderHeight()}}},"4+Zs":function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,".p-scss-colors__example-palette[data-v-dc2f076c]{margin-bottom:3rem}",""])},"6STP":function(e,t){e.exports=function(e){var t={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:"[A-Za-z0-9\\._:-]+",relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/},{begin:/'/,end:/'/},{begin:/[^\s"'=<>`]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist"],case_insensitive:!0,contains:[{className:"meta",begin:"<!DOCTYPE",end:">",relevance:10,contains:[{begin:"\\[",end:"\\]"}]},e.COMMENT("\x3c!--","--\x3e",{relevance:10}),{begin:"<\\!\\[CDATA\\[",end:"\\]\\]>",relevance:10},{begin:/<\?(php)?/,end:/\?>/,subLanguage:"php",contains:[{begin:"/\\*",end:"\\*/",skip:!0}]},{className:"tag",begin:"<style(?=\\s|>|$)",end:">",keywords:{name:"style"},contains:[t],starts:{end:"</style>",returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:"<script(?=\\s|>|$)",end:">",keywords:{name:"script"},contains:[t],starts:{end:"<\/script>",returnEnd:!0,subLanguage:["actionscript","javascript","handlebars","xml"]}},{className:"meta",variants:[{begin:/<\?xml/,end:/\?>/,relevance:10},{begin:/<\?\w+/,end:/\?>/}]},{className:"tag",begin:"</?",end:"/?>",contains:[{className:"name",begin:/[^\/><\s]+/,relevance:0},t]}]}}},"70Rd":function(e,t,n){!function(e){"object"==typeof window&&window||"object"==typeof self&&self;e(t)}(function(e){function t(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function n(e){return e.nodeName.toLowerCase()}function a(e,t){var n=e&&e.exec(t);return n&&0===n.index}function r(e){return $.test(e)}function o(e){var t,n,a,o,i=e.className+" ";if(i+=e.parentNode?e.parentNode.className:"",n=M.exec(i))return x(n[1])?n[1]:"no-highlight";for(i=i.split(/\s+/),t=0,a=i.length;t<a;t++)if(o=i[t],r(o)||x(o))return o}function i(e){var t,n={},a=Array.prototype.slice.call(arguments,1);for(t in e)n[t]=e[t];return a.forEach(function(e){for(t in e)n[t]=e[t]}),n}function s(e){var t=[];return function e(a,r){for(var o=a.firstChild;o;o=o.nextSibling)3===o.nodeType?r+=o.nodeValue.length:1===o.nodeType&&(t.push({event:"start",offset:r,node:o}),r=e(o,r),n(o).match(/br|hr|img|input/)||t.push({event:"stop",offset:r,node:o}));return r}(e,0),t}function l(e,a,r){function o(){return e.length&&a.length?e[0].offset!==a[0].offset?e[0].offset<a[0].offset?e:a:"start"===a[0].event?e:a:e.length?e:a}function i(e){function a(e){return" "+e.nodeName+'="'+t(e.value).replace('"',"&quot;")+'"'}d+="<"+n(e)+w.map.call(e.attributes,a).join("")+">"}function s(e){d+="</"+n(e)+">"}function l(e){("start"===e.event?i:s)(e.node)}for(var c=0,d="",u=[];e.length||a.length;){var g=o();if(d+=t(r.substring(c,g[0].offset)),c=g[0].offset,g===e){u.reverse().forEach(s);do{l(g.splice(0,1)[0]),g=o()}while(g===e&&g.length&&g[0].offset===c);u.reverse().forEach(i)}else"start"===g[0].event?u.push(g[0].node):u.pop(),l(g.splice(0,1)[0])}return d+t(r.substr(c))}function c(e){return e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map(function(t){return i(e,{variants:null},t)})),e.cached_variants||e.endsWithParent&&[i(e)]||[e]}function d(e){function t(e){return e&&e.source||e}function n(n,a){return new RegExp(t(n),"m"+(e.case_insensitive?"i":"")+(a?"g":""))}function a(r,o){if(!r.compiled){if(r.compiled=!0,r.keywords=r.keywords||r.beginKeywords,r.keywords){var i={},s=function(t,n){e.case_insensitive&&(n=n.toLowerCase()),n.split(" ").forEach(function(e){var n=e.split("|");i[n[0]]=[t,n[1]?Number(n[1]):1]})};"string"==typeof r.keywords?s("keyword",r.keywords):y(r.keywords).forEach(function(e){s(e,r.keywords[e])}),r.keywords=i}r.lexemesRe=n(r.lexemes||/\w+/,!0),o&&(r.beginKeywords&&(r.begin="\\b("+r.beginKeywords.split(" ").join("|")+")\\b"),r.begin||(r.begin=/\B|\b/),r.beginRe=n(r.begin),r.end||r.endsWithParent||(r.end=/\B|\b/),r.end&&(r.endRe=n(r.end)),r.terminator_end=t(r.end)||"",r.endsWithParent&&o.terminator_end&&(r.terminator_end+=(r.end?"|":"")+o.terminator_end)),r.illegal&&(r.illegalRe=n(r.illegal)),null==r.relevance&&(r.relevance=1),r.contains||(r.contains=[]),r.contains=Array.prototype.concat.apply([],r.contains.map(function(e){return c("self"===e?r:e)})),r.contains.forEach(function(e){a(e,r)}),r.starts&&a(r.starts,o);var l=r.contains.map(function(e){return e.beginKeywords?"\\.?("+e.begin+")\\.?":e.begin}).concat([r.terminator_end,r.illegal]).map(t).filter(Boolean);r.terminators=l.length?n(l.join("|"),!0):{exec:function(){return null}}}}a(e)}function u(e,n,r,o){function i(e,t){var n,r;for(n=0,r=t.contains.length;n<r;n++)if(a(t.contains[n].beginRe,e))return t.contains[n]}function s(e,t){if(a(e.endRe,t)){for(;e.endsParent&&e.parent;)e=e.parent;return e}if(e.endsWithParent)return s(e.parent,t)}function l(e,t){return!r&&a(t.illegalRe,e)}function c(e,t){var n=v.case_insensitive?t[0].toLowerCase():t[0];return e.keywords.hasOwnProperty(n)&&e.keywords[n]}function f(e,t,n,a){var r=a?"":j.classPrefix,o='<span class="'+r,i=n?"":k;return(o+=e+'">')+t+i}function p(){var e,n,a,r;if(!w.keywords)return t($);for(r="",n=0,w.lexemesRe.lastIndex=0,a=w.lexemesRe.exec($);a;)r+=t($.substring(n,a.index)),e=c(w,a),e?(M+=e[1],r+=f(e[0],t(a[0]))):r+=t(a[0]),n=w.lexemesRe.lastIndex,a=w.lexemesRe.exec($);return r+t($.substr(n))}function h(){var e="string"==typeof w.subLanguage;if(e&&!N[w.subLanguage])return t($);var n=e?u(w.subLanguage,$,!0,y[w.subLanguage]):g($,w.subLanguage.length?w.subLanguage:void 0);return w.relevance>0&&(M+=n.relevance),e&&(y[w.subLanguage]=n.top),f(n.language,n.value,!1,!0)}function m(){C+=null!=w.subLanguage?h():p(),$=""}function b(e){C+=e.className?f(e.className,"",!0):"",w=Object.create(e,{parent:{value:w}})}function _(e,t){if($+=e,null==t)return m(),0;var n=i(t,w);if(n)return n.skip?$+=t:(n.excludeBegin&&($+=t),m(),n.returnBegin||n.excludeBegin||($=t)),b(n,t),n.returnBegin?0:t.length;var a=s(w,t);if(a){var r=w;r.skip?$+=t:(r.returnEnd||r.excludeEnd||($+=t),m(),r.excludeEnd&&($=t));do{w.className&&(C+=k),w.skip||(M+=w.relevance),w=w.parent}while(w!==a.parent);return a.starts&&b(a.starts,""),r.returnEnd?0:t.length}if(l(t,w))throw new Error('Illegal lexeme "'+t+'" for mode "'+(w.className||"<unnamed>")+'"');return $+=t,t.length||1}var v=x(e);if(!v)throw new Error('Unknown language: "'+e+'"');d(v);var E,w=o||v,y={},C="";for(E=w;E!==v;E=E.parent)E.className&&(C=f(E.className,"",!0)+C);var $="",M=0;try{for(var O,S,R=0;;){if(w.terminators.lastIndex=R,!(O=w.terminators.exec(n)))break;S=_(n.substring(R,O.index),O[0]),R=O.index+S}for(_(n.substr(R)),E=w;E.parent;E=E.parent)E.className&&(C+=k);return{relevance:M,value:C,language:e,top:w}}catch(e){if(e.message&&-1!==e.message.indexOf("Illegal"))return{relevance:0,value:t(n)};throw e}}function g(e,n){n=n||j.languages||y(N);var a={relevance:0,value:t(e)},r=a;return n.filter(x).forEach(function(t){var n=u(t,e,!1);n.language=t,n.relevance>r.relevance&&(r=n),n.relevance>a.relevance&&(r=a,a=n)}),r.language&&(a.second_best=r),a}function f(e){return j.tabReplace||j.useBR?e.replace(O,function(e,t){return j.useBR&&"\n"===e?"<br>":j.tabReplace?t.replace(/\t/g,j.tabReplace):""}):e}function p(e,t,n){var a=t?C[t]:n,r=[e.trim()];return e.match(/\bhljs\b/)||r.push("hljs"),-1===e.indexOf(a)&&r.push(a),r.join(" ").trim()}function h(e){var t,n,a,i,c,d=o(e);r(d)||(j.useBR?(t=document.createElementNS("http://www.w3.org/1999/xhtml","div"),t.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):t=e,c=t.textContent,a=d?u(d,c,!0):g(c),n=s(t),n.length&&(i=document.createElementNS("http://www.w3.org/1999/xhtml","div"),i.innerHTML=a.value,a.value=l(n,s(i),c)),a.value=f(a.value),e.innerHTML=a.value,e.className=p(e.className,d,a.language),e.result={language:a.language,re:a.relevance},a.second_best&&(e.second_best={language:a.second_best.language,re:a.second_best.relevance}))}function m(e){j=i(j,e)}function b(){if(!b.called){b.called=!0;var e=document.querySelectorAll("pre code");w.forEach.call(e,h)}}function _(){addEventListener("DOMContentLoaded",b,!1),addEventListener("load",b,!1)}function v(t,n){var a=N[t]=n(e);a.aliases&&a.aliases.forEach(function(e){C[e]=t})}function E(){return y(N)}function x(e){return e=(e||"").toLowerCase(),N[e]||N[C[e]]}var w=[],y=Object.keys,N={},C={},$=/^(no-?highlight|plain|text)$/i,M=/\blang(?:uage)?-([\w-]+)\b/i,O=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,k="</span>",j={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};return e.highlight=u,e.highlightAuto=g,e.fixMarkup=f,e.highlightBlock=h,e.configure=m,e.initHighlighting=b,e.initHighlightingOnLoad=_,e.registerLanguage=v,e.listLanguages=E,e.getLanguage=x,e.inherit=i,e.IDENT_RE="[a-zA-Z]\\w*",e.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",e.NUMBER_RE="\\b\\d+(\\.\\d+)?",e.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BINARY_NUMBER_RE="\\b(0b[01]+)",e.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0},e.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},e.COMMENT=function(t,n,a){var r=e.inherit({className:"comment",begin:t,end:n,contains:[]},a||{});return r.contains.push(e.PHRASAL_WORDS_MODE),r.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0}),r},e.C_LINE_COMMENT_MODE=e.COMMENT("//","$"),e.C_BLOCK_COMMENT_MODE=e.COMMENT("/\\*","\\*/"),e.HASH_COMMENT_MODE=e.COMMENT("#","$"),e.NUMBER_MODE={className:"number",begin:e.NUMBER_RE,relevance:0},e.C_NUMBER_MODE={className:"number",begin:e.C_NUMBER_RE,relevance:0},e.BINARY_NUMBER_MODE={className:"number",begin:e.BINARY_NUMBER_RE,relevance:0},e.CSS_NUMBER_MODE={className:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},e.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[e.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[e.BACKSLASH_ESCAPE]}]},e.TITLE_MODE={className:"title",begin:e.IDENT_RE,relevance:0},e.UNDERSCORE_TITLE_MODE={className:"title",begin:e.UNDERSCORE_IDENT_RE,relevance:0},e.METHOD_GUARD={begin:"\\.\\s*"+e.UNDERSCORE_IDENT_RE,relevance:0},e})},Dt9y:function(e,t,n){var a=n("qiy3");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("8c573a78",a,!0)},F1Ta:function(e,t,n){"use strict";function a(e){n("VEjj")}var r=n("/iyj"),o=n("mjLw"),i=n("VU/8"),s=a,l=i(r.a,o.a,!1,s,"data-v-63ecf022",null);t.a=l.exports},GdJY:function(e,t){e.exports=function(e){var t={literal:"true false null"},n=[e.QUOTE_STRING_MODE,e.C_NUMBER_MODE],a={end:",",endsWithParent:!0,excludeEnd:!0,contains:n,keywords:t},r={begin:"{",end:"}",contains:[{className:"attr",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE],illegal:"\\n"},e.inherit(a,{begin:/:/})],illegal:"\\S"},o={begin:"\\[",end:"\\]",contains:[e.inherit(a)],illegal:"\\S"};return n.splice(n.length,0,r,o),{contains:n,keywords:t,illegal:"\\S"}}},Hw5h:function(e,t,n){"use strict";function a(e){n("mgiz")}Object.defineProperty(t,"__esModule",{value:!0});var r=n("eAQr"),o=n("juDc"),i=n("VU/8"),s=a,l=i(r.a,o.a,!1,s,"data-v-dc2f076c",null);t.default=l.exports},IZDm:function(e,t){e.exports=function(e){var t="[A-Za-z$_][0-9A-Za-z$_]*",n={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},a={className:"number",variants:[{begin:"\\b(0[bB][01]+)"},{begin:"\\b(0[oO][0-7]+)"},{begin:e.C_NUMBER_RE}],relevance:0},r={className:"subst",begin:"\\$\\{",end:"\\}",keywords:n,contains:[]},o={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,r]};r.contains=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,o,a,e.REGEXP_MODE];var i=r.contains.concat([e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]);return{aliases:["js","jsx"],keywords:n,contains:[{className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},{className:"meta",begin:/^#!/,end:/$/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,o,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,a,{begin:/[{,]\s*/,relevance:0,contains:[{begin:t+"\\s*:",returnBegin:!0,relevance:0,contains:[{className:"attr",begin:t,relevance:0}]}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{className:"function",begin:"(\\(.*?\\)|"+t+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:t},{begin:/\(\s*\)/},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:n,contains:i}]}]},{begin:/</,end:/(\/\w+|\w+\/)>/,subLanguage:"xml",contains:[{begin:/<\w+\s*\/>/,skip:!0},{begin:/<\w+/,end:/(\/\w+|\w+\/)>/,skip:!0,contains:[{begin:/<\w+\s*\/>/,skip:!0},"self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/\{/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:t}),{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,contains:i}],illegal:/\[|%/},{begin:/\$[(.]/},e.METHOD_GUARD,{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"\[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"constructor",end:/\{/,excludeEnd:!0}],illegal:/#(?!!)/}}},MxUP:function(e,t){e.exports='/* Da color MACHINE\n======================================================================== */\n/**\n* 1. Import the contrasting-color function for perceptual brightness\n* 2. Mixin accepts a single color and a theme name\n* 3. Reset the color lightness to ensure we can create a palette with the\n     full range of brightnesses. I.E. Attempt to standaradize the treatment\n     of colors.\n* 4. Currently not used - can use complimentary color in the palette\n* 5. Define how the color is adjusted for each palette color\n* 6. Create a class named after $name variable and wrap all the color\n     classes inside it.\n* 7. Create a class for each of the palette colors\n* 8. Set the text color to contrasting color\n* 9. Set the background to the color\n* 10. Print the hex-code on top\n*/\n\n@import \'./brightness\'; /*[1]*/\n\n@mixin theme($name, $color) { /*[2]*/\n  $base: adjust-color($color, $lightness: -100%); /*[3]*/\n  $comp: complement(change-color($base, $lightness: 80%, $saturation: 100%)); /*[4]*/\n  $s_05: adjust-color($base, $hue: 32deg, $saturation: -40%, $lightness: 95%); /*[4]*/ \n  $s_10: adjust-color($base, $hue: 24deg, $saturation: -30%, $lightness: 90%); /*[4]*/ \n  $s_20: adjust-color($base, $hue: 16deg, $saturation: -20%, $lightness: 80%); /*[4]*/ \n  $s_30: adjust-color($base, $hue: 8deg, $saturation: -10%, $lightness: 70%); /*[4]*/ \n  $s_40: adjust-color($base, $hue: 0deg, $saturation: -5%, $lightness: 60%); /*[4]*/ \n  $s_50: adjust-color($base, $hue: 0deg, $saturation: 18%, $lightness: 50%); /*[4]*/ \n  $s_60: adjust-color($base, $hue: -8deg, $saturation: 5%, $lightness: 40%); /*[4]*/ \n  $s_70: adjust-color($base, $hue: -16deg, $saturation: 10%, $lightness: 30%); /*[4]*/ \n  $s_80: adjust-color($base, $hue: -24deg, $saturation: 20%, $lightness: 20%); /*[4]*/ \n  $s_90: adjust-color($base, $hue: -32deg, $saturation: 30%, $lightness: 10%); /*[4]*/ \n  $s_95: adjust-color($base, $hue: -40deg, $saturation: 40%, $lightness: 05%); /*[4]*/ \n  .#{$name} { /*[6]*/\n    ._05 { /*[7]*/\n      color: contrasting-color($s_05, $s_05, $s_90); /*[8]*/\n      background: $s_05; /*[9]*/\n      &:after {\n        content: $s_05 + ""; /*[10]*/\n      }\n    }\n    ._10 {\n      color: contrasting-color($s_10, $s_05, $s_90);\n      background: $s_10;\n      &:after {\n        content: $s_10 + "";\n      }\n    }\n    ... // Repeat through ._20 - ._95\n  }\n}'},THnY:function(e,t,n){"use strict";function a(e){n("Dt9y")}var r=n("VH1Q"),o=n("zHUE"),i=n("VU/8"),s=a,l=i(r.a,o.a,!1,s,null,null);t.a=l.exports},VEjj:function(e,t,n){var a=n("lEWA");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("18bf5845",a,!0)},VH1Q:function(e,t,n){"use strict";var a=n("sxGK"),r=n.n(a),o=n("F1Ta");t.a={components:{lAffix:o.a},data:function(){return{content:"loading code",lineCount:0}},props:{languages:{type:Array,default:function(){return["html","scss","css","javascript","json"]}},code:{required:!1},filename:{type:String,required:!1}},computed:{preComputedCode:function(){return r.a.highlightAuto(this.code,this.languages).value}},methods:{getLineCount:function(e){return e.split(/\r\n|\r|\n/).length},removeExtraIndent:function(e){var t=e.split("\n");""===t[0]&&t.shift();var n,a=null!==(n=/^[\s\t]+/.exec(t[0]))?n[0]:null;return a&&(t=t.map(function(e){return e=e.replace(a,""),e.replace(/\t/g,"    ")}),e=t.join("\n").trim()),e},setContentFromSlot:function(){var e,t=this;this.$slots.default.forEach(function(n){if("pre"===n.tag){var a=n.elm.innerHTML;e=t.removeExtraIndent(a)}else e=t.$refs.slotWrapper.innerHTML});var n=e.toString();return r.a.highlightAuto(n,this.languages).value}},mounted:function(){this.code?this.content=this.preComputedCode:this.$slots.default.length>0&&(this.content=this.setContentFromSlot()),this.lineCount=this.getLineCount(this.content)}}},"bV+X":function(e,t){e.exports=function(e){var t={className:"variable",begin:"(\\$[a-zA-Z-][a-zA-Z0-9_-]*)\\b"},n={className:"number",begin:"#[0-9A-Fa-f]+"};e.CSS_NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,e.C_BLOCK_COMMENT_MODE;return{case_insensitive:!0,illegal:"[=/|']",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"selector-id",begin:"\\#[A-Za-z0-9_-]+",relevance:0},{className:"selector-class",begin:"\\.[A-Za-z0-9_-]+",relevance:0},{className:"selector-attr",begin:"\\[",end:"\\]",illegal:"$"},{className:"selector-tag",begin:"\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b",relevance:0},{begin:":(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)"},{begin:"::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)"},t,{className:"attribute",begin:"\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b",illegal:"[^\\s]"},{begin:"\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"},{begin:":",end:";",contains:[t,n,e.CSS_NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{className:"meta",begin:"!important"}]},{begin:"@",end:"[{;]",keywords:"mixin include extend for if else each while charset import debug media page content font-face namespace warn",contains:[t,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,n,e.CSS_NUMBER_MODE,{begin:"\\s[A-Za-z0-9_.-]+",relevance:0}]}]}}},eAQr:function(e,t,n){"use strict";var a=n("THnY");t.a={components:{cCode:a.a},computed:{mixinCode:function(){return n("MxUP")},outputCode:function(){return n("yIbT")}}}},izbv:function(e,t){e.exports=function(e){var t={begin:/[A-Z\_\.\-]+\s*:/,returnBegin:!0,end:";",endsWithParent:!0,contains:[{className:"attribute",begin:/\S/,end:":",excludeEnd:!0,starts:{endsWithParent:!0,excludeEnd:!0,contains:[{begin:/[\w-]+\(/,returnBegin:!0,contains:[{className:"built_in",begin:/[\w-]+/},{begin:/\(/,end:/\)/,contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]}]},e.CSS_NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,e.C_BLOCK_COMMENT_MODE,{className:"number",begin:"#[0-9A-Fa-f]+"},{className:"meta",begin:"!important"}]}}]};return{case_insensitive:!0,illegal:/[=\/|'\$]/,contains:[e.C_BLOCK_COMMENT_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/},{className:"selector-class",begin:/\.[A-Za-z0-9_-]+/},{className:"selector-attr",begin:/\[/,end:/\]/,illegal:"$"},{className:"selector-pseudo",begin:/:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},{begin:"@(font-face|page)",lexemes:"[a-z-]+",keywords:"font-face page"},{begin:"@",end:"[{;]",illegal:/:/,contains:[{className:"keyword",begin:/\w+/},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"[a-zA-Z-][a-zA-Z0-9_-]*",relevance:0},{begin:"{",end:"}",illegal:/\S/,contains:[e.C_BLOCK_COMMENT_MODE,t]}]}}},juDc:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("div",{staticClass:"o-text-section"},[n("c-baselines"),n("l-wrapper",{attrs:{size:"sm"}},[n("h3",{staticClass:"o-heading o-heading--gamma"},[e._v("Just Show Me!")]),n("p",{staticClass:"o-text o-text--paragraph"},[e._v("Yeah if you're not interested in reading any of this there's a simple live demo "),n("c-link",{attrs:{externalLink:"https://thisguyscode.github.io/scss-color-palettes/",inline:!0}},[e._v("here")])],1)])],1),n("div",{staticClass:"o-text-section"},[n("c-baselines"),n("l-wrapper",{attrs:{size:"sm"}},[n("h3",{staticClass:"o-heading o-heading--gamma"},[e._v("What's the issue?")]),n("p",{staticClass:"o-text o-text--paragraph"},[e._v("There are lots of reason to want to automate color palette generation. At the time of making this there were a few main ones:")]),n("ol",{staticClass:"o-text o-text--paragraph"},[n("li",[e._v("Customise apps and web-pages to client brand colors.")]),n("li",[e._v("Quickly add pretty colors to simple data vizzzess (like bar graphs n tings).")]),n("li",[e._v("Create a unique color palette for each of SocialCops' four main products.")]),n("li",[e._v("For the fun of it.")])]),n("p",{staticClass:"o-text o-text--paragraph"},[e._v("There are countless tools out there already for generating color palettes. One of my favourites for pretty (and small) palettes is "),n("c-link",{attrs:{externalLink:"https://coolors.co",inline:!0}},[e._v("Coolors")]),e._v(" and for the purposes of data visualisaton there may be no better than "),n("c-link",{attrs:{inline:!0,externalLink:"http://vrl.cs.brown.edu/color"}},[e._v("Colorgorical")]),e._v(" from Brown University. But the goals of this project were somewhere between the two. Furthermore it needed to be easy to integrate into existing and future web projects - not a manual effort every time colors changed.")],1),n("h3",{staticClass:"o-heading o-heading--gamma"},[e._v("So I Made This SCSS Mixin")]),n("p",{staticClass:"o-text o-text--paragraph"},[e._v("It accepts a single color and a name and when imported to the stylesheet outputs a bunch of classes nested in the palette's name - e.g. "),n("code",{staticClass:"o-code o-code--inline u-vr-reset"},[e._v(".palette.coralred ._05 { /*...*/} .palette.coralred ._10 { /*...*/} .palette.coralred ._15 { /*...*/}")]),e._v(" with each number representing a color in a scale.")])]),n("l-wrapper",[n("c-code",{attrs:{code:e.mixinCode,filename:"_mixin.scss",languages:["scss"]}})],1),n("l-wrapper",{attrs:{size:"sm"}},[n("p",{staticClass:"o-heading o-heading--gamma"},[n("code",{staticClass:"o-code o-code--inline u-vr-reset"},[e._v("contrasting-color()")]),e._v(" Isn't a SCSS Function!")]),n("p",{staticClass:"o-text o-text--paragraph"},[e._v("Yeah, that's just a little something to calculate the perceptual brightness of the color. I took it from someone brighter (shit pun intended) than myself. We're using it here for the text color so that hopefully we can read it regardless of the color that gets generated. Here it is in full:")])]),n("l-wrapper",[n("c-code",{attrs:{filename:"_brightness.scss",languages:["scss"]}},[n("pre",[e._v("          // Brightness math based on:\n          // http://www.nbdtech.com/Blog/archive/2008/04/27/Calculating-the-Perceived-Brightness-of-a-Color.aspx\n\n          $red-magic-number: 241;\n          $green-magic-number: 691;\n          $blue-magic-number: 68;\n          $brightness-divisor: $red-magic-number + $green-magic-number + $blue-magic-number;\n\n          @function brightness($color) {\n            // Extract color components\n            $red-component: red($color);\n            $green-component: green($color);\n            $blue-component: blue($color);\n\n            // Calculate a brightness value in 3d color space between 0 and 255\n            $number: sqrt((($red-component * $red-component * $red-magic-number) + ($green-component * $green-component * $green-magic-number) + ($blue-component * $blue-component * $blue-magic-number)) / $brightness-divisor);\n\n            // Convert to percentage and return\n            @return 100% * $number / 255;\n          }\n\n          @function contrasting-color($color, $light, $dark) {\n            @if brightness($color) < 65% {\n              @return $light;\n            } @else {\n              @return $dark;\n            }\n          }\n\n          @function sqrt ($r) {\n              $x0: 1;\n              $x1: $x0;\n\n              @for $i from 1 through 10 {\n                  $x1: $x0 - ($x0 * $x0 - abs($r)) / (2 * $x0);\n                  $x0: $x1;\n              }\n\n              @return $x1;\n          }\n        ")])])],1),n("l-wrapper",{attrs:{size:"sm"}},[n("h3",{staticClass:"o-heading o-heading--gamma"},[e._v("Back to the Palette")]),n("p",{staticClass:"o-text"},[e._v("So now we just need to import the mixin, define a color and @include it to generate us some sweet sweet classes.")])]),n("l-wrapper",[n("c-code",{attrs:{filename:"main.scss",languages:["scss"]}},[n("pre",[e._v("          @import './mixin'\n          $saffron: rgba(225,153,51,1);\n          @include theme('palette.saffron', $saffron);\n        ")])])],1),n("l-wrapper",{attrs:{size:"sm"}},[n("p",{staticClass:"o-text"},[e._v("Which outputs the following CSS...")])]),n("l-wrapper",[n("c-code",{attrs:{code:e.outputCode,filename:"styles.css",languages:["css"]}})],1)],1),n("div",{staticClass:"o-text-section"},[n("c-baselines"),n("l-wrapper",{attrs:{size:"sm"}},[n("p",{staticClass:"o-text o-text--paragraph"},[e._v("The savvy reader will realise that these classes are largely useless in an actual web project. In their current format they are only really intended for generating the "),n("c-link",{attrs:{externalLink:"https://thisguyscode.github.io/scss-color-palettes/",inline:!0}},[e._v("color palette demo")]),e._v(", but it doesn't take much to apply this to an actual style system... it just depends on the particulars")],1)])],1)])},r=[],o={render:a,staticRenderFns:r};t.a=o},lEWA:function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,".l-affix[data-v-63ecf022]{position:relative}.l-affix--full-width[data-v-63ecf022]{width:100%}.l-affix__actual[data-v-63ecf022]{height:0;overflow:visible;position:relative}.l-affix__placeholder[data-v-63ecf022]{position:relative;display:block}",""])},mgiz:function(e,t,n){var a=n("4+Zs");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("67458a3b",a,!0)},mjLw:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"l-affix"},[n("div",{ref:"jsActual",staticClass:"l-affix__actual"},[n("f-no-ssr",[n("affix",{class:[e.className,e.classObject],style:"z-index:"+e.z,attrs:{offset:e.offset,"relative-element-selector":e.relativeElementSelector},on:{affixtop:e.affixTopHandler,affixbottom:e.affixBottomHandler,affix:e.affixHandler}},[e._t("contents")],2)],1)],1),n("div",{ref:"jsPlaceholder",staticClass:"l-affix__placeholder"},[e._t("contents")],2)])},r=[],o={render:a,staticRenderFns:r};t.a=o},qiy3:function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,".c-code{text-align:left;margin-bottom:2rem;color:#fcfcfc}@media (max-width:46.24em){.c-code{margin-left:-1.5rem;margin-right:-1.5rem}}.c-code__baselines{opacity:.5}.c-code__slot-wrapper{display:none}.c-code__header-reference{padding-left:3rem;padding-right:1rem;position:relative}.c-code__header{width:100%;position:relative;color:#15110e}.c-code__affix.affix{padding-top:.5rem;background-color:#fcfcfc}.c-code__reference-wrapper{overflow-y:scroll;padding-bottom:1rem;position:relative}.c-code_code-area{background-color:#211c1a;position:relative;padding-left:3rem}.c-code__code-block{padding-top:1rem;color:#fcfcfc;overflow-x:scroll;position:relative}.c-code__gutter,.c-code__header-gutter{width:3rem;text-align:right;position:absolute;padding-right:1rem;top:0;left:0}.c-code__gutter{padding-top:1rem}.c-code__number{color:#b7b6b5}.c-code__icon{height:1em;width:auto}.hljs-keyword,.hljs-link,.hljs-literal,.hljs-name,.hljs-symbol{color:#569cd6}.hljs-link{text-decoration:underline}.hljs-built_in,.hljs-type{color:#4ec9b0}.hljs-class,.hljs-number{color:#b8d7a3}.hljs-meta-string,.hljs-string{color:#d69d85}.hljs-regexp,.hljs-template-tag{color:#9a5334}.hljs-formula,.hljs-function,.hljs-params,.hljs-subst,.hljs-title{color:#dcdcdc}.hljs-comment,.hljs-quote{color:#57a64a}.hljs-doctag{color:#608b4e}.hljs-meta,.hljs-meta-keyword,.hljs-tag{color:#9b9b9b}.hljs-template-variable,.hljs-variable{color:#bd63c5}.hljs-attr,.hljs-attribute,.hljs-builtin-name{color:#9cdcfe}.hljs-section{color:gold}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}.hljs-bullet,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-selector-pseudo,.hljs-selector-tag{color:#d7ba7d}.hljs-addition{background-color:#144212}.hljs-addition,.hljs-deletion{display:inline-block;width:100%}.hljs-deletion{background-color:#600}",""])},sxGK:function(e,t,n){var a=n("70Rd");a.registerLanguage("xml",n("6STP")),a.registerLanguage("css",n("izbv")),a.registerLanguage("javascript",n("IZDm")),a.registerLanguage("json",n("GdJY")),a.registerLanguage("scss",n("bV+X")),e.exports=a},yIbT:function(e,t){e.exports='.palette.saffron ._05 {\n  color: #330300;\n  background: #f6f7ee;\n}\n\n.palette.saffron ._05:after {\n  content: "#f6f7ee";\n}\n\n.palette.saffron ._10 {\n  color: #330300;\n  background: #f1f0da;\n}\n\n.palette.saffron ._10:after {\n  content: "#f1f0da";\n}\n\n.palette.saffron ._20 {\n  color: #330300;\n  background: #e8e0b0;\n}\n\n.palette.saffron ._20:after {\n  content: "#e8e0b0";\n}\n\n.palette.saffron ._30 {\n  color: #330300;\n  background: #e4c881;\n}\n\n.palette.saffron ._30:after {\n  content: "#e4c881";\n}\n\n.palette.saffron ._base {\n  height: 20%;\n  min-height: 60px;\n  color: #330300;\n  background: #e0a552;\n}\n\n.palette.saffron ._base:after {\n  content: "#e0a552";\n}\n\n.palette.saffron ._highlight {\n  min-height: 2%;\n  min-height: 18px;\n  color: #330300;\n  background: #f5940a;\n}\n\n.palette.saffron ._highlight:after {\n  content: "#f5940a";\n}\n\n.palette.saffron ._60 {\n  color: #f6f7ee;\n  background: #b75e15;\n}\n\n.palette.saffron ._60:after {\n  content: "#b75e15";\n}\n\n.palette.saffron ._70 {\n  color: #f6f7ee;\n  background: #8d350c;\n}\n\n.palette.saffron ._70:after {\n  content: "#8d350c";\n}\n\n.palette.saffron ._80 {\n  color: #f6f7ee;\n  background: #631503;\n}\n\n.palette.saffron ._80:after {\n  content: "#631503";\n}\n\n.palette.saffron ._90 {\n  color: #f6f7ee;\n  background: #330300;\n}\n\n.palette.saffron ._90:after {\n  content: "#330300";\n}\n\n.palette.saffron ._95 {\n  color: #f6f7ee;\n  background: #1a0002;\n}\n\n.palette.saffron ._95:after {\n  content: "#1a0002";\n}'},zHUE:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"c-code"},[n("div",{ref:"codeReference",staticClass:"c-code__reference-wrapper",attrs:{id:"code-reference-"+e._uid}},[n("l-affix",{attrs:{className:"c-code__affix",relativeElementSelector:"#code-reference-"+e._uid,z:200,offset:{top:144,bottom:0}},scopedSlots:e._u([{key:"contents",fn:function(t){return[e.filename?n("div",{staticClass:"c-code__header"},[n("div",{staticClass:"c-code__header-reference"},[n("span",{staticClass:"c-code__header-gutter  o-code"},[n("c-icon",{staticClass:"c-code__icon",attrs:{name:"file"}})],1),n("span",{staticClass:"c-code_filename o-code o-code--sm"},[e._v(e._s(e.filename))])])]):e._e()]}}])}),n("div",{staticClass:"c-code_code-area"},[n("c-baselines",{staticClass:"c-code__baselines",attrs:{inverse:!0}}),n("div",{staticClass:"c-code__gutter"},e._l(e.lineCount,function(t){return n("div",{key:t,staticClass:"c-code__number o-code"},[e._v(e._s(t))])})),n("div",{staticClass:"c-code__code-block"},[n("pre",[n("code",{staticClass:"c-code_code  o-code",domProps:{innerHTML:e._s(e.content)}},[e._v("\n        ")])])])],1)],1),n("span",{ref:"slotWrapper",staticClass:"c-code__slot-wrapper"},[e._t("default")],2)])},r=[],o={render:a,staticRenderFns:r};t.a=o}});
//# sourceMappingURL=scss-colors.ce5b6342411b80dc5793.js.map