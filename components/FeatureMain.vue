<script>
  export default {
    props: {
      name: {
        type: String,
        default: 'Name',
        required: true
      },
      title: {
        type: String,
        default: 'Title',
        required: true
      },
      subtitle: {
        type: String,
        default: 'Subtitle',
        required: true
      }
    }
  }
</script>

<template>
  <b-container>
    <b-row
      align-v="center"
      align-h="center"
      class="top-container">
      <b-col lg="5" class="main-text-wrapper">
        <div class="eyebrow line">
          {{ name }}
        </div>
        <h1 class="main-title mt-0">
          {{ title }}
        </h1>
        <div class="landing-text mt-1 pb-2">
          {{ subtitle }}
        </div>
        <b-btn
          size="lg"
          to="/waitlist"
          variant="primary"
          class="main-btn mt-3">
          Start Free Trial
        </b-btn>
      </b-col>
      <slot/>
    </b-row>
  </b-container>
</template>

<style scoped>
  .top-container {
    padding: 68px 15px;
  }

  .main-text-wrapper {
    margin-bottom: 3rem;
  }

  .main-title {
    font-weight: bold;
    font-size: 38px;
    max-width: 460px;
  }

  .landing-text {
    font-size: 22px;
  }

  .eyebrow {
    font-size: 14px;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 12px;
    padding-right: 20px;
    opacity: 0.7;
  }

  .eyebrow.line::after {
    opacity: 0.7;
    position: absolute;
    content: "";
    width: 25px;
    height: 1px;
    margin: 9px 0 0 9px;
    background-color: currentcolor;
    box-sizing: border-box;
    border: 0 solid #e2e8f0
  }

  .main-btn {
    border-radius: 32px;
    padding: 12px 40px;
    font-size: 12px !important;
    margin: auto;
  }

  @media (min-width: 768px) {
    .main-btn {
      margin-top: 0;
    }

    .main-title {
      font-size: 64px;
    }

    .landing-text {
      font-size: 26px;
    }
  }

  @media (min-width: 992px) {
    .top-container {
      min-height: 700px
    }
  }
</style>
