<template>
  <div class="my-20" v-if="weaponByUuid">
    <h1 class="text-xl sm:text-2xl font-bold text-gray-800">
      {{ weaponByUuid.displayName }}
    </h1>
    <span class="text-gray-600">{{
      weaponByUuid?.shopData?.category ?? "No shop data or melee category"
    }}</span>
    <img
      class="mx-auto my-4 p-6 border border-gray-300 bg-gray-50 rounded-md"
      :src="weaponByUuid.displayIcon"
      :alt="weaponByUuid.displayName"
    />
    <div>
      <span class="font-semibold text-gray-700">Stats</span>
      <div class="flex flex-col gap-6 md:flex-row">
        <ADSStats :stats="weaponByUuid?.weaponStats?.adsStats" />
        <DamageRange :damageRanges="weaponByUuid?.weaponStats?.damageRanges" />
        <OtherStats :stats="weaponByUuid?.weaponStats" />
      </div>
    </div>
    <RouterLink
      to="/weapons"
      class="text-cyan-600 hover:text-cyan-800 border border-cyan-600 rounded px-2 py-1 mt-4 inline-block"
    >
      Back to Weapon
    </RouterLink>
  </div>
  <div v-else>We are Sorry. Website will recover soon ❤</div>
</template>

<script setup>
import ADSStats from "../fragments/ADSStats.vue";
import DamageRange from "../fragments/DamageRange.vue";
import OtherStats from "../fragments/OtherStats.vue";
import { useFetchWeaponStore } from "@/stores/fetchWeapon";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const store = useFetchWeaponStore();

store.fetchWeapon();

const weaponByUuid = computed(() => {
  return store.weapons.find((element) => element.uuid === route.query.id);
});
</script>
