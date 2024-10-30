<template>
  <div class="my-20">
    <div v-if="store.isLoading" class="text-violet-500">
      Weapons are preparing
    </div>
    <h1 class="text-xl font-bold text-cyan-700 my-4">Weapons</h1>
    <div class="grid py-8 gap-4 grid-auto-custom bg-stone-100">
      <div
        class="shadow-lg rounded-lg p-4"
        v-for="weapon in store.weapons"
        :key="weapon.uuid"
        @click="handleToWeaponDetail(weapon.uuid)"
      >
        <h1 class="text-xl sm:text-2xl font-bold">{{ weapon.displayName }}</h1>
        <p class="text-sm font-thin">
          {{ weapon.shopData && weapon.shopData.category }}
          <span class="text-sm text-gray-600">click for detail</span>
        </p>
        <img :src="weapon.displayIcon" :alt="weapon.displayName" class="my-4" />
        <div>
          <span class="font-semibold">Stats</span>
          <div class="grid grid-cols-2">
            <div>
              <span class="text-gray-500">ADS</span>
              <div class="grid grid-cols-2 gap-2">
                <div>Burst Count</div>
                <div>
                  {{
                    weapon.weaponStats?.adsStats?.burstCount ?? "no Burst stats"
                  }}
                </div>
              </div>
              <div class="grid grid-cols-2 gap-2">
                <div>Fire Rate</div>
                <div>
                  {{
                    weapon.weaponStats?.adsStats?.fireRate ??
                    "no fire rate stats"
                  }}
                </div>
              </div>
            </div>
            <div>
              <span class="text-gray-500">Other Stat</span>
              <div class="grid grid-cols-2 gap-2">
                <div>Fire Rate</div>
                <div>
                  {{ weapon.weaponStats?.fireRate ?? "no fire rate stats" }}
                </div>
              </div>
              <div class="grid grid-cols-2 gap-2">
                <div>Mag Size</div>
                <div>
                  {{
                    weapon.weaponStats?.magazineSize ?? "no magazine size stats"
                  }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFetchWeaponStore } from "@/stores/fetchWeapon";
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const store = useFetchWeaponStore();
const router = useRouter();

console.log(store.weapons);

const handleToWeaponDetail = (id) => {
  router.push(`/detailweapon?id=${id}`);
};

onMounted(() => {
  store.fetchWeapon();
});
</script>

<style>
.grid-auto-custom {
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
}
</style>
