<script>
  import DaysOfWeekInput from '../DaysOfWeekInput'
  import moment from 'moment-timezone'

  export default {
    components: { DaysOfWeekInput },
    props: {
      block: {
        type: Object,
        default: null
      }
    },
    data () {
      return {
        days: [],
        start: null,
        end: null
      }
    },
    computed: {
      disabled () {
        return !(this.days.length && this.start && this.end && this.block)
      },
      timezone () {
        return Intl.DateTimeFormat().resolvedOptions().timeZone
      }
    },
    watch: {
      block () {
        this.loadBlock()
      }
    },
    created () {
      this.loadBlock()
    },
    methods: {
      updateBlock (done) {
        this.$api.block.editBlock({
          id: this.block.id,
          days: this.days,
          start: this.start,
          end: this.end,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        }).then(block => {
          this.$bvModal.hide('editAvailabilityBlockModal')
        }).catch(err => {
          this.$toast.error('Error editing block')
          console.error(err)
        }).finally(done)
      },
      loadBlock () {
        this.days = this.block?.days || []
        this.start = this.block ? this.convertTimezone(this.block.start, this.block.timezone) : null
        this.end = this.block ? this.convertTimezone(this.block.end, this.block.timezone) : null
      },
      convertTimezone (time, fromZone) {
        return moment.tz('1994-08-23 ' + time, fromZone)
          .clone().tz(this.timezone)
          .format('HH:mm')
      }
    }
  }
</script>

<template>
  <b-modal
    id="editAvailabilityBlockModal"
    title="Edit Availability Block"
    hide-footer
    @hidden="loadBlock">
    <days-of-week-input :days.sync="days"/>
    <hr>
    <b-row>
      <b-col cols="6">
        <b-form-group>
          <label>
            From
          </label>
          <b-form-input
            v-model="start"
            type="time"
            step="1800"/>
        </b-form-group>
      </b-col>
      <b-col cols="6">
        <b-form-group>
          <label>
            To
          </label>
          <b-form-input
            v-model="end"
            type="time"
            step="1800"/>
        </b-form-group>
      </b-col>
    </b-row>
    <div class="float-right">
      <b-btn
        class="mr-1"
        size="lg"
        variant="default"
        @click="$bvModal.hide('editAvailabilityBlockModal')">
        Cancel
      </b-btn>
      <loading-button
        ref="updateBtn"
        size="lg"
        variant="primary"
        :disabled="disabled"
        @click="updateBlock">
        Update
      </loading-button>
    </div>
  </b-modal>
</template>
