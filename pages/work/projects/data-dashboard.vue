<template>
  <section>

    <div class="o-text-section">
      <c-baselines></c-baselines>
      <l-wrapper size="sm">
        <h1 class="o-heading o-heading--gamma">Test</h1>
        <p class="o-text o-text--paragraph">jbasckjbavnba adsvba vmn aviosdnvk cnsbdi ahjd v lsvn akvuzdbvoa sk doivankj adv aoisnvkasd savioabdva dvaiodv ajdv ousv alvadvb apdv l vuosf vsv a</p>
      </l-wrapper>
    </div>

    <c-box :border="true" :filled="true" :padded="true">
      <l-wrapper size="lg">
        <c-device-frame>
          <c-image
            :imageSrc="'socialcops/data-dashboard/001.jpg'"
          />
        </c-device-frame>
      </l-wrapper>
    </c-box>

    <c-box :border="true" :filled="true" :padded="true">
      <l-wrapper size="lg">
        <c-device-frame>
          <c-image
            :imageSrc="'socialcops/data-dashboard/002.jpg'"
          />
        </c-device-frame>
      </l-wrapper>
    </c-box>

    <c-box :border="true" :filled="true" :padded="true">
      <l-wrapper size="lg">
        <c-device-frame>
          <c-image
            :imageSrc="'socialcops/data-dashboard/003.jpg'"
          />
        </c-device-frame>
      </l-wrapper>
    </c-box>

    <c-box :border="true" :filled="true" :padded="true">
      <l-wrapper size="lg">
        <c-device-frame>
          <c-image
            :imageSrc="'socialcops/data-dashboard/004.jpg'"
          />
        </c-device-frame>
      </l-wrapper>
    </c-box>

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

<style lang="scss" scoped>
</style>
