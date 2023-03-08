<script>
  import { get } from 'lodash'

  export default {
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
        this.$bvModal.hide('selectTimeModal')
      }
    }
  }
</script>

<template>
  <b-modal
    id="selectTimeModal"
    :title="`${service.meetingDuration} Minute Meeting`"
    hide-footer>
    <h3 class="semi-bold">
      {{ title }}
    </h3>
    <div class="text-center">
      <div v-for="time in times" :key="time.unix" class="times-width">
        <button
          class="time-btn"
          data-dismiss="modal"
          @click="selectTime(time)">
          <div class="time-text-wrapper">
            <div class="time-text">
              {{ time.display }}
            </div>
          </div>
        </button>
      </div>
    </div>
  </b-modal>
</template>

<style scoped>
  .time-text {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  .time-text-wrapper {
    background-color: #549DFF;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    text-align: center;
    vertical-align: middle;
    border-radius: 35%/50%;
    border: none;
    color: white;
  }

  .time-text-wrapper:hover {
    background-color: #4887dc;
  }

  .time-btn {
    border: none;
    position: relative;
    width: 100%;
    height: 100%;
    font-size: 16px;
    padding: 0;
    margin: 0;
    padding-bottom: 70%;
  }

  .times-width {
    padding: 6px;
    display: inline-block;
    width: calc(100% / 4);
  }

  @media (max-width: 768px) {
    .times-width {
      padding: 2px;
    }
  }
</style>
