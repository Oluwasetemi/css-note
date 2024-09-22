<template>
  <main>
    <h1 class="transform-header">Adjust Transform Values</h1>
    <div class="controls">
      <div>
        <label>Rotate (degrees: {{ rotate }}°)</label>
        <input type="range" min="0" max="360" v-model="rotate" />
      </div>
      <div>
        <label>Scale (factor: {{ scale }})</label>
        <input type="range" min="0.1" max="3" step="0.1" v-model="scale" />
      </div>
      <div>
        <label>Translate X (pixels: {{ translateX }})</label>
        <input type="range" min="-200" max="200" v-model="translateX" />
      </div>
      <div>
        <label>Translate Y (pixels: {{ translateY }})</label>
        <input type="range" min="-200" max="200" v-model="translateY" />
      </div>
    </div>
    <div class="transform-container">
      <div
        class="transform-item"
        :style="{
          transform:
            'rotate(' +
            rotate +
            'deg) scale(' +
            scale +
            ') translate(' +
            translateX +
            'px, ' +
            translateY +
            'px)',
        }"
      >
        Transform Me!
      </div>
    </div>
  </main>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const rotate = ref(0);
    const scale = ref(1);
    const translateX = ref(0);
    const translateY = ref(0);

    return {
      rotate,
      scale,
      translateX,
      translateY,
    };
  },
};
</script>

<style>
.transform-header {
  text-align: center;
  margin-bottom: 2rem;
  background-color: rgb(233, 220, 203);
}

.transform-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  margin-top: 20px;
}

.transform-item {
  width: 100px;
  height: 100px;
  background-color: #4ecdc4;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  text-align: center;
  transition: transform 0.3s ease;
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
