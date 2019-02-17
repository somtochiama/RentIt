import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import axios from "axios";
// import { isContext } from "vm";

export default new Vuex.Store({
  state: {
    properties: [],
    searchResults: []
  },
  mutations: {
    updateProperties(state, properties) {
      state.properties = properties;
    },
    updateSearchResults(state, results) {
      state.searchResults = results;
    }
  },
  actions: {
    getAllProperties(context) {
      console.log("Making");
      axios
        .get("http://localhost:3000/api/property/all")
        .then(response => {
          console.log("Gettign properties", response.data);
          context.commit("updateProperties", response.data);
        })
        .catch(err => {
          console.log("Error", err);
        });
    }
  }
  // actions: {}
});
