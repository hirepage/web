<script>
  import draggable from 'vuedraggable'
  import AddFieldModal from '@/components/modals/AddFieldModal'
  import EditFieldModal from '@/components/modals/EditFieldModal'
  import socialIcons from '~/mixins/socialIcons'

  export default {
    components: {
      draggable,
      AddFieldModal,
      EditFieldModal
    },
    mixins: [socialIcons],
    data () {
      return {
        fields: this.$store.state.user.fields,
        field: null
      }
    },
    computed: {
      user () {
        return this.$store.state.user
      }
    },
    watch: {
      'user.fields' () {
        this.$store.dispatch('updatePreview')
        this.fields = this.user.fields
      }
    },
    methods: {
      updateOrder ({ newIndex }) {
        const field = this.fields[newIndex]
        this.$api.user.orderField(field.id, newIndex).catch(err => {
          console.error(err)
          this.fields = this.$store.state.user.fields
          this.$toast.error('Error reordering fields')
        })
      },
      editField (field) {
        this.field = field
        this.$bvModal.show('editFieldModal')
      }
    }
  }
</script>

<template>
  <div>
    <h2>
      Contact Form
    </h2>
    <p class="mb-2" style="opacity: 0.7">
      Collect information from potential clients. Responses will be sent to your email.
    </p>
    <b-card-group>
      <add-field-modal/>
      <edit-field-modal :field="field"/>

      <b-card no-body>
        <draggable
          v-model="fields"
          @end="updateOrder">
          <transition-group class="list-group list-group-flush">
            <b-list-group-item
              v-for="s in fields"
              :key="s.id"
              button
              class="p-0"
              @click="editField(s)">
              <b-row align-v="center" no-gutters class="flex-nowrap">
                <b-col cols="auto">
                  <div class="handle p-3">
                    <div class="handle-line"/>
                    <div class="handle-line"/>
                  </div>
                </b-col>
                <b-col cols="auto" class="pr-2 semi-bold">
                  <font-awesome-icon
                    v-if="getIcon(s.icon)"ContactFormEditor
                    size="lg"
                    width="42.5"
                    height="18"
                    :icon="getIcon(s.icon)"/>
                </b-col>
                <b-col style="max-lines: 1; overflow: hidden; white-space: nowrap;">
                  {{ s.label }}
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

    <b-btn v-b-modal.addFieldModal class="mb-5" variant="primary">
      Add Field
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
