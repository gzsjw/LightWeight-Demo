import config from './config'

export default {
  items: [
    {
      title: true,
      name: '示例',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: '组件',
      url: '/components',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Buttons',
          url: '/components/buttons',
          icon: 'icon-cursor'
        },
        {
          name: 'Social Buttons',
          url: '/components/social-buttons',
          icon: 'icon-cursor'
        },
        {
          name: 'Cards',
          url: '/components/cards',
          icon: 'icon-puzzle'
        },
        {
          name: 'Forms',
          url: '/components/forms',
          icon: 'icon-puzzle'
        },
        {
          name: 'Switches',
          url: '/components/switches',
          icon: 'icon-puzzle'
        },
        {
          name: 'Tables',
          url: '/components/tables',
          icon: 'icon-puzzle'
        },
        {
          name: 'AntVueTable',
          url: '/components/antvuetable',
          icon: 'icon-puzzle'
        },
        {
          name: 'DhtmlxGanttView',
          url: '/components/dhtmlxganttview',
          icon: 'icon-puzzle'
        }
      ]
    },
    {
      name: '图标',
      url: '/icons',
      icon: 'icon-star',
      children: [
        {
          name: 'Font Awesome',
          url: '/icons/font-awesome',
          icon: 'icon-star',
          badge: {
            variant: 'secondary',
            text: '4.7'
          }
        },
        {
          name: 'Simple Line Icons',
          url: '/icons/simple-line-icons',
          icon: 'icon-star'
        }
      ]
    },
    {
      divider: true,
      class: 'mt-auto'
    },
    {
      title: true,
      name: '权限节点',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: '图表',
      url: '/boards',
      icon: 'icon-pie-chart',
      children: [
        {
          name: 'Repository',
          url: '/boards/repository',
          funcnode: config.FuncNodeList.FuncNode01,
          icon: 'icon-social-github',
          variant: 'success',
          badge: {
            variant: 'primary',
            text: 'NEW'
          }
        },
        {
          name: 'Dashboard',
          url: '/boards/dashboard',
          funcnode: config.FuncNodeList.FuncNode02,
          icon: 'icon-speedometer'
        },
        {
          name: 'Charts',
          url: '/boards/charts',
          funcnode: config.FuncNodeList.FuncNode03,
          icon: 'icon-pie-chart'
        },
        {
          name: 'Widgets',
          url: '/boards/widgets',
          funcnode: config.FuncNodeList.FuncNode04,
          icon: 'icon-calculator'
        }
      ]
    }
  ]
}
