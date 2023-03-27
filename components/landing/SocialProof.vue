<script>
  export default {
    name: 'SocialProof',
    data () {
      return {
        users: [
          { avatarUrl: 'https://s3.amazonaws.com/cdn.otechie.com/attachments/ZtL4XYe4j/profile-pic(3).png' },
          { avatarUrl: 'https://s3.amazonaws.com/cdn.otechie.com/attachments/FRPH29oVT/notsogood.jpeg' },
          { avatarUrl: 'https://s3.amazonaws.com/cdn.otechie.com/attachments/TnqVD0txm/headshot.jpg' },
          { avatarUrl: 'https://s3.amazonaws.com/cdn.otechie.com/attachments/UjSi8R2AB/ProfilePicture(2)-Copy.jpg' },
          { avatarUrl: 'https://s.gravatar.com/avatar/6f1730c50f695669207ecc07f9ab9623?s=200&d=retro' },
          { avatarUrl: 'https://s.gravatar.com/avatar/2696b782f951c4cf6e0299882afa3836?s=200&d=retro' }
        ]
      }
    }
  }
</script>

<template>
  <b-container>
    <div style="margin: 140px 0;">
      <h1 class="semi-bold mb-5 mx-5" style="font-size: 56px;">
        Loved by programmers, marketers, designers, artists, and small businesses
      </h1>
      <b-row align-h="center">
        <b-col v-for="user in users" cols="auto">
          <b-img
            :src="user.avatarUrl"
            fluid
            width="160"
            rounded="circle"/>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<style scoped>

</style>
