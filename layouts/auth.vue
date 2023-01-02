<template>
  <client-only>
    <div class="auth-wrapper">
      <b-container>
        <b-row
          align-h="center"
          class="row-pad">
          <b-col md="10" lg="8" xl="6">
            <nuxt/>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </client-only>
</template>

<style scoped>
  @media (min-width: 768px) {
    .auth-wrapper {
      margin-top: 20px;
    }
  }
</style>
