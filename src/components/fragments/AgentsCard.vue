<template>
  <!-- <div v-if="store.isLoading" class="text-violet-500">
    Agents are preparing to battle. Please wait
  </div> -->
  <div class="w-full grid gap-4 grid-auto-fill relative">
    <AgentsCards />
  </div>
</template>

<script setup>
import AgentsCards from "../template/AgentsCards.vue";
import { useFetchAgentsStore } from "@/stores/fetchAgents";

const store = useFetchAgentsStore();
</script>

<style>
.grid-auto-fill {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
</style>
