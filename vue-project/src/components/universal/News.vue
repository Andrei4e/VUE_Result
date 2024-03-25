<template>
  <div class="blogBlock__blogs center">
    <div v-for="newsItem in filteredNews()" :key="newsItem.img" class="blogBlock__blog">
      <img
        class="blogBlock__blog__img"
        :src="newsItem.img"
        :alt="newsItem.img"
      />
      <span class="blogBlock__blog__desc">{{ newsItem.tag }}</span>
      <div>
        <p class="blogBlock__blog__title">{{ newsItem.title }}</p>
        <div class="blogBlock__blog__content">
          <p class="blogBlock__blog__date">{{ newsItem.date }}</p>
          <button class="blogBlock__blog__button">></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "newsBlock",
  props: ["filterTag"],
  data() {
    const news = [
      {
        img: "/blog/blog1.svg",
        title: "Let’s Get Solution For Building Construction Work",
        date: "26 December,2022",
        tagId: "Kitchen",
        tag: "Kitchan Design",
      },
      {
        img: "/blog/blog2.svg",
        title: "Low Cost Latest Invented Interior Designing",
        date: "22 December,2022",
        tagId: "Bedroom",
        tag: "Living Design",
      },
      {
        img: "/blog/blog3.svg",
        title: "Best For Any Office & Business Interior Solution",
        date: "25 December,2022",
        tagId: "Building",
        tag: "Interior Design",
      },
      {
        img: "/blog/blog4.svg",
        title: "Let’s Get Solution For Building Construction Work",
        date: "26 December,2022",
        tagId: "Architecture",
        tag: "Kitchan Design",
      },
      {
        img: "/blog/blog5.svg",
        title: "Low Cost Latest Invented Interior Designing",
        date: "22 December,2022",
        tagId: "Kitchen",
        tag: "Living Design",
      },
      {
        img: "/blog/blog6.svg",
        title: "Best For Any Office & Business Interior Solution",
        date: "25 December,2022",
        tagId: "Bedroom",
        tag: "Interior Design",
      },
    ];
    return {
      news,
    };
  },
  methods: {
    filteredNews() {
      let result = [];
      this.news.forEach(newsItem => {
        if (newsItem.tagId === this.filterTag || this.filterTag === "") {
          result.push(newsItem);
        }
      });
      return result;
    },
  },
};
</script>

<style scoped>
.blogBlock__blogs {
  margin-top: 44px;
  max-width: 386px;
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
  font-family: "DM Serif Display";
  font-size: 32px;
  font-weight: 400;
}

.blogBlock__blog__date {
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
