<template>
  <div>
    <div class="header contact">
      <div class="hero-wrapper contact">
        <div>
          <h1>
            <div
              v-gsap.from="{
                opacity: 0,
                x: 50,
                duration: 0.6
              }"
              class="heading-text"
            >
              Let&#x27;s make great
            </div>
            <div
              v-gsap.from="{
                opacity: 0,
                x: -60,
                duration: 0.6
              }"
              class="heading-text"
            >
              stuff together! 🚀
            </div>
          </h1>
        </div>
        <div
          v-gsap.from="{
            opacity: 0,
            y: 10,
            duration: 0.6,
            delay: 0.3
          }"
          class="contact-sub-hero"
        >
          <h5>Got a proposal, job offer or just want to say hello? Go ahead and fill the form!</h5>
        </div>
      </div>
      <NavComponent />
    </div>
    <div class="form-wrapper">
      <div class="w-form">
        <form id="contact" name="contact" @submit.prevent="submit">
          <div class="bottom-spaced w-row">
            <div class="w-col w-col-6">
              <div>
                <label class="label">Name</label><input
                  id="field"
                  v-model="formData.name"
                  type="text"
                  class="input w-input"
                  maxlength="256"
                  name="field"
                  placeholder="Whats your name?"
                  required=""
                >
              </div>
            </div>
            <div class="w-col w-col-6">
              <div>
                <label class="label">Email</label><input
                  id="field-2"
                  v-model="formData.email"
                  type="email"
                  class="input w-input"
                  maxlength="256"
                  name="field-2"
                  placeholder="Whats your email?"
                  required=""
                >
              </div>
            </div>
          </div>
          <div class="side-padded">
            <label for="Message" class="label">Your Message</label><textarea
              id="Message"
              v-model="formData.message"
              placeholder="Hi, I need ABC for XYX, How soon can we have a discussion regarding this?"
              maxlength="5000"
              name="Message"
              required=""
              class="input big w-input"
            />
          </div>
          <div class="side-padded">
            <button :disabled="submitting" type="submit" form="contact" href="#" class="button duration-500 transition-all ease-in-out w-button">
              {{ submitting ? 'Please wait...' : 'send message' }}
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="footer contact">
      <div class="social-media-and-cred-wrapper">
        <div class="social-media-flex">
          <a href="#" class="social-media-icon ln w-inline-block" />
          <a href="#" class="social-media-icon be w-inline-block" />
          <a href="#" class="social-media-icon dr w-inline-block" />
          <a href="#" class="social-media-icon tw w-inline-block" />
        </div>
        <div>
          <div>
            Designed by Josh x Developed by <a href="https://twitter.com/tomidealonge" target="_blank" class="inpage-link">Tomide</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      },
      submitting: false
    }
  },

  head () {
    return {
      htmlAttrs: {
        lang: 'en',
        'data-wf-page': '61223bf513aab45c087ec67a',
        'data-wf-site': '6121b5d9411cba6065f482ec'
      }
    }
  },

  mounted () {
    this.$nextTick(() => {
      this.$initWebflow()
    })
  },

  methods: {
    submit () {
      this.submitting = true

      const url = ''
      const req = {
        'entry.850324179': this.formData.name,
        'entry.1161803101': this.formData.email,
        'entry.2123848989': this.formData.message
      }

      this.$axios.post(url, req, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(() => {
          this.submitting = false
          this.$toast.success('Successfully sent')
        })
        .catch(() => {
          this.submitting = false
          this.$toast.success('Please try again')
        })
    }
  }
}
</script>

<style scoped>
.heading-text {
  max-height: 200px;
}
</style>
