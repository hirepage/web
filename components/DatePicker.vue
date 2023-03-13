<script>
  import Moment from 'moment'
  import { extendMoment } from 'moment-range'
  import { range, get } from 'lodash'
  import TimeModal from '@/components/TimeModal'

  const moment = extendMoment(Moment)


  export default {
    components: { TimeModal },
    data () {
      return {
        monthMoment: this.$route.query.month ? moment(`${this.$route.query.month}-01`) : moment(),
        day: null,
        calendar: null
      }
    },
    computed: {
      days () {
        return get(this.calendar, 'dates') || []
      },
      startOfMonth () {
        return this.monthMoment.clone().startOf('month')
      },
      // days () {
      //   const monthRange = moment.range(
      //     this.startOfMonth,
      //     this.monthMoment.clone().endOf('month')
      //   )
      //   // Each day of the month with the time slots and the users available at that time
      //   return Array.from(monthRange.by('day')).map(day => {
      //     return {
      //       today: day.isSame(moment(), 'day') ? true : undefined,
      //       day: day.format('YYYY-MM-DD'),
      //       dayOfMonth: day.format('D'),
      //       display: day.format('ddd, MMM D'),
      //       times: []
      //     }
      //   })
      // },
      monthSpacerDays () {
        return range(this.startOfMonth.weekday())
      },
      weekDays () {
        return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      },
      timezone () {
        return Intl.DateTimeFormat().resolvedOptions().timeZone
      },
      month () {
        return this.$route.query.month
      },
      previousMonth () {
        const month = this.startOfMonth.clone().subtract(1, 'month').endOf('month')
        return month.isAfter(moment()) ? month.format('YYYY-MM') : undefined
      },
      nextMonth () {
        const month = this.startOfMonth.clone().add(1, 'month')
        return moment().add(6, 'month').endOf('month').isAfter(month) ? month.format('YYYY-MM') : undefined
      },
      monthDisplay () {
        return this.monthMoment.format('MMMM YYYY')
      }
    },
    watch: {
      month () {
        this.monthMoment = this.$route.query.month ? moment(`${this.$route.query.month}-01`) : moment()
        this.getAvailability()
      }
    },
    created () {
      if (process.client) {
        this.getAvailability()
      }
    },
    methods: {
      getAvailability () {
        this.calendar = null
        this.$api.user.getCalendar(this.$route.params.username, this.timezone, this.month, 30).then(calendar => {
          this.calendar = calendar
        }).catch(console.error)
      },
      changeMonth (month) {
        this.$router.push({ query: { month: month } })
      },
      selectDate (day) {
        this.day = day
        this.$bvModal.show('selectTimeModal')
      },
      dayClass (day) {
        return {
          'day-today': day.today,
          'day-unavailable': !day.times.length
        }
      }
    }
  }
</script>

<template>
  <div>
    <div style="max-width: 450px; margin: auto">
      <b-row align-v="center">
        <b-col>
          <h3 class="mb-2">
            {{ monthDisplay }}
          </h3>
        </b-col>
        <b-col cols="auto" class="mb-3">
          <b-btn variant="default" :disabled="!previousMonth" @click="changeMonth(previousMonth)">
            <font-awesome-icon icon="chevron-left" width="8" height="12"/>
          </b-btn>
          <b-btn variant="default" :disabled="!nextMonth" @click="changeMonth(nextMonth)">
            <font-awesome-icon icon="chevron-right" width="8" height="12"/>
          </b-btn>
        </b-col>
      </b-row>
      <div>
        <div v-for="weekDay in weekDays" :key="weekDay" class="days-width">
          {{ weekDay }}
        </div>
      </div>
      <div>
        <div v-for="d in monthSpacerDays" :key="d" class="days-width"/>
        <div v-for="d in days" :key="d.day" class="days-width">
          <b-btn
            class="btn-day"
            :disabled="!d.times.length"
            @click="selectDate(d)">
            <div class="day-text-wrapper" :class="dayClass(d)">
              <div class="day-text">
                {{ d.dayOfMonth }}
              </div>
            </div>
          </b-btn>
        </div>
      </div>
      <div class="help-block mt-3">
        {{ timezone }}
      </div>
    </div>
    <time-modal :day="day"/>
  </div>
</template>

<style scoped>

    .days-width {
        padding: 2px;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .day-text-wrapper {
        background-color: #549DFF;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        text-align: center;
        vertical-align: middle;
        border-radius: 50%;
        border: none;
        color: white;
    }

    .day-text {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        font-size: 20px;
    }

    .btn-day:enabled .day-text-wrapper:hover {
        background-color: #4887dc;
    }

    .days-width {
        padding: 6px;
        display: inline-block;
        width: calc((100% - 4px) / 7);
        height: 100%;
    }

    @media (max-width: 768px) {
        .days-width {
            padding: 2px;
        }
    }

    .btn-day {
        border: none;
        position: relative;
        width: 100%;
        height: 100%;
        font-size: 16px;
        padding: 0;
        margin: 0;
        padding-bottom: 100%;
        background-color: transparent !important;
        box-shadow: none !important;
    }

    .day-unavailable {
        color: rgba(0, 0, 0, .4);
        background-color: #ffffff;
        border: none;
    }

    .day-today {
        border: 2px rgba(0, 0, 0, .3) solid !important;
    }
</style>
