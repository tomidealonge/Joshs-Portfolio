<template>
  <div>
    <div class="header projects">
      <div class="hero-wrapper">
        <div
          v-gsap.from="{
            y: -50,
            duration: 0.6,
          }"
          class="projects-hero"
        >
          <h1>Completed<br>Projects</h1>
          <div
            v-gsap.from="{
              y: 100,
              duration: 0.6,
            }"
          >
            <h5>Cross-section of various types of projects I've worked on in the past. Enjoy!</h5>
          </div>
        </div>
      </div>
      <NavComponent />
    </div>
    <div class="complated-projects-section all-projects">
      <div class="completed-projects-flex">
        <nuxt-link to="/projects/cw" class="project cw w-inline-block">
          <div class="project-description-block">
            <div class="project-description-inner">
              <div class="project-name">
                <h4>CW Real Estate -<br>Rebrand</h4>
              </div>
              <div class="project-view-prompt">
                <p class="inline">
                  View project
                </p>
                <div class="inline-arrow" />
              </div>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link to="#" class="project change360 w-inline-block">
          <div class="project-description-block">
            <div class="project-description-inner">
              <div class="project-name">
                <h4>Change360 -<br>Branding</h4>
              </div>
              <div class="project-view-prompt">
                <p class="inline">
                  View project
                </p>
                <div class="inline-arrow" />
              </div>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link to="#" class="project onestop w-inline-block">
          <div class="project-description-block white">
            <div class="project-description-inner">
              <div class="project-name">
                <h4>OneStop -<br>Branding</h4>
              </div>
              <div class="project-view-prompt">
                <p class="inline">
                  View project
                </p>
                <div class="inline-arrow white" />
              </div>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link to="#" class="project templice w-inline-block">
          <div class="project-description-block white">
            <div class="project-description-inner">
              <div class="project-name">
                <h4>Templice - Chrome Extension UI Design</h4>
              </div>
              <div class="project-view-prompt">
                <p class="inline">
                  View project
                </p>
                <div class="inline-arrow white" />
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  head () {
    return {
      htmlAttrs: {
        lang: 'en',
        'data-wf-page': '6122211eadcedbc766192cbd',
        'data-wf-site': '6121b5d9411cba6065f482ec'
      },
      title: 'Josh | Completed Projects',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Cross-section of various types of projects I've worked on in the past. Enjoy!"
        },
        {
          name: 'theme-color',
          property: 'theme-color',
          content: '#EA5F3A'
        },
        {
          name: 'apple-mobile-web-app-title',
          property: 'apple-mobile-web-app-title',
          content: 'Josh | Completed Projects'
        },
        {
          name: 'og:title',
          property: 'og:title',
          content: 'Josh | Completed Projects'
        },
        {
          name: 'og:description',
          property: 'og:description',
          content:
            "Cross-section of various types of projects I've worked on in the past. Enjoy!"
        },
        {
          name: 'og:site_name',
          property: 'og:site_name',
          content: "Josh's Portfolio "
        },
        {
          name: 'twitter:title',
          property: 'twitter:title',
          content: 'Josh | Completed Projects'
        },
        {
          name: 'twitter:site_name',
          property: 'og:site_name',
          content: "Josh's Portfolio "
        },
        {
          name: 'twitter:description',
          property: 'twitter:description',
          content:
            "Cross-section of various types of projects I've worked on in the past. Enjoy!"
        }
      ]
    }
  },

  mounted () {
    this.$nextTick(() => {
      this.$initWebflow()
    })
  }

}
</script>

<style scoped>
body {
  scroll-behavior: smooth;
}
</style>
