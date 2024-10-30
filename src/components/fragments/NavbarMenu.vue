<template>
  <header class="bg-white/80 backdrop-blur-md fixed top-0 left-0 right-0 z-10">
    <div class="container flex justify-between py-2">
      <RouterLink to="/">
        <span class="text-gray-800 text-xl font-medium">
          Good<span class="text-violet-600 font-semibold cursor-default"
            >Valorant</span
          >
        </span>
      </RouterLink>

      <nav class="flex gap-6">
        <RouterLink
          to="/agents"
          class="text-gray-700 hover:text-blue-600 transition"
        >
          Agents
        </RouterLink>
        <RouterLink
          to="/weapons"
          class="text-gray-700 hover:text-blue-600 transition"
        >
          Weapons
        </RouterLink>
      </nav>
    </div>
  </header>
</template>
