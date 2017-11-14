<template>
  <div class="c-code">
    <div class="c-code__reference-wrapper" ref="codeReference" :id="'code-reference-' + _uid">
      
      <l-affix
        className="c-code__affix"
        :relativeElementSelector="'#code-reference-' + _uid"
        :z="200"
        :offset="{top: 144, bottom: 0}">

        <!-- Must use template to show contents before affix js has loaded on client -->
        <template scope="props" slot="contents">
          <div class="c-code__header" v-if="filename">
            <div class="c-code__header-reference">
              <span class="c-code__header-gutter  o-code">
                <c-icon class="c-code__icon" name="file"></c-icon>
              </span>
              <span class="c-code_filename o-code o-code--sm">{{ filename }}</span>
            </div>
          </div>
        </template>

      </l-affix>

      <div class="c-code_code-area">
        <c-baselines class="c-code__baselines" :inverse="true"></c-baselines>
        
        <div class="c-code__gutter">
          <div class="c-code__number o-code" v-for="i in lineCount" :key="i">{{i}}</div>
        </div>

        <div class="c-code__code-block">
          <pre><code class="c-code_code  o-code" v-html="content">
          </code></pre>
        </div>

      </div>

    </div>

    <span class="c-code__slot-wrapper" ref="slotWrapper">
      <slot></slot>
    </span>

  </div>
</template>

<script>
import hljs from '~/utils/highlightLanguages.js'
import lAffix from '~/components/layout/l-affix'
export default {
  components: {
    lAffix
  },
  data: () => {
    return {
      content: 'loading code',
      lineCount: 0
    }
  },
  props: {
    languages: {
      type: Array,
      default: function () {
        return ['html', 'scss', 'css', 'javascript', 'json']
      }
    },
    code: {
      required: false
    },
    filename: {
      type: String,
      required: false
    }
  },
  computed: {
    preComputedCode: function () {
      return hljs.highlightAuto(this.code, this.languages).value
    }
  },
  methods: {
    getLineCount: function (content) {
      return content.split(/\r\n|\r|\n/).length
    },
    removeExtraIndent: function (content) {
      var lines = content.split('\n')
      if (lines[0] === '') {
        lines.shift()
      }
      var matches
      var indentation = (matches = /^[\s\t]+/.exec(lines[0])) !== null ? matches[0] : null
      if (indentation) {
        lines = lines.map(function (line) {
          line = line.replace(indentation, '')
          return line.replace(/\t/g, '    ')
        })
        content = lines.join('\n').trim()
      }
      return content
    },
    setContentFromSlot: function () {
      var rawContent
      this.$slots.default.forEach(vnode => {
        if (vnode.tag === 'pre') {
          var preContent = vnode.elm.innerHTML
          rawContent = this.removeExtraIndent(preContent)
        } else {
          rawContent = this.$refs.slotWrapper.innerHTML
        }
      })
      var content = rawContent.toString()
      var highlightedCode = hljs.highlightAuto(content, this.languages).value
      return highlightedCode
    }
  },
  mounted () {
    if (this.code) {
      this.content = this.preComputedCode
    } else if (this.$slots.default.length > 0) {
      this.content = this.setContentFromSlot()
    }
    this.lineCount = this.getLineCount(this.content)
  }
}
</script>


<style lang="scss">
/**
 * N.B. The naming of the classes in this component is completely screwed
 * ...sorry future Jamie.
 */


/* Variables
======================================================================== */
$padding-x: $unit-lg;
$padding-y: $unit-sm;



/* Base Class
======================================================================== */
/**
 * 1. Break out of the l-wrapper on small screens
 */
.c-code {
  text-align: left;
  margin-bottom: $paragraph-trailer;
  color: $lightest;
  
  @include mq($until: tablet) {
    margin-left: -$page-padding-mobile; /*[1]*/
    margin-right: -$page-padding-mobile; /*[1]*/
  }
}



/* MISC
======================================================================== */
.c-code__baselines {
  opacity: .5;
}

.c-code__slot-wrapper {
  display: none;
}



/* Header
======================================================================== */
.c-code__header-reference {
  padding-left: $unit-lg;
  padding-right: $unit-sm;
  position: relative;
}

.c-code__header {
  width: 100%;
  position: relative;
  color: $neutral-00;
}

.c-code__affix {
  &.affix {
    padding-top: $unit-xs;
    background-color: $neutral-100;
  }
}


/* Code Area
======================================================================== */
.c-code__reference-wrapper {
  overflow-y: scroll;
  padding-bottom: $unit-sm;
  position: relative;
}

.c-code_code-area {
  background-color: $dark-05;
  position: relative;
  padding-left: $unit-lg;
}

.c-code__code-block {
  padding-top: $unit-sm;
  color: $lightest;
  overflow-x: scroll;
  position: relative;
}


/* Gutters
======================================================================== */
.c-code__header-gutter,
.c-code__gutter {
  width: $unit-lg;
  text-align: right;
  position: absolute;
  padding-right: $unit-sm;
  top: 0;
  left: 0;
}

.c-code__gutter {
  padding-top: $unit-sm;
}

.c-code__number {
  color: $neutral-70;
}

.c-code__icon {
  height: 1em;
  width: auto;
}



/* Syntax Highlighting
======================================================================== */
.hljs-keyword,
.hljs-literal,
.hljs-symbol,
.hljs-name {
  color: #569CD6;
}

.hljs-link {
  color: #569CD6;
  text-decoration: underline;
}

.hljs-built_in,
.hljs-type {
  color: #4EC9B0;
}

.hljs-number,
.hljs-class {
  color: #B8D7A3;
}

.hljs-string,
.hljs-meta-string {
  color: #D69D85;
}

.hljs-regexp,
.hljs-template-tag {
  color: #9A5334;
}

.hljs-subst,
.hljs-function,
.hljs-title,
.hljs-params,
.hljs-formula {
  color: #DCDCDC;
}

.hljs-comment,
.hljs-quote {
  color: #57A64A;
  // font-style: italic;
}

.hljs-doctag {
  color: #608B4E;
}

.hljs-meta,
.hljs-meta-keyword,
.hljs-tag {
  color: #9B9B9B;
}

.hljs-variable,
.hljs-template-variable {
  color: #BD63C5;
}

.hljs-attr,
.hljs-attribute,
.hljs-builtin-name {
  color: #9CDCFE;
}

.hljs-section {
  color: gold;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-strong {
  font-weight: bold;
}

.hljs-bullet,
.hljs-selector-tag,
.hljs-selector-id,
.hljs-selector-class,
.hljs-selector-attr,
.hljs-selector-pseudo {
  color: #D7BA7D;
}

.hljs-addition {
  background-color: #144212;
  display: inline-block;
  width: 100%;
}

.hljs-deletion {
  background-color: #600;
  display: inline-block;
  width: 100%;
}

</style>
