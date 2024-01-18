<template>
  <footer class="footer-section">
    <div class="footer-container">
      <div class="flex items-center p-8 lg:p-0">
        <img
          class="h-5"
          src="~assets/images/footer/icon-small-coded.svg"
          alt="Made"
          width="45"
          height="20"
          loading="lazy"
        />
        <span class="px-2 text-lg">with</span>
        <img
          class="h-5"
          src="~assets/images/footer/icon-small-love.svg"
          alt="Love"
          width="23"
          height="20"
          loading="lazy"
        />
        <span class="px-2 text-lg">by</span>
        <img
          class="h-5"
          src="~assets/images/footer/icon-small-josa.svg"
          alt="JOSA"
          width="80"
          height="20"
          loading="lazy"
        />
      </div>
      <div class="lg:flex px-8 pb-8 lg:px-0 lg:pb-0">
        <div class="flex items-center justify-end text-center align-middle">
          <div class="flex lg:px-5">
            <a
              href="https://github.com/jordanopensource"
              target="_blank"
              aria-label="JOSA Github Account"
            >
              <img
                class="mx-2"
                src="~assets/images/footer/icon-small-github.svg"
                alt="Github Account"
                width="20"
                height="55"
                loading="lazy"
            /></a>
            <a
              href="https://twitter.com/jo_osa"
              target="_blank"
              aria-label="JOSA Twitter Account"
            >
              <img
                class="mx-2"
                src="~assets/images/footer/icon-small-twitter.svg"
                alt="Twitter Account"
                width="25"
                height="60"
                loading="lazy"
            /></a>
            <a
              href="https://www.facebook.com/jordanopensource/"
              target="_blank"
              aria-label="JOSA Facebook Page"
            >
              <img
                class="ml-2 lg:mx-2"
                src="~assets/images/footer/icon-small-fb.svg"
                alt="Facebook Page"
                width="20"
                height="55"
                loading="lazy"
              />
            </a>
          </div>
        </div>
        <div class="text-right pt-5 lg:pt-0">
          <p class="text-xs lg:text-sm font-light">
            <img
              class="h-4 inline"
              src="~assets/images/footer/icon-small-cc.svg"
              alt="CC"
              width="auto"
              height="16"
              loading="lazy"
            />
            Jordan Open Source Association (JOSA)
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
  @apply lg:h-64 lg:pt-28 lg:w-full pb-7 lg:pb-0 px-8 md:px-14 lg:px-0;
}
.footer-container {
  background-color: #1a1f21;
  @apply lg:flex h-full text-white items-center lg:justify-between lg:px-24;
}
</style>
