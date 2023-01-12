<script>
  import InfoFooter from '@/components/InfoFooter'
  import InfoHeader from '@/components/InfoHeader'

  export default {
    components: { InfoHeader, InfoFooter },
    data () {
      return {
        username: ''
      }
    },
    methods: {
      claimUsername () {
        this.$router.push(this.username? `/register?username=${this.username}` : '/register')
      }
    }
  }
</script>

<template>
  <div>
    <div ref="topColor" class="top-color">
      <info-header fixed hide-border/>
      <b-container class="top-container">
        <b-row align-v="center" align-h="start">
          <b-col md="6" xl="6" class="main-text-wrapper">
            <h1 class="main-title">
              A shareable lead collection page for
              <span class="rotating-word">
                <span>freelancers</span>
                <span>small businesses</span>
                <span>consultants</span>
                <span>agencies</span>
                <span>contractors</span>
              </span>
            </h1>
            <div class="landing-text mt-3 pb-3">
              Setup your free contact form in under five minutes
            </div>
            <b-form @submit.prevent="claimUsername">
              <b-input-group
                size="lg"
                prepend="hire.page/"
                class="username-input-group"
                @click="$refs.usernameInput.focus()">
                <b-form-input
                  ref="usernameInput"
                  size="lg"
                  placeholder="yourname"
                  v-model="username"/>
              </b-input-group>
            </b-form>
            <b-btn
              ref="claimBtn"
              size="lg"
              @click="claimUsername"
              variant="primary"
              pill
              class="main-btn mt-3">
              Claim your Hirepage
            </b-btn>
          </b-col>
          <b-col class="text-right">
            <b-img
              src="/apollo-widget.png"
              class="slack-chat mr-4"
              fluid
              alt="Cross Platform Chat Graphic"/>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <info-footer/>
  </div>
</template>

<style scoped>

  .username-input-group:focus-within .input-group-text {
    border-color: #80bdff !important;
  }

  .top-color {
    min-height: 100vh;
  }

  .top-container {
    padding-top: 88px;
    padding-bottom: 78px;
  }

  .main-title {
    font-weight: bold;
    font-size: 36px;
    position: relative;
  }

  .landing-text {
    font-size: 16px;
    opacity: 0.7;
  }

  .main-btn {
    padding: 12px 40px;
    font-size: 12px !important;
    margin: auto;
    width: 100%;
  }

  .main-text-wrapper {
    margin-bottom: 3rem;
  }

  .slack-chat {
    width: 300px;
  }

  @media (min-width: 768px) {

    .main-btn {
      margin-top: 0;
      width: 280px;
    }

    .main-title {
      font-size: 64px;
      padding-bottom: 77px;
    }

    .landing-text {
      font-size: 20px;
    }
  }

  @media (min-width: 992px) {
    .top-container {
      padding-top: 100px;
      padding-bottom: 100px;
    }

    .main-text-wrapper {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }

  @media (min-width: 1200px) {

    .top-container {
      padding-top: 100px;
      padding-bottom: 60px;
    }
  }


  .input-group-text {
    background-color: white;
    border-right: none !important;
    padding-right: 2px !important;
  }

  .input-group > .form-control:not(:first-child) {
    padding-left: 1px;
    border-left: none !important;
  }


  .rotating-word {
    display: inline;
    color: #549DFF;
  }

  .rotating-word span {
    position: absolute;
    bottom: 0;
    left: 0;
    overflow: hidden;
    animation: animate 15s linear infinite;
    opacity: 0;
  }

  @keyframes animate {
    0% {
      opacity: 0;
      transform: translateX(-50px);
    }

    2% {
      opacity: 1;
      transform: translateX(0px);
    }

    18% {
      opacity: 1;
      transform: translateX(0px);
    }

    20% {
      opacity: 0;
      transform: translateX(50px);
    }

    100% {
      opacity: 0;
      transform: translateX(50px);
    }

  }

  .rotating-word span:nth-child(1) {
    animation-delay: 0s;
  }

  .rotating-word span:nth-child(2) {
    animation-delay: 3s;
  }

  .rotating-word span:nth-child(3) {
    animation-delay: 6s;
  }

  .rotating-word span:nth-child(4) {
    animation-delay: 9s;
  }

  .rotating-word span:nth-child(5) {
    animation-delay: 12s;
  }
</style>
