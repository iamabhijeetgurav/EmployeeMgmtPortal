// import Vue from 'vue'
import VueRouter from 'vue-router'
import SignUp from '../components/SignUp.vue'
import SignIn from '../components/SignIn.vue'

// Vue.useTransitionState(VueRouter)

const routes = [
  { path: '/signup', component: SignUp },
  { path: '/signin', component: SignIn }
]

const router = new VueRouter({
  routes
})

export default router