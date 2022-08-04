<template>
  <div class="report">
    <h2>今日の達成</h2>
    <form @submit.prevent ="report">
      <p>登録年月日</p>
      <!-- <date_field DatePicker_value, value:date> -->


      <div class="error">{{ error }}</div>
      <button class="ok_button">ok</button>
    </form>
  </div>
</template>

<script>

</script>

<style>

</style>