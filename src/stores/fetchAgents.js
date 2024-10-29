import { fetchData } from "@/utils/asyncfn";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useFetchAgentsStore = defineStore("fetchAgentsStore", () => {
  const agents = ref([]);
  const fixAgents = ref([]);

  const fetchAgents = async () => {
    try {
      const response = await fetchData("https://valorant-api.com/v1/agents");
      agents.value = response;
      if (agents.value.length > 9) {
        agents.value.splice(9, 1);
      }
      fixAgents.value = [...agents.value];
    } catch (error) {
      console.log(error.message);
    }
  };

  return {
    agents,
    fixAgents,
    fetchAgents,
  };
});
