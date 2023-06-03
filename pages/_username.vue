<script>
  import meta from '@/mixins/meta'
  import MainProfile from '~/components/MainProfile.vue'

  export default {
    components: { MainProfile },
    mixins: [meta],
    computed: {
      videos () {
        return [
          'https://www.loom.com/embed/d86f34d1bad54b7397401a06e2d9a8cd',
          'https://www.loom.com/embed/d86f34d1bad54b7397401a06e2d9a8cd',
          'https://www.loom.com/embed/d86f34d1bad54b7397401a06e2d9a8cd',
          'https://www.loom.com/embed/d86f34d1bad54b7397401a06e2d9a8cd',
          'https://www.loom.com/embed/d86f34d1bad54b7397401a06e2d9a8cd',
          'https://www.loom.com/embed/d86f34d1bad54b7397401a06e2d9a8cd',
          'https://www.loom.com/embed/d86f34d1bad54b7397401a06e2d9a8cd'
        ]
      }
    },
    asyncData ({ params, app, error }) {
      return app.$api.user.getUser(params.username).then(user => {
        return { user }
      }).catch(err => {
        error(err)
      })
    }
  }
</script>

<template>
  <!--  <main-profile :user="user"/>-->
  <b-row class="mx-3 my-4">
    <b-col cols="8">
      <div>
        <div style="position: relative; padding-bottom: 62.5%; height: 0; overflow: clip">
          <iframe :src="videos[0]" frameborder="0"
                  webkitallowfullscreen mozallowfullscreen allowfullscreen
                  style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
        </div>
        <b-row class="mt-4" align-v="center">
          <b-col cols="auto">
            <b-img
              rounded="circle"
              ref="logoImg"
              class="logo-img"
              :src="user.avatarUrl"
              :alt="`${user.title}'s Profile Picture`"
              height="56"
              width="56"/>
          </b-col>
          <b-col cols="autp">
            <div class="text-left">
              <p class="semi-bold ">
                {{ user.title }}
              </p>
              <p class="">
                {{ user.bio }}
              </p>
            </div>
          </b-col>
          <b-col>
            <b-btn variant="primary" pill>
              Send Message
            </b-btn>
          </b-col>
          <b-col cols="auto">
            <b-btn variant="default" pill class="mr-2">
              View Resume
            </b-btn>
            <b-btn variant="default" pill>
              Share
            </b-btn>
          </b-col>
        </b-row>

        <div class="mt-4">
          <h3 class="semi-bold">
            Video Title
          </h3>
          <p>
            Video Description. afdasfasdfasdfasdfasdfasfd
          </p>
        </div>
      </div>
    </b-col>
    <b-col>
      <b-tabs content-class="mt-3">
        <b-tab title="All" active>
          <b-row
            md="3"
            cols="6"
            v-for="video in videos"
            :key="video" class="my-2">
            <b-col cols="6">
              <div style="position: relative; padding-bottom: 62.5%; height: 0; border-radius: 12px; overflow: clip">
                <iframe :src="video" frameborder="0"
                        webkitallowfullscreen mozallowfullscreen allowfullscreen
                        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
              </div>
            </b-col>
            <b-col cols="6">
              <h4>
                Video Title
              </h4>
              <p>
                Video Description. afdasfasdfasdfasdfasdfasfd
              </p>
            </b-col>
          </b-row>
        </b-tab>
        <b-tab title="About"><p>I'm the second tab</p></b-tab>
        <b-tab title="Career"><p>I'm the second tab</p></b-tab>
        <b-tab title="Projects"><p>I'm the second tab</p></b-tab>
        <b-tab title="Testimonials"><p>I'm a disabled tab!</p></b-tab>
      </b-tabs>
    </b-col>
  </b-row>
</template>
