<template>
  <div
    class="bg-cover bg-center min-h-screen bg-[url('@/assets/img/bg-valorant.png')] py-20"
  >
    <div class="text-center mt-16 text-xl sm:text-3xl tracking-wide">
      <h1 class="font-bold capitalize mb-2">take care of your mental health</h1>
      <h1 class="font-bold capitalize">by playing valorant</h1>
    </div>
    <div class="flex gap-4 mt-4 justify-center">
      <RouterLink
        to="/agents"
        class="px-4 py-2 bg-cyan-200 hover:bg-cyan-400 rounded-lg"
        >See Agents</RouterLink
      >
      <RouterLink
        to="/weapons"
        class="px-4 py-2 border border-violet-500 bg-white hover:bg-violet-200 rounded-lg"
        >Prepare Weapons</RouterLink
      >
    </div>
  </div>
</template>
