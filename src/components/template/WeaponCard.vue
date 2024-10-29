<template></template>

<script setup>
import { useFetchWeaponStore } from "@/stores/fetchWeapon";
import { onMounted } from "vue";

const store = useFetchWeaponStore();

onMounted(() => {
  store.fetchWeapon();
  console.log(store.weapons);
});
</script>
