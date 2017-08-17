<template>

  <ul :class="classObject">
    <li :key="button.id" v-for="button in buttons"
        class="o-btn-group__item">

      <atm-button
        :size="size"
        :icon="button.icon"
        :onClick="button.onClick"
        :type="button.type"
        :state="button.state"
      >
        {{ button.text }}
      </atm-button>

    </li>
  </ul>

</template>


<script>

  import atmButton from '../atoms/atm-button'

  export default {
    computed: {
      classObject () {
        return {
          // Object
          'o-btn-group': true,
          'o-btn-group--large': this.size === 'large',
          'o-btn-group--small': this.size === 'small',
          'o-btn-group--flush': this.flush
        }
      }
    },
    components: {
      atmButton
    },
    methods: {
      consoleClick () {
        // eslint-disable-next-line
        console.log ('console-clicked')
      }
    },
    props: {
      size: {
        type: String,
        required: false
      },
      flush: {
        type: Boolean,
        required: false,
        default: false
      },
      buttons: {
        type: Array,
        required: true
      }
    }
  }

</script>
