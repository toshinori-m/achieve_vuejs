<template>
  <div class="goal">
    <form @submit="redirectToGoal">
      <button class="ok_button">今期目標</button>
    </form>
    <div v-for="goal in goals" :key="goal.user_id">
      <div v-show = "goal.email === uid">
        <p>{{ goal.aim }}</p>
      </div>
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
        uid: localStorage.getItem('uid'),
        error: null
      }
    },
    methods: {
      async getGoal () {
        try {
          const res = await axios.get('http://localhost:3000/goals', {
            headers: {
            // uid: window.localStorage.getItem('uid'),
            uid: this.uid,
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
  .goal {
    text-align: center;
    padding: 150px 0;
  }
  .goal p {
    text-align:left;
    font-size: 15px;
    padding: 5px 20px;
    margin: -50px;
    background-color: white;
    color: black;
  }
</style>