<script>
  export default {
    props: {
      features: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

<template>
  <div class="blue-section">
    <b-container class="color-container">
      <b-row align-h="center" class="text-left">
        <b-col
          v-for="feature in features"
          :key="feature.title"
          cols="12"
          lg="6"
          xl="5"
          class="value-section">
          <b-row>
            <b-col cols="auto">
              <font-awesome-icon
                class="value-icon"
                :icon="feature.icon"
                fixed-width
                size="3x"/>
            </b-col>
            <b-col class="value-text">
              <div class="value-header">
                {{ feature.title }}
              </div>
              <p class="value-desc">
                {{ feature.text }}
              </p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>
  .blue-section {
    color: white;
    background-color: #4c8de6;
    background: radial-gradient(circle at bottom left, #4c8de6, #549DFF);
  }

  .color-container {
    padding: 64px 15px;
  }

  @media (min-width: 992px) {
    .color-container {
      padding: 120px 15px 120px 15px;
    }
  }

  @media (min-width: 1200px) {
    .color-container {
      padding: 140px 15px 140px 15px;
    }
  }

  .value-section {
    padding-top: 2rem;
  }

  .value-icon {
    opacity: 0.7;
    margin-bottom: 16px;
    font-size: 32px;
  }

  .value-header {
    font-weight: bold;
    line-height: 1.2;
    font-size: 24px;
    margin-bottom: 12px;
  }

  .value-desc {
    font-size: 17px;
    margin-bottom: 8px;
  }

  @media (min-width: 992px) {
    .value-header {
      font-size: 32px;
    }

    .value-desc {
      font-size: 19px;
      margin-bottom: 32px;
    }

    .value-section {
      padding-top: 3rem;
    }

    .value-text {
      padding-right: 3rem;
    }

    .value-icon {
      font-size: 42px;
    }
  }

  @media (min-width: 1200px) {
    .value-header {
      font-size: 30px;
    }

    .value-section {
      padding-top: 3rem;
    }

    .value-text {
      padding-right: 3rem;
    }
  }
</style>
