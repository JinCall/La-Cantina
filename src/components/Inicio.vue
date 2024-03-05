<template>
    <div class="inicio" id="inicio">
        <div class="inicio__title">
            <img class="inicio__title__img" :src="inicioInfo.img.logo" alt="">
            <p class="inicio__title__text">{{ inicioInfo.nombre }}</p>
        </div>
        <div class="inicio__container">
            <div class="inicio__container__img">
                <img :src="inicioInfo.img.banner" alt="">
            </div>
            <div class="inicio__container__info">
                <div class="inicio__container__info__text">
                    <p class="" id="popText">{{ inicioInfo.text.popText }}</p>
                </div>
                <div class="inicio__container__info__card">
                    <h1>{{ inicioInfo.text.cardTitle }}</h1>
                    <p>{{ inicioInfo.text.cardText }}</p>
                    <router-link class="inicio__container__info__card__btn" to="/menu">
                        <span>VER EL MENU</span>
                    </router-link>
                </div>
                <div class="inicio__container__info__card">
                    <div class="inicio__container__info__card__img">
                        <img src="../assets/inicio/lemon-svgrepo-com2.svg" alt="">
                        <img src="../assets/inicio/lemon-svgrepo-com.svg" alt="">
                    </div>
                    <h1>{{ inicioInfo.text.cardPromo }}</h1>
                    <p>{{ inicioInfo.text.cardHorario }}</p>
                </div>
                <div class="inicio__container__info__img">
                    
                </div>
                <div class="diamond" id="diamond">
                    <img src="../assets/inicio/star-2-svgrepo-com.svg" alt="">
                </div>
            </div>
        </div>
    </div>
    <router-view/>
</template>

<script>
/* eslint-disable */
import { ref, onMounted } from 'vue';

export default {
    name: "Inicio",
    
    setup() {
        const popText = ref(null);
        const diamond = ref(null)

        onMounted(() => {
            popText.value = document.querySelector("#popText");
            diamond.value = document.querySelector("#diamond");
        });

        const observerPop = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    popText.value.classList.add("active");
                } else {
                    popText.value.classList.remove("active");
                }
            });
        });

        const observerDiamond = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    diamond.value.classList.add("active");
                } else {
                    diamond.value.classList.remove("active");
                }
            });
        });

        onMounted(() => {
            if (diamond.value) {
                observerDiamond.observe(diamond.value);
            }
        });

        onMounted(() => {
            if (popText.value) {
                observerPop.observe(popText.value);
            }
        });
        const inicioInfo = {
            nombre: "LA CANTINA",
            text: {
                popText: 'Párrafo. Haz clic para editar y agregar tu propio texto. Es fácil. Haz clic en "Editar texto" o doble clic aquí para agregar tu contenido y cambiar la fuente. Puedes arrastrar y soltar este texto donde quieras en tu página. En este espacio puedes contar tu historia y permitir a los usuarios saber más sobre ti. Este es un buen espacio para escribir textos largos sobre tu empresa y servicios. Usa este espacio para incluir más detalles sobre tu empresa.',
                cardTitle: "El mejor bar al estilo Mexico en California",
                cardText: 'Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil. Haz clic en "Editar texto" o doble clic aquí para agregar tu contenido y cambiar la fuente.',
                cardPromo: "TEQUILA — ¡me pone contento!",
                cardHorario: "1+1 DE 18:00 a 20:00",
            },
            img: {
                logo: "https://static.wixstatic.com/media/ebb861_ca5229aa420e4138851ae495ce1fafca.png/v1/fill/w_127,h_132,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ebb861_ca5229aa420e4138851ae495ce1fafca.png",
                banner: "https://static.wixstatic.com/media/ebb861_44a2a1bf89e44d739c45b60e48aeb4da.jpg/v1/fill/w_1903,h_672,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ebb861_44a2a1bf89e44d739c45b60e48aeb4da.jpg",
                cardImg: "https://static.wixstatic.com/media/ebb861_687ed901743e4a3382deaa882542efd9.jpg/v1/fill/w_850,h_610,al_c,q_85,enc_auto/ebb861_687ed901743e4a3382deaa882542efd9.jpg",
                background: "https://static.wixstatic.com/media/ebb861_07fceeca07db464886e79da0b1904c62.png/v1/fill/w_1920,h_536,al_c,q_90,enc_auto/ebb861_07fceeca07db464886e79da0b1904c62.png"
            }
        }
        
        return { inicioInfo }
    }
}


