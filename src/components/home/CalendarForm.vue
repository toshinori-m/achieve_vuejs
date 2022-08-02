<template>
  <div class="calendar">
    <!-- <Calendar /> -->
    <!-- <DatePicker v-model="date" /> -->
    <DatePicker mode="date" v-model="date" :masks="masks"  />
      <!-- <template v-slot="{ inputValue, inputEvents }"> -->
      <template v-slot="{ inputValue, inputEvents }">
        <input
          id="input_date"
          class="bg-white border px-2 py-1 rounded"
          v-bind:value="inputValue"
          v-on="inputEvents"
        />
      </template>
    <!-- </DatePicker> -->
    <input type="button" value="日付を入力後クリック" id="submit_btn">
  </div>
</template>
<script>
import 'v-calendar/dist/style.css';
// import { Calendar, DatePicker } from 'v-calendar';
import {  DatePicker } from 'v-calendar';

export default {
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
</style>