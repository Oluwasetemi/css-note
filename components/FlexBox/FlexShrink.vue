<template>
  <main>
    <h1 class="flexshrink-header">Adjust Flex-Shrink Values</h1>
    <div class="controls">
      <div>
        <label>Item 1 (flex-shrink: {{ shrink1 }})</label>
        <input type="range" min="0" max="3" v-model.number="shrink1" />
      </div>
      <div>
        <label>Item 2 (flex-shrink: {{ shrink2 }})</label>
        <input type="range" min="0" max="3" v-model.number="shrink2" />
      </div>
      <div>
        <label>Item 3 (flex-shrink: {{ shrink3 }})</label>
        <input type="range" min="0" max="3" v-model.number="shrink3" />
      </div>
    </div>
    <div class="flexshrink-container">
      <div class="flexshrink-item flex-item1" :style="{ flexShrink: shrink1 }">
        Item 1
      </div>
      <div class="flexshrink-item flex-item2" :style="{ flexShrink: shrink2 }">
        Item 2
      </div>
      <div class="flexshrink-item flex-item3" :style="{ flexShrink: shrink3 }">
        Item 3
      </div>
    </div>
  </main>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const shrink1 = ref(1);
    const shrink2 = ref(1);
    const shrink3 = ref(1);

    return {
      shrink1,
      shrink2,
      shrink3,
    };
  },
};
</script>

<style>
.flexshrink-header {
  text-align: center;
  margin-block-end: 2rem;
  background-color: rgb(233, 220, 203);
}
.flexshrink-container {
  display: flex;
  width: 100%;
  height: 100px;
  border: 3px solid #000;
  margin-top: 20px;
}

.flexshrink-item {
  padding: 10px;
  color: white;
  text-align: center;
  border: 1px solid #ccf518;
}

.flex-item1 {
  background-color: #ff6b6b;
  width: 500px;
}

.flex-item2 {
  background-color: #4ecdc4;
  width: 500px;
}

.flex-item3 {
  background-color: #1a535c;
  width: 500px;
}

.controls {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

.controls div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
