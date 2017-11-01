<template>
  <div>
    <h1 class="o-heading o-heading--alpha">Ratings Slideout XX</h1>
    <l-wrapper>
      
      <c-code filename="projects.json" :code="codeData" :langauges="['js']"></c-code>
      <c-code filename="projects.json" :code="codeData" :langauges="['js']"></c-code>
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

      <c-testimonials :testimonials="testimonials"></c-testimonials>
    </l-wrapper>
  </div>
</template>

<script>
import cTestimonials from '~/components/c-testimonials'
import cCode from '~/components/c-code'
import lWrapper from '~/components/layout/l-wrapper'
export default {
  components: {
    cTestimonials,
    cCode,
    lWrapper
  },
  data: () => {
    return {
      testimonials: [
        {
          name: 'Dejan Ulcej',
          company: 'trivago',
          role: 'Product Designer',
          character: 'character-07.svg',
          color: '#2071BA',
          quote: 'Rerum voluptatem minima distinctio. Fugit odio qui repudiandae architecto omnis adipisci. Quo fuga aut nostrum. Reiciendis nihil vero praesentium non. Perferendis cupiditate impedit ipsum tenetur.'
        },
        {
          name: 'Dan Ardenleneu',
          company: 'trivago',
          role: 'Product Designer',
          character: 'character-07.svg',
          color: '#2071BA',
          quote: 'Hic mollitia temporibus iure nemo voluptatem. Eveniet non iusto cupiditate odio. Perferendis corrupti quia saepe. Ex aperiam neque sunt reprehenderit numquam voluptatum non accusantium.'
        },
        {
          name: 'Someone Else',
          company: 'trivago',
          role: 'Product Designer',
          character: 'character-07.svg',
          color: '#2071BA',
          quote: 'Eos ut sit minima. Repellat dolore tempora dolore veniam fugit veniam. Sit nam voluptatibus quia quod.'
        }
      ]
    }
  },
  computed: {
    codeData: function () {
      return require('raw-loader!~/utils/getProjectsArray.js')
    }
  }
}
</script>

<style lang="scss">
</style>
