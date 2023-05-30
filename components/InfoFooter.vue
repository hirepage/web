<template>
  <div class="hirepage-footer">
    <b-container>
      <footer>
        <b-row class="mt-5">
          <b-col
            order-md="2"
            class="text-right center-mobile mb-4"
            cols="auto"
            md="auto">
            <div class="form-group social-icons">
              <div class="social-icon">
                <a
                  href="https://www.facebook.com/hirepageapp"
                  target="_blank"
                  title="Facebook Pae">
                  <font-awesome-icon
                    size="lg"
                    width="42.5"
                    height="35"
                    :icon="['fab', 'facebook']"/>
                </a>
              </div>
              <div class="social-icon">
                <a
                  href="https://twitter.com/hiredotpage"
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
                  href="https://www.linkedin.com/company/hirepage"
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
                  href="mailto:dylan@hire.page"
                  title="Contact Email">
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
            <a href="https://dylanwight.com" class="bottom-link ml-3">
              <span>© Dylan Wight</span>
            </a>
          </b-col>
        </b-row>
      </footer>
    </b-container>
  </div>
</template>

<style scoped>


  .hirepage-footer {
    color: #3a3a3a;
    background-color: white;
    border-top: solid #ececec 1px;
    font-size: 17px;
    padding: 46px 15px 64px 15px;
  }

  @media (min-width: 767px) {
    .hirepage-footer {
      padding: 64px 0;
    }
  }

  .hirepage-footer a, .dark-link {
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
