<script>
  export default {
    asyncData ({ redirect }) {
      redirect(`${process.env.API_URL}/user/quickbooks`)
    }
  }
</script>

<template>
  <div/>
</template>
