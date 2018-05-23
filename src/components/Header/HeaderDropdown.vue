<template>
      <b-nav-item-dropdown class="px-2">
        <template slot="button-content">
          <img :src="user.avatar" class="img-avatar d-md-down-none">
          <span>用户：{{user.name}}</span>
        </template>
        <b-dropdown-header tag="div" class="text-center"><strong>Account</strong></b-dropdown-header>
        <b-dropdown-item><i class="fa fa-bell-o"></i> Updates<b-badge variant="info">{{itemsCount}}</b-badge></b-dropdown-item>
        <b-dropdown-item><i class="fa fa-envelope-o"></i> Messages<b-badge variant="success">{{itemsCount}}</b-badge></b-dropdown-item>
        <b-dropdown-item><i class="fa fa-tasks"></i> Tasks<b-badge variant="danger">{{itemsCount}}</b-badge></b-dropdown-item>
        <b-dropdown-item><i class="fa fa-comments"></i> Comments<b-badge variant="warning">{{itemsCount}}</b-badge></b-dropdown-item>
        <b-dropdown-header tag="div" class="text-center"><strong>Settings</strong></b-dropdown-header>
        <b-dropdown-item><i class="fa fa-user"></i> Profile</b-dropdown-item>
        <b-dropdown-item><i class="fa fa-wrench"></i> Settings</b-dropdown-item>
        <b-dropdown-item><i class="fa fa-usd"></i> Payments<b-badge variant="default">{{itemsCount}}</b-badge></b-dropdown-item>
        <b-dropdown-item><i class="fa fa-file"></i> Projects<b-badge variant="primary">{{itemsCount}}</b-badge></b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item><i class="fa fa-shield"></i> Lock Account</b-dropdown-item>
        <b-dropdown-item @click.prevent="logout"><i class="fa fa-lock"></i> Logout</b-dropdown-item>
      </b-nav-item-dropdown>
</template>

<script>
import { mapState } from 'vuex'
import utils from '@/utils'

export default {
  name: 'header-dropdown',
  computed: {
    ...mapState([
      'user'
    ])
  },
  data: () => {
    return { itemsCount: 42 }
  },
  methods: {
    logout () {
      utils.logout(this.$store, this.$router)
    }
  }
}
</script>
