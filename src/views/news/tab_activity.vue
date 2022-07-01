<template>
    <div class="tab_news">
        <ul>
            <li v-for="(item,index) in tab_news"  :key="index">
                <img :src="item.img" alt="">
                <div class="tab_news-text">
                    <div class="tab_news-title">
                        {{item.news_title}}
                    </div>
                    <div class="tab_news-data">
                        {{item.news_data}}
                </div>
                </div>
                
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'tab_activity',
    data() {
        return {
            tab_news: [
                {
                    img:('https://webstatic.mihoyo.com/upload/contentweb/2022/02/28/ccf9369b857554c25d1c8aa25b24bff5_1145480204036642487.jpg'),
                    news_title:'《原神》「神工天巧」活动即将开启',
                    news_data:'2022/02/28'
                },
                {
                    img:('https://uploadstatic.mihoyo.com/contentweb/20201102/2020110211322962802.jpg'),
                    news_title:'「岩港奇珍行记」网页活动说明',
                    news_data:'2020/11/02'
                },
                {
                    img:('https://ys.mihoyo.com/main/_nuxt/img/37207c1.jpg'),
                    news_title:'“在尘世的相逢”抖音《原神》公测主播招募',
                    news_data:'2020/09/28'
                },
                {
                    img:('https://ys.mihoyo.com/main/_nuxt/img/37207c1.jpg'),
                    news_title:'“在尘世的相逢”快手直播《原神》主播招募活动开启',
                    news_data:'2020/09/16'
                },
            ],
        };
    },
}
</script>

<style>
@import '../../assets/css/tab_news.css';
</style>