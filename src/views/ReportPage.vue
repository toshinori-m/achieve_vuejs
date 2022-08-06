<template>
  <div class="report">
    <h2>今日の達成</h2>
    <form @submit.prevent ="reports">
      <p>登録年月日</p>
      <p>{{ datepicker_value }}</p>
      <p>練習場所</p>
      <input type="location" required placeholder="練習場所を入力" v-model="location">
      <p>練習時間</p>
      <input type="text" required placeholder="練習時間を入力" v-model="time">
      <p>体調</p>
      <input type="condition" required placeholder="体調を入力" v-model="condition">
      <p>強度</p>
      <input type="intensity" required placeholder="強度を入力" v-model="intensity">
      <p>ポイント練習内容</p>
      <input type="point" required placeholder="ポイント練習内容を入力" v-model="point">
      <p>感想</p>
      <input type="report" required placeholder="感想を入力" v-model="report">
      <div class="error">{{ error }}</div>
      <button class="ok_button">ok</button>
    </form>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    date () {
      return {
        datepicker_value: "",
        location: "",
        time: "",
        condition: "",
        intensity: "",
        point: "",
        report: "",
      }
    },
    created () {
      this.datepicker_value = this.$route.query.datepicker_value  ;
    },
    methods: {
      async reports() {
        try {
          const res = await axios.post('http://localhost:3000/reports', {
            datepicker_value: this.datepicker_value,
            location: this.location, 
            time: this.time, 
            condition: this.condition,
            intensity: this.intensity, 
            point: this.point, 
            report: this.report,
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
          this.error = 'reportを表示できませんでした'
        }
      }
    }
  }
</script>
<style>
.report {
  text-align: center;
  padding: 100px 0;
}
.report h2{
  font-size: 30px;
  letter-spacing: 5px;
  margin: -30px;
  text-align: center;
  color: white;
  text-shadow: 1px 1px 2px blue;
}
.report form {
  width: 800px;
  margin: 60px auto;
}
.report input {
  width: 100%;
  padding: 5px 20px;
  margin: 8px auto;
  border-radius: 4px;
  border: 1px solid rgb(238, 238, 238);
  outline: none;
  box-sizing: border-box;
}
.report p {
  text-align: left;
  font-size: 17px;
  margin: 10px 0px 0px 0px;
  color: black;
}
</style>