<template>
    <div>
      <div class="bannerBlog">
        <img src="../assets/blog/banner.svg" alt="banner" />
        <div class="bannerBlog__intro">
          <span class="bannerBlog__title">Articles & News</span>
          <div class="bannerBlog__breadcrumbs">
            <a href="#"> Home </a>
            /
            <a href="#"> Blog </a>
          </div>
        </div>
      </div>

      <div class="blogPageBlock center">
        <div class="blogPageBlock__latestPost">
          <span class="blogPageBlock__latestPost__header">Latest Post</span>
          <div class="blogPageBlock__latestPost__post">
            <img
              class="blogPageBlock__latestPost__post__img"
              src="../assets/blog/postImg1.svg"
              alt="postImg1"
            />
            <div class="blogPageBlock__latestPost__post__content">
              <p class="blogPageBlock__latestPost__post__content__title">
                Low Cost Latest Invented Interior Designing Ideas
              </p>
              <p class="blogPageBlock__latestPost__post__content__text">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpis dignissim maximus.posuere in.Contrary to popular belief.
                <br />
                <br />Lorem Ipsum is not simply random text. It has roots in a
                piece of classica.
              </p>
            </div>
          </div>
        </div>
        <div class="blogPageBlock__new center">
          <span class="blogPageBlock__news__header">Articles & News</span>
          <newsBlock />
        </div>
      </div>
  </div>
</template>

<script>
import newsBlock from "./universal/News.vue";

export default {
  name: "HomePage",
  components: {
    newsBlock,
  },
  props: {},
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
  font-family: 'DM Serif Display';
  font-size: 50px;
}

.blogPageBlock {
  display: flex;
  flex-direction: column;
}

.blogPageBlock__latestPost {
  margin-top: 200px;
}

.blogPageBlock__latestPost__header {
  font-family: 'DM Serif Display';
  font-size: 50px;
}

.blogPageBlock__news__header {
  font-family: 'DM Serif Display';
  font-size: 50px;
}

.blogPageBlock__latestPost__post {
  display: flex;
  margin-top: 44px;
}

.blogPageBlock__latestPost__post__img {
  border: 0px solid rgba(231, 231, 231, 1);
  border-radius: 60px;
}

.blogPageBlock__latestPost__post__content {
  padding-top: 60px;
  padding-left: 65px;
  padding-right: 100px;
}
.blogPageBlock__latestPost__post__content__title {
  font-family: 'DM Serif Display';
  font-size: 25px;
}

.blogPageBlock__latestPost__post__content__text {
  font-size: 22px;
}

.blogPageBlock__new {
  margin-top: 200px;
}

.blogPageBlock__news {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
</style>
