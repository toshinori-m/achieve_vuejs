<template>
  <div class = "report">
    <h2>近日１０日間の記録</h2>
    <div v-for="record in records" :key="record.id">
      <p>datepicker_value = {{ record.datepicker_value }}</p>
      <p>location = {{ record.location }}</p>
      <p>time = {{ record.time }}</p>
      <p>condition = {{ record.condition }}</p>
      <p>intensity = {{ record.intensity }}</p>
      <p>point = {{ record.point }}</p>
      <p>report = {{ record.report }}</p>
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

</style>