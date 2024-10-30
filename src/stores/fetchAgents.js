import { fetchData } from "@/utils/asyncfn";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useFetchAgentsStore = defineStore("fetchAgentsStore", () => {
  const agents = ref([]);
  const fixAgents = ref([]);
  const isLoading = ref(false);

  const fetchAgents = async () => {
    isLoading.value = true;
    try {
      const response = await fetchData("https://valorant-api.com/v1/agents");
      agents.value = response;
      if (agents.value.length > 9) {
        agents.value.splice(9, 1);
      }
      fixAgents.value = [...agents.value];
    } catch (error) {
      console.log(error.message);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    agents,
    fixAgents,
    isLoading,
    fetchAgents,
  };
});
