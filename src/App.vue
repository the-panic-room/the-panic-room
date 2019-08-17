<template>
  <div id="app">
    <div class="container">
      <div class="navbar">
        <div>
          <img src="@/assets/tpr.png" class="logo" alt="logo diggi">
        </div>
        <div class="d-flex">
            <!-- <router-link class="pr-2" v-bind:to="'/about'">
              Sobre nosotros
            </router-link>
            <router-link class="pr-2" v-bind:to="'/about'">
              Equipo
            </router-link> -->
            <a href="https://www.linkedin.com/company/thepanicroom" class="pr-2 align-bottom" target="_blank">
              <img src="@/assets/linkedin.png" alt="Linkedin">
            </a>
            <a href="https://github.com/the-panic-room" class="pr-2 align-bottom" target="_blank">
              <img src="@/assets/GitHub-Mark-Light-32px.png" alt="Github">
            </a>
            <button>
              Contáctanos
            </button>
        </div>
      </div>
    </div>
    <router-view></router-view>
    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="column">
            <a class="mr-1" href="#">Terminos y condiciones</a>
            <a class="mr-1" href="#">Politicas de privacidad</a>
            <a href="#">Otro link importante</a>
          </div>
          <div class="column text-center">
            The Panic Room © 2019.
          </div>
          <div class="column text-right">
            <a class="mr-1" href="#">Sobre nosotros</a>
            <a href="#">Otro link importante</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
