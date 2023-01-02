<template>
  <div class="dark-section">
    <b-container id="features" class="features-section">
      <h1 class="main-title mb-5">
        Built for Service Businesses
      </h1>

      <b-row align-h="center" class="concern-cards">
        <b-col md="6" lg="4" class="my-3">
          <b-card>
            <font-awesome-icon
              class="concern-icon"
              icon="shield-check"
              size="3x"/>
            <h4 class="concern-title">
              Secure
            </h4>
            <p class="concern-text">
              Designed for privacy and security from the start, ChatPass forwards your messages and files without storing
              them.
            </p>
          </b-card>
        </b-col>
        <b-col md="6" lg="4" class="my-3">
          <b-card>
            <font-awesome-icon
              class="concern-icon"
              icon="wave-pulse"
              size="3x"/>
            <h4 class="concern-title">
              Reliable
            </h4>
            <p class="concern-text">
              We guarantee 99.99% uptime for Pro plans. We will notify you if a message does not send.
            </p>
          </b-card>
        </b-col>
        <b-col md="6" lg="4" class="my-3">
          <b-card>
            <font-awesome-icon
              class="concern-icon"
              :icon="['fas', 'circle-heart']"
              size="3x"/>
            <h4 class="concern-title">
              Intuitive
            </h4>
            <p class="concern-text">
              We obsess over design to make collaborating as easy as possible for your clients and your team.
            </p>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>

  .dark-section {
    background-color: #3a3a3a;
    color: white;
    padding: 80px 0;
  }

  .concern-cards {
    color: #3a3a3a;
  }

  .concern-icon {
    margin-top: 8px;
    color: #547FFF;
  }

  .concern-title {
    font-size: 32px;
    font-weight: bold;
    margin-top: 16px;
  }

  .concern-text {
    font-size: 18px;
    opacity: 0.7;
  }

  .main-title {
    font-weight: bold;
    font-size: 36px;
    text-align: center;
  }

  @media (min-width: 768px) {
    .main-title {
      font-size: 58px;
    }

    .dark-section {
      padding: 180px 0;
    }
  }
</style>
