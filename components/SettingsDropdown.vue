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
          hire.page/{{ $store.state.user.username }}
        </div>
        <div/>
      </b-dd-header>
      <b-dd-item :href="`https://hire.page/${ $store.state.user.username }`" target="_blank">
        Open Page
        <font-awesome-icon
          size="sm"
          :icon="['fas', 'arrow-up-right-from-square']"
          width="24"
          height="24"/>
      </b-dd-item>
      <b-dd-divider/>
      <b-dd-item to="/admin">
        Profile
      </b-dd-item>
      <b-dd-item to="/admin/info">
        Info
      </b-dd-item>
      <b-dd-item to="/admin/form">
        Contact Form
      </b-dd-item>
      <b-dd-item to="/admin/settings">
        Settings
      </b-dd-item>
      <b-dd-divider/>
      <b-dd-item v-b-modal.logoutModal variant="danger">
        Log Out
      </b-dd-item>
    </b-list-group>
  </b-dd>
</template>
