<script setup lang="ts">
import { entries } from '../changelog'
</script>

<template>
  <div class="h-screen overflow-y-auto">
  <div class="max-w-2xl mx-auto px-6 py-8">
    <header class="mb-10">
      <router-link
        to="/2"
        class="inline-block mb-4 text-sm text-blue-500 no-underline hover:underline"
      >
        Back to slides toc
      </router-link>
      <h1 class="text-3xl font-bold m-0 mb-1">
        Course <span class="text-gradient font-hand">Changelog</span>
      </h1>
      <p class="m-0 text-gray-500 dark:text-gray-400">
        Version history of CSS Class Notes
      </p>
    </header>

    <ul class="list-none p-0 m-0 relative before:content-[''] before:absolute before:left-[10px] before:inset-y-0 before:w-0.5 before:bg-gray-200 dark:before:bg-gray-700">
      <li
        v-for="entry in entries"
        :key="entry.version"
        class="flex gap-5 mb-6 relative"
      >
        <div
          class="w-[22px] h-[22px] rounded-full bg-blue-500 flex-shrink-0 mt-3 z-1"
        />
        <div
          class="flex-1 p-5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm"
        >
          <div class="flex items-center gap-3 mb-3">
            <span
              class="bg-blue-500 text-white px-[10px] py-[2px] rounded-full text-xs font-bold"
            >
              {{ entry.version }}
            </span>
            <span class="text-sm text-gray-500 dark:text-gray-400">{{
              entry.date
            }}</span>
          </div>
          <ul class="m-0 pl-5 leading-relaxed text-gray-700 dark:text-gray-300">
            <li v-for="change in entry.changes" :key="change">{{ change }}</li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
  </div>
</template>
