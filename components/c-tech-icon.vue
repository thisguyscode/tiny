<template>
  <div class="c-tech-icon" :class="baseClassObject">
    <c-icon
      v-if="iconName"
      class="c-tech-icon__icon"
      :class="iconClass"
      :name="iconName"/>
    <div
      v-else-if="iconString"
      class="c-tech-icon__string">
      {{ iconString }}
    </div>
    <c-image
      v-else-if="iconImg"
      :lazy="false"
      :imageSrc="iconImg"
    />
  </div>
</template>


<script>
import cIcon from '~/components/c-icon'
export default {
  components: {
    cIcon
  },
  data: () => {
    return {
      icon: true,
      custom: true
    }
  },
  props: {
    landscape: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'md'
    },
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    baseClassObject: function () {
      return {
        'c-tech-icon--md': this.size === 'md',
        'c-tech-icon--lg': this.size === 'lg',
        'c-tech-icon--xl': this.size === 'xl',
        'c-tech-icon--landscape': this.landscape,
        'c-tech-icon--custom': this.iconString,
        'c-tech-icon--ai': this.iconString === 'Ai',
        'c-tech-icon--ps': this.iconString === 'Ps',
        'c-tech-icon--id': this.iconString === 'Id'
      }
    },
    iconClass: function () {
      return {
        'c-tech-icon__icon--css': this.iconName === 'css3',
        'c-tech-icon__icon--html': this.iconName === 'html5',
        'c-tech-icon__icon--git': this.iconName === 'git',
        'c-tech-icon__icon--github': this.iconName === 'github'
      }
    },
    iconName: function () {
      if (['CSS3 / SCSS', 'CSS', 'css'].indexOf(this.name) >= 0) {
        return 'css3'
      } else if (['HTML', 'HTML5'].indexOf(this.name) >= 0) {
        return 'html5'
      } else if (this.name === 'git') {
        return 'git'
      } else if (['github', 'GITHUB', 'GitHub', 'Github'].indexOf(this.name) >= 0) {
        return 'github'
      }
      return false
    },
    iconString: function () {
      if (['Adobe Photoshop', 'Ps', 'Photoshop'].indexOf(this.name) >= 0) {
        return 'Ps'
      } else if (['Adobe Illustrator', 'Ai', 'Illustrator'].indexOf(this.name) >= 0) {
        return 'Ai'
      } else if (['Adobe InDesign', 'Id', 'InDesign', 'Indesign'].indexOf(this.name) >= 0) {
        return 'Id'
      }
      return false
    },
    iconImg: function () {
      if (['JS', 'js', 'JavaScript', 'JS5'].indexOf(this.name) >= 0) {
        return 'logo-js5.png'
      } else if (this.name === 'Webpack 2') {
        return 'logo-webpack.svg'
      } else if (this.name === 'Hugo') {
        return 'logo-hugo.png'
      } else if (this.name === 'Sketch') {
        return 'logo-sketch.png'
      } else if (this.name === 'InVision') {
        return 'logo-invision.svg'
      } else if (this.name === 'npm') {
        return 'logo-npm.png'
      } else if (['SCSS', 'scss'].indexOf(this.name) >= 0) {
        return 'logo-scss.png'
      } else if (['gulp', 'GULP'].indexOf(this.name) >= 0) {
        return 'logo-gulp.png'
      } else if (['vue', 'Vue.js'].indexOf(this.name) >= 0) {
        return 'logo-vue.png'
      }
      return false
    }
  }
}
</script>


<style lang="scss" scoped>
/* ========================================================================
  # SCOPED STYLES
======================================================================== */

/* Variables (redefine global variable dependencies)
======================================================================== */
// Adobe colors
$ai-color: $yellow;
$ps-color: $blue;
$id-color: $purple;
// Other colors
$css-color: #2FA4D9;
$git-color: #F54D3C;
$github-color: $purple;
$html-color: #F66238;


/* Base class
======================================================================== */
.c-tech-icon {
  display: inline-block;
  overflow: hidden;
  position: relative;
  vertical-align: text-top;
}


/* SVG icon type
======================================================================== */
.c-tech-icon__icon {
  vertical-align: text-top;
  width: auto;
}

.c-tech-icon__icon--css {
  color: $css-color;
}

.c-tech-icon__icon--html {
  color: $html-color;
}

.c-tech-icon__icon--git {
  color: $git-color;
}

.c-tech-icon__icon--github {
  color: $github-color;
}



/* Custom string type
======================================================================== */
.c-tech-icon--custom {
  text-align: center;
  display: inline-block;
  box-shadow: 0 1px $neutral-100;
}

.c-tech-icon__string {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  text-align: center;
  transform: translateY(-50%);
  font-family: $font-display;
  font-weight: $font-weight-semi;
  display: inline-block;
}


.c-tech-icon--ai {
  background-color: $ai-color;
  > .c-tech-icon__string {
    color: contrasting-color($ai-color, $lightest, $darkest)
  }
}

.c-tech-icon--ps {
  background-color: $ps-color;
  > .c-tech-icon__string {
    color: contrasting-color($ps-color, $lightest, $darkest)
  }
}

.c-tech-icon--id {
  background-color: $id-color;
  > .c-tech-icon__string {
    color: contrasting-color($id-color, $lightest, $darkest)
  }
}



/* Size variants
======================================================================== */
.c-tech-icon--md {
  height: 2em;
  width: 2em;
  margin-right: $unit-xs;

  > .c-tech-icon__icon {
    height: 2em;
  }

  > .c-tech-icon__string {
    font-size: $font-size-md;
  }

  &.c-tech-icon--landscape {
    width: 3em;
  }
  
  &.c-tech-icon--custom {
    border-radius: 4px;
    padding-left: $unit-xs;
    padding-right: $unit-xs;
  }
}


.c-tech-icon--lg {
  height: 3em;
  width: 3em;
  margin-right: $unit-sm;

  > .c-tech-icon__icon {
    height: 3em;
  }

  > .c-tech-icon__string {
    font-size: $font-size-xl;
  }

  &.c-tech-icon--landscape {
    width: 4.5em;
  }

  &.c-tech-icon--custom {
    border-radius: 8px;
    padding-left: $unit-xs;
    padding-right: $unit-xs;
  }

}


.c-tech-icon--xl {
  height: 4em;
  width: 4em;
  margin-right: $unit-sm;

  > .c-tech-icon__icon {
    height: 4em;
  }

  > .c-tech-icon__string {
    font-size: $font-size-xl;
  }

  &.c-tech-icon--landscape {
    width: 6em;
  }

  &.c-tech-icon--custom {
    border-radius: 8px;
    padding-left: $unit-xs;
    padding-right: $unit-xs;
  }
}






</style>
