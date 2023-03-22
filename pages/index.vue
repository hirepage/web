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

      <div style="background-color: rgb(239, 242, 255); padding: 200px 0; text-align: center">
        <h1 class="main-title mb-5 mx-5">
          Loved by programmers, marketers, designers, artists, and small businesses
        </h1>
        <b-row align-h="center">
          <b-col cols="auto">
            <b-img
              src="https://s3.amazonaws.com/cdn.otechie.com/attachments/ZtL4XYe4j/profile-pic(3).png"
              fluid
              width="200"
              rounded="circle"/>
          </b-col>
          <b-col cols="auto">
            <b-img
              src="https://s3.amazonaws.com/cdn.otechie.com/attachments/FRPH29oVT/notsogood.jpeg"
              fluid
              width="200"
              rounded="circle"/>
          </b-col>
          <b-col cols="auto">
            <b-img
              src="https://s.gravatar.com/avatar/2696b782f951c4cf6e0299882afa3836?s=200&d=retro"
              fluid
              width="200"
              rounded="circle"/>
          </b-col>
          <b-col cols="auto">
            <b-img
              src="https://s.gravatar.com/avatar/6f1730c50f695669207ecc07f9ab9623?s=200&d=retro"
              fluid
              width="200"
              rounded="circle"/>
          </b-col>
          <b-col cols="auto">
            <b-img
              src="https://s3.amazonaws.com/cdn.otechie.com/attachments/TnqVD0txm/headshot.jpg"
              fluid
              width="200"
              rounded="circle"/>
          </b-col>
          <b-col cols="auto">
            <b-img
              src="https://s3.amazonaws.com/cdn.otechie.com/attachments/UjSi8R2AB/ProfilePicture(2)-Copy.jpg"
              fluid
              width="200"
              rounded="circle"/>
          </b-col>
        </b-row>
      </div>

      <div style="padding: 10px 0;" class="svg-background1">
        <b-container>
          <b-row align-v="center">
            <b-col cols="6" style="color: white">
              <h1 class="feature-title">
                Create Your Page
              </h1>
              <p class="feature-text">
                Quickly create an attractive page that explains your services, links to your pages, and lets clients
                contact you.
              </p>
              <b-btn pill variant="default" size="lg" class="main-btn">
                Get Started for Free
              </b-btn>
            </b-col>
            <b-col cols="auto" class="feature-card">
              <b-img
                src="/landing-examples.png"
                class="slack-chat mr-4"
                fluid
                alt="Page Example Screenshots"/>
            </b-col>
          </b-row>
        </b-container>
      </div>

      <div style="padding: 10px 0;" class="svg-background2">
        <b-container>
          <b-row align-v="center">
            <b-col order-md="1" style="color: white">
              <h1 class="feature-title">
                Set Your Availability
              </h1>
              <p class="feature-text">
                Set your availability and let clients choose the time for a meeting.
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
      <div style="padding: 10px 0;" class="svg-background3">
        <b-container>
          <b-row align-v="center">
            <b-col style="color: white;">
              <h1 class="feature-title">
                Customize Your Form
              </h1>
              <p class="feature-text">
                Create a form that takes in all the information you need to get started with a new client.
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
      <div style="padding: 10px 0;" class="svg-background4">
        <b-container>
          <b-row align-v="center">
            <b-col cols="6" order-md="1" style="color: white;">
              <h1 class="feature-title">
                Share Your Link
              </h1>
              <p class="feature-text">
                Send potential clients to your Hirepage from your website, LinkedIn, Twitter bio, or physical QR
                codes.
              </p>
              <b-btn pill variant="default" size="lg" class="main-btn">
                Get Started for Free
              </b-btn>
            </b-col>
            <b-col order-md="0" cols="auto" class="feature-card mr-5">
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

  .svg-background2 {
    background-color: #ff7700;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23cc0000' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23aa0000' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23d6002b' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23b10022' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23d9004b' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23b2003d' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23d3006c' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23ac0057' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23c4008c' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%239e0071' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23aa00aa' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23880088' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
    /* background by SVGBackgrounds.com */
  }

  .svg-background3 {
    background-color: #330033;
    background-attachment: fixed;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23404' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23505'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
    /* background by SVGBackgrounds.com */
  }

  .svg-background4 {
    background-color: #26FF9D;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpath fill='%2326ffc5' d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'/%3E%3Cpath fill='%2326ffec' d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'/%3E%3Cpath fill='%2327ebff' d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'/%3E%3Cpath fill='%2327c3ff' d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'/%3E%3Cpath fill='%23279CFF' d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'/%3E%3Cpath fill='%232a82ff' d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'/%3E%3Cpath fill='%232c68ff' d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'/%3E%3Cpath fill='%232f50ff' d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'/%3E%3Cpath fill='%233137ff' d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'/%3E%3Cpath fill='%234834FF' d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'/%3E%3C/g%3E%3C/svg%3E");
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
