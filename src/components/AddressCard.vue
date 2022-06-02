<template>
  <div id="content-address">
    <h3>Adicionar endereço</h3>
    <div class="container-form">
      <div class="container-input">
        <label for="">Cep</label>
        <input type="text" />
      </div>
      <div class="container-input">
        <label for="">Rua</label>
        <input type="text" />
      </div>
      <div class="container-input">
        <label for="">Bairro</label>
        <input type="text" />
      </div>
      <div class="container-input">
        <label for="">Número</label>
        <input type="text" />
      </div>
    </div>
    <button class="modal-btn">Salvar</button>
  </div>
</template>
<style lang="scss" scoped>
#content-address {
  display: none;
  padding: 1.875rem 15.625rem;
}

h3 {
  margin: 0 0 20px 0;
}

.container-input {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 10px 0;
}

input {
  max-width: 300px;
  height: 35px;
  padding: 0 1rem;
  border: none;
  border-radius: 4px;
  outline: 0px solid rgba(26, 26, 26, 0.219);
  background-color: #fff;
  font-size: 0.875rem;
  letter-spacing: 1px;
  box-shadow: 0 4px 10px rgba(26, 26, 26, 0.219);
  appearance: none;
  transition: 50ms;
  margin-top: 10px;
}

label {
  color: #242424;
}

.modal-btn {
  margin-top: 10px;
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