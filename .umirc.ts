import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/header/',
      routes: [
        {
          path: '/',
          component: '@/pages/home/',
        },
      ],
    },
  ],
  fastRefresh: {},
});
