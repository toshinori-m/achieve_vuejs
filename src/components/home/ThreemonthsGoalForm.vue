<template>
  <div class="threemonth">
    <form @submit="redirectToThreemonthsGoal">
      <button class="ok">３ヶ月毎の目標</button>
    </form>
    <div v-for="threemonths_goal in threemonths_goals" :key="threemonths_goal.id">
      <p>{{ threemonths_goal.aim }}</p>
    </div>
    <div class="error">{{ error }}</div>
  </div>
</template>

<script>
  import axios from 'axios'
  
  export default {
    data () {
      return {
        threemonths_goals: "",
        error: null
      }
    },
    methods: {
      async getThreemonthsGoal () {
        try {
          const res = await axios.get('http://localhost:3000/threemonths_goals', {
            headers: {
            uid: window.localStorage.getItem('uid'),
            "access-token": window.localStorage.getItem('access-token'),
            client:window.localStorage.getItem('client')
            }
          })
          if (!res) {
            new Error('取得できませんでした')
          }
          this.threemonths_goals = res.data
        } catch (error) {
        console.log({ error })
        this.error = 'threemonth goalを表示できませんでした'
        }
      },
      redirectToThreemonthsGoal () {
        this.$router.push({ name: 'ThreemonthsGoalPage' })
      }
    },
    mounted() {
      this.getThreemonthsGoal()
    }
  }
</script>

<style>
  .threemonth {
    text-align: center;
    margin: -40px 0;
  }
  .threemonth p {
    text-align:left;
    font-size: 15px;
    padding: 5px 20px;
    margin: -50px;
    background-color: white;
    color: black;
  }
</style>