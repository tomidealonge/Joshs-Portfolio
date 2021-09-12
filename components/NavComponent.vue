<template>
  <div class="nav-bar">
    <nuxt-link to="/" aria-current="page" class="logo w-inline-block w--current" />
    <div class="nav-link-wrapper">
      <nuxt-link to="/about" class="nav-link first w-inline-block">
        <div>About</div>
      </nuxt-link>
      <nuxt-link to="/projects" class="nav-link w-inline-block">
        <div>Projects</div>
      </nuxt-link>
      <nuxt-link to="/contact" class="nav-link last w-inline-block">
        <div>Contact</div>
      </nuxt-link>
    </div>
    <div data-w-id="b7c2dfa4-7306-fb61-9df9-999bfef9481c" class="hambruger">
      <div
        data-w-id="e3cd7998-0cec-122e-4f4a-fae4e0d10f66"
        data-animation-type="lottie"
        data-src="/hamburger-menu.json"
        data-loop="0"
        data-direction="1"
        data-autoplay="0"
        data-is-ix2-target="1"
        data-renderer="svg"
        data-default-duration="1.8333333333333333"
        data-duration="0"
      />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
