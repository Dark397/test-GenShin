<template>
  <div class="news">
    <Sidebar />
    <NewsTop/>
    <NewsTab/>
  </div>
</template>

<script>
import NewsTop from "./news-top.vue"
import NewsTab from "./news-tab.vue"
import Sidebar from "../../components/sidebar.vue";
export default {
  name: "news",
  components: {
    Sidebar,
    NewsTab,
    NewsTop
  },
  
};
</script>

<style>
.news {
    width: 100%;
    height: 100%;
    background-color: #f0f0f0;
}
</style>