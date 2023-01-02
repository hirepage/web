<script>
  import VideoPlayer from '@/components/VideoPlayer'

  export default {
    components: { VideoPlayer }
  }
</script>

<template>
  <b-container>
    <b-row align-h="center" class="mt-5">
      <b-col cols="6">
        <div class="text-center w-100">
          <b-img
            width="96"
            height="96"
            src="https://cdn.otechie.com/attachments/0cWnI9rYN/profile.png"
            rounded="circle"/>
          <h3 class="semi-bold mt-2">
            Dylan Wight
          </h3>
          <p>
            Technical Consultant
          </p>
        </div>
        <div>
          <!--          <h1 class="title form-header">-->
          <!--            Get in Touch-->
          <!--          </h1>-->
          <!--          <hr>-->
          <div class="mt-4"
               id="login-form"
               @keydown.enter.prevent="$refs.loginBtn.click()">

            <b-row>
              <b-col>
                <div class="form-group">
                  <label>
                    First name
                  </label>
                  <b-form-input
                    id="email-input"
                    ref="emailInput"
                    autocomplete="email username"
                    class="form-control"
                    type="email"
                    autofocus/>
                </div>
              </b-col>
              <b-col>
                <div class="form-group">
                  <label>
                    Last name
                  </label>
                  <b-form-input
                    id="email-input"
                    ref="emailInput"
                    autocomplete="email username"
                    class="form-control"
                    type="email"
                    autofocus/>
                </div>
              </b-col>
            </b-row>
            <div class="form-group">
              <label>
                Work email
              </label>
              <b-form-input
                id="email-input"
                ref="emailInput"
                autocomplete="email username"
                class="form-control"
                type="email"
                autofocus/>
            </div>
            <div class="form-group">
              <label>
                Website
              </label>
              <b-form-input
                id="password-input"
                autocomplete="current-password"
                class="form-control"
                type="password"/>
            </div>
            <div class="form-group">
              <label>
                Message
              </label>
              <b-form-textarea
                rows="4"
                :max-rows="8"/>
            </div>
            <form-group>
              <b-btn
                pill
                block
                size="lg"
                variant="primary"
                ref="loginBtn">
                Get in Touch
              </b-btn>
            </form-group>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>

</style>
