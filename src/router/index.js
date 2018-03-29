import Vue from 'vue'
import Router from 'vue-router'
import auth from '@app/auth/routes'
import users from '@app/users/routes'
import dashboard from '@app/dashboard/routes'
import categories from '@app/categories/routes'

const routes = [
  ...auth,
  ...users,
  ...dashboard,
  ...categories
]

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes
})
