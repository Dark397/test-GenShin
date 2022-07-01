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
    name:'tab_notice',
    data() {
        return {
            tab_news: [
                {
                    img:('https://uploadstatic.mihoyo.com/contentweb/20201009/2020100912021670098.png'),
                    news_title:'《原神》祈愿概率公示',
                },
                {
                    img:('https://ys.mihoyo.com/main/_nuxt/img/37207c1.jpg'),
                    news_title:'《原神》2.5版本「薄樱初绽时」更新通知',
                    news_data:'2022/02/16'
                },
                {
                    img:('https://ys.mihoyo.com/main/_nuxt/img/37207c1.jpg'),
                    news_title:'「流光飞彩」海灯节答谢邮件发放问题处理说明',
                    news_data:'2022/02/09'
                },
                {
                    img:('https://ys.mihoyo.com/main/_nuxt/img/37207c1.jpg'),
                    news_title:'《原神》2.4版本「飞彩镌流年」更新说明',
                    news_data:'2021/12/31'
                },
            ],
        };
    },
}
</script>

<style>
@import '../../assets/css/tab_news.css';
</style>