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
    mounted () {
      if (this.$route.hash === '#success') {
        this.$toast.success('Thanks for signing up!')
        this.$router.replace('/')
      } else if (this.$route.hash === '#error') {
        this.$toast.error('Error signing up, please try again')
        this.$router.replace('/')
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


  .color-btn {
    border: 1px solid white !important;
    background: linear-gradient(#D6249F, #FD5949);
  }

  .features-section {
    padding-top: 12px;
  }

  .top-color {
    /*background-color: #437ecc;*/
    /*background: radial-gradient(circle at bottom left, #549DFF, #437ecc, #437ecc);*/
    /*color: white;*/
    min-height: 100vh;
  }

  .blue-section2 {
    background-color: #437ecc;
    background: radial-gradient(circle at top left, #549DFF, #437ecc, #437ecc);
    color: white;
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

  .mobile-screenshot-img {
    border-radius: 28px;
    max-width: 100%;
  }

  .mobile-wrapper {
    margin-bottom: -32px;
    position: relative;
    width: 100%;
    z-index: 10;
    padding: 8px;
    border-radius: 36px;
    background: #f6f9fc;
    user-select: none;
    box-shadow: 0 50px 100px -20px rgb(50 50 93 / 25%), 0 30px 60px -30px rgb(0 0 0 / 30%), inset 0 -2px 6px 0 rgb(10 37 64 / 35%);
    max-width: 300px;
  }

  .widget-screenshot {
    border-radius: 8px;
    box-shadow: 0 7px 14px rgba(50, 50, 93, .1), 0 3px 6px rgba(0, 0, 0, .08);
  }

  .feature-icon {
    margin-bottom: 12px;
    font-size: 36px;
    opacity: 0.7;
  }

  .ms-teams-icon {
    width: 45px;
  }

  .value-row {
    margin: 80px 0;
  }

  .value-title {
    font-weight: bold;
    font-size: 26px;
    margin-bottom: 12px;
  }

  .value-desc {
    opacity: 0.7;
    font-size: 20px;
    margin-bottom: 14px;
  }

  .value-btn {
    border-radius: 24px;
    padding: 8px 28px;
    font-size: 11px !important;
    margin: auto;
  }

  .chat-screenshot {
    width: 100%;
    border-radius: 6px;
    box-shadow: 0 7px 14px rgba(50, 50, 93, .1), 0 3px 6px rgba(0, 0, 0, .08);
    margin: auto;
    margin-top: 100px;
  }

  .slack-screenshot {
    border-radius: 6px;
    border: 1px solid rgba(0, 0, 0, 0.125);
    box-shadow: 0 7px 14px rgba(50, 50, 93, .1), 0 3px 6px rgba(0, 0, 0, .08);
  }

  .mobile-screenshot-img {
    border-radius: 8px;
    max-width: 100%;
  }

  .mobile-wrapper {
    margin-bottom: -32px;
    z-index: 10;
    padding: 8px;
    border-radius: 18px;
    background: #f6f9fc;
    user-select: none;
    box-shadow: 0 15px 20px -10px rgb(50 50 93 / 25%), 0 15px 30px -15px rgb(0 0 0 / 30%), inset 0 -2px 6px 0 rgb(10 37 64 / 35%);
    max-width: 200px;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 32%;
  }

  .stripe-img {
    border-radius: 8px;
    box-shadow: 0 7px 14px rgba(50, 50, 93, .1), 0 3px 6px rgba(0, 0, 0, .08);
  }

  .mobile-screenshot-img-invoicing {
    border-radius: 8px;
    max-width: 100%;
    box-shadow: 0 7px 14px rgba(50, 50, 93, .1), 0 3px 6px rgba(0, 0, 0, .08);
  }

  .main-text-wrapper {
    /*text-align: center;*/
    margin-bottom: 3rem;
  }

  .widget-arrow {
    font-size: 32px;
    position: fixed;
    right: 100px;
    bottom: 32px;
  }

  .slack-chat {
    width: 300px;
  }

  @media (min-width: 768px) {
    .bot-img {
      max-width: 450px;
    }

    .slack-screenshot {
      border-radius: 10px;
    }

    .value-row {
      margin: 120px 0;
    }

    .widget-screenshot {
      border-radius: 12px;
    }

    .main-btn {
      margin-top: 0;
      width: 280px;
    }

    .main-btn-right {
      margin-left: 0.5rem !important;
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
    .feature-icon {
      font-size: 48px;
    }

    .ms-teams-icon {
      width: 60px;
    }

    .main-btn-right {
      margin-left: 16px;
    }

    .slack-screenshot {
      border-radius: 12px;
    }

    .top-container {
      padding-top: 100px;
      padding-bottom: 100px;
    }

    .value-title {
      font-size: 32px;
    }

    .value-row {
      margin: 200px 0;
    }

    .main-text-wrapper {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    .mobile-wrapper {
      width: 226px;
    }

    .wave-img {
      display: unset;
    }

    .trusted-by-wrapper {
      margin-top: 100px;
    }
  }

  @media (min-width: 1200px) {
    .value-row {
      margin: 200px 0;
    }

    .mobile-wrapper {
      width: 288px;
    }

    .top-container {
      padding-top: 100px;
      padding-bottom: 60px;
    }

    .blue-section {
      padding-bottom: 100px;
    }

    .screenshot-container {
      margin-top: 3rem;
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
