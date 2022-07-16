<template>
  <div class="container goal">
    <h1>Achieve your goals</h1>
    <GoalForm />
  </div>
</template>
<script>
  import GoalForm from '../components/home/GoalForm.vue'

  export default {
    components: { GoalForm },
    data () {
      return {
      
      }
    }
  }
</script>
<style>
  .container h1 {
    font-size: 50px;
    letter-spacing: -2px;
    margin-bottom: 30px;
    text-align: center;
    color: white;
    text-shadow: 1px 1px 2px blue;
    }

</style>
