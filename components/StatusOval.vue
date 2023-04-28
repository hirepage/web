<script>
  export default {
    props: {
      text: {
        type: String,
        default: '',
        required: true
      },
      variant: {
        type: String,
        default: 'default',
        required: true
      },
      size: {
        type: String,
        default: 'md'
      }
    },
    computed: {
      variantClass () {
        return `status-${this.variant}`
      },
      variantStyle () {
        return {
          fontSize: this.size === 'sm' ? '10px' : '12px',
          padding: this.size === 'sm' ? '1px 6px' : '2px 8px'
        }
      }
    }
  }
</script>

<template>
  <div class="status" :class="variantClass" :style="variantStyle">
    {{ text }}
  </div>
</template>

<style scoped>
  .status {
    display: inline-block;
    border-radius: 20px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }

  .status-primary {
    background-color: #d6ecff;
    color: #3d4eac;
  }

  .status-warning {
    background-color: #f8e5b9;
    color: #983705;
  }

  .status-default {
    background-color: #e3e8ee;
    color: #4f566b;
  }

  .status-success {
    background-color: #c3e6cb;
    color: #155724;
  }

  .status-danger {
    background-color: rgb(234, 55, 23);
    color: white;
  }
</style>
