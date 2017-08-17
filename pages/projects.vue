<template>
  <section>
    
    <section class="__quote  u-box u-box--xxxl">
      <atm-blockquote>
        <p class="u-text--xl  u-text--heading-margin  u-text--bold">
          I make digital interfaces for humans.
        </p>
        <p class="u-text--xl  u-text--low-contrast">
          It&#39;s mostly putting text in boxes.
        </p>
      </atm-blockquote>
    </section>

    <div :key="projectGroup.id" v-for="(projectGroup, index) in projectGroups">
      <ogm-project-group :index="index" :projectGroup="projectGroup"></ogm-project-group>
    </div>

  </section>
</template>

<script>
import atmBlockquote from '~components/atoms/atm-blockquote.vue'
import ogmProjectGroup from '~components/organisms/ogm-project-group.vue'

export default {
  scrollToTop: false,
  layout: 'default',
  data: () => {
    return {
      projectGroups: [
        {
          name: 'SocialCops',
          logoSrc: require('~assets/images/logo-socialcops-dark.svg'),
          link: 'https://socialcops.com',
          descriptionMain: 'Based in Delhi (India), SocialCops is a young and abitious data start-up, operating largely in the social sector.',
          descriptionSub: 'They have managed to secure massive clients due to their dedication to what they call ‘Data Intelligence’ - using data effectively to glean valuable and actionable insights on a large scale. They are working on a web platform which covers the entire data pipeline, from collection to visualization. I was largely tasked with producing realistic product mockups for said platform for the corporate website, but also had a chance to work on their ‘Visualize’ product',
          projects: [
            {
              name: 'Project name goes here on 2 lines',
              linkTo: '/socialcops/data-dashboard',
              color: '#54A94A',
              date: 'May - Apr 2017',
              role: 'Product Designer',
              imgSrc: require('~assets/images/data-dashboard.jpg')
            },
            {
              name: 'Product mockups / screenshots',
              linkTo: '/socialcops/data-dashboard',
              color: '#5D92FD',
              date: 'May - Apr 2017',
              role: 'Product Designer',
              imgSrc: require('~assets/images/table.jpg')
            },
            {
              name: 'Product mockups / screenshots',
              linkTo: '/socialcops/data-dashboard',
              color: '#E95B3E',
              date: 'May - Apr 2017',
              role: 'Product Designer',
              imgSrc: require('~assets/images/color-generator.jpg')
            },
            {
              name: 'SCSS-based color palette generator',
              linkTo: '/socialcops/data-dashboard',
              color: '#66A604',
              date: 'May - Apr 2017',
              role: 'Product Designer',
              imgSrc: require('~assets/images/slider.jpg')
            }
          ]
        },
        {
          name: 'trivago',
          logoSrc: require('~assets/images/logo-trivago-color.svg'),
          link: 'https://trivago.co.uk',
          descriptionMain: 'trivago has built a remarkably successful hotel search engine, active in over 50 countries worldwide',
          descriptionSub: 'During my time with trivago I went from being a lowly intern designing and modifying web banners, to managing a small team of product designers for the core product. Key takeaways were an understanding of scalability and flexibility - for example leaving room for \u201Cbook now\u201D in over 30 languages',
          projects: [
            {
              name: 'Project name goes here on 2 lines',
              linkTo: '/socialcops/data-dashboard',
              color: '#A11216',
              date: 'May - Apr 2017',
              role: 'Product Designer',
              imgSrc: require('~assets/images/trv-ratings.jpg')
            },
            {
              name: 'Product mockups / screenshots',
              linkTo: '/socialcops/data-dashboard',
              color: '#1A759C',
              date: 'May - Apr 2017',
              role: 'Product Designer',
              imgSrc: require('~assets/images/trv-banners.jpg')
            },
            {
              name: 'Product mockups / screenshots',
              linkTo: '/socialcops/data-dashboard',
              color: '#DE760F',
              date: 'May - Apr 2017',
              role: 'Product Designer',
              imgSrc: require('~assets/images/trv-marathon.jpg')
            }
          ]
        },
        {
          name: 'Personal Projects',
          logoSrc: require('~assets/images/logo-glasses.svg'),
          descriptionMain: 'trivago has built a remarkably successful hotel search engine, active in over 50 countries worldwide',
          descriptionSub: 'During my time with trivago I went from being a lowly intern designing and modifying web banners, to managing a small team of product designers for the core product. Key takeaways were an understanding of scalability and flexibility - for example leaving room for \u201Cbook now\u201D in over 30 languages',
          projects: [
            {
              name: 'Project name goes here on 2 lines',
              linkTo: '/socialcops/data-dashboard',
              color: '#A11216',
              date: 'May - Apr 2017',
              role: 'Product Designer',
              imgSrc: require('~assets/images/trv-ratings.jpg')
            },
            {
              name: 'Product mockups / screenshots',
              linkTo: '/socialcops/data-dashboard',
              color: '#1A759C',
              date: 'May - Apr 2017',
              role: 'Product Designer',
              imgSrc: require('~assets/images/trv-banners.jpg')
            },
            {
              name: 'Product mockups / screenshots',
              linkTo: '/socialcops/data-dashboard',
              color: '#DE760F',
              date: 'May - Apr 2017',
              role: 'Product Designer',
              imgSrc: require('~assets/images/trv-marathon.jpg')
            }
          ]
        }
      ]
    }
  },
  components: {
    atmBlockquote,
    ogmProjectGroup
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
.page-projects {
}

/* --
   ====================================================================== */

.__quote {
  @include inner-border(bottom, 1px, low);
  background-color: $neutral-90;
  background-image: url('~assets/images/topography.svg');
  background-size: 100%;
  color: $neutral-00
}
</style>
