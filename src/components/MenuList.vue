<template>
    <div class="menu">
        <div class="menu__bebidas">
            <h1>BEBIDAS</h1>
            <p class="menu__bebidas__text">Descripción del menú. Haz clic aquí y luego en Editar menú para abrir el editor de menús y cambiar el texto.</p>
        </div>
        <div class="menu__cocteles">
            <h2>COCTELES</h2>
            <p>Esta es la descripción de una sección de tu menú. Haz clic aquí y luego en “Editar menú” para abrir el editor de menús del restaurante y cambiar el texto.</p>
            <div class="line"></div>
        </div>
        <div class="menu__mojito">
            <div>
                <h2>MARGARITA CLÁSICA</h2>
                <p>Descripción del plato. Haz clic en Editar menú para abrir el editor de menús y cambiar el texto.</p>
                <span>$9</span>
            </div>
            <div>
                <h2>MARGARITA ROSA</h2>
                <p>Descripción del plato. Haz clic en Editar menú para abrir el editor de menús y cambiar el texto.</p>
                <span>$9</span>
            </div>
            <div>
                <h2>MOJITO CLÁSICO</h2>
                <p>Descripción del plato. Haz clic en Editar menú para abrir el editor de menús y cambiar el texto.</p>
                <span>$9</span>
            </div>
            <div>
                <h2>TEQUILA SUNRISE</h2>
                <p>Descripción del plato. Haz clic en Editar menú para abrir el editor de menús y cambiar el texto.</p>
                <span>$9</span>
            </div>
        </div>
        <div>
            <h1>TEQUILA</h1>
            <p>Descripción de una sección de tu menú. Haz clic aquí y luego en Editar menú para cambiar el texto.</p>
            <div class="line"></div>
        </div>
        <div class="menu__tequila">
            <div>
                <h2>TEQUILA PLATA</h2>
                <p>Descripción del plato. Haz clic en Editar menú para abrir el editor de menús y cambiar el texto.</p>
                <span>$9</span>
            </div>
            <div>
                <h2>TEQUILA REPOSADO</h2>
                <p>Descripción del plato. Haz clic en Editar menú para abrir el editor de menús y cambiar el texto.</p>
                <span>$9</span>
            </div>
        </div>
        <div class="menu__price">
            <div class="menu__price__container">
                <span><p>300 gr...............</p>$3</span>
                <span><p>400 gr...............</p>$5</span>
            </div>
        </div>
        <div  class="menu__tequila">
            <div>
                <h2>TEQUILA AÑEJO</h2>
                <p>Descripción del plato. Haz clic en Editar menú para abrir el editor de menús y cambiar el texto.</p>
                <span>$9</span>
            </div>
            <div>
                <h2>TEQUILA ESPECIAL</h2>
                <p>Descripción del plato. Haz clic en Editar menú para abrir el editor de menús y cambiar el texto.</p>
                <span>$9</span>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */

export default {
    name: "MenuList"
}
</script>

<style scoped>
.menu {
    background-color: #fff;
    width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
}

.line {
    width: 70px;
    height: 1px;
    background-color: #EA2306;
}

div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 70%;
    text-align: center;
}

h1, h2 {
    font-weight: 800;
}

p {
    color: #EA2306;
    font-weight: 600;
}

span {
    display: flex;
    font-weight: 600;
}

.menu__bebidas {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
}

.menu__bebidas__text {
    color: #1a1a1a;
}

.menu__cocteles {
    color: #EA2306;
}

.menu__mojito, .menu__tequila {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);
    margin: 2rem 0;
}

.menu__mojito div, .menu__tequila div {
    width: 90%;
}

.menu__price {
    width: 65%;
    
    align-items: end;
}
.menu__price__container {
    margin: 0;
    width: auto;
}

@media (max-width: 730px) {
    .menu {
        width: 100%;
    }
}

@media (max-width: 500px) {
    .menu__mojito, .menu__tequila {
        grid-template-columns: repeat(1 , 1fr);
    }

    .menu__mojito div, .menu__tequila div {
        width: 100%;
    }
}
</style>