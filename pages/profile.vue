<template>

  <div class="p-profile">
  
    <c-hero>
      <h1>I'm tiny.</h1>
      <h1 class="u-margin-bottom-none">I <span class="u-text--lowest-contrast">mostly</span> make digital interfaces.</h1>
    </c-hero>

    <l-main-content>
      
      <c-intro-text heading="tiny?">
        <p>We’re all tiny. Tiny people on a tiny world in the vast expanse of everything - but within each of us is an endless universe - and that’s super cool.</p>
        <p>I trust myself, and go where I need to. For now I’d like to practice digital interface design. I find it challenging, stimulating and satisfying - hopefully I can also be of value to you and your ambitions.</p>
        <p class="u-margin-bottom-none">There’ll come a time that I need to pick my battle, as may be the duty of all able-minded beings, but for now I have much to learn, and a will to do so.</p>
      </c-intro-text>
      
      <l-wrapper>
        <h2>Current fantasies </br><span class="u-text--lowest-contrast">(subject to frequent change)</span></h2>
      </l-wrapper>

      <l-staggered-grid></l-staggered-grid>


      <l-wrapper>
        <h1>profile</h1>
        <h2>profile</h2>
        <h3>profile</h3>
        <h4 class="u-margin-bottom">profile</h4>
        <p>Testing testing testing</p>
        <p>Testing testing testing</p>
      </l-wrapper>

      <div class="_filler"></div>
    
    </l-main-content>

  </div>

</template>

<script>
  import cGridlines from '~/components/c-gridlines'
  import cHero from '~/components/c-hero'
  import cIntroText from '~/components/c-intro-text'
  import lWrapper from '~/components/layout/l-wrapper'
  import lMainContent from '~/components/layout/l-main-content'
  import lStaggeredGrid from '~/components/layout/l-staggered-grid'

  export default {
    scrollToTop: false,
    layout: 'default',
    components: {
      cGridlines,
      cHero,
      cIntroText,
      lWrapper,
      lMainContent,
      lStaggeredGrid
    }
  }

</script>

<style lang="scss" scoped>
  
  // Import variables and global settings
  @import "~assets/styles/imports";
  
  .p-profile {
    text-align: left;
  }

  ._filler {
    height: 2000px;
  }

</style>
