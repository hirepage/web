<script>
  import DatePicker from '@/components/scheduler/DatePicker'
  import TimeSelector from '@/components/scheduler/TimeSelector'

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
        <time-selector :day="day" @update:time="time => $emit('update:time', time)"/>
      </b-col>
    </b-row>
  </b-modal>
</template>
