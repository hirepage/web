<script>
  import { get } from 'lodash'

  export default {
    props: {
      color: {
        type: String,
        default: '#000000'
      }
    },
    data () {
      return {
        innerColor: this.color,
        pickerColor: this.color
      }
    },
    watch: {
      pickerColor () {
        this.$emit('update:color', this.pickerColor)
      },
      innerColor () {
        if (this.innerColor.match(/^#(?:[0-9a-fA-F]{3}){2}$/)) {
          this.$emit('update:color', this.innerColor)
        }
      },
      color () {
        this.innerColor = this.color
        this.pickerColor = this.color
      }
    }
  }
</script>

<template>
  <b-input-group>
    <b-input-group-prepend>
      <b-form-input v-model="pickerColor" type="color" class="color-picker"/>
    </b-input-group-prepend>
    <b-form-input v-model="innerColor" name="widget-innerColor" type="text"/>
  </b-input-group>
</template>

<style>
  .color-picker {
    width: 38px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
</style>
