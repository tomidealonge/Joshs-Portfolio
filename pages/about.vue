<template>
  <div>
    <div class="header about-us">
      <div class="about-header-inner">
        <div class="about-hero">
          <h3
            v-gsap.from="{
              y: 80,
              duration: 0.7,
              opacity: 0
            }"
            class="about-hero-text"
          >
            I’m a multidisciplinary designer passionate about solving business problems &amp; crafting beautiful experiences using design.
          </h3>
          <a
            v-gsap.from="{
              y: -80,
              duration: 0.7,
              opacity: 0
            }"
            href="#about-me"
            class="next-section-block w-inline-block"
          />
        </div>
        <div class="about-header-image-wrapper">
          <div data-w-id="2d8ed8e2-3b3f-f8d9-5c55-88934f957832" class="floating-tech-icons ps" />
          <div data-w-id="acdd18e4-8cb7-747c-fb1d-2d0639c1dbf8" class="floating-tech-icons wf" />
          <div data-w-id="f18e9083-5733-9733-d2cb-8b74c8c543fd" class="floating-tech-icons fig" />
        </div>
      </div>
      <NavComponent />
    </div>
    <div id="about-me" class="accordion-container">
      <div>
        <h5>I specialise in branding, corporate communications and User Interface Design. Currently I work as an in-house brand designer at <a href="http://check-dc.com" target="_blank" class="inpage-link about">Check DC</a>, a digital design agency based in Lagos, Nigeria. Some of the notable projects I have contributed on immensely at Check DC include <a href="http://smallchops.ng" target="_blank" class="inpage-link about">smallchops.ng</a> website, one rooftop branding, <a href="http://enrich.africa" target="_blank" class="inpage-link about">enrichafrica</a> branding, forest capital branding, forest bank branding and a lot more.</h5>
      </div>
      <div class="accordion-wrapper">
        <div class="accordion">
          <div class="accordion-heading-flex">
            <div>
              <h3>Tools I Use</h3>
            </div>
            <div class="close-and-open-toggle" />
          </div>
          <div class="accordion-text">
            <p>I use Adobe Illustrator, Adobe Photoshop, Adobe Indesign and Figma for my day to day design activities. In my spare time I use Webflow to build my UI designs &amp; I also have a basic knowledge of HTML &amp; CSS.</p>
          </div>
        </div>
        <div class="accordion">
          <div class="accordion-heading-flex">
            <div>
              <h3>Experience &amp; Clients</h3>
            </div>
            <div class="close-and-open-toggle" />
          </div>
          <div class="accordion-text">
            <p>
              Over the last 4 years I have established fruitful and lasting relationships with amazing clients, ranging from individuals to startups. For more details on this, here&#x27;s a link to my <a href="https://www.linkedin.com/in/joshua-oladiti-217286160/" target="_blank" class="inpage-link">LinkedIn profile</a> or <a href="https://www.dropbox.com/s/s952d81odsz36wc/Joshua%20Oladiti%20Resume.pdf?dl=0" target="_blank" class="inpage-link">download my resume</a>
            </p>
          </div>
        </div>
      </div>
      <div class="view-all-button-wrapper">
        <nuxt-link to="/projects" class="button w-button">
          see my works
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
        'data-wf-page': '6121cee34f585465280d61eb',
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

  }

}
</script>

<style scoped>
.next-section-block{
  transition: none;
}
</style>
