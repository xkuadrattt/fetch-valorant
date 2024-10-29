<template>
  <div v-if="agent" class="py-4">
    <h1 class="text-xl sm:text-2xl font-bold mb-6">{{ agent.displayName }}</h1>

    <picture>
      <source :srcset="agent.fullPortraitV2" />
      <img
        :src="agent.fullPortraitV2"
        :alt="agent.displayName"
        :style="{
          backgroundColor: `#${agent.backgroundGradientColors[2]}`,
        }"
        class="sm:mx-auto"
        width="300"
      />
    </picture>
    <div>
      <div class="my-4">
        <h2 class="font-semibold">Description</h2>
        <p>{{ agent.description }}</p>
      </div>
      <div class="my-4">
        <h2 class="font-semibold">
          Role :
          <span class="font-reguler">{{ agent.role.displayName }}</span>
        </h2>
        <p>{{ agent.role.description }}</p>
      </div>
      <div class="my-4">
        <h2 class="font-semibold">Abilities</h2>
        <div class="grid gap-4">
          <div
            class="grid grid-cols-custom gap-4 sm:gap-8 items-center"
            v-for="ability in agent.abilities"
          >
            <img
              :src="ability.displayIcon"
              :alt="ability.displayName"
              width="40"
              class="bg-zinc-700 p-1 aspect-square"
            />
            <p>{{ ability.description }}</p>
          </div>
        </div>
      </div>
      <RouterLink to="/agents">Back to agents</RouterLink>
    </div>
  </div>
</template>
<script setup>
import { useFetchAgentsStore } from "@/stores/fetchAgents";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const store = useFetchAgentsStore();

store.fetchAgents();
const agent = computed(() => {
  return store.fixAgents.find((agent) => agent.uuid === route.query.id);
});
</script>

<style>
.grid-cols-custom {
  grid-template-columns: repeat(2, auto);
}
</style>
