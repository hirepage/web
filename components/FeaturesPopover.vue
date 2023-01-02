<template>
  <b-popover target="popover-target-1" triggers="focus hover" placement="bottom">
    <b-list-group flush>
      <b-list-group-item
        to="/#features"
        style="border: none; padding-top: 20px;"
        @click="$root.$emit('bv::hide::popover')">
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
      <b-list-group-item to="/#features" style="border: none;" @click="$root.$emit('bv::hide::popover')">
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
      <b-list-group-item
        to="/#features"
        style="border: none; padding-bottom: 20px;"
        @click="$root.$emit('bv::hide::popover')">
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
  </b-popover>
</template>

<style scoped>
  .product-header {
    font-weight: bold;
    font-size: 17px;
  }

  .product-item {
    font-size: 15px;
  }

  .product-icon {
    margin-left: 2px;
    margin-top: 4px;
    margin-right: 18px;
    color: #549DFF;
  }
</style>
