<template>
  <div>
    <div class="header">
      <NavComponent />
      <div class="hero-wrapper">
        <div>
          <h1 class="hero-h1">
            <div
              v-gsap.from="{
                opacity: 0,
                x: 50,
                duration: 0.7,
              }"
              class="animated-text"
            >
              Hello I'm Josh,
            </div>
            <div
              v-gsap.from="{
                opacity: 0,
                x: -50,
                duration: 0.7
              }"
              class="animated-text"
            >
              A Visual Designer
            </div>
            <div
              v-gsap.from="{
                opacity: 0,
                x: 50,
                duration: 0.7
              }"
              class="animated-text"
            >
              Based in Lagos
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
          class="hero-subtext"
        >
          <h5>I’m passionate about solving business problems &amp; crafting beautiful experiences using design.</h5>
        </div>
        <nuxt-link to="/projects" class="button w-button">
          see my works
        </nuxt-link>
      </div>
    </div>
    <div class="complated-projects-section">
      <div class="complated-projects-flex-heading">
        <div class="completed-project-big-heading">
          <h2>Completed Projects</h2>
        </div>
        <div class="text-and-line-flex">
          <div class="line" />
          <div class="small-text-block">
            <h5>Cross-section of various types of projects I&#x27;ve worked on in the past. Enjoy!</h5>
          </div>
        </div>
      </div>
      <div class="completed-projects-flex">
        <nuxt-link to="/projects/cw" class="project cw w-inline-block">
          <div class="project-description-block">
            <div class="project-description-inner">
              <div class="project-name">
                <h4>CW Real Estate -<br>Rebrand</h4>
              </div>
              <div
                class="project-view-prompt"
              >
                <p class="inline">
                  View full casestudy
                </p>
                <div class="inline-arrow" />
              </div>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link to="#" class="project change360">
          <div class="project-description-block">
            <div class="project-description-inner">
              <div class="project-name">
                <h4>Change360 -<br>Branding</h4>
              </div>
              <div class="project-view-prompt">
                <p class="inline">
                  View full casestudy
                </p>
                <div class="inline-arrow" />
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
      <div class="view-all-button-wrapper">
        <nuxt-link data-w-id="451024d8-2e16-63a8-f3bd-4fa9ed8be32c" to="/projects" class="button-w-arrow w-inline-block">
          <div>View All</div>
          <div class="white-arrow" />
        </nuxt-link>
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
export default {

  head () {
    return {
      htmlAttrs: {
        lang: 'en',
        'data-wf-page': '6121b5d9411cba8ba3f482ed',
        'data-wf-site': '6121b5d9411cba6065f482ec'
      }
    }
  },

  mounted () {
    // this.splitText()
    this.$nextTick(() => {
      this.$initWebflow()
    })
  },

  methods: {
    // splitText () {
    //   const elements = document.querySelectorAll('.animated-text')

    // }
  }

}
</script>

<style scoped>
.animated-text {
  height: auto;
}
</style>
