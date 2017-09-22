<template>
  <section class="p-contact">  
    <l-wrapper>
      <h2>contact</h2>

      <form
        name="gform"
        id="gform"
        enctype="text/plain"
        class="_form"
        :action="formAction"
        target="hidden_iframe"
        @submit="submit">

        <label>Name:</label>
        <input class="_input" type="text" name="entry.2005620554" id="entry.2005620554">

        <label>Company:</label>
        <input class="_input" type="text" name="entry.1166974658" id="entry.1166974658">
        
        <label>Email:</label>
        <input class="_input" type="text" name="entry.1045781291" id="entry.1045781291">
        
        <label>Subject:</label>
        <input class="_input" type="text" name="entry.1615720585" id="entry.1615720585">
        
        <label>Message:</label>
        <textarea class="_input _textarea" type="textarea" name="entry.839337160" id="entry.839337160"></textarea>
        
        <input class="_submit" type="submit" value="Submit">

      </form>

      <iframe
        name="hidden_iframe"
        id="hidden_iframe"
        style="display:none;"
        :onload="checkSubmitted">
      </iframe>

      </l-wrapper>

      <section>
        <c-cta-panel
          mainCtaHeading="Get to know me"
          mainCtaBodyText="I’ve not been in the tech industry long, but in this short time I’ve had the chance to work on some cracking projects."
          mainCtaButton="profile"
          subCtaHeading="Or see what I can do"
          subCtaButton="work">
        </c-cta-panel>
      </section>
    
    </section>
</template>

<script>
import cCtaPanel from '~/components/c-cta-panel'
import lWrapper from '~/components/layout/l-wrapper'
export default {
  data: () => {
    return {
      submitted: false
    }
  },
  components: {
    cCtaPanel,
    lWrapper
  },
  computed: {
    formAction: function () {
      return 'https://docs.google.com/forms/d/e/1FAIpQLScptjWHtUIVzak7gAx2slCdCtJAz3u5csCWxhj9URQlNUSsKA/formResponse?'
    }
  },
  methods: {
    submit: function () {
      this.submitted = true
      console.log('submitted')
    },
    checkSubmitted: function () {
      if (this.submitted) {}
    }
  }
}
</script>


<style lang="scss" scoped>

/* NOTES
** None
*/

/* Import project settings
   ====================================================================== */
@import "~assets/styles/imports";


/* Local variables
   ====================================================================== */


/* Base component class
   ====================================================================== */
.page-contact {
  text-align: left;
  padding: $unit-xxl $unit-md;
  @include mq($from: desktop) {
    padding: $unit-xxl;
  }
}

/* --
   ====================================================================== */
._form {
  text-align: left;
}
._input {
  background-color: rgba($neutral-100,.5);
  color: $neutral-00;
  @include inner-border(all, 1px);
  &:hover,
  &:focus {
    @include inner-border(all, 1px, high)
  }
}

._submit {
  @include inner-border(all, 1px);
  cursor: pointer;
  background: $neutral-100;
  color: $neutral-00;
}

._textarea {
  height: $unit-xxl * 4; 
}
</style>

