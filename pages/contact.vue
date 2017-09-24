<template>
  <section class="p-contact">  
    
    <c-hero>
      <h1>I need a job.</h1>
      <h1>Please hire me, please.</h1>
    </c-hero>

    <div id="contentTop" ref="contentTop"></div>
    
    <l-main-content class="_content-wrapper">
      <l-wrapper>
        <form
          v-if="$store.state.messageSent === false"
          name="gForm"
          id="gForm"
          ref="gForm"
          method="POST"
          class="_form"
          :action="formAction"
          @submit="handleFormSubmit">
          
          <label for="honeypot" class="_honeypot"></label>
          <input class="_honeypot" id="honeypot" type="text" name="honeypot" value="" />
          
          <l-grid class="_form-grid">
            <div class="_details-cell _cell u-2/5@tablet">

              <label for="name" class="_label">Name:</label>
              <input class="_input" type="text" name="name" id="name">
              
              <span class="_error" v-if="emailIsValid === true">Required</span>
              <span class="_error" v-if="emailIsValid === false">Please enter a valid email address</span>
              <label for="email" class="_label">Email:</label>
              <input class="_input" ref="email" :class="emailInputClass" type="text" name="email" id="email">

              <label for="company" class="_label">Company:</label>
              <input class="_input" type="text" name="company" id="company">

            </div>

            <div class="_message-cell _cell u-3/5@tablet">
              <label for="subject" class="_label">Subject:</label>
              <input class="_input" type="text" name="subject" id="subject">

              <span class="_error" v-if="messageIsValid === true">Required</span>
              <span class="_error" v-if="messageIsValid === false">Please enter a message</span>
              <label for="message" class="_label">Message:</label>
              <textarea class="_input _textarea" ref="message" :class="messageInputClass" type="textarea" name="message" id="message"></textarea>

              <input class="_submit" type="submit" value="Send">

            </div>

          </l-grid>
        </form>
        
        <div class="_after-message-wrapper" v-if="$store.state.messageSent === true" ref="afterMessage">
          <l-grid>
            <div class="_cell u-3/5@tablet">
              <h2>Thanks for getting in touch!</h2>
              <p>I'm not up to much these days so you should hear back from me pretty soon</p>
            </div>
            <div class="_cell u-2/5@tablet">
              <c-button 
                :onClick="reset"
                class="_reset-button"
                type="ghost"
                icon="envelope">
                Send another message
              </c-button>
            </div>
          </l-grid>
        </div>

      </l-wrapper>
    </l-main-content>


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
import cHero from '~/components/c-hero'
import cButton from '~/components/c-button'
import lWrapper from '~/components/layout/l-wrapper'
import lMainContent from '~/components/layout/l-main-content'
import lGrid from '~/components/layout/l-grid'
export default {
  data: () => {
    return {
      emailIsValid: true,
      messageIsValid: true
      // submitted: false
    }
  },
  components: {
    cCtaPanel,
    cHero,
    cButton,
    lWrapper,
    lGrid,
    lMainContent
  },
  computed: {
    formAction: function () {
      return 'https://script.google.com/macros/s/AKfycbwHDqBbMZSYuxCqawuOB2pB8gOO6nZrEKqBzbHg4r9WdfZQ95Gs/exec'
    },
    emailInputClass: function () {
      return {
        's-has-error': this.emailIsValid === false
      }
    },
    messageInputClass: function () {
      return {
        's-has-error': this.messageIsValid === false
      }
    }
  },
  methods: {
    reset: function () {
      this.$store.commit('setMessageSent', false)
      this.emailIsValid = true
      this.messageIsValid = true
    },
    validEmail: function (email) { // see:
      var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
      return re.test(email)
    },
    validateHuman: function (honeypot) {
      if (honeypot) { // if hidden form filled up
        return true
      } else {
        //
      }
    },
    // get all data in form and return object
    getFormData: function () {
      var elements = this.$refs.gForm.elements // all form elements
      var fields = Object.keys(elements).map(function (k) {
        if (elements[k].name !== undefined) {
          return elements[k].name
          // special case for Edge's html collection
        } else if (elements[k].length > 0) {
          return elements[k].item(0).name
        }
      }).filter(function (item, pos, self) {
        return self.indexOf(item) === pos && item
      })
      var data = {}
      fields.forEach(function (k) {
        data[k] = elements[k].value
        var str = '' // declare empty string outside of loop to allow
        // it to be appended to for each item in the loop
        if (elements[k].type === 'checkbox') { // special case for Edge's html collection
          str = str + elements[k].checked + ', ' // take the string and append
          // the current checked value to
          // the end of it, along with
          // a comma and a space
          data[k] = str.slice(0, -2)// remove the last comma and space
          // from the  string to make the output
          // prettier in the spreadsheet
        } else if (elements[k].length) {
          for (var i = 0; i < elements[k].length; i++) {
            if (elements[k].item(i).checked) {
              str = str + elements[k].item(i).value + ', ' // same as above
              data[k] = str.slice(0, -2)
            }
          }
        }
      })
      return data
    },
    handleFormSubmit: function (event) { // handles form submit withtout any jquery
      event.preventDefault() // we are submitting via xhr below
      var data = this.getFormData() // get the values submitted in the form
      /* OPTION: Remove this comment to enable SPAM prevention, see README.md */
      var messageBlank = data.message === ''
      var emailInvalid = !this.validEmail(data.email)
      if (this.validateHuman(data.honeypot)) {  // if form is filled, form will not be submitted
        return false
      }
      if (messageBlank) {
        this.messageIsValid = false
      } else {
        this.messageIsValid = true
      }
      if (emailInvalid) { // if email is not valid show error
        this.emailIsValid = false
      } else {
        this.emailIsValid = true
      }
      if (emailInvalid || messageBlank) {
        if (emailInvalid) {
          setTimeout(this.scrollUp(this.$refs.email), 200)
        } else if (messageBlank) {
          setTimeout(this.scrollUp(this.$refs.message), 200)
        }
        return false
      } else {
        var url = event.target.action //
        var xhr = new XMLHttpRequest()
        xhr.open('POST', url)
        // xhr.withCredentials = true
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.onreadystatechange = function () {
          // console.log(xhr.status, xhr.statusText)
          // console.log(xhr.responseText)
        }
        // url encode form data for sending as post data
        var encoded = Object.keys(data).map(function (k) {
          return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
        }).join('&')
        xhr.send(encoded)
        this.$store.commit('setMessageSent', true)
        setTimeout(this.scrollUp, 200)
      }
    },
    /**
      * Programatically scroll to selector using vue-scrollTo
      * as NUXT has trouble with # urls
      */
    scrollUp: function (element) {
      var options = {
        duration: 0,
        easing: 'linear',
        offset: -160
      }
      if (element) {
        var selector = '#' + element.id
      } else {
        selector = '#' + this.$refs.contentTop.id
      }
      this.$scrollTo(selector, options)
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
  padding: $unit-xxl $unit-md;
  @include mq($from: desktop) {
    padding: $unit-xxl;
  }
}

/* --
   ====================================================================== */
._content-wrapper {
  text-align: left;
}
._honeypot {
  display: none; /*makes the field not visible to humans*/
}

._form {
  text-align: left;
}
._error {
  @include vr($font-body, $font-size-sm);
  color: $red;
  float: right;
}

._input {
  box-shadow: inset 0 0 0 1px rgba($neutral-00, .15);
  transition: box-shadow .1s ease, background-color .1s ease;
  background-color: rgba($neutral-100,.5);
  color: $neutral-00;
  &:hover,
  &:focus {
    background-color: rgba($neutral-100,.7);
    box-shadow: inset 0 0 0 1px rgba($neutral-00, .3);
  }
  &.s-has-error {
    box-shadow: inset 0 0 0 1px rgba($red, 1);
  }
}

._details-cell {
  @include mq($from:tablet) {
    padding-right: $unit-md;
  }
}

._submit {
  @include vr($font-display, $font-size-md);
  @include vr-reset;
  padding: $unit-sm;
  background-color: $red;
  cursor: pointer;
  color: $neutral-00;
}

._textarea {
  height: $unit-xxl * 4; 
}
</style>

