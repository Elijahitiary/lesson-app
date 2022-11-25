<template>
  <div class="container-lessons">
    <LessonCard />
  </div>
</template>

<script>
import LessonCard from './components/lessonCard.vue'

export default {
  name: 'App',
  components: {
    LessonCard,
  },
  data() {
    return {}
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
