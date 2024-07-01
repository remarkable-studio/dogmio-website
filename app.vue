<script setup lang="ts">
useHead({
  title: 'Dogm.io - Share your design knowledge and resources from Figma',
  meta: [
    { name: 'description', content: 'The easiest way to share your design knowledge and resources from Figma' }
  ],
})
</script>

<template>
  <div class="container px-6 md:px-0 mx-auto relative z-10 bg-neutral-lower">
    <NuxtPage /> 
  </div>
  <Footer />
</template>
