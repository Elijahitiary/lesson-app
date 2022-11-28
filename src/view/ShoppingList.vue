<template>
  <div class="shopping-card-cart">
    <button class="card-btn" @click="openLessons">
      Cart: {{ items.length }}
    </button>
  </div>
  <div class="shopping-list">
    <ShoppingCart
      v-for="(item, index) in items"
      :item="item"
      :key="index"
      :index="index"
    />
  </div>
  <p class="total-price">Total Price: £{{ totalPrice }}</p>

  <div class="user-details">
    <div class="user-name-container">
      <p class="user-name">Your Name is: {{ username }}</p>
      <input v-model="username" placeholder="enter your name" />
    </div>
    <div class="user-phone-container">
      <p class="user-phone">Your Phone is: {{ userphone }}</p>
      <input v-model="userphone" placeholder="enter your phone" />
    </div>
    <button class="checkout">checkout</button>
  </div>
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
      username: '',
      userphone: '',
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

.shopping-list {
  border: 1px solid rgba(210, 210, 210, 0.575);
  width: 1000px;
  margin: 0 auto;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.07), 0 1px 4px rgba(0, 0, 0, 0.07);
  padding: 30px;
  padding-bottom: 10px;
}

.total-price {
  /* font-size: 22px; */
  font-weight: bold;
  max-width: 1060px;
  margin: 0 auto;
  text-align: left;
  margin-top: 15px;
}

.user-details {
  border-radius: 2px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  /* background-color: #2c3e50; */
  text-align: left;
  color: #2c3e50;
  max-width: 1060px;
  margin: 50px auto;
  padding: 30px 0;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.07), 0 1px 4px rgba(0, 0, 0, 0.07);
}

.user-name-container {
  margin-bottom: 25px;
}

.user-phone-container {
  margin-bottom: 35px;
}

.user-name-container p,
.user-phone-container p {
  margin: 0;
  margin-bottom: 5px;
}
.user-name-container input,
.user-phone-container input {
  width: 300px;
  outline: none;
  padding: 10px 15px;
  border-radius: 5px;
  border: #c5cace5c solid 1px;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.07), 0 1px 4px rgba(0, 0, 0, 0.07);
}

.checkout {
  width: 335px;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  border: #c5cace5c solid 1px;
}
</style>
