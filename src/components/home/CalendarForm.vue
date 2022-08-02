<template>
  <div>
    <!-- <ClientOnly><Calendar /></ClientOnly> -->
    <Calendar />
    <DatePicker v-model="date" />
    <!-- <v-date-picker v-model="date" /> -->
    <p>
      {{ date }}
    </p>
  </div>
</template>
<script>
import 'v-calendar/dist/style.css';
import { Calendar, DatePicker } from 'v-calendar';
export default {
  components: {
    Calendar,
    DatePicker,
  },
  data() {
    return {
      date: new Date(),
    };
  },
}
</script>