<script>
  export default {
    props: {
      avatarUrl: {
        type: String,
        default: null,
        required: true
      }
    },
    data () {
      return {
        file: null
      }
    },
    watch: {
      file (file) {
        if (!file) return
        this.$nuxt.$loading.start()
        this.$api.file.upload(file).then(url => {
          this.$emit('update:avatar-url', url)
        }).finally(this.$nuxt.$loading.finish)
      }
    }
  }
</script>

<template>
  <div class="avatar-image-wrapper">
    <div
      class="avatar-image"
      :style="`background-image: url(${avatarUrl});`">
      <label id="upload-profile-btn" class="btn btn-link btn-file upload-avatar-btn">
        <!-- TODO: Don't allow SVG-->
        <font-awesome-icon
          size="2x"
          icon="camera"
          width="24"
          height="24"/>
        <b-form-file
          v-model="file"
          accept="image/*"
          plain
          class="hidden-btn"/>
      </label>
    </div>
  </div>
</template>

<style scoped>
  .avatar-image {
    border-radius: 50%;
    border: white solid 3px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 150px;
    width: 150px;
    position: relative;
    z-index: 50;
    display: inline-block;
    text-align: center;
    overflow: hidden;
  }

  .avatar-image-wrapper {
    text-align: center;
  }

  .upload-avatar-btn {
    display: inline-block;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    position: absolute;
    margin-bottom: 0;
    line-height: 140px;
  }

  .btn-file {
    background-color: rgba(0, 0, 0, 0.2) !important;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.8);
    font-size: 32px;
  }

  .btn-file:hover {
    background-color: rgba(0, 0, 0, 0.3) !important;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.95);
    font-size: 32px;
  }
</style>
