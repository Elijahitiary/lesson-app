<template>
  <div class="shopping-card-cart">
    <p>Cart: {{ cart }}</p>
  </div>
  <div class="container-lessons">
    <LessonCard v-for="lesson in lessons" :key="lesson.id" :lesson="lesson" />
  </div>
</template>

<script>
import LessonCard from './components/lessonCard.vue'
import lesson from './data'

export default {
  name: 'App',
  components: {
    LessonCard,
  },
  data() {
    return {
      cart: 0,
      lessons: lesson(),
    }
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container-lessons {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  width: 100%;
}
</style>
