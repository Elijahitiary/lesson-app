<template>
  <div class="lesson-card">
    <h4>Subject: {{ lesson.subject }}</h4>
    <p>Location: {{ lesson.location }}</p>
    <p>Price: {{ lesson.price }}</p>
    <p>Space: {{ lesson.space }}</p>
    <button @click="lesson.space > 0 ? lesson.space-- : (lesson.space = 0)">
      Add to Cart
    </button>
  </div>
</template>

<script>
export default {
  name: 'LessonCard',
  props: {
    lesson: Object,
  },
}
</script>

<style scoped>
.lesson-card {
  border: #000023 solid 1px;
  width: 20%;
  padding: 20px;
}

button {
  cursor: pointer;
}
</style>
