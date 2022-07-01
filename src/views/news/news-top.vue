<template>
    <div class="news-top">
      <div class="news-top-list">
        <ul>
          <li v-for="(item,index) in news_list"  :key="index">
            <a href="">
              <div class="news-top-list-img">
                <img :src="item.imgs" alt="" />
              </div>
              <div class="news-top-list_text">
                {{item.list_text}}
              </div>
              <div class="news-top-list_btm">
                <span class="news-top-list_btm-one">
                    {{item.btm_one}}
                </span>
                <span class="news-top-list_btm-two">
                    {{item.btm_two}}
                </span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
    name:'news-top',
    data() {
    return {
        news_list:[
            {
                imgs:('https://ys.mihoyo.com/main/_nuxt/img/37207c1.jpg'),
                list_text:'提瓦特美食札记 | “好巧啊…”——八重神子生日快乐！',
                btm_one:'2022/06/27',
                btm_two:'新闻'
            },
            {
                imgs:('https://webstatic.mihoyo.com/upload/contentweb/2022/06/27/c3052e311fb574f994dcf73170bf444a_8500914714785180119.jpg'),
                list_text:'《原神》「炉心机造」活动即将开启',
                btm_one:'2022/06/27',
                btm_two:'新闻'
            },
            {
                imgs:('https://webstatic.mihoyo.com/upload/contentweb/2022/06/27/6201e90c41ea497ed458e34cb1db3718_5886532361781383352.jpg'),
                list_text:'八重神子生日快乐｜如你所见，我刚读完八重堂递交过来的小说原稿',
                btm_one:'2022/06/27',
                btm_two:'新闻'
            }
        ]
    };
  },
}
</script>

<style>
@import '../../assets/css/news-top.css';
</style>