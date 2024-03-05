<template>
    <div class="social" :class=" { off : mas}">
        <div class="social__title">
            <img src="../assets/social/sun-svgrepo-com.svg" alt="">
            <h1>{{ socialData.title }}</h1>
            <h1>{{ socialData.text }}</h1>
        </div>
        <div class="social__container">
            <div :class="[{ more : mas}, { evenMore : aunMas}]" class="social__container__posts" id="posts">
                <div v-for="(social, index) in socialData.posts" :key="index" class="social__container__posts__item">
                    <h1>{{ social.post }}</h1>
                    <h2>{{ socialData.hashtag }}</h2>
                </div>
                <p @click="mas = !mas" :class="{ hide : mas }" class="social__container__posts__more" id="mas">Cargar mas</p>
                <p @click="aunMas = !aunMas" :class="[{ hide : aunMas }, { show : mas }]" class="social__container__posts__evenMore" id="aunMas">Cargar mas</p>
            </div>
        </div>
        <div class="social__containerMobile">
            <div class="socialMobile__container__posts" id="posts">
                <div class="socialMobile__container__posts__item">
                    <h1>Post 1</h1>
                    <h2>@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com</h2>
                </div>
            </div>
        </div>
    </div>
    <Subscribe/>
</template>

<script>
import { ref } from 'vue'
import Subscribe from './Subscribe.vue'

/* eslint-disable */
export default {
    name: "Social",
    components: {
        Subscribe,
    },
    setup() {
        const mas = ref(false);
        const aunMas = ref(false);
        const socialData = {
            title: "Hola Amigos!",
            text: " HASHTAG #LACANTINA para nuestro INSTAGRAM",
            posts: [
                {
                    post: "post 1"
                },
                {
                    post: "post 2"
                },
                {
                    post: "post 3"
                },
                {
                    post: "post 4"
                },
                {
                    post: "post 5"
                },
                {
                    post: "post 6"
                },
                {
                    post: "post 7"
                },
                {
                    post: "post 8"
                },
                {
                    post: "post 9"
                },
                {
                    post: "post 10"
                },
                {
                    post: "post 11"
                },
                {
                    post: "post 12"
                },
                {
                    post: "post 13"
                },
                {
                    post: "post 14"
                },
                {
                    post: "post 15"
                },
                {
                    post: "post 16"
                },
                {
                    post: "post 17"
                },
                {
                    post: "post 18"
                }
            ],
            hashtag: "@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com"
        };
        return { socialData, mas, aunMas };
    },
}
</script>

<style>

.social {
    background-image: url("https://static.wixstatic.com/media/ebb861_727bad5954e64233bc06ba4f93da2fc2.png/v1/fill/w_1650,h_900,al_c,q_90,enc_auto/ebb861_727bad5954e64233bc06ba4f93da2fc2.png");
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 8rem;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.social.off {
    background-image: none;
}

.social__title {
    width: 100%;
    margin-top: 3rem;
    padding-bottom: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.social__title img {
    width: 4rem;
    margin-bottom: 2rem;
}

.social__title h1 {
    width: 30%;
    text-transform: uppercase;
    color: #1a1a1a;
    font-weight: 800;
}

.social__container {
    position: relative;
}

.social__container__posts {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 1rem;
    row-gap: 1rem;
    align-items: center;
    justify-content: center;
    height: 630px;
    overflow: hidden;
    width: 100%;
    transition: 500ms;
}

.social__container__posts.more {
    height: 1260px;
}

.social__container__posts.evenMore {
    height: 1890px;
}

.social__container__posts__item {
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #1a1a1a;
    color: #fff;
    transition: 500ms;
    cursor: pointer;
}

.social__container__posts__item h1 {
    transition: 500ms;
}

.social__container__posts__item h2 {
    opacity: 0;
    transition: 500ms;
}

.social__container__posts__item:hover {
    background-color: #808080;
}

.social__container__posts__item:hover h1 {
    opacity: 0;
}

.social__container__posts__item:hover h2 {
    opacity: 1;
}

.social__container__posts__more, .social__container__posts__evenMore {
    position: absolute;
    border: 1px solid #EA2306;
    background-color: #EA2306;
    color: #fff;
    font-size: 1.5rem;
    padding: .5rem 1rem;
    left: auto;
    top: 100%;
    width: 200px;
    cursor: pointer;
    transition: 500ms;
    z-index: 3;
}

.social__container__posts__evenMore {
    display: none;
}

.social__container__posts__more.hide {
    display: none;
}

.social__container__posts__evenMore.show {
    display: block;
}

.social__container__posts__evenMore.hide {
    display: none;
}

.social__container__posts__more:hover, .social__container__posts__evenMore:hover {
    position: absolute;
    background-color: transparent;
    border: 1px solid #1a1a1a;
    color: #1a1a1a;
}

.social__containerMobile {
    display: none;
}

@media (max-width: 990px) {

    .social {
        padding-bottom: 4rem;
    }

    .social__container {
        display: none;
    }

    .social__title h1 {
        width: 100%;
        margin: 0 1rem;
    }

    .social__containerMobile {
        display: flex;
        justify-content: center;
        align-items: center;
        display: block;
        width: 90%;
    }

    .socialMobile__container__posts {
        display: grid;
        grid-template-columns: auto auto auto;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        width: 100%;
        transition: 500ms;
    }

    .socialMobile__container__posts__item {
        width: 500px;
        height: 500px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #1a1a1a;
        color: #fff;
        transition: 500ms;
    }

    .socialMobile__container__posts__item h1 {
        transition: 500ms;
    }

    .socialMobile__container__posts__item h2 {
        opacity: 0;
        width: 90%;
        transition: 500ms;
    }

    .socialMobile__container__posts__item:hover {
        background-color: #808080;
    }

    .socialMobile__container__posts__item:hover h1 {
        opacity: 0;
    }

    .socialMobile__container__posts__item:hover h2 {
        opacity: 1;
    }
}

@media (max-width: 600px) {
    .socialMobile__container__posts__item {
        width: 400px;
        height: 400px;
    }
}

@media (max-width: 460px) {
    .socialMobile__container__posts__item {
        width: 300px;
        height: 300px;
    }
}

@media (max-width: 340px) {
    .socialMobile__container__posts__item {
        width: 250px;
        height: 250px;
    }
}
</style>
