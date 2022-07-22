<template>
  <div class="goal">
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
  .goal button {
    border: 0;
    line-height: 2;
    padding: 5px 20px;
    font-size: 20px;
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px 1px #000;
    border-radius: 10px;
    background-color: blue;
    background-image: linear-gradient(to top left,
                                      rgba(0, 0, 0, .2),
                                      rgba(0, 0, 0, .2) 30%,
                                      rgba(0, 0, 0, 0));
    box-shadow: inset 2px 2px 3px rgba(255, 255, 255, .6),
                inset -2px -2px 3px rgba(0, 0, 0, .6);
    }
    .goal button:hover {
      background-color: #0066FF;
    }
    .goal button:active {
      box-shadow: inset -2px -2px 3px rgba(255, 255, 255, .6),
                  inset 2px 2px 3px rgba(0, 0, 0, .6);
    }
    .goal p {
      font-size: 20px;
      padding: 5px 20px;
      margin: -50px;
      background-color: white;
      color: black;
    }
</style>