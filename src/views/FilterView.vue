<template>
    <div class="container">
        <div class="search">
            <input type="text" v-model="filterText" placeholder="Filter drinks...">
        </div>
        <div v-if="drinks" class="drinks">
            <router-link :to="{ name: 'DrinkView', params: { id: drink.idDrink } }" class="drinks__card" @click="selectDrink(drink)" v-for="drink in filteredDrinks" :key="drink.idDrink">
                <img :src="drink.strDrinkThumb" alt="Drink Thumbnail">
                <h2>{{ drink.strDrink }}</h2>
                <div class="drinks__card__ingredients">
                    <p style="font-size: 1.5rem; margin-bottom: 1rem;">Ingredients:</p>
                    <p v-if="drink.strIngredient1">{{ drink.strIngredient1 }} - {{ drink.strMeasure1 }}</p>
                    <p v-if="drink.strIngredient2">{{ drink.strIngredient2 }} - {{ drink.strMeasure2 }}</p>
                </div>
                <p class="drinks__card__instruction">Instructions: {{ drink.strInstructions }}</p>
                <div class="drinks__card__info">
                    <div>
                        <p>Category: </p>
                        <p>{{ drink.strCategory }}</p>
                    </div>
                    <div>
                        <p>Drink id:</p>
                        <p> {{ drink.idDrink }}</p>
                    </div>
                </div>
            </router-link>
        </div>
        <loader v-if="!drinks"/>
        <div class="notFound" v-if="filteredDrinks.length == 0 && drinks">
            <p>Not item found</p>
        </div>
    </div>
    <Footer/>
    <router-view/>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Loader from '@/components/Loader.vue';
import { ref, onMounted, computed } from 'vue';
  
export default {
    setup() {
        const drinks = ref(null);
        const selectedDrink = ref(null);
        const filterText = ref('');
        const selectDrink = (drink) => {
            selectedDrink.value = drink;
        };
        const fetchData = async () => {
            try {
                const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s');
                const data = await response.json();
                drinks.value = data.drinks;
            }
            catch (error) {
                console.error('Error fetching API data:', error);
            }
        };
        onMounted(() => {
            fetchData();
        });
        const filteredDrinks = computed(() => {
            if (!drinks.value)
                return [];
            return drinks.value.filter((drink) => drink.strDrink.toLowerCase().includes(filterText.value.toLowerCase()));
        });
        return { drinks, selectDrink, selectedDrink, filterText, filteredDrinks };
    },
    components: { Loader, Footer }
};
</script>

<style scoped>

.notFound {
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.notFound p {
    color: #EA2306;
    font-size: 5rem;
    font-weight: 800;
    text-transform: uppercase;
}

ul {
    list-style: none;
}

p {
    color: #1a1a1a;
}

h2 {
    margin-bottom: 1rem;
    font-size: 2.2rem;
    color: #EA2306;
}

img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    margin-bottom: auto;
}
.drinks {
    width: 100%;
    display: grid;
    justify-items: center;
    align-content: center;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    row-gap: 2rem;
    margin-top: 6rem;
    margin-bottom: 5rem;
}

.search {
    background-color: #fff;
    width: 100%;
    position: fixed;
    left: 0;
    z-index: 1;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
}

.search input {
    width: 30%;
    border: #1a1a1a 1px solid;
    padding: 1rem 1.2rem;
}
.drinks__card {
    text-decoration: none;
    width: 400px;
    height: 550px;
    border: #1a1a1a solid 1px;
    border-radius: 28px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: -6px 10px 88px 21px rgba(0,0,0,0.31);
    -webkit-box-shadow: -6px 10px 88px 21px rgba(0,0,0,0.31);
    -moz-box-shadow: -6px 10px 88px 21px rgba(0,0,0,0.31);
    transition: 500ms;
}

.drinks__card:hover {
    scale: 1.05;
}

.drinks__card__ingredients {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 1.5rem;
    top: 72%;
    position: absolute;
}

.drinks__card__instruction {
    text-align: center;
    overflow-y: auto;
    margin-bottom: 8rem;
}

.drinks__card__info {
    background-color: #EA2306;
    display: grid;
    align-content: center;
    grid-template-columns: repeat(2, 1fr);
    bottom: 0;
    border-bottom-left-radius: 27px;
    border-bottom-right-radius: 27px;
    width: 100%;
    height: 3rem;
    
}

.drinks__card__info p {
    color: #fff;
    width: 100%;
}


@media (max-width: 1270px) {
    .drinks {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 990px) {
    .search {
        position: relative;
    }

    .drinks {
        margin-top: 1rem;
    }
}

@media (max-width: 840px) {
    .drinks {
        grid-template-columns: repeat(1, 1fr);
    }

    .search input {
        width: 350px;
    }
}

@media (max-width: 600px) {
    .search {
        padding: 5rem 0;
    }

    .search input {
        margin-top: auto;
    }
}

@media (max-width: 420px) {

    .search input {
        width: 100%;
    }
    .drinks__card {
        width: 250px;
        height: 400px;
    }
}
</style>
