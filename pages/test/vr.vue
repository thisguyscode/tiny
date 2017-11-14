<template>
  <section class="p-vertical-rhythm">
    <c-baselines :heavy="true"></c-baselines>
    <l-wrapper>
      <div class="o-grid o-grid--lg">
        <div class="o-grid__cell u-3/5@tablet">
          <section class="p-vertical-rhythm__headings">
            <div class="p-vertical-rhythm__section-heading o-text o-text--sm">HEADINGS</div>
            <div class="o-heading o-heading--alpha">Heading Alpha</div>
            <!-- <div class="test-block"></div> -->
            <div class="o-heading o-heading--beta">Heading Beta</div>
            <!-- <div class="test-block"></div> -->
            <div class="o-heading o-heading--gamma">Heading Gamma</div>
            <!-- <div class="test-block"></div> -->
            <div class="o-heading o-heading--delta">Heading Delta</div>
            <!-- <div class="test-block"></div> -->
            <div class="o-heading o-heading--zeta">Heading Zeta</div>
            <!-- <div class="test-block"></div> -->
          </section>
        </div>
        <div class="o-grid__cell u-1/5@tablet">
          <section class="p-vertical-rhythm__text">
            <div class="p-vertical-rhythm__section-heading o-text o-text--sm">TEXT</div>
            <div class="o-text o-text--xl">Text XL</div>
            <!-- <div class="test-block"></div> -->
            <div class="o-text o-text--lg">Text LG</div>
            <!-- <div class="test-block"></div> -->
            <div class="o-text">Text MD (default)</div>
            <!-- <div class="test-block"></div> -->
            <div class="o-text o-text--sm">Text SM</div>
            <!-- <div class="test-block"></div> -->
            <div class="o-text o-text--xs">Text XS</div>
            <!-- <div class="test-block"></div> -->
          </section>
        </div>
        <div class="o-grid__cell u-1/5@tablet">
          <section class="p-vertical-rhythm__code">
            <div class="p-vertical-rhythm__section-heading o-text o-text--sm">CODE</div>
            <div class="o-code o-code--sm">Code SM</div>
            <!-- <div class="test-block"></div> -->
            <div class="o-code">Code MD</div>
            <!-- <div class="test-block"></div> -->
            <div class="o-code o-code--lg">Code LG</div>
            <!-- <div class="test-block"></div> -->
          </section>
        </div>
      </div>
    </l-wrapper>
  </section>
</template>


<script>
export default {}
</script>


<style lang="scss" scoped>

.p-vertical-rhythm {
  position: relative;
  text-align: left;
  padding-top: $unit-xxl;
  padding-bottom: $unit-xxl;
  // height: 100;
  background-color: #f05d5e;
  color: contrasting-color(#f05d5e, $lightest, $darkest);
}
.p-vertical-rhythm__section-heading {
  display: none;
  color: $neutral-60;
  font-weight: $font-weight-bold;
}
.test-block {
  position: relative;
  opacity: .4;
  margin-bottom: $unit-sm;
  display: block;
  height: $unit-md;
  background-color: $red;
  box-sizing: padding-box;
  border-top: 1px solid white;
}

</style>
