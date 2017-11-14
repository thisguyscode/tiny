<template>
  <section class="c-color-palette">
    <ul class="palette o-list-bare" :class="[color]">
      <li v-if="color !== 'greyscale'" class="_highlight"></li>
      <li v-if="color !== 'greyscale'" class="_base"></li>
      <li class="_05"></li>
      <li class="_10"></li>
      <li class="_20"></li>
      <li class="_30"></li>
      <li class="_60"></li>
      <li class="_70"></li>
      <li class="_80"></li>
      <li class="_90"></li>
      <li class="_95"></li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'greyscale'
    }
  }
}
</script>

<style lang="scss" scoped>
.c-color-palette {
  background-color: $neutral-100;
  font-size: $font-size-xs;
}

/* VARIABLES
======================================================================== */

// LAYOUT
$column-s: 100% / 6;
$column-m: 100% / 3;

/**
 * The color generator accepts a single color and returns a palette.
 * Below are a selection of test colors
 */

// RANDOM COLOR
$red: random(256)-1;
$green: random(256)-1;
$blue: random(256)-1;
$random: rgba($red, $green, $blue, 1);
 
// MANUAL TEST
$custom: hsla(220,80,69,1);

// BRANDS
$slack: hsla(306, 15, 26, 1);
$coke: #B81321;

// 'STANDARD'
$greyscale: hsla(22,0,0,1);
$red: hsla(7,87,0,1); 
$orange: hsla(32,90,0,1);
$yellow: hsla(43,90,0,1); 
$green: hsla(115,53,0,1);
$bluegreen: hsla(163,70,0,1);
$blue: hsla(205,75,0,1);
$purpleblue: hsla(240,30,0,1);
$purple: hsla(270,20,0,1);
$pinkred: hsla(347,73,69,1);

// MUTED
$dullblue: hsla(220, 10, 0, 1);
$dullpurple: hsla(270, 10, 0, 1);
$dullred: hsla(5, 10, 0, 1);

// BLUES
$blue1: hsla(200, 0, 0, 1);
$blue2: hsla(210, 20, 0, 1);
$blue3: hsla(220, 50, 0, 1);
$blue4: hsla(230, 70, 0, 1);
$blue5: hsla(240, 70, 0, 1);
$blue6: hsla(250, 90, 0, 1);

// WARM GREYS
$warm1: hsla(0, 10, 0, 1); 
$warm2: hsla(10, 20, 0, 1);
$warm3: hsla(20, 30, 0, 1);
$warm4: hsla(30, 40, 0, 1);
$warm5: hsla(35, 50, 0, 1);
$warm6: hsla(40, 90, 0, 1);

// INDIAN COLORS
$saffron: rgba(225,153,51,1);
$indiagreen: hsla(120,50,8,1);
$indiablue: rgba(0,0,128,1);

 

