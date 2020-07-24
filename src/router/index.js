import Vue from 'vue'
import Router from 'vue-router'

import main from '../views/main'
import buildTemplate from "../views/template/buildTemplate";
import allTemplate from "../views/template/allTemplate";
import TemplateInfo from "../views/template/TemplateInfo";
import allCoupons from "../views/distribution/allCoupons";
import usableTemplate from "../views/distribution/usableTemplate";
import acquireTemplate from "../views/distribution/acquireTemplate";

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
    {
      path: '/coupon/list',
      name: 'allCoupons',
      component: allCoupons
    },
    {
      path: '/coupon/template',
      name: 'usableTemplate',
      component: usableTemplate
    },
    {
      path: '/coupon/acquire',
      name: 'acquireTemplate',
      component: acquireTemplate
    }
  ]
})
