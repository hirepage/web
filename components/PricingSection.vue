<template>
  <div id="pricing" class="pricing-section">
    <b-container class="text-center">
      <h1 class="pricing-title mb-2">
        Pricing
      </h1>
      <div class="pricing-subtitle">
        Get started completely free, no credit card required.
      </div>
      <b-row align-h="center">
        <b-col md="6" lg="5" xl="4">
          <b-card class="service-card agency-card">
            <h2 class="pt-4">
              <strong>Basic</strong>
            </h2>
            <div class="price-color">
              <span style="font-size: 26px; margin-right: 4px;">$0</span>
              / seat / mo
            </div>

            <div class="start-btn-wrapper">
              <b-btn
                variant="primary"
                class="start-btn"
                pill
                size="lg"
                to="/waitlist">
                Get Started
              </b-btn>
            </div>
            <div style="font-size: 16px; text-align: left;">
              <div class="check-list">
                <div>
                  <font-awesome-icon icon="check" class="feature-check"/>
                  Up to 2 Seats
                </div>
                <div>
                  <font-awesome-icon icon="check" class="feature-check"/>
                  50 Invites per Month
                </div>
                <div>
                  <font-awesome-icon icon="check" class="feature-check"/>
                  Reply by Email
                </div>
                <div>
                  <font-awesome-icon icon="check" class="feature-check"/>
                  MS Teams Bridge
                </div>
                <div>
                  <font-awesome-icon icon="check" class="feature-check"/>
                  Slack Connect Invites
                </div>
                <div style="opacity: 0.4">
                  <font-awesome-icon icon="check" class="feature-check" style="opacity: 0"/>
                  Custom Email Domain
                </div>
              </div>
            </div>
          </b-card>
        </b-col>

        <b-col md="6" lg="5" xl="4">
          <b-card class="service-card freelance-card">
            <h2 class="pt-4">
              <strong>Pro</strong>
            </h2>
            <div class="price-color">
              <span style="font-size: 26px; margin-right: 4px;">$15</span> / seat / mo
            </div>

            <div class="start-btn-wrapper">
              <b-btn
                variant="dark"
                class="start-btn"
                pill
                size="lg"
                to="/waitlist">
                Get Started
              </b-btn>
            </div>
            <div style="font-size: 16px; text-align: left;">
              <div class="check-list">
                <div>
                  <font-awesome-icon icon="check" class="feature-check"/>
                  Unlimited Seats
                </div>
                <div>
                  <font-awesome-icon icon="check" class="feature-check"/>
                  Unlimited Invites
                </div>
                <div>
                  <font-awesome-icon icon="check" class="feature-check"/>
                  Reply by Email
                </div>
                <div>
                  <font-awesome-icon icon="check" class="feature-check"/>
                  MS Teams Bridge
                </div>
                <div>
                  <font-awesome-icon icon="check" class="feature-check"/>
                  Slack Connect Invites
                </div>
                <div>
                  <font-awesome-icon icon="check" class="feature-check"/>
                  Custom Email Domain
                </div>
              </div>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>

  .check-list {
    margin-top: 6px;
    line-height: 1.8;
  }

  .pricing-section {
    /*border-top: solid #ececec 1px;*/
    /*background-color: rgb(251, 251, 252);*/
    padding: 120px 0 120px 0;
    text-align: center;
  }

  .dark-section {
    margin-top: -67px;
    padding-top: 67px;
    margin-bottom: -200px;
    background-color: #201f25bb;
    background: radial-gradient(circle at bottom left, #201f25, #201f25bb);
    color: white;
  }

  .pricing-title {
    font-weight: bold;
    font-size: 42px;
    padding-top: 20px;
  }

  .pricing-subtitle {
    opacity: 0.7;
    margin-bottom: 40px;
    font-size: 22px;
  }

  .service-card {
    height: 96%;
    overflow: hidden;
    position: relative;
    text-align: center;
    color: #3a3a3a;
    border-radius: 42px;
    border: 1px solid rgba(0, 0, 0, 0.125);
    padding: 12px;
    margin-bottom: 16px;
    max-width: 500px
  }

  .start-btn-wrapper {
    padding: 16px 0 16px 0;
  }

  .start-btn {
    width: 100%;
  }

  .service-description {
    padding-top: 10px;
    text-align: left;
  }

  .price-color {
    color: #999999
  }

  .faqs-header {
    font-weight: bold;
    font-size: 42px;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
  }

  .bottom-container {
    padding: 0 15px 150px 15px;
    margin-top: calc(580px - 25vw);
  }

  .feature-item {
    font-size: 16px;
  }

  .feature-check {
    margin-right: 12px;
    height: 16px;
    width: 16px;
  }


  .freelance-card .feature-check {
    color: #3a3a3a;
  }

  .agency-card {
    border-color: #549DFF;
  }

  .agency-card .feature-check {
    color: #549DFF;
  }

  .scale-card {
    /*border-color: #aaaab0;*/
  }


  .scale-card .feature-check {
    color: #aaaab0;
  }

  .faq-question {
    font-size: 24px;
    margin-top: 8px;
  }

  .faq-answer {
    font-size: 18px;
    opacity: 0.7;
  }

  .collapsed .when-open,
  .not-collapsed .when-closed {
    display: none;
  }

  @media (min-width: 768px) {
    .pricing-subtitle {
      font-size: 28px;
    }

    .pricing-title {
      font-size: 68px;
    }

    .faqs-header {
      font-weight: bold;
      font-size: 60px;
      padding-top: 80px;
      padding-bottom: 20px;
      text-align: left;
    }

    .bottom-container {
      margin-top: calc(660px - 25vw);
    }

    .faq-list {
      border-radius: 12px;
    }
  }
</style>
