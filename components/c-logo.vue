<template>
  <div class="c-logo" :class="baseClassObject">
    <title>tiny</title>
    <svg class="c-logo__vector" :class="vectorClass" viewBox="0 0 27 19" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.406 2.703l.422-.233c.193-.104 1.897-1.014 2.683-1.44a1 1 0 0 1 .951 1.76c-.793.429-2.495 1.337-2.68 1.438-.557.302-.838.47-1.149.687l-.227.17v6.735a1 1 0 1 1-2 0V6.608c-.822.625-1.753 1.329-2.579 1.941A1 1 0 0 1 .636 6.943c1.243-.922 2.762-2.08 3.77-2.849V1.322a1 1 0 1 1 2 0v1.381zm16.73 4.575c.96-1.937 1.387-3.53 1.387-5.377a1 1 0 1 1 2 0c0 2.748-.788 4.98-2.52 7.98-.189.327-.386.66-.65 1.1l-.66 1.1c-1.363 2.285-2.124 3.806-2.703 5.615a1 1 0 1 1-1.905-.61c.636-1.985 1.455-3.624 2.89-6.03l.662-1.103c.185-.308.336-.561.473-.796-.013-.002-.033-.03-.07-.084-.17-.244-.49-.563-.952-.938-1.004-.814-2.612-1.838-4.811-3.058a1 1 0 1 1 .97-1.75c2.864 1.59 4.815 2.852 5.89 3.95zm-.997 1.83a1.019 1.019 0 0 1-.001.002v-.002zm-10.53-6.064a1 1 0 0 1 1.157.024c.494.366 1.868 1.37 2.098 1.545.488.368.767.61 1.074.937.084.09 2.09 2.482 3.7 4.289a1 1 0 1 1-1.494 1.33c-1.644-1.846-3.627-4.21-3.665-4.25-.308-.329.91.576-1.407-1.136v6.078a1 1 0 0 1-2 0v-7.93a1 1 0 0 1 .537-.887zm-3.574 2.56a1 1 0 0 1 1.998.088l-.294 6.632a1 1 0 1 1-1.998-.088l.294-6.633z"/>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'md'
    },
    fill: {
      type: String,
      default: 'dark'
    }
  },
  computed: {
    baseClassObject: function () {
      return {
        'c-logo--sm': this.size === 'sm',
        'c-logo--md': this.size === 'md',
        'c-logo--xl': this.size === 'xl'
      }
    },
    vectorClass: function () {
      return {
        'c-logo__vector--dark': this.fill === 'dark',
        'c-logo__vector--light': this.fill === 'light'
      }
    }
  }
}
</script>


<style lang="scss" scoped>

/* Variables
======================================================================== */
$cap: .875em;



/* Base class
======================================================================== */
.c-logo {
  position: relative;
  display: inline-block;
}



/* Child classes
======================================================================== */
.c-logo__decoration-text {
  color: $neutral-60;
}
.c-logo__main-text {
  color: $neutral-00;
}

.c-logo__vector {
  height: 100%;
  width: auto;
}
.c-logo__vector--dark {
  fill: $neutral-00;
}
.c-logo__vector--light {
  fill: $neutral-100;
}



/* Size modifiers
======================================================================== */
.c-logo--sm {
  @include vr-offset($cap, $font-size-lg);
  height: $font-size-lg;
}

.c-logo--md {
  @include vr-offset($cap, $font-size-xl);
  height: $font-size-xl;
}

.c-logo--xl {
  @include vr-offset($cap, $font-size-xxl);
  height: $font-size-xxl;

  @include mq($from: tablet) {
    @include vr-offset($cap, $font-size-xxxxl);
    height: $font-size-xxxxl;
  }
}
</style>
