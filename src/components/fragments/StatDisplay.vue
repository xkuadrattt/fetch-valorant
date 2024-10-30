<template>
  <div class="grid grid-cols-2 gap-2">
    <div>{{ label }}</div>
    <div>{{ value || defaultText }}</div>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  value: [String, Number],
  defaultText: {
    type: String,
    default: "No data available",
  },
});
</script>
