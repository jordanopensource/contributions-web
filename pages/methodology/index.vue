<template>
  <div class="page-container">
    <Hero title="Methodology" />
    <div class="header-text">
      <div class="divider-black"></div>
      <h2>About JOSA</h2>
    </div>
    <QAndA
      :question="aboutJOSA.question"
      :answer="aboutJOSA.answer"
      :is-expanded="aboutJOSA.isExpanded"
    />
    <div class="header-text">
      <div class="divider-black"></div>
      <h2>About this website</h2>
    </div>
    <QAndA
      v-for="element in aboutWebsite"
      :key="element.question"
      :question="element.question"
      :answer="element.answer"
      :is-expanded="element.isExpanded"
    />
    <div class="header-text">
      <div class="divider-black"></div>
      <h2>FAQ</h2>
    </div>
    <QAndA
      v-for="element in faq"
      :key="element.question"
      :question="element.question"
      :answer="element.answer"
      :is-expanded="element.isExpanded"
    />
  </div>
</template>

<script>
export default {
  name: 'MethodologyPage',
  components: {
    Hero: () => import('~/components/Hero.vue'),
    QAndA: () => import('~/components/QAndA.vue'),
  },
  data() {
    return {
      aboutJOSA: {
        question: 'Who are we?',
        answer: `<p class="pb-4">The Jordan Open Source Association (JOSA) is a non-profit organisation based in Amman, Jordan. We promote open source technologies in Jordan and defend the rights of technology users in Jordan.</p><p>JOSA’s mission is to promote open source principles for the good of the Jordanian society. We believe that information that is non-personal – whether it’s software code, hardware design blueprints, data, network protocols and architecture, content – should be free for everyone to view, use, share, and modify. Our belief also holds that information that is personal should be protected within legal and technological frameworks. Access to the modern Web should likewise remain open.</p>`,
        isExpanded: true,
      },
      aboutWebsite: [
        {
          id: 1,
          question: 'What is this website?',
          answer: `<p class="pb-4">contributions.josa.ngo is an Open Source web client we have created to aggregate the data on Github in order to rank Jordanian Open Source contributors.</p><p>contributions.josa.ngo is an Open Source web application to aggregate real-time data on Github in order rank Open Source contributors in Jordan. Raising the level of competition!</p>`,
          isExpanded: true,
        },
        {
          id: 2,
          question: 'Why did we make this website?',
          answer: `<p>This website was created in order to put the spotlight on Open Source contributors in Jordan and give them the recognition they deserve. We also hope to incentivize more Jordanian developers to contribute to Open Source repositories all over the world, by creating the retro arcade feel of a leaderboard. Can you beat the highscore?</p>`,
          isExpanded: false,
        },
        {
          id: 3,
          question: 'How does it work?',
          answer: `<p class="pb-4">We replenish the data daily and the scores are recalculated and stored. The scoring formula to calculate each user’s score is the sum of each commit on a repository multiplied by the standard logarithm of the repository’s total stars, or:</p>
          <img src="${require('assets/images/methodology/algorithm.png')}" alt="algorithm" style="width:auto; height:4rem; margin-bottom:1.2rem;"/>
          <p>where,</p>
          <ul class="ml-11">
            <li>
              <p>
                S = Total score of a contributor
              </p>
            </li>
            <li>
              <p>
                C = Single commit of the contributor on a repository
              </p>
            </li>
            <li>
              <p>
                R = Total number of stars on the repository in which the commit happened
              </p>
            </li>
          </ul>
            <p class="pt-5">However, only commits that are merged into the main branch of the repo are actually recorded.</p>`,
          isExpanded: false,
        },
      ],
      faq: [
        {
          question: 'Why is my user not showing?',
          answer: `<p class="pb-4">Github does not validate the location of entries, therefore, we have to reside to using the location you set on your Github Account. Make sure your location is “Jordan” with your city, check google to make sure the spelling of your city is correct. Please note that the city is irrelevant and can be omitted.</p>
          <p>If you do not know how to change the location on your profile, you just need to click on the top-right, your profile. Then you click on <a style="color:#00b199;" href="https://github.com/settings/profile" target="_blank">“Settings”</a> and you should be able to see the “Location” field.</p>`,
          isExpanded: true,
        },
      ],
    }
  },
}
</script>

<style lang="postcss" scoped>
.page-container {
  @apply bg-gray;
}

.top-developers {
  @apply 2xl:mx-3;
}

.flex-container {
  @apply items-center md:flex md:justify-between;
}

.divider-black {
  @apply w-10 lg:w-10 border-t-2 border-black py-2 lg:py-1;
}

.header-text {
  font-family: 'IBM Mono';
  font-size: 1.9rem;
  line-height: 1em;
  @apply font-normal mx-7 md:mx-12 lg:mx-24 pb-4 pt-16 md:pt-24 md:pb-8 lg:text-4xl lg:font-light;
}
</style>
