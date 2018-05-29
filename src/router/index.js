import Vue from 'vue'
import Router from 'vue-router'

// Pages
import Page404 from '@/pages/Page404'
import Page500 from '@/pages/Page500'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

// Containers
import Full from '@/containers/Full'

// Views
import Home from '@/views/Home'

// Views - Demo
import Repository from '@/views/Repos'
import Dashboard from '@/views/Dashboard'
import Charts from '@/views/Charts'
import Widgets from '@/views/Widgets'

// Views - Components
import Buttons from '@/views/buttons/StandardButtons'
import SocialButtons from '@/views/buttons/SocialButtons'
import Cards from '@/views/base/Cards'
import Forms from '@/views/base/Forms'
import Switches from '@/views/base/Switches'
import Tables from '@/views/base/Tables'
import AntVueTable from '@/views/AntVueTable'

// Views - Icons
import FontAwesome from '@/views/icons/FontAwesome'
import SimpleLineIcons from '@/views/icons/SimpleLineIcons'

// dhtmlx-gantt
import GanttView from '@/views/GanttView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/404',
      name: 'Page404',
      component: Page404
    },
    {
      path: '/500',
      name: 'Page500',
      component: Page500
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/',
      redirect: '/home',
      name: 'Full',
      component: Full,
      meta: {
        label: '首页'
      },
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home,
          meta: {
            label: ' '
          }
        },
        {
          path: 'boards',
          redirect: '/boards/repository',
          name: 'Boards',
          component: {
            render (c) { return c('router-view') }
          },
          meta: {
            label: '图表',
            requiresAuth: true
          },
          children: [
            {
              path: 'repository',
              name: 'Repository',
              component: Repository,
              meta: {
                label: 'github'
              }
            },
            {
              path: 'dashboard',
              name: 'Dashboard',
              component: Dashboard,
              meta: {
                label: '仪表盘'
              }
            },
            {
              path: 'charts',
              name: 'Charts',
              component: Charts,
              meta: {
                label: '图表'
              }
            },
            {
              path: 'widgets',
              name: 'Widgets',
              component: Widgets,
              meta: {
                label: '小工具'
              }
            }
          ]
        },
        {
          path: 'components',
          redirect: '/components/buttons',
          name: 'Components',
          component: {
            render (c) { return c('router-view') }
          },
          meta: {
            label: '组件'
          },
          children: [
            {
              path: 'buttons',
              name: 'Buttons',
              component: Buttons,
              meta: {
                label: '按钮'
              }
            },
            {
              path: 'social-buttons',
              name: 'Social Buttons',
              component: SocialButtons,
              meta: {
                label: '社交按钮'
              }
            },
            {
              path: 'cards',
              name: 'Cards',
              component: Cards,
              meta: {
                label: '卡片'
              }
            },
            {
              path: 'forms',
              name: 'Forms',
              component: Forms,
              meta: {
                label: '表格'
              }
            },
            {
              path: 'switches',
              name: 'Switches',
              component: Switches,
              meta: {
                label: '开关'
              }
            },
            {
              path: 'tables',
              name: 'Tables',
              component: Tables,
              meta: {
                label: '表格'
              }
            },
            {
              path: 'antvuetable',
              name: 'AntVueTable',
              component: AntVueTable,
              meta: {
                label: 'AntVue树表'
              }
            },
            {
              path: 'ganttview',
              name: 'GanttView',
              component: GanttView,
              meta: {
                label: '甘特图'
              }
            }
          ]
        },
        {
          path: 'icons',
          redirect: '/icons/font-awesome',
          name: 'Icons',
          component: {
            render (c) { return c('router-view') }
          },
          meta: {
            label: '图标'
          },
          children: [
            {
              path: 'font-awesome',
              name: 'Font Awesome',
              component: FontAwesome,
              meta: {
                label: 'Awesome'
              }
            },
            {
              path: 'simple-line-icons',
              name: 'Simple Line Icons',
              component: SimpleLineIcons,
              meta: {
                label: 'SimpleLine'
              }
            }
          ]
        }
      ]
    },
    {
      // not found handler
      path: '*',
      component: Page404
    }
  ]
})
