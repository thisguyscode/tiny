<template>
  <section class="ogm-project-group">
    
    <div class="u-wrapper">

      <div class="__grid">
        
        <div class="__grid-cell-details">
          <mlc-project-group-details
            :index="index"
            :name="projectGroup.name"
            :logoSrc="projectGroup.logoSrc"
            :link="projectGroup.link"
            :descriptionMain="projectGroup.descriptionMain"
            :descriptionSub="projectGroup.descriptionSub"
          ></mlc-project-group-details>
        </div>
        
        <div class="__grid-cell-overview">
          <div :key="project.id" v-for="(project, index) in projectGroup.projects">
            <mlc-project-overview :index="index" :project="project" :color="project.color"></mlc-project-overview>
          </div>
        </div>

      </div><!--END __grid -->

    </div>
  
  </section>
</template>

<script>
import mlcProjectGroupDetails from '~components/molecules/mlc-project-group-details'
import mlcProjectOverview from '~components/molecules/mlc-project-overview'

export default {
  props: {
    index: {
      type: Number,
      required: true
    },
    projectGroup: {
      type: Object,
      required: true
    }
  },
  components: {
    mlcProjectGroupDetails,
    mlcProjectOverview
  }
}
</script>

<style lang="scss" scoped>

/* NOTES
** None
*/

/* Import project settings
   ====================================================================== */
@import "~assets/styles/imports/imports";


/* Local variables
   ====================================================================== */


/* Base component class
   ====================================================================== */
.ogm-project-group {
  padding: $unit-md;
  @include mq($from: desktop) {
    padding: $unit-xxl*2 $unit-md;
  }
}

/* --
   ====================================================================== */
.__grid {
  @include mq($from: mobile, $until: desktop) {
    flex-wrap: wrap;
  }
  display: flex;
}


.__grid-cell-overview {
  flex-basis: 66.6666%;
  // flex-grow: 1;
  // flex-shrink: 0;
}

.__grid-cell-details {
  flex-basis: 33.3333%;
  @include mq($from: desktop) {
    padding-right: $unit-xxl;
    // min-width: 300px;
  }
}

.__grid-cell-details,
.__grid-cell-overview {
  @include mq($from: mobile, $until: desktop) {
    flex-basis: 100%;
  }
}
</style>
