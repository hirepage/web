<script>
  import moment from 'moment-timezone'
  // import ListEmpty from '@/components/ListEmpty'
  import StatusOval from '@/components/StatusOval'
  import AddAvailabilityModal from '@/components/modals/AddAvailabilityModal'
  // import EditAvailabilityBlockModal from '@/components/modals/EditAvailabilityBlockModal'


  export default {
    layout: 'admin',
    components: {
      StatusOval,
      // ListEmpty,
      AddAvailabilityModal,
      // EditAvailabilityBlockModal
    },
    data () {
      return {
        tab: 'upcoming',
        availableBlocks: [],
        block: null,
        now: moment()
      }
    },
    computed: {
      blocks () {
        return this.$store.state.user.blocks
      },
      timezone () {
        return Intl.DateTimeFormat().resolvedOptions().timeZone
      }
    },
    methods: {
      timeString (block) {
        return moment.tz('1993-12-13 ' + block.start, block.timezone).clone().tz(this.timezone).format('h:mma')
          + ' - ' + moment.tz('1994-08-23 ' + block.end, block.timezone).clone().tz(this.timezone).format('h:mma')
      },
      dayName (day) {
        return moment.weekdaysShort(day)
      },
      momentDay (block) {
        return block.start.dayOfYear()
      },
      editBlock (block) {
        this.block = block
        this.$bvModal.show('editAvailabilityBlockModal')
      },
      deleteBlock (block) {
        this.block = block
        this.$bvModal.show('deleteMeetingBlockModal')
      },
      updateDays (days) {
        this.availableBlocks = days.map(block => {
          return {
            object: block.object,
            username: block.username,
            start: moment(block.start),
            end: moment(block.end),
            title: block.title,
            _id: block._id
          }
        })
      }
    }
  }
</script>

<template>
  <div>
    <h4 class="form-header d-none d-md-block">
      Availability
    </h4>
    <p class="mb-3">
      Set when you are available for consulting, clients will be able to schedule meetings with you during theses times.
    </p>
    <b-card-group>
      <b-card no-body header="">
        <b-row slot="header">
          <b-col>
            Repeating Availability
          </b-col>
          <b-col class="text-right" cols="auto">
            <i>{{ timezone }}</i>
          </b-col>
        </b-row>
        <b-list-group v-if="blocks.length" flush>
          <b-list-group-item v-for="b in blocks" :key="b.id">
            <b-row align-v="center" no-gutters>
              <b-col cols="auto" class="mr-2">
                {{ timeString(b) }}
              </b-col>
              <b-col>
                <status-oval
                  v-if="b.daysType === 'WEEKDAYS'"
                  text="Weekdays"
                  variant="primary"/>
                <status-oval
                  v-else-if="b.daysType === 'EVERYDAY'"
                  text="Everyday"
                  variant="primary"/>
                <div v-else>
                  <status-oval
                    v-for="day in b.days"
                    :key="day"
                    :text="dayName(day)"
                    variant="primary"
                    class="mr-1"/>
                </div>
              </b-col>
              <b-col cols="auto" class="pr-0">
                <b-dd
                  no-caret
                  variant="header"
                  right>
                  <font-awesome-icon slot="button-content" icon="ellipsis-h"/>
                  <b-dd-item-button
                    @click="editBlock(b)">
                    Edit
                  </b-dd-item-button>
                  <b-dd-item-button variant="danger" @click="deleteBlock(b)">
                    Delete
                  </b-dd-item-button>
                </b-dd>
              </b-col>
            </b-row>
          </b-list-group-item>
        </b-list-group>
<!--        <list-empty v-else object="availability blocks"/>-->
      </b-card>
    </b-card-group>

    <b-form-group>
      <b-btn
        v-b-modal.addAvailabilityBlockModal
        variant="primary"
        size="lg">
        Add Availability Block
      </b-btn>
    </b-form-group>

<!--    <edit-availability-block-modal :block="block"/>-->
<!--    <delete-availability-block-modal :block="block"/>-->
        <add-availability-modal/>
  </div>
</template>

<style scoped>
  .block-title {
    width: 100%;
    text-align: right;
  }

  .block-link {
    padding: 4px;
    color: #37586f;
    display: block;
    text-decoration: none;
  }
</style>
