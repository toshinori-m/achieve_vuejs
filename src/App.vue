<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/NavHeader.vue';

export default ({
  name: 'App',
  components: { Header }
});
</script>

<style scoped>
</style>
