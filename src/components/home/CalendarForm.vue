<template>
  <div id='app' class="calendar">
    <h2>カレンダー</h2>
    <!-- <Calendar /> -->
    <DatePicker v-model="date">
      <template v-slot="{ inputValue, inputEvents }">
        <input
          class="bg-white border px-2 py-1 rounded"
          :value="inputValue"
          v-on="inputEvents"
        />
      </template>
    </DatePicker>
    <input type="button" value="日付を入力後クリック" id="submit_btn">
  </div>
</template>
<script>
import 'v-calendar/dist/style.css';
// import { Calendar, DatePicker } from 'v-calendar';
import {  DatePicker } from 'v-calendar';

export default {
  el: '#app',
  components: {
    // Calendar,
    DatePicker,
  },
  data() {
    return {
      date: new Date(),
      masks: {
        input: 'YYYY-MM-DD',
      },
    };
  }
}
</script>
<style>
  .calendar {
    text-align: center;
    margin: 200px 0px 0px 0px;
  }
  .calendar h2{
  font-size: 30px;
  letter-spacing: 5px;
  margin-bottom: 30px;
  text-align: center;
  color: white;
  text-shadow: 1px 1px 2px blue;
}
</style>