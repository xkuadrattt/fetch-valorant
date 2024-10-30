<template>
  <div>
    <span class="text-gray-500">ADS</span>
    <StatDisplay label="Burst Count" :value="stats?.burstCount" />
    <StatDisplay label="Fire Rate" :value="stats?.fireRate" />
    <StatDisplay
      label="First Bullet Accuracy"
      :value="stats?.firstBulletAccuracy"
    />
    <StatDisplay
      label="Run Speed Multiplier"
      :value="stats?.runSpeedMultiplier"
    />
    <StatDisplay label="Zoom Multiplier" :value="stats?.zoomMultiplier" />
  </div>
</template>

<script setup>
import StatDisplay from "./StatDisplay.vue";
defineProps({ stats: Object });
</script>
