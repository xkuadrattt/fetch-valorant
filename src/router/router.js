import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/components/pages/Homepage.vue"),
  },
  {
    path: "/agents",
    component: () => import("@/components/pages/AgentsPage.vue"),
  },
  {
    path: "/detailagent",
    component: () => import("@/components/pages/DetailAgent.vue"),
  },
  {
    path: "/weapons",
    component: () => import("@/components/template/WeaponCard.vue"),
  },
  {
    path: "/detailweapon",
    component: () => import("@/components/pages/DetailWeapon.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
