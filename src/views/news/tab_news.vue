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
    name:'tab_news',
    data() {
        return {
            tab_news: [
                {
                    img:('https://ys.mihoyo.com/main/_nuxt/img/37207c1.jpg'),
                    news_title:'提瓦特美食札记 | “好巧啊…”——八重神子生日快乐！',
                    news_data:'2022/06/27'
                },
                {
                    img:('https://webstatic.mihoyo.com/upload/contentweb/2022/06/27/c3052e311fb574f994dcf73170bf444a_8500914714785180119.jpg'),
                    news_title:'《原神》「炉心机造」活动即将开启',
                    news_data:'2022/06/27'
                },
                {
                    img:('https://webstatic.mihoyo.com/upload/contentweb/2022/06/27/6201e90c41ea497ed458e34cb1db3718_5886532361781383352.jpg'),
                    news_title:'八重神子生日快乐｜如你所见，我刚读完八重堂递交过来的小说原稿',
                    news_data:'2022/06/27'
                },
                {
                    img:('https://ys.mihoyo.com/main/_nuxt/img/37207c1.jpg'),
                    news_title:'提瓦特美食札记 | “呵呵…”——雷电将军生日快乐',
                    news_data:'2022/06/26'
                },
                {
                    img:('https://webstatic.mihoyo.com/upload/contentweb/2022/06/26/0a0b53b059d03e271b1df664e86528f9_7941222223997361676.jpg'),
                    news_title:'雷电将军生日快乐｜你能记得与我有关的瞬间，我很高兴。',
                    news_data:'2022/06/26'
                }
            ],
        };
    },
}
</script>

<style>
@import '../../assets/css/tab_news.css';
</style>