<template>
    <div class="terminos">
        <h1 class="" id="title">Términos y Condiciones</h1>
        <div>
            <h2 class="" id="aviso">Aviso legal</h2>
            <p class="" id="avisoText">Las explicaciones e información proporcionadas en esta página son solo explicaciones e información generales y a grandes rasgos sobre cómo redactar tu propio documento de Términos y Condiciones. No debes considerar este artículo como asesoramiento legal o recomendaciones sobre lo que realmente debes hacer, porque no podemos saber de antemano cuáles son los términos específicos que deseas establecer entre tu negocio y tus clientes y visitantes. Te recomendamos que busques asesoramiento legal para entender y elaborar tus propios Términos y Condiciones.</p>
        </div>
        <div>
            <h2 class="" id="terminos">Términos y Condiciones: fundamentos</h2>
            <p class="" id="terminosText1">Dicho esto, los Términos y Condiciones («T&C») son un conjunto de términos legalmente vinculantes definidos por ti, como propietario de este sitio web. Los T&C establecen los límites legales que rigen las actividades de los visitantes del sitio web, o tus clientes, mientras visitan o participan en este sitio web. Los T&C tienen como finalidad establecer la relación legal entre los visitantes del sitio y tú como propietario de dicho sitio.</p>
            <p class="" id="terminosText2">Los T&C deben definirse según las necesidades específicas y la naturaleza de cada sitio web. Por ejemplo, un sitio web que ofrece productos a los clientes en operaciones de comercio electrónico, requiere T&C diferentes a los T&C de un sitio web que únicamente proporciona información (como un blog, página de inicio, etc.).</p>
            <p class="" id="terminosText3">Los T&C te confieren, como propietario del sitio web, la capacidad de protegerte de una responsabilidad jurídica, pero esto puede diferir de una jurisdicción a otra, así que asegúrate de recibir asesoramiento legal local si estás tratando de protegerte de la responsabilidad jurídica.</p>
        </div>
        <div>
            <h2 class="" id="documentacion">Qué debe incluirse en el documento de Términos y Condiciones</h2>
            <p class="" id="documentacionText1">En general, los T&C suelen abordar este tipo de cuestiones: quién está autorizado a utilizar el sitio web, los posibles métodos de pago, una declaración de que el propietario del sitio web puede cambiar su oferta en el futuro, los tipos de garantías que el propietario del sitio web ofrece a sus clientes, una referencia a cuestiones de propiedad intelectual o derechos de autor (en caso de ser relevante), el derecho del propietario del sitio web a suspender o cancelar la cuenta de un miembro y mucho más. </p>
            <p class="" id="documentacionText2">Para obtener más información, lee nuestro artículo Cómo crear una política de Términos y Condiciones.</p>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';

/* eslint-disable */
export default {
    name: "Terminos",

    setup() {

        const title = ref(null);

        const aviso = ref(null);
        const avisoText = ref(null);

        const terminos = ref(null);
        const terminosText1 = ref(null);
        const terminosText2 = ref(null);
        const terminosText3 = ref(null);

        const documentacion = ref(null);
        const documentacionText1 = ref(null);
        const documentacionText2 = ref(null);

        onMounted(() => {
            title.value = document.querySelector("#title");
            aviso.value = document.querySelector("#aviso");
            avisoText.value = document.querySelector("#avisoText");
            terminos.value = document.querySelector("#terminos");
            terminosText1.value = document.querySelector("#terminosText1");
            terminosText2.value = document.querySelector("#terminosText2");
            terminosText3.value = document.querySelector("#terminosText3");
            documentacion.value = document.querySelector("#documentacion");
            documentacionText1.value = document.querySelector("#documentacionText1");
            documentacionText2.value = document.querySelector("#documentacionText2");
        });

        const observerTitle = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    title.value.classList.add("active");
                } else {
                    title.value.classList.remove("active");
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

        const observerTerminos = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    terminos.value.classList.add("active");
                } else {
                    terminos.value.classList.remove("active");
                }
            });
        });

        const observerTerminosText1 = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    terminosText1.value.classList.add("active");
                } else {
                    terminos.value.classList.remove("active");
                }
            });
        });

        const observerTerminosText2 = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    terminosText2.value.classList.add("active");
                } else {
                    terminosText3.value.classList.remove("active");
                }
            });
        });

        const observerTerminosText3 = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    terminosText3.value.classList.add("active");
                } else {
                    terminosText3.value.classList.remove("active");
                }
            });
        });

        const observerDoc = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    documentacion.value.classList.add("active");
                } else {
                    documentacion.value.classList.remove("active");
                }
            });
        });

        const observerDocText1 = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    documentacionText1.value.classList.add("active");
                } else {
                    documentacionText1.value.classList.remove("active");
                }
            });
        });

        const observerDocText2 = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    documentacionText2.value.classList.add("active");
                } else {
                    documentacionText2.value.classList.remove("active");
                }
            });
        });

        onMounted(() => {
            if (title.value) {
                observerTitle.observe(title.value)
            }
            if (aviso.value) {
                observerAviso.observe(aviso.value)
            }
            if (avisoText.value) {
                observerAvisoText.observe(avisoText.value)
            }
            if (terminos.value) {
                observerTerminos.observe(terminos.value)
            }
            if (terminosText1.value) {
                observerTerminosText1.observe(terminosText1.value)
            }
            if (terminosText2.value) {
                observerTerminosText2.observe(terminosText2.value)
            }
            if (terminosText3.value) {
                observerTerminosText3.observe(terminosText3.value)
            }
            if (documentacion.value) {
                observerDoc.observe(documentacion.value)
            }
            if (terminosText3.value) {
                observerDocText1.observe(documentacionText1.value)
            }
            if (terminosText3.value) {
                observerDocText2.observe(documentacionText2.value)
            }
        })
    }
}
</script>

<style scoped>
.terminos {
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
    .terminos {
        width: 100%;
    }

    h1 {
        width: 100%;
        font-size: 2rem;
    }

    h2 {
        font-size: 1.7rem;
    }
}
</style>