<script>
  import draggable from 'vuedraggable'

  export default {
    name: 'OptionsEditor',
    components: {
      draggable
    },
    props: {
      options: {
        type: Array,
        default: () => [],
        required: true
      }
    },
    data () {
      return {
        optionsLocal: this.options,
        newOption: ''
      }
    },
    methods: {
      addOption () {
        if (this.newOption.length && this.optionsLocal.length <= 8) {
          this.optionsLocal.push(this.newOption)
          this.newOption = ''
          this.$emit('update:options', this.optionsLocal)
        }
      },
      deleteOption (i) {
        this.optionsLocal.splice(i, 1)
        this.$emit('update:options', this.optionsLocal)
      },
      update () {
        console.log('optionsLocal', this.optionsLocal)
        this.$emit('update:options', this.optionsLocal)
      }
    }
  }
</script>

<template>
  <b-form-group label="Options">
    <b-form class="mb-1" @keydown.enter.prevent="addOption">
      <b-input-group>
        <b-form-input
          v-model="newOption"
          placeholder="Add Option"/>
        <b-input-group-append>
          <b-btn @click="addOption" variant="primary">
            <font-awesome-icon
              icon="plus"
              size="lg"/>
          </b-btn>
        </b-input-group-append>
      </b-input-group>
    </b-form>

    <draggable
      v-model="optionsLocal"
      @end="update">
      <transition-group>
        <div v-for="(o, index) in optionsLocal" :key="o" class="option-wrapper">
          <div class="option-pill">
            {{ o }}
            <b-btn variant="menu" style="padding: 0 2px;" @click="deleteOption(index)">
              <font-awesome-icon
                icon="times"
                style="color: #3a3a3a; margin-left: 4px;"
                size="sm"
                height="16"
                width="16"/>
            </b-btn>
          </div>
        </div>
      </transition-group>
    </draggable>
    <p class="help-block with-errors">
      Drag and drop to reorder options
    </p>
  </b-form-group>
</template>

<style scoped>
  .option-pill {
    border-radius: 20px;
    padding: 6px 12px;
    letter-spacing: 1px;
    text-transform: none;
    font-size: 13px !important;
    border: #ccc solid 1px !important;
    overflow: hidden;
  }

  .option-wrapper {
    display: inline-block;
    margin-top: 8px;
    margin-right: 8px;
  }
</style>
