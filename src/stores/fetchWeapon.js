import { fetchData } from "@/utils/asyncfn";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useFetchWeaponStore = defineStore("fetchWeaponStore", () => {
  const weapons = ref([]);

  const fetchWeapon = async () => {
    try {
      const response = await fetchData("https://valorant-api.com/v1/weapons");
      weapons.value = response;
    } catch (error) {
      console.log(error.message);
    }
  };

  return {
    weapons,
    fetchWeapon,
  };
});
