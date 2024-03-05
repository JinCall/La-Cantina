<template>
    <div class="eventos" id="eventos">
        <div class="eventos__title">
            <img src="../assets/eventos/maracas-svgrepo-com.svg" alt="">
            <h1>{{ eventosData.title }}</h1>
        </div>
        <div class="eventos__container">
            <div v-for="(fecha, index) in eventosData.fecha" :key="index" class="eventos__container__fecha">
                <h1>{{ fecha.fecha }}</h1>
                <h2>{{ eventosData.lugar[index].lugar }}</h2>
                <p>{{ eventosData.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: "Eventos",
    setup() {
        const eventosData = {
            title: "DJ's TOCANDO ESTE FIN",
            fecha: [
                {
                fecha: "Nov. 18"
                },
                {
                fecha: "Nov. 19"
                },
                {
                fecha: "Nov. 20"
                },
            ],
            lugar:[
                {
                    lugar: "SAN PEDRO"
                    
                },
                {
                    lugar: "MXCO",
                },
                {
                    lugar: "CARMEN"
                }
            ], 
            description: "Párrafo. Haz clic aquí para agregar tu propio texto y editar."
        }

        return { eventosData }
    }
}
</script>

<style scoped>
    .eventos {
        background-color: #1a1a1a;
        background-image: radial-gradient(#EA2306 2px, transparent 2px);
        background-size: 45px 45px;
    }
    .eventos__title {
        padding: 2rem 0;

    }

    .eventos__title img {
        width: 5rem;
        margin: 2rem 0;
    }

    .eventos__title h1 {
        color: #fff;
        margin-top: 1rem;
        font-size: 3rem;
    }

    .eventos__container {
        display: flex;
        justify-content: center;
        gap: 4.5rem;
        padding-bottom: 2.5rem;
    }

    .eventos__container__fecha {
        width: 10%;
        display: flex;
        flex-direction: column;
        align-items: start;
    }

    .eventos__container__fecha h1 {
        color: #fff;
        font-size: 3rem;
        margin-bottom: 1rem;
    }

    .eventos__container__fecha h2 {
        color: #fff;
        height: 50px;
        display: flex;
        align-items: center;
        background-color: #EA2306;
        padding: .5rem .8rem;
        margin-bottom: 1rem;
    }

    .eventos__container__fecha p {
        color: #fff;
        text-align: justify;
    }

    @media (max-width: 990px) {
        .eventos__container {
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .eventos__container__fecha {
            width: 100%;
            margin: 0 4rem;
            align-items: center;
        }

        .eventos__container__fecha p {
            margin: 0 1rem;
        }
    }
</style>