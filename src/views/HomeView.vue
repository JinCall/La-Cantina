<template>
  <Inicio/>
  <Eventos/>
  <Social/>
  <Reservacion/>
  <Footer/>
</template>

<script>
import Inicio from '@/components/Inicio.vue';
import Eventos from '@/components/Eventos.vue';
import Footer from '@/components/Footer.vue';
import Social from '@/components/Social.vue';
import Reservacion from '@/components/Reservacion.vue';

export default {
  name: "HomeView",
  components: {
    Inicio,
    Eventos,
    Footer,
    Social,
    Reservacion
},
}
</script>
