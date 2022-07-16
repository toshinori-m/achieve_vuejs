<template>
  <div>
    <form @submit="redirectToGoal">
      <button>今期目標</button>
      <p class="goal">現在、 {{ goal }} が目標です</p>
      <div class="error">{{ err }}</div>
    </form>
  </div>
</template>

<script>
  import axios from 'axios'
  
  export default {
    data () {
      return {
        goal: [],
      }
    },
    methods: {
      redirectToGoal () {
        this.$router.push({ name: 'GoalPage' })
      }
    },
    async getGoals () {
      try {
        const res = await axios.get('http://localhost:3000/goals', {})
        if (!res) {
          new Error('メッセージを取得できませんでした')
        }
        this.goal = res.data
      } catch (err) {
        console.log(err)
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
    padding: 0 20px;
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
      font-size: 15px;
      padding: 5px 20px;
      background-color: white;
      color: black;
    }
</style>