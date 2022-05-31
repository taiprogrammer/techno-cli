<template>
  <header class="header">
    <div class="spacing">
      <img class="logo" src="@/assets/techno.svg" alt="Techno" />
      <div class="carrinho-menu">
        <img src="@/assets/carrinho.svg" @click="getCart" />
        {{ getCartLength }}
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "MenuComponent",
  props: {
    getCartLength: { type: Number, default: null },
  },
  methods: {
    getCart() {
      this.$emit("getCart");
    },
  },
};
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.spacing {
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.logo {
  width: 80px;
}

.carrinho-menu {
  display: flex;
  align-items: center;
  cursor: pointer;
}
</style>
