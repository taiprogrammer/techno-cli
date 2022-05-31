<template>
  <div class="produto" @click="getProduto()">
    <img :src="produto.img" :alt="produto.nome" class="produto-img" />
    <div class="produto-info">
      <span class="produto-preco">{{
        produto.preco | priceNumber(produto.preco)
      }}</span>
      <h2 class="produto-titulo">{{ produto.nome }}</h2>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProdutoCardComponent",
  props: {
    produto: {
      type: Object,
      default() {
        return new Object();
      },
    },
  },
  methods: {
    getProduto() {
      this.$emit("getProduto");
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
.produto {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  background: #fff;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.1);
  cursor: pointer;
  border-radius: 4px;
}

.produto:hover {
  transform: translateY(-5px);
}

.produto-img {
  max-width: 400px;
  margin-right: 40px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.produto-preco {
  color: rgba(0, 0, 0, 0.4);
}

.produto-titulo {
  font-size: 3rem;
  line-height: 1;
  font-weight: 600;
}
</style>
