<template>
    <Logo/>
    <Terminos/>
    <Footer/>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Terminos from '@/components/Terminos.vue';
import Logo from '@/components/Logo.vue';
export default {
        name: "TerminosView",
        components: { Logo, Footer, Terminos }
}
</script>

<style>
</style>