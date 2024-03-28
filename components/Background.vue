<template>
  <div class="background">
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
</div>
</template>

<style scoped>
@keyframes move {
    100% {
        transform: translate3d(0, 0, 1px) rotate(360deg);
    }
}

@media (prefers-color-scheme: dark) {
  .background {
    opacity: 0.5;
    --bg-1: #972fd6;
    --bg-2: #97b8de;
    --bg-3: #583C87;
  }
}
@media (prefers-color-scheme: light) {
  .background {
    opacity: 0.7;
    --bg-1: #E45A84;
    --bg-2: #FFACAC;
    --bg-3: #583C87;
  }
}

.background {
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  overflow: hidden;
  mix-blend-mode:hard-light;
  span{
    filter: blur(100px);
    width: 48vmin;
    height: 48vmin;
    border-radius: 48vmin;
    backface-visibility: hidden;
    position: absolute;
    animation: move;
    animation-duration: 35;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    &:nth-child(even){
      width: 88vmin;
      height: 88vmin;
      border-radius: 88vmin;
    }
    &:nth-child(0) {
      background-color: var(--bg-1); top: 74%; left: 78%; animation-duration: 33s; animation-delay: -90s; transform-origin: -21vw -19vh;
    }
    &:nth-child(1) {
      background-color: var(--bg-2); top: 81%; left: 91%; animation-duration: 118s; animation-delay: -76s; transform-origin: 3vw -3vh;
    }
    &:nth-child(2) {
      background-color: var(--bg-2); top: 23%; left: 10%; animation-duration: 19s; animation-delay: -131s; transform-origin: -13vw -21vh;
    }
    &:nth-child(3) {
      background-color: var(--bg-1); top: 17%; left: 89%; animation-duration: 73s; animation-delay: -83s; transform-origin: -16vw -17vh;
    }
    &:nth-child(4) {
      background-color: var(--bg-2); top: 78%; left: 66%; animation-duration: 110s; animation-delay: -127s; transform-origin: 16vw -21vh;
    }
    &:nth-child(5) {
      background-color: var(--bg-2); top: 85%; left: 52%; animation-duration: 28s; animation-delay: -18s; transform-origin: -8vw -9vh;
    }
    &:nth-child(6) {
      background-color: var(--bg-1); top: 40%; left: 51%; animation-duration: 100s; animation-delay: -49s; transform-origin: -16vw 3vh;
    }
    &:nth-child(7) {
      background-color: var(--bg-3); top: 37%; left: 23%; animation-duration: 97s; animation-delay: -134s; transform-origin: 16vw 5vh;
    }
    &:nth-child(8) {
      background-color: var(--bg-1); top: 21%; left: 93%; animation-duration: 79s; animation-delay: -131s; transform-origin: 19vw 6vh;
    }
    &:nth-child(9) {
      background-color: var(--bg-2); top: 38%; left: 82%; animation-duration: 9s; animation-delay: -65s; transform-origin: -17vw 7vh;
    }
    &:nth-child(10) {
      background-color: var(--bg-3); top: 70%; left: 18%; animation-duration: 124s; animation-delay: -64s; transform-origin: 25vw 17vh;
    }
    &:nth-child(11) {
      background-color: var(--bg-2); top: 12%; left: 6%; animation-duration: 107s; animation-delay: -108s; transform-origin: 25vw 9vh;
    }
  }
}



</style>