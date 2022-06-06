<template>
  <div class="home">
    <modal-component
      v-if="showModalProduct"
      @closeModal="showModalProduct = false"
    >
      <template #body>
        <product-component
          v-background-modal
          :produto="selectedProduct"
          @add="addItem"
        />
      </template>
    </modal-component>
    <modal-component v-if="showModalCart" @closeModal="showModalCart = false">
      <template #body>
        <cart-card
          :carrinho="carrinho"
          @remove="removeItem"
          @continue="proceed"
        />
        <address-card @send="sendAddress" />
      </template>
    </modal-component>
    <modal-component
      v-if="showModalAddresses"
      @closeModal="showModalAddresses = false"
    >
      <template #body>
        <addresses-card :addresses="addresses" @removeAddress="remove" />
      </template>
    </modal-component>
    <menu-component
      :getCartLength="carrinho.length"
      @getCart="showModalCart = true"
      @getAddresses="showModalAddresses = true"
    />
    <section class="produtos">
      <produto-card
        v-for="produto in produtos"
        :key="`produto_${produto.id}`"
        :produto="produto"
        @getProduto="getProduto(produto)"
      />
    </section>
    <toast-component
      id="alerta"
      :mensagemAlerta="message"
      @closeToast="closeToast"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import tablet from "../api/tablet/tablet.jpg";
