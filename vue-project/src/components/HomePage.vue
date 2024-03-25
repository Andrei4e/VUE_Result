<template>
  <div>
    <div class="banner center">
      <img src="../assets/homePage/banner.svg" alt="banner" />
    </div>

    <div class="projectBlock center">
      <div class="projectBlock__header">
        <span>Follow Our Projects</span>
      </div>
      <div class="projectBlock__text">
        <span
          >It is a long established fact that a reader will be distracted by the
          of readable content of page lookings at its layouts points.</span
        >
      </div>
      <div class="projectBlock__projects">
        <div class="projectBlock__project">
          <div>
            <img
              class="projectBlock__project__img"
              src="../assets/homePage/product1.svg"
              alt=""
            />
            <div class="projectBlock__project__content">
              <div>
                <p class="projectBlock__project__title">Modern Kitchan</p>
                <p class="projectBlock__project__desc">Decor / Artchitecture</p>
              </div>
              <button class="projectBlock__project__button">></button>
            </div>
          </div>
        </div>
        <div class="projectBlock__project">
          <div>
            <img
              class="projectBlock__project__img"
              src="../assets/homePage/product2.svg"
              alt=""
            />
            <div class="projectBlock__project__content">
              <div>
                <p class="projectBlock__project__title">Modern Kitchan</p>
                <p class="projectBlock__project__desc">Decor / Artchitecture</p>
              </div>
              <button class="projectBlock__project__button">></button>
            </div>
          </div>
        </div>
        <div class="projectBlock__project">
          <div>
            <img
              class="projectBlock__project__img"
              src="../assets/homePage/product3.svg"
              alt=""
            />
            <div class="projectBlock__project__content">
              <div>
                <p class="projectBlock__project__title">Modern Kitchan</p>
                <p class="projectBlock__project__desc">Decor / Artchitecture</p>
              </div>
              <button class="projectBlock__project__button">></button>
            </div>
          </div>
        </div>
        <div class="projectBlock__project">
          <div>
            <img
              class="projectBlock__project__img"
              src="../assets/homePage/product4.svg"
              alt=""
            />
            <div class="projectBlock__project__content">
              <div>
                <p class="projectBlock__project__title">Modern Kitchan</p>
                <p class="projectBlock__project__desc">Decor / Artchitecture</p>
              </div>
              <button class="projectBlock__project__button">></button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="counter center">
      <div class="counter__count">
        <p class="counter__countValue">12</p>
        <p class="counter__title">Years Of Experiance</p>
      </div>
      <div class="counter__count">
        <p class="counter__countValue">85</p>
        <p class="counter__title">Success Project</p>
      </div>
      <div class="counter__count">
        <p class="counter__countValue">15</p>
        <p class="counter__title">Active Project</p>
      </div>
      <div class="counter__count">
        <p class="counter__countValue">95</p>
        <p class="counter__title">Happy CUstomers</p>
      </div>
    </div>

    <div class="blogBlock center">
      <div class="blogBlock__header">
        <span>Articles & News</span>
      </div>
      <div class="blogBlock__text">
        <span
          >It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts the points
          of using.</span
        >
      </div>
      <newsBlock></newsBlock>
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
   /* font-family: "Jost"; */
  color: rgba(41, 47, 54, 1);
}
.center {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}
</style>

<style scoped>
.banner {
  display: flex;
  align-items: center;
  margin-top: 44px;
}
.banner > img {
  border-radius: 70px;
}

.projectBlock {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 44px;
}

.projectBlock__header {
  font-family: 'DM Serif Display';
  font-size: 50px;
  font-weight: 400;
  text-align: center;
  max-width: 737px;
}

.projectBlock__text {
  font-family: "Jost";
  font-size: 22px;
  font-weight: 400;
  text-align: center;
  max-width: 737px;
}

.projectBlock__projects {
  margin-top: 44px;
  display: flex;
  flex-wrap: wrap;
  gap: 100px;

}

.projectBlock__project {
  flex-basis: calc(50% - 50px);
}

.projectBlock__project__img {
  max-width: 100%;
}

.projectBlock__project__title {
  font-family: 'DM Serif Display';
  font-size: 25px;
  font-weight: 400;
}

.projectBlock__project__desc {
  font-family: "Jost";
  font-size: 22px;
  font-weight: 400;
}

.projectBlock__project__button {
  width: 70px;
  height: 70px;
  background-color: rgba(244, 240, 236, 1);
  border: none;
  border-radius: 50%;
}

.projectBlock__project__content {
  display: flex;
  justify-content: space-between;
}

.counter {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 44px;
  background-color: rgba(244, 240, 236, 1);
}

.counter__count {
  padding: 50px;
  text-align: center;
}

.counter__count:not(:first-child) {
  border-left: 1px solid rgba(205, 162, 116, 1);
}

.counter__countValue {
  font-family: 'DM Serif Display';
  font-size: 85px;
  font-weight: 400;
  color: rgba(205, 162, 116, 1);
}

.counter__title {
  font-family: "Jost";
  font-size: 22px;
}

.blogBlock__header {
  font-family: 'DM Serif Display';
  font-size: 25px;
  font-weight: 400;
}

.blogBlock {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 44px;
}

.blogBlock__header {
  font-family: 'DM Serif Display';
  font-size: 50px;
  font-weight: 400;
  text-align: center;
  max-width: 737px;
}

.blogBlock__text {
  font-family: "Jost";
  font-size: 22px;
  font-weight: 400;
  text-align: center;
  max-width: 737px;
}

.blogBlock__blogs {
  margin-top: 44px;
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 20px;
}

.blogBlock__blog {
  padding: 20px;
  padding-bottom: 40px;
  border: 1px solid rgba(231, 231, 231, 1);
  border-radius: 80px;
  position: relative;
}

.blogBlock__blog__desc {
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  position: absolute;
  width: 115px;
  height: 40px;
  top: 250px;
  left: 40px;
  background-color: white;
}

.blogBlock__blog__content {
  display: flex;
  justify-content: space-between;
}

.blogBlock__blog__title {
  margin-top: 10px;
  font-family: 'DM Serif Display';
  font-size: 32px;
  font-weight: 400;
}

.blogBlock__blog__date {
  font-family: "Jost";
  margin-top: 20px;
  font-size: 16px;
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
  border-top: 1px solid rgba(231, 231, 231, 1);
  border-top-right-radius: 60px;
  border-top-left-radius: 60px;
}
</style>
