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
      <c-image
        :imageSrc="'trv-banners-gdn-05.gif'"
      />
    </c-box>

    <c-box :border="true" :filled="true" :padded="true">
      <c-image
        :imageSrc="'trv-banners-gdn-06.gif'"
      />
    </c-box>

    <c-box :border="true" :filled="true" :padded="true">
      <c-image
        :imageSrc="'trv-banners-gdn-04.gif'"
      />
    </c-box>

    <div class="o-text-section">
      <c-baselines></c-baselines>
      <l-wrapper size="sm">
        <h1 class="o-heading o-heading--gamma">Test</h1>
        <p class="o-text o-text--paragraph">jbasckjbavnba adsvba vmn aviosdnvk cnsbdi ahjd v lsvn akvuzdbvoa sk doivankj adv aoisnvkasd savioabdva dvaiodv ajdv ousv alvadvb apdv l vuosf vsv a</p>
      </l-wrapper>
      <l-wrapper>
        <c-code filename="test.json" :languages="['js']">
          <pre>
          function $initHighlight(block, cls) {
            try {
              if (cls.search(/\bno\-highlight\b/) != -1)
                return process(block, true, 0x0F) +
                      ` class="${cls}"`;
            } catch (e) {
              /* handle exception */
            }
            for (var i = 0 / 2; i < classes.length; i++) {
              if (checkCondition(classes[i]) === undefined)
                console.log('undefined');
            }
          }

          export  $initHighlight;
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
    </div>

    <c-box :border="true" :filled="true" :padded="true">
      <c-image
        :imageSrc="'trv-banners-gdn-05.gif'"
      />
    </c-box>

    <c-box :border="true" :filled="true" :padded="true">
      <c-image
        :imageSrc="'trv-banners-gdn-06.gif'"
      />
    </c-box>

    <c-box :border="true" :filled="true" :padded="true">
      <c-image
        :imageSrc="'trv-banners-gdn-04.gif'"
      />
    </c-box>

    <div class="o-text-section">
      <c-baselines></c-baselines>
    </div>

  </section>
</template>

<script>
import cCode from '~/components/c-code'
export default {
  components: {
    cCode
  }
}
</script>

<style lang="scss" scoped>
</style>
