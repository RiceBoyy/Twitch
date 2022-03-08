<template>
  <div class="Wellcome">
    <h1 class="home-title">
        <span class="text">Twitch Family</span>
        <span class="text">Point System Game</span>
    </h1>
  </div>
</template>

<style lang="scss">

:root{
    --bg-color: #25274c;
}

.Wellcome {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    height: 100vh;
    width: 100%;
    background-color: #25274c;
}

h1{
    font-size: 5em;
    font-weight: normal;
    color: #fff;
    font-family: "Comic Sans MS";
}

/* title styles */
.text{
    position: relative;
    overflow: hidden;
    display: block;
    line-height: 1.2;
}

.text::after{
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: white;
    animation: a-ltr-after 2s cubic-bezier(.77,0,.18,1) forwards;
    transform: translateX(-101%);
}

.text::before{
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: var(--bg-color);
    animation: a-ltr-before 2s cubic-bezier(.77,0,.18,1) forwards;
    transform: translateX(0);
}

.text:nth-of-type(1)::before,
.text:nth-of-type(1)::after{
    animation-delay: 1s;
}

.text:nth-of-type(2)::before,
.text:nth-of-type(2)::after{
    animation-delay: 1.5s;
}

@keyframes a-ltr-after{
    0% {transform: translateX(-100%)}
    100% {transform: translateX(101%)}
}

@keyframes a-ltr-before{
    0% {transform: translateX(0)}
    100% {transform: translateX(200%)}
}

</style>
