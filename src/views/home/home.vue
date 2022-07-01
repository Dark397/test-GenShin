<template>
<div class="con" @load="test">
  <div class="vague"></div>
  <Sidebar/>
  <Top/>
  <Region/>
  <div class="home">
    <div class="loading-text">{{load}}%</div>
  </div>
</div>
</template>

<script>
import Sidebar from '../../components/sidebar.vue'
import Region from './region.vue'
import Top from './title.vue'
export default {
  name: "Home",
  components:{
    Region,
    Top,
    Sidebar
},
  data() {
    return {
      load: 0,
      bodyBgImage:'url('+require('../../assets/images/home.png')+')'
    };
  },
  mounted(){
    this.test(),
    this.setBodyBackGround()
  },
  methods: {
    test() {
      const loadText = document.querySelector(".loading-text");
      const vague = document.querySelector(".vague");

      let load = 0;
      let int = setInterval(blurring, 30);
      function blurring() {
        load++;
        if (load > 99) {
          clearInterval(int);
          loadText.style.display = 'none';
          vague.style.display = 'none';
        }
        loadText.innerText = `${load}%`;
        loadText.style.opacity = scale(load, 0, 100, 1, 0);
        vague.style.filter = `blur(${scale(load, 0, 100, 0, 0)}px)`;
        vague.style.opacity = scale(load, 0, 100, 1, 0);

      }
      const scale = (num, in_min, in_max, out_min, out_max) => {
        return (
          ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
        );
      };
    },
    setBodyBackGround(){
      document.body.style.background = 'no-repeat'
      document.body.style.backgroundSize = 'cover'
      document.body.style.backgroundAttachment = 'fixed'
      document.body.style.backgroundImage = this.bodyBgImage

    },
    clearBodyBackGround () {
      document.body.style.backgroundImage = ''
    }
  },
};
</script>

<style scoped>
@import "../../assets/css/home.css";
.d{
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: skyblue;

}
</style>