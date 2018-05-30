import config from '../config'
import axios from 'axios'

export default {
  login (loginData, succeed, fail) {
    // 登录用户，授权节点
    const url = config.ApiUrlList.SYSTEM_LOGIN
    axios({ method: 'post', url: url, data: loginData })
      .then(response => {
        const loginresponse = response.data
        /* Checking if error object was returned from the server */
        if (loginresponse.loginResult !== 0) {
          fail({message: loginresponse.loginMessage})
          return
        }

        succeed(loginresponse)
      })
      .catch(error => {
        fail(error)
      })
  },

  queryGithub (succeed, fail) {
    axios.get(config.ApiUrlList.JS_SORTBYSTARS_GITHUB)
      .then(response => {
        // console.log('GitHub Response:', response)
        if (response.status === 200) {
          succeed(response.data.items)
        } else {
          fail({message: response.statusText})
        }
      })
      .catch(error => {
        // Request failed.
        fail(error)
      })
  }
}
