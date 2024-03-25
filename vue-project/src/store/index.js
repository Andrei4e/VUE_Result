import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state() {
    return {
      projectsList: [
        {
          id: 1,
          title: "Minimal Look Bedrooms",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
          img: [
            {
                id: 1,
                path:"/projectDetails/Photo1.svg"
            }
          ],
        },
      ],
    };
  },
  mutations: {
    SET_PROJECTS(state, projects) {
      state.projectsList = projects;
    },
  },
});

export default store;
