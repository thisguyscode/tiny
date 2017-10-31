<template>
  <section class="p-vertical-rhythm">
    <section class="p-vertical-rhythm__headings">
      <div class="o-heading o-heading--alpha">Heading Alpha</div>
      <div class="test-block"></div>
      <div class="o-heading o-heading--beta">Heading Beta</div>
      <div class="test-block"></div>
      <div class="o-heading o-heading--gamma">Heading Gamma</div>
      <div class="test-block"></div>
      <div class="o-heading o-heading--delta">Heading Delta</div>
      <div class="test-block"></div>
      <div class="o-heading o-heading--zeta">Heading Zeta</div>
    </section>
    <section class="p-vertical-rhythm__text">
      <div class="o-text o-text--xl">Text XL</div>
      <div class="test-block"></div>
      <div class="o-text o-text--lg">Text LG</div>
      <div class="test-block"></div>
      <div class="o-text">Text MD (default)</div>
      <div class="test-block"></div>
      <div class="o-text o-text--sm">Text SM</div>
      <div class="test-block"></div>
      <div class="o-text o-text--xs">Text XS</div>
    </section>
    <section class="p-vertical-rhythm__code">
      <div class="o-code o-code--sm">Code SM</div>
      <div class="test-block"></div>
      <div class="o-code">Code MD</div>
      <div class="test-block"></div>
      <div class="o-code o-code--lg">Code LG</div>
      <div class="test-block"></div>
    </section>
  </section>
</template>


<script>
export default {}
</script>


<style lang="scss" scoped>
.p-vertical-rhythm {
  text-align: left;
  padding-top: $unit-xxl;
  padding-bottom: $unit-xxl;
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
