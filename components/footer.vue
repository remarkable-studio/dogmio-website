<script setup lang="ts">
import { Rocket } from 'lucide-vue-next';
</script>

<template>
  <div class=" bg-neutral-hightest px-6 md:px-0 py-12 md:pt-28">
    <div class="flex flex-col gap-6 items-center container mx-auto">
      <h1 class="text-center h1 text-neutral-lowest mb-2">Start Building Your Design Documentation</h1>
      <p class="text-center text-neutral-lowest">Unlock the full potential of your projects with Dogm.io. Begin effortlessly creating, managing, and maintaining your design documentation now, and streamline your workflow for better productivity and collaboration.</p>
      <div class="flex flex-col gap-3 items-center">
        <Button class="large negative" link="https://app.dogm.io">
          <Rocket :size="20" />
          Start free trial
        </Button>
        <p class="text-small text-neutral-hight">14 days of free trial then $9.99 / month</p>
      </div>
      <div class="text-neutral-hight w-full flex gap-6 pt-12 mt-6 border-t border-neutral-highter/50">
        <p>© dogm.io 2024</p>
        <a class="hover:text-neutral-lowest" href="https://terms.dogm.site/terms-conditions">Terms & Condition</a>
        <a class="hover:text-neutral-lowest" href="https://terms.dogm.site/privacy-policy">Privacy Policy</a>
      </div>
    </div>
  </div>
</template>