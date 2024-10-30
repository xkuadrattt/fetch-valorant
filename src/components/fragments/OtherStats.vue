<template>
  <div>
    <span class="text-gray-500">Other Stats</span>
    <StatDisplay label="Fire Rate" :value="stats?.fireRate" />
    <StatDisplay label="Mag Size" :value="stats?.magazineSize" />
    <StatDisplay label="Air Burst Stats" :value="stats?.airBurstStats" />
    <StatDisplay
      label="Equip Time per Second"
      :value="stats?.equipTimeSeconds"
    />
    <StatDisplay
      label="Reload Time per Second"
      :value="stats?.reloadTimeSeconds"
    />
    <StatDisplay
      label="Run Speed Multiplier"
      :value="stats?.runSpeedMultiplier"
    />
  </div>
</template>

<script setup>
import StatDisplay from "./StatDisplay.vue";
defineProps({ stats: Object });
</script>
