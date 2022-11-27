<template>
  <div class="shopping-card-cart">
    <button @click="openLessons">Cart: {{ items.length }}</button>
  </div>
  <div class="shopping-list">
    <ShoppingCart
      v-for="(item, index) in items"
      :item="item"
      :key="index"
      :index="index"
    />
  </div>
  <p>Total: £{{ totalPrice }}</p>
</template>

<script>
import ShoppingCart from '@/components/ShoppingCart.vue'
export default {
  name: 'ShoppingList',
  components: {
    ShoppingCart,
  },
  data() {
    return {
      items: this.$store.state.cart,
    }
  },
  methods: {
    openLessons() {
      this.$router.push({ path: '/' })
    },
  },
  computed: {
    totalPrice() {
      const sum = this.items.reduce((accumulator, object) => {
        return accumulator + object.price
      }, 0)
      return sum
    },
  },
}
</script>

<style scoped>
.shopping-card-cart {
  position: fixed;
  top: 20px;
  right: 20px;
}

.shopping-list {
  border: 1px solid grey;
  width: 1000px;
  margin: 0 auto;
  padding: 30px;
  background-color: white;
}
</style>
