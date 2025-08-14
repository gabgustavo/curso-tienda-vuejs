<template>
  <template v-if="isLogged">
    <SideBar />
    <notifications /> 
    <router-view/>
  </template>
  <template v-else>
    <h1>BBBB</h1>
      <router-view/>
  </template>
</template>

<script setup>
  import SideBar from '@/components/SideBar.vue';
  const isLogged = !!localStorage.getItem('token');
</script>

<style>



nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
