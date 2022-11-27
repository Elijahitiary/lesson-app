<template>
  <div class="shopping-card-cart">
    <p>Cart: {{ cart }}</p>
  </div>
  <!-- SORT -->
  <div class="sort-container">
    <p>Sort By</p>
    <select v-model="sortBy">
      <option value="" selected disabled hidden>Choose here</option>
      <option>Subject</option>
      <option>Location</option>
      <option>Price</option>
      <option>Availability</option>
    </select>
    <p v-if="sortBy">Order</p>
    <select v-if="sortBy" v-model="order">
      <option value="" selected disabled hidden>Choose here</option>
      <option>Ascending</option>
      <option>Descending</option>
    </select>
    <button v-if="order">sort</button>
  </div>

  <div class="container-lessons">
    <LessonCard
      v-for="lesson in lessons"
      :key="lesson.id"
      :lesson="lesson"
      @shoppingCart="updateShopping"
    />
  </div>
</template>

<script>
import LessonCard from '@/components/LessonCard.vue'
import lesson from '@/data'

export default {
  name: 'LessonsList',
  components: {
    LessonCard,
  },
  data() {
    return {
      sortBy: '',
      cart: 0,
      order: '',
      lessons: lesson(),
    }
  },
  methods: {
    updateShopping() {
      this.cart++
    },
  },
  computed: {
    sortedLissonsByLowestPrice() {
      return this.lessons.sort((a, b) => a.price - b.price)
    },
    sortedLissonsByHighestPrice() {
      return this.lessons.sort((a, b) => b.price - a.price)
    },
  },
}
</script>

<style>
.container-lessons {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  width: 100%;
}

.sort-container {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  margin-left: 45px;
  gap: 20px;
}
</style>
