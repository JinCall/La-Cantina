<template>
  <Logo/>
  <MenuList/>
  <Footer/>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Logo from '@/components/Logo.vue';
import MenuList from '@/components/MenuList.vue';


export default {
    name: "MenuView",
    components: { Logo, Footer, MenuList }
}
</script>

<style>
</style>
