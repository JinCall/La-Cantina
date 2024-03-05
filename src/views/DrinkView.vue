<template>
    <div class="drink" >
        <router-link to="/menu_list" class="toggler">
            <span class="togglerBar"></span>
            <span class="togglerBar"></span>
        </router-link>
        <div class="container" v-if="drinkDetails">
            <img :src="drinkDetails.strDrinkThumb" alt="">
            <div>
                <h2>{{ drinkDetails.strDrink }}</h2>
                <p>Category: {{ drinkDetails.strCategory }}</p>
                <p>Instructions: {{ drinkDetails.strInstructions }}</p>
            </div>
        </div>
        <Loader v-else/>
    </div>
    <router-view/>
</template>

<script>
import Loader from '@/components/Loader.vue';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
    props: {
        id: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        const drinkDetails = ref(null);
        const router = useRouter()

        const fetchDrinkDetails = async () => {
            try {
                const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${props.id}`);
                const data = await response.json();
                drinkDetails.value = data.drinks[0];

            }
            catch (error) {
                console.error('Error fetching drink details:', error);
                router.push({ name:'NotFound' })
            }
        };
        onMounted(() => {
            fetchDrinkDetails();
        });
        return { drinkDetails };
    },
    components: { Loader }
};
</script>

<style scoped>

.toggler {
    cursor: pointer;
    margin-right: auto;
    border-radius: 15px;
    padding: 0.3rem 0.4rem;
    width: 2rem;
    height: 2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: 0.1rem;
    position: absolute;
    top: 0;
    border: #1a1a1a 1px solid;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.togglerBar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    -webkit-transition: all 300ms ease-in-out;
    background-color: #EA2306;
    
}

.togglerBar:nth-child(1) {
    transform: translateY(6.5px)  rotate(45deg);
}

.togglerBar:nth-child(2) {
    transform: translateY(-6.5px)  rotate(-45deg);
}

img {
    width: 400px;
    margin-right: auto;
}

h2 {
    font-size: 3rem;
    margin-bottom: 2rem;
}

p {
    font-size: 1.5rem;
    text-align: justify;
    margin-right: 1.5rem;
}

.drink {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    display: flex;
    justify-content: space-evenly;
    width: 950px;
    border: 1px #1a1a1a solid;
    position: relative;
    box-shadow: -6px 10px 88px 21px rgba(0,0,0,0.31);
    -webkit-box-shadow: -6px 10px 88px 21px rgba(0,0,0,0.31);
    -moz-box-shadow: -6px 10px 88px 21px rgba(0,0,0,0.31);
}
.drink div div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 55%;
}

@media (max-width: 980px) {
    .container {
        width: 750px;
    }

    p {
        font-size: 1rem;
        text-align: justify;
        margin-right: 0;
        padding: 0 .5rem;
    }
}

@media (max-width: 780px) {

    img {
        width: 100%;
        margin-bottom: auto;
    }
    .container {
        flex-direction: column;
        width: 400px;
        align-items: center;
        margin: 7rem 0;
    }

    .drink div div {
        width: 100%;
        margin: 1rem;
    }
}

@media (max-width: 430px) {
    .container {
        width: 275px;
    }

}
</style>