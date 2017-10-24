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
      :makeResponsive="false"
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
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    baseClassObject: function () {
      return {
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
        'c-tech-icon__icon--git': this.iconName === 'git'
      }
    },
    iconName: function () {
      if (this.name === 'CSS3 / SCSS') {
        this.icon = true
        return 'css3'
      } else if (this.name === 'HTML5') {
        return 'html5'
      } else if (this.name === 'git') {
        return 'git'
      }
      return false
    },
    iconString: function () {
      if (this.name === 'Adobe Photoshop') {
        return 'Ps'
      } else if (this.name === 'Adobe Illustrator') {
        return 'Ai'
      } else if (this.name === 'Adobe InDesign') {
        return 'Id'
      }
      return false
    },
    iconImg: function () {
      if (this.name === 'JavaScript' | 'JS' | 'JS5') {
        return 'logo-js5.png'
      } else if (this.name === 'Webpack 2') {
        return 'logo-webpack.svg'
      } else if (this.name === 'Hugo') {
        return 'logo-hugo.png'
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
$html-color: #F66238;


/* Base class
======================================================================== */


.c-tech-icon {
  margin-right: $unit-xs;
  width: 2em;
  height: 2em;
  vertical-align: text-top;
}

.c-tech-icon--custom {
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  padding-left: $unit-xs;
  padding-right: $unit-xs;
  text-align: center;
  display: inline-block;
  box-shadow: 0 1px $neutral-100;
  line-height: 1;
}

.c-tech-icon__icon {
  vertical-align: text-top;
  height: 2em;
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

</style>
