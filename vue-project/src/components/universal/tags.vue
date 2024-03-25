<template>
  <div class="blogDetailsPageBlock__tags">
    <span class="blogDetailsPageBlock__tags__header">Tags</span>
    <div class="blogDetailsPageBlock__tags__list">
      <span
        class="blogDetailsPageBlock__tags__tag"
        v-for="tag in tags"
        :key="tag"
        @click="onClickTag"
        >{{ tag }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "tagsBlock",
  props: [],
  data() {
    const tags = [
      "Kitchen",
      "Bedroom",
      "Building",
      "Architecture",
      "Kitchen Planning",
    ];
    const selectedTag = "";
    return {
      tags,
      selectedTag,
    };
  },
  methods: {
    onClickTag(e) {
      e.target.parentNode.childNodes.forEach((tag) => {
        tag.className = "blogDetailsPageBlock__tags__tag";
      });
      e.target.className = "blogDetailsPageBlock__tags__selectedTag";
      this.selectedTag = e.target.textContent;
      this.$emit("selectionCangedTag", this.selectedTag);
    },
  },
};
</script>

<style scoped>
.blogDetailsPageBlock__tags {
  margin-top: 200px;
  margin-left: 60px;
}

.blogDetailsPageBlock__tags__header {
  font-family: "DM Serif Display";
  font-size: 25px;
}

.blogDetailsPageBlock__tags__list {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 20px;
}

.blogDetailsPageBlock__tags__tag {
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: rgba(244, 240, 236, 1);
  font-size: 18px;
  border-radius: 10px;
}

.blogDetailsPageBlock__tags__tag:hover {
  transform: scale(1.05);
  cursor: pointer;
}

.blogDetailsPageBlock__tags__selectedTag {
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 18px;
  border-radius: 10px;
  background-color: black;
  color: white;
}

.blogDetailsPageBlock__tags__selectedTag:hover {
  transform: scale(1.05);
  cursor: pointer;
}
</style>
