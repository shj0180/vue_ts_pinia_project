import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";

import layout from '@/layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: layout,
      redirect: '/dashboard',
      children: [
        {
          path: "dashboard",
          name: "dashboard",
          component: () => import('@/views/dashboard/index.vue'),
          meta: {
            isshow_dashboard: true,
            title: '大盘管理'
          },
        }
      ]
    },
    {
      path: "/appication",
      component: layout,
      children: [
        {
          path: "appversion",
          name: "appversion",
          component: () => import('@/views/application/AppVersion.vue'),
          meta: {
            isshow_appication: true,
            title: '应用版本'
          },
        },
        {
          path: "appconfig",
          name: "appconfig",
          component: () => import('@/views/application/AppConfig.vue'),
          meta: {
            isshow_appication: true,
            title: '应用配置'
          },
        }
      ]
    },
    {
      path: "/db",
      component: layout,
      children: [
        {
          path: "dbversion",
          name: "dbversion",
          component: () => import('@/views/db/DBVersion.vue'),
          meta: {
            isshow_db: true,
            title: '数据库版本'
          },
        },
        
      ]
    },
    {
      path: "/timetrace",
      component: layout,
      children: [
        {
          path: "timetrace",
          name: "timetrace",
          component: () => import('@/views/timetrace/TimeTrace.vue'),
          meta: {
            isshow_time: true,
            title: '耗时追踪'
          },
        },
        
      ]
    },
    {
      path: "/user",
      component: layout,
      children: [
        {
          path: "user",
          name: "user",
          component: () => import('@/views/user/index.vue'),
          meta: {
            isshow_user: true,
            title: '用户管理'
          },
        },
        
      ]
    }

    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router;
