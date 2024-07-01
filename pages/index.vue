<template>
  <Header />
  <Hero />
  <!-- Strate -->
  <div class="flex flex-col lg:flex-row pb-12 md:pb-32">
    <div class="lg:-mr-px mb-8 lg:mb-0 flex-1">
      <h2 class="h2 lg:px-8 py-4">Stay in <span class="text-brand-medium">Figma</span> <br class="hidden lg:block"/> & Save Time</h2>
      <div class="w-full bg-neutral-lower border border-neutral-low flex justify-center relative">
        <img src="/img/figma.svg" class="absolute top-4 right-4 shadow-md rounded-lg" />
        <nuxt-img src="/img/illu1.png" class="w-[285px] mt-[70px] mb-[5px] lg:mt-[93px] lg:mb-[28px]" />
      </div>
      <div class="flex flex-col lg:px-8 py-4 gap-4 items-start">
        <p class="text-small text-neutral-hight">Document your designs without leaving Figma. Our seamless integration saves you time and keeps your workflow smooth and efficient.</p>
        <Button class="link" link="https://doc.dogm.site/get-started">How to Get Started?</Button>
      </div>
    </div>
    <div class="lg:-mr-px mb-8 lg:mb-0 flex-1">
      <h2 class="h2 lg:px-8 py-4">Streamline With <br class="hidden lg:block"/><span class="text-brand-medium">Markdown</span> & <span class="text-brand-medium">Selectors</span> </h2>
      <div class="w-full bg-neutral-lower border border-neutral-low flex justify-center relative">
        <img src="/img/figma.svg" class="absolute top-4 right-4 shadow-md rounded-lg" />
        <nuxt-img src="/img/illu2.png" class="w-[285px] mt-[50px] mb-[25px] lg:mt-[93px] lg:mb-[28px]" />
      </div>
      <div class="flex flex-col lg:px-8 py-4 gap-4 items-start">
        <p class="text-small text-neutral-hight">Use Markdown and selectors to streamline documentation and extract design data quickly, keeping your workflow efficient and integrated.</p>
        <Button class="link" link="https://www.figma.com/community/file/1362338715305636425/dogm-io-starter-template">Explore Template Example</Button>
      </div>
    </div>
    <div class=" flex-1">
      <h2 class="h2 lg:px-8 py-4"><span class="text-brand-medium">Build</span>, <span class="text-brand-medium">Share</span> And <br class="hidden lg:block"/> <span class="text-brand-medium">Maintain</span> Your Work</h2>
      <div class="w-full bg-neutral-lowest border border-neutral-low flex justify-center relative">
        <img src="/img/dogm.svg" class="absolute top-4 right-4 shadow-md rounded-lg" />
        <nuxt-img src="/img/illu3.png" class="w-[285px] mt-[50px] mb-[25px] lg:mt-[93px] lg:mb-[28px]" />
      </div>
      <div class="flex flex-col lg:px-8 py-4 gap-4 items-start">
        <p class="text-small text-neutral-hight">Enhance your Figma workflow by easily creating, sharing, and maintaining your documentation. Keep your team aligned and your projects up-to-date effortlessly.</p>
        <Button class="link" link="https://mc6stlkssthocv2yy0pjbn.dogm.site/light/brand">Check Out Demo Site</Button>
      </div>
    </div>
  </div>
  <!-- Strate -->
  <div class="flex flex-col lg:flex-row items-start pb-12 md:pb-32">
    <div class="flex flex-col lg:w-1/3 lg:px-8 pb-4 gap-4 items-start">
      <h2 class="h2">Build Your <span class="text-brand-medium">Design System</span> As You Wish</h2>
      <p class="text-small text-neutral-hight">At Dogm.io, we understand that while structure is essential, flexibility in expression is key to innovative design. Our platform offers a robust framework that supports your creative journey, allowing you to tailor your design system to tell your story, your way. While we provide the scaffold, you have the freedom to fill it with your unique style and insights. It’s your design, shaped by your rules, enabling you to communicate your vision</p>
    </div>
    <nuxt-img src="/img/DS.png" class="lg:w-2/3 border border-neutral-low" />
  </div>
  <!-- Strate -->
  <div class="flex flex-col-reverse lg:flex-row items-start pb-12 md:pb-32">
    <nuxt-img src="/img/layout.png" class="lg:w-2/3 border border-neutral-low" />
    <div class="flex flex-col lg:w-1/3 lg:px-8 pb-4 gap-4 items-start">
      <h2 class="h2">Manage Your <span class="text-brand-medium">Layout</span> the way you want</h2>
      <p class="text-small text-neutral-hight">With Dogm.io, harness the power of Markdown and selectors to design and manage your layouts exactly as you envision. Our flexible tools give you complete control over every aspect of your page layout, allowing you to customize and adjust details to match your specific needs and aesthetic preferences. Imagine and implement your ideal visual arrangement with ease—whether you're aiming for simplicity or complex, multi-layered designs, our platform adapts to your creative vision, ensuring that your layouts look and function flawlessly.</p>
      <Button class="link" link="https://doc.dogm.site/markdown">Learn more</Button>
    </div>
  </div>
  <!-- Strate -->
  <div class="flex flex-col lg:flex-row items-start pb-12 md:pb-32">
    <div class="flex flex-col lg:w-1/3 lg:px-8 pb-4 gap-4 items-start">
      <h2 class="h2">Extract All Your<br class="hidden lg:block"/> <span class="text-brand-medium">Design Datas</span></h2>
      <p class="text-small text-neutral-hight">Unlock the full potential of your design documentation with Dogm.io’s powerful <span class="text-brand-medium">@</span> selector. This feature allows you to extract every parameter and attribute from your designs, simplifying the way you define documentation rules. Focus on crafting your rules without worrying about tracking specific values. As your designs are updated, your documentation will automatically refresh, ensuring it always reflects the latest changes. Maintain up-to-date documentation effortlessly, letting you keep your creative flow uninterrupted.</p>
      <Button class="link" link="https://doc.dogm.site/attributes-properties">Learn more</Button>
    </div>
    <nuxt-img src="/img/Datas.png" class="lg:w-2/3 bg-neutral-lower border border-neutral-low" />
  </div>
  <!-- Strate -->
  <div class="flex flex-col-reverse lg:flex-row items-start pb-12 md:pb-32">
    <nuxt-img src="/img/modes.png" class="lg:w-2/3 border border-neutral-low" />
    <div class="flex flex-col lg:w-1/3 lg:px-8 pb-4 gap-4 items-start">
      <h2 class="h2">Works With <br class="hidden lg:block"/><span class="text-brand-medium">Figma Modes</span></h2>
      <p class="text-small text-neutral-hight">Dogm.io seamlessly integrates with Figma’s versatile modes, enabling you to tailor your documentation for every aspect of your design system. Whether you're adjusting for themes, devices, or languages, our platform respects Figma’s logic and mirrors each variable mode accurately. This compatibility ensures that your documentation is as dynamic and adaptable as your designs.</p>
      <Button class="link" link="https://doc.dogm.site/modes">Learn more</Button>
    </div>
  </div>
  <Background/>
</template>