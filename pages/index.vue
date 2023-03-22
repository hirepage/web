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
        this.$router.push(this.username ? `/register?username=${this.username}` : '/register')
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
              Make it easy for new clients to hire you
            </h1>
            <div class="landing-text mt-3 pb-3">
              Join freelancers, consultants, and small businesses winning clients with Hirepage. Share your services,
              schedule meetings, and collect client information with one link. Get started in less than five
              minutes for free.
            </div>
            <b-form @submit.prevent="claimUsername">
              <b-input-group
                size="lg"
                prepend="hire.page/"
                class="username-input-group"
                @click="$refs.usernameInput.focus()">
                <b-form-input
                  ref="usernameInput"
                  v-model="username"
                  maxlength="64"
                  placeholder="yourname"/>
              </b-input-group>
            </b-form>
            <b-btn
              ref="claimBtn"
              size="lg"
              variant="primary"
              pill
              class="main-btn mt-3"
              @click="claimUsername">
              Claim your page
            </b-btn>
          </b-col>
          <b-col class="text-right">
            <b-img
              src="/landing-examples.png"
              class="slack-chat mr-4"
              fluid
              alt="Page Example Screenshots"/>
          </b-col>
        </b-row>
      </b-container>


      <b-container style="margin-bottom: 200px;">
        <b-row align-h="center">
          <b-col cols="auto">
            <b-img
              src="https://s3.amazonaws.com/cdn.otechie.com/attachments/ZtL4XYe4j/profile-pic(3).png"
              fluid
              width="150"
              rounded="circle"/>
          </b-col>
          <b-col cols="auto">
            <b-img
              src="https://s3.amazonaws.com/cdn.otechie.com/attachments/FRPH29oVT/notsogood.jpeg"
              fluid
              width="150"
              rounded="circle"/>
          </b-col>
          <b-col cols="auto">
            <b-img
              src="https://s.gravatar.com/avatar/2696b782f951c4cf6e0299882afa3836?s=200&d=retro"
              fluid
              width="150"
              rounded="circle"/>
          </b-col>
          <b-col cols="auto">
            <b-img
              src="https://s.gravatar.com/avatar/6f1730c50f695669207ecc07f9ab9623?s=200&d=retro"
              fluid
              width="150"
              rounded="circle"/>
          </b-col>
          <b-col cols="auto">
            <b-img
              src="https://s3.amazonaws.com/cdn.otechie.com/attachments/TnqVD0txm/headshot.jpg"
              fluid
              width="150"
              rounded="circle"/>
          </b-col>
          <b-col cols="auto">
            <b-img
              src="https://s3.amazonaws.com/cdn.otechie.com/attachments/UjSi8R2AB/ProfilePicture(2)-Copy.jpg"
              fluid
              width="150"
              rounded="circle"/>
          </b-col>

        </b-row>
      </b-container>

      <div style="padding: 10px 0;" class="svg-background1">
        <b-container>
          <b-row align-v="center">
            <b-col  style="color: white">
              <h1 class="semi-bold">
                Schedule Meetings
              </h1>
              <p class="pb-3">
                Set your availability and let clients choose the time for a meeting.
              </p>
              <b-btn pill variant="default" size="lg">
                Get Started for Free
              </b-btn>
            </b-col>
            <b-col cols="auto" class="feature-card">
              <b-img
                src="/schedule.png"
                class="slack-chat mr-4"
                fluid
                rounded
                alt="Page Example Screenshots"/>
            </b-col>
          </b-row>

          <b-row align-v="center"  style="margin-left: 100px;">
            <b-col cols="6" order-md="1" style="color: white;">
              <h1 class="semi-bold">
                Collect Info
              </h1>
              <p class="pb-3">
                Create a form that takes in all the information you need to get started with a new client.
              </p>
              <b-btn pill variant="default" size="lg">
                Get Started for Free
              </b-btn>
            </b-col>
            <b-col order-md="0" class="feature-card">
              <b-img
                src="/collect.png"
                class="slack-chat mr-4"
                fluid
                alt="Page Example Screenshots"/>
            </b-col>
          </b-row>

          <b-row align-v="center" class="feature-card" style="margin-left: 200px;">
            <b-col cols="6">
              <h1 class="semi-bold">
                Present your business
              </h1>
              <p class="pb-3">
                Explain your services, show your social media links, and customize your theme.
              </p>
              <b-btn pill variant="primary" size="lg">
                Get Started for Free
              </b-btn>
            </b-col>
            <b-col>
              <b-img
                src="/landing-examples.png"
                class="slack-chat mr-4"
                fluid
                alt="Page Example Screenshots"/>
            </b-col>
          </b-row>

          <b-row align-v="center" class="feature-card" style="margin-left: 300px;">
            <b-col cols="6">
              <h1 class="semi-bold">
                Share Your Page
              </h1>
              <p class="pb-3">
                Link to your Hirepage from your website, LinkedIn, Twitter bio, or with QR codes.
              </p>
              <b-btn pill variant="primary" size="lg">
                Get Started for Free
              </b-btn>
            </b-col>
            <b-col>
              <b-img
                src="/landing-examples.png"
                class="slack-chat mr-4"
                fluid
                alt="Page Example Screenshots"/>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
    <info-footer/>
  </div>
</template>

<style scoped>

  .top-color {
    min-height: 100vh;
  }

  .top-container {
    padding-top: 148px;
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
    width: 500px;
  }

  @media (min-width: 768px) {

    .main-btn {
      margin-top: 0;
      width: 280px;
    }

    .main-title {
      font-size: 56px;
    }

    .landing-text {
      font-size: 18px;
    }
  }

  @media (min-width: 992px) {
    .top-container {
      padding-top: 160px;
      padding-bottom: 100px;
    }

    .main-text-wrapper {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
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


  .username-input-group:focus-within .input-group-text {
    border-color: #80bdff !important;
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


  .svg-background1 {
    background-color: #23549DFF;
    /*background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='100%25' gradientTransform='rotate(240)'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%23549DFF'/%3E%3C/linearGradient%3E%3Cpattern patternUnits='userSpaceOnUse' id='b' width='540' height='450' x='0' y='0' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.1'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect x='0' y='0' fill='url(%23b)' width='100%25' height='100%25'/%3E%3C/svg%3E");*/
    background-attachment: fixed;
    background-size: cover;
    /* background by SVGBackgrounds.com */
  }

  .feature-card {
    padding: 16px;
    /*width: 1000px;*/
    /*max-width: 100%;*/
    background-color: white;
    box-shadow: rgb(0 0 0 / 25%) 0rem 1.75rem 3.125rem 0.25rem;
    border-radius: 44px;
    z-index: 10;
    margin: 200px 0;
  }

</style>
