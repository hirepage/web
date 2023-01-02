<script>
  export default {
    props: {
      variant: {
        type: String,
        default: null
      },
      disabled: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: 'md'
      },
      type: {
        type: String,
        default: null
      },
      spin: {
        type: Boolean,
        default: true
      },
      pill: {
        type: Boolean,
        default: false
      },
      block: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        loading: false
      }
    },
    methods: {
      click () {
        if (!this.disabled && !this.loading) {
          this.loading = true
          if (this.spin) {
            this.$refs.text.style.visibility = 'hidden'
            this.$refs.spin.style.visibility = 'visible'
          }
          this.$emit('click', this.done)
        }
      },
      done () {
        this.loading = false
        if (this.$refs.text && this.$refs.spin) {
          this.$refs.text.style.visibility = 'visible'
          this.$refs.spin.style.visibility = 'hidden'
        }
      }
    }
  }
</script>

<template>
  <b-btn
    class="loading-button"
    :disabled="disabled"
    :variant="variant"
    :size="size"
    :pill="pill"
    :type="type"
    :block="block"
    @click="click">
    <span ref="text">
      <slot name="icon"/>
      <slot/>
    </span>
    <div
      ref="spin"
      class="spinner">
      <div class="bounce1"/>
      <div class="bounce2"/>
      <div class="bounce3"/>
    </div>
  </b-btn>
</template>

<style scoped>
  .loading-button {
    position: relative;
  }

  .spinner {
    visibility: hidden;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 70px;
    text-align: center;
  }

  .spinner > div {
    width: 6px;
    height: 6px;
    background-color: #ffffff;
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }

  .btn-lg .spinner > div {
    width: 8px;
    height: 8px;
    background-color: #ffffff;
  }

  .btn-default > .spinner > div, .list-group-item > .spinner > div {
    background-color: #919191;
  }

  .spinner .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  .spinner .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  @-webkit-keyframes sk-bouncedelay {
    0%, 80%, 100% {
      -webkit-transform: scale(0)
    }
    40% {
      -webkit-transform: scale(1.0)
    }
  }

  @keyframes sk-bouncedelay {
    0%, 80%, 100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1.0);
      transform: scale(1.0);
    }
  }
</style>
