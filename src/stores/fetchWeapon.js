import { fetchData } from "@/utils/asyncfn";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useFetchWeaponStore = defineStore("fetchWeaponStore", () => {
  const weapons = ref([]);
  const isLoading = ref(false);

  const fetchWeapon = async () => {
    isLoading.value = true;
    try {
      const response = await fetchData("https://valorant-api.com/v1/weapons");
      weapons.value = response;
      console.log("pinia fetch weapon", response);
    } catch (error) {
      console.log(error.message);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    weapons,
    fetchWeapon,
  };
});
