<template>
  <div class="goal-form">
    <form @submit="redirectToGoal">
      <button>今期目標</button>
    </form>
    <div v-for="goal in goals" :key="goal.id">
      <p class="aim">{{ goal.aim }}</p>
    </div>
    <div class="error">{{ error }}</div>
  </div>
</template>

<script>
  import axios from 'axios'
  
  export default {
    data () {
      return {
        goals: "",
        error: null
      }
    },
    methods: {
      async getGoal () {
        try {
          const res = await axios.get('http://localhost:3000/goals', {
            headers: {
            uid: window.localStorage.getItem('uid'),
            "access-token": window.localStorage.getItem('access-token'),
            client:window.localStorage.getItem('client')
            }
          })
          if (!res) {
            new Error('取得できませんでした')
          }
          this.goals = res.data
        } catch (error) {
        console.log({ error })
        this.error = 'goalを表示できませんでした'
        }
      },
      redirectToGoal () {
        this.$router.push({ name: 'GoalPage' })
      }
    },
    mounted() {
      this.getGoal()
    }
  }
</script>

<style>

</style>