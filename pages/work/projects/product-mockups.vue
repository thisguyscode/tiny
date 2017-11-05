<template>
  <section>
    
    <div class="o-text-section">
      <c-baselines></c-baselines>
      <l-wrapper size="sm">
        <h1 class="o-heading o-heading--gamma">How I Learned to Stop Worrying and Love the Gif</h1>
        <p class="o-text o-text--paragraph">I was handed this project to try and complete in my first week at SocialCops and I ended up working on it throughout an entire year. I was tasked with producing quick feature demos for each of SocialCops' 4 products - which would be displayed on the website. I thought, &ldquo;sure, no problem - open up the product, take some screenshots, Bob's your uncle.&rdquo;...</p>
        <p class="o-text o-text--paragraph">How wrong I was. There were a few details that everyone (including myself) had overlooked.</p>
        <ol class="o-text o-text--paragraph">
          <li>Only 1 of the 4 products actually had a finished front-end UI</li>
          <li>I was supposed to promote features which weren't ready (even on that 1 live product)</li>
          <li>There were to be 3-6 product images per page - which could dramatically impact page performance</li>
          <li>I had never animated more than blinking buttons on web banners</li>
        </ol>
        <p class="o-text o-text--paragraph">Now there was nothing wrong with any of this. Startups and their employees need to wing-it a little, but this was certainly a case of optimistic time planning. I worked on many other things during the year at SocialCops, but I was working on some of these screenshots until just before I left.</p>
      </l-wrapper>
    </div>

    <div class="o-text-section">
      <c-baselines></c-baselines>
      <l-wrapper size="sm">
        <h1 class="o-heading o-heading--gamma">Collect</h1>
        <p class="o-text o-text--paragraph">Collect is billed as 'the most resilient data collection app' available. It works on low-cost Android phones and doesn't require an internet connection. It really is a fantastic product that fulfills a genuine need.</p>
      </l-wrapper>
    </div>

    <c-box :border="true" :filled="true" :padded="true" class="u-text--align-center">
      <l-wrapper size="lg">
        <c-device-frame>
          <c-image
            :imageSrc="'socialcops/product-mockups/collect-dashboard-desktop.jpg'"
          />
        </c-device-frame>
      </l-wrapper>
    </c-box>

    <c-box :border="true" :filled="true" :padded="true" class="u-text--align-center">
      <l-wrapper>
        <c-device-frame device="combo">
          <c-image
            slot="mobileImg"
            :imageSrc="'socialcops/product-mockups/collect-basic-mobile.gif'"
          />
          <c-image
            slot="desktopImg"
            :imageSrc="'socialcops/product-mockups/collect-builder-desktop.gif'"
          />
        </c-device-frame>
      </l-wrapper>
    </c-box>

    <c-box :border="true" :filled="true" :padded="true" class="u-text--align-center">
      <l-wrapper size="lg">
        <c-device-frame>
          <c-image
            :imageSrc="'socialcops/product-mockups/collect-validation-desktop.jpg'"
          />
        </c-device-frame>
      </l-wrapper>
    </c-box>

    <c-box :border="true" :filled="true" :padded="true" class="u-text--align-center">
      <l-wrapper>
        <c-device-frame device="combo">
          <c-image
            slot="mobileImg"
            :imageSrc="'socialcops/product-mockups/collect-skip-mobile.gif'"
          />
          <c-image
            slot="desktopImg"
            :imageSrc="'socialcops/product-mockups/collect-conditions-desktop.jpg'"
          />
        </c-device-frame>
      </l-wrapper>
    </c-box>

    <c-box :border="true" :filled="true" :padded="true" class="u-text--align-center">
      <l-wrapper size="lg">
        <l-grid spacing="lg">
          <div class="l-grid__cell  u-1/3@tablet">
            <c-device-frame device="mobile">
              <c-image
                :imageSrc="'socialcops/product-mockups/collect-flagging-mobile.jpg'"
              />
            </c-device-frame>
          </div>
          <div class="l-grid__cell  u-1/3@tablet">
            <c-device-frame device="mobile">
              <c-image
                :imageSrc="'socialcops/product-mockups/collect-monitoring-mobile.gif'"
              />
            </c-device-frame>
          </div>
          <div class="l-grid__cell  u-1/3@tablet">
            <c-device-frame device="mobile">
              <c-image
                :imageSrc="'socialcops/product-mockups/collect-location-mobile.gif'"
              />
            </c-device-frame>
          </div>
        </l-grid>
      </l-wrapper>
    </c-box>

    <c-box :border="true" :filled="true" :padded="true" class="u-text--align-center">
      <l-wrapper size="lg">
        <c-device-frame>
          <c-image
            :imageSrc="'socialcops/product-mockups/collect-data-desktop.gif'"
          />
        </c-device-frame>
      </l-wrapper>
    </c-box>

    <div class="o-text-section">
      <c-baselines></c-baselines>
      <l-wrapper size="sm">
        <h1 class="o-heading o-heading--gamma">Visualize</h1>
        <p class="o-text o-text--paragraph">This is SocialCops' data visualization platform. At the time of making these mockups SocialCops had already deployed quite a few data viz products, but each was custom built to specific clients / purposes. As a result they did not look to be the same product. I reworked them to tie them together visually.</p>
      </l-wrapper>
    </div>

    <c-box :border="true" :filled="true" :padded="true" class="u-text--align-center">
      <l-wrapper size="lg">
        <c-device-frame>
          <c-image
            :imageSrc="'socialcops/product-mockups/visualize-explore.gif'"
          />
        </c-device-frame>
      </l-wrapper>
    </c-box>
    <c-box :border="true" :filled="true" :padded="true" class="u-text--align-center">
      <l-wrapper size="lg">
        <c-device-frame>
          <c-image
            :imageSrc="'socialcops/product-mockups/visualize-compare.gif'"
          />
        </c-device-frame>
      </l-wrapper>
    </c-box>
    <c-box :border="true" :filled="true" :padded="true" class="u-text--align-center">
      <l-wrapper size="lg">
        <c-device-frame>
          <c-image
            :imageSrc="'socialcops/product-mockups/visualize-query.jpg'"
          />
        </c-device-frame>
      </l-wrapper>
    </c-box>
    <c-box :border="true" :filled="true" :padded="true" class="u-text--align-center">
      <l-wrapper size="lg">
        <c-device-frame>
          <c-image
            :imageSrc="'socialcops/product-mockups/visualize-kpi.jpg'"
          />
        </c-device-frame>
      </l-wrapper>
    </c-box>
    <c-box :border="true" :filled="true" :padded="true" class="u-text--align-center">
      <l-wrapper size="lg">
        <c-device-frame>
          <c-image
            :imageSrc="'socialcops/product-mockups/visualize-overview.gif'"
          />
        </c-device-frame>
      </l-wrapper>
    </c-box>

    <div class="o-text-section">
      <c-baselines></c-baselines>
      <l-wrapper size="sm">
        <h1 class="o-heading o-heading--gamma">Transform</h1>
        <p class="o-text o-text--paragraph">Transform is SocialCops' data cleaning product. It never had a front-end UI while I was there (at least not a client-facing one), but it was certainly being used by the data team on a regular basis. Given the complexity of the operations it performed, it was important to seriously simplify the mockups.</p>
      </l-wrapper>
    </div>

    <c-box :border="true" :filled="true" :padded="true" class="u-text--align-center">
      <l-wrapper size="lg">
        <c-device-frame>
          <c-image
            :imageSrc="'socialcops/product-mockups/transform-fuzzy.gif'"
          />
        </c-device-frame>
      </l-wrapper>
    </c-box>
    <c-box :border="true" :filled="true" :padded="true" class="u-text--align-center">
      <l-wrapper size="lg">
        <c-device-frame>
          <c-image
            :imageSrc="'socialcops/product-mockups/transform-location.gif'"
          />
        </c-device-frame>
      </l-wrapper>
    </c-box>
    <c-box :border="true" :filled="true" :padded="true" class="u-text--align-center">
      <l-wrapper size="lg">
        <c-device-frame>
          <c-image
            :imageSrc="'socialcops/product-mockups/transform-godzilla.gif'"
          />
        </c-device-frame>
      </l-wrapper>
    </c-box>
    <c-box :border="true" :filled="true" :padded="true" class="u-text--align-center">
      <l-wrapper size="lg">
        <c-device-frame>
          <c-image
            :imageSrc="'socialcops/product-mockups/transform-overview.gif'"
          />
        </c-device-frame>
      </l-wrapper>
    </c-box>
    <c-box :border="true" :filled="true" :padded="true" class="u-text--align-center">
      <l-wrapper size="lg">
        <c-device-frame>
          <c-image
            :imageSrc="'socialcops/product-mockups/transform-learning.gif'"
          />
        </c-device-frame>
      </l-wrapper>
    </c-box>

    <div class="o-text-section">
      <c-baselines></c-baselines>
      <l-wrapper size="sm">
        <h1 class="o-heading o-heading--gamma">Access</h1>
        <p class="o-text o-text--paragraph">SocialCops' data search tool. This was probably the least developed of the products, so all that was required was a over simplified version of the rough idea.</p>
      </l-wrapper>
    </div>

    <c-box :border="true" :filled="true" :padded="true" class="u-text--align-center">
      <l-wrapper size="lg">
        <c-device-frame>
          <c-image
            :imageSrc="'socialcops/product-mockups/access-overview.gif'"
          />
        </c-device-frame>
      </l-wrapper>
    </c-box>

  </section>
</template>

<script>
import cCode from '~/components/c-code'
import cDeviceFrame from '~/components/c-device-frame'
export default {
  components: {
    cCode,
    cDeviceFrame
  }
}
</script>

<style lang="scss" scoped>
</style>
