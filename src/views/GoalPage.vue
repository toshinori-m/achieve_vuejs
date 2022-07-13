<template>
  <div class="goal">
    <h2>今期目標</h2>
    <form @submit.prevent ="goalAim">
      <input type="text" required placeholder="今期目標を入力" v-model="aim">
      <button>ok</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      aim: ''
    }
  },
  methods: {
    async goalAim () {
      try {
        const res = await axios.post('http://localhost:3000/auth', {
          aim: this.aim
          }
        )
        console.log({ res })
        return res
      } catch (error) {
        console.log({ error })
      }
    }
  }
}
</script>

<style>
  .goal {
    text-align: center;
    padding: 150px 0;
  }
  .goal h2{
    font-size: 30px;
    letter-spacing: 5px;
    margin-bottom: 30px;
    text-align: center;
    color: white;
    text-shadow: 1px 1px 2px blue;
  }
  .goal form {
    width: 800px;
    margin: 60px auto;
  }
  .goal input {
    width: 100%;
    padding: 15px 20px;
    margin: 8px auto;
    border-radius: 4px;
    border: 1px solid rgb(238, 238, 238);
    outline: none;
    box-sizing: border-box;
  }
  .goal button {
    margin: 30px auto;
  }
</style>