<template>
  <div class="shopping-card-container">
    <img :src="item.image" :alt="item.subject + ' image'" />
    <p>{{ item.subject }}</p>
    <p>{{ item.location }}</p>
    <p>{{ '£' + item.price }}</p>
    <button @click="removeItem" class="remove-btn">remove</button>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCart',
  props: {
    item: Object,
    index: Number,
  },
  methods: {
    removeItem() {
      this.$store.state.cart.splice(this.index, 1)
    },
  },
}
</script>

<style scoped>
.shopping-card-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.shopping-card-container img {
  width: 80px;
  height: 50px;
  object-fit: cover;
  box-shadow: 2px 2px 5px #58585844;
}
p {
  width: 100px;
}

.remove-btn {
  cursor: pointer;
}
</style>
