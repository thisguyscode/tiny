<template>
  <section>


    <!-- MOON -->
    <div class="o-text-section">
      <c-baselines></c-baselines>
      <l-wrapper size="sm">
        <h1 class="o-heading o-heading--gamma">What's Vertical Rhythm?</h1>
        <p class="o-text o-text--paragraph">Remember lined paper? Well that's basically what typesetters might refer to as a baseline grid (lines spaced evenly down the page). Maintaining that vertical spacing can help to improve the reading flow and the overall aesthetic of a design.</p>
        <p class="o-text o-text--paragraph">It's been something I've been keen to reproduce in web design for a while. Last year I started exploring <c-link externalLink="https://github.com/inuitcss/inuitcss" :inline="true">inuitCSS</c-link> which promised vertical rhythm out of the box, but (as <c-link externalLink="https://github.com/inuitcss/inuitcss/issues/291" :inline="true">this issue</c-link> on github demonstrates) it fell a little short of that elusive pixel-perfection</p>
        <p class="o-text o-text--paragraph"><c-link externalLink="https://www.smashingmagazine.com/2012/12/css-baseline-the-good-the-bad-and-the-ugly/#the-good-basic-css-baseline" :inline="true">This <em>Smashing Magazine</em> article</c-link> provides some fantastic insights on the issue, but it all seemed a tad too manual for my liking... so as always I went looking to see if any clever people could save me some time. I came across <c-link externalLink="https://github.com/vicompany/vertical-rhythm" :inline="true">this fantastic repo</c-link> from <em>vi/company</em>.</p>
        <p class="o-text o-text--paragraph">I won't get into a thorough explanation here but the main mixin looks something like this:</p>
      </l-wrapper>
      <l-wrapper>
        <c-code :code="vrBasicCode" filename="vr.scss" :languages="['scss']"></c-code>
      </l-wrapper>
      <l-wrapper size="sm">
        <p class="o-text o-text--paragraph">So I set this up. Made the requisite modifications to fit it to my taste and project structure, and tweaked those magic-number-esque variables for both Montserrat and Open Sans. It. Looked. Great...</p>
        <p class="o-text o-text--paragraph">...but, then I started doing performance tests. Having never been personally responsible for page performance before, this was the first time seeing the performance impact of web fonts (Montserrat and Open Sans are from Google WebFonts).</p>
        <p class="o-text o-text--paragraph">I tried everything to get WebFonts off the critical requests chain. I was happy to settle for a Flash Of Unstyled Text (FOUT) or hell, even a little Flash Of Invisible Text (FOIT), if it meant that I could lower the priority of the font and let the rest of the page load. I explored both <c-link externalLink="https://github.com/typekit/webfontloader" :inline="true">WebFontLoader</c-link> and <c-link externalLink="https://github.com/bramstein/fontfaceobserver" :inline="true">FontFaceObserver</c-link>... and both together... but to no avail.</p>
        <h1 class="o-heading o-heading--gamma">So What Now?</h1>
        <p class="o-text o-text--paragraph">I wasn't gonna be one of those designers with a slow website. No sir! I decided to find out what the big players are doing. There's gotta be a 2017 way to deal with this. Turns out that the likes of <em>Medium</em> and <em>Wordpress</em> use a <span class="u-text--bold">system font stack</span>. Something like this:</p>
        <c-code lang="css">
          <pre>
            .class {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen-Sans", "Ubuntu", "Cantarell", "Helvetica Neue", sans-serif;
            }
          </pre>
        </c-code>
        <p class="o-text o-text--paragraph">That one's <em>Wordpress's</em> by the way. First the browser will check the client system for apple's system font ('-apple-system' and 'BlinkMacSystemFont' are abstractions - they will resolve to one of San Francisco, Helvetica, Helvetica Neue or Lucida Grande). Failing that the browser will check for 'Segoe UI' (which is used by Windows / Windows phones) and so on down the stack. These are the native fonts of various sytems, so the webpage text will render instantly AND blend in like a lexical chameleon.</p>
        <h1 class="o-heading o-heading--gamma">That's Not Going To Work</h1>
        <p class="o-text o-text--paragraph">I need to offset the text by a very specific amount based on the precise height of the letters. That was fine when I was declaring Montserrat for headings and Open Sans for body copy... but now I don't know which font is going to be used. What I need is a way to determine which font the user-agent is actually rendering.</p>
        <p class="o-text o-text--paragraph">I'll need to use a stack with explicitly defined font names. I can't depend on something like '-apple-system' to select the appropriate font seeing as I am defining such a precise number. I'll use the stack below instead which I think will cover most, if not all cases. I'll define both a display and body stack as variables to be used throughout the project.</p>
        <c-code lang="scss">
          <pre>
            $font-display: "SF Pro Display", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Helvetica Neue", "Helvetica", "Lucida Grande", -apple-system, BlinkMacSystemFont, "Trebuchet MS", sans-serif;
            $font-body: "SF Pro Text", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Helvetica Neue", "Helvetica", "Lucida Grande", -apple-system, BlinkMacSystemFont, "Trebuchet MS", sans-serif;
          </pre>
        </c-code>
        <p class="o-text o-text--paragraph">But that's the least of it...</p>
        <h1 class="o-heading o-heading--gamma">Enter the hack!</h1>
        <p class="o-text o-text--paragraph">This one's messy, but it's forgiven for being so creative (not my idea by the way). Basically on page load we throw a hidden node into the DOM, fill it with a test string, give it <span class="u-text--bold">a.</span> the default font-family and <span class="u-text--bold">b.</span> the font-family that we want to test for and then compare the two. If there's even the tiniest difference we've got a match!</p>
      </l-wrapper>

      <l-wrapper>
        <c-code :code="vrDetectCode" filename="detectFont.js" :languages="['js']"></c-code>
      </l-wrapper>

      <l-wrapper size="sm">
        <p class="o-text o-text--paragraph">So now I can just throw in the appropriate styles once the font is detected. Don't worry about what's in <code class="o-code o-code--inline">./body-font-offset</code>... it's long and complicated. What's important is that I can now load the font-specific-magic-number-variable as needed.</p>
        <c-code lang="scss">
          <pre>
            /* ==========================================================================
              # San Francisco (as display font)
            ========================================================================== */

            /** Redefine the cap height of this particular typeface */
            $cap-height:			.148em;

            /** Import the display-font offset classes */
            @import './display-font-offset';
          </pre>
        </c-code>
        <c-code lang="scss">
          <pre>
            /* ==========================================================================
              # San Francisco (as body font)
            ========================================================================== */

            /** Redefine the cap height of this particular typeface */
            $cap-height:			.16em;

            /** Import the body-font offset classes */
            @import './body-font-offset';
          </pre>
        </c-code>
        <c-code lang="scss">
          <pre>
            /* ==========================================================================
              # SEGOE UI (as display font)
            ========================================================================== */

            /** Redefine the cap height of this particular typeface */
            $cap-height:			.085em;

            /** Import the display-font offset classes */
            @import './display-font-offset';
          </pre>
        </c-code>
      </l-wrapper>
    </div>
    
    <div class="o-text-section">
      <c-baselines></c-baselines>
      <l-wrapper size="sm">
        <h1 class="o-heading o-heading--gamma">And The Result!!</h1>
        <p class="o-text o-text--paragraph">Well this whole website is the result, but here's a picture anyway.</p>
      </l-wrapper>
    </div>


    <!-- 1 -->
    <c-box :border="true" :filled="true">
      <c-image
        :imageSrc="'personal/vr/main.jpg'"
      />
    </c-box>

    <div class="o-text-section">
      <c-baselines></c-baselines>
      <l-wrapper size="sm">
        <h1 class="o-heading o-heading--gamma">Was It Worth It?</h1>
        <p class="o-text o-text--paragraph">Probably not. But I learned a lot, and it gives me a disgustingly warm feeling to see all the text sitting on its baseline.</p>
      </l-wrapper>
    </div>

  </section>
</template>

<script>
import cCode from '~/components/c-code'
export default {
  components: {
    cCode
  },
  computed: {
    vrBasicCode: function () {
      return require('raw-loader!~/data/code/vr-basic')
    },
    vrDetectCode: function () {
      return require('raw-loader!~/data/code/vr-detect-font')
    }
  }
}
</script>

<style>

</style>
