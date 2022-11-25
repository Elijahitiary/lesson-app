<template>
  <div class="container-lessons">
    <LessonCard v-for="lesson in lessons" :key="lesson.id" :lesson="lesson" />
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
    return {
      lessons: [
        {
          id: 1,
          subject: 'Math',
          location: 'London',
          price: '£100',
          space: 5,
        },
        {
          id: 2,
          subject: 'Problem Solving',
          location: 'Luton',
          price: '£150',
          space: 5,
        },
        {
          id: 3,
          subject: 'Data Structure',
          location: 'Halton',
          price: '£200',
          space: 5,
        },
        {
          id: 4,
          subject: 'Database Analysis',
          location: 'Cambridgeshire',
          price: '£250',
          space: 5,
        },
        {
          id: 5,
          subject: 'Algorithm',
          location: 'Oxfordshire',
          price: '£300',
          space: 5,
        },
        {
          id: 6,
          subject: 'Python',
          location: 'Swindon',
          price: '£350',
          space: 5,
        },
        {
          id: 7,
          subject: 'Artificial Intelligence',
          location: 'York',
          price: '£400',
          space: 5,
        },
        {
          id: 8,
          subject: 'Machine Learning',
          location: 'Lincolnshire',
          price: '£450',
          space: 5,
        },
        {
          id: 9,
          subject: 'Frontend Development',
          location: 'Gloucestershire',
          price: '£500',
          space: 5,
        },
        {
          id: 10,
          subject: 'Fullstack Development',
          location: 'Somerset',
          price: '£200',
          space: 5,
        },
      ],
    }
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

.container-lessons {
  display: flex;
  flex-flow: row wrap;
}
</style>
