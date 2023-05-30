<template>
  <div class="home">
    <TaskBar/>
    <NavBar/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue';
import TaskBar from '@/components/TaskBar.vue';

export default {
  name: 'HomeView',
  components: {
    TaskBar,
    NavBar
  }
}
</script>
