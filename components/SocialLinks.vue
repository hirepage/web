<script>
  import draggable from 'vuedraggable'
  import AddIconModal from './AddIconModal'
  import socialIcons from '~/mixins/socialIcons'
  // import EditStepModal from './EditStepModal'

  export default {
    components: {
      draggable,
      AddIconModal
      // EditStepModal
    },
    mixins: [socialIcons],
    data () {
      return {
        steps: this.$store.state.user.links,
        step: null,
        kind: 'INPUT'
      }
    },
    computed: {
      workspace () {
        return this.$store.state.workspace
      }
    },
    watch: {
      user () {
        this.steps = this.user.links
      }
    },
    methods: {
      updateOrder ({ newIndex }) {
        const step = this.steps[newIndex]
        this.$api.workspace.orderStep(step.id, newIndex).catch(err => {
          console.error(err)
          this.steps = this.$store.state.workspace.steps
          this.$toast.error('Error reordering steps')
        })
      },
      editStep (s) {
        this.step = s
        this.$bvModal.show('editStepModal')
      },
      openStepModal (kind) {
        this.kind = kind
        this.$bvModal.show('addStepModal')
      }
    }
  }
</script>

<template>
  <div>
    <h2>
      Social Icons
    </h2>
    <p class="mb-2">
      Add icons linking to your social profiles, email and more.
    </p>
    <b-card-group>
      <add-icon-modal/>
      <!--    <edit-step-modal :step="step"/>-->

      <b-card no-body>
        <draggable
          v-model="steps"
          @end="updateOrder">
          <transition-group class="list-group list-group-flush">
            <b-list-group-item
              v-for="s in steps"
              :key="s.id"
              button
              class="p-0"
              @click="editStep(s)">
              <b-row align-v="center" no-gutters class="flex-nowrap">
                <b-col cols="auto">
                  <div class="handle p-3">
                    <div class="handle-line"/>
                    <div class="handle-line"/>
                  </div>
                </b-col>
                <b-col cols="auto" class="pr-2 semi-bold">
                  <font-awesome-icon
                    size="lg"
                    width="42.5"
                    height="18"
                    :icon="getIcon(s.icon)"/>
                </b-col>
                <b-col style="max-lines: 1; overflow: hidden; white-space: nowrap;">
                  {{ s.url }}
                </b-col>
                <b-col style="opacity: 0.7" cols="auto" class="pr-3 pl-3">
                  <font-awesome-icon
                    icon="chevron-right"
                    size="sm"
                    width="24"
                    height="24"/>
                </b-col>
              </b-row>
            </b-list-group-item>
          </transition-group>
        </draggable>
      </b-card>
    </b-card-group>

    <b-btn v-b-modal.addIconModal class="mb-5" variant="primary">
      Add Icon
    </b-btn>
  </div>
</template>

<style>
  .flow-card {
    background-color: rgba(0, 0, 0, 0.03);
  }

  .flow-options-btn {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .flow-name {
    font-size: 18px;
  }

  .step-card {
    padding: 8px 8px;
    margin-bottom: 8px;
    background-color: white;
    border: none;
    border-radius: 3px;
    box-shadow: 0 1px 0 #091e4240;
  }

  .step-card:active, .step-card:hover {
    background-color: white;
  }

  .step-row {
    cursor: pointer !important;
    border: none;
    padding: 0;
    position: relative;
  }

  .step-row .form-message:hover {
    /*background-color: rgba(0, 0, 0, 0.002);*/
  }

  .handle {
    cursor: pointer;
  }

  .handle-line {
    opacity: 0.4;
    background-color: #3a3a3a;
    width: 12px;
    height: 2px;
    border-radius: 2px;
    margin: 2px;
  }

  .list-group-item-action:focus {
    background-color: inherit;
  }
</style>
