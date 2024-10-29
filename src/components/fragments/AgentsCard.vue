<template>
  <div class="grid gap-4 grid-auto-fill relative">
    <AgentsCards />
  </div>
</template>

<script setup>
import AgentsCards from "../template/AgentsCards.vue";
</script>

<style>
.grid-auto-fill {
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}
</style>
