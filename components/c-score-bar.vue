<template>
  <div class="c-score-bar">
    <div v-if="!nobar" class="bar">
      <div class="fill" :class="scoreClass" :style="fillStyle"></div>
    </div>
    <span class="score">
      <span class="score-number" :class="scoreClass">{{ score }}</span>/{{ of }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    percent: {
      type: Number,
      required: true
    },
    of: {
      type: Number,
      default: 10
    },
    nobar: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    score: function () {
      return (this.percent / 100) * this.of
    },
    fillStyle: function () {
      return 'width: ' + this.percent + '%'
    },
    scoreClass: function () {
      var p = this.percent
      return {
        'lowest': p < 20,
        'low': p >= 20 && p < 40,
        'mid': p >= 40 && p < 60,
        'high': p >= 60 && p < 80,
        'highest': p >= 80
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  
  // Import variables and global settings
  

  .c-score-bar {
    display: flex;
    margin-bottom: $unit-sm;
  }

  .score {
    @include vr($font-body, $font-size-lg);
    white-space: nowrap;
    color: $neutral-40;
  }
  .score-number {
    font-weight: $font-weight-semi;
    &.lowest {
      color: $red;
    }
    &.low {
      color: $orange;
    }
    &.mid {
      color: $yellow;
    }
    &.high {
      color: $yellow-green;
    }
    &.highest {
      color: $green;
    }
  }

  .bar {
    flex-basis: 100%;
    position: relative;
    height: $unit-sm;
    border-radius: 2px;
    overflow: hidden;
    background-color: $neutral-80;
    margin-right: $unit-sm;
  }
  .fill {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    display: inline-block;
    &.lowest {
      background-color: $red;
    }
    &.low {
      background-color: $orange;
    }
    &.mid {
      background-color: $yellow;
    }
    &.high {
      background-color: $yellow-green;
    }
    &.highest {
      background-color: $green;
    }
  }

</style>
