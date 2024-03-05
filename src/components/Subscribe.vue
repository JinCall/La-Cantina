<template>
    <div class="subscribe">
        <h1>ÚNETE A NUESTRA LISTA DE CORREO Y TE INFORMAREMOS</h1>
        <div class="subscribe__container">
            <input placeholder="INGRESA TU EMAIL AQUI*" type="text">
            <button type="submit">SUSCRIBIRSE AHORA</button>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: "Subscribe"
}
</script>

<style>
.subscribe {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.subscribe h1 {
    width: 30%;
    color: #1a1a1a;
    font-weight: 800;
}

.subscribe__container {
    display: flex;
    margin-top: 2rem;
    flex-direction: column;
    justify-content: center;
    width: 30rem;
}

.subscribe__container input {
    box-shadow: 0px 0px 0px 4px #EA2306 inset;
    -webkit-box-shadow: 0px 0px 0px 4px #EA2306 inset;
    -moz-box-shadow: 0px 0px 0px 4px #EA2306 inset;
    padding: .7rem .8rem;
    transition: 500ms;
    margin-bottom: 1rem;
    border: none;
}

.subscribe__container input:hover {
    box-shadow: 0px 0px 0px 2px #EA2306 inset;
    -webkit-box-shadow: 0px 0px 0px 2px #EA2306 inset;
    -moz-box-shadow: 0px 0px 0px 2px #EA2306 inset;
}

.subscribe__container input::placeholder {
    margin-right: auto;
    color: #EA2306;
    font-weight: 800;
}

.subscribe__container button {
    border: none;
    background-color: #EA2306;
    color: #fff;
    font-weight: 800;
    font-size: 1.1rem;
    margin-bottom: 4rem;
    padding: .3rem .8rem;
    transition: 500ms;
    cursor: pointer;
}

.subscribe__container button:hover {
    background-color: #f07663;
}

@media (max-width: 990px) {
    .subscribe h1 {
        width: 90%;
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    .subscribe__container {
        margin: 0;
    }
}

@media (max-width: 520px) {
    .subscribe__container {
        width: 90%;
    }
}
</style>
