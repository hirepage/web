<script>
  import moment from 'moment'
  import ScheduleMeetingModal from '@/components/scheduler/ScheduleMeetingModal'

  export default {
    name: 'ScheduleMeetingInput',
    components: {
      ScheduleMeetingModal
    },
    props: {
      field: {
        type: Object,
        default: null
      },
      time: {
        type: Number,
        default: null
      }
    },
    computed: {
      timeDisplay () {
        return this.time ? moment.unix(this.time).format('MMMM D, H:mma') : null
      }
    }
  }
</script>

<template>
  <div>
    <b-form-input
      v-model="timeDisplay"
      v-b-modal.datePickerModal
      readonly
      placeholder="Select available time"
      class="profile-field"/>
    <schedule-meeting-modal @update:time="t => $emit('update:time', t)"/>
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
