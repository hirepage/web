<script>
  import DaysOfWeekInput from '../DaysOfWeekInput'

  export default {
    components: { DaysOfWeekInput },
    data () {
      return {
        days: [1, 2, 3, 4, 5],
        start: '09:00',
        end: '17:00'
      }
    },
    computed: {
      disabled () {
        return !(this.days.length && this.start && this.end)
      }
    },
    methods: {
      addBlock (done) {
        this.$api.user.addAvailablity({
          days: this.days,
          start: this.start,
          end: this.end,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        }).then(block => {
          this.$bvModal.hide('addAvailabilityBlockModal')
        }).catch(err => {
          this.$toast.error('Error creating block')
          console.error(err)
        }).finally(done)
      }
    }
  }
</script>

<template>
  <b-modal
    id="addAvailabilityBlockModal"
    title="Add Availability Block"
    hide-footer>
    <b-form
      @submit.prevent=""
      @keydown.enter.prevent="$refs.addBtn.click()">
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
          @click="$bvModal.hide('addAvailabilityBlockModal')">
          Cancel
        </b-btn>
        <loading-button
          ref="addBtn"
          size="lg"
          variant="primary"
          :disabled="disabled"
          @click="addBlock">
          Add
        </loading-button>
      </div>
    </b-form>
  </b-modal>
</template>
