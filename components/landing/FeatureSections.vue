<template>
  <div>

    <div style="padding: 10px 0;" class="svg-background-personalize ">
      <b-container class="feature-section">
        <b-row align-v="center">
          <b-col order-md="1" cols="6" style="color: white;">
            <h1 class="feature-title">
              Make it beautiful and make it your own
            </h1>
            <p class="feature-text" style="opacity: 0.7;">
              Describe your business, upload a background image, and connect all of your online platforms to
              create a high converting page.
            </p>
            <b-btn pill variant="default" size="lg" class="main-btn">
              Get Started for Free
            </b-btn>
          </b-col>
          <b-col order-md="0" cols="auto" class="mr-5">
            <b-img
              src="/notsogoodprofile.png"
              class="slack-chat mr-4"
              fluid
              alt="Page Example Screenshots"/>
          </b-col>
        </b-row>
      </b-container>
    </div>


    <div style="padding: 10px 0;" class="svg-background-meetings">
      <b-container class="feature-section">
        <b-row align-v="center">
          <b-col order-md="0" style="color: white">
            <h1 class="feature-title">
              Sync your availability and schedule meetings
            </h1>
            <p class="feature-text">
              Save on the back and forth scheduling by allowing potential clients to book meetings from your contact
              form. Set your availability so clients can choose a time as they reach out.
            </p>
            <b-btn pill variant="default" size="lg" class="main-btn">
              Get Started for Free
            </b-btn>
          </b-col>
          <b-col order-md="1" cols="auto" class="feature-card ml-5">
            <b-img
              src="/calendly.png"
              class="slack-chat mr-4"
              fluid
              rounded
              alt="Page Example Screenshots"/>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div style="padding: 10px 0;" class="svg-background-collect">
      <b-container class="feature-section">
        <b-row align-v="center">
          <b-col style="color: white;" order-md="1">
            <h1 class="feature-title">
              Customize your contact form to qualify leads
            </h1>
            <p class="feature-text">
              Make sure you spend your energy on the right leads by collecting the information you need upfront.
              Supports short answer, paragraphs, multiple choice, and checkboxes.
            </p>
            <b-btn pill variant="default" size="lg" class="main-btn">
              Get Started for Free
            </b-btn>
          </b-col>
          <b-col cols="auto" class="feature-card mr-5" order-md="0">
            <b-img
              src="/form.png"
              class="slack-chat mr-4"
              fluid
              alt="Page Example Screenshots"/>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<style scoped>

  .main-btn {
    padding: 12px 40px;
    font-size: 12px !important;
    margin: auto;
    width: 100%;
  }

  .slack-chat {
    width: 500px;
  }

  .feature-section {
    padding: 200px 0;
  }

  .svg-background-personalize {
    background-color: #88364d;;
  }

  .svg-background-meetings {
    background-color: #031957;
  }

  .svg-background-collect {
    background-color: #0f935d;
  }

  .feature-card {
    padding: 16px;
    background-color: white;
    box-shadow: rgb(0 0 0 / 25%) 0rem 1.75rem 3.125rem 0.25rem;
    border-radius: 44px;
    z-index: 10;
  }

  .feature-title {
    font-weight: bold;
    font-size: 36px;
    position: relative;
  }

  .feature-text {
    font-size: 22px;
    padding-bottom: 16px;
    opacity: 0.7;
  }

  @media (min-width: 768px) {
    .main-btn {
      margin-top: 0;
      width: 280px;
    }
  }

  @media (min-width: 992px) {
    .feature-title {
      font-size: 56px;
    }
  }
</style>

