import Vue from 'vue'
import Router from 'vue-router'
import Procedure from '../components/procedure'
import Entrance from '../components/entrance'
import Node from '../components/node'
import EntranceProcedure from '../components/entrance.procedure'
import ElementTest from '../components/element.test'
import EntranceTest from '../components/entrance.test'
import NodeTest from '../components/node.test'
import Execution from '../components/execution'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/procedure',
      name: 'Procedure',
      component: Procedure
    },

    {
      path: '/entrance',
      name: 'Entrance',
      component: Entrance
    },
    {
      path: '/node',
      name: 'Node',
      component: Node
    },
    {
      path: '/entrance-procedure',
      name: 'Entrance-Procedure',
      component: EntranceProcedure
    },
    {
      path: '/element-test',
      name: 'Element-Test',
      component: ElementTest
    },
    {
      path: '/entrance-test',
      name: 'Entrance-Test',
      component: EntranceTest
    },
    {
      path: '/node-test',
      name: 'Node-Test',
      component: NodeTest
    },
    {
      path: '/execution',
      name: 'Execution',
      component: Execution
    },
  ]
})
