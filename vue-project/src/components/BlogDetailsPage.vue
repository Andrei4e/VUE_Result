<template>
  <div>
    <div class="bannerBlog">
      <img src="../assets/blogDetails/Banner.svg" alt="banner" />
    </div>

    <div class="blogDetailsPageBlock center">
      <div class="blogDetailsPageBlock__post">
        <span class="blogDetailsPageBlock__post__header"
          >Let’s Get Solution for Building Construction Work</span
        >
        <img
          class="blogDetailsPageBlock__post__img"
          src="../assets/blogDetails/blog1-1.svg"
          alt="postImg1"
        />
        <div class="blogDetailsPageBlock__post__date">
          <span>26 December,2022</span>
          <span>Interior / Home / Decore</span>
        </div>
        <p class="blogDetailsPageBlock__post__content">
          Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
          turpmaximus.posuere in.Contrary to popular belief.There are many
          variations of passages of Lorem Ipsum available, but the majority have
          suffered alteration in some form, by injecthumour, or randomised words
          which don't look even slightly believable.
          <br />
          <br />
          Embarrassing hidden in the middle of text. All the Lorem Ipsum
          generators on the Internet tend to repeat predefined chunks as
          necessary.
        </p>
        <div class="blogDetailsPageBlock__post__quotes">
          <p class="blogDetailsPageBlock__post__quotes__quote">“</p>
          <p class="blogDetailsPageBlock__post__quotes__text">
            The details are not the details. They make the design.
          </p>
        </div>
        <p class="blogDetailsPageBlock__post__content">
          Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
          turpmaximus.posuere in.Contrary to popular belief.There are many
          variations of passages of Lorem Ipsum available, but the majority have
          suffered alteration in some form, by injecthumour, or randomised words
          which don't look even slightly believable.
          <br />
          <br />
          Embarrassing hidden in the middle of text. All the Lorem Ipsum
          generators on the Internet tend to repeat predefined chunks as
          necessary.
        </p>
        <img
          class="blogDetailsPageBlock__post__img"
          src="../assets/blogDetails/blog1-2.svg"
          alt="postImg1"
        />
        <p class="blogDetailsPageBlock__post__content">
          Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
          turpmaximus.posuere in.Contrary to popular belief.There are many
          variations of passages of Lorem Ipsum available, but the majority have
          suffered.
        </p>
      </div>
      <tagsBlock @selectionCangedTag="onSelectionCangedTag"></tagsBlock>
    </div>

    <newsBlock :filterTag="selectedTag" />
  </div>
  
</template>

<script>
import tagsBlock from "./universal/tags.vue";
import newsBlock from "./universal/News.vue";

export default {
  name: "HomePage",
  components: {
    tagsBlock,
    newsBlock,
  },
  props: {},
  data() {
    const selectedTag = "";
    return {
      selectedTag
    };
  },
  methods: {
    onSelectionCangedTag(e) {
      console.log(e);
      this.selectedTag = e;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
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
  font-family: 'DM Serif Display';
  font-size: 50px;
}

.blogDetailsPageBlock {
  display: grid;
  grid-template-columns: 2fr 1fr;
  color: rgba(41, 47, 54, 1);
}

.blogDetailsPageBlock__post {
  margin-top: 200px;
}

.blogDetailsPageBlock__post__header {
  font-family: 'DM Serif Display';
  font-size: 50px;
}

.blogDetailsPageBlock__post__img {
  margin-top: 20px;
  border: 0px solid rgba(231, 231, 231, 1);
  border-radius: 60px;
}

.blogDetailsPageBlock__post__date {
  display: flex;
  justify-content: space-between;
  margin-top: 44px;
}

.blogDetailsPageBlock__post__content {
  font-family: "Jost";
  text-align: justify;
  margin-top: 44px;
  font-size: 22px;
}

.blogDetailsPageBlock__post__quotes {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(244, 240, 236, 1);
  color: rgba(205, 162, 116, 1);
  margin-top: 44px;
  text-align: center;
  min-height: 270px;
  border-radius: 40px;
}

.blogDetailsPageBlock__post__quotes__quote {
  font-family: 'DM Serif Display';
  font-size: 200px;
  font-style: italic;
  width: 345px;
  line-height: 150px;
  transform: rotate(180deg);
}

.blogDetailsPageBlock__post__quotes__text {
  font-family: 'DM Serif Display';
  font-size: 25px;
  font-style: italic;
  width: 345px;
}
</style>