</script>

<style scoped>
.inicio__title {
    width: 100%;
    height: auto;
    padding: .5rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.inicio__title__img {
    width: 5rem;
    height: 5rem;
    object-fit: cover;
}

.inicio__title__text {
    text-align: center;
    font-size: 1.5rem;
    color: #EA2306;
    font-weight: 700;
}

.inicio__container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.inicio__container__img {
    width: 100%;
    height: 100%;
}

.inicio__container__img img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.inicio__container__info {
    background-image: url("https://static.wixstatic.com/media/ebb861_07fceeca07db464886e79da0b1904c62.png/v1/fill/w_1920,h_536,al_c,q_90,enc_auto/ebb861_07fceeca07db464886e79da0b1904c62.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position-y: bottom;
    background-position-x: left;
    width: 100%;
    height: auto;
    display: grid;
    align-items: center;
    justify-content: center;
    margin-top: 6rem;
    margin-bottom: 12rem;
    grid-template-columns: auto auto;
    gap: 0;
    row-gap: 0;
    position: relative;
}

.inicio__container__info__text, .inicio__container__info__card {
    width: 475px;
    height: 475px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.inicio__container__info__text {
    font-size: 1rem;
    text-align: justify;
    transition: 1s;
    position: relative;
}

.inicio__container__info__text p {
    opacity: 0;
    transition: 1s;
}

.inicio__container__info__text p.active {
    left: 20%;
    opacity: 1;
}

.inicio__container__info__text p {
    position: absolute;
    width: 60%;
    left: 50%;
    transition: 1s;
}

.inicio__container__info__card {
    background-color: #1a1a1a;
    color: #fff;
    z-index: 1;
}

.inicio__container__info__card p, .inicio__container__info__card h1 {
    padding: 1rem;
}

.inicio__container__info__card h1 {
    font-size: 2.5rem;
    text-align: justify;
}

.inicio__container__info__card p {
    font-size: 1rem;
    text-align: center;
    margin-bottom: 4rem;
    padding: 0 2.6rem;
}

.inicio__container__info__card__btn {
    font-size: 1rem;
    margin-right: auto;
    background-color: #EA2306;
    padding: 1rem .5rem;
    margin-left: 2.5rem;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    transition: 400ms;
}

.inicio__container__info__card__btn:hover {
    background-color: #f07663;
}

.inicio__container__info__img {
    background-image: url("https://static.wixstatic.com/media/ebb861_687ed901743e4a3382deaa882542efd9.jpg/v1/fill/w_850,h_610,al_c,q_85,enc_auto/ebb861_687ed901743e4a3382deaa882542efd9.jpg");
    background-size: contain;
    background-repeat: no-repeat;
    width: 42%;
    height: 900px;
    position: absolute;
    top: 50%;
    left: 35%;
}

.inicio__container__info__card__img img{
    width: 4rem;
}

.inicio__container__info__card__img img:nth-child(1){
    transform: rotate(-270deg);
    margin-bottom: 1rem;
}

.inicio__container__info__card h1 {
    text-align: center;
}

.inicio__container__info__card p:nth-child(3) {
    color: #EA2306;
    font-size: 1.5rem;
    font-weight: 500;
}

.diamond {
    position: absolute;
    left: 30%;
    bottom: -10%;
    opacity: 0;
    transition: 1s;
}

.diamond.active {
    opacity: 1;
}

.diamond img {
    width: 3rem;
    height: 3rem;
}

@media (max-width: 990px) {
    .inicio__container__info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 0;
    }

    .inicio__container__info__text,  .inicio__container__info__card{
        width: 95%;
        margin: 1rem 0;
        padding: 0;
    }

    .inicio__container__info__text {
        margin-top: 1rem;
    }

    .inicio__container__info__text p {
        font-size: 160%;
    }

    .inicio__container__info__img {
        position: relative;
        margin: 0;
        padding: 0;
        width: 100%;
        height: auto;
        background-size: cover;
    }
}

@media (max-width: 600px) {
    .inicio__container__info__text p {
        font-size: 140%;
    }
}

@media (max-width: 480px) {
    .inicio__container__info__text p {
        font-size: 120%;
    }
}

@media (max-width: 380px) {
    .inicio__container__info__text p {
        font-size: 100%;
    }
}
</style>