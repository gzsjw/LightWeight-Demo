<template>
  <div class="top-container">
    <dhtmlx-gantt class="left-container" :tasks="tasks" @task-updated="logTaskUpdate" @link-updated="logLinkUpdate" @task-selected="selectTask"></dhtmlx-gantt>
  </div>
</template>

<script>
import DhtmlxGantt from './gantt/DhtmlxGantt.vue'

export default {
  name: 'dhtmlx-gantt-view',
  components: {DhtmlxGantt},
  data () {
    return {
      tasks: {
        data: [
          {id: 1, text: 'Task #1', start_date: '15-04-2017', duration: 3, progress: 0.6},
          {id: 2, text: 'Task #2', start_date: '18-04-2017', duration: 3, progress: 0.4}
        ],
        links: [
          {id: 1, source: 1, target: 2, type: '0'}
        ]
      },
      selectedTask: null,
      messages: []
    }
  },
  methods: {
    selectTask (task) {
      this.selectedTask = task
    },

    addMessage (message) {
      this.messages.unshift(message)
      if (this.messages.length > 40) {
        this.messages.pop()
      }
    },

    logTaskUpdate (id, mode, task) {
      let text = (task && task.text ? ` (${task.text})` : '')
      let message = `Task ${mode}: ${id} ${text}`
      this.addMessage(message)
    },

    logLinkUpdate (id, mode, link) {
      let message = `Link ${mode}: ${id}`
      if (link) {
        message += ` ( source: ${link.source}, target: ${link.target} )`
      }
      this.addMessage(message)
    }
  }
}
</script>

<style scoped>
.top-container {
  height: 600px;
  width: 100%;
}

.left-container {
  width: 100%;
  height: 100%;
}

</style>
