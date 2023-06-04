<template>
  <!-- <nav v-if="$router">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <div>
    <router-view />
    <new-schedule />

  </div>
</template>
<script>

import NewSchedule from './components/NewSchedule.vue';

export default {

  components: { NewSchedule }
}


</script>