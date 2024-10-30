<template>
  <main class="bg-neutral-100 font-body">
    <NavbarMenu />
    <div class="container px-4 sm:px-0">
      <RouterView />
    </div>
  </main>
</template>
<script setup>
import NavbarMenu from "./components/fragments/NavbarMenu.vue";
</script>
