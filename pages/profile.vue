<template>

  <div class="p-profile">
  
    <c-hero bgImageSrc="chn-shanghai_02.jpg">
      <h1 class="o-heading o-heading--alpha">I'm <span class="u-text--lowest-contrast">./</span>tiny<span class="u-text--lowest-contrast">/</span></h1>
      <h1 class="o-heading o-heading--alpha">(I have no idea what I'm doing)</h1>
    </c-hero>

    <l-main-content>
      
      <c-intro-text heading="tiny?">
        <p>We’re all tiny. Tiny people on a tiny world in the vast expanse of everything - but within each of us is an endless universe - and that’s super cool.</p>
        <p>I trust myself, and go where I need to. For now I’d like to practice digital interface design. I find it challenging, stimulating and satisfying - hopefully I can also be of value to you and your ambitions.</p>
        <p class="u-margin-bottom-none">There’ll come a time that I need to pick my battle, as may be the duty of all able-minded beings, but for now I have much to learn, and a will to do so.</p>
      </c-intro-text>

      
      <div id="trigger">
        <!-- Project Nav -->
        <l-affix
          :z="999"
          fullWidth
          :relativeElementSelector="'#trigger'"
        >
          <template scope="props" slot="contents">
            <c-profile-navbar></c-profile-navbar>
          </template>
        </l-affix>
      
        <l-wrapper class="content">

          <section class="hard-skills" id="hard-skills">
            <h2 class="u-margin-bottom-none">Hard skills</h2>
            <p class="u-text--low-contrast">Completely arbitrary ratings scores for my skills</p>
            
            <section class="skills-design-section">
              <h3 class="skills-subheading">Design:</h3>

              <l-grid>

                <!-- 1 -->
                <div class="skill-item-cell _cell u-2/5@tablet u-1/5@desktop">
                  <div class="skill-icon-wrapper ps software">
                    <span class="skill-icon-text">Ps</span>
                  </div>
                  <div class="skill-label">
                    <div class="software-name">Photoshop</div>
                    <div class="software-company">Adobe</div>
                  </div>
                  <c-score-bar :percent="80" :of="10"></c-score-bar>
                  <p class="skill-caption">Highly proficient when working on interfaces. Able to produce complex GIFs and understand fine pixel manipulation. Could learn more about photo editing.</p>
                </div>
                
                <!-- spacer -->
                <div class="_cell u-1/5@tablet"></div>

                <!-- 2 -->
                <div class="skill-item-cell _cell u-2/5@tablet u-1/5@desktop">
                  <div class="skill-icon-wrapper ai software">
                    <span class="skill-icon-text">Ai</span>
                  </div>
                  <div class="skill-label">
                    <div class="software-name">Illustrator</div>
                    <div class="software-company">Adobe</div>
                  </div>
                  <c-score-bar :percent="60" :of="10"></c-score-bar>
                  <p class="skill-caption">Though I'm perfectly familiar with Illustrator and most of its tools, I lack the ability to use it to its full potential (given that I lack the sufficient illustration skill)</p>
                </div>

                <!-- spacer -->
                <div class="_cell u-1/5@tablet"></div>

                <!-- 3 -->
                <div class="skill-item-cell _cell u-2/5@tablet u-1/5@desktop">
                  <div class="skill-icon-wrapper id software">
                    <span class="skill-icon-text">Id</span>
                  </div>
                  <div class="skill-label">
                    <div class="software-name">InDesign</div>
                    <div class="software-company">Adobe</div>
                  </div>
                  <c-score-bar :percent="50" :of="10"></c-score-bar>
                  <p class="skill-caption">Proficient in the fundamentals and able to learn new tools quickly. Understand basics of print-preparation</p>
                </div>

                <!-- spacer -->
                <div class="_cell u-1/5@tablet"></div>

                <!-- 4 -->
                <div class="skill-item-cell _cell u-2/5@tablet u-1/5@desktop">
                  <div class="skill-icon-wrapper software u-padding-none">
                    <c-image
                      :makeResponsive="false"
                      :lazy="false"
                      imageSrc="logo-sketch.png"
                    />
                  </div>
                  <div class="skill-label">
                    <div class="software-name">Sketch</div>
                    <div class="software-company">Bohemian Coding</div>
                  </div>
                  <c-score-bar :percent="60" :of="10"></c-score-bar>
                  <p class="skill-caption">Mostly familiar with the possibilities and best practices but don't yet make full use of the more complex features and plugins</p>
                </div>

                <!-- spacer -->
                <div class="_cell u-1/5@tablet"></div>

                <!-- 5 -->
                <div class="skill-item-cell _cell u-2/5@tablet u-1/5@desktop">
                  <div class="skill-icon-wrapper software u-padding-none">
                    <c-image
                      :makeResponsive="false"
                      :lazy="false"
                      imageSrc="logo-invision.svg"
                    />
                  </div>
                  <div class="skill-label">
                    <div class="software-name">InVision</div>
                    <div class="software-company">InVision</div>
                  </div>
                  <c-score-bar :percent="80" :of="10"></c-score-bar>
                  <p class="skill-caption">Familiar with almost the entirety of this product, though I imagine with their new Sketch integrations I'll have a lot to learn</p>
                </div>

              </l-grid>
            </section>

            <section>
              <h3 class="skills-subheading">Code:</h3>

              <l-grid>

                <!-- 1 -->
                <div class="skill-item-cell _cell u-2/5@tablet u-1/5@desktop">
                  <div class="skill-icon-wrapper software u-padding-none">
                    <c-icon name="css3" class="skill-icon"></c-icon>
                  </div>
                  <div class="skill-label">
                    <div class="software-name">CSS3</div>
                    <c-score-bar :nobar="true" :percent="80" :of="10"></c-score-bar>
                  </div>
                  <p class="skill-caption">Understand the full specification and best practices for implementation, including project structure</p>
                </div>
                
                <!-- spacer -->
                <div class="_cell u-1/5@tablet"></div>

                <!-- 2 -->
                <div class="skill-item-cell _cell u-2/5@tablet u-1/5@desktop">
                  <div class="skill-icon-wrapper software u-padding-none">
                    <c-image
                      :makeResponsive="false"
                      :lazy="false"
                      :imageSrc="'logo-scss.png'"
                    />
                  </div>
                  <div class="skill-label">
                    <div class="software-name">SCSS</div>
                    <c-score-bar :nobar="true" :percent="60" :of="10"></c-score-bar>
                  </div>
                  <p class="skill-caption">Can implement solid SCSS structure which generates clean CSS. Have a lot to learn regarding 'Sass functions'</p>
                </div>

                <!-- spacer -->
                <div class="_cell u-1/5@tablet"></div>

                <!-- 3 -->
                <div class="skill-item-cell _cell u-2/5@tablet u-1/5@desktop">
                  <div class="skill-icon-wrapper software u-padding-none">
                    <c-icon name="html5" class="skill-icon"></c-icon>
                  </div>
                  <div class="skill-label">
                    <div class="software-name">HTML5</div>
                    <c-score-bar :nobar="true" :percent="80" :of="10"></c-score-bar>
                  </div>
                  <p class="skill-caption">No &lt;div&gt; soup with me. I understand the importance of semantic markup</p>
                </div>

                <!-- spacer -->
                <div class="_cell u-1/5@tablet"></div>

                <!-- 4 -->
                <div class="skill-item-cell _cell u-2/5@tablet u-1/5@desktop">
                  <div class="skill-icon-wrapper skill-icon-wrapper-landscape software u-padding-none">
                    <c-image
                      :makeResponsive="false"
                      :lazy="false"
                      :imageSrc="'logo-npm.png'"
                    />
                  </div>
                  <div class="skill-label">
                    <div class="software-name">npm</div>
                    <c-score-bar :nobar="true" :percent="60" :of="10"></c-score-bar>
                  </div>
                  <p class="skill-caption">Not masses to know about Node Package Manager, but I know a good deal of it.</p>
                </div>

                <!-- spacer -->
                <div class="_cell u-1/5@tablet"></div>

                <!-- 5 -->
                <div class="skill-item-cell _cell u-2/5@tablet u-1/5@desktop">
                  <div class="skill-icon-wrapper software u-padding-none">
                    <c-image
                      :makeResponsive="false"
                      :lazy="false"
                      :imageSrc="'logo-gulp.png'"
                    />
                  </div>
                  <div class="skill-label">
                    <div class="software-name">Gulp</div>
                    <c-score-bar :nobar="true" :percent="30" :of="10"></c-score-bar>
                  </div>
                  <p class="skill-caption">I can throw together a basic Gulp build process. Recently started exploring Gulp 4.0</p>
                </div>

                <!-- spacer -->
                <div class="_cell u-1/5@tablet"></div>

                <div class="skill-item-cell _cell u-2/5@tablet u-1/5@desktop">
                  <div class="skill-icon-wrapper software u-padding-none">
                    <c-icon name="git" class="skill-icon"></c-icon>
                  </div>
                  <div class="skill-label">
                    <div class="software-name">git</div>
                    <c-score-bar :nobar="true" :percent="40" :of="10"></c-score-bar>
                  </div>
                  <p class="skill-caption">I adore git. I'm no pro, but it's one fo the tools I appreciate the most.</p>
                </div>

                <!-- spacer -->
                <div class="_cell u-1/5@tablet"></div>

                <div class="skill-item-cell _cell u-2/5@tablet u-1/5@desktop">
                  <div class="skill-icon-wrapper software u-padding-none">
                    <c-icon name="github" class="skill-icon"></c-icon>
                  </div>
                  <div class="skill-label">
                    <div class="software-name">github</div>
                    <c-score-bar :nobar="true" :percent="40" :of="10"></c-score-bar>
                  </div>
                  <p class="skill-caption">Similarly to git, I am not a pro, but know enough to collaborate with your dev team</p>
                </div>

                <!-- spacer -->
                <div class="_cell u-1/5@tablet"></div>

                <div class="skill-item-cell _cell u-2/5@tablet u-1/5@desktop">
                  <div class="skill-icon-wrapper software u-padding-none">
                    <c-image
                      :makeResponsive="false"
                      :lazy="false"
                      :imageSrc="'logo-js5.png'"
                    />
                  </div>
                  <div class="skill-label">
                    <div class="software-name">Javascript</div>
                    <c-score-bar :nobar="true" :percent="20" :of="10"></c-score-bar>
                  </div>
                  <p class="skill-caption">I really haven't had the chance to learn the fundamentals of Javascript yet, despite having used and modified JS code often.</p>
                </div>

                <!-- spacer -->
                <div class="_cell u-1/5@tablet"></div>

                <div class="skill-item-cell _cell u-2/5@tablet u-1/5@desktop">
                  <div class="skill-icon-wrapper software u-padding-none">
                    <c-image
                      :makeResponsive="false"
                      :lazy="false"
                      :imageSrc="'logo-vue.png'"
                    />
                  </div>
                  <div class="skill-label">
                    <div class="software-name">Vue</div>
                    <c-score-bar :nobar="true" :percent="40" :of="10"></c-score-bar>
                  </div>
                  <p class="skill-caption">Despite my lack of Javascript knowledge I've been able to get familiar with many other aspects of the Vue.js framework</p>
                </div>

              </l-grid>
            </section>


          </section><!--END hard skills section -->
          

          <section class="soft-skills" id="soft-skills">
            <h2 class="soft-skills-heading">Soft skills</h2>
            
            <section class="skills-good">
              <h3 class="skills-subheading">Pretty damn good at:</h3>

              <l-grid>

                <!-- 1 -->
                <div class="skill-item-cell _cell u-2/5@tablet u-1/5@desktop">
                  <l-grid>
                    <div class="skill-icon-cell _cell u-1/5 u-1/1@tablet">
                      <div class="skill-icon-wrapper comment">
                        <c-icon class="skill-icon" name="comments"></c-icon>
                      </div>
                    </div>
                    <div class="_cell u-4/5 u-1/1@tablet">
                      <h4 class="skill-heading u-margin-bottom-none">Written & verbal communication</h4>
                      <p class="skill-caption">...but only in English</p>
                    </div>
                  </l-grid>
                </div>
                
                <!-- spacer -->
                <div class="_cell u-1/5@tablet"></div>

                <!-- 2 -->
                <div class="skill-item-cell _cell u-2/5@tablet u-1/5@desktop">
                  <l-grid>
                    <div class="skill-icon-cell _cell u-1/5 u-1/1@tablet">
                      <div class="skill-icon-wrapper bulb">
                        <c-icon class="skill-icon" name="lightbulb-o"></c-icon>
                      </div>
                    </div>
                    <div class="_cell u-4/5 u-1/1@tablet">
                      <h4 class="skill-heading u-margin-bottom-none">Common-sense design</h4>
                      <p class="skill-caption">Designing without data is underrated</p>
                    </div>
                  </l-grid>
                </div>

                <!-- spacer -->
                <div class="_cell u-1/5@tablet"></div>

                <!-- 3 -->
                <div class="skill-item-cell _cell u-2/5@tablet u-1/5@desktop">
                  <l-grid>
                    <div class="skill-icon-cell _cell u-1/5 u-1/1@tablet">
                      <div class="skill-icon-wrapper mouse">
                        <c-icon class="skill-icon" name="mouse-pointer"></c-icon>
                      </div>
                    </div>
                    <div class="_cell u-4/5 u-1/1@tablet">
                      <h4 class="skill-heading u-margin-bottom-none">'User' interface design</h4>
                      <p class="skill-caption">I prefer 'screen' interface design - every interface is a user interface</p>
                    </div>
                  </l-grid>
                </div>

                <!-- spacer -->
                <div class="_cell u-1/5@tablet"></div>

                <!-- 4 -->
                <div class="skill-item-cell _cell u-2/5@tablet u-1/5@desktop">
                  <l-grid>
                    <div class="skill-icon-cell _cell u-1/5 u-1/1@tablet">
                      <div class="skill-icon-wrapper hourglass">
                        <c-icon class="skill-icon" name="hourglass-2"></c-icon>
                      </div>
                    </div>
                    <div class="_cell u-4/5 u-1/1@tablet">
                      <h4 class="skill-heading u-margin-bottom-none">Optimising processes</h4>
                      <p class="skill-caption">I'll put in the time now to save someone else it in the future</p>
                    </div>
                  </l-grid>
                </div>

                <!-- spacer -->
                <div class="_cell u-1/5@tablet"></div>

                <!-- 5 -->
                <div class="skill-item-cell _cell u-2/5@tablet u-1/5@desktop">
                  <l-grid>
                    <div class="skill-icon-cell _cell u-1/5 u-1/1@tablet">
                      <div class="skill-icon-wrapper puzzle">
                        <c-icon class="skill-icon" name="puzzle-piece"></c-icon>
                      </div>
                    </div>
                    <div class="_cell u-4/5 u-1/1@tablet">
                      <h4 class="skill-heading u-margin-bottom-none">System-mindedness</h4>
                      <p class="skill-caption">Making things that play nice with other things</p>
                    </div>
                  </l-grid>
                </div>

                <!-- spacer -->
                <div class="_cell u-1/5@tablet"></div>

                <!-- 6 -->
                <div class="skill-item-cell _cell u-2/5@tablet u-1/5@desktop">
                  <l-grid>
                    <div class="skill-icon-cell _cell u-1/5 u-1/1@tablet">
                      <div class="skill-icon-wrapper heart">
                        <c-icon class="skill-icon" name="heart"></c-icon>
                      </div>
                    </div>
                    <div class="_cell u-4/5 u-1/1@tablet">
                      <h4 class="skill-heading u-margin-bottom-none">Empathising</h4>
                      <p class="skill-caption">Absolutely essential for a designer</p>
                    </div>
                  </l-grid>
                </div>

              </l-grid>
            </section>
            
            <section class="skills-not-bad">

              <h3 class="subskill-subheading">Not bad at:</h3>
              <l-grid>

                <div class="_cell u-2/5@tablet u-1/5@desktop">
                  <span class="subskill">
                    <c-icon class="subskill-icon" name="user-circle"></c-icon>
                    <span class="subskill-caption">User experience design</span>
                  </span>
                </div>

                <div class="subskill-spacer u-1/5"></div>

                <div class="_cell u-2/5@tablet u-1/5@desktop">
                  <span class="subskill">
                    <c-icon class="subskill-icon" name="bar-chart"></c-icon>
                    <span class="subskill-caption">Data-informed design</span>
                  </span>
                </div>

                <div class="_cell u-2/5@tablet u-1/5@desktop">
                  <span class="subskill">
                    <c-icon class="subskill-icon" name="pied-piper"></c-icon>
                    <span class="subskill-caption">Branding</span>
                  </span>
                </div>

                <div class="subskill-spacer u-1/5"></div>
                
                <div class="_cell u-2/5@tablet u-1/5@desktop">
                  <span class="subskill">
                    <c-icon class="subskill-icon" name="pencil"></c-icon>
                    <span class="subskill-caption">Prototyping</span>
                  </span>
                </div>
                <div class="_cell u-2/5@tablet u-1/5@desktop">
                  <span class="subskill">
                    <c-icon class="subskill-icon" name="bullhorn"></c-icon>
                    <span class="subskill-caption">Presentation</span>
                  </span>
                </div>
              </l-grid>
            </section>
          </section><!--END soft skills section -->
          
          <section class="testimonials" id="testimonials">
            <c-testimonials :testimonials="testimonials"></c-testimonials>
          </section>

          <section class="process" id="process">

          </section>

          <section class="fantasies" id="fantasies">
            <h2>Current fantasies </br><span class="u-text--lowest-contrast">(subject to frequent change)</span></h2>

            <l-grid>

              <!-- 1 -->
              <div class="fantasy-item-cell _cell u-2/5@tablet u-1/5@desktop">
                <l-grid>
                  <div class="fantasy-icon-cell _cell u-2/5 u-1/1@tablet">
                    <div class="fantasy-icon-wrapper money">
                      <c-icon class="fantasy-icon" name="money"></c-icon>
                    </div>
                  </div>
                  <!-- <div class="_cell u-1/5 u-1/2@tablet u-1/1@desktop">
                    <h4 class="item-heading">Title</h4>
                  </div> -->
                  <div class="_cell u-3/5 u-1/1@tablet">
                    <p class="fantasy-caption">Help to usher in a practical alternative to (not replacement for) the traditional market economy</p>
                  </div>
                </l-grid>
              </div>
              
              <!-- spacer -->
              <div class="_cell u-1/5@tablet"></div>

              <!-- 2 -->
              <div class="fantasy-item-cell _cell u-2/5@tablet u-1/5@desktop">
                <l-grid>
                  <div class="fantasy-icon-cell _cell u-2/5 u-1/1@tablet">
                    <div class="fantasy-icon-wrapper home">
                      <c-icon class="fantasy-icon" name="home"></c-icon>
                    </div>
                  </div>
                  <!-- <div class="_cell u-1/5 u-1/2@tablet u-1/1@desktop">
                    <h4 class="item-heading">Title</h4>
                  </div> -->
                  <div class="_cell u-3/5 u-1/1@tablet">
                    <p class="fantasy-caption">Build my own house using earth/eco building methods</p>
                  </div>
                </l-grid>
              </div>

              <!-- spacer -->
              <div class="_cell u-1/5@tablet"></div>

              <!-- 3 -->
              <div class="fantasy-item-cell _cell u-2/5@tablet u-1/5@desktop">
                <l-grid>
                  <div class="fantasy-icon-cell _cell u-2/5 u-1/1@tablet">
                    <div class="fantasy-icon-wrapper fire">
                      <c-icon class="fantasy-icon" name="fire"></c-icon>
                    </div>
                  </div>
                  <!-- <div class="_cell u-1/5 u-1/2@tablet u-1/1@desktop">
                    <h4 class="item-heading">Title</h4>
                  </div> -->
                  <div class="_cell u-3/5 u-1/1@tablet">
                    <p class="fantasy-caption">Learn to forge high-quality kitchen knives</p>
                  </div>
                </l-grid>
          
              </div>

            </l-grid>
          </section><!--END fantasies section -->


        </l-wrapper>
      </div>

      <section>
        <c-cta-panel
          mainCtaHeading="Want to see what I can do?"
          mainCtaBodyText="I’ve not been in the tech industry long, but in this short time I’ve had the chance to work on some cracking projects."
          mainCtaButton="work"
          subCtaHeading="Or get in touch!"
          subCtaButton="contact">
        </c-cta-panel>
      </section>
    
    </l-main-content>

  </div>

</template>

<script>
  import cGridlines from '~/components/c-gridlines'
  import cTestimonials from '~/components/c-testimonials'
  import cScoreBar from '~/components/c-score-bar'
  import cHero from '~/components/c-hero'
  import cIcon from '~/components/c-icon'
  import cCtaPanel from '~/components/c-cta-panel'
  import cProfileNavbar from '~/components/c-profile-navbar'
  import cIntroText from '~/components/c-intro-text'
  import lWrapper from '~/components/layout/l-wrapper'
  import lGrid from '~/components/layout/l-grid'
  import lAffix from '~/components/layout/l-affix'
  import lMainContent from '~/components/layout/l-main-content'
  import lStaggeredGrid from '~/components/layout/l-staggered-grid'

  export default {
    layout: 'default',
    components: {
      cGridlines,
      cTestimonials,
      cProfileNavbar,
      cHero,
      cIcon,
      cScoreBar,
      cIntroText,
      cCtaPanel,
      lWrapper,
      lAffix,
      lGrid,
      lMainContent,
      lStaggeredGrid
    },
    data: () => {
      return {
        testimonials: [
          {
            name: 'Dejan Ulcej',
            company: 'trivago',
            role: 'Product Designer',
            character: 'topography.svg',
            quote: 'Rerum voluptatem minima distinctio. Fugit odio qui repudiandae architecto omnis adipisci. Quo fuga aut nostrum. Reiciendis nihil vero praesentium non. Perferendis cupiditate impedit ipsum tenetur.'
          },
          {
            name: 'Dan Ardenleneu',
            company: 'trivago',
            role: 'Product Designer',
            character: 'topography.svg',
            quote: 'Hic mollitia temporibus iure nemo voluptatem. Eveniet non iusto cupiditate odio. Perferendis corrupti quia saepe. Ex aperiam neque sunt reprehenderit numquam voluptatum non accusantium.'
          },
          {
            name: 'Someone Else',
            company: 'trivago',
            role: 'Product Designer',
            character: 'topography.svg',
            quote: 'Eos ut sit minima. Repellat dolore tempora dolore veniam fugit veniam. Sit nam voluptatibus quia quod.'
          }
        ]
      }
    }
  }

</script>


<style lang="scss" scoped>
/* ========================================================================
  # SCOPED STYLES
======================================================================== */


/* Global variable dependencies
======================================================================== */


/* Base class
======================================================================== */
.p-profile {
  text-align: left;
}


/* Child classes
======================================================================== */ 
._mostly {
  color: $neutral-100;
}
._filler {
  height: 2000px;
}

.content {
  padding-top: $unit-lg;
}

.software-name {
  // float: left;
  // margin-right: 100%;
}
.software-company {

}

.fantasy-item-cell {
  margin-bottom: $unit-md;
  @include mq($from: tablet) {
    margin-bottom: $unit-xl;
  }
}

.fantasy-heading {
  margin-bottom: 0;
}
.fantasy-caption {
  @include vr($font-body, $font-size-md);
  color: $neutral-40;
  // font-weight: $font-weight-semi;
}

.fantasy-icon-wrapper {
  height: $unit-xxl;
  padding: $unit-sm;
  text-align: center;
  border-radius: 2px;
  @include mq($until: tablet) {
    margin-right: $unit-sm;
  }
  &.home {
    background-color: $neutral-00;
    > .fantasy-icon {
      color: contrasting-color($neutral-00, $lightest, $darkest)
    }
  }
  &.money {
    background-color: $green;
    > .fantasy-icon {
      color: contrasting-color($green, $lightest, $darkest)
    }
  }
  &.fire {
    background-color: $red;
    > .fantasy-icon {
      color: contrasting-color($red, $lightest, $darkest)
    }
  }
  @include mq($from: tablet) {
    margin-bottom: $unit-md;
  }
}

.software-company {
  color: $neutral-40;
}

.fantasies {
  margin-bottom: $unit-lg;
  @include mq($from: tablet) {
    margin-bottom: $unit-xxl;
  }
}
.soft-skills {
  margin-bottom: $unit-lg;
  @include mq($from: tablet) {
    margin-bottom: $unit-xxl;
  }
  // @include mq($from: desktop) {
  //   margin-bottom: $unit-xxl;
  // }
}
.skills-good {
  margin-bottom: $unit-md;
  @include mq($from: tablet) {
    margin-bottom: $unit-lg;
  }
}
.skill-heading {
  @include vr($font-body, $font-size-lg);
  font-weight: $font-weight-semi;
  @include mq($until: tablet) {
    padding-top: $unit-sm;
  }
}
.soft-skills-heading {
  margin-bottom: $unit-md;
  @include mq($from: tablet) {
    margin-bottom: $unit-lg;
  }
}

.software-company,
.software-name {
  @include vr($font-body, $font-size-lg);
}


.skill-label {
  display: inline-block;
  vertical-align: top;
  font-weight: $font-weight-semi;
}
.skill-icon-wrapper {
  margin-right: $unit-sm;
  width: $unit-lg;
  height: $unit-lg;
  padding: $unit-xs;
  position: relative;
  border-radius: 2px;
  display: inline-block;
  text-align: center;
  @include mq($from: tablet) {
    margin-bottom: $unit-md;
  }
  &.skill-icon-wrapper-landscape {
    width: $unit-xxl;
  }
  &.software {
    border-radius: 8px;
  }
  &.heart {
    background-color: $red;
    > .skill-icon {
      color: contrasting-color($red, $lightest, $darkest)
    }
  }
  &.comment {
    background-color: $purple;
    > .skill-icon {
      color: contrasting-color($purple, $lightest, $darkest)
    }
  }
  &.bulb {
    background-color: gold;
    > .skill-icon {
      color: contrasting-color(gold, $lightest, $darkest)
    }
  }
  &.puzzle {
    background-color: $blue;
    > .skill-icon {
      color: contrasting-color($blue, $lightest, $darkest)
    }
  }
  &.mouse {
    background-color: $neutral-00;
    > .skill-icon {
      color: contrasting-color($neutral-00, $lightest, $darkest)
    }
  }
  &.hourglass {
    background-color: sandybrown;
    > .skill-icon {
      color: contrasting-color(sandybrown, $lightest, $darkest)
    }
  }
  &.ps {
    background-color: $blue;
    > .skill-icon-text {
      color: contrasting-color($blue, $lightest, $darkest)
    }
  }
  &.ai {
    background-color: $yellow;
    > .skill-icon-text {
      color: contrasting-color($yellow, $lightest, $darkest)
    }
  }
  &.id {
    background-color: $purple;
    > .skill-icon-text {
      color: contrasting-color($purple, $lightest, $darkest)
    }
  }
}

.skill-icon {

}

.hard-skills {
  margin-bottom: $unit-lg;
}

.skill-icon,
.fantasy-icon {
  width: auto;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
}


.skill-caption {
  color: $neutral-40;
  @include mq($until: tablet) {
    display: none;
  }
}

.testimonials {
  margin-bottom: $unit-md;
  @include mq($from: tablet) {
    margin-bottom: $unit-lg;
  }
}

.skill-item-cell {
  margin-bottom: $unit-sm;
  @include mq($from: tablet) {
    margin-bottom: $unit-md;
  }
}
// .skill-icon-cell {
//   height: $unit-md;
//   @include mq($from: tablet) {
//     margin-bottom: $unit-sm;
//     height: $unit-lg;
//   }
// }

.skills-subheading {
  margin-bottom: $unit-md;
}

// .subskill-subheading {
//   margin-bottom: $unit-md;
//   @include mq($from: tablet) {
//     margin-bottom: $unit-lg;
//   }
// }

.subskill {
  display: flex;
  // font-weight: $font-weight-semi;
  
  @include mq($until: desktop) {
    margin-bottom: $unit-md;
  }
}

.skill-icon-text {
  @include vr($font-body, $font-size-xl);
  @include vr-reset;
  font-weight: $font-weight-semi;
}

.subskill-caption,
.skill-caption {
  @include vr($font-body, $font-size-sm);
  color: $neutral-40;
}
.subskill-caption {
  padding-right: $unit-xs;
}
.subskill-icon {
  color: $neutral-00;
  height: $unit-md;
  margin-right: $unit-xs;
  width: $unit-md;
  max-width: 100%;
  max-height: 100%;
  @include mq($from: desktop) {
    width: auto;
  }
}

.subskill-spacer {
  @include mq($from: desktop) {
    display: none;
  }
}
.skills-design-section {
  margin-bottom: $unit-lg;
}

</style>
