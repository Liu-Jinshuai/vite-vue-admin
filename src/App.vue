<script setup>
import { computed } from 'vue';
import MainLayout from '@/layout/MainLayout.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const cacheNames = computed(() => {
  const name = route.meta.cache;
  return name ? [name] : [];
});
</script>

<template>
  <div class="main">
    <main-layout>
      <router-view v-slot="{ Component }">
        <keep-alive v-if="cacheNames.length" :include="cacheNames">
          <component :is="Component" />
        </keep-alive>
        <component v-else :is="Component" />
      </router-view>
    </main-layout>
  </div>
</template>

<style scoped>
.main {
  height: 100%;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
