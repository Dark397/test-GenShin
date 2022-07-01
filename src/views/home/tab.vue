<template>
    <div class="tab">
        <div class="tab-top">
            <div class="one" :class="{ active: current == 'md' }" @click="current = 'md'" active-class="active"></div>
            <div class="two" :class="{ active: current == 'ly' }" @click="current = 'ly'" active-class="active"></div>
            <div class="three" :class="{ active: current == 'dq' }" @click="current = 'dq'" active-class="active"></div>
        </div>
        <component :is="current" class="tab-btm"></component>
        <div class="tab-lest">
            <div class="tab-lest-more" @click="jump">
                <span>查看更多</span>
            </div>
        </div>
    </div>
</template>

<script>
import dq from './daoqi.vue'
import ly from './liyue.vue'
import md from './mengde.vue'
export default {
    name: 'Tab',
    data: function () {
        return {
            current: 'md'
        }

    },
    components: {
        md,
        ly,
        dq
    },
    methods:{
        jump(){
            this.$router.push({path:'/Role'})
        }
    }
}
</script>

<style scoped>
@import '../../assets/css/tab.css';
</style>