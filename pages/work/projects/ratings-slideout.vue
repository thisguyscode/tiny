<template>
  <div>
    <h1>Ratings Slideout XX</h1>
    <l-wrapper>
      
      <c-code :languages="['html']">
        <pre>
          <div class="test"></div>
          <section></section>
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
  },
  computed: {
    codeData: function () {
      return require('html-loader!~/data/code/test')
    }
  }
}
</script>
