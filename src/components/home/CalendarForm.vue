<template>
  <div class="calendar">
    <h2>	&lt;カレンダー&gt;</h2>
    <!-- <Calendar /> -->
    <DatePicker v-model="date">
      <template v-slot="{ inputValue, inputEvents }">
        <input
          class="number_of_days"
          :value="inputValue"
          v-on="inputEvents"
        />
      </template>
    </DatePicker>
    <input type="button" value="カレンダーの日付を選択後クリック" class="ok_button">
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
.calendar h2{
  font-size: 30px;
  letter-spacing: 5px;
  margin-bottom: 30px;
  text-align: center;
  color: white;
  text-shadow: 1px 1px 2px blue;
}
.number_of_days{
  font-size: 18px;
  padding: 5px 10px;
  letter-spacing: 5px;
  margin-bottom: 15px;
  text-align: center;
  border: none;
}
</style>