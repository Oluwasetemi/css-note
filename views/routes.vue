<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const sections = [
  { name: 'Getting Started', slug: 'getting-started' },
  { name: 'Selectors', slug: 'selectors' },
  { name: 'Specificity', slug: 'specificity' },
  { name: 'Box Model', slug: 'box-model' },
  { name: 'Inheritance', slug: 'inheritance' },
  { name: 'Colors & Units', slug: 'colors-units-gradients' },
  { name: 'CSS Variables', slug: 'css-variables-or-custom-properties' },
  { name: 'Typography', slug: 'typography-in-css' },
  { name: 'FlexBox', slug: 'flexbox' },
  { name: 'Grid Layout', slug: 'grid-layout' },
  { name: 'Positioned Layout', slug: 'positioned-layout' },
  { name: 'Anchor Positioning', slug: 'anchor-positioning' },
  { name: 'Debugging', slug: 'debugging-in-browser' },
  { name: 'CSS Frameworks', slug: 'css-frameworks' },
]

const tools = [
  { name: '🌐 HTML Playground', route: '/html-playground', color: 'text-orange-500 dark:text-orange-400', border: 'hover:border-orange-500 dark:hover:border-orange-400' },
  { name: '▶ JS/TS Playground', route: '/playground', color: 'text-green-500 dark:text-green-400', border: 'hover:border-green-500 dark:hover:border-green-400' },
]

function goToSlide(slug: string) {
  router.push(`/${slug}`)
}
</script>

<template>
  <div class="max-w-3xl mx-auto px-6 py-8">
    <header class="mb-8">
      <router-link
        to="/"
        class="inline-block mb-4 text-sm text-blue-500 no-underline hover:underline"
      >
        ← Back to slides
      </router-link>
      <h1 class="text-3xl font-bold m-0 mb-1">
        Course <span class="text-gradient font-hand">Sections</span>
      </h1>
      <p class="m-0 text-gray-500 dark:text-gray-400">
        Jump to any topic in the presentation
      </p>
    </header>

    <div class="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
      <button
        v-for="section in sections"
        :key="section.slug"
        class="flex items-center justify-between px-5 py-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-left cursor-pointer transition-all duration-200 shadow-sm hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-md"
        @click="goToSlide(section.slug)"
      >
        <span class="font-semibold text-sm text-gray-800 dark:text-gray-200">{{ section.name }}</span>
        <span class="text-blue-500 dark:text-blue-400 text-lg">→</span>
      </button>
    </div>

    <section class="mt-10">
      <h2 class="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
        Tools
      </h2>
      <div class="flex flex-wrap gap-4">
        <button
          v-for="tool in tools"
          :key="tool.route"
          class="flex items-center gap-2 px-5 py-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md"
          :class="[tool.color, tool.border]"
          @click="router.push(tool.route)"
        >
          <span class="font-semibold text-sm">{{ tool.name }}</span>
          <span class="text-lg">→</span>
        </button>
      </div>
    </section>

    <footer class="mt-8 text-center">
      <router-link
        to="/changelog"
        class="text-sm text-gray-500 dark:text-gray-400 no-underline hover:text-blue-500 dark:hover:text-blue-400 hover:underline"
      >
        View Changelog
      </router-link>
    </footer>
  </div>
</template>
