<script>
  import DatePicker from '@/components/DatePicker'
  import TimeSelector from '@/components/TimeSelector'

  export default {
    components: {
      DatePicker,
      TimeSelector
    },
    props: {
      service: {
        type: Object,
        default: null
      }
    },
    data () {
      return {
        day: null
      }
    },
    computed: {
      times () {
        return get(this.day, 'times') || []
      },
      title () {
        return `${get(this.day, 'display')}`
      },
      size () {
        return this.day ? 'lg' : 'md'
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
    :size="size"
    hide-footer>
    <b-row align-h="center">
      <b-col :md="day ? '7' : 'auto'">
        <date-picker :day.sync="day"/>
      </b-col>
      <b-col v-if="day" md="5">
        <time-selector :day="day"/>
      </b-col>
    </b-row>
  </b-modal>
</template>

<style scoped>

</style>
