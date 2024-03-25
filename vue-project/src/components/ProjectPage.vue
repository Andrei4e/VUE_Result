<template>
  <div>
    <div class="bannerBlog">
      <img src="../assets/project/banner.svg" alt="banner" />
      <div class="bannerBlog__intro">
        <span class="bannerBlog__title">Our Project</span>
        <div class="bannerBlog__breadcrumbs">
          <a href="#"> Home </a>
          /
          <a href="#"> Project </a>
        </div>
      </div>
    </div>

    <div class="projectPageBlock center">
      <div class="projectPageBlock__categories">
        <button
          class="projectPageBlock__categories__button"
          @click="onClickCategories"
        >Bathroom</button>
        <button
          class="projectPageBlock__categories__button"
          @click="onClickCategories"
        >Bed Room</button>
        <button
          class="projectPageBlock__categories__button"
          @click="onClickCategories"
        >Kitchan</button>
        <button
          class="projectPageBlock__categories__button"
          @click="onClickCategories"
        >Living Area</button>
      </div>
    </div>

    <ProjectsBlock :filterCategories="selectedCategories" />
  </div>
</template>

<script>
import ProjectsBlock from "./universal/Projects.vue";

export default {
  name: "ProjectPage",
  components: {
    ProjectsBlock
  },
  props: {},
  data() {
    const selectedCategories = "";
    return {
      selectedCategories
    };
  },
  methods: {
    onClickCategories(e) {
      e.target.parentNode.childNodes.forEach((tag) => {
        tag.className = "projectPageBlock__categories__button";
      });
      e.target.className = "blogDetailsPageBlock__tags__selectedButton";
      this.selectedCategories = e.target.textContent;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  color: rgba(41, 47, 54, 1);
}
.center {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}
</style>

<style scoped>
.bannerBlog {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 44px;
  position: relative;
  font-family: "Jost";
  overflow: hidden;
}

.bannerBlog__intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 500px;
  min-height: 180px;
  border: 0px solid rgba(255, 255, 255, 1);
  border-top-right-radius: 60px;
  border-top-left-radius: 60px;
  justify-content: center;
  background-color: rgba(255, 255, 255, 1);
  position: absolute;
  margin-top: 180px;
}

.bannerBlog__title {
  font-family: "DM Serif Display";
  font-size: 50px;
}

.prjectPageBlock {
  display: flex;
  flex-direction: column;
}

.projectPageBlock__categories {
  display: flex;
  justify-content: center;
  margin-top: 200px;
  margin-left: 220px;
  margin-right: 220px;
  max-width: 880px;
  border: 1px solid rgba(205, 162, 116, 1);
  border-radius: 15px;
}

.projectPageBlock__categories__button {
  background-color: #fff;
  font-size: 18px;
  font-weight: 600;
  width: 220px;
  padding-top: 20px;
  padding-bottom: 20px;
  border: 0px;
  border-radius: 15px;
}

.projectPageBlock__categories__button:hover {
  border: 1px solid rgba(205, 162, 116, 1);
}

.blogDetailsPageBlock__tags__selectedButton {
  background-color: rgba(205, 162, 116, 1);
  font-size: 18px;
  font-weight: 600;
  width: 220px;
  padding-top: 20px;
  padding-bottom: 20px;
  border: 0px;
  border-radius: 15px;
  color: #fff;
}
</style>
