<template>
  <div id="gantt-target"></div>
</template>

<script>
import Gantt from 'frappe-gantt'

export default {
  name: 'frappe-gantt',
  props: {
    tasks: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data: function () {
    return {
      gantt: null
    }
  },
  methods: {
    on_click: function (task) {
      this.$emit('taskSelected', task)
    },
    on_date_change: function (task, start, end) {
      this.$emit('dateChange', task, start, end)
    },
    on_progress_change: function (task, progress) {
      this.$emit('progressChange', task, progress)
    },
    on_view_change: function (mode) {
      this.$emit('viewChange', mode)
    }
  },

  mounted () {
    this.gantt = new Gantt('#gantt-target', this.tasks, {
      on_click: this.on_click,
      on_date_change: this.on_date_change,
      on_progress_change: this.on_progress_change,
      on_view_change: this.on_view_change
    })
  }
}
</script>

<style>
</style>
