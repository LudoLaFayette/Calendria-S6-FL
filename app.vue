<template>
  <div>
    <LayoutHeader/>
    
    <div class="appmain">

      <NuxtPage />
      <LayoutFooter />
    </div>
  </div>
</template>

<style lang="scss" >
@import '@/scss/main';
.appmain {
  overflow: hidden;
}
</style>