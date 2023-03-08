<script>
  import moment from 'moment'
  import { range } from 'lodash'

  export default {
    props: {
      days: {
        type: Array,
        default: () => []
      }
    },
    computed: {
      dayNames () {
        return range(7).map(day => {
          return { value: day, text: moment.weekdaysShort(day) }
        })
      }
    },
    methods: {
      dayClicked (day) {
        let days = [...this.days] // clones array
        if (days.includes(day.value)) {
          days = days.filter(d => d !== day.value)
        } else {
          days.push(day.value)
        }
        this.$emit('update:days', days)
      },
      dayClass (day) {
        return { 'day-unselected': !this.days.includes(day.value) }
      }
    }
  }
</script>

<template>
  <b-form-group>
    <label>
      Select days
    </label>
    <div v-for="day in dayNames" :key="day.value" class="days-width">
      <button
        class="btn-day"
        @click="dayClicked(day)">
        <div class="day-text-wrapper" :class="dayClass(day)">
          <div class="day-text">
            {{ day.text }}
          </div>
        </div>
      </button>
    </div>
  </b-form-group>
</template>

<style scoped>
  .day-text-wrapper {
    background-color: #cfdce6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    text-align: center;
    vertical-align: middle;
    border-radius: 50%;
    border: none;
    color: #37586f;
  }

  .day-text {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  .btn-day:enabled .day-text-wrapper:hover {
    background-color: #bed0dd;
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
  }

  .days-width {
    padding: 6px;
    display: inline-block;
    width: calc(100% / 7);
    height: 100%;
  }

  @media (max-width: 768px) {
    .days-width {
      padding: 2px;
    }
  }

  .day-unselected {
    background-color: #ffffff !important;
    border: 2px rgb(207, 220, 230) solid;
    opacity: 0.7;
  }
</style>
