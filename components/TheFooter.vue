<template>
  <footer class="footer-section">
    <div class="footer-conatiner">
      <div class="flex items-center p-8 lg:p-0">
        <img
          class="h-5"
          src="~assets/images/footer/icon-small-coded.svg"
          alt=""
        />
        <span class="px-2 text-lg">with</span>
        <img
          class="h-5"
          src="~assets/images/footer/icon-small-love.svg"
          alt=""
        />
        <span class="px-2 text-lg">by</span>
        <img
          class="h-5"
          src="~assets/images/footer/icon-small-josa.svg"
          alt=""
        />
      </div>
      <div class="lg:flex px-8 pb-8 lg:px-0 lg:pb-0">
        <div class="flex items-center justify-end">
          <div class="flex lg:px-5">
            <a
              href="https://github.com/jordanopensource"
              target="_blank"
              aria-label="JOSA Github Account"
            >
              <img
                class="h-5 px-2"
                src="~assets/images/footer/icon-small-github.svg"
                alt=""
            /></a>
            <a
              href="https://twitter.com/jo_osa"
              target="_blank"
              aria-label="JOSA Twitter Account"
            >
              <img
                class="h-5 px-2"
                src="~assets/images/footer/icon-small-twitter.svg"
                alt=""
            /></a>
            <a
              href="https://www.facebook.com/jordanopensource/"
              target="_blank"
              aria-label="JOSA Facebook Page"
            >
              <img
                class="h-5 pl-2 lg:px-2"
                src="~assets/images/footer/icon-small-fb.svg"
                alt=""
              />
            </a>
          </div>
        </div>
        <div class="text-right pt-5 lg:pt-0">
          <p class="text-xs lg:text-sm font-light">
            <img
              class="h-4 inline"
              src="~assets/images/footer/icon-small-cc.svg"
              alt=""
            />
            2021, JOSA - Jordan Open Source Association
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
}
</script>

<style lang="postcss" scoped>
* {
  font-family: 'IBM Mono';
}
.footer-section {
  background-color: #edeeef;
  @apply lg:h-64 lg:pt-28 w-11/12 lg:w-full mx-auto lg:mx-0 pb-7 lg:pb-0;
}
.footer-conatiner {
  background-color: #1a1f21;
  @apply lg:flex h-full text-white items-center lg:justify-between lg:px-24 mx-3 lg:mx-0;
}
</style>
