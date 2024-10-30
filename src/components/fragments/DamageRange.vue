<template>
  <div v-for="(dmgRange, index) in damageRanges" :key="index">
    <span class="font-semibold text-gray-800"
      >Range {{ dmgRange.rangeStartMeters }} to
      {{ dmgRange.rangeEndMeters }}</span
    >
    <StatDisplay label="Body Damage" :value="dmgRange.bodyDamage" />
    <StatDisplay label="Head Damage" :value="dmgRange.headDamage" />
    <StatDisplay label="Leg Damage" :value="dmgRange.legDamage" />
  </div>
</template>

<script setup>
import StatDisplay from "./StatDisplay.vue";
defineProps({ damageRanges: Array });
</script>
