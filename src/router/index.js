import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/WelcomePage'
import Home from '../views/HomePage'
import Chatroom from '../views/ChatroomPage'
import Training from '../views/TrainingPage'

const routes = [
  {
    path: '/',
    name: 'WelcomePage',
    component: Welcome
  },
  {
    path: '/chatroom',
    name: 'ChatroomPage',
    component: Chatroom
  },
  {
    path: '/home',
    name: 'HomePage',
    component: Home
  },
  {
    path: '/training',
    name: 'TrainingPage',
    component: Training
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
