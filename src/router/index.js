import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/WelcomePage'
import Home from '../views/HomePage'
import Goal from '../views/GoalPage'
import ThreemonthsGoal from '../views/ThreemonthsGoalPage.vue'
import MonthlyGoal from '../views/MonthlyGoalPage.vue'
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
    path: '/goal',
    name: 'GoalPage',
    component: Goal
  },
  {
    path: '/threemonths_goal',
    name: 'ThreemonthsGoalPage',
    component: ThreemonthsGoal
  },
  {
    path: '/monthly_goal',
    name: 'MonthlyGoalPage',
    component: MonthlyGoal
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
