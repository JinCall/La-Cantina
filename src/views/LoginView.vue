<template>
    <Logo/>
    <div class="login">
        <div class="login__container">
            <h1>Completa la reserva</h1>
            <h2>Ingresa tus datos:</h2>
            <div>
                <div>
                    <label for="">Nombre:</label>
                    <input placeholder="" type="text" name="" id="" required>
                </div>
                <div>
                    <label for="">Apellido:</label>
                    <input placeholder="" type="text" name="" id="" required>
                </div>
                <div>
                    <label for="">Numero telefonico:</label>
                    <input placeholder="" type="text">
                </div>
                <div>
                    <label for="">Email:</label>
                    <input placeholder="" type="email" name="" id="" required>
                </div>
            </div>
            <router-link class="login__container__btn" to="/reservacion">
                <button type="submit">COMPLETAR RESERVACION</button>
            </router-link>
        </div>
        <div class="login__details">
            <div>
                <h2>Detalles de la reserva:</h2>
                <p>{{ sharedState.fechaInputValue }}</p>
                <p>{{ sharedState.personasSelectValue }} Persona(s)</p>
                <p>Avenida Fray Antonio Alcalde</p>
                <router-link class="login__details__link" to="/reservaciones">
                    cambiar
                </router-link>
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
    name: "LoginView",
    components: { Logo, Footer },
    computed: {
        sharedState() {
            return sharedState;
        },
    },
}
</script >

<style scoped>

label {
    margin: 0.5rem 0;
}

input {
    width: 80%;
    border: 1px #1a1a1a solid;
    padding: .6rem .8rem;
}
.login {
    display: flex;
    justify-content: center;
    gap: 7rem;
}

.login__container {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 50%;
}

.login__container h1 {
    font-size: 3rem;
    font-weight: 800;
    width: 100%;
    text-align: start;
}

.login__container h2 {
    margin-bottom: 1rem;
}

.login__container div {
    display: grid;
    width: 100%;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);
}

.login__container div div {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
}

.login__container__btn {
    text-decoration: none;
    width: 100%;
}

.login__container__btn button {
    background-color: #EA2306;
    color: #fff;
    width: 50%;
    font-weight: 800;
    border: none;
    padding: .5rem .7rem;
    margin: 2rem 0;
    transition: 500ms;
}

.login__container__btn button:hover {
    background-color: #f07663;
}

.login__details {
    background-color: #ececec;
    margin-bottom: auto;
    margin-top: 1rem;
    padding: 1rem;
}

.login__details div {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: .7rem;
}

.login__details__link {
    color: #1a1a1a;
}

@media (max-width: 840px) {
    .login {
        flex-direction: column;
        gap: 0;
    } 
    .login__container {
        width: 100%;
        margin: 0 1rem;
    }

    .login__details {
        margin: 0 1rem;
        margin-bottom: 3rem;
    }

}

@media (max-width: 560px) {
    .login {
        width: 90%;
    }

    input {
        width: 80%;
    }
    .login__container div {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>