<template>
    <div class="politica">
        <h1 class="" id="privacidad">Política de Privacidad</h1>
        <div>
            <h2 class="" id="aviso">Aviso legal</h2>
            <p class="" id="avisoText">Las explicaciones e información proporcionadas en esta página son solo explicaciones e información generales y a grandes rasgos sobre cómo redactar tu propio documento de Política de Privacidad. No debes considerar este artículo como asesoramiento legal o recomendaciones sobre lo que realmente debes hacer, porque no podemos saber de antemano cuáles son las políticas de privacidad específicas que deseas establecer entre tu negocio y tus clientes y visitantes. Te recomendamos que busques asesoramiento legal para entender y elaborar tu propia Política de Privacidad.</p>
        </div>
        <div>
            <h2 class="" id="politica">Política de Privacidad: fundamentos</h2>
            <p class="" id="politicaText1">Dicho esto, una Política de Privacidad es una declaración que divulga una parte o la totalidad de las prácticas de recopilación, uso, divulgación, procesos y gestión de datos de los usuarios y clientes de un sitio web. También suele incluir una declaración sobre el compromiso del sitio web de proteger la privacidad de sus visitantes o clientes, y una explicación sobre los diferentes mecanismos que el sitio web aplica para proteger la privacidad.</p>
            <p class="" id="politicaText2">Las distintas jurisdicciones tienen diferentes obligaciones legales sobre lo que debe incluirse en una Política de Privacidad. Tú eres responsable de asegurarte de que cumples con la legislación pertinente a tus actividades y ubicación.</p>
        </div>
        <div>
            <h2 class="" id="doc">Qué debe incluirse en el documento de Términos y Condiciones</h2>
            <p class="" id="docText1">En general, los T&C suelen abordar este tipo de cuestiones: quién está autorizado a utilizar el sitio web, los posibles métodos de pago, una declaración de que el propietario del sitio web puede cambiar su oferta en el futuro, los tipos de garantías que el propietario del sitio web ofrece a sus clientes, una referencia a cuestiones de propiedad intelectual o derechos de autor (en caso de ser relevante), el derecho del propietario del sitio web a suspender o cancelar la cuenta de un miembro y mucho más. </p>
            <p class="" id="docText2">Para obtener más información, lee nuestro artículo Cómo crear una política de Términos y Condiciones.</p>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';

/* eslint-disable */
export default {
    name: "Politica",

    setup() {

        const privacidad = ref(null);

        const aviso = ref(null);
        const avisoText = ref(null);

        const politica = ref(null);
        const politicaText1 = ref(null);
        const politicaText2 = ref(null);

        const doc = ref(null);
        const docText1 = ref(null);
        const docText2 = ref(null);

        onMounted(() => {
            privacidad.value = document.querySelector("#privacidad");
            aviso.value = document.querySelector("#aviso");
            avisoText.value = document.querySelector("#avisoText");
            politica.value = document.querySelector("#politica");
            politicaText1.value = document.querySelector("#politicaText1");
            politicaText2.value = document.querySelector("#politicaText2");

            doc.value = document.querySelector("#doc");
            docText1.value = document.querySelector("#docText1");
            docText2.value = document.querySelector("#docText2");
        });

        const observerprivacidad = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    privacidad.value.classList.add("active");
                } else {
                    privacidad.value.classList.remove("active");
                }
            });
        });

        const observerAviso = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    aviso.value.classList.add("active");
                } else {
                    aviso.value.classList.remove("active");
                }
            });
        });

        const observerAvisoText = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    avisoText.value.classList.add("active");
                } else {
                    avisoText.value.classList.remove("active");
                }
            });
        });

        const observerPolitica = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    politica.value.classList.add("active");
                } else {
                    politica.value.classList.remove("active");
                }
            });
        });

        const observerPoliticaText1 = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    politicaText1.value.classList.add("active");
                } else {
                    politicaText1.value.classList.remove("active");
                }
            });
        });

        const observerPoliticaText2 = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    politicaText2.value.classList.add("active");
                } else {
                    politicaText2.value.classList.remove("active");
                }
            });
        });

        const observerDoc = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    doc.value.classList.add("active");
                } else {
                    doc.value.classList.remove("active");
                }
            });
        });

        const observerDocText1 = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    docText1.value.classList.add("active");
                } else {
                    docText1.value.classList.remove("active");
                }
            });
        });

        const observerDocText2 = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    docText2.value.classList.add("active");
                } else {
                    docText2.value.classList.remove("active");
                }
            });
        });

        onMounted(() => {
            if (privacidad.value) {
                observerprivacidad.observe(privacidad.value)
            }
            if (aviso.value) {
                observerAviso.observe(aviso.value)
            }
            if (avisoText.value) {
                observerAvisoText.observe(avisoText.value)
            }
            if (politica.value) {
                observerPolitica.observe(politica.value)
            }
            if (politicaText1.value) {
                observerPoliticaText1.observe(politicaText1.value)
            }
            if (politicaText2.value) {
                observerPoliticaText2.observe(politicaText2.value)
            }
            if (doc.value) {
                observerDoc.observe(doc.value)
            }
            if (doc.value) {
                observerDocText1.observe(docText1.value)
            }
            if (doc.value) {
                observerDocText2.observe(docText2.value)
            }
        })
    }
}
</script>

<style scoped>
.politica {
    background-color: #fff;
    width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    color: #1a1a1a;
}

h1 {
    font-size: 3rem;
    font-weight: 800;
    text-transform: uppercase;
    width: 50%;
    margin-bottom: 2rem;
    opacity: 0;
    transition: 1s;
}

h1.active {
    opacity: 1;
}

h2 {
    font-size: 2.25rem;
    text-transform: uppercase;
    text-align: justify;
    font-weight: 800;
    margin-right: 30%;
    margin-bottom: 1rem;
    width: 60%;
    opacity: 0;
    transition: 1s;
}

h2.active {
    opacity: 1;
}

p {
    text-align: justify;
    margin-bottom: 2rem;
    opacity: 0;
    margin-left: 4rem;
    transition: 1s;
    width: 90%;
}

p.active {
    opacity: 1;
    margin-left: 0;
}

div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

@media (max-width: 950px) {
    .politica {
        width: 100%;
    }

    h1 {
        width: 90%;
        font-size: 2rem;
    }

    h2 {
        font-size: 1.7rem;
    }
}
</style>