<template>
  <div id="home" class="container">
    <div class="row hero d-flex">
      <div class="column align-center">
        <div class="pl-4">
          <h2>
            <!-- Your app is on trouble? -->
            ¿Tu app esta en apuros?
            <br>
            Entra al cuarto del panico.
            <!-- Get in the panic room. -->
          </h2>
          <p class="hero-text">
            <!-- We are a fullstack team of top notch developers -->
            Somos un equipo fullstack de desarrolladores
            <br>
            listos para hacer realidad tus ideas.
            <!-- ready to turn your ideas into reality. -->
          </p>
          <button onclick="openNav()" class="btn-primary btn">
            Contáctanos
          </button>
        </div>
      </div>
      <div class="column hero-media align-center">
        <div class="hero-video">
          <img src="@/assets/1.png">
          <div class="hero-interaction bounce floating">
            <img src="@/assets/card.png">
          </div>
        </div>
        <!-- <video autoplay loop class="hero-video">
          <source src="@/assets/edificio2.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video> -->
      </div>
    </div>
    <div id="info" class="row info pt-3">
      <div class="column text-center">
        <div class="info-img"></div>
        <strong class="info-title">
          Hardware development
        </strong>
        <p class="pt-1 info-column">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum assumenda, modi officiis laboriosam.
        </p>
      </div>
      <div class="column text-center">
        <div class="info-img"></div>
        <strong class="info-title">
          Software development
        </strong>
        <p class="pt-1 info-column">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum assumenda, modi officiis laboriosam.
        </p>
      </div>
      <div class="column text-center">
        <div class="info-img"></div>
        <strong class="info-title">
          Game development
        </strong>
        <p class="pt-1 info-column">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum assumenda, modi officiis laboriosam.
        </p>
      </div>
    </div>
    <div id="#contacto" class="row info pt-3">
      <div class="column">
        <form action="" class="pt-2 px-2">
          <h1>Get in!</h1>
          <div class="d-flex">
            <div class="form-wrap pr-2">
              <label for="mail">Tu correo</label>
              <input type="email" id="mail">
            </div>

            <div class="form-wrap">
              <label for="nombre">Nombre</label>
              <input type="text" id="nombre">
            </div>
          </div>

          <label for="asunti">Asunto</label>
          <input type="text" id="asunti">

          <label for="contenido">Contenido</label>
          <textarea name="contenido" id="contenido" cols="30" rows="30"></textarea>

          <button>
            Enviar
          </button>
        </form>

        <div class="text-center">
          <a class="btn btn-link btn-tg mr-2" href="#">
            <img class="btn-icon" src="@/assets/telegram.png">
            @ThePanicRoom
          </a>
          <a class="btn btn-link btn-gm mr-2" href="#">
            <img class="btn-icon" src="@/assets/gmail.png">
            ThepanicRoom@gmail.com
          </a>
          <a class="btn btn-link btn-ws" href="#">
            <img class="btn-icon" src="@/assets/whatsapp.png">
            Whatsapp
          </a>
        </div>
        <div class="text-center mt-1">
          <a href="#" class="pr-1 align-bottom">
            <img src="@/assets/linkedin.png" alt="Linkedin">
          </a>
          <a href="https://github.com/the-panic-room" class="pr-1 align-bottom">
            <img src="@/assets/GitHub-Mark-Light-32px.png" alt="Github">
          </a>
          <a href="#" class="pr-1">
            <img src="@/assets/twitter.png" alt="Twitter">
          </a>
          <a href="#">
            <img src="@/assets/instagram.png" alt="Instagram">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',

  methods: {
  }
}

</script>