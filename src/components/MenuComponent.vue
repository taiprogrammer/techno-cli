<template>
  <header class="header">
    <div class="spacing">
      <img class="logo" src="@/assets/techno.svg" alt="Techno" />
      <div v-if="verifyAddress" @click="open" class="address" v-address>
        Endereços cadastrados
      </div>
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
    open() {
      this.$emit("getAddresses");
    },
  },
  computed: {
    verifyAddress() {
      const addresses = window.localStorage.address;
      return addresses.length > 2;
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

.address {
  cursor: pointer;
}
</style>
