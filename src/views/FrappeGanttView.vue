<template>
  <div class="animated fadeIn">
    <h2>使用SVG实现的可交互的甘特图</h2>
    <frappe-gantt :tasks="tasks" @taskSelected="selectTask"
      @dateChange="dateChange" @progressChange="progressChange" @viewChange="viewChange">
    </frappe-gantt>
  </div>
</template>

<script>
import FrappeGantt from './gantt/FrappeGantt'

export default {
  name: 'gantt-view',
  components: {FrappeGantt},
  data () {
    return {
      tasks: [
        {
          start: '2018-10-01',
          end: '2018-10-08',
          name: '页面重构',
          id: 'Task 0',
          progress: 20
        },
        {
          start: '2018-10-03',
          end: '2018-10-06',
          name: '添加新内容',
          id: 'Task 1',
          progress: 5,
          dependencies: 'Task 0'
        },
        {
          start: '2018-10-04',
          end: '2018-10-08',
          name: '应用新样式',
          id: 'Task 2',
          progress: 10,
          dependencies: 'Task 1'
        },
        {
          start: '2018-10-08',
          end: '2018-10-09',
          name: '审阅',
          id: 'Task 3',
          progress: 5,
          dependencies: 'Task 2'
        },
        {
          start: '2018-10-08',
          end: '2018-10-10',
          name: '部署',
          id: 'Task 4',
          progress: 0,
          dependencies: 'Task 2'
        },
        {
          start: '2018-10-11',
          end: '2018-10-11',
          name: '上线!',
          id: 'Task 5',
          progress: 0,
          dependencies: 'Task 4',
          custom_class: 'bar-milestone'
        }
      ],
      selectedTask: null,
      messages: []
    }
  },
  methods: {
    selectTask (task) {
      this.selectedTask = task
      let text = (task && task.name ? ` (${task.name})` : '')
      let message = `Task select: ${text}`
      this.addMessage(message)
    },

    addMessage (message) {
      this.messages.unshift(message)
      if (this.messages.length > 40) {
        this.messages.pop()
      }
      console.log(message)
    },

    dateChange (task, start, end) {
      let text = (task && task.name ? ` (${task.name})` : '')
      let message = `Task dateChange: ${text} ${start} ${end}`
      this.addMessage(message)
    },

    progressChange (task, progress) {
      let text = (task && task.name ? ` (${task.name})` : '')
      let message = `Task progressChange: ${text} ${progress}`
      this.addMessage(message)
    },

    viewChange (mode) {
      let message = `View change: ${mode}`
      this.addMessage(message)
    }
  }
}
</script>

<style>
</style>
