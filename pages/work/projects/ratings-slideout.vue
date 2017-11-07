<template>
  <section>

    <div class="o-text-section">
      <c-baselines></c-baselines>
      <l-wrapper size="sm">
        <h1 class="o-heading o-heading--gamma">Rating Overview</h1>
        <p class="o-text o-text--paragraph">Perhaps most important (at least most viewed) would be the rating overview. It needed to give a quick impression of the hotels quality, but also the credibility of its score (how many reviews it has received and where the scores are coming from)</p>
        <p class="o-text o-text--paragraph">N.B. The color/score relationship was in flux at the time so there may be some visual inconsistencies.</p>
      </l-wrapper>
    </div>

    <c-box :border="true" :filled="true" :padded="true">
      <l-wrapper size="lg">
        <c-image
          class="u-margin-bottom-sm"
          :imageSrc="'trivago/ratings-slideout/overview-desktop.png'"
        />
      </l-wrapper>
      <p class="c-box__caption o-text o-text--sm">Desktop - High Score</p>
    </c-box>

    <c-box :border="true" :filled="true" :padded="true">
      <l-wrapper size="lg">
        <c-image
          class="u-margin-bottom-sm"
          :imageSrc="'trivago/ratings-slideout/overview-limited-desktop.png'"
        />
      </l-wrapper>
      <p class="c-box__caption o-text o-text--sm">Desktop - Poor Score</p>
    </c-box>

    <c-box :border="true" :filled="true" :padded="true">
      <l-wrapper size="lg">
        <c-image
          class="u-margin-bottom-sm"
          :imageSrc="'trivago/ratings-slideout/overview-mobile.png'"
        />
      </l-wrapper>
      <p class="c-box__caption o-text o-text--sm">Mobile - High Score</p>
    </c-box>

    <div class="o-text-section">
      <c-baselines></c-baselines>
      <l-wrapper size="sm">
        <h1 class="o-heading o-heading--gamma">Review Analysis</h1>
        <p class="o-text o-text--paragraph">While qualitative reviews (see below) were by far the most influential on users - the review analysis was essential for quick comparison and short listing of the options.</p>
      </l-wrapper>
    </div>

    <c-box :border="true" :filled="true" :padded="true">
      <l-wrapper size="lg">
        <l-grid spacing="lg" vertical="middle">
          <div class="l-grid__cell u-2/3@desktop">
            <c-image
              :imageSrc="'trivago/ratings-slideout/review-analysis-desktop.png'"
            />
          </div>
          <div class="l-grid__cell u-1/3@desktop">
            <c-image
              :imageSrc="'trivago/ratings-slideout/analysis-mobile.png'"
            />
          </div>
        </l-grid>
      </l-wrapper>
    </c-box>

    <div class="o-text-section">
      <c-baselines></c-baselines>
      <l-wrapper size="sm">
        <h1 class="o-heading o-heading--gamma">Reviews</h1>
        <p class="o-text o-text--paragraph">Qualitative reviews seem to be one of the most influential factors in promoting a hotel. When in comes to something as subjective as quality we tend to trust people more than algorithms.</p>
      </l-wrapper>
    </div>

    <c-box :border="true" :filled="true" :padded="true">
      <l-wrapper size="lg">
        <l-grid spacing="lg" vertical="middle">
          <div class="l-grid__cell u-2/3@desktop">
            <c-image
              :imageSrc="'trivago/ratings-slideout/reviews-desktop.png'"
            />
          </div>
          <div class="l-grid__cell u-1/3@desktop">
            <c-image
              :imageSrc="'trivago/ratings-slideout/reviews-mobile.png'"
            />
          </div>
        </l-grid>
      </l-wrapper>
    </c-box>

    <div class="o-text-section">
      <c-baselines></c-baselines>
      <l-wrapper size="sm">
        <h1 class="o-heading o-heading--gamma">Meta-reviews</h1>
        <p class="o-text o-text--paragraph">trivago was able to collate multiple qualitative reviews into concise snippets. I've since seen this elsewhere across the web.</p>
      </l-wrapper>
    </div>

    <c-box :border="true" :filled="true" :padded="true">
      <l-wrapper size="lg">
        <l-grid spacing="lg" vertical="middle">
          <div class="l-grid__cell u-2/3@desktop">
            <c-image
              :imageSrc="'trivago/ratings-slideout/meta-desktop.png'"
            />
          </div>
          <div class="l-grid__cell u-1/3@desktop">
            <c-image
              :imageSrc="'trivago/ratings-slideout/meta-mobile.png'"
            />
          </div>
        </l-grid>
      </l-wrapper>
    </c-box>

    <div class="o-text-section">
      <c-baselines></c-baselines>
      <l-wrapper size="sm">
        <h1 class="o-heading o-heading--gamma">Hotel Test</h1>
         <p class="o-text o-text--paragraph">Hotel Test was trivago's own reviewing system, whereby hotel-goers were given significant discounts on their hotel for leaving a thorough review. I'm not sure that the Hotel Test results were ever featured on mobile... I certainly never worked on a mobile composition.</p>
      </l-wrapper>
    </div>

    <c-box :border="true" :filled="true" :padded="true">
      <l-wrapper size="lg">
        <c-image
          :imageSrc="'trivago/ratings-slideout/hotel-test-desktop.png'"
        />
      </l-wrapper>
    </c-box>


  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
</style>
