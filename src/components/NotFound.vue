<template>
    <div class="notFound">
        <div class="notFound__container">
            <h1 class="notFound__container__text">Un Error a sucedido :(</h1>
            <router-link class="notFound__container__btn" to="/">
                <p>Regresar a inicio</p>
            </router-link>
        </div>
    </div>
    <router-view/>
</template>

<script>
export default {
    name: "NotFound"
}
</script>

<style>
    .notFound {
        color: #EA2306;
        background-color: #fff;
        
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 100;

    }

    .notFound__container {
        padding: 1rem 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .notFound__container__btn {
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 2rem;
        font-size: large;
        font-weight: 800;
        color: #1a1a1a;
    }

    p {
        width: 100%;
        transition: 400ms;
    }

    .notFound__container__btn p:hover {
        text-decoration: underline;
        color: #EA2306;
    }
</style>