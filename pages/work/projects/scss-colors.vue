<template>
  <section>

    <div class="o-text-section">
      <c-baselines></c-baselines>
      
      <l-wrapper size="sm">
        <h3 class="o-heading o-heading--gamma">What's the issue?</h3>
        
        <p class="o-text o-text--paragraph">There are lots of reason to want to automate color palette generation. At the time of making this there were a few main ones:</p>
        
        <ol class="o-text o-text--paragraph">
          <li>Customise apps and web-pages to client brand colors.</li>
          <li>Quickly add pretty colors to simple data vizzzess (like bar graphs n tings).</li>
          <li>Create a unique color palette for each of SocialCops' four main products.</li>
          <li>For the fun of it.</li>
        </ol>

        <p class="o-text o-text--paragraph">There are countless tools out there already for generating color palettes. One of my favourites for pretty (and small) palettes is <f-link externalLink="https://coolors.co" :inline="true">Coolors</f-link> and for the purposes of data visualisaton there may be no better than <f-link :inline="true" externalLink="http://vrl.cs.brown.edu/color">Colorgorical</f-link> from Brown University. But the goals of this project were somewhere between the two. Furthermore it needed to be easy to integrate into existing and future web projects - not a manual effort every time colors changed.</p>

        <h3 class="o-heading o-heading--gamma">So I Made This SCSS Mixin</h3>
        <p class="o-text o-text--paragraph">It accepts a single color and a name and when imported to the stylesheet outputs a bunch of classes nested in the palette's name - e.g. <code class="o-code o-code--inline u-vr-reset">.palette.coralred ._05 { /*...*/} .palette.coralred ._10 { /*...*/} .palette.coralred ._15 { /*...*/}</code> with each number representing a color in a scale.</p>
        
      </l-wrapper>
      
      <l-wrapper>
        <c-code :code="mixinCode" filename="_mixin.scss" :languages="['scss']"></c-code>
      </l-wrapper>

      <l-wrapper size="sm">
        <p class="o-heading o-heading--gamma"><code class="o-code o-code--inline u-vr-reset">contrasting-color()</code> Isn't a SCSS Function!</p>
        <p class="o-text o-text--paragraph">Yeah, that's just a little something to calculate the perceptual brightness of the color. I took it from someone brighter (shit pun intended) than myself. We're using it here for the text color so that hopefully we can read it regardless of the color that gets generated. Here it is in full:</p>
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

      <l-wrapper size="sm">
        <h3 class="o-heading o-heading--gamma">Back to the Palette</h3>
        <p class="o-text">So now we just need to import the mixin, define a color and @include it to generate us some sweet sweet classes.</p>
      </l-wrapper>

      <l-wrapper>
        <c-code filename="main.scss" :languages="['scss']">
          <pre>
            @import './mixin'
            $saffron: rgba(225,153,51,1);
            @include theme('palette.saffron', $saffron);
          </pre>
        </c-code>
      </l-wrapper>

      <l-wrapper size="sm">
        <p class="o-text">Which outputs the following CSS...</p>
      </l-wrapper>

      <l-wrapper>
        <c-code :code="outputCode" filename="styles.css" :languages="['css']"></c-code>
      </l-wrapper>

      <l-wrapper size="sm">
        <h3 class="o-heading o-heading--gamma">Example</h3>
        <p class="o-text o-text--paragraph">Live demo <f-link externalLink="https://thisguyscode.github.io/scss-color-palettes/" :inline="true">here</f-link></p>
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
  },
  computed: {
    mixinCode: function () {
      return require('raw-loader!~/data/code/scss-color-mixin')
    },
    outputCode: function () {
      return require('raw-loader!~/data/code/scss-color-output')
    }
  }
}
</script>

<style lang="scss" scoped>
.p-scss-colors__example-palette {
  margin-bottom: $unit-lg;
}
</style>
