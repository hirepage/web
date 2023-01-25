<script>
  import draggable from 'vuedraggable'
  import AddIconModal from '@/components/modals/AddIconModal'
  import EditIconModal from '@/components/modals/EditIconModal'
  import socialIcons from '~/mixins/socialIcons'

  export default {
    components: {
      draggable,
      AddIconModal,
      EditIconModal
    },
    mixins: [socialIcons],
    data () {
      return {
        links: this.$store.state.user.links,
        icon: null
      }
    },
    computed: {
      user () {
        return this.$store.state.user
      }
    },
    watch: {
      user () {
        this.$store.dispatch('updatePreview')
        this.links = this.user.links
      }
    },
    methods: {
      updateOrder ({ newIndex }) {
        const link = this.links[newIndex]
        this.$api.user.orderLink(link.id, newIndex).catch(err => {
          console.error(err)
          this.links = this.$store.state.user.links
          this.$toast.error('Error reordering links')
        })
      },
      editIcon (icon) {
        this.icon = icon
        this.$bvModal.show('editIconModal')
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
      <edit-icon-modal :icon="icon"/>

      <b-card v-if="links.length" no-body>
        <draggable
          v-model="links"
          @end="updateOrder">
          <transition-group class="list-group list-group-flush">
            <b-list-group-item
              v-for="s in links"
              :key="s.id"
              button
              class="p-0"
              @click="editIcon(s)">
              <b-row align-v="center" no-gutters class="flex-nowrap">
                <b-col cols="auto">
                  <div class="handle p-3">
                    <div class="handle-line"/>
                    <div class="handle-line"/>
                  </div>
                </b-col>
                <b-col cols="auto" class="pr-2 semi-bold">
                  <font-awesome-icon
                    v-if="getIcon(s.icon)"
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
