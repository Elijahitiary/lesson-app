<template>
  <div class="shopping-card-cart">
    <button :disabled="cart.length == 0">Cart: {{ cart.length }}</button>
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
      cart: [],
      order: '',
      lessons: lesson(),
    }
  },
  methods: {
    updateShopping(id) {
      this.cart.push(id)
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

.shopping-card-cart {
  position: fixed;
  top: 20px;
  right: 20px;
}

.shopping-card-cart button {
  cursor: pointer;
}
</style>
