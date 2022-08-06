<template>
  <div class="report">
    <h2>今日の達成</h2>
    <form @submit.prevent ="report">
      <p>登録年月日</p>
      <p>{{ report_date }}</p>
      <div class="error">{{ error }}</div>
      <button class="ok_button">ok</button>
    </form>
  </div>
</template>
<script>
  export default {
    date () {
      return {
        report_date: "",
      }
    },
    created () {
      this.report_date = this.$route.query.datepicker_value  ;
    }
  }
</script>
<style>

</style>