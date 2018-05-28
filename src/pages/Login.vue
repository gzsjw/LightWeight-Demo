<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card-group">
            <div class="card p-4">
              <div class="card-body">
                <form @submit.prevent="checkCreds()">
                  <h1>登录</h1>
                  <p class="text-muted">输入账号密码</p>
                  <div class="input-group mb-3">
                    <span class="input-group-addon"><i class="icon-user"></i></span>
                    <input class="form-control" id="userCode" placeholder="用户" type="text" v-model="userCode" autofocus />
                  </div>
                  <div class="input-group mb-4">
                    <span class="input-group-addon"><i class="icon-lock"></i></span>
                    <input class="form-control" id="userPWD" placeholder="密码" type="password" v-model="userPWD" />
                  </div>
                  <div class="row">
                    <div class="col-4">
                      <button type="submit" class="btn btn-primary px-4">登录</button>
                    </div>
                    <div class="col-8">
                      <span class="text-left text-danger">{{loginMessage}}</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="card text-white bg-primary py-5 d-md-down-none">
              <div class="card-body d-flex flex-column justify-content-center">
                <div>
                  <h1 class="text-center p-2">翰智软件</h1>
                  <h1 class="text-center p-2">演示系统</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../api'

export default {
  name: 'Login',
  data () {
    return {
      userCode: '',
      userPWD: '',
      loginMessage: ''
    }
  },
  methods: {
    loginSucceed (loginresponse) {
      this.$store.commit('SET_USER', loginresponse.user)
      this.$store.commit('SET_AUTHORIZEDFUNCNODES', loginresponse.funccodes)
      this.$store.commit('SET_ISAUTHORITY', true)

      if (window.localStorage) {
        window.localStorage.setItem('userCode', loginresponse.user.userCode)
      }

      this.$router.push('/')
    },

    loginFail (error) {
      this.loginMessage = error.message
      console.log(error)
    },

    checkCreds () {
      const {userCode, userPWD} = this

      this.resetResponse()

      /* Making API call to authenticate a user */
      api.login({userCode, userPWD}, this.loginSucceed, this.loginFail)
    },

    resetResponse () {
      this.loginMessage = ''
    }
  },
  mounted () {
  }
}
</script>

<style>
</style>
