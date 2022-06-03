<template>
  <div class="modal-dados-carrinho" id="content-cart">
    <div class="card-item" v-for="(item, index) in carrinho" :key="item.id">
      <div class="item-details">
        <img :src="item.detalhes.img" />
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
    <h4 class="total-price-cart">Total: {{ getTotalPrice | priceNumber }}</h4>
    <button class="modal-btn" @click="proceed">Prosseguir com a compra</button>
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
  methods: {
    removeItemFromCart(index) {
      this.$emit("remove", index);
    },
    proceed() {
      this.$emit("continue");
    },
  },
  computed: {
    getTotalPrice() {
      const price = this.carrinho.map((item) => item.preco);
      const totalPrice = price.reduce(
        (previous, current) => previous + current,
        0
      );
      return totalPrice;
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
#content-cart {
  margin: 1.875rem 15.625rem;
}
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
  margin-top: 15px;
  justify-content: space-between;
  position: relative;
}

.item-details img {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.card-item img {
  max-width: 115px;
}

.item-details {
  display: flex;
  align-items: center;
}

.item-details img {
  width: 100px;
}

.excluir-item {
  height: 1.25rem;
  position: absolute;
  right: 20px;
  cursor: pointer;
}
.total-price-cart {
  margin-top: 20px;
  padding-bottom: 20px;
}

.product-name {
  margin-left: 15px;
}

.modal-btn {
  margin-bottom: 40px;
  background: #000;
  color: #fff;
  cursor: pointer;
  border: none;
  padding: 10px 25px;
  border-radius: 4px;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.2);
  font-size: 1rem;
}
</style>