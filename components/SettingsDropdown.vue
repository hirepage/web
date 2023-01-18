<template>
  <b-dd
    v-if="$store.state.user"
    slot="header"
    variant="menu"
    right
    class="pr-0 pl-0"
    no-caret>
    <div slot="button-content">
      <b-img
        :src="$store.state.user.avatarUrl"
        width="34"
        height="34"
        rounded="circle"/>
    </div>
    <b-list-group flush>
      <b-dd-header>
        <div>
          {{ $store.state.user.fullName }}
        </div>
        <div>
          hire.page/{{ $store.state.user.username }}
        </div>
      </b-dd-header>
      <b-dd-divider/>
      <b-dd-item href="https://feedback.otechie.com" target="_blank">
        Request Feature
      </b-dd-item>
      <b-dd-item v-b-modal.logoutModal class="d-md-none">
        Docs
      </b-dd-item>
      <b-dd-divider class="d-md-none"/>
      <b-dd-item v-b-modal.logoutModal variant="danger">
        Log Out
      </b-dd-item>
    </b-list-group>
  </b-dd>
</template>
