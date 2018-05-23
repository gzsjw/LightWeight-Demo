<template>
  <div class="animated fadeIn">
    <template v-if="error">
      <div >
        {{this.error}}
      </div>
    </template>
    <template v-else>
      <template v-if="response">
        <b-row>
          <b-col cols="3" v-for="repo in response" :key="repo.id">
            <b-card no-body class="text-center" bg-variant="primary" text-variant="white">
              <b-card-header>
                <h4>{{repo.name}}</h4>
              </b-card-header>
              <b-card-body>
                <img class="img-fluid" :src="repo.owner.avatar_url" :alt="repo.owner.login + ' Avatar'" style="height: 6rem;">
                </img>
              </b-card-body>
              <b-card-body>
                <b-row>
                  <b-col cols="4">
                    <div class="text-muted text-uppercase font-weight-bold font-xs">
                      <span>{{repo.stargazers_count}}</span>
                      <span>Star</span>
                    </div>
                  </b-col>
                  <b-col cols="4">
                    <a :href="repo.owner.html_url" target="_blank" class="btn btn-primary">Visit</a>
                  </b-col>
                  <b-col cols="4">
                    <div class="text-muted text-uppercase font-weight-bold font-xs">
                      <span>{{repo.forks_count}}</span>
                      <span>Forks</span>
                    </div>
                  </b-col>
                </b-row>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </template>
    </template>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'Repository',
  data () {
    return {
      githubUrl: 'https://api.github.com/search/repositories?q=language%3Ajavascript&sort=stars',
      response: null,
      error: null
    }
  },
  methods: {
    callGitHub () {
      axios.get(this.githubUrl)
        .then(response => {
          console.log('GitHub Response:', response)

          if (response.status !== 200) {
            this.error = response.statusText
            return
          }

          this.response = response.data.items
        })
        .catch(error => {
          // Request failed.
          console.log('error', error.response)
          this.error = error.response.statusText
        })
    }
  },
  mounted () {
    this.callGitHub()
  }
}
</script>

<style scoped>
</style>
