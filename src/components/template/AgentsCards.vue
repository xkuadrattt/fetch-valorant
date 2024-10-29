<template>
  <div
    v-for="agent in fixedDataAgents"
    :key="agent.uuid"
    class="h-[450px] min-w-[200px] grid"
    :style="{
      background: `url(${agent.fullPortrait}), url(${agent.background})`,
      backgroundColor: `#${agent.backgroundGradientColors[1]}`,
      backgroundSize: 'cover, contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }"
    @click="handleToDetailAgent(agent.uuid)"
  >
    <h1
      class="self-start mt-4 bg-white/70 text-2xl font-bold relative left-8 w-max"
    >
      {{ agent.displayName }}
      <span class="font-thin text-sm text-gray-700">click for detail</span>
    </h1>
    <div class="m-8 self-end bg-white p-4 relative rounded-lg shadow-lg">
      <h4 class="absolute bg-white/50 px-3 -top-3 font-semibold">Abilities</h4>
      <div class="flex gap-4 justify-around">
        <picture v-for="ability in agent.abilities">
          <source
            v-if="ability.displayIcon !== null"
            :srcset="`${ability.displayIcon}`"
          />
          <img
            v-if="ability.displayIcon"
            :src="`${ability.displayIcon}`"
            alt="display icon"
            width="40"
            class="bg-zinc-700 p-1"
          />
        </picture>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFetchAgentsStore } from "@/stores/fetchAgents";
import { computed, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useFetchAgentsStore();

const fixedDataAgents = computed(() => store.fixAgents);

const handleToDetailAgent = (id) => {
  router.push(`/detailagent?id=${id}`);
};

onMounted(() => {
  store.fetchAgents();
});
</script>
