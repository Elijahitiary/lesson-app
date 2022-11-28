<template>
  <div class="shopping-card-cart">
    <button
      class="card-btn"
      @click="openShopping"
      :disabled="this.$store.state.cart.length == 0"
      :class="{ dis: this.$store.state.cart.length == 0 }"
    >
      Cart: {{ this.$store.state.cart.length }}
    </button>
  </div>

  <!-- SEARCH -->
  <input
    v-model="search"
    @keypress="searchOnLessons"
    class="search"
    type="text"
    placeholder="search for lessons"
  />
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
      v-for="lesson in lessonFilter"
      :key="lesson.id"
      :lesson="lesson"
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
      search: '',
      sortBy: '',
      order: '',
      lessons: lesson(),
    }
  },
  methods: {
    openShopping() {
      this.$router.push({ path: '/Shopping' })
    },
  },
  computed: {
    lessonFilter() {
      return this.lessons.filter(lesson => {
        return (
          lesson.subject.toLowerCase().includes(this.search.toLowerCase()) ||
          lesson.location.toLowerCase().includes(this.search.toLowerCase())
        )
      })
    },
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
  z-index: 2;
}

.shopping-card-cart .card-btn {
  cursor: pointer;
  border: none;
  padding: 10px 25px;
  font-weight: bold;
  border-radius: 3px;
  color: white;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  background-image: linear-gradient(to right, #588de5, #3ac7dd);
  transition: all 0.2s ease;
}

.shopping-card-cart .card-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0px 10px 15px rgba(46, 156, 229, 0.4);
}

.shopping-card-cart .dis {
  cursor: not-allowed;
  background-image: linear-gradient(to right, gray, gray);
}

.shopping-card-cart .dis:hover {
  transform: translateY(0px);
  box-shadow: 0px 10px 15px rgba(218, 223, 227, 0.4);
}

.search {
  width: 90%;
  margin: 30px 0;
  padding: 10px 25px;
  border-radius: 50px;
  border: lightgray solid 1px;
  color: rgb(109, 103, 103);
  box-shadow: 0px 10px 15px rgba(218, 223, 227, 0.4);
  outline: none;
}

.search::placeholder {
  color: lightgray;
}
</style>
