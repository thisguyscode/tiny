<template>
  <div class="c-score-bar">
    <div v-if="!nobar" class="bar">
      <div class="fill o-liner o-liner--break-right" :class="scoreClass" :style="fillStyle"></div>
    </div>
    <span class="score" :class="scoreClass">
      <span class="score-number">{{ score }} </span>/ {{ of }}
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
  
  
  

  .c-score-bar {
    display: flex;
    margin-bottom: $unit-sm;
  }

  .score {
    display: inline;
    white-space: nowrap;
    font-family: $font-body;
    font-size: $font-size-md;
    font-weight: $font-weight-regular;
  }
  .score-number {
    font-weight: $font-weight-bold;
  }
  .score {
    &.lowest {
      color: contrasting-color($red, $lightest, $darkest);
      background-color: $red;
    }
    &.low {
      color: contrasting-color($orange, $lightest, $darkest);
      background-color: $orange;
    }
    &.mid {
      color: contrasting-color($yellow, $lightest, $darkest);
      background-color: $yellow;
    }
    &.high {
      color: contrasting-color($yellow-green, $lightest, $darkest);
      background-color: $yellow-green;
    }
    &.highest {
      color: contrasting-color($green, $lightest, $darkest);
      background-color: $green;
    }
  }

  .bar {
    flex-basis: 100%;
    position: relative;
    height: $unit-sm;
    border-radius: 2px;
    overflow: hidden;
    background-color: $neutral-70;
    margin-right: $unit-sm;
  }
  .fill {
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
