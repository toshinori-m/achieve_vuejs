<template>
  <div class="container">
    <h1>Achieve your goals</h1>
    <div class="aim">
      <GoalForm />
      <ThreemonthsGoalForm />
    </div>
  </div>
</template>
<script>
  import GoalForm from '../components/home/GoalForm.vue'
  import ThreemonthsGoalForm from '../components/home/ThreemonthsGoalForm.vue'
  
  export default {
    components: { GoalForm,ThreemonthsGoalForm }
  }
  
</script>
<style>
  .container h1 {
    font-size: 50px;
    letter-spacing: -2px;
    text-align: center;
    color: white;
    text-shadow: 1px 1px 2px blue;
  }
  .aim {
    margin: -200px 0px 0px 0px;
  }
</style>
