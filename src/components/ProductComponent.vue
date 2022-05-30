<template>
  <div class="modal-container">
    <div class="modal-img" :alt="produto.nome">
      <img :src="produto.detalhes.img" />
    </div>
    <div class="modal-dados">
      <span class="modal-preco">{{ produto.preco | priceNumber() }}</span>
      <h2 class="modal-titulo">{{ produto.nome }}</h2>
      <p class="modal-descricao">{{ produto.detalhes.descricao }}</p>
      <button
        v-if="produto.detalhes.estoque > 0"
        @click="addItem"
        class="modal-btn"
      >
        Adicionar item
      </button>
      <button v-else class="modal-btn" disabled>Produto Esgotado!</button>
    </div>
    <div class="avaliacoes">
      <h2 class="avaliacoes-subtitulo">Avaliações</h2>
      <ul>
        <li
          class="avaliacao"
          v-for="avaliacao in produto.detalhes.reviews"
          :key="`avaliacao${avaliacao.id}`"
        >
          <p class="avaliacao-descricao">{{ avaliacao.descricao }}</p>
          <p class="avaliacao-usuario">
            {{ avaliacao.nome }} |
            <img
              v-for="star in avaliacao.estrelas"
              :key="`estrelas_${star}`"
              class="avaliacao-star"
              src="../assets/star-solid.svg"
            />
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    produto: {
      type: Object,
      default() {
        return new Object();
      },
    },
  },
  methods: {
    addItem() {
      this.$emit("add");
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
.modal-container {
  display: grid;
  align-items: end;
  grid-gap: 50px;
  padding: 0 50px 50px 0;
  border-radius: 4px;
}

.modal-img {
  grid-column: 1;
}

.modal-img img {
  max-width: 300px;
  display: block;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1), 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.modal-dados {
  grid-column: 2;
  max-width: 600px;
}

.modal-titulo {
  font-size: 3rem;
}

.modal-btn {
  margin-top: 80px;
  background: #000;
  color: #fff;
  cursor: pointer;
  border: none;
  padding: 10px 25px;
  border-radius: 4px;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.2);
  font-size: 1rem;
}

.modal-btn:disabled {
  margin-top: 80px;
  background: rgb(160, 160, 160);
  color: #000;
  cursor: pointer;
  border: none;
  padding: 10px 25px;
  border-radius: 4px;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.2);
  font-size: 1rem;
}

.modal-btn:active {
  background: #808080;
}

.avaliacoes {
  grid-column: 2;
}

.avaliacao {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 1rem;
}

.avaliacao-descricao {
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 1rem;
}

.avaliacao-usuario {
  font-weight: bold;
  margin-bottom: 1rem;
}

.avaliacao-star {
  height: 15px;
  margin-left: 5px;
}
</style>