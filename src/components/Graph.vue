<template>
  <div class="App">
    <h1>Popularity of the top 10 rated movies</h1>

    <Chart
      class="chart"
      :data-set="finalResult"
      :margin-left="45"
      :margin-top="40"
      :tick-count="15"
      :bar-padding="0.3"
    />
  </div>
</template>

<script>
import Chart from "./Chart.vue";
import storage from "../storage.js";
import TopMovie from "../services/config";
import _ from "lodash";

export default {
  name: "App",
  components: {
    Chart,
  },

  data: () => ({
    movies: [],
    movies2: [],
    result: [],
    finalResult: [],
  }),

  mounted() {
    TopMovie.list().then((response) => {
      this.movies = response.data.results;
      this.fillTopRated(this.movies);
    });
  },

  methods: {
    fillTopRated(m) {
      for (let i = 0; i < 10; i++) {
        this.movies2.push(m[i].title + "," + m[i].popularity);
      }
  
      this.result = this.movies2.toString().split(",");
      this.finalResult = _.chunk(this.result, 2);
    },
  },
};
</script>

<style scoped>
.chart {
  margin: 40px auto 0;
  display: block;
}
</style>
