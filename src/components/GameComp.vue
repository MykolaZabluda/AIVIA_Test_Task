<template>
  <div>
    <label for="sizeX">Size X:</label>
    <input id="sizeX" type="number" v-model="sizeX" @change="drawGrid" />
    <label for="sizeY">Size Y:</label>
    <input id="sizeY" type="number" v-model="sizeY" @change="drawGrid" />

    <div class="grid-container">
      <div v-for="(row, y) in grid" :key="y" class="row">
        <div v-for="(col, x) in row" :key="x" class="square"
             :style="{ backgroundColor: col ? 'blue' : 'white' }"
             @mouseover="toggleColor(y, x)"
             @mouseleave="toggleColor(y, x)">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sizeX: 0,
      sizeY: 0,
      grid: [],
    };
  },
  methods: {
    drawGrid() {
      this.grid = Array.from({ length: this.sizeY }, () => Array(this.sizeX).fill(false));
    },
    toggleColor(y, x) {
      this.grid[y][x] = !this.grid[y][x];
    },
  },
};
</script>

<style>
.grid-container {
  display: flex;
  flex-direction: column;
  background-color: #333;
}

.row {
  display: flex;
}

.square {
  width: 36px;
  height: 36px;
  margin: 1px;
  cursor: pointer;
}
</style>