@mixin theme($name, $color) { /*[1]*/
  $base: adjust-color($color, $lightness: -100%); /*[2]*/
  $comp: complement(change-color($base, $lightness: 80%, $saturation: 100%)); /*[3]*/
  $s_05: adjust-color($base, $hue: 32deg, $saturation: -40%, $lightness: 95%); /*[4]*/ 
  $s_10: adjust-color($base, $hue: 24deg, $saturation: -30%, $lightness: 90%); /*[4]*/ 
  $s_20: adjust-color($base, $hue: 16deg, $saturation: -20%, $lightness: 80%); /*[4]*/ 
  $s_30: adjust-color($base, $hue: 8deg, $saturation: -10%, $lightness: 70%); /*[4]*/ 
  $s_40: adjust-color($base, $hue: 0deg, $saturation: -5%, $lightness: 60%); /*[4]*/ 
  $s_50: adjust-color($base, $hue: 0deg, $saturation: 18%, $lightness: 50%); /*[4]*/ 
  $s_60: adjust-color($base, $hue: -8deg, $saturation: 5%, $lightness: 40%); /*[4]*/ 
  $s_70: adjust-color($base, $hue: -16deg, $saturation: 10%, $lightness: 30%); /*[4]*/ 
  $s_80: adjust-color($base, $hue: -24deg, $saturation: 20%, $lightness: 20%); /*[4]*/ 
  $s_90: adjust-color($base, $hue: -32deg, $saturation: 30%, $lightness: 10%); /*[4]*/ 
  $s_95: adjust-color($base, $hue: -40deg, $saturation: 40%, $lightness: 05%); /*[4]*/ 
  .#{$name} { /*[5]*/
    ._05 { /*[6]*/
      color: contrasting-color($s_05, $s_05, $s_90); /*[7]*/
      background: $s_05; /*[8]*/
      &:after {
        content: $s_05 + ""; /*[9]*/
      }
    }
    ._10 {
      color: contrasting-color($s_10, $s_05, $s_90);
      background: $s_10;
      &:after {
        content: $s_10 + "";
      }
    }
    ._20 {
      color: contrasting-color($s_20, $s_05, $s_90);
      background: $s_20;
      &:after {
        content: $s_20 + "";
      }
    }
    ._30 {
      color: contrasting-color($s_30, $s_05, $s_90);
      background: $s_30;
      &:after {
        content: $s_30 + "";
      }
    }
    ._base {
      height: 20%;
      min-height: 60px;
      color: contrasting-color($s_40, $s_05, $s_90);
      background: $s_40;
      &:after {
        content: $s_40 + "";
      }
    }
    ._highlight {
      min-height: 2%;
      min-height: 18px;
      color: contrasting-color($s_50, $s_05, $s_90);
      background: $s_50;
      &:after {
        content: $s_50 + "";
      }
    }
    ._60 {
      color: contrasting-color($s_60, $s_05, $s_90);
      background: $s_60;
      &:after {
        content: $s_60 + "";
      }
    }
    ._70 {
      color: contrasting-color($s_70, $s_05, $s_90);
      background: $s_70;
      &:after {
        content: $s_70 + "";
      }
    }
    ._80 {
      color: contrasting-color($s_80, $s_05, $s_90);
      background: $s_80;
      &:after {
        content: $s_80 + "";
      }
    }
    ._90 {
      color: contrasting-color($s_90, $s_05, $s_90);
      background: $s_90;
      &:after {
        content: $s_90 + "";
      }
    }
    ._95 {
      color: contrasting-color($s_95, $s_05, $s_90);
      background: $s_95;
      &:after {
        content: $s_95 + "";
      }
    }
  }
}

/* INSTANTIATE / GENERATE CLASSES IN STYLESHEET
======================================================================== */
@include theme('palette.custom', $custom);
@include theme('palette.random', $random);

@include theme('palette.slack', $slack);
@include theme('palette.coke', $coke);

@include theme('palette.greyscale', $greyscale);

@include theme('palette.red', $red);
@include theme('palette.orange', $orange);
@include theme('palette.yellow', $yellow);
@include theme('palette.green', $green);
@include theme('palette.bluegreen', $bluegreen);
@include theme('palette.blue', $blue);
@include theme('palette.purpleblue', $purpleblue);
@include theme('palette.purple', $purple);
@include theme('palette.pinkred', $pinkred);

@include theme('palette.dullblue', $dullblue);
@include theme('palette.dullpurple', $dullpurple);
@include theme('palette.dullred', $dullred);

@include theme('palette.saffron', $saffron);
@include theme('palette.indiagreen', $indiagreen);
@include theme('palette.indiablue', $indiablue);

@include theme('palette.blue1', $blue1);
@include theme('palette.blue2', $blue2);
@include theme('palette.blue3', $blue3);
@include theme('palette.blue4', $blue4);
@include theme('palette.blue5', $blue5);
@include theme('palette.blue6', $blue6);

@include theme('palette.warm1', $warm1);
@include theme('palette.warm2', $warm2);
@include theme('palette.warm3', $warm3);
@include theme('palette.warm4', $warm4);
@include theme('palette.warm5', $warm5);
@include theme('palette.warm6', $warm6);



/* LAYOUT STYLING
======================================================================== */
// ul {
//   margin: 0;
//   list-style: none;
//   padding: 0;
// }

li {
  width: 100%;
  padding: 10px;
  height: 2rem;
  &:after {
    float: right;
  }
  &:before {
    content: attr(class);
    float: left;
  }
}

.palette {
  display: block;
  font-family: $font-body;
}

.btn {
  font-weight: 600;
  transition: all .1s ease-in-out;
  cursor: pointer;
  border-radius: 2px;
  display: inline-block;
  &.sml {
    font-size: 1.6rem;
    padding: 11px 17px;
  }
  &.lrg {
    font-size: 2.2rem;
    padding: 17px 22px;
  }
}

</style>
