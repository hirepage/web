<template>
  <div class="otechie-footer">
    <b-container>
      <footer>
        <!--        <b-row>-->
        <!--          <b-col-->
        <!--            md="3"-->
        <!--            class="d-none d-md-inline form-group">-->
        <!--            <b-form-group>-->
        <!--              <nuxt-link to="/">-->
        <!--                <b-img-->
        <!--                  src="https://cdn.otechie.com/attachments/XnLYSoIW/otechie-round.png"-->
        <!--                  height="64"-->
        <!--                  width="64"/>-->
        <!--              </nuxt-link>-->
        <!--            </b-form-group>-->
        <!--          </b-col>-->
        <!--          <b-col>-->
        <!--            <b-row>-->
        <!--              <b-col-->
        <!--                cols="6"-->
        <!--                md="4"-->
        <!--                class="pb-4">-->
        <!--                <b-form-group class="footer-header">-->
        <!--                  Otechie-->
        <!--                </b-form-group>-->
        <!--                <b-form-group>-->
        <!--                  <nuxt-link to="/">-->
        <!--                    Home-->
        <!--                  </nuxt-link>-->
        <!--                </b-form-group>-->
        <!--                <b-form-group>-->
        <!--                  <a href="https://twitter.com/dylangwight" target="_blank">-->
        <!--                    About-->
        <!--                  </a>-->
        <!--                </b-form-group>-->
        <!--                <b-form-group>-->
        <!--                  <nuxt-link to="/#pricing">-->
        <!--                    Pricing-->
        <!--                  </nuxt-link>-->
        <!--                </b-form-group>-->
        <!--                <b-form-group>-->
        <!--                  <a href="mailto:hello@otechie.com">-->
        <!--                    Contact Us-->
        <!--                  </a>-->
        <!--                </b-form-group>-->
        <!--              </b-col>-->
        <!--              <b-col-->
        <!--                cols="6"-->
        <!--                md="4"-->
        <!--                class="pb-4">-->
        <!--                <b-form-group class="footer-header">-->
        <!--                  Features-->
        <!--                </b-form-group>-->
        <!--                <b-form-group>-->
        <!--                  <a href="/#cross-platform-chat">-->
        <!--                    Cross Platform Chat-->
        <!--                  </a>-->
        <!--                </b-form-group>-->
        <!--                <b-form-group>-->
        <!--                  <a href="/#lead-intake">-->
        <!--                    Lead Intake-->
        <!--                  </a>-->
        <!--                </b-form-group>-->
        <!--                <b-form-group>-->
        <!--                  <a href="/#inline-billing">-->
        <!--                    Inline Billing-->
        <!--                  </a>-->
        <!--                </b-form-group>-->
        <!--              </b-col>-->

        <!--              <b-col-->
        <!--                cols="6"-->
        <!--                md="4"-->
        <!--                class="pb-4">-->
        <!--                <b-form-group class="footer-header">-->
        <!--                  Info-->
        <!--                </b-form-group>-->
        <!--                &lt;!&ndash;                <b-form-group>&ndash;&gt;-->
        <!--                &lt;!&ndash;                  <a href="https://github.com/otechie/widget#readme" target="_blank">&ndash;&gt;-->
        <!--                &lt;!&ndash;                    Documentation&ndash;&gt;-->
        <!--                &lt;!&ndash;                  </a>&ndash;&gt;-->
        <!--                &lt;!&ndash;                </b-form-group>&ndash;&gt;-->
        <!--                <b-form-group>-->
        <!--                  <a href="https://otechie-dev.slack.com/apps/AAY68EJKB-otechie" target="_blank">-->
        <!--                    Slack Directory-->
        <!--                  </a>-->
        <!--                </b-form-group>-->
        <!--                <b-form-group>-->
        <!--                  <a href="https://feedback.otechie.com" target="_blank">-->
        <!--                    Roadmap-->
        <!--                  </a>-->
        <!--                </b-form-group>-->
        <!--                <b-form-group>-->
        <!--                  <a href="https://feedback.otechie.com/changelog" target="_blank">-->
        <!--                    Updates-->
        <!--                  </a>-->
        <!--                </b-form-group>-->
        <!--              </b-col>-->
        <!--            </b-row>-->
        <!--          </b-col>-->
        <!--        </b-row>-->

        <!--        <hr class="pb-3">-->

        <b-row class="mt-5">
          <b-col
            order-md="2"
            class="text-right center-mobile mb-4"
            cols="auto"
            md="auto">
            <div class="form-group social-icons">
              <div class="social-icon">
                <a
                  href="https://www.youtube.com/c/dylanwight"
                  target="_blank"
                  title="YouTube Channel">
                  <font-awesome-icon
                    size="lg"
                    width="42.5"
                    height="35"
                    :icon="['fab', 'youtube']"/>
                </a>
              </div>
              <div class="social-icon">
                <a
                  href="https://twitter.com/hirepage_"
                  target="_blank"
                  title="Twitter Profile">
                  <font-awesome-icon
                    size="lg"
                    width="42.5"
                    height="35"
                    :icon="['fab', 'twitter']"/>
                </a>
              </div>
              <div class="social-icon">
                <a
                  href="https://www.linkedin.com/company/otechie"
                  target="_blank"
                  title="LinkedIn Profile">
                  <font-awesome-icon
                    size="lg"
                    width="42.5"
                    height="35"
                    :icon="['fab', 'linkedin']"/>
                </a>
              </div>
              <div class="social-icon">
                <a
                  href="mailto:hello@otechie.com"
                  title="Github Profile">
                  <font-awesome-icon
                    style="margin-top: 0px;"
                    size="lg"
                    width="42.5"
                    height="35"
                    :icon="['fas', 'envelope']"/>
                </a>
              </div>
            </div>
          </b-col>
          <b-col order-md="1" class="text-center mb-4">
            <nuxt-link to="/privacy" class="bottom-link mr-3">
              Privacy Policy
            </nuxt-link>
            <nuxt-link to="/terms" class="bottom-link ml-3">
              Terms of Use
            </nuxt-link>
          </b-col>
          <b-col
            md="auto"
            order-md="0"
            class="mb-4 center-mobile">
            <p>
              © 2023 Otechie, Inc
            </p>
          </b-col>
        </b-row>
      </footer>
    </b-container>
  </div>
</template>

<style scoped>


  .otechie-footer {
    color: #3a3a3a;
    background-color: white;
    border-top: solid #ececec 1px;
    font-size: 17px;
    padding: 46px 15px 64px 15px;
  }

  @media (min-width: 767px) {
    .otechie-footer {
      padding: 64px 0;
    }
  }

  .otechie-footer a, .dark-link {
    color: #3a3a3a;
  }

  .social-icons {
    margin: auto;
    max-width: 160px;
    display: flex;
  }

  .social-icon {
    flex: 1 1 0;
  }

  .footer-header {
    font-weight: bold;
  }

  @media (max-width: 767px) {
    .center-mobile {
      text-align: center !important;
      flex: 0 0 100% !important;
      max-width: 100% !important;
    }
  }

  @media (min-width: 768px) {
    .bottom-link {
      text-decoration: none;
    }

    .bottom-link:hover {
      text-decoration: underline;
    }
  }
</style>
