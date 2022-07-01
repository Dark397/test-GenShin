<template>
    <div class="news-tab">
        <div class="news-tab-btn">
            <div class="btn-one" :class="{ active: news_cur == 'tab_news' }" @click="news_cur = 'tab_news'" active-class="active">新闻</div>
            <div class="btn-two" :class="{ active: news_cur == 'tab_notice' }" @click="news_cur = 'tab_notice'" active-class="active">公告</div>
            <div class="btn-three" :class="{ active: news_cur == 'tab_activity' }" @click="news_cur = 'tab_activity'" active-class="active">活动</div>
        </div>
        <component :is="news_cur"></component>
    </div>
</template>

<script>
import tab_activity from './tab_activity.vue'
import tab_notice from './tab_notice.vue'
import tab_news from './tab_news.vue'
export default {
    name:'news-tab',
    components:{
        tab_news,
        tab_notice,
        tab_activity
    },
    data() {
        return {
            news_cur: 'tab_news',
        };
    },
}
</script>

<style>
@import '../../assets/css/news-tab.css';
</style>