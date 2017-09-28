<template>
  <div class="c-code">
    
    <div class="_header" v-if="filename">
      <div class="_header-reference">
        <span class="_gutter">
          <c-icon class="_icon" name="file"></c-icon>
        </span>
        <span class="_filename">{{ filename }}</span>
      </div>
    </div>
    
    <div class="_reference-wrapper">
      <div class="_code-area">
        
        <div class="_gutter">
          <div class="_number" v-for="i in lineCount" :key="i">{{i}}</div>
        </div>

        <div class="_code-block">
          <pre><code class="_code" v-html="content">
          </code></pre>
        </div>

      </div>
    </div>

    <span class="_slot-wrapper" ref="slotWrapper">
      <slot></slot>
    </span>

  </div>
</template>

<script>
import hljs from '~/utils/highlightLanguages.js'
import cIcon from '~/components/c-icon'
export default {
  components: {
    cIcon
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
      default: ['html', 'scss', 'css', 'javascript', 'json']
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
      var content = String(rawContent)
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
    console.log(this.lineCount)
  }
}
</script>

<style lang="scss">
  
  // Import variables and global settings
  @import "~assets/styles/imports";
  // @import '~highlight.js/styles/github.css';
  $padding-x: $unit-lg;
  $padding-y: $unit-sm;
  pre {
    margin: 0;
  }
  
  .c-code {
    @include vr($font-mono, $font-size-sm);
    @include vr-reset;
    text-align: left;
    margin-bottom: $paragraph-trailer;
    box-shadow: inset 0 0 0 1px $neutral-90;
    
    @include mq($from: tablet) {
      margin-left: -$unit-lg;
      margin-right: -$unit-lg;
    }
  }

  ._header {
    width: 100%;
    padding-top: $unit-xs;
    padding-bottom: $unit-xs;
    position: relative;
    background-color: rgba($neutral-90, 1);
    color: $neutral-00;
  }
  ._header-reference {
    padding-left: $unit-lg;
    padding-right: $unit-lg;
    position: relative;
  }
  ._filename {
    // @include vr($font-mono, $base-font-size);
  }
  ._icon {
    height: .8em;
  }
  ._code,
  ._number {
    // @include vr($font-mono, $font-size-sm);
  }
  ._gutter {
    width: $unit-lg;
    text-align: right;
    position: absolute;
    padding-right: $unit-sm;
    top: 0;
    left: 0;
  }
  
  ._code-area {
    position: relative;
    max-height: $unit-xxl*3;
    padding-left: $unit-lg;
    @include mq($from: tablet) {
      max-height: $unit-xxl*2;
    }
    @include mq($from: desktop) {
      max-height: $unit-xxl*3;
    }
    @include mq($from: desktop) {
      max-height: $unit-xxl*4;
    }
  }

  ._reference-wrapper {
    overflow-y: scroll;
    padding-top: $unit-sm;
    padding-bottom: $unit-sm;
    position: relative;
  }
  
  ._code-block {
    @include vr($font-mono, $font-size-sm);
    color: $neutral-20;
    overflow-x: scroll;
    position: relative;
  }

  ._number {
    @include vr($font-mono, $font-size-sm);
    color: $neutral-70;
    // margin-bottom: 0;
  }
  
  ._slot-wrapper {
    display: none;
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
  /*.hljs-code {
  font-family:'Monospace';
}*/

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
