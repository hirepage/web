<script>
  import DatePicker from '@/components/DatePicker'

  export default {
    components: {
      DatePicker
    },
    props: {
      day: {
        type: Object,
        default: null
      },
      service: {
        type: Object,
        default: null
      }
    },
    computed: {
      times () {
        return get(this.day, 'times') || []
      },
      title () {
        return `${get(this.day, 'display')}`
      }
    },
    methods: {
      selectTime (time) {
        this.$router.push({ query: { time: time.unix } })
        this.$bvModal.hide('datePickerModal')
      }
    }
  }
</script>

<template>
  <b-modal
    id="datePickerModal"
    :title="`Schedule 30m Meeting`"
    hide-footer>
    <date-picker/>
  </b-modal>
</template>

<style scoped>

</style>
