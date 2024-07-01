<script setup lang="ts">
defineProps({
  label: String,
  class: String,
  link: String,
  icon: String
})
</script>

<template>
  <NuxtLink :to="link" target="_blank" rel="noopener" class="button" :class="class">
    <!-- <Camera :size="32"/>
    {{label}} -->
    <slot></slot>
  </NuxtLink> 
</template>

<style scoped>
.button {
  @apply inline-flex gap-2 items-center text-small text-label bg-neutral-hightest text-neutral-lowest rounded-full px-4 py-2 transition-all justify-center flex-1;

  &:hover {
    @apply bg-neutral-lower text-neutral-hightest;
  }

  &.large{
    @apply px-6 py-3 text-medium;
  }

  &.negative{
    @apply bg-neutral-lowest text-neutral-hightest hover:bg-neutral-medium;
  }

  &.ghost{
    @apply bg-transparent text-neutral-hightest hover:text-brand-medium;
  }
  &.link{
    @apply bg-transparent p-0 text-neutral-hightest hover:text-brand-medium;
  }

  &.secondary {
    @apply bg-neutral-lower text-neutral-hightest;

    &:hover {
      @apply bg-neutral-hightest text-neutral-lowest;
    }
  }
}
</style>