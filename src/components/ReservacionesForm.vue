<template>
    <Logo/>
    <div class="container">
        <div>
            <h1>RESERVA TU LUGAR</h1>
            <p>Para poder ofrecerte la mejor mesa, selecciona la cantidad de personas, la fecha y el horario de reserva.</p>
        </div>
        <div class="reservaciones">
            <div class="reservacion__personas">
                <label for="">Tamaño del grupo</label>
                <select :value="sharedState.personasSelectValue" name="" id="personas" required>
                    <option v-for="(item, index) in reservacionesData.grupo" :key="index" :value="item.value">{{ item.personas }}</option>
                </select>
            </div>
            <div class="reservacion__fecha">
                <label for="">Fecha</label>
                <input type="date" name="" :value="sharedState.fechaInputValue" id="fecha" required>
            </div>
            <div class="reservacion__horario">
                <label for="">Horario</label>
                <select :value="sharedState.horarioSelectValue" name="" id="horario" required>
                    <option v-for="(item, index) in reservacionesData.horario" :key="index" :value="item.value">{{ item.hora }}</option>
                </select>
            </div>
        </div>
        <div class="horario">
            <div class="horario__hora" v-for="(item, index) in reservacionesData.horario" :value="item.value" :class="{ active : item.value == sharedState.horarioSelectValue }" :key="index">
                <h2>{{ item.hora }}</h2>
            </div>
        </div>
        <router-link to="/login">
            <button @click="updateSharedState">Reservar Ahora</button>
        </router-link>
    </div>
    <Footer/>
    <router-view/>
</template>

<script>
/* eslint-disable */
import sharedState from '@/helper/sharedState.js';
import Logo from './Logo.vue';
import Footer from './Footer.vue';
import { onMounted } from 'vue';
export default {
    name: "ReservacionesForm",
    computed: {
        sharedState() {
            return sharedState;
        },
    },
    setup() {

        const updateSharedState = () => {
            sharedState.fechaInputValue = document.querySelector("#fecha").value;
            sharedState.personasSelectValue = document.querySelector("#personas").value;
            sharedState.horarioSelectValue = document.querySelector("#horario").value;
            
            console.log('Shared State Updated:', sharedState);
        };

        const reservacionesData = {
            grupo: [
                {
                    personas: "1 Persona",
                    value: "1"
                },
                {
                    personas: "2 Personas",
                    value: "2"
                },
                {
                    personas: "3 Personas",
                    value: "3"
                },
                {
                    personas: "4 Personas",
                    value: "4"
                },
                {
                    personas: "5 Personas",
                    value: "5"
                },
                {
                    personas: "6 Personas",
                    value: "6"
                }
            ],
            horario: [
                {
                    hora: "14:30",
                    value: "1"
                },
                {
                    hora: "14:45",
                    value: "2"
                },
                {
                    hora: "15:00",
                    value: "3"
                },
                {
                    hora: "15:15",
                    value: "4"
                },
                {
                    hora: "15:30",
                    value: "5"
                },
                {
                    hora: "15:45",
                    value: "6"
                },
                {
                    hora: "16:00",
                    value: "7"
                },
                {
                    hora: "16:15",
                    value: "8"
                },
                {
                    hora: "16:30",
                    value: "9"
                },
                {
                    hora: "16:45",
                    value: "10"
                },
                {
                    hora: "17:00",
                    value: "11"
                },
                {
                    hora: "17:00",
                    value: "12"
                },
                {
                    hora: "17:15",
                    value: "13"
                },
                {
                    hora: "17:30",
                    value: "14"
                },
                {
                    hora: "17:45",
                    value: "15"
                },
                {
                    hora: "18:00",
                    value: "16"
                },
                {
                    hora: "18:15",
                    value: "17"
                },
                {
                    hora: "18:30",
                    value: "18"
                },
                {
                    hora: "18:45",
                    value: "19"
                },
                {
                    hora: "19:00",
                    value: "20"
                },
                {
                    hora: "18:15",
                    value: "21"
                },
                {
                    hora: "18:30",
                    value: "22"
                },
                {
                    hora: "18:45",
                    value: "23"
                },
                {
                    hora: "19:00",
                    value: "24"
                },
                {
                    hora: "19:15",
                    value: "25"
                },
                {
                    hora: "19:30",
                    value: "26"
                },
                {
                    hora: "19:45",
                    value: "27"
                },
                {
                    hora: "20:00",
                    value: "28"
                },
                {
                    hora: "20:15",
                    value: "29"
                },
                {
                    hora: "20:30",
                    value: "30"
                },
                {
                    hora: "20:45",
                    value: "31"
                },
                {
                    hora: "21:00",
                    value: "32"
                },
                {
                    hora: "21:15",
                    value: "33"
                },
                {
                    hora: "21:30",
                    value: "34"
                },
                {
                    hora: "21:45",
                    value: "35"
                },
                {
                    hora: "22:00",
                    value: "36"
                },
                {
                    hora: "22:15",
                    value: "37"
                },
                {
                    hora: "22:30",
                    value: "38"
                },
                {
                    hora: "22:45",
                    value: "39"
                },
                {
                    hora: "23:00",
                    value: "40"
                },
                {
                    hora: "23:30",
                    value: "41"
                },
                {
                    hora: "22:45",
                    value: "42"
                }
            ]
        }
        return { reservacionesData, updateSharedState }
    },
    components: { Logo, Footer }
};
</script >

<style scoped>
    h1 {
        margin-top: 1rem;
        font-size: 3rem;
        font-weight: 800;
    }
    .container {
        width: 800px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .reservaciones {
        display: flex;
        justify-content: space-around;
        margin: 2rem 1rem;
        width: 100%;
    }

    .reservaciones div {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        gap: .5rem;
        padding-bottom: 1rem;
        width: 34%;
    }

    .reservaciones div input, .reservaciones div select {
        width: 90%;
        border: #1a1a1a 1px solid;
        padding: .5rem 0;
        margin-top: .5rem;
        row-gap: 1rem;
    }

    .horario {
        padding-top: 3rem;
        margin-bottom: 3rem;
        display: grid;
        justify-content: center;
        width: 100%;
        padding-top: 3rem;
        gap: .5rem;
        row-gap: .5rem;
        grid-template-columns: repeat(6, 15%);
        border-top: solid 3px #bebebe;
    }

    .horario__hora {
        width: 100%;
        border: #1a1a1a 1px solid;
        padding: .5rem 0;
        cursor: pointer;
    }

    .horario__hora.active {
        background-color: #e65843;
    }

    button {
        background-color: #EA2306;
        border: none;
        padding: 1rem 2rem;
        font-size: 1.5rem;
        color: #fff;
        font-weight: 700;
        margin-bottom: 2rem;
        transition: 500ms;
        cursor: pointer;
    }

    button:hover {
        background-color: #e65843;
    }

    @media (max-width: 820px) {
        .container {
            width: 95%;
        }

        .reservaciones {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .reservaciones div  {
            width: 100%;
        }
    }

    @media (max-width: 480px) {
        .horario {
            grid-template-columns: repeat(4, 65px);
        }

        .horario__hora {

        }
    }
</style>