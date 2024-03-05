<template>
    <div class="footer">
        <div  class="footer__contacto">
            <div class="footer__contacto__container" v-for="(data, index) in footerData.text" :key="index">
                <h1>{{ data.title }}</h1>
                <h2>{{ data.text }}</h2>
            </div>
        </div>
        <div class="footer__social">
            <a v-for="(data, index) in footerData.img" :key="index"  :href="data.link">
                <img :src="data.img" alt="">
            </a>
        </div>
        <div class="footer__text">
            <div class="footer__text__container">
                <router-link class="footer__text__container__link" to="/terminos">Términos y Condiciones</router-link>
                <router-link class="footer__text__container__link" to="/politica">Política de Privacidad</router-link>
            </div>
            <h3>© {{ date }} Creado por James Santiago Calleros Palacios</h3>
        </div>
    </div>
    <router-view/>
</template>

<script>
/* eslint-disable */
export default {
    name: "Footer",

    setup () {
        const date = new Date().getFullYear();
        const footerData = {
            img: [
                {
                    img: "https://static.wixstatic.com/media/11062b_ef6a6ac194704911951645990055c2ce~mv2.png/v1/fill/w_28,h_28,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_ef6a6ac194704911951645990055c2ce~mv2.png",
                    link: "https://www.facebook.com"
                },
                {
                    img: "https://static.wixstatic.com/media/11062b_8616df6eb29e41d9a61d3677e7ace261~mv2.png/v1/fill/w_28,h_28,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_8616df6eb29e41d9a61d3677e7ace261~mv2.png",
                    link: "https://twitter.com"
                },
                {
                    img: "https://static.wixstatic.com/media/11062b_cef3b719166a4815b446d4dcfcb6120d~mv2.png/v1/fill/w_28,h_28,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_cef3b719166a4815b446d4dcfcb6120d~mv2.png",
                    link: "https://instagram.com"
                }
            ],
            text: [
                {
                    title: "CONTACTO",
                    text: "info@misitio.com +52-1-33-12345678"
                },
                {
                    title: "Conéctate",
                    text: "Síguenos en redes sociales"
                },
                {
                    title: "Empleos",
                    text: "¿Quieres ser parte del equipo? ¡Envía tu CV!"
                },
            ]
        }

        return { footerData, date }
    }
}
</script>

<style>

h3 {
    color: #fff;
}

.footer {
    background-color: #1a1a1a;
    width: 100%;
    padding-bottom: 3rem;
}

.footer__contacto {
    display: flex;
    justify-content: center;
}

.footer__contacto__container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 3rem 0;
}

.footer__contacto__container h1 {
    color: #EA2306;
    text-transform: uppercase;
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.footer__contacto__container h2 {
    color: #fff;
    font-size: 1.5rem;
    width: 20rem;
}

.footer__social {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.footer__text__container {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 2rem;
}

.footer__text__container__link {
    text-decoration: none;
    color: #fff;
    font-weight: 600;
}

@media (max-width: 990px) {
    .footer__contacto {
        flex-direction: column;
        gap: 1rem;
    }

    .footer__contacto__container {
        margin: 2rem 0;
    }

    .footer__contacto__container h2 {
        margin: 0 1rem;
        width: 90%;
    }
}
</style>