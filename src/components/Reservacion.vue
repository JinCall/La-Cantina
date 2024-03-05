<template>
    <div class="reservaciones">
        <div class="reservaciones__img">
            <img class="" src="../assets/reservaciones/triangle-svgrepo-com.svg" alt="" id="triangule">
            <img class="reservaciones__img__bebida" src="https://static.wixstatic.com/media/ebb861_f223cd2497a340a29513c46782ef7d20.jpg/v1/fill/w_850,h_610,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ebb861_f223cd2497a340a29513c46782ef7d20.jpg" alt="">
            <div class="reservaciones__img__container">
                <h1>UBICACIón y horario</h1>
                <h2>AV. FRAY A. ALCALDE 10, 44100 Guad., Jal., México</h2>
                <h2>ABIERTO DIARIO DE 18:00 A 1:00</h2>
            </div>
        </div>
        <div class="reservacion__container">
            <img class="" src="../assets/inicio/star-2-svgrepo-com.svg" alt="" id="diamond2">
            <iframe class="reservacion__container__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.814606492591!2d-103.34953602408837!3d20.677120199762037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b1f0013b216f%3A0x29c7bc7a926983bd!2sCatedral%20de%20la%20Asunci%C3%B3n%20de%20Nuestra%20Se%C3%B1ora%2C%20Av.%20Fray%20Antonio%20Alcalde%2010%2C%20Zona%20Centro%2C%2044100%20Guadalajara%2C%20Jal.!5e0!3m2!1ses-419!2smx!4v1700175344901!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div class="reservacion__container__form">
                <h1>Reserva una mesa</h1>
                <div class="reservacion__container__form__personas">
                    <label for="">Tamaño del grupo</label>
                    <select name="" id="personas" required>
                        <option v-for="(item, index) in reservacionesData.grupo" :key="index" :value="item.value">{{ item.personas }}</option>
                    </select>
                </div>
                <div class="reservacion__container__form__fecha">
                    <label for="">Fecha</label>
                    <input type="date" name="" id="fecha" required>
                </div>
                <div class="reservacion__container__form__horario">
                    <label for="">Horario</label>
                    <select name="" id="horario" required>
                        <option v-for="(item, index) in reservacionesData.horario" :key="index" :value="item.value">{{ item.hora }}</option>
                    </select>
                </div>
                <router-link to="/reservaciones">
                    <button type="submit" @click="updateSharedState">BUSCAR UNA MESA</button>
                </router-link>
            </div>
            <div class="reservacion__container__map">
            </div>
        </div>
    </div>
    <router-view/>
</template>

<script>
import { ref, onMounted } from 'vue';
import sharedState from '../helper/sharedState.js'

/* eslint-disable */
export default {
    name: "Reservacion",
    setup() {

        const triangule = ref(null);
        const diamond = ref(null);

        onMounted(() => {
            triangule.value = document.querySelector("#triangule");
            diamond.value = document.querySelector("#diamond2");
        })

        const updateSharedState = () => {
            sharedState.fechaInputValue = document.querySelector("#fecha").value;
            sharedState.personasSelectValue = document.querySelector("#personas").value;
            sharedState.horarioSelectValue = document.querySelector("#horario").value;

            console.log('Shared State Updated:', sharedState);
        };

        const observerTri = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    triangule.value.classList.add("show")
                } else {
                    triangule.value.classList.remove("show")
                }
            })
        })

        const observerDia = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    diamond.value.classList.add("show")
                } else {
                    diamond.value.classList.remove("show")
                }
            })
        })

        onMounted(() => {
            if (diamond.value) {
                observerDia.observe(diamond.value);
            }
            if (triangule.value) {
                observerTri.observe(triangule.value);
            }
        });

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
    }
}
</script >

<style scoped>
.reservaciones {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}

.reservaciones__img {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.reservaciones__img img:nth-child(1) {
    width: 3rem;
    left: 25%;
    opacity: 0;
    transition: 1s;
    position: absolute;
}

.reservaciones__img img:nth-child(1).show {
    opacity: 1;
}

.reservaciones__img__bebida {
    margin-left: 65%;
}

.reservaciones__img__container {
    background-color: #1a1a1a;
    color: #fff;
    width: 500px;
    height: 500px;
    display: flex;
    text-transform: uppercase;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 33%;
    right: 45%;
}

.reservacion__container {
    margin-top: 30rem;
    margin-bottom: 3rem;
    border: #EA2306 solid 4px;
    width: 400px;
    margin-right: 20rem;
    position: relative;
}

#diamond2 {
    width: 3rem;
    position: absolute;
    left: 110%;
    opacity: 0;
    top: 80%;
    transition: 1s;
}

#diamond2.show {
    opacity: 1;
}

.reservacion__container__map {
    position: absolute;
    left: 115%;
    top: -20%;
    width: 150%;
}

.reservacion__container__form h1 {
    font-size: 2.5rem;
    font-weight: 800;
    color: #1a1a1a;
    text-transform: uppercase;
    width: 90%;
    margin-top: 1rem;
}

.reservacion__container__form div {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-left: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.reservacion__container__form div label {
    color: #1a1a1a;
    font-weight: 600;
}

.reservacion__container__form div input, .reservacion__container__form div select {
    width: 95%;
    border: #1a1a1a 1px solid;
    padding: .5rem 0;
    margin-top: .5rem;
}

button {
    padding: .8rem 1.2rem;
    background-color: #EA2306;
    border: none;
    margin-bottom: 2rem;
    color: #fff;
    font-weight: 800;
    cursor: pointer;
}

button:hover {
    background-color: #EA2306;
}

input, select {
    cursor: pointer;
}

@media (max-width: 990px) {
    .reservaciones__img {
        display: flex;
        flex-direction: column-reverse;
    }

    .reservaciones__img__bebida, .reservaciones__img__container {
        position: relative;
        margin: 0;
        width: 100%;
        right: 0;
    }

    .reservaciones__img__container h2 {
        margin: 0 1rem;
    }

    .reservacion__container {
        display: flex;
        align-items: center;
        flex-direction: column;
        border: none;
        width: 100%;
        margin: 2rem 0;
    }

    .reservacion__container__form {
        border: #EA2306 4px solid;
        margin: 4rem 0;
        scale: 1.2;
    }

    .reservacion__container__map {
        position: relative;
        left: 0;
        width: 95%;
    }
}

@media (max-width: 600px) {
    .reservacion__container__form {
        scale: 1;
        margin: 0;
    }
}

@media (max-width: 490px) {
    .reservacion__container__form {
        scale: 0.8;
    }
}

@media (max-width: 380px) {
    .reservaciones__img__container h2, .reservaciones__img__container h1 {
        scale: 0.8;
    }
}
</style>