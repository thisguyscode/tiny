<template>
  <div class="c-code">
 
    <div class="c-code_reference-wrapper" ref="codeReference" :id="'code-reference-' + _uid">

      <l-affix
        className="_sticky-header"
        :relativeElementSelector="'#code-reference-' + _uid"
        :z="200"
        :offset="{top: 144, bottom: 0}">

        <!-- Must use template to show contents before affix js has loaded on client -->
        <template scope="props" slot="contents">
          <div class="c-code_header" v-if="filename">
            <div class="c-code_header-reference">
              <span class="c-code_header-gutter">
                <c-icon class="c-code_icon" name="file"></c-icon>
              </span>
              <span class="c-code_filename o-code o-code--sm u-vr-reset">{{ filename }}</span>
            </div>
          </div>
        </template>

      </l-affix>

      <div class="c-code_code-area">
        
        <div class="c-code_gutter">
          <div class="c-code_number o-code" v-for="i in lineCount" :key="i">{{i}}</div>
        </div>

        <div class="c-code_code-block  o-code">
          <pre><code class="c-code_code" v-html="content">
          </code></pre>
        </div>

      </div>

    </div>

    <span class="c-code_slot-wrapper" ref="slotWrapper">
      <slot></slot>
    </span>

  </div>
</template>

<script>
import hljs from '~/utils/highlightLanguages.js'
import cIcon from '~/components/c-icon'
import lAffix from '~/components/layout/l-affix'
export default {
  components: {
    cIcon,
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
  
  
  
  // @import '~highlight.js/styles/github.css';
  $padding-x: $unit-lg;
  $padding-y: $unit-sm;
  pre {
    margin: 0;
  }
  
  .c-code {
    // @include vr($font-mono, $font-size-sm);
    // @include vr-reset;
    text-align: left;
    margin-bottom: $paragraph-trailer;
    // box-shadow: inset 0 0 0 1px $neutral-100;
    color: $lightest;
    
    @include mq($until: tablet) {
      margin-left: -$page-padding-mobile;
      margin-right: -$page-padding-mobile;
    }
  }

  .c-code_header {
    // transition: width 1s ease;
    width: 100%;
    padding-top: $unit-xs;
    padding-bottom: $unit-xs;
    position: relative;
    color: $neutral-00;
  }
  .c-code_header-reference {
    padding-left: $unit-lg;
    padding-right: $unit-sm;
    position: relative;
  }
  .c-code_icon {
    height: .8em;
  }
  .c-code_header-gutter,
  .c-code_gutter {
    width: $unit-lg;
    text-align: right;
    position: absolute;
    padding-right: $unit-sm;
    top: 0;
    left: 0;
  }
  .c-code_gutter {
    padding-top: $unit-sm;
  }
  .c-code_header-gutter {
    padding-top: $unit-xs;
  }
  
  .c-code_code-area {
    background-color: rgba($darkest, .9);
    position: relative;
    // max-height: $unit-xxl*3;
    padding-left: $unit-lg;
    @include mq($from: tablet) {
      // max-height: $unit-xxl*2;
    }
    @include mq($from: desktop) {
      // max-height: $unit-xxl*3;
    }
    @include mq($from: desktop) {
      // max-height: $unit-xxl*4;
    }
  }

  .c-code_reference-wrapper {
    overflow-y: scroll;
    // padding-top: $unit-sm;
    padding-bottom: $unit-sm;
    position: relative;
  }
  
  .c-code_code-block {
    // @include vr($font-mono, $font-size-sm);
    padding-top: $unit-sm;
    color: $lightest;
    overflow-x: scroll;
    position: relative;
  }

  .c-code_number {
    // @include vr($font-mono, $font-size-sm);
    color: $neutral-70;
    // margin-bottom: 0;
  }
  
  .c-code_slot-wrapper {
    display: none;
  }

  ._sticky-header {
    &.affix {
      background-color: $neutral-100;
      // left: 0;
      // right: 0;
      // padding-left: $page-padding-desktop;
      // padding-right: $page-padding-desktop;
      // background-color: red;
    }
  }

  .hljs-keyword,
  .hljs-literal,
  .hljs-symbol,
  .hljs-name {
    color: $red;
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
    color: $orange;
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
    font-style: italic;
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
    color: $blue;
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
