<template>
  <div class="blogBlock__blogs center">
    <p v-if="filteredProjects.length === 0" class="noProjects"> There are no such projects now </p>
    <div v-for="projectsItem in filteredProjects" :key="projectsItem.img" class="blogBlock__blog">
      <img
        class="blogBlock__blog__img"
        :src="projectsItem.img"
        :alt="projectsItem.img"
      />
      <div>
        <p class="blogBlock__blog__title">{{ projectsItem.title }}</p>
        <div class="blogBlock__blog__content">
          <p class="blogBlock__blog__path">{{ projectsItem.path }}</p>
          <button class="blogBlock__blog__button">></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectsBlock",
  props: ["filterCategories"],
  data() {
    const projects = [
      {
        img: "/projects/Photo (1).svg",
        title: "Minimal Bedroom",
        path: "Decor / Artchitecture",
        categories: "Bed Room",
      },
      {
        img: "/projects/Photo (2).svg",
        title: "Minimal Bedroom",
        path: "Decor / Artchitecture",
        categories: "Bed Room",
      },
      {
        img: "/projects/Photo (3).svg",
        title: "Classic Minimal Bedroom",
        path: "Decor / Artchitecture",
        categories: "Bed Room",
      },
      {
        img: "/projects/Photo (4).svg",
        title: "Modern Bedroom",
        path: "Decor / Artchitecture",
        categories: "Bed Room",
      },
      {
        img: "/projects/Photo (5).svg",
        title: "Minimal Bedroom table",
        path: "Decor / Artchitecture",
        categories: "Bed Room",
      },
      {
        img: "/projects/Photo (6).svg",
        title: "System Table",
        path: "Decor / Artchitecture",
        categories: "Bed Room",
      },
      {
        img: "/projects/Photo (7).svg",
        title: "Modern Medroom",
        path: "Decor / Artchitecture",
        categories: "Bed Room",
      },
      {
        img: "/projects/Photo (8).svg",
        title: "Modern Medroom",
        path: "Decor / Artchitecture",
        categories: "Bed Room",
      },
    ];
    return {
      projects,
    };
  },
  computed: {
    filteredProjects() {
      let result = [];
      this.projects.forEach(projectsItem => {
        if (projectsItem.categories === this.filterCategories || this.filterCategories === "") {
          result.push(projectsItem);
        }
      });
      console.log(this.filterCategories);
      return result;
    }
  }
};
</script>

<style scoped>
.blogBlock__blogs {
  margin-top: 44px;
  display: grid;
  grid-template-columns: auto auto;
  gap: 20px;
}

.blogBlock__blog {
  padding: 20px;
  padding-bottom: 40px;
}

.blogBlock__blog__content {
  display: flex;
  justify-content: space-between;
}

.blogBlock__blog__title {
  margin-top: 20px;
  font-family: "DM Serif Display";
  font-size: 25px;
  font-weight: 400;
}

.blogBlock__blog__path {
  margin-top: 20px;
  font-size: 22px;
  font-weight: 400;
}

.blogBlock__blog__button {
  width: 52px;
  height: 52px;
  background-color: rgba(244, 240, 236, 1);
  border: none;
  border-radius: 50%;
}

.blogBlock__blog__img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.noProjects {
  text-align: center;
  color: rgba(205, 162, 116, 1);
  font-size: 25px;
}
</style>
