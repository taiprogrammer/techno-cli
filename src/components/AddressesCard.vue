<template>
  <div class="container">
    <div class="title">Meus endereços</div>
    <div
      class="container-cards"
      v-for="(address, key) in addresses"
      :key="`address_${key}`"
    >
      <div class="card-addresses" v-card-address>
        <div class="info">
          <div class="container-row">
            <p>Rua: {{ address.rua }},</p>
            <span>{{ address.numero }}</span>
          </div>
          <p>{{ address.bairro }}</p>
          <p>Cep {{ address.cep }}</p>
        </div>
        <img src="../assets/trash-solid.svg" @click="remove" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    addresses: {
      type: Array,
      default() {
        return new Array();
      },
    },
  },
  methods: {
    remove(index) {
      this.$emit("removeAddress", index);
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  margin: 1.875rem 22.375rem;
}

.container-cards {
  margin: 1rem 0;
}

.container-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title {
  font-size: 2rem;
  font-weight: 700;
}

span {
  margin-left: 5px;
}

.card-addresses {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
}

.card-addresses img {
  height: 20px;
  cursor: pointer;
}
</style>