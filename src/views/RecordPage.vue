<template>
  <div class = "record">
    <h2>１０日間の記録</h2>
    <div v-for="record in records" :key="record.id">
      <p>年月日 = {{ record.datepicker_value }}</p>
      <p>場所 = {{ record.location }}</p>
      <p>時間 = {{ record.time }}</p>
      <p>体調 = {{ record.condition }}</p>
      <p>負荷 = {{ record.intensity }}</p>
      <p>練習内容 = {{ record.point }}</p>
      <p>感想 = {{ record.report }}</p>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'

  export default {
    name: "recordFrom",
    data () {
      return {
        records: ""
      }
    },
    methods: {
      async getRecord () {
        try {
          const res = await axios.get('http://localhost:3000/reports', {
            headers: {
            uid: window.localStorage.getItem('uid'),
            "access-token": window.localStorage.getItem('access-token'),
            client:window.localStorage.getItem('client')
            }
          })
          if (!res) {
            new Error('取得できませんでした')
          }
          this.records = res.data
        } catch (error) {
        console.log({ error })
        this.error = 'recordを表示できませんでした'
        }
      }
    },
    mounted() {
      this.getRecord()
    }
  }
</script>
<style>
  .record {
  text-align: center;
  margin: 100px 0px 0px 0px;
  }
  .record h2{
  font-size: 30px;
  letter-spacing: 5px;
  margin: 30px;
  text-align: center;
  color: white;
  text-shadow: 1px 1px 2px blue;
  }
  .record p {
    text-align:left;
    font-size: 15px;
    /* padding: 5px 20px;
    margin: -50px; */
    background-color: white;
    color: black;
  }
</style>