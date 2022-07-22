<template>
  <div class="threemonth">
    <form @submit="redirectToThreemonthsGoal">
      <button>今期目標</button>
    </form>
    <div v-for="threemonth in threemonths" :key="threemonth.id">
      <p class="aim">{{ threemonth.aim }}</p>
    </div>
    <div class="error">{{ error }}</div>
  </div>
</template>

<script>
  import axios from 'axios'
  
  export default {
    data () {
      return {
        threemonths: "",
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
          this.threemonths = res.data
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
  .threemonth button {
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
    .threemonth button:hover {
      background-color: #0066FF;
    }
    .threemonth button:active {
      box-shadow: inset -2px -2px 3px rgba(255, 255, 255, .6),
                  inset 2px 2px 3px rgba(0, 0, 0, .6);
    }
    .threemonth p {
      font-size: 20px;
      padding: 5px 20px;
      margin: -50px;
      background-color: white;
      color: black;
    }
</style>