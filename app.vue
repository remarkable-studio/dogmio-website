<script setup lang="ts">
useSeoMeta({
  title: 'Dogm.io - Your Figma Design, Your Rules',
  ogTitle: 'Dogm.io - Your Figma Design, Your Rules',
  description: 'The easiest way to share your design knowledge and resources from Figma',
  ogDescription: 'The easiest way to share your design knowledge and resources from Figma',
  ogImage: 'ogimage.png',
})
</script>

<template>
  <div class="container px-6 md:px-0 mx-auto relative z-10 bg-neutral-lower">
    <NuxtPage /> 
  </div>
  <Footer />
</template>
