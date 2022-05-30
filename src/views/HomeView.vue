<template>
  <div class="home">
    <modal-component>
      <template #body>
        <!-- <h3>Taiza</h3> -->
      </template>
    </modal-component>
    <menu-component />
    <section class="produtos">
      <produto-card
        v-for="produto in produtos"
        :key="`produto_${produto.id}`"
        :produto="produto"
      />
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import tablet from "../api/tablet/tablet.jpg";
import speaker from "../api/speaker/speaker.jpg";
import notebook from "../api/notebook/notebook.jpg";
import ProdutoCard from "@/components/ProdutoCard.vue";
import smartwatch from "../api/smartwatch/smartwatch.jpg";
import smartphone from "../api/smartphone/smartphone.jpg";
import MenuComponent from "@/components/MenuComponent.vue";
import ModalComponent from "@/components/ModalComponent.vue";

export default {
  name: "HomeView",
  data() {
    return {
      produtos: [
        {
          id: "notebook",
          nome: "Notebook",
          preco: 2999,
          img: notebook,
        },
        {
          id: "smartphone",
          nome: "Smartphone",
          preco: 1299,
          img: smartphone,
        },
        {
          id: "tablet",
          nome: "Tablet",
          preco: 899,
          img: tablet,
        },
        {
          id: "smartwatch",
          nome: "Smartwatch",
          preco: 200,
          img: smartwatch,
        },
        {
          id: "speaker",
          nome: "Speaker",
          preco: 300,
          img: speaker,
        },
      ],
    };
  },
  components: {
    ProdutoCard,
    MenuComponent,
    ModalComponent,
  },
};
</script>
<style lang="scss" scoped>
.produtos {
  max-width: 900px;
  margin: 80px auto 0 auto;
  padding-bottom: 1.563rem;
}
</style>
