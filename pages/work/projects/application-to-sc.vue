<template>
  <section>
    <div class="o-text-section">
      <c-baselines></c-baselines>
      <l-wrapper size="sm">
        <h1 class="o-heading o-heading--gamma">A Quick Week</h1>
        <p class="o-text o-text--paragraph">When SocialCops set me a design task as part of my application, I had just received an offer from another company. I told SC, &ldquo;Hey, I really want to work for you but <em>'a bird in the hand'</em> and all that, so can we try to speed this application along please?&rdquo; - to which they said &ldquo;sure!&rdquo; and proceeeded to throw these couple of tasks at me with the promise that they'd review them as soon as I finished them. I didn't sleep much for the next 3 days. Here's the result.</p>
      </l-wrapper>
    </div>

    <div class="o-text-section">
      <c-baselines></c-baselines>
      <l-wrapper size="sm">
        <h1 class="o-heading o-heading--gamma">Right to Education</h1>
        <p class="o-text o-text--paragraph">They asked me to take some data from <f-link externalLink="https://rte.socialcops.org/" :inline="true">this dashboard</f-link> of theirs, and produce whatever I like with it... given that I consider myself more of a product designer I quickly polished up the UI first - nothing crazy just some quick wins.</p>
      </l-wrapper>
    </div>

    <c-box :border="true" :filled="true" :padded="true">
      <l-wrapper size="lg" class="u-text--align-center">
        <c-device-frame class="u-margin-bottom-sm">
          <c-image
            :imageSrc="'socialcops/application-to-sc/map-before.jpg'"
          />
        </c-device-frame>
        <p class="o-text">(Before)</p>
      </l-wrapper>
    </c-box>

    <c-box :border="true" :filled="true" :padded="true">
      <l-wrapper size="lg" class="u-text--align-center">
        <c-device-frame class="u-margin-bottom-sm">
          <c-image
            :imageSrc="'socialcops/application-to-sc/map-after.jpg'"
          />
        </c-device-frame>
        <p class="o-text">(After)</p>
      </l-wrapper>
    </c-box>

    <div class="o-text-section">
      <c-baselines></c-baselines>
      <l-wrapper size="sm">
        <!-- <h1 class="o-heading o-heading--gamma">Now the task at hand</h1> -->
        <p class="o-text o-text--paragraph">On to the actual task... to present some data from the dashboard in an interesting manner. Again I stuck to what I know and went 'web'. Check out the live demo <f-link externalLink="https://thisguyscode.github.io/rte-comparison/" :inline="true">here.</f-link> The idea was that it could feature a selection of the top insights from the dashboard and serve as a shareable promotion piece. I just took one insight given the time contraint but it was enough to illustrate the concept.</p>
      </l-wrapper>
    </div>

    <c-box :border="true" :filled="true" :padded="true">
      <l-wrapper size="lg" class="u-text--align-center">
        <c-device-frame class="u-margin-bottom-sm">
          <c-image
            :imageSrc="'socialcops/application-to-sc/rte-comparison.jpg'"
          />
        </c-device-frame>
      </l-wrapper>
    </c-box>

    <div class="o-text-section">
      <c-baselines></c-baselines>
      <l-wrapper size="sm">
        <h1 class="o-heading o-heading--gamma">World Malaria Day</h1>
        <p class="o-text o-text--paragraph">The Right to Education task seemed to please the powers that be enough, so they set me another task. They wanted to see my graphicky-type-skills (which are to this day admittedly lacking), so they asked me to do something infographicky related to World Malaria Day, again with very little in the way of restrictions or suggestions. So I took a handful of facts, made some accompanying illustrations, and used them in 3 different media:</p>
        <ol class="o-text o-text--paragraph">
          <li>An infographic - intended for sharing on social media (see below)</li>
          <li><f-link externalLink="https://thisguyscode.github.io/malaria/" :inline="true">A microsite</f-link> (of course)</li>
          <li><f-link externalLink="/files/SocialCops-Malaria.pdf" :inline="true">A printable PDF</f-link></li>
        </ol>
      </l-wrapper>
    </div>

    <c-box :border="true" :filled="true" :padded="true">
      <l-wrapper size="sm" class="u-text--align-center">
        <c-image
          :imageSrc="'socialcops/application-to-sc/infographic.jpg'"
        />
      </l-wrapper>
    </c-box>

    <div class="o-text-section">
      <c-baselines></c-baselines>
      <l-wrapper size="sm">
        <!-- <h1 class="o-heading o-heading--gamma">Now the task at hand</h1> -->
        <p class="o-text">A month later I was in India doing design stuff...</p>
      </l-wrapper>
    </div>

  </section>
</template>

<script>
import cDeviceFrame from '~/components/c-device-frame'
export default {
  components: {
    cDeviceFrame
  }
}
</script>

<style>

</style>
