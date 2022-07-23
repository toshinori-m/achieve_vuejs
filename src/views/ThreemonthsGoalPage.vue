<template>
  <div class="threemonths_goal">
    <h2>３ヶ月毎の目標</h2>
    <form @submit.prevent ="threemonths_goal">
      <p>１〜３月の目標</p>
      <input type="aim_1" required placeholder="１〜３月" v-model="aim_1">
      <p>４〜６月の目標</p>
      <input type="aim_2" required placeholder="４〜６月" v-model="aim_2">
      <p>７〜９月の目標</p>
      <input type="aim_3" required placeholder="７〜９月" v-model="aim_3">
      <p>１０〜１２月の目標</p>
      <input type="aim_4" required placeholder="１０〜１２月" v-model="aim_4">
      <div class="error">{{ error }}</div>
      <button>ok</button>
    </form>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      aim_1: '',
      aim_2: '',
      aim_3: '',
      aim_4: '',
      error: null
    }
  },
  methods: {
    async threemonths_goal() {
      try {
        const res = await axios.post('http://localhost:3000/threemonths_goals', {
          aim_1: this.aim_1,
          aim_2: this.aim_2, 
          aim_3: this.aim_3, 
          aim_4: this.aim_4,
          'access-token': localStorage.getItem('access-token'),
          client: localStorage.getItem('client'),
          uid: localStorage.getItem('uid')
        })
        .then(res => {
          console.log({ res })
          return res
        })
        if (!this.error) {
          this.$router.push({ name: 'HomePage' })
        }
        return res
      } catch (error) {
        console.log({ error })
        this.error = 'threemonths goalを表示できませんでした'
      }
    }
  }
}
</script>
<style>
  .threemonths_goal {
    text-align: center;
    padding: 100px 0;
  }
  .threemonths_goal h2{
    font-size: 30px;
    letter-spacing: 5px;
    margin-bottom: 30px;
    text-align: center;
    color: white;
    text-shadow: 1px 1px 2px blue;
  }
  .threemonths_goal form {
    width: 800px;
    margin: 60px auto;
  }
  .threemonths_goal input {
    width: 100%;
    padding: 15px 20px;
    margin: 8px auto;
    border-radius: 4px;
    border: 1px solid rgb(238, 238, 238);
    outline: none;
    box-sizing: border-box;
  }
  .threemonths_goal button {
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
    .threemonths_goal button:hover {
      background-color: #0066FF;
    }
    .threemonths_goal button:active {
      box-shadow: inset -2px -2px 3px rgba(255, 255, 255, .6),
                  inset 2px 2px 3px rgba(0, 0, 0, .6);
    }
    .threemonths_goal p {
      font-size: 20px;
      margin: 20px 300px 0px -300px;
      color: black;
    }
</style>
