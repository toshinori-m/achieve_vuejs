<template>
  <div class="record">
    <form @submit="redirectToRecord">
      <button class="ok_button">10日間の記録</button>
    </form>
  </div>
</template>
<script>
  // import axios from 'axios'
  
  export default {
    // data () {
    //   return {
    //     goals: "",
    //     error: null
    //   }
    // },
    methods: {
      // async getRecord () {
      //   try {
      //     const res = await axios.get('http://localhost:3000/goals', {
      //       headers: {
      //       uid: window.localStorage.getItem('uid'),
      //       "access-token": window.localStorage.getItem('access-token'),
      //       client:window.localStorage.getItem('client')
      //       }
      //     })
      //     if (!res) {
      //       new Error('取得できませんでした')
      //     }
      //     this.goals = res.data
      //   } catch (error) {
      //   console.log({ error })
      //   this.error = 'goalを表示できませんでした'
      //   }
      // },
      redirectToRecord () {
        this.$router.push({ name: 'RecordPage' })
      }
    }
    // mounted() {
    //   this.getRecord()
    // }
  }
</script>
<style>

</style>