<script setup lang="ts">
import { Rocket } from 'lucide-vue-next';
</script>

<template>
  <div class="flex flex-col gap-6 items-center py-12 md:py-28">
    <h1 class="text-center h1 text-neutral-hightest mb-2">Your Figma <span class="text-brand-medium">Design</span>, Your <span class="text-brand-medium">Rules</span></h1>
    <p class="text-center h3 text-neutral-hightest lg:mx-60">Dogm.io is the easiest way to share your design knowledge from Figma. Show your work and document your design in less than a minute.</p>
    <div class="flex flex-col gap-3 items-center">
      <Button class="large" link="https://app.dogm.io">
        <Rocket :size="20" />
        Start free trial
      </Button>
      <p class="text-small text-neutral-hight">Unlimited docs, 14 days of free trial then $9.99/month</p>
    </div>
  </div>
</template>