import speaker from "../api/speaker/speaker.jpg";
import CartCard from "@/components/CartCard.vue";
import notebook from "../api/notebook/notebook.jpg";
import ProdutoCard from "@/components/ProductCard.vue";
import AddressCard from "@/components/AddAddressCard.vue";
import tablet_detail from "../api/tablet/tablet-foto.jpg";
import smartwatch from "../api/smartwatch/smartwatch.jpg";
import smartphone from "../api/smartphone/smartphone.jpg";
import MenuComponent from "@/components/MenuComponent.vue";
import AddressesCard from "@/components/AddressesCard.vue";
import ModalComponent from "@/components/ModalComponent.vue";
import ToastComponent from "@/components/ToastComponent.vue";
import speaker_detail from "../api/speaker/speaker-foto.jpg";
import notebook_detail from "../api/notebook/notebook-foto.jpg";
import ProductComponent from "@/components/ProductComponent.vue";
import smartwatch_detail from "../api/smartwatch/smartwatch-foto.jpg";
import smartphone_detail from "../api/smartphone/smartphone-foto.jpg";

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
          detalhes: {
            id: "notebook",
            nome: "Notebook",
            preco: 2999,
            descricao:
              "Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se a necessidade de renovação processual causa impacto indireto na reavaliação do orçamento setorial.",
            estoque: 12,
            img: notebook_detail,
            reviews: [
              {
                nome: "Fábio",
                estrelas: 5,
                descricao:
                  "Gostei muito do produto, atendeu todas as minhas necessidades",
              },
              {
                nome: "Nathália",
                estrelas: 4,
                descricao:
                  "Produto muito bom, mas poderia ser um pouco mais barato.",
              },
            ],
          },
        },
        {
          id: "smartphone",
          nome: "Smartphone",
          preco: 1299,
          img: smartphone,
          detalhes: {
            id: "smartphone",
            nome: "Smartphone",
            preco: 1299,
            descricao:
              "Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se a necessidade de renovação processual causa impacto indireto na reavaliação do orçamento setorial.",
            estoque: 3,
            img: smartphone_detail,
            reviews: [
              {
                nome: "Rogério",
                estrelas: 5,
                descricao:
                  "Gostei muito do produto, atendeu todas as minhas necessidades.",
              },
              {
                nome: "Maria",
                estrelas: 5,
                descricao: "Perfeito",
              },
            ],
          },
        },
        {
          id: "tablet",
          nome: "Tablet",
          preco: 899,
          img: tablet,
          detalhes: {
            id: "tablet",
            nome: "Tablet",
            preco: 899,
            descricao:
              "Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se a necessidade de renovação processual causa impacto indireto na reavaliação do orçamento setorial.",
            estoque: 5,
            img: tablet_detail,
            reviews: [
              {
                nome: "Anita",
                estrelas: 4,
                descricao: "Amei, só a cor que é diferente da foto",
              },
              {
                nome: "Ana",
                estrelas: 3,
                descricao: "Não era bem o que esperava",
              },
            ],
          },
        },
        {
          id: "smartwatch",
          nome: "Smartwatch",
          preco: 200,
          img: smartwatch,
          detalhes: {
            id: "smartwatch",
            nome: "Smartwatch",
            preco: 200,
            descricao:
              "Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se a necessidade de renovação processual causa impacto indireto na reavaliação do orçamento setorial.",
            estoque: 3,
            img: smartwatch_detail,
            reviews: [
              {
                nome: "Rogério",
                estrelas: 5,
                descricao:
                  "Gostei muito do produto, atendeu todas as minhas necessidades.",
              },
              {
                nome: "Maria",
                estrelas: 5,
                descricao: "Perfeito",
              },
            ],
          },
        },
        {
          id: "speaker",
          nome: "Speaker",
          preco: 300,
          img: speaker,
          detalhes: {
            id: "speaker",
            nome: "Speaker",
            preco: 300,
            descricao:
              "Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se a necessidade de renovação processual causa impacto indireto na reavaliação do orçamento setorial.",
            estoque: 3,
            img: speaker_detail,
            reviews: [
              {
                nome: "Marcelo",
                estrelas: 5,
                descricao: "Produto maravilhoso !!!",
              },
              {
                nome: "Carmem",
                estrelas: 4,
                descricao: "Amei, mas demorou muito pra chegar",
              },
            ],
          },
        },
      ],
      carrinho: new Array(),
      selectedProduct: null,
      showModalProduct: false,
      showModalCart: false,
      showModalAddresses: false,
      message: null,
      addresses: new Array(),
    };
  },
  methods: {
    sendAddress(address) {
      const toast = document.getElementById("alerta");
      this.addresses.push(address);
      toast.classList.add("ativo");
      toast.style.display = "block";
      this.message = "Endereço cadastrado com sucesso";
      this.showModalCart = false;
      this.closeToastInstantly();
    },
    remove(index) {
      this.addresses.splice(index, 1);
    },
    getProduto(produto) {
      this.showModalProduct = true;
      this.selectedProduct = produto;
    },
    proceed() {
      const content_card = document.getElementById("content-cart");
      const content_address = document.getElementById("content-address");
      content_card.style.display = "none";
      content_address.style.display = "block";
    },
    addItem() {
      const toast = document.getElementById("alerta");
      toast.classList.add("ativo");
      toast.style.display = "block";
      this.carrinho.push(this.selectedProduct);
      this.selectedProduct.detalhes.estoque--;
      this.message = "Item adicionado";
      this.closeToastInstantly();
    },
    removeItem(index) {
      this.carrinho.splice(index, 1);
    },
    closeToast() {
      const toast = document.getElementById("alerta");
      toast.style.display = "none";
    },
    closeToastInstantly() {
      setInterval(() => {
        document.getElementById("alerta").style.display = "none";
      }, 3500);
    },
    checkLocalStorage() {
      if (window.localStorage.carrinho) {
        this.carrinho = JSON.parse(window.localStorage.carrinho);
      }
      if (window.localStorage.address) {
        this.addresses = JSON.parse(window.localStorage.address);
      }
    },
  },
  watch: {
    carrinho() {
      window.localStorage.carrinho = JSON.stringify(this.carrinho);
    },
    addresses() {
      window.localStorage.address = JSON.stringify(this.addresses);
    },
  },
  created() {
    this.checkLocalStorage();
  },
  components: {
    CartCard,
    AddressCard,
    ProdutoCard,
    MenuComponent,
    AddressesCard,
    ModalComponent,
    ToastComponent,
    ProductComponent,
  },
};
</script>
<style lang="scss" scoped>
.produtos {
  max-width: 900px;
  margin: 80px auto 0 auto;
  padding-bottom: 1.563rem;
}

.ativo {
  animation: fadeInDown 0.3s forwards;
}

@keyframes fadeInDown {
  from {
    transform: translate3d(0, -30px, 0);
    opacity: 0;
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0px, 0);
  }
}
</style>
