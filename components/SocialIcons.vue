<template>
  <div class="form-group social-icons">
    <div class="social-icon">
      <a
        href="https://www.youtube.com/c/dylanwight"
        target="_blank"
        title="YouTube Channel">
        <font-awesome-icon
          size="lg"
          width="42.5"
          height="35"
          :icon="['fab', 'youtube']"/>
      </a>
    </div>
    <div class="social-icon">
      <a
        href="https://twitter.com/otechie"
        target="_blank"
        title="Twitter Profile">
        <font-awesome-icon
          size="lg"
          width="42.5"
          height="35"
          :icon="['fab', 'twitter']"/>
      </a>
    </div>
    <div class="social-icon">
      <a
        href="https://www.linkedin.com/company/otechie"
        target="_blank"
        title="LinkedIn Profile">
        <font-awesome-icon
          size="lg"
          width="42.5"
          height="35"
          :icon="['fab', 'linkedin']"/>
      </a>
    </div>
    <div class="social-icon">
      <a
        href="mailto:hello@otechie.com"
        title="Github Profile">
        <font-awesome-icon
          style="margin-top: 0px;"
          size="lg"
          width="42.5"
          height="35"
          :icon="['fas', 'envelope']"/>
      </a>
    </div>
  </div>
</template>

<style scoped>
  .social-icons {
    margin: 12px auto 12px auto;
    max-width: 160px;
    display: flex;
    /*margin-top: 24px;*/
    /*margin-bottom: 24px;*/
  }

  .social-icon a {
    color: #3a3a3a;
    /*opacity: 0.7;*/
  }
</style>
