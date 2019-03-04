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
      axios
        .get("api/property/all")
        .then(response => {
          context.commit("updateProperties", response.data.data);
        })
        .catch(err => {
          console.log("Error", err);
        });
    }
  }
  // actions: {}
});
