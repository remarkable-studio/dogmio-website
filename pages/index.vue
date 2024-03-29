<script setup>
useHead({
  script: [{ src: "https://app.mailjet.com/pas-nc-pop-in-v1.js" }],
});
</script>

<template>
  <div class="max-w-xl mx-auto p-6 h-screen flex flex-col justify-center">
    <div class="flex flex-col gap-6 items-center">
      <Logo/>
      <div>
        <h1 class="text-center h1 text-neutral-hightest mb-2">Create your design doc from Figma</h1>
        <p class="text-center text-small text-neutral-hightest/50">Dogm.io is the easiest way to share your design knowledge and resources from Figma. It allows you to show your work, document your design, share all your assets in less than a minute.</p>
      </div>
      <WaitlistButton/>
      <iframe data-w-token="762abadc939580178898" data-w-type="pop-in" frameborder="0" scrolling="yes" marginheight="0" marginwidth="0" src="https://spkhp.mjt.lu/wgt/spkhp/xmu0/form?c=d2f6089d" width="100%" style="height: 0;"></iframe>
      <iframe data-w-token="762abadc939580178898" data-w-type="trigger" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://spkhp.mjt.lu/wgt/spkhp/xmu0/trigger?c=1ba600d4" width="100%" style="height: 0;"></iframe>
      <!-- <Script type="text/javascript" src="https://app.mailjet.com/pas-nc-pop-in-v1.js"></Script> -->
    </div>
  </div>
</template>