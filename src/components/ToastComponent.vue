<template>
  <div class="alerta" id="alerta">
    <div class="alerta-content">
      <img class="alerta-imagem" src="../assets/correct.png" alt="" />
      <p class="alerta-mensagem">{{ mensagemAlerta }}</p>
      <img
        class="alerta-close"
        @click="closeToast"
        src="../assets/xmark-solid.svg"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "ToastComponent",
  props: {
    mensagemAlerta: { type: String, default: null },
  },
  methods: {
    closeToast() {
      this.$emit("closeToast");
    },
  },
};
</script>
<style lang="scss" scoped>
.alerta {
  position: absolute;
  top: 20px;
  right: 5vw;
  padding: 20px 65px 20px 25px;
  text-align: center;
  background: linear-gradient(to right, #4bae4f 5%, #fff 5%);
  border-radius: 4px;
  box-shadow: 0px 2px 16px rgb(0 0 0 / 25%);
  align-items: center;
  display: none;
  z-index: 1;
}

.alerta-content {
  display: flex;
}

.alerta-imagem {
  height: 30px;
  margin-right: 15px;
}

.alerta-close {
  height: 20px;
  position: absolute;
  right: 8px;
  top: 8px;
  cursor: pointer;
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