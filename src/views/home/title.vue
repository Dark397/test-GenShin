<template>
  <div class="top" @mouseover="a" @mouseout="b">
    <div class="title1" >
      <h1>Welcome</h1>
      <h1>Strange And Respectable Traveler</h1>
      <h2>hope you can find like-minded partners on your journey</h2>
    </div>
    <div class="title2" >
      <h1>欢迎</h1>
      <h1>陌生而可敬的旅行者</h1>
      <h2>希望你能在旅途中寻找到志同道合的伙伴</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Top",
  methods:{
    a(){
      const title1 = document.querySelector(".title1");
      const title2 = document.querySelector(".title2")
      title1.style.display = 'none';
      title2.style.display = 'flex';
    },
    b(){
      const title1 = document.querySelector(".title1");
      const title2 = document.querySelector(".title2")
      title1.style.display = 'flex';
      title2.style.display = 'none';
    },
  }
}
</script>

<style>
@import '../../assets/css/test.css'
</style>