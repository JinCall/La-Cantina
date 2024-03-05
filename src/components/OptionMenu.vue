<template>
    <div class="opiton__container" :class="{ error: error }">
        <router-link class="opiton__container__item" href="#inicio" to="/">
            <a href="#inicio">Inicio</a>
        </router-link>
        <router-link class="opiton__container__item" to="/">
            <a href="#eventos">Eventos</a>
        </router-link>
        <router-link class="opiton__container__item" to="/menu_list">
            <a>Buscar Bebida</a>
        </router-link>
        <router-link class="opiton__container__item" to="/">
            <a href="#">Reservaciones</a>
        </router-link>
        <router-link class="opiton__container__item" to="/">
            <a href="#">Contactanos</a>
        </router-link>
    </div>
    <router-link to="/menu" class="option__verMenu " :class="{ disable : disable }">
        <p>Ver Menu</p>
    </router-link>
    <div class="option__menuMoible" :class="{ error: error }">
        <div @click="toggler = !toggler" :class="{ active : toggler }" class="toggler">
            <span class="togglerBar"></span>
            <span class="togglerBar"></span>
            <span class="togglerBar"></span>
        </div>
        <div :class="{ active : toggler }" class="option__menuMoible__list">
            <div @click="toggler = !toggler" :class="{ active : toggler }" class="toggler">
                <span class="togglerBar"></span>
                <span class="togglerBar"></span>
                <span class="togglerBar"></span>
            </div>
            <router-link @click="toggler = !toggler" class="opiton__menuMoible__list__item" href="#inicio" to="/">
                <a href="#inicio">Inicio</a>
            </router-link>
            <router-link @click="toggler = !toggler" class="opiton__menuMoible__list__item" to="/">
                <a href="#eventos">Eventos</a>
            </router-link>
            <router-link @click="toggler = !toggler" class="opiton__menuMoible__list__item" to="/menu_list">
                <a >Buscar Bebida</a>
            </router-link>
            <router-link @click="toggler = !toggler" class="opiton__menuMoible__list__item" to="/">
                <a href="#">Reservaciones</a>
            </router-link>
            <router-link @click="toggler = !toggler" class="opiton__menuMoible__list__item" to="/">
                <a href="#">Contactanos</a>
            </router-link>
        </div>
    </div>
    <router-view/>
</template>

<script>
import { ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
export default {
    name: "OptionMenu",
    setup() {
        const toggler = ref(null)
        const disable = ref(false)
        const error = ref(false)
        const router = useRouter();

        watchEffect(() => {
            const currentPath = router.currentRoute.value.path;

            if (router.currentRoute.value.matched.some(record => record.meta.notFound)) {
                error.value = true;
            } else {
                error.value = false;
            }

            if (currentPath.includes('/menu_list')) {
                disable.value = true;
            } else {
                disable.value = false;
            }
        });

        return { toggler, disable }
    }
}
</script>

<style scoped>

.opiton__container.error, .option__menuMoible.error {
    display: none;
}
.opiton__container {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: .7rem;
    position: fixed;
    left: 2rem;
    top: 4rem;
    z-index: 5;
}

.opiton__container__item {
    background-color: #fff;
    text-decoration: none;
    padding: .8rem .5rem;
    font-size: 1rem;
    font-weight: 700;
    transition: 500ms;
}

.opiton__container__item a {
    color: #1a1a1a;
    text-decoration: none;
    transition: 500ms;
}

.opiton__container__item:hover {
    background-color: #EA2306;
}

.opiton__container__item:hover a {
    color: #fff;
}


.option__verMenu.disable {
    display: none;
}
.option__verMenu {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 3;
    top: 3rem;
    right: 3rem;
    background-color: #EA2306;
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    text-decoration: none;
    text-align: center;
    font-weight: 700;
    font-size: 1.2rem;
    color: #fff;
}

.option__menuMoible {
    display: none;
}

@media (max-width: 990px) {
    .opiton__container {
        display: none;
    }

    .option__verMenu {
        position: absolute;
        top: 1rem;
        left: 1rem;
    }

    .option__menuMoible {
        display: block;
        position: fixed;
        z-index: 6;
        background-color: transparent;
        border: #EA2306 3px solid;
        top: 1rem;
        right: 1rem;
        height: 3rem;
        width: 3rem;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .toggler {
        cursor: pointer;
        margin-right: auto;
        border-radius: 15px;
        padding: 0.3rem 0.4rem;
        width: 2rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
        margin-left: 0.1rem;
    }

    .toggler.active .togglerBar:nth-child(1) {
        transform: translateY(8px) rotate(40deg);
    }

    .toggler.active .togglerBar:nth-child(2) {
        opacity: 0;
    }

    .toggler.active .togglerBar:nth-child(3) {
        transform: translateY(-8px) rotate(-40deg);
    }

    .togglerBar {
        display: block;
        width: 25px;
        height: 3px;
        margin: 5px auto;
        -webkit-transition: all 300ms ease-in-out;
        background-color: #EA2306;
    }

    .option__menuMoible__list {
        display: flex;
        position: fixed;
        z-index: 1;
        flex-direction: column;
        background-color: #fff;
        width: 100vw;
        height: 100vh;
        top: 0;
        right: -130%;
        padding-top: 15rem;
        gap: 2rem;
        transition: 500ms;
        opacity: 0;
    }

    .option__menuMoible__list .toggler {
        position: absolute;
        top: 0;
    }

    .option__menuMoible__list.active {
        right: 0;
        opacity: 1;
    }

    .opiton__menuMoible__list__item {
        text-decoration: none;
    }

    .opiton__menuMoible__list__item a {
        color: #EA2306;
        text-decoration: none;
        font-size: 1.5rem;
        font-weight: 700;
    }
}
</style>