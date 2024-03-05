<template>
    <Logo/>
    <div class="reservacion">
        <div class="reservacion__title">
            <h1>¡Gracias por la Reservacion!</h1>
            <p>Se te enviará una confirmación de la reserva por email.</p>
        </div>
        <div class="reservacion__detail">
            <div>
                <p>Detalles de la reservacion:</p>
                <span>{{ sharedState.fechaInputValue }}, {{ sharedState.personasSelectValue }} persona(s)</span>
            </div>
        </div>
    </div>
    <Footer/>
    <router-view/>
</template>

<script>
/* eslint-disable */
import Footer from '@/components/Footer.vue';
import Logo from '@/components/Logo.vue';
import sharedState from '@/helper/sharedState.js';

export default {
    name: "ReservacionView",
    components: { Logo, Footer },
    computed: {
        sharedState() {
            return sharedState;
        },
    },
}
</script >

<style scoped>

.reservacion {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.reservacion__title {
    scale: 2;
    margin: 3rem 0;
    width: 70%;
}

.reservacion__title h1 {
    margin-bottom: 1rem;
}


.reservacion__detail {
    border: 1px #1a1a1a solid;
    padding: 1rem;
    margin: 3rem 1rem;
    display: flex;
}


@media (max-width: 550px) {
    .reservacion__title {
        scale: 1.6;
    }
}
@media (max-width: 420px) {
    .reservacion__title {
        scale: 1.3;
        margin: 2rem 0;
    }
}
</style>