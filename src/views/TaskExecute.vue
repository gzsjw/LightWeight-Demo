<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col lg="12" xl="7">
        <b-card :no-body="true">
          <div slot="header">
            <strong>输入参数</strong>
          </div>
          <b-card-body class="p-3">
            <b-form inline>
              <b-form-group id="fieldsetRegionCode" label="区域" label-for="regionCode" class="m-2">
                <b-form-input id="regionCode" type="text" v-model.trim="regionCode" placeholder="输入区域编码" class="ml-2"></b-form-input>
              </b-form-group>
              <b-form-group id="fieldsetCorpCode" label="公司" label-for="corpCode" class="m-2">
                <b-form-input id="corpCode" type="text" v-model.trim="corpCode" placeholder="输入公司编码" class="ml-2"></b-form-input>
              </b-form-group>
              <b-form-group id="fieldsetDeptCode" label="部门" label-for="deptCode" class="m-2">
                <b-form-input id="deptCode" type="text" v-model.trim="deptCode" placeholder="输入部门编码" class="ml-2"></b-form-input>
              </b-form-group>
              <b-form-group id="fieldsetPlanYear" label="年度" label-for="planYear" class="m-2">
                <b-form-input id="planYear" type="text" v-model.trim="planYear" placeholder="输入计划年度" class="ml-2"></b-form-input>
              </b-form-group>
              <b-form-group id="fieldsetPlanMonth" label="月份" label-for="planMonth" class="m-2">
                <b-form-input id="planMonth" type="text" v-model.trim="planMonth" placeholder="输入计划月份" class="ml-2"></b-form-input>
              </b-form-group>
            </b-form>
          </b-card-body>
        </b-card>
        <b-card :no-body="true">
          <div slot="header">
            <strong>任务列表</strong>
          </div>
          <b-card-body class="p-3">
            <b-table :items="taskfuncs" :fields="taskFields" :current-page="taskCurrentPage" :per-page="taskPerPage"
              hover striped bordered responsive>
              <template slot="actions" slot-scope="row">
                <b-button size="sm" variant="outline-primary" @click.stop="executeTaskFunction(row.item, row.index, $event.target)">
                  刷新
                </b-button>
              </template>
              <template slot="params" slot-scope="row">
                <template v-for="param of row.item.requireParams">
                  <b-badge pill variant="success">{{param}}</b-badge>
                </template>
              </template>
            </b-table>
            <nav>
              <b-pagination :total-rows="getRowCount(taskfuncs)" :per-page="taskPerPage" v-model="taskCurrentPage"
                prev-text="前一页" next-text="后一页" hide-goto-end-buttons/>
            </nav>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col lg="12" xl="5">
        <b-card :no-body="true">
          <div slot="header">
            <strong>执行结果</strong>
          </div>
          <b-card-body v-if="exeStatus===-1" class="p-3 clearfix">
            <i class="fa fa-spinner bg-secondary font-1xl p-3 mr-3 float-left"></i>
            <div class="text-secondary font-2xl mt-1">[暂无数据]</div>
          </b-card-body>
          <b-card-body v-if="exeStatus===0" class="p-3 clearfix">
            <b-progress height="3rem">
              <b-progress-bar :value="100" label="任务正在执行" variant="info" striped animated></b-progress-bar>
            </b-progress>
          </b-card-body>
          <b-card-body v-if="exeStatus===1" class="p-3 clearfix">
            <i class="fa fa-check bg-success font-1xl p-3 mr-3 float-left"></i>
            <div class="text-primary font-2xl mt-1">任务执行完毕，刷新的计划表如下所列</div>
          </b-card-body>
          <b-card-body v-if="exeStatus===2" class="p-3 clearfix">
            <i class="fa fa-exclamation-triangle bg-danger font-1xl p-3 mr-3 float-left"></i>
            <div class="text-danger font-2xl mt-1">任务执行出错，{{exeMessage}}</div>
          </b-card-body>
        </b-card>
        <b-card v-if="exeStatus===1" :no-body="true">
          <div slot="header">
            <strong>本次刷新计划表</strong>
          </div>
          <b-card-body class="p-3">
            <b-table :items="refreshPlans" :fields="planFields" :current-page="planCurrentPage" :per-page="plankPerPage"
              hover striped bordered responsive>
            </b-table>
            <nav>
              <b-pagination :total-rows="getRowCount(refreshPlans)" :per-page="plankPerPage" v-model="planCurrentPage"
                prev-text="前一页" next-text="后一页" hide-goto-end-buttons/>
            </nav>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import api from '../api'
import utils from '../utils'
import tasks from '../tasks'

export default {
  name: 'TaskExecute',
  data () {
    return {
      regionCode: null,
      corpCode: null,
      deptCode: null,
      planYear: null,
      planMonth: null,

      exeStatus: -1,
      exeMessage: null,
      taskCode: null,
      funcCode: -1,

      refreshPlans: [],

      taskCurrentPage: 1,
      taskPerPage: 5,
      planCurrentPage: 1,
      plankPerPage: 9
    }
  },
  computed: {
    taskfuncs: function () {
      return tasks.taskfuncs
    },
    taskFields: function () {
      return [
        {key: 'taskCode', label: '任务', thClass: 'align-middle text-center'},
        {key: 'taskDescription', label: '任务描述', thClass: 'align-middle text-center'},
        {key: 'funcCode', label: '功能', thClass: 'align-middle text-center'},
        {key: 'funcDescription', label: '功能描述', thClass: 'align-middle text-center'},
        {key: 'params', label: '参数', thClass: 'align-middle text-center'},
        {key: 'actions', label: '执行', thClass: 'align-middle text-center'}
      ]
    },
    planFields: function () {
      return [
        {key: 'planTypeStr', label: '计划表', sortable: true},
        {key: 'regionName', label: '区域', sortable: true},
        {key: 'corpName', label: '公司', sortable: true},
        {key: 'deptName', label: '部门', sortable: true},
        {key: 'planYear', label: '年度', sortable: true},
        {key: 'planMonth', label: '月份', sortable: true}
      ]
    }
  },
  methods: {
    executeTaskFunction (item, index, button) {
      var taskinstance = {
        taskCode: item.taskCode,
        funcCode: item.funcCode
      }
      for (let param of item.requireParams) {
        if (utils.isNullOrUndefined(this[param])) {
          this.$message({
            message: '参数[' + param + ']未设置，请提供所需参数后再执行任务。',
            type: 'warning'
          })
          return
        }
        taskinstance[param] = this[param]
      }
      console.info(taskinstance)
      this.exeStatus = 0
      api.taskExecute(taskinstance, this.executeSucceed, this.executeFail)
    },
    executeSucceed (data) {
      console.info(data)
      this.exeStatus = 1
      this.refreshPlans = data.exeResult
    },
    executeFail (error) {
      console.error(error.message)
      this.exeStatus = 2
      this.exeMessage = error.message
    },
    getRowCount (items) {
      return items.length
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>
