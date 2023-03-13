<script>
  import moment from 'moment'
  import DatePickerModal from '@/components/modals/DatePickerModal'

  export default {
    name: 'MeetingTimeInput',
    components: {
      DatePickerModal
    },
    props: {
      field: {
        type: Object,
        default: null
      },
      time: {
        type: Date,
        default: null
      }
    },
    data () {
      return {
        timeInner: this.time
      }
    },
    computed: {
      queryTime () {
        return this.$route.query.time
      }
    },
    watch: {
      queryTime () {
        const selected = moment.unix(this.queryTime)
        this.timeInner = selected ? selected.format('MMMM D, H:mma') : null
      }
    }
  }
</script>

<template>
  <div>
    <b-form-input
      v-model="timeInner"
      v-b-modal.datePickerModal
      placeholder="Select available time"
      class="profile-field"/>
    <date-picker-modal :time.sync="timeInner"/>
  </div>
</template>

<!-- TODO: style is duplicated from PageForm.vue -->
<style scoped>

  .profile-field {
    /*color: var(--text-color);*/
    background: rgba(0, 0, 0, 0.015);
  }

  .profile-field:focus {
    border-color: var(--theme-color);
  }

  .profile-field::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    /*color: var(--light-text-color);*/
    opacity: 1; /* Firefox */
  }

  .profile-field:-ms-input-placeholder { /* Internet Explorer 10-11 */
    /*color: var(--light-text-color);*/
  }

  .profile-field::-ms-input-placeholder { /* Microsoft Edge */
    color: var(--light-text-color);
  }
</style>
