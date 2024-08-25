<template>
  <div class="flexbox-container">
    <h1>Practice FlexBox: Justify Content and Align Items</h1>
    <div class="controls">
      <label>
        flex-direction:
        <select v-model="flexDirection">
          <option value="row">row</option>
          <option value="row-reverse">row-reverse</option>
          <option value="column">column</option>
          <option value="column-reverse">column-reverse</option>
        </select>
      </label>

      <label>
        justify-content:
        <select v-model="justifyContent">
          <option value="flex-start">flex-start</option>
          <option value="flex-end">flex-end</option>
          <option value="center">center</option>
          <option value="space-between">space-between</option>
          <option value="space-around">space-around</option>
          <option value="space-evenly">space-evenly</option>
        </select>
      </label>

      <label>
        align-items:
        <select v-model="alignItems">
          <option value="stretch">stretch</option>
          <option value="flex-start">flex-start</option>
          <option value="flex-end">flex-end</option>
          <option value="center">center</option>
        </select>
      </label>
    </div>

    <section
      class="flexbox"
      :style="{
        flexDirection,
        justifyContent,
        alignItems,
        flexWrap,
        alignContent,
      }"
    >
      <div class="box">1</div>
      <div class="box">2</div>
      <div class="box">3</div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "stretch",
    };
  },
};
</script>

<style scoped>
.flexbox-container {
  text-align: center;
  display: grid;
  place-items: center;
}

.controls {
  margin-bottom: 20px;
  background-color: orange;
  padding: 10px;
  border-radius: 5px;
  display: grid;
  grid-template-columns: repeat(3, 287px);
  gap: 5px;
}

label {
  margin: 0 10px;
}

section.flexbox {
  display: flex;
  align-content: space-evenly;
  width: 100%;
  height: 350px;
  border: 2px solid #333;
  padding: 10px;
  gap: 10px;
  background-color: white;
}

.box {
  width: 100px;
  height: 100px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  border-radius: 8px;
}

.box:first-child {
  background-color: red;
}
.box:nth-child(2) {
  background-color: green;
}
.box:nth-child(3) {
  background-color: blue;
}
</style>
