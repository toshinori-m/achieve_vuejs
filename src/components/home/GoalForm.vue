<template>
  <div class="goal">
    <form @submit="redirectToGoal">
      <button class="ok_button">今期目標</button>
    </form>
    <div v-for="goal in goals" :key="goal.id">
      <p> {{ goal.aim }} </p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import getItem from '../../auth/getItem'
  
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
            headers: getItem
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