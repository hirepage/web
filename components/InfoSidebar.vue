<template>
  <b-sidebar
    id="sidebar-1"
    right>
    <div slot="header" style="width: 100%;">
      <b-btn v-b-toggle.sidebar-1 class="float-right p-2 details-btn mr-1 mt-1" variant="link">
        <svg
          viewBox="0 0 16 16"
          width="1em"
          height="1em"
          focusable="false"
          role="img"
          aria-label="x"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="bi-x b-icon bi">
          <g>
            <path
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </g>
        </svg>
      </b-btn>
      <div class="sidebar-icon" style="padding-bottom: 4px !important; height: unset !important;">
        <b-img src="/ChatPassText.svg" height="20"/>
      </div>
    </div>
    <hr class="mr-3 ml-3 mb-0">

    <router-link v-b-toggle.sidebar-features class="sidebar-link" :to="$route.fullPath">
      <b-row>
        <b-col>
          <span>Features</span>
        </b-col>
        <b-col cols="auto" class="pr-4">
          <font-awesome-icon
            icon="chevron-up"
            class="rotate-open"
            width="8"
            height="12"
            style="font-size: 12px; margin-left: 6px; margin-bottom: 1px;"/>
        </b-col>
      </b-row>
    </router-link>
    <b-collapse id="sidebar-features">
      <b-list-group flush>
        <b-list-group-item to="/#features" style="border: none; padding-top: 4px;">
          <b-row no-gutters>
            <b-col cols="auto">
              <font-awesome-icon
                class="product-icon"
                :icon="['fas', 'envelope']"
                size="lg"
                fixed-width/>
            </b-col>
            <b-col>
              <div class="product-header">
                Reply by Email
              </div>
              <div class="product-item">
                Email your clients from a Slack channel
              </div>
            </b-col>
          </b-row>
        </b-list-group-item>
        <b-list-group-item to="/#features" style="border: none;">
          <b-row no-gutters>
            <b-col cols="auto">
              <font-awesome-icon
                class="product-icon"
                :icon="['fab', 'slack']"
                size="lg"
                fixed-width/>
            </b-col>
            <b-col>
              <div class="product-header">
                Slack Connect
              </div>
              <div class="product-item">
                Allow clients to add themselves to your channel
              </div>
            </b-col>
          </b-row>
        </b-list-group-item>
        <b-list-group-item to="/#features" style="border: none; padding-bottom: 20px;">
          <b-row no-gutters>
            <b-col cols="auto">
              <b-img width="22"
                     class="product-icon"
                     src="/microsoft_teams_blue.svg"/>
            </b-col>
            <b-col>
              <div class="product-header">
                MS Teams Bridge
              </div>
              <div class="product-item">
                Create chat bridges to client's Team account
              </div>
            </b-col>
          </b-row>
        </b-list-group-item>
      </b-list-group>
    </b-collapse>
    <hr class="mr-3 ml-3 mb-0 mt-0">
    <nuxt-link
      class="sidebar-link"
      to="/#pricing">
      <span>Pricing</span>
    </nuxt-link>
    <hr class="mr-3 ml-3 mb-0 mt-0">
    <a
      href="https://feedback.otechie.com"
      target="_blank"
      class="sidebar-link"
      to="/docs">
      <span>Roadmap</span>
    </a>

    <hr class="mr-3 ml-3 mb-0 mt-0">

    <div class="m-3 mt-4">
      <b-form-group>
        <b-btn
          block
          variant="primary"
          class="sidebar-btn"
          size="lg"
          to="/waitlist">
          Join Waitlist
        </b-btn>
      </b-form-group>
    </div>
  </b-sidebar>
</template>

<style scoped>

  .sidebar-link {
    color: inherit;
    text-decoration: none;
    font-size: 20px;
    display: block;
    padding: 16px 16px;
  }

  .product-header {
    font-weight: bold;
    font-size: 14px;
  }

  .product-item {
    font-size: 14px;
  }

  .product-icon {
    margin-left: 2px;
    margin-top: 4px;
    margin-right: 18px;
    color: #549DFF;
  }

  .sidebar-icon {
    padding-top: 16px !important;
    padding-left: 15px !important;
    padding-bottom: 22px !important;
    height: 66px !important;
  }

  .details-btn {
    margin-right: 15px;
    text-decoration: none;
    color: inherit !important;
    user-select: none;
    padding-bottom: 10px;
  }

  .collapsed .rotate-open {
    transform: rotate(180deg);
    transition: transform 0.25s ease-in-out;
  }

  .not-collapsed .rotate-open {
    transform: none;
    transition: transform 0.25s ease-in-out;
  }
</style>
