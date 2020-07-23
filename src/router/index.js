import Vue from 'vue'
import Router from 'vue-router'

import main from '../views/main'
import buildTemplate from "../views/template/buildTemplate";
import allTemplate from "../views/template/allTemplate";
import TemplateInfo from "../views/template/TemplateInfo";
Vue.use(Router)

export default new Router({
  mode:'history',
  routes:[
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/template/build',
      name: 'buildTemplate',
      component: buildTemplate
    },
    {
      path: '/template/list',
      name: 'allTemplate',
      component: allTemplate
    },
    {
      path: '/template/info',
      name: 'TemplateInfo',
      component: TemplateInfo
    },
  ]
})
