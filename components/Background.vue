<template>
  <div class="background">
    <div class="rulers">
      <span></span>
      <span></span>
      <span class="hidden md:block"></span>
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.background{
  @apply container px-6 md:px-0 mx-auto absolute -top-0 overflow-hidden w-full bg-neutral-lowest h-full;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: -1;
  .rulers{
    @apply h-full flex justify-between;
    span{
      @apply w-px h-full bg-neutral-lower;
    }
  }
}
</style>