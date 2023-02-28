<script>
  export default {
    name: 'ThemeSelector',
    methods: {
      selectTheme (theme) {
        console.log('selectTheme', theme)
      }
    }
  }
</script>

<template>
  <b-form-group label="Theme" class="mb-5">
    <b-row>
      <b-col cols="4">
        <b-card class="theme-card" @click="selectTheme('Custom')">
        </b-card>
        <div class="theme-label">
          Custom
        </div>
      </b-col>
      <b-col cols="4">
        <b-card
          class="theme-card"
          @click="selectTheme('Air Blue')">
          <div class="theme-btn" style="background-color: #549DFF;"/>
        </b-card>
        <div class="theme-label">
          Air Blue
        </div>
      </b-col>
      <b-col cols="4">
        <b-card class="theme-card"
                style="background: linear-gradient(rgb(31, 112, 219), rgb(18, 66, 130));"
                @click="selectTheme('Spray')">
          <div class="theme-btn" style="background-color: #fff152;"/>
        </b-card>
        <div class="theme-label">
          Spray
        </div>
      </b-col>
    </b-row>
  </b-form-group>
</template>



<style scoped>
  .theme-card {
    cursor: pointer;
    height: 180px;
  }

  .theme-card .active {
    border-color: #549DFF;
  }

  .theme-label {
    text-align: center;
    opacity: 0.7;
    margin-top: 4px;
  }

  .theme-btn {
    height: 16px;
    width: 80%;
    margin: auto;
    margin-top: 100%;
    border-radius: 8px;
  }
</style>
