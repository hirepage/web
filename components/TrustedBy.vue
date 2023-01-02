<template>
  <div class="text-center">
    <div class="trusted-by">
      — Trusted By —
    </div>
    <b-row align-h="center" align-v="center" class="proof-logo-wrapper">
      <b-col lg="2" md="4" cols="6">
        <b-img
          fluid
          src="../static/nuxt-logo.png"
          class="proof-logo"
          style="height: 20px;"
          alt="Nuxt.js Logo"/>
      </b-col>
      <b-col lg="2" md="4" cols="6">
        <b-img
          fluid
          src="../static/valtech-logo.png"
          class="proof-logo"
          style="height: 30px;"
          alt="Valtech Logo"/>
      </b-col>
      <b-col lg="2" md="4" cols="6">
        <b-img
          fluid
          src="../static/scoutside-logo.png"
          class="proof-logo"
          alt="Scoutside Logo"/>
      </b-col>
      <b-col lg="2" md="4" cols="6">
        <b-img
          fluid
          src="../static/blacksheepsec-logo.png"
          class="proof-logo"
          style="height: 26px;"
          alt="BlackSheepSec Logo"/>
      </b-col>
      <b-col lg="2" md="4" cols="6">
        <b-img
          fluid
          src="../static/utreon-logo.png"
          class="proof-logo"
          style="height: 18px;"
          alt="Utreon Logo"/>
      </b-col>
      <b-col lg="2" md="4" cols="6">
        <b-img
          fluid
          src="../static/lazymaplecreations.png"
          class="proof-logo"
          style="height: 28px;"
          alt="Lazy Maple Creations Logo"/>
      </b-col>
    </b-row>
  </div>
</template>

<style scoped>
  .trusted-by {
    text-transform: uppercase;
    font-size: 12px;
    opacity: 0.4;
    letter-spacing: 2px;
    padding-bottom: 18px;
  }
  .proof-logo-wrapper {
    margin-bottom: 24px;
    text-align: center
  }
  .proof-logo {
    height: 24px;
    filter: grayscale(100%);
    opacity: 0.7;
    margin-bottom: 48px;
  }
  @media (min-width: 992px) {
    .proof-logo-wrapper {
      margin-bottom: 60px;
    }
  }
  @media (min-width: 1200px) {
    .proof-logo-wrapper {
      margin-bottom: 60px;
    }
  }
</style>
