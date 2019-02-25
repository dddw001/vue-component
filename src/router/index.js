import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestForm from '@/components/test/test-form.vue'
import TestCheckbox from '@/components/test/test-checkbox.vue'
import TestModel from '@/components/test/test-model/parent.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test-form',
      component: TestForm
    },
    {
      path: '/test-checkbox',
      component: TestCheckbox
    },
    {
      path: '/test-model',
      component: TestModel
    }
  ]
})
