<template>
  <div class="grey-section">
    <b-container>
      <h1 class="cta-title mb-4">
        Streamline Your Business
      </h1>
      <div class="subtitle mb-3 mt-3">
        Stop jumping between apps and focus on what you do best.
      </div>
      <div class="text-center">
        <b-btn
          size="lg"
          to="/waitlist"
          variant="primary"
          pill
          class="main-btn mt-3">
<!--          <b-img-->
<!--            style="margin: -4px; margin-bottom: 0"-->
<!--            rounded="circle"-->
<!--            src="https://cdn.otechie.com/attachments/pPp4mi4_e/image.png"-->
<!--            height="22"-->
<!--            width="22"-->
<!--            class="mr-2"/>-->
          Join Beta Test
        </b-btn>
      </div>
    </b-container>
  </div>
</template>

<style scoped>
  .grey-section {
    border-top: solid #ececec 1px;
    padding: 120px 0 120px 0;
    text-align: center;
    /*background-color: #437ecc;*/
    /*background: radial-gradient(circle at top right, #549DFF99, #437ecc, #437ecc);*/
    background-color: rgb(251, 251, 252);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    /*color: white;*/
  }

  .cta-title {
    font-weight: bold;
    font-size: 42px;
  }

  .subtitle {
    font-size: 22px;
    opacity: 0.7;
  }

  .main-btn {
    padding: 12px 40px;
    font-size: 12px !important;
    margin: auto;
    min-width: 300px;
  }

  @media (min-width: 768px) {
    .cta-title {
      font-weight: bold;
      font-size: 68px;
    }

    .subtitle {
      font-size: 28px;
      max-width: 780px;
      margin: auto;
    }
  }

  @media (min-width: 1200px) {
    .cta-title {
      font-weight: bold;
      font-size: 70px;
    }

    .grey-section {
      padding: 180px 0 180px 0;
    }
  }

</style>
