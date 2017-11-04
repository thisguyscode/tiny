<template>
  <section>

    <div class="o-text-section">
      <c-baselines></c-baselines>
      
      <l-wrapper size="sm">
        <h1 class="o-heading o-heading--gamma">Test</h1>
        <p class="o-text o-text--paragraph">jbasckjbavnba adsvba vmn aviosdnvk cnsbdi ahjd v lsvn akvuzdbvoa sk doivankj adv aoisnvkasd savioabdva dvaiodv ajdv ousv alvadvb apdv l vuosf vsv a</p>
      </l-wrapper>
      
      <l-wrapper>
        <c-code filename="mixin.scss" :languages="['scss']">
          <pre>
            /* Da color MACHINE
            ======================================================================== */
            /**
            * 1. Mixin accepts a single color and a theme name
            * 2. Reset the color lightness to ensure we can create a palette with the
                  full range of brightnesses. I.E. Attempt to standaradize the treatment
                  of colors.
            * 3. Currently not used - can use complimentary color in the palette
            * 4. Define how the color is adjusted for each palette color
            * 5. Create a class named after $name variable and wrap all the color
                  classes inside it.
            * 6. Create a class for each of the palette colors
            * 7. Set the text color to contrasting color
            * 8. Set the background to the color
            * 9. Print the hex-code on top
            */

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
                ... // Repeat through ._20 - ._95
              }
            }
          </pre>
        </c-code>
      </l-wrapper>

    </div>

    <div class="o-text-section">
      <c-baselines></c-baselines>
      
      <l-wrapper size="sm">
        <h1 class="o-heading o-heading--gamma">Test</h1>
        <p class="o-text o-text--paragraph">jbasckjbavnba adsvba vmn aviosdnvk cnsbdi ahjd v lsvn akvuzdbvoa sk doivankj adv aoisnvkasd savioabdva dvaiodv ajdv ousv alvadvb apdv l vuosf vsv a</p>
      </l-wrapper>
      
      <l-wrapper>
        <c-code filename="_brightness.scss" :languages="['scss']">
          <pre>
            // Brightness math based on:
            // http://www.nbdtech.com/Blog/archive/2008/04/27/Calculating-the-Perceived-Brightness-of-a-Color.aspx

            $red-magic-number: 241;
            $green-magic-number: 691;
            $blue-magic-number: 68;
            $brightness-divisor: $red-magic-number + $green-magic-number + $blue-magic-number;

            @function brightness($color) {
              // Extract color components
              $red-component: red($color);
              $green-component: green($color);
              $blue-component: blue($color);

              // Calculate a brightness value in 3d color space between 0 and 255
              $number: sqrt((($red-component * $red-component * $red-magic-number) + ($green-component * $green-component * $green-magic-number) + ($blue-component * $blue-component * $blue-magic-number)) / $brightness-divisor);

              // Convert to percentage and return
              @return 100% * $number / 255;
            }

            @function contrasting-color($color, $light, $dark) {
              @if brightness($color) < 65% {
                @return $light;
              } @else {
                @return $dark;
              }
            }

            @function sqrt ($r) {
                $x0: 1;
                $x1: $x0;

                @for $i from 1 through 10 {
                    $x1: $x0 - ($x0 * $x0 - abs($r)) / (2 * $x0);
                    $x0: $x1;
                }

                @return $x1;
            }
          </pre>
        </c-code>
      </l-wrapper>

    </div>
  </section>
</template>

<script>
import cColorPalette from '~/components/c-color-palette'
import cCode from '~/components/c-code'
export default {
  components: {
    cCode,
    cColorPalette
  }
}
</script>

<style lang="scss" scoped>
.p-scss-colors__example-palette {
  margin-bottom: $unit-lg;
}
</style>
