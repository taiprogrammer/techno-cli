<template>
  <div class="modal-dados-carrinho">
    <div class="card-item" v-for="(item, index) in carrinho" :key="item.id">
      <div class="item-details">
        <img :src="item.img" />
        <div class="product-name">
          <p>{{ item.nome }}</p>
          <b>{{ item.preco | priceNumber }}</b>
        </div>
      </div>
      <img
        src="../assets/trash-solid.svg"
        class="excluir-item"
        alt=""
        @click="removeItemFromCart(index)"
      />
    </div>
    <h4 class="total-price-cart">Total: {{ getTotalPrice }}</h4>
  </div>
</template>
<script>
export default {
  name: "CartCard",
  props: {
    carrinho: {
      type: Array,
      default() {
        return new Array();
      },
    },
  },
  filters: {
    priceNumber(value) {
      return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.modal-dados-carrinho {
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.card-item {
  align-items: center;
  background: #fff;
  border-radius: 4px;
  display: flex;
  max-width: 600px;
  width: 500px;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin-top: 15px;
  justify-content: space-between;
  position: relative;
}

.card-item img {
  max-width: 115px;
}

.item-details {
  display: flex;
  align-items: center;
}

.excluir-item {
  height: 1.25rem;
  position: absolute;
  right: 20px;
  cursor: pointer;
}
.total-price-cart {
  margin-top: 20px;
}

.product-name {
  margin-left: 10px;
}
</style>