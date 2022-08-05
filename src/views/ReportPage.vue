<template>
  <div class="report">
    <h2>今日の達成</h2>
    <form @submit.prevent ="report">
      <p>登録年月日</p>
      <!-- <input reports.date_field: DatePicker_value, value: date> -->
      <!-- <p>{{ DatePicker.value, value: date }}</p> -->
      <!-- <p>{{ DatePicker.value }}</p> -->
      <!-- <input date_field: ="aim_1" required placeholder="１〜３月" v-model="aim_1"> -->


      <!-- <input :reports="datepicker_value"> -->
      <input type="datepicker_value :value">
      <!-- <input type="aim" required placeholder="今期目標を入力" v-model="aim"> -->

      <div class="error">{{ error }}</div>
      <button class="ok_button">ok</button>
    </form>
  </div>
</template>

<script>

</script>

<style>

</style>