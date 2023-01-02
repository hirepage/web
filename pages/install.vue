<script>
  export default {
    asyncData ({ redirect }) {
      const userScope = encodeURIComponent(['identity.basic', 'identity.email', 'identity.avatar'].join(','))
      const scope = encodeURIComponent(['conversations.connect:write', 'groups:write', 'mpim:write', 'im:write', 'channels:manage', 'channels:read', 'channels:join', 'team:read', 'chat:write', 'chat:write.customize', 'channels:history', 'users:read', 'files:read', 'files:write', 'commands'].join(','))
      redirect(`https://slack.com/oauth/v2/authorize?client_id=${process.env.SLACK_ID}&scope=${scope}&user_scope=${userScope}&redirect_uri=${encodeURIComponent(process.env.API_URL)}/install`)
    }
  }
</script>
