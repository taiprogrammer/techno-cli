<template>
  <transition name="fade">
    <div @click.self="clickOverlay" class="modal__overlay">
      <transition name="fade">
        <div id="content" class="modal__box-content">
          <div class="modal-header">
            <div>
              <slot name="header"></slot>
              <div @click="close" class="close-modal">&times;</div>
            </div>
          </div>
          <div class="modal__body__product__cart">
            <slot name="body"></slot>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>
<script>
export default {
  name: "ModalComponent",
  methods: {
    close() {
      this.$emit("closeModal");
    },
    clickOverlay() {
      this.$emit("closeModal");
    },
  },
};
</script>
<style lang="scss" scoped>
fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.modal__overlay {
  width: 100%;
  height: 100vh;
  background: rgba($color: #000000, $alpha: 0.5);
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 5000;
  padding: 0 10px 0 10px;
}

.modal-header {
  width: 100%;
  min-height: 57px;
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: 1px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: linear-gradient(to right, #1a1a1a 20%, #fff 20%);
  position: relative;
  color: #fff;
}

#content {
  width: 80%;
  overflow: auto;
  max-height: 90vh;
  background: linear-gradient(to right, #1a1a1a 20%, #fff 20%);
}

.modal__box-content {
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
  max-height: 80vh;
  margin: 6vh auto;
  display: flex;
  flex-direction: column;
}

.modal__body {
  width: 100%;
  /* flex: 1; */
  overflow: auto;
  overflow-x: hidden;
  &__product {
    position: relative;
    z-index: 1;
    background: linear-gradient(to right, #1a1a1a 20%, #fff 20%);
    display: grid;
    align-items: end;
    grid-gap: 50px;
    padding: 0 50px 50px 0;
    border-radius: 4px;
  }
}
.close-modal {
  font-size: 40px;
  color: #000;
  cursor: pointer;
  position: absolute;
  top: 16px;
  right: 20px;
}
</style>
