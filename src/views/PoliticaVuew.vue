<template>
    <Logo/>
    <Politica/>
    <Footer/>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Logo from '@/components/Logo.vue';
import Politica from '@/components/Politica.vue';

export default {
    name: "PoliticaView",
    components: { Logo, Footer, Politica }
}
</script>

<style>

</style>
