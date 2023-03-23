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
    <div ref="topColor" class="top-color svg-background1">
      <info-header fixed hide-border/>
      <b-container class="top-container">
        <b-row align-v="center" align-h="start">
          <b-col md="6" xl="6" class="main-text-wrapper">
            <h1 class="main-title">
<!--              Make it easy for new clients to hire you-->
<!--              Accept clients with a link-->
              Everything for booking clients in a simple page
<!--              A page for connecting with clients-->
<!--              Connecting with clients made simple-->
<!--              Everything you need to connect with clients in one page-->
<!--              Make connecting with new clients easy-->
            </h1>
            <div class="landing-text mt-3 pb-3">
              Join freelancers, consultants, and small businesses receiving clients with Hirepage. Share your services,
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
              variant="default"
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


      <div style="background-color: white; padding: 200px 0; text-align: center">
        <h1 class="main-title mb-5 mx-5">
          Loved by programmers, marketers, designers, artists, and small businesses
        </h1>
        <b-row align-h="center">
          <b-col cols="auto">
            <b-img
              src="https://s3.amazonaws.com/cdn.otechie.com/attachments/ZtL4XYe4j/profile-pic(3).png"
              fluid
              width="180"
              rounded="circle"/>
          </b-col>
          <b-col cols="auto">
            <b-img
              src="https://s3.amazonaws.com/cdn.otechie.com/attachments/FRPH29oVT/notsogood.jpeg"
              fluid
              width="180"
              rounded="circle"/>
          </b-col>
          <b-col cols="auto">
            <b-img
              src="https://s.gravatar.com/avatar/2696b782f951c4cf6e0299882afa3836?s=200&d=retro"
              fluid
              width="180"
              rounded="circle"/>
          </b-col>
          <b-col cols="auto">
            <b-img
              src="https://s.gravatar.com/avatar/6f1730c50f695669207ecc07f9ab9623?s=200&d=retro"
              fluid
              width="180"
              rounded="circle"/>
          </b-col>
          <b-col cols="auto">
            <b-img
              src="https://s3.amazonaws.com/cdn.otechie.com/attachments/TnqVD0txm/headshot.jpg"
              fluid
              width="180"
              rounded="circle"/>
          </b-col>
          <b-col cols="auto">
            <b-img
              src="https://s3.amazonaws.com/cdn.otechie.com/attachments/UjSi8R2AB/ProfilePicture(2)-Copy.jpg"
              fluid
              width="180"
              rounded="circle"/>
          </b-col>
        </b-row>
      </div>

      <div style="padding: 10px 0;" class="svg-background-meetings">
        <b-container>
          <b-row align-v="center">
            <b-col order-md="1" style="color: white">
              <h1 class="feature-title">
                Schedule Meetings
              </h1>
              <p class="feature-text">
                Save on the back and forth scheduling by allowing potential clients to book meetings from your contact
                form. Set your availability so clients can choose a time as they reach out.
              </p>
              <b-btn pill variant="default" size="lg" class="main-btn">
                Get Started for Free
              </b-btn>
            </b-col>
            <b-col order-md="0" cols="auto" class="feature-card mr-5">
              <b-img
                src="/schedule.png"
                class="slack-chat mr-4"
                fluid
                rounded
                alt="Page Example Screenshots"/>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <div style="padding: 10px 0;" class="svg-background-collect">
        <b-container>
          <b-row align-v="center">
            <b-col style="color: white;">
              <h1 class="feature-title">
                Collect Information
              </h1>
              <p class="feature-text">
                Make sure that you get all the info you need from potential clients upfront with a customizable contact
                form.
              </p>
              <b-btn pill variant="default" size="lg" class="main-btn">
                Get Started for Free
              </b-btn>
            </b-col>
            <b-col cols="auto" class="feature-card mr-5">
              <b-img
                src="/collect.png"
                class="slack-chat mr-4"
                fluid
                alt="Page Example Screenshots"/>
            </b-col>
          </b-row>
        </b-container>
      </div>


      <div style="padding: 10px 0;" class="svg-background-personalize">
        <b-container>
          <b-row align-v="center">
            <b-col order-md="1" cols="6" style="color: white" >
              <h1 class="feature-title">
                Personalize It
              </h1>
              <p class="feature-text">
                Make your Hirepage your own with themes, links to your social media pages, and a section to explain
                your experience and services.
              </p>
              <b-btn pill variant="default" size="lg" class="main-btn">
                Get Started for Free
              </b-btn>
            </b-col>
            <b-col order-md="0"  cols="auto" class="feature-card mr-5">
              <b-img
                src="/landing-examples.png"
                class="slack-chat mr-4"
                fluid
                alt="Page Example Screenshots"/>
            </b-col>
          </b-row>
        </b-container>
      </div>


      <div style="padding: 10px 0;" class="svg-background-share">
        <b-container>
          <b-row align-v="center">
            <b-col cols="6" order-md="0" style="color: white;">
              <h1 class="feature-title">
                Share Your Page
              </h1>
              <p class="feature-text">
                The world needs to know about your business! Send traffic to your Hirepage from your website, emails,
                Twitter bio, or print out QR codes.
              </p>
              <b-btn pill variant="default" size="lg" class="main-btn">
                Get Started for Free
              </b-btn>
            </b-col>
            <b-col order-md="1" cols="auto" class="feature-card mr-5">
              <b-img
                src="/landing-examples.png"
                class="slack-chat mr-4"
                fluid
                alt="Page Example Screenshots"/>
            </b-col>
          </b-row>
        </b-container>
      </div>


      <!--      <b-container>-->
      <!--        <div class="w-100 text-center mt-5 mb-5">-->
      <!--          <h1 class="main-title">-->
      <!--            FAQ-->
      <!--          </h1>-->
      <!--        </div>-->
      <!--      </b-container>-->
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
    color: white;
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
      font-size: 64px;
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

  .username-input-group {
    /*background-color: white;*/
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
    background-color: #549DFF;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='100%25' gradientTransform='rotate(126,720,394)'%3E%3Cstop offset='0' stop-color='%23549DFF'/%3E%3Cstop offset='1' stop-color='%2323549D'/%3E%3C/linearGradient%3E%3Cpattern patternUnits='userSpaceOnUse' id='b' width='540' height='450' x='0' y='0' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.03'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect x='0' y='0' fill='url(%23b)' width='100%25' height='100%25'/%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
    /* background by SVGBackgrounds.com */
  }

  .svg-background-meetings {
    background-color: #0f935d;
    /*background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%2317CC82' width='11' height='11'/%3E%3Crect fill='%2319ca80' x='10' width='11' height='11'/%3E%3Crect fill='%231ac77e' y='10' width='11' height='11'/%3E%3Crect fill='%231bc57b' x='20' width='11' height='11'/%3E%3Crect fill='%231cc279' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%231dc077' y='20' width='11' height='11'/%3E%3Crect fill='%231ebd75' x='30' width='11' height='11'/%3E%3Crect fill='%231fbb73' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%231fb871' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%2320b66f' y='30' width='11' height='11'/%3E%3Crect fill='%2320b36d' x='40' width='11' height='11'/%3E%3Crect fill='%2321b16b' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%2321ae69' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%2322ac67' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%2322aa65' y='40' width='11' height='11'/%3E%3Crect fill='%2322a763' x='50' width='11' height='11'/%3E%3Crect fill='%2322a561' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%2323a25f' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%2323a05d' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%23239e5b' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%23239b59' y='50' width='11' height='11'/%3E%3Crect fill='%23239957' x='60' width='11' height='11'/%3E%3Crect fill='%23239755' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%23239453' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%23229251' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%23228f4f' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%23228d4d' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%23228b4c' x='70' width='11' height='11'/%3E%3Crect fill='%2322894a' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%23218648' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%23218446' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%23218244' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%23217f43' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%23207d41' x='80' width='11' height='11'/%3E%3Crect fill='%23207b3f' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%231f793d' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%231f763c' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%231f743a' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%231e7238' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%231e7037' x='90' width='11' height='11'/%3E%3Crect fill='%231d6d35' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%231d6b33' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%231c6932' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%231c6730' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%231b652e' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%231a622d' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%231a602b' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%23195e2a' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%23195c28' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%23185a27' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%23175825' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%23175624' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%23165322' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%23155121' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%23154f1f' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%23144d1e' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%23134b1c' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%2313491b' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%23124719' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%23114518' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E");*/
    background-attachment: fixed;
    background-size: cover;
    /* background by SVGBackgrounds.com */
  }

  .svg-background-personalize {
    background-color: #ff7700;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23cc0000' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23aa0000' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23d6002b' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23b10022' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23d9004b' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23b2003d' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23d3006c' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23ac0057' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23c4008c' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%239e0071' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23aa00aa' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23880088' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
    /* background by SVGBackgrounds.com */
  }

  .svg-background-collect {
    background-color: #330033;
    background-attachment: fixed;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23404' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23505'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
    /* background by SVGBackgrounds.com */
  }

  .svg-background-share {
    background-color: #b34b56;
    /*background-image: url("https://images.unsplash.com/photo-1581343191085-f2ded7b8d9d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");*/
    background-attachment: fixed;
    background-size: cover;
    /* background by Unsplash */
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

  .feature-title {
    font-weight: bold;
    font-size: 36px;
    position: relative;
    font-size: 56px;
  }

  .feature-text {
    font-size: 22px;
    padding-bottom: 16px;
    opacity: 0.7;
  }

</style>
