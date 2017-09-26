<template>
  <div class="c-code">
		
    <!-- Code Block -->
    <pre><code v-html="content">
    </code></pre>

    <span class="_slot-wrapper" ref="slotWrapper">
      <slot></slot>
    </span>
  </div>
</template>

<script>
import hljs from 'highlight.js'
export default {
  data: () => {
    return {
      content: 'loading code'
    }
  },
  props: {
    languages: {
      type: Array,
      default: ['html', 'scss', 'css', 'javascript']
    },
    code: {
      required: false
    }
  },
  computed: {
    preComputedCode: function () {
      return hljs.highlightAuto(this.code, this.languages).value
    }
  },
  methods: {
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
  }
}
</script>

<style lang="scss">
  
  // Import variables and global settings
  @import "~assets/styles/imports";

  .c-code {
    color: $neutral-100;
    background-color: $neutral-10;
    text-align: left;
  }
  
  ._slot-wrapper {
    display: none;
  }
  
</style>
