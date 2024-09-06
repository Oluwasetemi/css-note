<template>
  <main>
    <h1 class="flexgrow-header">Adjust Flex-Grow Values</h1>
    <div class="controls">
      <div>
        <label>Item 1 (flex-grow: {{ grow1 }})</label>
        <input type="range" min="0" max="10" v-model="grow1" />
      </div>
      <div>
        <label>Item 2 (flex-grow: {{ grow2 }})</label>
        <input type="range" min="0" max="10" v-model="grow2" />
      </div>
      <div>
        <label>Item 3 (flex-grow: {{ grow3 }})</label>
        <input type="range" min="0" max="10" v-model="grow3" />
      </div>
    </div>
    <div class="flex-container">
      <div class="flex-item item1" :style="{ flexGrow: grow1 }">Item 1</div>
      <div class="flex-item item2" :style="{ flexGrow: grow2 }">Item 2</div>
      <div class="flex-item item3" :style="{ flexGrow: grow3 }">Item 3</div>
    </div>
  </main>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const grow1 = ref(1);
    const grow2 = ref(1);
    const grow3 = ref(1);

    return {
      grow1,
      grow2,
      grow3,
    };
  },
};
</script>

<style>
.flexgrow-header {
  text-align: center;
  margin-block-end: 2rem;
  background-color: rgb(233, 220, 203);
}
.flex-container {
  display: flex;
  width: 100%;
  height: 100px;
  border: 1px solid #ccc;
  margin-top: 20px;
}

.flex-item {
  padding: 10px;
  color: white;
  text-align: center;
}

.item1 {
  background-color: #ff6b6b;
}

.item2 {
  background-color: #4ecdc4;
}

.item3 {
  background-color: #1a535c;
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
