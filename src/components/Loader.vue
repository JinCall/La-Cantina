<template>
    <div>
        <span class="loader"></span>
    </div>
</template>

<script>

export default {
    name: "LoaderPage"
}
</script>

<style scoped>

div {
    min-width: 100vw;
    min-height: 100vh;
    background-color: #FFF;
    z-index: 999;
    position: absolute;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
.loader {
  width: 48px;
  height: 48px;
  border: 3px solid #1a1a1a;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  background: #EA2306;
  width: 16px;
  height: 16px;
  transform: translate(-50%, 50%);
  border-radius: 50%;
}
    
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} 
</style>