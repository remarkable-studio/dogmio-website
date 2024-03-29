<script setup lang="ts">

function handleAction() {
  (window as any).mjOpenPopin('762abadc939580178898')
}
</script>

<template>
  <button class="button" @click="handleAction()">Join the waitlist</button>

</template>

<style scoped>
.button {
  @apply inline-flex gap-2 items-center text-small text-label bg-neutral-hightest text-neutral-lowest rounded-full px-4 py-2 transition-all justify-center flex-1;

  &:hover {
    @apply bg-neutral-low text-neutral-hightest;
  }

  &.negative {
    @apply bg-neutral-low text-neutral-hightest;

    &:hover {
      @apply bg-neutral-hightest text-neutral-lowest;
    }
  }

  &.danger {
    @apply bg-danger-low/20 text-danger-medium;

    &:hover {
      @apply bg-danger-medium text-danger-lowest;
    }

    &.negative {
      @apply bg-danger-medium text-danger-lowest;

      &:hover {
        @apply bg-danger-low/20 text-danger-medium;
      }
    }
  }
}
</style>