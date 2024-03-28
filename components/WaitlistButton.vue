<script setup lang="ts">
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogRoot,
  AlertDialogTitle,
  AlertDialogTrigger,
} from 'radix-vue'

function handleAction() {
  alert('clicked action button!')
}
</script>

<template>
  <AlertDialogRoot>
    <AlertDialogTrigger
      class="button"
    >
      Rejoindre la waitlist
    </AlertDialogTrigger>
    <AlertDialogPortal>
      <AlertDialogOverlay class="bg-neutral-hightest/80 data-[state=open]:animate-overlayShow fixed inset-0 z-30" />
      <AlertDialogContent
        class="z-[100] data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-neutral-lowest p-8 shadow-xl focus:outline-none"
      >
        <AlertDialogTitle class="h3 text-neutral-hightest mb-2">
          Are you absolutely sure?
        </AlertDialogTitle>
        <AlertDialogDescription class="text-small text-neutral-medium">
          This action cannot be undone. This will permanently delete your account and remove your data from our servers.
        </AlertDialogDescription>
        <div class="flex justify-end gap-2 mt-4">
          <AlertDialogCancel
            class="button negative"
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            class="button"
          >
            Yes, delete account
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialogPortal>
  </AlertDialogRoot>
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